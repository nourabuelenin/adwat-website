import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslationService } from '../../core/services/translation.service';

interface NewsArticle {
  id: string;
  title: { en: string; ar: string };
  bulletPoints: { en: string[]; ar: string[] };
  image: string;
  imageCredit: { en: string; ar: string };
}

interface Newsletter {
  id: number;
  slug: string;
  coverImage: string;
  dateLabel: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  heroImage: string;
  sectionTitle: { en: string; ar: string };
  sectionDescription: { en: string; ar: string };
  partners: string[];
  articles: NewsArticle[];
  tags: { en: string; ar: string }[];
}

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  private translationService = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  currentLang = this.translationService.currentLang;
  newsletter = signal<Newsletter | null>(null);
  currentSlide = signal(0);

  content = {
    viewOtherTitle: { en: 'View Other Newsletters', ar: 'عرض النشرات الأخرى' },
  };

  // All newsletters data
  newsletters: Newsletter[] = [
    {
      id: 1,
      slug: 'adwats-magazine-2nd-edition-jan-2026',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'January Newsletter • 01 Jan 2026', ar: 'نشرة يناير • 01 يناير 2026' },
      title: { en: "Adwat's Magazine 2nd Edition", ar: 'مجلة أدوات الإصدار الثاني' },
      description: {
        en: 'A weekly tech intelligence report, analyzing global trends and their transformative effects on the corporate landscape.',
        ar: 'تقرير استخباراتي تقني أسبوعي، يحلل الاتجاهات العالمية وتأثيراتها على مشهد الشركات.',
      },
      heroImage: 'assets/images/blogs/hero-tech.jpg',
      sectionTitle: { en: 'Top Tech News Highlights', ar: 'أبرز الأخبار التقنية' },
      sectionDescription: {
        en: 'Weekly tech intelligence analyzing the most important developments in the tech world and their impact on business.',
        ar: 'تغطية تقنية أسبوعية ترصد أهم مستجدات عالم التقنية وتأثيراتها على الأعمال وبيئة الشركات.',
      },
      partners: [
        'assets/images/blogs/jan news/logos/1.2 3.webp',
        'assets/images/blogs/jan news/logos/1.2 4.webp',
        'assets/images/blogs/jan news/logos/1.2 5.webp',
        'assets/images/blogs/jan news/logos/1.2 6.webp',
      ],
      articles: [
        {
          id: 'ai-systems',
          title: {
            en: 'AI Transitions to Autonomous Operating Systems Within Corporations',
            ar: 'الذكاء الاصطناعي ينتقل إلى أنظمة تشغيل ذاتية داخل الشركات',
          },
          bulletPoints: {
            en: [
              'Major tech companies are developing AI systems that can autonomously manage corporate operations.',
              'New systems can coordinate between different departments without direct human intervention.',
              'This trend enhances automation and directly impacts operations and decision-making.',
              'Companies need to build systems capable of integrating with AI technologies from the start.',
            ],
            ar: [
              'تطور الذكاء الاصطناعي من أدوات مساعدة إلى أنظمة قادرة على تنفيذ مهام كاملة بشكل شبه مستقل.',
              'الأنظمة الجديدة تستطيع التنسيق بين الأقسام المختلفة دون تدخل بشري مباشر.',
              'هذا التوجه يعزز الأتمتة ويؤثر بشكل مباشر على التشغيل واتخاذ القرار.',
              'يتطلب من الشركات بناء أنظمة قابلة للدمج مع تقنيات الذكاء الاصطناعي منذ البداية.',
            ],
          },
          image: 'assets/images/blogs/jan news/ai.webp',
          imageCredit: {
            en: 'Image courtesy of Laura Davidson via Unsplash',
            ar: 'الصورة من Laura Davidson عبر Unsplash',
          },
        },
        {
          id: 'mobile-apps',
          title: {
            en: 'Publishing Mobile Apps Made Easier Without Xcode or Android Studio',
            ar: 'نشر تطبيقات الهواتف أصبح أسهل بدون Xcode أو Android',
          },
          bulletPoints: {
            en: [
              'New development platforms are emerging that allow developers to build and publish mobile applications without traditional IDEs.',
              'These tools use cloud-based compilation and simplified workflows.',
              'Developers can now focus more on features rather than complex build configurations.',
              'This democratizes mobile app development for smaller teams.',
            ],
            ar: [
              'تظهر منصات تطوير جديدة تسمح للمطورين ببناء ونشر تطبيقات الهواتف دون الحاجة لبيئات التطوير التقليدية.',
              'تستخدم هذه الأدوات التجميع السحابي وسير العمل المبسط.',
              'يمكن للمطورين الآن التركيز على الميزات بدلاً من تكوينات البناء المعقدة.',
              'هذا يجعل تطوير التطبيقات متاحاً للفرق الصغيرة.',
            ],
          },
          image: 'assets/images/blogs/jan news/xcode.webp',
          imageCredit: {
            en: 'Image courtesy of Unsplash',
            ar: 'الصورة من Unsplash',
          },
        },
        {
          id: 'ibm-data',
          title: {
            en: 'IBM Launches Data Management Solutions for AI Operations',
            ar: 'IBM تطلق حلول سيادة البيانات لتشغيل الذكاء الاصطناعي',
          },
          bulletPoints: {
            en: [
              'IBM has announced new data sovereignty solutions designed specifically for AI workloads.',
              'These solutions help enterprises maintain control over their data while leveraging AI capabilities.',
              'The platform ensures compliance with regional data regulations.',
              'Organizations can now deploy AI with confidence in data security.',
            ],
            ar: [
              'أعلنت IBM عن حلول جديدة لسيادة البيانات مصممة خصيصاً لأحمال عمل الذكاء الاصطناعي.',
              'تساعد هذه الحلول الشركات على الحفاظ على السيطرة على بياناتها مع الاستفادة من قدرات الذكاء الاصطناعي.',
              'تضمن المنصة الامتثال للوائح البيانات الإقليمية.',
              'يمكن للمؤسسات الآن نشر الذكاء الاصطناعي بثقة في أمان البيانات.',
            ],
          },
          image: 'assets/images/blogs/jan news/ibm.webp',
          imageCredit: {
            en: 'Image courtesy of IBM',
            ar: 'الصورة من IBM',
          },
        },
        {
          id: 'aws-cloud',
          title: {
            en: 'AWS Launches European Sovereign Cloud for Users and Companies',
            ar: 'AWS تطلق سحابة أوروبية مستقلة للمستخدمين والشركات',
          },
          bulletPoints: {
            en: [
              'Amazon Web Services has launched a new European sovereign cloud designed to meet strict data residency requirements.',
              'This service allows European businesses to keep their data within EU borders.',
              'The cloud infrastructure is fully operated by EU-based personnel.',
              'This addresses growing concerns about data sovereignty in the region.',
            ],
            ar: [
              'أطلقت خدمات أمازون ويب سحابة أوروبية مستقلة جديدة مصممة لتلبية متطلبات إقامة البيانات الصارمة.',
              'تتيح هذه الخدمة للشركات الأوروبية الاحتفاظ ببياناتها داخل حدود الاتحاد الأوروبي.',
              'البنية التحتية السحابية تُدار بالكامل من قبل موظفين مقيمين في الاتحاد الأوروبي.',
              'هذا يعالج المخاوف المتزايدة بشأن سيادة البيانات في المنطقة.',
            ],
          },
          image: 'assets/images/blogs/jan news/amazon.webp',
          imageCredit: {
            en: 'Image courtesy of Amazon Web Services',
            ar: 'الصورة من Amazon Web Services',
          },
        },
      ],
      tags: [
        { en: 'Newsletter', ar: 'نشرة إخبارية' },
        { en: 'Developments', ar: 'تطورات' },
      ],
    },
    {
      id: 2,
      slug: 'adwats-magazine-1st-edition-dec-2025',
      coverImage: 'assets/images/blogs/jan_blogs.webp',
      dateLabel: { en: 'December Newsletter • 01 Dec 2025', ar: 'نشرة ديسمبر • 01 ديسمبر 2025' },
      title: { en: "Adwat's Magazine 1st Edition", ar: 'مجلة أدوات الإصدار الأول' },
      description: {
        en: 'Our inaugural tech intelligence report covering the most significant technology developments.',
        ar: 'تقريرنا الاستخباراتي التقني الافتتاحي الذي يغطي أهم التطورات التقنية.',
      },
      heroImage: 'assets/images/blogs/hero-tech.jpg',
      sectionTitle: { en: 'Top Tech News Highlights', ar: 'أبرز الأخبار التقنية' },
      sectionDescription: {
        en: 'Weekly tech intelligence analyzing the most important developments in the tech world.',
        ar: 'تغطية تقنية أسبوعية ترصد أهم مستجدات عالم التقنية.',
      },
      partners: [
        'assets/images/partners/ibm.webp',
        'assets/images/partners/darktrace.webp',
        'assets/images/partners/servicenow.webp',
      ],
      articles: [
        {
          id: 'cloud-computing',
          title: {
            en: 'Cloud Computing Trends for 2026',
            ar: 'اتجاهات الحوسبة السحابية لعام 2026',
          },
          bulletPoints: {
            en: [
              'An analysis of emerging cloud computing trends that will shape enterprise IT strategies.',
              'Multi-cloud adoption continues to accelerate across industries.',
              'Edge computing is becoming essential for real-time applications.',
              'Security and compliance remain top priorities for cloud deployments.',
            ],
            ar: [
              'تحليل لاتجاهات الحوسبة السحابية الناشئة التي ستشكل استراتيجيات تقنية المعلومات المؤسسية.',
              'يستمر اعتماد السحابة المتعددة في التسارع عبر الصناعات.',
              'أصبحت الحوسبة الطرفية ضرورية للتطبيقات في الوقت الفعلي.',
              'يظل الأمان والامتثال من الأولويات الرئيسية لنشر السحابة.',
            ],
          },
          image: 'assets/images/blogs/cloud-trends.jpg',
          imageCredit: {
            en: 'Image courtesy of Unsplash',
            ar: 'الصورة من Unsplash',
          },
        },
      ],
      tags: [
        { en: 'Newsletter', ar: 'نشرة إخبارية' },
        { en: 'Cloud', ar: 'سحابة' },
      ],
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.loadNewsletter(slug);
    });
  }

  loadNewsletter(slug: string): void {
    const found = this.newsletters.find((n) => n.slug === slug);
    if (found) {
      this.newsletter.set(found);
    } else {
      // Redirect to news page if not found
      this.router.navigate(['/news']);
    }
  }

  get otherNewsletters(): Newsletter[] {
    const current = this.newsletter();
    if (!current) return this.newsletters.slice(0, 4);
    return this.newsletters.filter((n) => n.id !== current.id).slice(0, 4);
  }

  navigateToNewsletter(slug: string): void {
    this.router.navigate(['/news', slug]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  previousSlide(): void {
    if (this.currentSlide() > 0) {
      this.currentSlide.set(this.currentSlide() - 1);
    }
  }

  nextSlide(): void {
    const maxSlides = Math.max(0, this.otherNewsletters.length - 3);
    if (this.currentSlide() < maxSlides) {
      this.currentSlide.set(this.currentSlide() + 1);
    }
  }
}
