import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BannerComponenet } from './banner/banner.componenet';
import { PioneersComponent } from './pioneers/pioneers.component';
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
    HeroComponent,
    BannerComponenet,
    PioneersComponent,
    AboutOverviewComponent,
    ServicesOverviewComponent,
    ProjectsShowcaseComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FaqComponent,
    FinalCtaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
