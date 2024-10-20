import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductsComponent } from './home/products/products.component';
import { BreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    LayoutComponent,
    LoginComponent,
    HeroComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    BreadcrumbComponent
  ]
})
export class CustomerModule { }
