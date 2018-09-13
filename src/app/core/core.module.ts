import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbModule,
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [
    BsNavbarComponent,
  ]
})
export class CoreModule { }
