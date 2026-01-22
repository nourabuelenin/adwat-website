import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() variant: 'default' | 'light' | 'dark' = 'default';
  @Input() withGradients: boolean = false;
  @Input() gradientVariant: 'left' | 'right' | 'top-right-only' = 'left'; // added top-right-only for FAQ
  @Input() customClass: string = '';

  get sectionClasses(): string {
    const baseClass = 'section';
    const variantClass =
      this.variant === 'light' ? 'section-light' : this.variant === 'dark' ? 'section-dark' : '';
    return `${baseClass} ${variantClass} ${this.customClass}`.trim();
  }
}
