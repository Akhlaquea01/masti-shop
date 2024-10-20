import { Component } from '@angular/core';
interface Slide {
  imageUrl: string;
  title: string;
  discount: string;
  cashback: string;
  promoText: string;
  badge: string;
  badgeColor: string;
}
@Component({
  selector: 'masTi-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  slides: Slide[] = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1149135424/photo/group-of-sweet-and-salty-snacks-perfect-for-binge-watching.jpg?s=612x612&w=0&k=20&c=YAVqRyUJgj_nXpltYUPpaW_PYtd4v2TC5Mo0DtVFuoo=',
      title: 'Your Daily Dose of Nutrition',
      discount: 'Up to 50% Off',
      cashback: '10% Instant Discount on Debit/Credit Card EMI',
      promoText: '*T&C Apply',
      badge: 'Big Diwali Sale',
      badgeColor: 'bg-yellow-400 text-blue-900',
    },
    {
      imageUrl: 'https://www.softspun.in/cdn/shop/products/91-xXam37pL._SL1500_3189f053-8316-4b25-b033-fa270dc3fa59.jpg?v=1675257594',
      title: 'Fresh Snacks',
      discount: 'Up to 30% Off',
      cashback: '5% Cashback on Debit/Credit Card EMI',
      promoText: '*T&C Apply',
      badge: 'Mega Sale',
      badgeColor: 'bg-pink-400 text-white',
    },
    // Add more slides as needed
  ];

  currentIndex = 0;

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
