export interface Category {
    id: string;
    name: string;
    image: string;
    colSpan?: number;  // Number of columns the card spans
    rowSpan?: number;  // Number of rows the card spans
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
    sku?: string;         // Add SKU property
    rating?: number;      // Add rating property
    reviews?: number;     // Add reviews count
}
// review.model.ts
export interface Review {
    id: string;                   // Unique identifier for the review
    productId: string;           // Identifier for the associated product
    userId: number;              // Identifier for the user who submitted the review
    userName: string;            // User's name
    profileImage?: string;       // URL for the user's profile image (optional)
    isVerifiedBuyer: boolean;     // Indicates if the buyer is verified
    ratings: number;             // Overall rating (1-5)
    productQualityRating: number; // Quality rating (1-5)
    purchasingExperienceRating: number; // Experience rating (1-5)
    reviewTitle: string;         // Title of the review
    reviewContent: string;       // Content of the review
    helpfulCount: number;        // Number of helpful votes
    unhelpfulCount: number;      // Number of unhelpful votes
}

