import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
interface Category {
  id: number;
  name: string;
  image: string;
  rowSpan?: number; // Number of rows the card should span
  colSpan?: number; // Number of columns the card should span
}
@Component({
  selector: 'masTi-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories(); // Fetch categories
  }
}
