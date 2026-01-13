import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { Hero3dComponent } from '../../../shared/components/hero3d/hero3d.component';
import { PARTNERS_DATA } from '../../../core/data/content.data';
import { Partner } from '../../../core/models/content.models';

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
  partners: Partner[] = PARTNERS_DATA;

  heroContent = {
    headline: {
      en: 'Integrated Software for Strategic Transformation',
      ar: 'برمجيات متكاملة لتحوّل استراتيجي'
    },
    subheadline: {
      en: 'Your technical partner to build reliable systems that support your organization\'s growth',
      ar: 'شريكك التقني لبناء أنظمة موثوقة تدعم نمو مؤسستك'
    },
    primaryCTA: {
      en: 'Start Your Project',
      ar: 'ابدأ مشروعك'
    },
    secondaryCTA: {
      en: 'Explore Services',
      ar: 'استكشف الخدمات'
    },
    partnersTitle: {
      en: 'Trusted by Leading Organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة'
    }
  };
}
