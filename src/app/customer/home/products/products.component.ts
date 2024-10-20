import { Component, Input } from '@angular/core';
import { Product } from '../home.component';

@Component({
  selector: 'masTi-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Input() title: string = 'Products';
}
