import { Component, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TranslationService } from '../../../core/services/translation.service';
import { PARTNERS_DATA } from '../../../core/data/content.data';
import { Partner } from '../../../core/models/content.models';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css'],
})
export class AboutOverviewComponent implements AfterViewInit, OnDestroy {
  @ViewChild('trustSignalsSection') trustSignalsSection?: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;

  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  partners: Partner[] = PARTNERS_DATA;

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
      // {
      //   en: 'We work with our clients as a technical partner, starting by understanding operational challenges and workflows, then designing and implementing reliable, scalable digital systems that support institutional performance and keep pace with business growth.',
      //   ar: 'نعمل مع عملائنا كشريك تقني، نبدأ بفهم التحديات التشغيلية وسير العمليات، ثم نُصمم وننفذ أنظمة رقمية موثوقة وقابلة للتوسع، تدعم الأداء المؤسسي وتواكب نمو الأعمال.'
      // },
      // {
      //   en: 'Our work focuses on delivering practical solutions built on a realistic understanding of organizational needs, measured by the impact they achieve on performance, decisions, and outcomes.',
      //   ar: 'يركز عملنا على تقديم حلول عملية تُبنى على فهم واقعي لاحتياجات المؤسسات، وتقاس قيمتها بالأثر الذي تحققه على الأداء والقرارات والنتائج.'
      // }
    ],
    quote: {
      en: 'Our vision at Adwat is to be the technical partner of choice for organizations, thinking with you, sharing your decisions, and building a technical foundation that serves your business today and prepares for tomorrow’s challenges.',
      ar: 'طموحنا في أدوات هو أن نكون الشريك التقني الذي تختاره المؤسسات عن قناعة؛ شريكًا يفكر معك، ويشاركك القرار، ويبني معك واقعًا تقنيًا يخدم أعمالك اليوم ويستعد لتحديات الغد.',
    },
    speaker: {
      en: "Adwat's CEO",
      ar: 'رئيس مجلس الإدارة لأدوات',
    },
    authorName: {
      en: 'John Doe',
      ar: 'جون دو',
    },
  };

  trustSignals = [
    {
      value: '+70',
      targetValue: 70,
      currentValue: 0,
      label: { en: 'IT Infrastructure Projects', ar: 'مشروع بنية تحتية تقنية' },
    },
    {
      value: '+10',
      targetValue: 10,
      currentValue: 0,
      label: { en: 'Custom Software Solutions', ar: 'حلول وبرامج تقنية مخصصة' },
    },
    {
      value: '+20,000',
      targetValue: 20000,
      currentValue: 0,
      label: { en: 'Users Served', ar: 'مستخدم ومستفيد من حلولنا' },
    },
    {
      value: '+25',
      targetValue: 25,
      currentValue: 0,
      label: { en: 'Years of Experience', ar: 'عامًا من الخبرة التقنية' },
    },
  ];

  ngAfterViewInit() {
    this.setupCounterAnimation();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupCounterAnimation() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCounters();
          this.observer?.disconnect(); // Only animate once
        }
      });
    }, options);

    if (this.trustSignalsSection) {
      this.observer.observe(this.trustSignalsSection.nativeElement);
    }
  }

  private animateCounters() {
    this.trustSignals.forEach((signal, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = signal.targetValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        signal.currentValue = Math.min(Math.round(increment * currentStep), signal.targetValue);

        if (currentStep >= steps) {
          signal.currentValue = signal.targetValue;
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }

  getDisplayValue(signal: any): string {
    const value = signal.currentValue;
    if (signal.targetValue >= 1000) {
      return '+' + value.toLocaleString();
    }
    return '+' + value;
  }
}
