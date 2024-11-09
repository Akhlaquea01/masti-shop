import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { WishListService } from '../../services/wishlist.service';

@Component({
  selector: 'masTi-wish-list',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './wish-list.component.html'
})
export class WishListComponent implements OnInit {
  wishListItems: any[] = []; // Array to store wishlist items fetched from the service
  @Input() open = false;
  @Output() onClose = new EventEmitter();

  constructor(private wishlistService: WishListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.wishListItems = this.wishlistService.getWishlistItems(); // Fetch wishlist items from the service
  }

  toggleSidebar() {
    this.open = !this.open;
    this.onClose.emit(this.open);
  }

  removeFromWishlist(productId: string): void {
    this.wishlistService.removeFromWishlist(productId); // Remove from service
    this.wishListItems = this.wishListItems.filter(item => item.product !== productId); // Update local list
  }

  moveToCart(product: any): void {
    this.removeFromWishlist(product.product);
    this.cartService.addToCart('u001', product);
  }

  clearWishlist(): void {
    this.wishlistService.clearWishlist();
    this.wishListItems = [];
  }
}
