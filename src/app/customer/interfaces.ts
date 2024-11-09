export interface Category {
    id: string;
    name: string;
    description?: string;
    parentCategoryId?: string;
    image: string;
    colSpan?: number;
    rowSpan?: number;
}

export interface Slide {
    id: string;
    imageUrl: string;
    title: string;
    discount: string;
    cashback: string;
    promoText: string;
    badge: string;
    badgeColor: string;
    logo: string;
    product: string;
    url: string;
}


export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    offer: string;
    originalPrice: string;
    description?: string;
    colors?: string[];
    sizes?: string[];
    features?: string[];
    images: string[];
    rating?: number;
    stock: number,
    categoryId: string,
    reviews: any[],
    averageRating: number
}
export interface Review {
    id: string;
    productId: string;
    userId: string;
    userName: string;
    profileImage: string;
    ratings: number;
    productQualityRating: number;
    purchasingExperienceRating: number;
    reviewTitle: string;
    comment: string;
    helpfulCount: number;
    unhelpfulCount: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: number;
    password: string;
    isVerifiedBuyer?: boolean;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };
    role: 'user' | 'admin';
    wishlist?: any[];
    cart?: any[];
    orders?: any[];
    reviews?: any[];
}

export interface Cart {
    id?: string;
    user?: string;
    items?: Item[]
};

export interface WishList {
    id: string;
    user: string;
    items: Item[]
}
export interface Item {
    product: string;
    quantity: number;
    price: number;
    selectedColor?: string;
    selectedSize?: string;
    name: string;
    brand: string;
    url: string;
    image: string;
    imageAlt: string;
}
export interface orderItem {
    product: string,
    quantity: number,
    priceAtPurchase: number
}
export interface OrderSchema {
    user: string,
    items: orderItem[],
    totalAmount: number,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    status: string,
    paymentStatus: string
}