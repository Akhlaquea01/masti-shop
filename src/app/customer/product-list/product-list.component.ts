import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'masTi-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'T-Shirt A', category: 1 },
    { id: 2, name: 'Mug B', category: 2 },
    { id: 3, name: 'Frame C', category: 3 },
    { id: 4, name: 'Gift D', category: 4 },
  ];
  filteredProducts = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryId = +params['categoryId']; // Extract categoryId from route
      this.filteredProducts = this.products.filter(
        product => product.category === categoryId
      );
    });
  }
}
