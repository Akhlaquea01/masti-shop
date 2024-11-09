import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    LoginComponent
  ],
  imports: [
    FooterComponent,
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
