import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss',
})
export class CardsSectionComponent {}
