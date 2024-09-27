import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RatingSectionComponent } from './components/rating-section/rating-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardsSectionComponent,
    FooterComponent,
    NewsletterComponent,
    RatingSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fmd-challenge';
}
