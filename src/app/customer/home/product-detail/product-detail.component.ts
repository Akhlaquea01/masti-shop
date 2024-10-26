import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'masTi-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProductDetailComponent implements OnInit {
  product: any;
  currentImage: string; // To store the currently displayed image

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId'); // Get the product ID from the route
    this.product = this.productService.getProductById(productId); // Fetch product details
    this.currentImage = this.product.images[0]; // Set the initial image
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product); // Call the addToCart method from CartService
    alert(`${product.name} has been added to your cart!`); // Optional: Alert the user
  }

  changeImage(image: string): void {
    this.currentImage = image; // Change the current image to the selected thumbnail
  }
}
