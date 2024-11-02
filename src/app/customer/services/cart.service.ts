import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []; // Initialize an array to hold cart items

  constructor() { }

  addToCart(product: any): void {
    this.cartItems.push(product); // Add the product to the cart
  }

  getCartItems(): any[] {
    return this.cartItems; // Return the current items in the cart
  }

  clearCart(): void {
    this.cartItems = []; // Clear the cart
  }
}
