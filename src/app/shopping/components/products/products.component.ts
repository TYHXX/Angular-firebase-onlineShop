import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[];
  cart: ShoppingCart;
  category: string;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
    .subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
      // this.cart = temp;
      // console.log(this.cart);
    });

  this.productService.getAll()
  .pipe(switchMap( products => {
    let temp: any[];
    temp = products;
    this.products = temp; 
    return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : 
        this.products;
    }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // constructor(
  //   route: ActivatedRoute,
  //   productService: ProductService, 
  //   categoryService: CategoryService) {
  //   productService.getAll().subscribe(products => {
  //     let temp: any[];
  //     temp = products;
  //     this.products = temp;

  //     route.queryParamMap.subscribe(params => {
  //       this.category = params.get('category');
  
  //       this.filteredProducts = (this.category) ?
  //         this.products.filter(p => p.category === this.category) : 
  //         this.products;
  //     });

  //   });

  //   this.categories$ = categoryService.getAll();
  // }

}
