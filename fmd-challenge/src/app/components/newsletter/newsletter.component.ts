import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    CommonModule,
    DialogModule,
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent {
  newsletterForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  isDialogVisible: boolean = true;

  showDialog() {
    this.isDialogVisible = true;
  }
}
