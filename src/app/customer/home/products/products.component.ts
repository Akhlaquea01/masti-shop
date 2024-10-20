import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../interfaces';

@Component({
  selector: 'masTi-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() title: string = 'Products';
  @Input() breadcrumbItems: ({ label: string; url: string; } | { label: string; url?: undefined; })[] = [];
  categoryId: string | null = null;

  constructor(private route: ActivatedRoute,
    private productService: ProductService
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
}
