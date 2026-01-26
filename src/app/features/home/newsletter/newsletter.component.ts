import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslationService } from '../../../core/services/translation.service';

interface Newsletter {
  id: number;
  coverImage: string;
  dateLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: { en: string; ar: string }[];
}

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ContainerComponent, SectionComponent, ButtonComponent, RouterLink],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  content = {
    heading: { en: "ADWAT'S NEWS", ar: 'أخبار أدوات' },
    title: { en: 'Recent Newsletters', ar: 'النشرات الإخبارية الأخيرة' },
    viewAllButton: { en: 'View All News', ar: 'عرض جميع الأخبار' },
  };

  newsletters: Newsletter[] = [
    {
      id: 1,
      coverImage: 'assets/images/blogs/jan_blogs.png',
      dateLabel: { en: 'January Newsletter • 01 Jan 2026', ar: 'نشرة يناير • 01 يناير 2026' },
      title: { en: "Adwat's Magazine 2nd Edition", ar: 'مجلة أدوات الإصدار الثاني' },
      description: {
        en: 'A weekly tech intelligence report, analyzing global trends and their transformative effects on the corporate landscape and executive decision-making.',
        ar: 'تقرير استخباراتي تقني أسبوعي، يحلل الاتجاهات العالمية وتأثيراتها التحويلية على مشهد الشركات وصنع القرار التنفيذي.',
      },
      tags: [
        { en: 'Newsletter', ar: 'نشرة إخبارية' },
        { en: 'Developments', ar: 'تطورات' },
      ],
    },
    {
      id: 2,
      coverImage: 'assets/images/blogs/jan_blogs.png',
      dateLabel: { en: 'January Newsletter • 01 Jan 2026', ar: 'نشرة يناير • 01 يناير 2026' },
      title: { en: "Adwat's Magazine 2nd Edition", ar: 'مجلة أدوات الإصدار الثاني' },
      description: {
        en: 'A weekly tech intelligence report, analyzing global trends and their transformative effects on the corporate landscape and executive decision-making.',
        ar: 'تقرير استخباراتي تقني أسبوعي، يحلل الاتجاهات العالمية وتأثيراتها التحويلية على مشهد الشركات وصنع القرار التنفيذي.',
      },
      tags: [
        { en: 'Newsletter', ar: 'نشرة إخبارية' },
        { en: 'Developments', ar: 'تطورات' },
      ],
    },
  ];
}
