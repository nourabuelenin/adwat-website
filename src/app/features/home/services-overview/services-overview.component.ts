import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { SERVICES_DATA } from '../../../core/data/services.data';
import { Service } from '../../../core/models/content.models';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent, SectionComponent],
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent {
  currentLang: 'en' | 'ar' = 'en';
  services: Service[] = SERVICES_DATA.filter(s => s.featured);

  content = {
    heading: {
      en: 'Our Services',
      ar: 'خدماتنا'
    },
    title: {
      en: 'Enterprise Solutions Built for Scale',
      ar: 'حلول مؤسسية مصممة للنمو'
    },
    description: {
      en: 'Comprehensive technology services designed to drive digital transformation and business growth',
      ar: 'خدمات تقنية شاملة مصممة لدفع التحول الرقمي ونمو الأعمال'
    },
    cta: {
      en: 'View All Services',
      ar: 'اطلع على جميع الخدمات'
    }
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
  }

  getServiceTitle(service: Service): string {
    return service.title[this.currentLang];
  }

  getServiceDescription(service: Service): string {
    return service.description[this.currentLang];
  }
}
