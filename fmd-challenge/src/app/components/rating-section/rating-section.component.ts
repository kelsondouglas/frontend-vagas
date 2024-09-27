import { Component } from '@angular/core';
import { RatingCardComponent } from '../rating-card/rating-card.component';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-rating-section',
  standalone: true,
  imports: [RatingCardComponent, CarouselModule, NgOptimizedImage],
  templateUrl: './rating-section.component.html',
  styleUrl: './rating-section.component.scss',
})
export class RatingSectionComponent {
  ratings = Array.from({ length: 3 }, (_, i) => i + 1);
  activeIndex = 0;

  onChange(event: any) {
    this.activeIndex = event.page;
  }
}
