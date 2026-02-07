import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslationService } from '../../core/services/translation.service';
import { PROJECTS_DATA } from '../../core/data/projects.data';
import { Project } from '../../core/models/content.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);
  private router = inject(Router);

  currentLang = this.translationService.currentLang;
  projects: Project[] = PROJECTS_DATA.filter((p) => p.featured);

  // Map project IDs to logo file names
  private logoMap: { [key: string]: string } = {
    'traffic-monitoring': 'traffic-monitoring-logo.webp',
    'advanced-monitoring': 'moh-logo.webp',
    'construction-management': 'construction-mgmt-logo.webp',
    'e-next': 'e-next-logo.webp',
    'go-care-beauty': 'go-care-logo.webp',
    'go-care-healthcare': 'go-care-admin-logo.webp',
  };

  content = {
    heading: {
      en: 'Our Projects',
      ar: 'مشاريعنا',
    },
    subheading: {
      en: 'Trusted by Leading Organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة',
    },
    subtitle: {
      en: 'Delivering digital solutions that transform businesses and empower organizations across various sectors',
      ar: 'نقدم حلولاً رقمية تحول الأعمال وتمكن المؤسسات عبر مختلف القطاعات',
    },
    learnMore: {
      en: 'Learn More',
      ar: 'اعرف المزيد',
    },
    visit: {
      en: 'Visit',
      ar: 'زيارة',
    },
  };

  getProjectTitle(project: Project): string {
    return project.title[this.currentLang()];
  }

  getProjectDescription(project: Project): string {
    return project.description[this.currentLang()];
  }

  getProjectIndustry(project: Project): string {
    return project.industry[this.currentLang()];
  }

  getProjectLogo(projectId: string): string {
    const logoFileName = this.logoMap[projectId];
    return logoFileName
      ? `/assets/images/projects/${logoFileName}`
      : '/assets/images/projects/default-logo.webp';
  }

  onLearnMore(projectId: string): void {
    this.router.navigate(['/projects', projectId]);
  }

  onVisit(link: string): void {
    window.open(link, '_blank');
  }
}
