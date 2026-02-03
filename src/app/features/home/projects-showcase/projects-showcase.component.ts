import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { PROJECTS_DATA } from '../../../core/data/projects.data';
import { Project } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [
    RouterModule,
    ProjectCardComponent,
    SectionComponent,
    ContainerComponent,
    ButtonComponent,
  ],
  templateUrl: './projects-showcase.component.html',
  styleUrls: ['./projects-showcase.component.css'],
})
export class ProjectsShowcaseComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  projects: Project[] = PROJECTS_DATA.filter((p) => p.featured && p.image);

  content = {
    heading: { en: 'Our Projects', ar: 'مشاريعنا' },
    title: { en: 'Trusted by Leading Organizations', ar: 'موثوق به من قبل المؤسسات الرائدة' },
    description: {
      en: 'Delivering mission-critical solutions for government and enterprise clients',
      ar: 'تقديم حلول حيوية للعملاء الحكوميين والمؤسسات',
    },
    cta: { en: 'View All Projects', ar: 'اطلع على جميع المشاريع' },
  };
}
