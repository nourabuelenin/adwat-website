import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
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
    ButtonComponent, 
    ProjectsSliderComponent,
    SectionComponent,
    ContainerComponent
  ],
  styles: [`
    :host {
      display: block;
    }

    .section-header {
      text-align: center;
      max-width: 48rem;
      margin: 0 auto 3rem;
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
    }

    .cta-wrapper {
      text-align: center;
      margin-top: 3rem;
    }
  `],
  template: `
    <app-section [variant]="'light'" [withGradients]="true" [gradientVariant]="'left'" id="projects">
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
            [autoSlide]="false">
          </app-projects-slider>
        </div>

        <div class="cta-wrapper">
          <app-button [variant]="'primary'" [size]="'large'" routerLink="/projects">
            {{ content.cta[currentLang()] }}
          </app-button>
        </div>
      </app-container>
    </app-section>
  `
})
export class ProjectsShowcaseComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  projects: Project[] = PROJECTS_DATA.filter(p => p.featured);

  content = {
    heading: { en: 'Our Projects', ar: 'مشاريعنا' },
    title: { en: 'Trusted by Leading Organizations', ar: 'موثوق به من قبل المؤسسات الرائدة' },
    description: { en: 'Delivering mission-critical solutions for government and enterprise clients', ar: 'تقديم حلول حيوية للعملاء الحكوميين والمؤسسات' },
    cta: { en: 'View All Projects', ar: 'اطلع على جميع المشاريع' }
  };
}
