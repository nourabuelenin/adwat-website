import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Project } from '../../../../core/models/content.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() active = false;
  @Input() reversed = false;
}
