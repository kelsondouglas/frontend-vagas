import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  activeIndex = 0;
  sliderContent = [
    {
      image: 'assets/images/slides/background.png',
      title: 'First Slide',
      description: 'This is the first slide.',
    },
    {
      image: 'assets/images/slides/background.png',
      title: 'Second Slide',
      description: 'This is the second slide.',
    },
    {
      image: 'assets/images/slides/background.png',
      title: 'Third Slide',
      description: 'This is the third slide.',
    },
  ];

  onChange(event: any) {
    this.activeIndex = event.page;
  }
}
