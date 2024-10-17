import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'masTi-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'Printed T-Shirts', image: 'assets/category1.jpg' },
    { id: 2, name: 'Custom Mugs', image: 'assets/category2.jpg' },
    { id: 3, name: 'Photo Frames', image: 'assets/category3.jpg' },
    { id: 4, name: 'More Gifts', image: 'assets/category4.jpg' },
  ];

  constructor(private router: Router) { }

  viewCategoryProducts(categoryId: number) {
    this.router.navigate(['/customer/products', categoryId]); // Pass route parameter
  }
}
