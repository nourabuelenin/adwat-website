import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { PROJECTS_DATA } from '../../../core/data/projects.data';
import { Project } from '../../../core/models/content.models';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent, SectionComponent],
  template: `
    <app-section [variant]="'light'" id="projects">
      <app-container>
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang] }}
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold text-adwat-dark-green mb-4">
            {{ content.title[currentLang] }}
          </h2>
          <p class="text-lg text-adwat-dark-green/70">
            {{ content.description[currentLang] }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div 
            *ngFor="let project of projects"
            class="card overflow-hidden group cursor-pointer"
            [routerLink]="project.link || '/projects'">
            <div class="h-48 bg-gradient-to-br from-primary to-adwat-blue flex items-center justify-center">
              <span class="text-white text-5xl">🏗️</span>
            </div>
            <div class="p-6">
              <span class="text-xs font-semibold text-primary uppercase tracking-wide">
                {{ project.industry[currentLang] }}
              </span>
              <h3 class="text-xl font-semibold text-adwat-dark-green mt-2 mb-3 group-hover:text-primary transition-colors">
                {{ project.title[currentLang] }}
              </h3>
              <p class="text-adwat-dark-green/70 text-sm leading-relaxed">
                {{ project.description[currentLang] }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <app-button [variant]="'secondary'" [size]="'large'" routerLink="/projects">
            {{ content.cta[currentLang] }}
          </app-button>
        </div>
      </app-container>
    </app-section>
  `
})
export class ProjectsShowcaseComponent {
  currentLang: 'en' | 'ar' = 'en';
  projects: Project[] = PROJECTS_DATA.filter(p => p.featured).slice(0, 6);

  content = {
    heading: { en: 'Our Projects', ar: 'مشاريعنا' },
    title: { en: 'Trusted by Leading Organizations', ar: 'موثوق به من قبل المؤسسات الرائدة' },
    description: { en: 'Delivering mission-critical solutions for government and enterprise clients', ar: 'تقديم حلول حيوية للعملاء الحكوميين والمؤسسات' },
    cta: { en: 'View All Projects', ar: 'اطلع على جميع المشاريع' }
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') this.currentLang = storedLang;
  }
}
