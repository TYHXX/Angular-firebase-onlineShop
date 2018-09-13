import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from 'src/app/shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
     if (!this.shoppingCart) { return 0; }

     const item = this.shoppingCart.itemsMap[this.product.key];
     return item ? item.quantity : 0;
  }
}
