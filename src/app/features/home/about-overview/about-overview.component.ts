import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css']
})
export class AboutOverviewComponent {
  currentLang: 'en' | 'ar' = 'en';

  content = {
    heading: {
      en: 'About Adwat',
      ar: 'عن أدوات'
    },
    title: {
      en: 'Transforming Business Through Smart Digital Solutions',
      ar: 'تحويل الأعمال من خلال حلول رقمية ذكية'
    },
    paragraphs: [
      {
        en: 'Adwat is a company specialized in building digital solutions for organizations seeking technical transformation, going beyond mere system development to improving work methods and supporting decision-making.',
        ar: 'أدوات شركة متخصصة في بناء الحلول الرقمية للمؤسسات التي تسعى إلى تحوّل تقني، يتجاوز مجرد تطوير الأنظمة إلى تحسين طريقة العمل ودعم اتخاذ القرار.'
      },
      {
        en: 'We work with our clients as a technical partner, starting by understanding operational challenges and workflows, then designing and implementing reliable, scalable digital systems that support institutional performance and keep pace with business growth.',
        ar: 'نعمل مع عملائنا كشريك تقني، نبدأ بفهم التحديات التشغيلية وسير العمليات، ثم نُصمم وننفذ أنظمة رقمية موثوقة وقابلة للتوسع، تدعم الأداء المؤسسي وتواكب نمو الأعمال.'
      },
      {
        en: 'Our work focuses on delivering practical solutions built on a realistic understanding of organizational needs, measured by the impact they achieve on performance, decisions, and outcomes.',
        ar: 'يركز عملنا على تقديم حلول عملية تُبنى على فهم واقعي لاحتياجات المؤسسات، وتقاس قيمتها بالأثر الذي تحققه على الأداء والقرارات والنتائج.'
      }
    ]
  };

  trustSignals = [
    {
      value: '+70',
      label: { en: 'IT Infrastructure Projects', ar: 'مشروع بنية تحتية تقنية' }
    },
    {
      value: '+10',
      label: { en: 'Custom Software Solutions', ar: 'حلول وبرامج تقنية مخصصة' }
    },
    {
      value: '+20,000',
      label: { en: 'Users Served', ar: 'مستخدم ومستفيد من حلولنا' }
    },
    {
      value: '+25',
      label: { en: 'Years of Experience', ar: 'عامًا من الخبرة التقنية' },
      // sublabel: { en: 'Since 2000', ar: 'منذ 2000' }
    }
  ];

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
  }
}
