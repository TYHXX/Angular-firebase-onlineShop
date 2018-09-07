import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);
    const cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe( temp => {
      let cart: ShoppingCart;
      let data: any;
      // data = temp.payload.child('/items').val();
      data = temp.payload.val();
      cart = data;
      console.log(cart);
      this.shoppingCartItemCount = 0;
      // tslint:disable-next-line:forin prefer-const
      for ( let productId in cart.items) {
        this.shoppingCartItemCount += cart.items[productId].quantity;
      }
    });
  }
}
