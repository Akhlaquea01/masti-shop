import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'masTi-wish-list',
  standalone: true,
  imports: [NgFor,NgIf,CurrencyPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
  cartItems: any[] = [];
  open = false; // Controls the visibility of the sidebar

  products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: 90.00,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.00,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    }
  ];

  get subtotal() {
    return this.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  toggleSidebar() {
    this.open = !this.open;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.toggleSidebar.subscribe(open => this.open = open);
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
