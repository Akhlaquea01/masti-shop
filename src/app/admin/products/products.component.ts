import { Component } from '@angular/core';
interface Product {
  name: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'masTi-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    { name: 'T-shirt', price: 500, stock: 10 },
    { name: 'Mug', price: 300, stock: 5 },
    { name: 'Frame', price: 200, stock: 8 },
  ];

  newProduct: Product = { name: '', price: 0, stock: 0 };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, stock: 0 };
    }
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
}
