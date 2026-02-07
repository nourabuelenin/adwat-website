import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslationService } from '../../core/services/translation.service';
import { PROJECTS_DATA } from '../../core/data/projects.data';
import { Project } from '../../core/models/content.models';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLightbulb,
  faStar,
  faChartLine,
  faChevronLeft,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent, FontAwesomeModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  private translationService = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  currentLang = this.translationService.currentLang;
  project: Project | null = null;
  relatedProjects: Project[] = [];
  currentSlide = 0;
  slidesPerView = 2;

  // Icons
  faLightbulb = faLightbulb;
  faStar = faStar;
  faChartLine = faChartLine;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // Map project IDs to logo file names
  private logoMap: { [key: string]: string } = {
    'traffic-monitoring': 'traffic-monitoring-logo.webp',
    'advanced-monitoring': 'moh-logo.webp',
    'construction-management': 'construction-mgmt-logo.webp',
    'e-next': 'e-next-logo.webp',
    'go-care-beauty': 'go-care-logo.webp',
    'go-care-healthcare': 'go-care-admin-logo.webp',
    'education-platform': 'education-platform-logo.png',
  };

  content = {
    aboutTitle: {
      en: 'About The System',
      ar: 'حول النظام',
    },
    challengeTitle: {
      en: 'The Challenge',
      ar: 'التحدي',
    },
    featuresTitle: {
      en: 'Key Features',
      ar: 'الميزات الرئيسية',
    },
    impactTitle: {
      en: 'Impact',
      ar: 'التأثير',
    },
    relatedProjectsTitle: {
      en: 'View Other Projects',
      ar: 'شاهد مشاريع أخرى',
    },
    softwareDevelopment: {
      en: 'Software Development',
      ar: 'تطوير البرمجيات',
    },
    aiTraining: {
      en: 'AI Training',
      ar: 'تدريب الذكاء الاصطناعي',
    },
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.loadProject(projectId);
    });

    // Update slides per view on window resize
    if (typeof window !== 'undefined') {
      this.updateSlidesPerView();
      window.addEventListener('resize', () => this.updateSlidesPerView());
    }
  }

  loadProject(id: string): void {
    this.project = PROJECTS_DATA.find((p) => p.id === id) || null;

    if (this.project && this.project.details?.relatedProjects) {
      this.relatedProjects = PROJECTS_DATA.filter((p) =>
        this.project!.details!.relatedProjects!.includes(p.id),
      );
    } else {
      // If no related projects specified, show random projects
      this.relatedProjects = PROJECTS_DATA.filter((p) => p.id !== id && p.featured).slice(0, 4);
    }
  }

  getProjectTitle(): string {
    return this.project?.title[this.currentLang()] || '';
  }

  getProjectIndustry(): string {
    return this.project?.industry[this.currentLang()] || '';
  }

  getProjectLogo(): string {
    if (!this.project) return '/assets/images/projects/default-logo.png';
    const logoFileName = this.logoMap[this.project.id];
    return logoFileName
      ? `/assets/images/projects/${logoFileName}`
      : '/assets/images/projects/default-logo.webp';
  }

  getAboutText(): string {
    return this.project?.details?.about?.[this.currentLang()] || '';
  }

  getRelatedProjectLogo(projectId: string): string {
    const logoFileName = this.logoMap[projectId];
    return logoFileName
      ? `/assets/images/projects/${logoFileName}`
      : '/assets/images/projects/default-logo.webp';
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.relatedProjects.length - this.slidesPerView) {
      this.currentSlide++;
    }
  }

  navigateToProject(projectId: string): void {
    this.router.navigate(['/projects', projectId]);
    this.currentSlide = 0; // Reset carousel
    // Scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private updateSlidesPerView(): void {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 1;
    }
  }
}
