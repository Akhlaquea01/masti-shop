export interface Category {
    id: string;
    name: string;
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
}


export interface Product {
    id: string;
    name: string;
    brand: string;
    price: string;
    originalPrice: string;
    categoryId: string;
    imageUrl: string;
    description?: string;
    colors?: string[];
    sizes?: string[];
    features?: string[];
    images?: string[];
    sku?: string;
    rating?: number;
    reviews?: number;
}
export interface Review {
    id: string;
    productId: string;
    userId: number;
    userName: string;
    profileImage?: string;
    isVerifiedBuyer: boolean;
    ratings: number;
    productQualityRating: number;
    purchasingExperienceRating: number;
    reviewTitle: string;
    reviewContent: string;
    helpfulCount: number;
    unhelpfulCount: number;
}

export interface User {
    name: string;
    email: string;
    password: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };
    role: 'user' | 'admin';
    wishlist?: any[];
    cart?: any[];
}