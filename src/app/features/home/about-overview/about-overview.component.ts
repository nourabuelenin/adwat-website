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
      {
        en: 'Our work depends on providing effective solutions built on a true understanding of the needs of organizations and clients, and the value of these solutions is measured by the actual impact reflected on performance, decision quality, and results.',
        ar: 'ويعتمد عملنا على تقديم الحلول الفعالة والمبنية على الفهم الواقعي لاحتياجات المؤسسات والعملاء، وتُقاس قيمة هذه الحلول وجدواها بمدى الأثر الفعلي المنعكس على الأداء وجودة القرار والنتائج.',
      },
      {
        en: 'We work closely with our clients as a technical partner, taking the time to understand their operational challenges and workflows. Based on these insights, we design reliable and scalable digital systems that support improvement and enable continuous growth.',
        ar: 'كما أننا نتعاون مع عملائنا كشريك تقني، يسعى لفهم تحدياتهم التشغيلية وآلية سير العمل، ثم نُصمم أنظمة رقمية موثوقة وقابلة للتوسع؛ لتكون الداعم لهم في تحسين الأداء المؤسسي ومواكبة التطور ونمو الأعمال.',
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
      en: 'Hamd Alluhaidan',
      ar: 'حمد اللحيدان',
    },
  };
}
