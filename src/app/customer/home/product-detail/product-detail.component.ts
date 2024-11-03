import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, Review } from '../../interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'masTi-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  Math = Math;
  newReviewContent: any;
  breadcrumbItems: ({ label: string; url: string; } | { label: string; url?: undefined; })[] = [];
  submitReview() {
    throw new Error('Method not implemented.');
  }
  reviews: Review[] = [];
  product: Product | undefined;
  currentImage: string; // To store the currently displayed image
  selectedColor: string;
  selectedSize: string;
  quantity: number = 1; // Default quantity
  inWishlist: boolean = false;
  averageRating: number = 0;
  totalRatings: number = this.reviews.length;

  ratingCounts = [
    { stars: 5, percentage: 50 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 10 }
  ];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId'); // Get the product ID from the route
    this.product = this.productService.getProductById(productId); // Fetch product details
    this.reviews = this.productService.getReviewsByProductId(productId);
    this.calculateAverageRating();
    this.currentImage = this.product.images[0]; // Set the initial image
    // Initialize with the first color and size if available
    this.breadcrumbItems = [
      { label: 'Home', url: '/home' },
      { label: 'Product Category', url: `/products/${this.product.categoryId}` },
      { label: 'Product Details' }
    ];
    this.selectedColor = this.product.colors[0];
    this.selectedSize = this.product.sizes[0];
  }

  changeImage(image: string) {
    this.currentImage = image;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addToCart(product: Product) {
    // Implement add to cart logic here
    console.log('Adding to cart', {
      product,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize,
      quantity: this.quantity,
    });
  }
  toggleWishlist() {
    this.inWishlist = !this.inWishlist; // Toggle the wishlist status
  }

  calculateAverageRating(): void {
    const total = this.reviews.reduce((sum, review) => sum + review.ratings, 0);
    this.averageRating = total / this.totalRatings;
  }
}
