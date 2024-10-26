import { Component, Input } from '@angular/core';

@Component({
  selector: 'masTi-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() profileImage: string = '';
  @Input() userName: string = '';
  @Input() isVerifiedBuyer: boolean = false;
  @Input() ratings: number = 0;
  @Input() productQualityRating: number = 0;
  @Input() purchasingExperienceRating: number = 0;
  @Input() reviewTitle: string = '';
  @Input() reviewContent: string = '';
  @Input() helpfulCount: number = 0;
  @Input() unhelpfulCount: number = 0;
}
