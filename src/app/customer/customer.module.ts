import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './home/cart/cart.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductsComponent } from './home/products/products.component';
import { BreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";
import { ReviewComponent } from './home/review/review.component';
import { RatingComponent } from "../components/rating/rating.component";


@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    LayoutComponent,
    LoginComponent,
    HeroComponent,
    CategoriesComponent,
    ProductsComponent,
    ReviewComponent
  ],
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    BreadcrumbComponent,
    RatingComponent
]
})
export class CustomerModule { }
