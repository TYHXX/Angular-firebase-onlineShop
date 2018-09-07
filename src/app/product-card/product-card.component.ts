import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;

  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;

  constructor() { }


}
