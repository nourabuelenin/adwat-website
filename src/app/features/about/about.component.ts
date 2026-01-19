import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TranslationService } from '../../core/services/translation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faLayerGroup, faAppleAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  linkedinIcon = faLinkedin;

  content = {
    hero: {
      title: {
        en: 'About Adwat',
        ar: 'عن أدوات',
      },
      subtitle: {
        en: 'Transforming Business Through Smart Digital Solutions',
        ar: 'تحويل الأعمال من خلال حلول رقمية ذكية',
      },
    },
    sections: [
      {
        title: {
          en: 'Driving Digital Transformation',
          ar: 'قيادة التحول الرقمي',
        },
        description: {
          en: 'Adwat is a company specialized in building digital solutions for organizations seeking technical transformation, going beyond mere system development to improving work methods and supporting decision-making. We work collaboratively with our clients to deliver strategic, scalable Digital Systems, Data Infrastructure, Software, Business Intelligence, and Machine Learning solutions.',
          ar: 'أدوات شركة متخصصة في بناء الحلول الرقمية للمؤسسات التي تسعى إلى تحوّل تقني، يتجاوز مجرد تطوير الأنظمة إلى تحسين طريقة العمل ودعم اتخاذ القرار. نعمل بشكل تعاوني مع عملائنا لتقديم أنظمة رقمية استراتيجية وقابلة للتطوير وبنية تحتية للبيانات والبرمجيات وذكاء الأعمال وحلول التعلم الآلي.',
        },
        image: '/assets/images/about/digital-transformation.jpg',
      },
      {
        title: {
          en: 'Partnering For Sustainable Growth',
          ar: 'الشراكة من أجل النمو المستدام',
        },
        description: {
          en: 'We work with our clients as a strategic partner, starting by understanding operational challenges and workflows, then designing and implementing reliable, scalable Digital Systems that support institutional performance and keep pace with business growth. Our work focuses on delivering Cloud-Native Solutions, APIs, and supporting Digital Software, Data Products, Business Intelligence, and Machine Learning.',
          ar: 'نعمل مع عملائنا كشريك استراتيجي، نبدأ بفهم التحديات التشغيلية وسير العمليات، ثم نُصمم وننفذ أنظمة رقمية موثوقة وقابلة للتوسع، تدعم الأداء المؤسسي وتواكب نمو الأعمال. يركز عملنا على تقديم حلول سحابية أصلية وواجهات برمجة التطبيقات ودعم البرمجيات الرقمية ومنتجات البيانات وذكاء الأعمال والتعلم الآلي.',
        },
        image: '/assets/images/about/sustainable-growth.jpg',
      },
      {
        title: {
          en: 'Solutions Built Around Real Business Needs',
          ar: 'حلول مبنية حول احتياجات العمل الحقيقية',
        },
        description: {
          en: 'Our work focuses on delivering practical solutions built on a realistic understanding of organizational needs, measured by the impact they achieve on performance, decisions, and outcomes. We specialize in integrating systems with third party APIs, advanced Data Infrastructure, Data Products, Scalable Digital Systems using AI and Machine Learning, and Business Intelligence solutions.',
          ar: 'يركز عملنا على تقديم حلول عملية تُبنى على فهم واقعي لاحتياجات المؤسسات، وتقاس قيمتها بالأثر الذي تحققه على الأداء والقرارات والنتائج. نتخصص في دمج الأنظمة مع واجهات برمجة التطبيقات من طرف ثالث، والبنية التحتية المتقدمة للبيانات، ومنتجات البيانات، والأنظمة الرقمية القابلة للتطوير باستخدام الذكاء الاصطناعي والتعلم الآلي، وحلول ذكاء الأعمال.',
        },
        image: '/assets/images/about/business-needs.jpg',
      },
    ],
    whyChoose: {
      title: {
        en: 'Why Choose Adwat?',
        ar: 'لماذا تختار أدوات؟',
      },
      subtitle: {
        en: "At Adwat, We Don't Just Offer Technical Solutions—We Create Digital Ecosystems That Drive Impact.",
        ar: 'في أدوات، لا نقدم حلولاً تقنية فحسب - بل نبتكر نظمًا رقمية متكاملة تحدث تأثيرًا حقيقيًا.',
      },
      features: [
        {
          icon: faDatabase,
          iconColor: '#7AB87A',
          iconBg: '#E8F5E8',
          title: {
            en: 'AI-Powered Data Intelligence',
            ar: 'ذكاء بيانات مدعوم بالذكاء الاصطناعي',
          },
          description: {
            en: 'Turn raw data into actionable insights with Advanced Analytics',
            ar: 'حوّل البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام التحليلات المتقدمة',
          },
        },
        {
          icon: faLayerGroup,
          iconColor: '#4A90E2',
          iconBg: '#E8F2FC',
          title: {
            en: 'Seamless System Integration',
            ar: 'تكامل سلس للأنظمة',
          },
          description: {
            en: 'Unified workflows across your tech stack with Perfect Sync',
            ar: 'سير عمل موحد عبر مجموعة التقنيات الخاصة بك مع مزامنة مثالية',
          },
        },
        {
          icon: faAppleAlt,
          iconColor: '#E67E22',
          iconBg: '#FDF3E8',
          title: {
            en: 'Agile & Strategic Development',
            ar: 'تطوير رشيق واستراتيجي',
          },
          description: {
            en: 'Fast, flexible solutions aligned with your business goals',
            ar: 'حلول سريعة ومرنة متوافقة مع أهداف عملك',
          },
        },
        {
          icon: faClock,
          iconColor: '#9B59B6',
          iconBg: '#F4ECFA',
          title: {
            en: 'Future-Ready Innovation',
            ar: 'ابتكار جاهز للمستقبل',
          },
          description: {
            en: 'Scalable tech that evolves with your growth',
            ar: 'تقنية قابلة للتطوير تتطور مع نموك',
          },
        },
      ],
    },
    team: {
      title: {
        en: 'Meet Our Team',
        ar: 'تعرف على فريقنا',
      },
      members: [
        {
          name: { en: 'John Doe', ar: 'جون دو' },
          position: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
          avatar: '/assets/images/team/member-1.jpg',
          linkedin: 'https://linkedin.com',
        },
        {
          name: { en: 'John Doe', ar: 'جون دو' },
          position: { en: 'Chief Technology Officer', ar: 'المدير التقني التنفيذي' },
          avatar: '/assets/images/team/member-2.jpg',
          linkedin: 'https://linkedin.com',
        },
        {
          name: { en: 'John Doe', ar: 'جون دو' },
          position: { en: 'Lead Developer', ar: 'مطور رئيسي' },
          avatar: '/assets/images/team/member-3.jpg',
          linkedin: 'https://linkedin.com',
        },
        {
          name: { en: 'John Doe', ar: 'جون دو' },
          position: { en: 'UX Designer', ar: 'مصمم تجربة المستخدم' },
          avatar: '/assets/images/team/member-4.jpg',
          linkedin: 'https://linkedin.com',
        },
      ],
    },
  };
}
