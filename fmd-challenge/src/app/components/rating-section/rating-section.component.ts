import { Component } from '@angular/core';
import { RatingCardComponent } from '../rating-card/rating-card.component';

@Component({
  selector: 'app-rating-section',
  standalone: true,
  imports: [RatingCardComponent],
  templateUrl: './rating-section.component.html',
  styleUrl: './rating-section.component.scss',
})
export class RatingSectionComponent {}
