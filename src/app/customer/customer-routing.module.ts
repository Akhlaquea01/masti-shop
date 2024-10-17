import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  // Wrap all customer pages inside layout
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products/:categoryId',
        component: ProductListComponent,
        canActivate: [AuthGuard],
      },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
