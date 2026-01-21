import { Component, inject, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-pioneers',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent],
  templateUrl: './pioneers.component.html',
  styleUrls: ['./pioneers.component.css'],
})
export class PioneersComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection?: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;

  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  content = {
    badge: {
      en: "ADWAT'S ACHIEVEMENTS",
      ar: 'إنجازات أدوات',
    },
    title: {
      en: 'Data Analytics Pioneers In MENA Region',
      ar: 'رواد تحليل البيانات في منطقة الشرق الأوسط وشمال أفريقيا',
    },
    paragraphs: [
      {
        en: 'Since 2000, We Have Been Working As A Technology Partner, Supporting Companies Throughout Their Journey Toward Growth.',
        ar: 'منذ عام 2000، نعمل كشريك تقني، ندعم الشركات في رحلتها نحو النمو.',
      },
      {
        en: 'Our Long-Standing Experience Has Enabled Our Clients To Transform Complex Operations Into Intelligent Systems That Support Fast And Efficient Decision-Making, Ensuring That Technology Truly Serves The Growth Of Your Business, Rather Than Being Merely A Tool.',
        ar: 'مكنتنا خبرتنا الطويلة عملاءنا من تحويل العمليات المعقدة إلى أنظمة ذكية تدعم اتخاذ القرارات السريعة والفعالة، مما يضمن أن التكنولوجيا تخدم حقًا نمو أعمالك، بدلاً من أن تكون مجرد أداة.',
      },
      {
        en: "We Take Great Pride In Our Clients' Feedback And The Enduring Success We Have Built Together Over The Years.",
        ar: 'نفتخر كثيرًا بملاحظات عملائنا والنجاح الدائم الذي بنيناه معًا على مر السنين.',
      },
    ],
  };

  stats = [
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
      label: { en: 'Custom Software Solutions', ar: 'حلول برمجية مخصصة' },
    },
    {
      value: '+20,000',
      targetValue: 20000,
      currentValue: 0,
      label: { en: 'Users Served Around The Globe', ar: 'مستخدم حول العالم' },
    },
    {
      value: '+25',
      targetValue: 25,
      currentValue: 0,
      label: { en: 'Years Of Actual Experience', ar: 'عامًا من الخبرة الفعلية' },
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
          this.observer?.disconnect();
        }
      });
    }, options);

    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  private animateCounters() {
    this.stats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.targetValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        stat.currentValue = Math.min(Math.round(increment * currentStep), stat.targetValue);

        if (currentStep >= steps) {
          stat.currentValue = stat.targetValue;
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }

  getDisplayValue(stat: any): string {
    const value = stat.currentValue;
    if (stat.targetValue >= 1000) {
      return '+' + value.toLocaleString();
    }
    return '+' + value;
  }
}
