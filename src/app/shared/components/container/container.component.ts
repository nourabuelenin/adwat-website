import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() size: 'default' | 'content' = 'default';

  get containerClasses(): string {
    return this.size === 'content' ? 'container-wrapper-lg' : 'container-wrapper';
  }
}
