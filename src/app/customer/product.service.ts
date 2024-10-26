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
      imageUrl: 'https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww',
      sku: 'SKU1234', // Add SKU
      description: 'A stylish graphic t-shirt made from 100% cotton.',
      rating: 4.5,
      reviews: 25,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['#FF5733', '#33FF57', '#3357FF'], // Example colors
      features: ['High-quality print', 'Comfortable fit', 'Available in various sizes'],
      images: [
        'https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1515354941672-aa30aa737642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpbnRlZCUyMGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D'
      ]
    },
    {
      id: '2',
      name: 'Custom Quote Tee',
      brand: 'GiftShop Apparel',
      price: '$25',
      originalPrice: '$35',
      categoryId: 'tshirts',
      imageUrl: 'https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww',
      sku: 'SKU5678',
      description: 'A personalized t-shirt that showcases your favorite quote.',
      rating: 4.8,
      reviews: 30,
      colors: ['#FFC300', '#FF5733', '#C70039'],
      features: ['Customizable', 'Soft and breathable fabric', 'Perfect for any occasion'],
      images: [
        'https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1620767188495-98ce5155895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVnfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1617508427654-14f1e3a4a8f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMG11Z3N8ZW58MHx8MHx8fDA%3D'
      ]
    },

    // Mugs
    {
      id: '3',
      name: 'Personalized Mug',
      brand: 'GiftShop Ceramics',
      price: '$10',
      originalPrice: '$15',
      categoryId: 'mugs',
      imageUrl: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVnfGVufDB8fDB8fHww',
      sku: 'SKU9012',
      description: 'A custom mug that adds a personal touch to your morning coffee.',
      rating: 4.2,
      reviews: 15,
      colors: ['#FFC300', '#FF5733', '#C70039'],
      features: ['Dishwasher safe', 'Microwave safe', 'Customizable design'],
      images: [
        'https://images.unsplash.com/photo-1491720731493-223f97d92c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVnfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1620767188495-98ce5155895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVnfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1515354941672-aa30aa737642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D'
      ]
    },
    {
      id: '4',
      name: 'Magic Color Mug',
      brand: 'GiftShop Ceramics',
      price: '$12',
      originalPrice: '$18',
      categoryId: 'mugs',
      imageUrl: 'https://images.unsplash.com/photo-1620767188495-98ce5155895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVnfGVufDB8fDB8fHww',
      sku: 'SKU3456',
      description: 'A color-changing mug that reveals a design with hot liquids.',
      rating: 4.6,
      reviews: 20,
      colors: ['#FF5733', '#33FF57', '#3357FF'],
      features: ['Color-changing technology', 'High-quality ceramic', 'Unique design'],
      images: [
        'https://images.unsplash.com/photo-1620767188495-98ce5155895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVnfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1515354941672-aa30aa737642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1491720731493-223f97d92c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVnfGVufDB8fDB8fHww'
      ]
    },
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
