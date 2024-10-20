import { Component, Inject, OnInit } from '@angular/core';
import { Slide } from '../../interfaces';
import { ProductService } from '../../product.service';

@Component({
  selector: 'masTi-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  slides: Slide[];

  currentIndex = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.slides = this.productService?.getSlides();
  }
  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
