import { Injectable } from '@angular/core';
import { Cart } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemsUpdate$ = new Subject<boolean>();
  private cartItems: Cart[] = [{
    id: "929c23bd-59d5-4477-8c47-d617accbd823",
    user: "u001",
    items: [
      {
        product: "101",
        quantity: 1,
        price: 15,
        selectedColor: "Red",
        selectedSize: "S",
        name: "T-shirt",
        brand: "BrandX",
        url: "/product-detail/101",
        image: "https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageAlt: "Image"
      }
    ]
  }];

  constructor() { }

  addToCart(userId: string, product: any): void {
    // Find the user's cart
    const userCart = this.cartItems.find(cart => cart.user === userId);

    // If the user's cart exists, add the product to it
    if (userCart) {
      const existingProduct = userCart.items.find(item => item.product === product.product);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity += product.quantity;
      } else {
        // Add the new product
        userCart.items.push(product);
      }
    } else {
      // If no cart exists for the user, create a new one
      this.cartItems.push({ id: uuidv4(), user: userId, items: [product] });
    }
    this.cartItemsUpdate$.next(true);
  }

  removeFromCart(userId: string, productId: string): void {
    // Find the user's cart
    const userCart = this.cartItems.find(cart => cart.user === userId);

    if (userCart) {
      // Remove the product from the user's cart
      userCart.items = userCart.items.filter(item => item.product !== productId);
    }
  }

  getCartItems(userId: string = "u001"): any {
    // Return the current items in the cart
    const userCart = this.cartItems.find(item => item.user === userId);
    return userCart ? userCart : {};
  }

  clearCart(userId: string): void {
    // Clear the cart for a specific user
    const userCart = this.cartItems.find(cart => cart.user === userId);
    if (userCart) {
      userCart.items = [];
    }
  }

}
