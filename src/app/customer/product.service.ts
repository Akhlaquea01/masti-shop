import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() { }

  // Sample data for categories
  getCategories() {
    return [
      { id: 1, name: 'Printed T-Shirts', image: 'https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png', colSpan: 1, rowSpan: 1 },
      { id: 2, name: 'Shoes', image: 'https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png', colSpan: 2, rowSpan: 1 },
      { id: 3, name: 'Watches', image: 'https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image', colSpan: 2, rowSpan: 1 },
      { id: 4, name: 'Accessories', image: 'https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png', colSpan: 1, rowSpan: 1 }
    ];
  }

  // Sample data for products
  getProductsByCategory(categoryId: number) {
    // Replace with actual data fetching logic
    const products = {
      1: [
        { id: 1, name: 'Funny T-Shirt', price: 20, description: 'A funny t-shirt.' },
        { id: 2, name: 'Cool T-Shirt', price: 25, description: 'A cool t-shirt.' },
      ],
      2: [
        { id: 3, name: 'Coffee Mug', price: 10, description: 'A stylish coffee mug.' },
        { id: 4, name: 'Travel Mug', price: 15, description: 'A travel coffee mug.' },
      ],
      3: [
        { id: 5, name: 'Photo Frame', price: 30, description: 'A beautiful photo frame.' },
      ],
    };
    return products[categoryId] || [];
  }

  getProductById(productId: number) {
    // Replace with actual data fetching logic
    const products = [
      { id: 1, name: 'Funny T-Shirt', price: 20, description: 'A funny t-shirt.' },
      { id: 2, name: 'Cool T-Shirt', price: 25, description: 'A cool t-shirt.' },
      { id: 3, name: 'Coffee Mug', price: 10, description: 'A stylish coffee mug.' },
      { id: 4, name: 'Travel Mug', price: 15, description: 'A travel coffee mug.' },
      { id: 5, name: 'Photo Frame', price: 30, description: 'A beautiful photo frame.' },
    ];
    return products.find((product) => product.id === productId);
  }
  private products = [
    { id: 1, name: 'Gift Item 1', price: 20, image: 'path_to_image_1' },
    { id: 2, name: 'Gift Item 2', price: 30, image: 'path_to_image_2' },
    { id: 3, name: 'Gift Item 3', price: 25, image: 'path_to_image_3' },
    // Add more products as needed
  ];
  getProducts(): any[] {
    return this.products; // Return the product array
  }
}
