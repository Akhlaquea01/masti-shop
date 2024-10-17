import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login by default
      { path: 'login', component: LoginComponent }, // Add the login route
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protect with AuthGuard
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] }, // Protect with AuthGuard
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] }, // Protect with AuthGuard
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] }, // Protect with AuthGuard
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
