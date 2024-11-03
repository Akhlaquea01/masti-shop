import { Injectable } from '@angular/core';
import { Category, Product, Review, Slide } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private reviews: Review[] = [
    {
      id: "r101",
      productId: "101", // T-shirt
      userId: "u001",
      ratings: 4,
      productQualityRating: 4,
      purchasingExperienceRating: 5,
      reviewTitle: "Great T-shirt!",
      comment: "The T-shirt is very comfortable and fits perfectly. Quality is good for the price.",
      helpfulCount: 10,
      unhelpfulCount: 1
    },
    {
      id: "r102",
      productId: "102", // Hoodie
      userId: "u002",
      ratings: 5,
      productQualityRating: 5,
      purchasingExperienceRating: 5,
      reviewTitle: "Absolutely love it!",
      comment: "This hoodie is super cozy and warm. Perfect for winter. Highly recommend!",
      helpfulCount: 15,
      unhelpfulCount: 0
    },
    {
      id: "r201",
      productId: "201", // Mug
      userId: "u003",
      ratings: 3,
      productQualityRating: 3,
      purchasingExperienceRating: 4,
      reviewTitle: "Good mug, but design could be better",
      comment: "The mug is sturdy, but the design is a bit plain. Works fine for daily use.",
      helpfulCount: 4,
      unhelpfulCount: 2
    },
    {
      id: "r301",
      productId: "301", // Phone Case
      userId: "u004",
      ratings: 4,
      productQualityRating: 4,
      purchasingExperienceRating: 4,
      reviewTitle: "Nice and slim",
      comment: "The case is slim yet offers good protection. Satisfied with the purchase.",
      helpfulCount: 8,
      unhelpfulCount: 1
    },
    {
      id: "r401",
      productId: "401", // Notebook
      userId: "u005",
      ratings: 5,
      productQualityRating: 5,
      purchasingExperienceRating: 5,
      reviewTitle: "Excellent quality notebook",
      comment: "The paper quality is fantastic, and it's perfect for note-taking. Highly recommended!",
      helpfulCount: 12,
      unhelpfulCount: 0
    },
    {
      id: "r501",
      productId: "501", // Personalized Apron
      userId: "u006",
      ratings: 4,
      productQualityRating: 4,
      purchasingExperienceRating: 4,
      reviewTitle: "Good, but could be more customizable",
      comment: "The apron quality is good, but limited customization options. Still worth it.",
      helpfulCount: 6,
      unhelpfulCount: 3
    },
    {
      id: "r601",
      productId: "601", // Photo Frame
      userId: "u007",
      ratings: 5,
      productQualityRating: 5,
      purchasingExperienceRating: 5,
      reviewTitle: "Beautiful frame!",
      comment: "The frame looks amazing and fits well with my decor. Perfect for family photos.",
      helpfulCount: 9,
      unhelpfulCount: 1
    }
  ];

  private products: Product[] = [
    // Clothing and Accessories
    {
      id: "101",
      name: "T-shirt",
      brand: "BrandX",
      price: "15.00",
      offer: "10%",
      originalPrice: "16.67",
      imageUrl: "https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519722417352-7d6959729417?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Comfortable cotton T-shirt available in various colors.",
      colors: ["Red", "Blue", "Black"],
      sizes: ["S", "M", "L", "XL"],
      features: ["100% Cotton", "Machine Washable"],
      rating: 4.5,
      stock: 100,
      categoryId: "1", // Category ID for Clothing and Accessories
      reviews: ["r101", "r102"],
      averageRating: 4.5
    },
    {
      id: "102",
      name: "Hoodie",
      brand: "BrandY",
      price: "25.00",
      offer: "15%",
      originalPrice: "29.41",
      imageUrl: "https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Warm and cozy hoodie perfect for chilly weather.",
      colors: ["Gray", "Black"],
      sizes: ["M", "L", "XL"],
      features: ["Fleece lined", "Machine Washable"],
      rating: 4.3,
      stock: 50,
      categoryId: "1", // Category ID for Clothing and Accessories
      reviews: ["r102"],
      averageRating: 4.3
    },
    {
      id: "103",
      name: "Bags",
      brand: "BrandY",
      price: "25.00",
      offer: "15%",
      originalPrice: "29.41",
      imageUrl: "https://images.unsplash.com/photo-1695060530614-720eaaad8b26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1695060530614-720eaaad8b26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Backpack for everyday use.",
      colors: ["Gray", "Black"],
      sizes: ["M"],
      features: ["Machine Washable"],
      rating: 4.3,
      stock: 50,
      categoryId: "1",
      reviews: [],
      averageRating: 4.3
    },
    {
      id: "104",
      name: "Caps",
      brand: "BrandY",
      price: "25.00",
      offer: "15%",
      originalPrice: "29.41",
      imageUrl: "https://images.unsplash.com/photo-1483103068651-8ce44652c331?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1483103068651-8ce44652c331?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1514642837906-76ed4698ec34?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1466992133056-ae8de8e22809?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Caps for everyday use.",
      colors: ["Gray", "Black"],
      sizes: ["M"],
      features: ["Machine Washable"],
      rating: 4.3,
      stock: 50,
      categoryId: "1",
      reviews: [],
      averageRating: 4.3
    },
    // Home and Living
    {
      id: "201",
      name: "Mug",
      brand: "KitchenPro",
      price: "8.00",
      offer: "5%",
      originalPrice: "8.42",
      imageUrl: "https://images.unsplash.com/photo-1497760953885-d269502b5740?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1497760953885-d269502b5740?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1518184980852-9f01362dd72f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1520949044152-74b54c164c31?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Ceramic mug for hot beverages.",
      colors: ["White", "Blue"],
      features: ["Microwave Safe", "Dishwasher Safe"],
      rating: 4.7,
      stock: 200,
      categoryId: "2",
      reviews: ["r201"],
      averageRating: 4.7
    },
    {
      id: "202",
      name: "Pillow",
      brand: "ComfortPlus",
      price: "20.00",
      offer: "10%",
      originalPrice: "22.22",
      imageUrl: "https://images.unsplash.com/photo-1628992304915-1f67982fd774?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1628992304915-1f67982fd774?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1579656559983-5fa194b1994d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1626964122662-3c76b00a206c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      description: "Soft and plush pillow for better sleep.",
      colors: ["White"],
      features: ["Hypoallergenic", "Machine Washable"],
      rating: 4.6,
      stock: 150,
      categoryId: "2",
      reviews: [],
      averageRating: 4.6
    },
    // Tech Gadgets
    {
      id: "301",
      name: "Phone Case",
      brand: "CaseMate",
      price: "12.00",
      offer: "20%",
      originalPrice: "15.00",
      imageUrl: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: ["https://images.unsplash.com/photo-1535157412991-2ef801c1748b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513863674925-18652a1048f2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1496142958257-bb62cac8603f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description: "Protective phone case available in multiple designs.",
      colors: ["Black", "Clear"],
      features: ["Shock Absorbent", "Slim Design"],
      rating: 4.2,
      stock: 120,
      categoryId: "3", // Category ID for Tech Gadgets
      reviews: ["r301"],
      averageRating: 4.2
    },
    // Stationery
    {
      id: "401",
      name: "Notebook",
      brand: "PaperWorks",
      price: "5.00",
      offer: "10%",
      originalPrice: "5.56",
      imageUrl: "https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: ["https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585178332093-1dfaa3998f6b?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1657310216811-fa2fb45372e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      description: "Lined notebook for daily writing tasks.",
      features: ["80 Pages", "A5 Size"],
      rating: 4.5,
      stock: 300,
      categoryId: "4", // Category ID for Stationery
      reviews: ["r401"],
      averageRating: 4.5
    },
    // Others
    {
      id: "501",
      name: "Personalized Apron",
      brand: "KitchenMaster",
      price: "18.00",
      offer: "15%",
      originalPrice: "21.18",
      imageUrl: "https://images.unsplash.com/photo-1729774057603-f7f5703718bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1729774057603-f7f5703718bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1729774092032-31b9e3a4e368?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1729774092907-5c2746592e6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      description: "Personalized apron available for customization.",
      colors: ["White", "Black"],
      features: ["Adjustable Straps"],
      rating: 4.6,
      stock: 80,
      categoryId: "5", // Category ID for Others
      reviews: ["r501"],
      averageRating: 4.6
    },
    // Gifts and Keepsakes
    {
      id: "601",
      name: "Photo Frame",
      brand: "Memories",
      price: "10.00",
      offer: "10%",
      originalPrice: "11.11",
      imageUrl: "https://images.unsplash.com/photo-1670726113933-4bb3940deaf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: ["https://images.unsplash.com/photo-1670726113933-4bb3940deaf3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1458323679487-2ebd81b13c5f?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1589175530995-d37b53468819?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
      description: "Stylish photo frame for displaying memories.",
      colors: ["Brown", "Black"],
      features: ["Tabletop and Wall Mountable"],
      rating: 4.8,
      stock: 100,
      categoryId: "6", // Category ID for Gifts and Keepsakes
      reviews: ["r601"],
      averageRating: 4.8
    }
  ];

  private categories: Category[] = [
    {
      id: "1",
      name: "Clothing and Accessories",
      description: "A collection of clothing items and fashion accessories.",
      image: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      name: "Home and Living",
      description: "Products for home decor and daily use.",
      image: "https://images.unsplash.com/photo-1593498208667-6b54b5f5e0f0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "3",
      name: "Tech Gadgets",
      description: "Latest gadgets and accessories for tech enthusiasts.",
      image: "https://images.unsplash.com/photo-1678852329345-8de5fe82f4dc?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "4",
      name: "Stationery",
      description: "Writing materials and office supplies.",
      image: "https://images.unsplash.com/photo-1440335680360-79703e7032f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Others",
      description: "Miscellaneous products that don't fit in other categories.",
      image: "https://images.unsplash.com/photo-1513884923967-4b182ef167ab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "6",
      name: "Gifts and Keepsakes",
      description: "Unique gifts for special occasions.",
      image: "https://images.unsplash.com/photo-1510284876186-b1a84b94418f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];



  private slides: Slide[] = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1596484552993-aec4311d3381?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Summer Collection',
      discount: 'Up to 50% Off',
      cashback: '10% Cashback on Purchases Above $100',
      promoText: '*Offer valid until end of season',
      badge: 'Hot Deal',
      badgeColor: 'bg-red-500 text-white',
      logo: 'assets/images/offer.jpg',
      product: 'T-shirts and Hoodies'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1694395994809-7cf9673f44c0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mega Discount on Gifts',
      discount: '30% Off',
      cashback: '5% Cashback on All Orders',
      promoText: '*Limited Time Offer',
      badge: 'Mega Sale',
      badgeColor: 'bg-pink-400 text-white',
      logo: 'assets/images/offer.jpg',
      product: 'Gift Items'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Back to School Essentials',
      discount: '20% Off',
      cashback: 'No Cashback on Discounted Items',
      promoText: '*While supplies last',
      badge: 'School Sale',
      badgeColor: 'bg-blue-400 text-white',
      logo: 'assets/images/offer.jpg',
      product: 'Stationery and Supplies'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Exclusive on Tech Gadgets',
      discount: '25% Off',
      cashback: '15% Cashback for Members',
      promoText: '*Join our membership for more discounts',
      badge: 'Exclusive Offer',
      badgeColor: 'bg-purple-500 text-white',
      logo: 'assets/images/offer.jpg',
      product: 'Tech Gadgets'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Home Decor Sale',
      discount: 'Flat 40% Off',
      cashback: '5% Cashback on First Purchase',
      promoText: '*Only for new customers',
      badge: 'Limited Offer',
      badgeColor: 'bg-green-500 text-white',
      logo: 'assets/images/offer.jpg',
      product: 'Home Decor'
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
  // Method to get a review by its ID
  getReviewById(reviewId: string): Review | undefined {
    return this.reviews.find(review => review.id === reviewId);
  }

  // Optionally, you can implement a method to get reviews by product ID
  getReviewsByProductId(productId: string): Review[] {
    return this.reviews.filter(review => review.productId === productId);
  }
}
