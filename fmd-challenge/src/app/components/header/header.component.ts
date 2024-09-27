import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NAVBAR_LINKS } from '../../app.constants';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent, NgOptimizedImage, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navbarLinks = NAVBAR_LINKS;

  isMenuOpen = false;

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
