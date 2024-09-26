import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NAVBAR_LINKS } from '../../app.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navbarLinks = NAVBAR_LINKS;
}
