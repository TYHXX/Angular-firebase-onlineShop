import { Product } from 'src/app/shared/models/product';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;
  // product: Product;
  shoppingCart: ShoppingCart;
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(product: Product) {
    this.shoppingCartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCartService.removeFromCart(product);
  }

  getQuantity(product: Product) {
    if (!this.cart) { return 0; }

    const item = this.cart.itemsMap[product.key];
    // console.log(this.cart.items);
    return item ? item.quantity : 0;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
  
  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      // tslint:disable-next-line:prefer-const
      let data: any;    
      data = temp.payload.child('/items').val();
      // data = temp.payload.val();
      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;
      // console.log('data', data);
      
    });
  }

}
