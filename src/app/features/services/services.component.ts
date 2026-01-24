import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslationService } from '../../core/services/translation.service';
import {
  SERVICES_DATA,
  ExtendedService,
  ServiceFeature,
  ServiceTag,
} from '../../core/data/services.data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faMobileScreen,
  faGlobe,
  faBolt,
  faChartBar,
  faBrain,
  faCloud,
  faLightbulb,
  faRocket,
  faCheckCircle,
  faCog,
  faCheck,
  faDesktop,
  faShieldAlt,
  faGaugeHigh,
  faClipboardList,
  faGears,
  faLock,
  faFileContract,
  faChartLine,
  faEye,
  faHandshake,
  faPenRuler,
  faWrench,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAndroid,
  faApple,
  faAws,
  faMicrosoft,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

interface ProcessFeature {
  en: string;
  ar: string;
}

interface ProcessPhase {
  number: number;
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  features: ProcessFeature[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContainerComponent,
    SectionComponent,
    ButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  // Service icon mapping
  iconMap: { [key: string]: IconDefinition } = {
    transform: faBolt,
    code: faCode,
    analytics: faChartBar,
    ai: faBrain,
    cloud: faCloud,
    web: faGlobe,
    mobile: faMobileScreen,
    lightbulb: faLightbulb,
    rocket: faRocket,
    check: faCheckCircle,
    cog: faCog,
    desktop: faDesktop,
    shield: faShieldAlt,
    handshake: faHandshake,
    design: faPenRuler,
    wrench: faWrench,
  };

  // Tag icon mapping
  tagIconMap: { [key: string]: IconDefinition } = {
    // Web Development tags
    responsive: faDesktop,
    fast: faGaugeHigh,
    // Mobile tags
    android: faAndroid,
    ios: faApple,
    // IT Infrastructure tags
    aws: faAws,
    azure: faMicrosoft,
    gcp: faGoogle,
    // Digital Transformation tags
    strategy: faClipboardList,
    implementation: faGears,
    // Software Solutions tags
    secure: faLock,
    compliant: faFileContract,
    // Data Analytics tags
    analytics: faChartLine,
    insights: faEye,
  };

  // Checkmark icon
  faCheck = faCheck;

  // All services
  services: ExtendedService[] = SERVICES_DATA;

  // Process phases - 4 phases
  processPhases: ProcessPhase[] = [
    {
      number: 1,
      icon: 'handshake',
      title: {
        en: 'Alignment',
        ar: 'المحاذاة',
      },
      description: {
        en: 'We begin by diving deep into your business objectives and challenges, establishing a solid foundation for strategic partnership and successful outcomes.',
        ar: 'نبدأ بالتعمق في أهداف أعمالك وتحدياتها، وإنشاء أساس متين للشراكة الاستراتيجية والنتائج الناجحة.',
      },
      features: [
        { en: 'Business needs analysis', ar: 'تحليل احتياجات الأعمال' },
        { en: 'Solution roadmap planning', ar: 'تخطيط خارطة طريق الحلول' },
        { en: 'Budget estimation & planning', ar: 'تقدير الميزانية والتخطيط' },
        { en: 'Project milestone scheduling', ar: 'جدولة معالم المشروع' },
      ],
    },
    {
      number: 2,
      icon: 'design',
      title: {
        en: 'Design',
        ar: 'التصميم',
      },
      description: {
        en: 'We craft intuitive, user-centric designs that prioritize exceptional user experience and drive meaningful engagement with your target audience.',
        ar: 'نصمم تصاميم بديهية تركز على المستخدم وتُعطي الأولوية لتجربة المستخدم الاستثنائية وتدفع التفاعل الهادف مع جمهورك المستهدف.',
      },
      features: [
        { en: 'Technical specifications development', ar: 'تطوير المواصفات التقنية' },
        { en: 'User experience & interface design', ar: 'تصميم تجربة المستخدم والواجهة' },
        { en: 'Interactive prototype creation', ar: 'إنشاء النماذج التفاعلية' },
      ],
    },
    {
      number: 3,
      icon: 'code',
      title: {
        en: 'Development',
        ar: 'التطوير',
      },
      description: {
        en: 'We build robust, scalable solutions using cutting-edge technologies and industry best practices, ensuring your system grows seamlessly with your business.',
        ar: 'نبني حلول قوية وقابلة للتوسع باستخدام أحدث التقنيات وأفضل الممارسات في الصناعة، مما يضمن نمو نظامك بسلاسة مع أعمالك.',
      },
      features: [
        {
          en: 'Cloud infrastructure & DevOps automation',
          ar: 'البنية التحتية السحابية وأتمتة DevOps',
        },
        { en: 'Full-stack development & integration', ar: 'التطوير الشامل والتكامل' },
        { en: 'Comprehensive quality assurance', ar: 'ضمان الجودة الشامل' },
        { en: 'Secure production deployment', ar: 'النشر الآمن للإنتاج' },
      ],
    },
    {
      number: 4,
      icon: 'wrench',
      title: {
        en: 'Maintenance & Growth',
        ar: 'الصيانة والنمو',
      },
      description: {
        en: 'We provide continuous support and strategic enhancements, ensuring optimal performance and evolving your solution to meet future business needs.',
        ar: 'نقدم الدعم المستمر والتحسينات الاستراتيجية، مما يضمن الأداء الأمثل وتطوير حلولك لتلبية احتياجات الأعمال المستقبلية.',
      },
      features: [
        { en: '24/7 system monitoring & alerts', ar: 'مراقبة النظام على مدار الساعة والتنبيهات' },
        { en: 'Rapid issue resolution', ar: 'حل المشاكل السريع' },
        { en: 'Performance analytics & optimization', ar: 'تحليلات الأداء والتحسين' },
        { en: 'Knowledge transfer & documentation', ar: 'نقل المعرفة والتوثيق' },
        { en: 'Strategic roadmap evolution', ar: 'تطوير خارطة الطريق الاستراتيجية' },
      ],
    },
  ];

  // Content
  content = {
    heading: {
      en: 'Our Services',
      ar: 'خدماتنا',
    },
    subtitle: {
      en: 'Transforming ideas into digital excellence. We offer comprehensive solutions to drive your business forward.',
      ar: 'نحول الأفكار إلى تميز رقمي. نقدم حلولاً شاملة لدفع عملك نحو الأمام.',
    },
    learnMore: {
      en: 'Learn More',
      ar: 'اعرف المزيد',
    },
    processHeading: {
      en: 'How We Deliver Excellence',
      ar: 'كيف نقدم التميز',
    },
    processSubtitle: {
      en: 'Our methodical 4-phase approach transforms your vision into reality while ensuring seamless collaboration and exceptional results.',
      ar: 'نهجنا المنهجي المكون من 4 مراحل يحول رؤيتك إلى واقع مع ضمان التعاون السلس والنتائج الاستثنائية.',
    },
    ctaHeading: {
      en: 'Experience Superior Digital Solutions',
      ar: 'جرب الحلول الرقمية المتميزة',
    },
    ctaButton: {
      en: 'Get Started',
      ar: 'ابدأ الآن',
    },
  };

  getServiceTitle(service: ExtendedService): string {
    return service.title[this.currentLang()];
  }

  getServiceDescription(service: ExtendedService): string {
    return service.description[this.currentLang()];
  }

  getFeatureText(feature: ServiceFeature): string {
    return feature[this.currentLang()];
  }

  getProcessFeatureText(feature: ProcessFeature): string {
    return feature[this.currentLang()];
  }

  getIcon(iconName: string | undefined): IconDefinition {
    return iconName && this.iconMap[iconName] ? this.iconMap[iconName] : faBolt;
  }

  getTagIcon(tag: ServiceTag): IconDefinition | null {
    if (tag.icon && this.tagIconMap[tag.icon]) {
      return this.tagIconMap[tag.icon];
    }
    return null;
  }
}
