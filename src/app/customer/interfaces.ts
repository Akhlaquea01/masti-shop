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

