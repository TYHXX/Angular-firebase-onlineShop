import { Order } from './../models/order';
import { AuthService } from './../auth.service';
import { ShoppingCart } from './../models/shopping-cart';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {}; 
  cart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
    });
    this.userSubscription = 
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  
  async placeOrder() {
    // tslint:disable-next-line:prefer-const
    let order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    // console.log(order);
    this.router.navigate(['/order-success', result.key]);
  }    
}
