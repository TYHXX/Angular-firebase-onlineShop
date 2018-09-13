import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'src/app/shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'src/app/shared/services/auth-guard.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { UserService } from 'src/app/shared/services/user.service';

import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule
  ],
  
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]

})
export class SharedModule { }
