import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Category } from '../../interfaces';

@Component({
  selector: 'masTi-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }
}
