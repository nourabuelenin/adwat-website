import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { Hero3dComponent } from '../../../shared/components/hero3d/hero3d.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    ButtonComponent, 
    ContainerComponent,
    Hero3dComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  currentLang: 'en' | 'ar' = 'en';

  heroContent = {
    headline: {
      en: 'Building Tomorrow\'s Digital Solutions',
      ar: 'بناء الحلول الرقمية للغد'
    },
    subheadline: {
      en: 'Transforming ideas into powerful, scalable technology',
      ar: 'تحويل الأفكار إلى تكنولوجيا قوية وقابلة للتطوير'
    },
    primaryCTA: {
      en: 'Start Your Project',
      ar: 'ابدأ مشروعك'
    },
    secondaryCTA: {
      en: 'Explore Services',
      ar: 'استكشف الخدمات'
    },
    trustSignals: [
      { value: '50+', label: { en: 'Projects', ar: 'مشروع' } },
      { value: '30+', label: { en: 'Clients', ar: 'عميل' } },
      { value: '5+', label: { en: 'Years', ar: 'سنوات' } },
      { value: '99%', label: { en: 'Satisfaction', ar: 'رضا' } }
    ]
  };
}
