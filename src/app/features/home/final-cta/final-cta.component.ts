import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent, SectionComponent],
  template: `
    <app-section [variant]="'dark'">
      <app-container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            {{ content.title[currentLang] }}
          </h2>
          <p class="text-xl text-white/80 mb-8 leading-relaxed">
            {{ content.description[currentLang] }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <app-button [variant]="'primary'" [size]="'large'" class="bg-white text-primary hover:bg-white/90" routerLink="/contact">
              {{ content.primaryCTA[currentLang] }}
            </app-button>
            <app-button [variant]="'secondary'" [size]="'large'" class="border-white text-white hover:bg-white hover:text-primary" routerLink="/services">
              {{ content.secondaryCTA[currentLang] }}
            </app-button>
          </div>
        </div>
      </app-container>
    </app-section>
  `
})
export class FinalCtaComponent {
  currentLang: 'en' | 'ar' = 'en';

  content = {
    title: { en: 'Ready to Transform Your Digital Future?', ar: 'هل أنت مستعد لتحويل مستقبلك الرقمي؟' },
    description: { en: 'Partner with Adwat to build secure, scalable solutions that drive your business forward. Let\'s create something exceptional together.', ar: 'شارك مع أدوات لبناء حلول آمنة وقابلة للتطوير تدفع عملك إلى الأمام. دعنا نخلق شيئًا استثنائيًا معًا.' },
    primaryCTA: { en: 'Get Started Today', ar: 'ابدأ اليوم' },
    secondaryCTA: { en: 'Explore Services', ar: 'استكشف الخدمات' }
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') this.currentLang = storedLang;
  }
}
