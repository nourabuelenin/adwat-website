import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FAQ_DATA } from '../../../core/data/content.data';
import { FAQ } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterModule, ContainerComponent, SectionComponent, ButtonComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  faqs: FAQ[] = FAQ_DATA.slice(0, 5);
  openIndex: number | null = null;

  content = {
    heading: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة المتكررة' },
  };

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
