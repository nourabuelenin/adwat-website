import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { FEATURES_DATA } from '../../../core/data/content.data';
import { Feature } from '../../../core/models/content.models';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent],
  template: `
    <app-section [variant]="'dark'" id="why-choose-us">
      <app-container>
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-adwat-cream font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang] }}
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
            {{ content.title[currentLang] }}
          </h2>
          <p class="text-lg text-white/80">
            {{ content.description[currentLang] }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let feature of features" class="text-center">
            <div class="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl">✓</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ feature.title[currentLang] }}
            </h3>
            <p class="text-white/70 leading-relaxed">
              {{ feature.description[currentLang] }}
            </p>
          </div>
        </div>
      </app-container>
    </app-section>
  `
})
export class WhyChooseUsComponent {
  currentLang: 'en' | 'ar' = 'en';
  features: Feature[] = FEATURES_DATA;

  content = {
    heading: { en: 'Why Choose Adwat', ar: 'لماذا تختار أدوات' },
    title: { en: 'Your Trusted Partner in Digital Excellence', ar: 'شريكك الموثوق في التميز الرقمي' },
    description: { en: 'Proven expertise, enterprise-scale solutions, and unwavering commitment to your success', ar: 'خبرة مثبتة وحلول على نطاق المؤسسات والتزام ثابت بنجاحك' }
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') this.currentLang = storedLang;
  }
}
