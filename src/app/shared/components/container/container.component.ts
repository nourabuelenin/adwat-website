import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  template: `
    <div [class]="containerClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './container.css',
})
export class ContainerComponent {
  @Input() size: 'default' | 'content' = 'default';

  get containerClasses(): string {
    return this.size === 'content' ? 'container-wrapper-lg' : 'container-wrapper';
  }
}
