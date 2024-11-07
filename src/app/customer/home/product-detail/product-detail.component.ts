import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Cart, Item, Product, Review } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'masTi-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  reviewText: string = '';
  selectedStars: number = 0;
  breadcrumbItems: ({ label: string; url: string; } | { label: string; url?: undefined; })[] = [];

  reviews: Review[] = [];
  product: Product | undefined;
  currentImage: string;
  selectedColor: string;
  selectedSize: string;
  quantity: number = 1;
  inWishlist: boolean = false;
  averageRating: number = 0;
  ratingCounts = [];



  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    // Get the product ID from the route
    const productId = this.route.snapshot.paramMap.get('productId');

    // Fetch product details
    this.product = this.productService.getProductById(productId);

    // Fetch product reviews
    this.reviews = this.productService.getReviewsByProductId(productId);

    // Calculate average rating
    this.calculateAverageRating();

    // Set breadcrumb items
    this.breadcrumbItems = [
      { label: 'Home', url: '/home' },
      { label: 'Product Category', url: `/products/${this.product.categoryId}` },
      { label: 'Product Details' }
    ];

    // Initialize with the first color and size and Images if available
    this.currentImage = this.product.images[0];
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

  addToCart(product: Product): void {
    // Implement add to cart logic here
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    const cartItem: Item = {
      product: product.id,
      quantity: this.quantity,
      price: product.price,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize,
      name: product.name,
      brand: product.brand,
      url: `/product-detail/${product.id}`,
      image: product.images[0],
      imageAlt: 'Image',
    }
    console.log('Adding to cart', cartItem);
    this.cartService.addToCart(storedUser.id, cartItem);

  }
  toggleWishlist() {
    this.inWishlist = !this.inWishlist; // Toggle the wishlist status
  }

  calculateAverageRating(): void {
    const total = this.reviews.reduce((sum, review) => sum + review.ratings, 0);
    this.averageRating = total / this.reviews.length;
    this.ratingCounts = Array.from({ length: 5 }, (_, i) => {
      const star = 5 - i; // Star rating from 5 down to 1
      const count = this.reviews.filter(review => review.ratings === star).length;
      const percentage = (count / this.reviews.length) * 100;

      return { stars: star, percentage: Math.round(percentage) }; // Rounded to the nearest integer
    });
  }

  onRatingSelected($event: number) {
    console.log($event);
    this.selectedStars = $event
  }

  submitReview() {
    console.log(this.reviewText);
    console.log(this.selectedStars);
  }
}
