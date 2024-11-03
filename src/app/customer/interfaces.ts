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
}


export interface Product {
    id: string;
    name: string;
    brand: string;
    price: string;
    offer: string;
    originalPrice: string;
    imageUrl: string;
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

export interface CartSchema {
    user: string;
    items: CartItem[]
};

export interface WishListSchema {
    user: string;
    items: CartItem[]
}
export interface CartItem {
    product: string;
    quantity: number;
    price: number;
}

export interface OrderSchema {
    user: string,
    items: [{
        product: string,
        quantity: number,
        priceAtPurchase: number
    }],
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