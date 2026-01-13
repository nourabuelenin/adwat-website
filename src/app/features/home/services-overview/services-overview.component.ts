import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { SERVICES_DATA } from '../../../core/data/services.data';
import { Service } from '../../../core/models/content.models';

import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent, SectionComponent],
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  services: Service[] = SERVICES_DATA.filter(s => s.featured);

  content = {
    heading: {
      en: 'Services',
      ar: 'الخدمات'
    },
    cta: {
      en: 'View All Services',
      ar: 'اطلع على جميع الخدمات'
    }
  };

  getServiceTitle(service: Service): string {
    return service.title[this.currentLang()];
  }

  getServiceDescription(service: Service): string {
    return service.description[this.currentLang()];
  }
}
