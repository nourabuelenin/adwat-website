import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslationService } from '../../core/services/translation.service';

interface Newsletter {
  id: number;
  slug: string;
  coverImage: string;
  dateLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tags: { en: string; ar: string }[];
  featured?: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  // Pagination
  currentPage = signal(1);
  itemsPerPage = 9;

  content = {
    pageTitle: { en: 'Our News', ar: 'أخبارنا' },
    pageSubtitle: {
      en: 'Trusted By Leading Organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة',
    },
    pageDescription: {
      en: 'Delivering Mission Critical Solutions For Government And Enterprise Clients',
      ar: 'تقديم حلول حيوية للعملاء الحكوميين والمؤسسات',
    },
    recentHeading: { en: "ADWAT'S NEWS", ar: 'أخبار أدوات' },
    recentTitle: { en: 'Recent Newsletters', ar: 'النشرات الإخبارية الأخيرة' },
    allTitle: { en: 'All Newsletters', ar: 'جميع النشرات الإخبارية' },
    previous: { en: 'Previous', ar: 'السابق' },
    next: { en: 'Next', ar: 'التالي' },
  };

  newsletters: Newsletter[] = [
    {
      id: 1,
      slug: 'adwats-magazine-2nd-edition-jan-2026',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
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
      featured: true,
    },
    {
      id: 2,
      slug: 'adwats-magazine-1st-edition-dec-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
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
      featured: true,
    },
    {
      id: 3,
      slug: 'tech-trends-nov-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 4,
      slug: 'cloud-insights-oct-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 5,
      slug: 'ai-developments-sep-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 6,
      slug: 'cybersecurity-report-aug-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 7,
      slug: 'digital-transformation-jul-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 8,
      slug: 'enterprise-solutions-jun-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 9,
      slug: 'innovation-insights-may-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 10,
      slug: 'tech-spotlight-apr-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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
      id: 11,
      slug: 'industry-update-mar-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2025', ar: 'نشرة يناير • 01 يناير 2025' },
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

  // Get featured newsletters (first 2)
  get featuredNewsletters(): Newsletter[] {
    return this.newsletters.filter((n) => n.featured).slice(0, 2);
  }

  // Get all newsletters (non-featured for the grid)
  get allNewsletters(): Newsletter[] {
    return this.newsletters.filter((n) => !n.featured);
  }

  // Paginated newsletters
  paginatedNewsletters = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.allNewsletters.slice(start, end);
  });

  // Total pages
  totalPages = computed(() => {
    return Math.ceil(this.allNewsletters.length / this.itemsPerPage);
  });

  // Page numbers array
  pageNumbers = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
