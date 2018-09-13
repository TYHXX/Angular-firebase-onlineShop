import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = categoryService.getAll();
    // categoryService.getCategories()
    // .subscribe(x => {
    //   this.categories$ = x;
    //   console.log(this.categories$);
    // });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(take(1))
      .subscribe(p => this.product = p);
    }
  }

  save(product) {
    // console.log(product);
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.creat(product);
    }
    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return; } 

    console.log(this.id);
    this.productService.detele(this.id);
    this.router.navigate(['/admin/products']);    
  }

  ngOnInit() {
  }

}
