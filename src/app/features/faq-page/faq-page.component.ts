import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { FAQ_DATA } from '../../core/data/content.data';
import { FAQ } from '../../core/models/content.models';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [ContainerComponent, SectionComponent],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css'],
})
export class FaqPageComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  faqs: FAQ[] = FAQ_DATA;
  openIndex: number | null = 0;

  content = {
    heading: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة المتكررة' },
    subtitle: {
      en: 'Find answers to common questions about our services and how we work',
      ar: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وطريقة عملنا',
    },
  };

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
