import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  currentLang: 'en' | 'ar' = 'en';

  heroContent = {
    headline: {
      en: 'Architecting Digital Futures for Saudi Arabia',
      ar: 'بناء المستقبل الرقمي للمملكة العربية السعودية'
    },
    subheadline: {
      en: 'Enterprise-grade software solutions empowering government and business transformation since 2000',
      ar: 'حلول برمجية على مستوى المؤسسات تمكّن التحول الحكومي والتجاري منذ عام 2000'
    },
    primaryCTA: {
      en: 'Contact Us',
      ar: 'اتصل بنا'
    },
    secondaryCTA: {
      en: 'View Our Services',
      ar: 'اطلع على خدماتنا'
    },
    trustSignals: [
      { value: '20+', label: { en: 'Years of Excellence', ar: 'عامًا من التميز' } },
      { value: '500+', label: { en: 'Enterprise Projects', ar: 'مشروع مؤسسي' } },
      { value: '100+', label: { en: 'Government Clients', ar: 'عميل حكومي' } },
      { value: '5M+', label: { en: 'Users Served', ar: 'مستخدم نخدمهم' } }
    ]
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
  }
}
