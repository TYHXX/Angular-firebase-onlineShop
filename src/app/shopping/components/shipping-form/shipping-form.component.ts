import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { OrderService } from 'src/app/shared/services/order.service';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Order } from 'src/app/shared/models/order';


@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {}; 
  userSubscription: Subscription;
  userId;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {}

  ngOnInit() {
    this.userSubscription = 
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
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
