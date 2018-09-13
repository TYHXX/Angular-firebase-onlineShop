import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Product } from 'src/app/shared/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  // async getCart(): Promise<Observable<ShoppingCart>> {
  //   const cartId = await this.getOrCreatCartId();
  //   return this.db.object('/shopping-carts/' + cartId).snapshotChanges().pipe(
  //     map(x => new ShoppingCart(x.payload))
  //   );
  // }
  
  async getCart() {
    const cartId = await this.getOrCreatCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges();
  }

  async addToCart(product: Product) {
    // const cartId = await this.getOrCreatCartId();
    // const item = this.getItem(cartId, product.key);

    // item.snapshotChanges().pipe(take(1))
    // .subscribe(data => {
    //   // if (data.payload.exists()) {
    //   //   item.update({quantity: data.payload.child('/quantity').val() + 1});
    //   // } else {
    //   //   item.set({product: product, quantity: 1});
    //   // }
    //   item.update({product: product, 
    //     quantity: (data.payload.child('/quantity').val() || 0) + 1});
    // });
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  async clearCart() {
    // tslint:disable-next-line:prefer-const
    let cartId = await this.getOrCreatCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  
  private creat() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }


  
  

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreatCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }
    
    const result = await this.creat();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  

  private async updateItemQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreatCartId();
    const item = this.getItem(cartId, product.key);

    item.snapshotChanges().pipe(take(1))
    .subscribe(data => {
      const quantity = (data.payload.child('/quantity').val() || 0) + change ;
      if (quantity === 0) { 
        item.remove(); 
      } else {
        item.update({product: product, 
          quantity: quantity});
      }
      
    });
  }

}
