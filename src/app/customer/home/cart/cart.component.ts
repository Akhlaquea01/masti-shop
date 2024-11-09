import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../../interfaces';

@Component({
  selector: 'masTi-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  open: boolean = false;
  cartItems: Cart | any;
  storedUser: any;

  // Calculate subtotal based on the new structure
  get subtotal() {
    if (!this.cartItems || !this.cartItems.items) {
      return 0;
    }
    return this.cartItems.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  toggleSidebar() {
    this.open = !this.open;
  }

  removeProduct(productId: string) {
    // Remove item from the cartItems based on productId
    if (this.cartItems.items.length) {
      this.cartItems.items = this.cartItems.items.filter(item => item.product !== productId);
    }
  }

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    // Initialize the cartItems as per the new structure
    this.storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    this.cartItems = this.cartService.getCartItems(this.storedUser.id);
  }

  clearCart(): void {
    this.cartService.clearCart(this.storedUser.id); // Clear cart items
    this.cartItems = []; // Reset cart items
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
    this.open = false;
  }
}
