import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'masTi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categories: any[] = [
    { id: 1, name: 'Printed T-Shirts', image: 'assets/category1.jpg' },
    { id: 2, name: 'Custom Mugs', image: 'assets/category2.jpg' },
    { id: 3, name: 'Photo Frames', image: 'assets/category3.jpg' },
    { id: 4, name: 'More Gifts', image: 'assets/category4.jpg' },
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories(); // Fetch categories
  }
}
