import { Component } from '@angular/core';
import { Cart, OrderSchema } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'masTi-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  cartItems: Cart;
  totalAmount = 0;
  tax = 0;
  shippingCost = 0;
  orderTotal = 0;
  shippingAddress = {
    name: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
  };
  private cartSubscription!: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItemsUpdate$.subscribe((updated) => {
      if (updated) {
        this.calculateOrderSummary();
      }
    });
    this.loadCartItems();
    this.calculateOrderSummary();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateOrderSummary(): void {
    this.totalAmount = this.cartItems.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.tax = this.totalAmount * 0.09; // Example tax rate of 9%
    this.shippingCost = this.totalAmount > 100 ? 0 : 10; // Free shipping over $100
    this.orderTotal = this.totalAmount + this.tax + this.shippingCost;
  }

  onPlaceOrder(): void {
    const orderItems = this.cartItems.items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      priceAtPurchase: item.price,
    }));

    // Calculate total amount based on cart items
    const totalAmount = orderItems.reduce((total, item) => total + item.quantity * item.priceAtPurchase, 0);

    // Replace 'u001' with actual user ID
    const userId = 'actual_user_id'; // Use actual logged-in user ID here

    // Shipping address data from form, e.g., `this.shippingAddress`
    const shippingAddress = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      // Replace with actual form inputs for address data
    };

    // Construct order schema
    const order: OrderSchema = {
      user: userId,
      items: orderItems,
      totalAmount: totalAmount,
      address: shippingAddress,
      status: 'Pending',
      paymentStatus: 'Not Paid',
    };

    // Send order to backend
    // this.http.post('url', order).subscribe(
    //   (response) => {
    //     console.log('Order placed successfully:', response);
    //     this.cartService.clearCart('u001');
    //   },
    //   (error) => {
    //     console.error('Error placing order:', error);
    //     alert('There was an error processing your order. Please try again.');
    //   }
    // );
  }
}
