import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AuthGuard } from 'src/app/shared/services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    RouterModule.forChild([
      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard] 
      }
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  providers: [
    AdminAuthGuard,
  ]
})
export class AdminModule { }
