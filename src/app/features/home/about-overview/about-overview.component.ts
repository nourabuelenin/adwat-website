import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ContainerComponent, SectionComponent],
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
      en: 'Trusted Technology Partner for Saudi Arabia\'s Digital Future',
      ar: 'شريك تقني موثوق لمستقبل المملكة الرقمي'
    },
    description: {
      en: 'Adwat IT is a leading Saudi software development company established in 2000. With over two decades of experience, we deliver smart, scalable digital solutions for both government and private sectors. We specialize in building integrated systems that support digital transformation and align with Saudi Arabia\'s Vision 2030.',
      ar: 'أدوات لتقنية المعلومات هي شركة سعودية رائدة في تطوير البرمجيات تأسست عام 2000. مع أكثر من عقدين من الخبرة، نقدم حلولًا رقمية ذكية وقابلة للتطوير لكل من القطاعين الحكومي والخاص. نحن متخصصون في بناء أنظمة متكاملة تدعم التحول الرقمي وتتماشى مع رؤية المملكة 2030.'
    },
    mission: {
      en: 'We don\'t just build software. We create meaningful digital experiences that turn business challenges into opportunities and ideas into success stories.',
      ar: 'نحن لا نبني البرمجيات فقط. نخلق تجارب رقمية ذات مغزى تحول تحديات الأعمال إلى فرص والأفكار إلى قصص نجاح.'
    },
    cta: {
      en: 'Learn More About Us',
      ar: 'تعرف أكثر عنا'
    }
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
  }
}
