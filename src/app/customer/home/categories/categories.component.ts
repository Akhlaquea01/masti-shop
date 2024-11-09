import { Component } from '@angular/core';
import { Category } from '../../interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'masTi-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }
}
