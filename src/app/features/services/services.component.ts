import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslationService } from '../../core/services/translation.service';
import { SERVICES_DATA } from '../../core/data/services.data';
import { Service } from '../../core/models/content.models';
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
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface ProcessPhase {
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
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

  // Icon mapping
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
  };

  // Featured services (with images)
  featuredServices: (Service & { imageUrl: string })[] = [
    {
      ...SERVICES_DATA.find((s) => s.id === 'custom-software')!,
      imageUrl: '/assets/images/custom-software.jpg',
    },
    {
      ...SERVICES_DATA.find((s) => s.id === 'web-development')!,
      imageUrl: '/assets/images/web-mobile-dev.jpg',
    },
  ];

  // All services for the grid
  allServices: Service[] = SERVICES_DATA;

  // Process phases
  processPhases: ProcessPhase[] = [
    {
      icon: 'lightbulb',
      title: {
        en: 'Discovery',
        ar: 'الاكتشاف',
      },
      description: {
        en: 'We deeply understand your business needs and objectives to create tailored solutions.',
        ar: 'نفهم احتياجاتك وأهدافك بعمق لإنشاء حلول مخصصة.',
      },
    },
    {
      icon: 'cog',
      title: {
        en: 'Development',
        ar: 'التطوير',
      },
      description: {
        en: 'Our expert team builds your solution using cutting-edge technologies and best practices.',
        ar: 'يقوم فريقنا ببناء الحل باستخدام أحدث التقنيات وأفضل الممارسات.',
      },
    },
    {
      icon: 'check',
      title: {
        en: 'Testing',
        ar: 'الاختبار',
      },
      description: {
        en: 'Rigorous quality assurance ensures your solution works flawlessly before deployment.',
        ar: 'نضمن جودة الحل وعمله بشكل مثالي قبل الإطلاق.',
      },
    },
    {
      icon: 'rocket',
      title: {
        en: 'Deployment',
        ar: 'الإطلاق',
      },
      description: {
        en: 'Seamless launch and ongoing support to ensure your success in the digital landscape.',
        ar: 'إطلاق سلس ودعم مستمر لضمان نجاحك في البيئة الرقمية.',
      },
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
    featuredHeading: {
      en: "Adwat's Smart Digital Solutions",
      ar: 'الحلول الرقمية الذكية من أدوات',
    },
    processHeading: {
      en: 'How We Deliver Excellence',
      ar: 'كيف نقدم التميز',
    },
    processSubtitle: {
      en: 'Our proven methodology ensures exceptional results every time',
      ar: 'منهجيتنا المثبتة تضمن نتائج استثنائية في كل مرة',
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

  getServiceTitle(service: Service): string {
    return service.title[this.currentLang()];
  }

  getServiceDescription(service: Service): string {
    return service.description[this.currentLang()];
  }

  getIcon(iconName: string | undefined): IconDefinition {
    return iconName && this.iconMap[iconName] ? this.iconMap[iconName] : faBolt;
  }
}
