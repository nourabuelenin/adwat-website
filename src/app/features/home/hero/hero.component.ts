import { Component, inject, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { DashboardMockupComponent } from '../../../shared/components/dashboard-mockup/dashboard-mockup.component';
import { PartnersBannerComponent } from '../partners-banner/partners-banner.component';
import { PARTNERS_DATA } from '../../../core/data/content.data';
import { Partner } from '../../../core/models/content.models';

import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    ContainerComponent,
    DashboardMockupComponent,
    PartnersBannerComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  partners: Partner[] = PARTNERS_DATA;

  @ViewChild('trustSignalsSection') trustSignalsSection!: ElementRef;
  private observer: IntersectionObserver | null = null;

  heroContent = {
    headline: {
      en: 'Integrated Software for Strategic Transformation',
      ar: 'برمجيات متكاملة لتحوّل استراتيجي',
    },
    subheadline: {
      en: "Your technical partner to build reliable systems that support your organization's growth",
      ar: 'شريكك التقني لبناء أنظمة موثوقة تدعم النمو المؤسسي',
    },
    primaryCTA: {
      en: 'Start Your Project',
      ar: 'ابدأ مشروعك',
    },
    secondaryCTA: {
      en: 'Explore Services',
      ar: 'استكشف الخدمات',
    },
    partnersTitle: {
      en: 'Trusted by Leading Organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة',
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
