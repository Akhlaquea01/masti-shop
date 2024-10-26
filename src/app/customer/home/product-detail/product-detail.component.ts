import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { Product, Review } from '../../interfaces';

@Component({
  selector: 'masTi-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProductDetailComponent implements OnInit {
  reviews: Review[] = [];
  product: any;
  currentImage: string; // To store the currently displayed image
  selectedColor: string;
  selectedSize: string;
  quantity: number = 1; // Default quantity
  inWishlist: boolean = false;

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
    this.currentImage = this.product.images[0]; // Set the initial image
    // Initialize with the first color and size if available
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
}
