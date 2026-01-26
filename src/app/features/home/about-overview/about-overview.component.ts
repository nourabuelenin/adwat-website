import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css'],
})
export class AboutOverviewComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  content = {
    heading: {
      en: 'About Adwat',
      ar: 'عن أدوات',
    },
    title: {
      en: 'Transforming Business Through Smart Digital Solutions',
      ar: 'تحويل الأعمال من خلال حلول رقمية ذكية',
    },
    paragraphs: [
      {
        en: 'Adwat is a company specialized in building digital solutions for organizations seeking technical transformation, going beyond mere system development to improving work methods and supporting decision-making.',
        ar: 'أدوات شركة متخصصة في بناء الحلول الرقمية للمؤسسات التي تسعى إلى تحوّل تقني، يتجاوز مجرد تطوير الأنظمة إلى تحسين طريقة العمل ودعم اتخاذ القرار.',
      },
    ],
    quote: {
      en: "Our vision at Adwat is to be the technical partner of choice for organizations, thinking with you, sharing your decisions, and building a technical foundation that serves your business today and prepares for tomorrow's challenges.",
      ar: 'طموحنا في أدوات هو أن نكون الشريك التقني الذي تختاره المؤسسات عن قناعة؛ شريكًا يفكر معك، ويشاركك القرار، ويبني معك واقعًا تقنيًا يخدم أعمالك اليوم ويستعد لتحديات الغد.',
    },
    speaker: {
      en: "Adwat's CEO",
      ar: 'رئيس مجلس الإدارة لأدوات',
    },
    authorName: {
      en: 'Alsuhaibani, Ibrahim Saleh M ',
      ar: 'ابراهيم بن صالح بن محمد السحيباني',
    },
  };
}
