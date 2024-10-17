import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'masTi-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Get cart items when the component initializes
  }

  clearCart(): void {
    this.cartService.clearCart(); // Clear cart items
    this.cartItems = []; // Reset cart items
  }
  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item); // Remove the item from the local cartItems array
    this.cartService.clearCart(); // Clear the cart in the service
    this.cartItems.forEach(cartItem => this.cartService.addToCart(cartItem)); // Re-add remaining items to the service
  }
}
