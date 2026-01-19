import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TESTIMONIALS_DATA, PARTNERS_DATA } from '../../../core/data/content.data';
import { Testimonial, Partner } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ContainerComponent, SectionComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  testimonials: Testimonial[] = TESTIMONIALS_DATA;
  partners: Partner[] = PARTNERS_DATA;

  content = {
    heading: { en: 'Client Testimonials', ar: 'آراء العملاء' },
    title: { en: 'What Our Clients Say', ar: 'ماذا يقول عملاؤنا' },
    partnersTitle: {
      en: 'Trusted by Leading Organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة',
    },
  };
}
