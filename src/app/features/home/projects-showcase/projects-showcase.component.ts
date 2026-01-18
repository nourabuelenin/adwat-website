import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { PROJECTS_DATA } from '../../../core/data/projects.data';
import { Project } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProjectsSliderComponent,
    SectionComponent,
    ContainerComponent,
  ],
  styles: [
    `
      :host {
        display: block;
      }

      .section-header {
        text-align: center;
        max-width: 48rem;
        margin: 0 auto 3rem;
      }

      .section-tag {
        color: #10b981;
        font-weight: 600;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 0.5rem;
      }

      .section-title {
        font-size: 2.25rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 0.5rem;
      }

      @media (min-width: 1024px) {
        .section-title {
          font-size: 2.5rem;
        }
      }

      .section-description {
        font-size: 1.0625rem;
        color: #475569;
      }

      .slider-wrapper {
        margin: 0 -1rem;
        overflow: visible;
      }

      @media (min-width: 1024px) {
        .slider-wrapper {
          margin: 0 -5rem;
          overflow: visible;
        }
      }

      .cta-wrapper {
        text-align: center;
        margin-top: 3rem;
      }

      .cta-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #0f172a;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.25s ease;
        padding: 0.5rem 0;
      }

      .cta-link:hover {
        color: #10b981;
        gap: 0.75rem;
      }

      .cta-link svg {
        transition: transform 0.25s ease;
      }

      .cta-link:hover svg {
        transform: translateX(4px);
      }
    `,
  ],
  template: `
    <app-section
      [variant]="'light'"
      [withGradients]="true"
      [gradientVariant]="'left'"
      id="projects"
    >
      <app-container>
        <div class="section-header">
          <p class="section-tag">
            {{ content.heading[currentLang()] }}
          </p>
          <h2 class="section-title">
            {{ content.title[currentLang()] }}
          </h2>
          <p class="section-description">
            {{ content.description[currentLang()] }}
          </p>
        </div>

        <div class="slider-wrapper">
          <app-projects-slider
            [projects]="projects"
            [currentLang]="currentLang()"
            [autoSlide]="false"
          >
          </app-projects-slider>
        </div>

        <div class="cta-wrapper">
          <a class="cta-link" routerLink="/projects">
            {{ content.cta[currentLang()] }}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </app-container>
    </app-section>
  `,
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
