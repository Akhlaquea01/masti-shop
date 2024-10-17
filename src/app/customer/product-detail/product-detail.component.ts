import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'masTi-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id'); // Get the product ID from the route
    this.product = this.productService.getProductById(productId); // Fetch product details
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product); // Call the addToCart method from CartService
    alert(`${product.name} has been added to your cart!`); // Optional: Alert the user
  }

}
