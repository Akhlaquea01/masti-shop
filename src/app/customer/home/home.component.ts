import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'masTi-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  products: Product[];
  constructor(private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getTrendingProducts();
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
