import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'masTi-rating',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './rating.component.html',
//   styles: `.star-rating {
//   .filled-star {
//     color: {{ filledColor }};
//   }
//   .empty-star {
//     color: {{ emptyColor }};
//   }
// }
// `
})
export class RatingComponent {
  @Input() filledStars = 0;
  @Input() totalStars = 5;
  @Input() filledColor = 'yellow';
  @Input() emptyColor = 'gray';
  @Input() editable = false;
  @Output() ratingSelected = new EventEmitter<number>();

  selectRating(star: number) {
    if (this.editable) {
      this.filledStars = star;
      this.ratingSelected.emit(this.filledStars);
    }
  }
}
