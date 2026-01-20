import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { FEATURES_DATA } from '../../../core/data/content.data';
import { Feature } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
})
export class WhyChooseUsComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  features: Feature[] = FEATURES_DATA;

  content = {
    heading: { en: 'Why Choose Adwat', ar: 'لماذا تختار أدوات' },
    title: {
      en: 'Your Trusted Partner in Digital Excellence',
      ar: 'شريكك الموثوق في التميز الرقمي',
    },
    description: {
      en: 'Proven expertise, enterprise-scale solutions, and unwavering commitment to your success',
      ar: 'خبرة مثبتة وحلول على نطاق المؤسسات والتزام ثابت بنجاحك',
    },
  };

  visionMissionValues = [
    {
      title: { en: 'Vision', ar: 'الرؤية' },
      description: {
        en: "Become One of KSA's Foremost Business Organizations and Harnessing the Power of Satisfied Customers",
        ar: 'أن نصبح من أبرز المؤسسات التجارية في المملكة العربية السعودية ونستثمر قوة رضا العملاء',
      },
      cubeStyle: 'cube-green',
      image: 'vision_cube.png',
    },
    {
      title: { en: 'Mission', ar: 'المهمة' },
      description: {
        en: 'We develop digital strategies to enhance the efficiency and flexibility of your team, enabling extraordinary outcomes.',
        ar: 'نطور استراتيجيات رقمية لتعزيز كفاءة ومرونة فريقك، مما يمكّن من تحقيق نتائج استثنائية.',
      },
      cubeStyle: 'cube-cashmere',
      image: 'mission_cube.png',
    },
    {
      title: { en: 'Values', ar: 'القيم' },
      description: {
        en: 'We value innovation, collaboration, and customer satisfaction. Our focus is on creating efficient digital solutions that deliver real results for our clients.',
        ar: 'نقدّر الابتكار والتعاون ورضا العملاء. تركيزنا على إنشاء حلول رقمية فعالة تحقق نتائج حقيقية لعملائنا.',
      },
      cubeStyle: 'cube-lavender',
      image: 'values_cube.png',
    },
  ];
}
