import { ShoppingCartService } from './../shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
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
  cart: any;
  category: string;
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    

    productService.getAll()
    .pipe(switchMap( products => {
      let temp: any[];
      temp = products;
      this.products = temp; 
      return route.queryParamMap;
     })).subscribe(params => {
        this.category = params.get('category');
  
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : 
          this.products;
      });
      
      
    }

    async ngOnInit() {
      this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        this.cart = cart.payload.val();
        // console.log(this.cart);
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
