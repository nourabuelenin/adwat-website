import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-divider.component.html',
  styleUrls: ['./section-divider.component.css']
})
export class SectionDividerComponent {
  @Input() variant: 'top' | 'bottom' = 'bottom';
  @Input() fromColor: string = 'white';
  @Input() toColor: string = 'white';
}
