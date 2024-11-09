import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'masTi-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() title: string = 'Products';
  @Input() breadcrumbItems: ({ label: string; url: string; } | { label: string; url?: undefined; })[] = [];
  categoryId: string | null = null;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['categoryId']) {
        this.categoryId = params['categoryId'];
        this.products = this.productService.getProductsByCategory(this.categoryId);
        this.title = this.productService.getCategoryNameById(this.categoryId);
        this.breadcrumbItems = [
          { label: 'Home', url: '/home' },
          { label: 'Product' } // No URL for the current page
        ];
      }
    })
  }

  onProductClick(productId: string) {
    // Redirect to the product details page
    this.router.navigate(['/product-detail', productId]);
  }
}
