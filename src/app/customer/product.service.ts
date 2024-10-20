import { Injectable } from '@angular/core';
import { Category, Product, Slide } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Graphic Tee',
      brand: 'GiftShop Apparel',
      price: '$20',
      originalPrice: '$30',
      categoryId: 'tshirts',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww'
    },
    {
      id: '2',
      name: 'Custom Quote Tee',
      brand: 'GiftShop Apparel',
      price: '$25',
      originalPrice: '$35',
      categoryId: 'tshirts',
      imageUrl: 'https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww'
    },

    // Mugs
    {
      id: '3',
      name: 'Personalized Mug',
      brand: 'GiftShop Ceramics',
      price: '$10',
      originalPrice: '$15',
      categoryId: 'mugs',
      imageUrl: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVnfGVufDB8fDB8fHww'
    },
    {
      id: '4',
      name: 'Magic Color Mug',
      brand: 'GiftShop Ceramics',
      price: '$12',
      originalPrice: '$18',
      categoryId: 'mugs',
      imageUrl: 'https://images.unsplash.com/photo-1620767188495-98ce5155895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVnfGVufDB8fDB8fHww'
    },

    // Frames
    {
      id: '5',
      name: 'Wooden Photo Frame',
      brand: 'GiftShop Home',
      price: '$18',
      originalPrice: '$25',
      categoryId: 'frames',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681701679562-9911f560a6be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    // Accessories
    {
      id: '6',
      name: 'Leather Keychain',
      brand: 'GiftShop Accessories',
      price: '$8',
      originalPrice: '$12',
      categoryId: 'accessories',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681487704787-1d79d9f7ed0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D'
    }
  ];

  private slides: Slide[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?crop&w=500&q=60',
      title: 'Diwali Sale - Up to 50% Off',
      discount: '50% Off',
      cashback: '10% Cashback on Credit Cards',
      promoText: '*Terms & Conditions Apply',
      badge: 'Big Diwali Sale',
      badgeColor: 'bg-yellow-400 text-blue-900',
      logo:'assets/images/offer.jpg'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?crop&w=500&q=60',
      title: 'Mega Discount on Gifts',
      discount: '30% Off',
      cashback: '5% Cashback on All Orders',
      promoText: '*Limited Time Offer',
      badge: 'Mega Sale',
      badgeColor: 'bg-pink-400 text-white',
      logo: 'assets/images/offer.jpg'
    }

  ]

  private categories: Category[] = [
    {
      id: 'tshirts',
      name: 'Printed T-Shirts',
      image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 'mugs',
      name: 'Custom Mugs',
      image: 'https://images.unsplash.com/photo-1474667689933-0ff72b3d16e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMG11Z3N8ZW58MHx8MHx8fDA%3D',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 'frames',
      name: 'Photo Frames',
      image: 'https://images.unsplash.com/photo-1515354941672-aa30aa737642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1630358248798-955fe58fd341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww',
      colSpan: 1,
      rowSpan: 1
    }
  ];

  constructor() { }

  getSlides(): Slide[] {
    return this.slides;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: string): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getTrendingProducts(): Product[] {
    // Example logic: Fetch the first 3 products
    return this.products.slice(0, 4);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getCategoryNameById(categoryId: string): string | undefined {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Products'; // Return the name or undefined if not found
  }
}
