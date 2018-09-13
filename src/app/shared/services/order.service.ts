import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private db: AngularFireDatabase) { }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId) {
    return this.db.list('/orders', 
    ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }
}
