import {
  Component,
  inject,
  AfterViewInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { SERVICES_DATA } from '../../../core/data/services.data';
import { Service } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRight,
  faBolt,
  faCode,
  faChartBar,
  faBrain,
  faCloud,
  faGlobe,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    ContainerComponent,
    SectionComponent,
    FontAwesomeModule,
  ],
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css'],
})
export class ServicesOverviewComponent implements AfterViewInit, OnDestroy {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  services: Service[] = SERVICES_DATA.filter((s) => s.featured);

  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;
  faArrowRight = faArrowRight;

  iconMap: { [key: string]: IconDefinition } = {
    transform: faBolt,
    code: faCode,
    analytics: faChartBar,
    ai: faBrain,
    cloud: faCloud,
    web: faGlobe,
    mobile: faMobileScreen,
  };

  content = {
    heading: {
      en: 'Services',
      ar: 'الخدمات',
    },
    cta: {
      en: 'View All Services',
      ar: 'اطلع على جميع الخدمات',
    },
  };

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 60% of the card is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only apply this logic on mobile devices
        if (window.innerWidth >= 768) return;

        const description = entry.target.querySelector('.card-description');
        if (!description) return;

        if (entry.isIntersecting) {
          description.classList.add('service-description-visible');
          entry.target.classList.add('service-description-visible-card'); // Add background to card
        } else {
          description.classList.remove('service-description-visible');
          entry.target.classList.remove('service-description-visible-card'); // Remove background from card
        }
      });
    }, options);

    this.serviceCards.forEach((card) => {
      this.observer?.observe(card.nativeElement);
    });
  }

  getServiceTitle(service: Service): string {
    return service.title[this.currentLang()];
  }

  getServiceDescription(service: Service): string {
    return service.description[this.currentLang()];
  }

  getIcon(iconName: string | undefined): IconDefinition {
    return iconName && this.iconMap[iconName] ? this.iconMap[iconName] : faBolt;
  }
}
