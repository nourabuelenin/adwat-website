import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  template: `
    <section [class]="sectionClasses">
      <ng-content></ng-content>
    </section>
  `,
  styleUrl: './section.css',
})
export class SectionComponent {
  @Input() variant: 'default' | 'light' | 'dark' = 'default';

  get sectionClasses(): string {
    const baseClass = 'section';
    const variantClass = this.variant === 'light' ? 'section-light' : this.variant === 'dark' ? 'section-dark' : '';
    return `${baseClass} ${variantClass}`.trim();
  }
}
