import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
}
@Component({
  selector: 'masTi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product Name 1',
      brand: 'Brand 1',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Product Name 2',
      brand: 'Brand 2',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Product Name 3',
      brand: 'Brand 3',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Product Name 4',
      brand: 'Brand 4',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Product Name 5',
      brand: 'Brand 5',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Product Name 6',
      brand: 'Brand 6',
      price: '$149',
      originalPrice: '$199',
      imageUrl: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
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
