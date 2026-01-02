import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { ProjectsShowcaseComponent } from './projects-showcase/projects-showcase.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { FinalCtaComponent } from './final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutOverviewComponent,
    ServicesOverviewComponent,
    ProjectsShowcaseComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FaqComponent,
    FinalCtaComponent
  ],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      <app-about-overview></app-about-overview>
      <app-services-overview></app-services-overview>
      <app-projects-showcase></app-projects-showcase>
      <app-why-choose-us></app-why-choose-us>
      <app-testimonials></app-testimonials>
      <app-faq></app-faq>
      <app-final-cta></app-final-cta>
    </div>
  `,
  styles: [`
    :host ::ng-deep app-hero,
    :host ::ng-deep app-about-overview,
    :host ::ng-deep app-services-overview,
    :host ::ng-deep app-projects-showcase,
    :host ::ng-deep app-why-choose-us,
    :host ::ng-deep app-testimonials,
    :host ::ng-deep app-faq,
    :host ::ng-deep app-final-cta {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}
