import { query } from '@angular/core/src/render3/query';
import { ProductService } from 'src/app/shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(products => {
        const temp: any[] = products;
        this.products = temp; 
        this.initilizaTable(this.products);
        console.log(this.products);
      });
  }

  private initilizaTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0})
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) { return; }
    this.tableResource.query(params)
    .then(items => this.items = items);
  }

  // tslint:disable-next-line:no-shadowed-variable
  filter(query: string) {
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

    console.log(filteredProducts);
    this.initilizaTable(filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
