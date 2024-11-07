import { Injectable } from '@angular/core';
import { Cart } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishListItems: Cart[] = [
    {
      id: '1',
      user: 'u001',
      items: [
        {
          product: '102',
          quantity: 1,
          price: 90,
          selectedColor: 'Salmon',
          selectedSize: 'M',
          name: 'Throwback Hip Bag',
          brand: 'BrandY',
          url: '#',
          image: 'https://assets.ajio.com/medias/sys_master/root/20230427/JPVF/64497d9b42f9e729d751f23a/-473Wx593H-466098941-multi-MODEL.jpg',
          imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        },
        // Add more items as needed
      ],
    },
  ];

  getWishlistItems(): any[] {
    const userWishlist = this.wishListItems.find((item) => item.user === 'u001');
    return userWishlist ? userWishlist.items : [];
  }

  addToWishlist(userId: string, product: any): void {
    const userWishlist = this.wishListItems.find((wishlist) => wishlist.user === userId);
    if (userWishlist) {
      userWishlist.items.push(product);
    } else {
      this.wishListItems.push({ id: '2', user: userId, items: [product] });
    }
  }

  removeFromWishlist(productId: string): void {
    const userWishlist = this.wishListItems.find((wishlist) => wishlist.user === 'u001');
    if (userWishlist) {
      userWishlist.items = userWishlist.items.filter((item) => item.product !== productId);
    }
  }

  clearWishlist(): void {
    const userWishlist = this.wishListItems.find((wishlist) => wishlist.user === 'u001');
    if (userWishlist) {
      userWishlist.items = [];
    }
  }

}
