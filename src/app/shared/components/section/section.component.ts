import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() variant: 'default' | 'light' | 'dark' = 'default';

  get sectionClasses(): string {
    const baseClass = 'section';
    const variantClass = this.variant === 'light' ? 'section-light' : this.variant === 'dark' ? 'section-dark' : '';
    return `${baseClass} ${variantClass}`.trim();
  }
}
