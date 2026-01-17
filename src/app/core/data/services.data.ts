import { Service } from '../models/content.models';

export const SERVICES_DATA: Service[] = [
  {
    id: 'digital-transformation',
    title: {
      en: 'Digital Transformation',
      ar: 'التحول الرقمي'
    },
    description: {
      en: 'We help organizations rebuild their way of working using technology to achieve real leaps in performance and efficiency.',
      ar: 'نساعد المؤسسات على إعادة بناء طريقة العمل بتوظيف التقنية لتحقيق قفزات حقيقية في الأداء والكفاءة.'
    },
    icon: 'transform',
    link: '/services/digital-transformation',
    featured: true
  },
  {
    id: 'custom-software',
    title: {
      en: 'Software Solutions',
      ar: 'حلول البرمجيات'
    },
    description: {
      en: 'We develop custom software systems built based on your business needs.',
      ar: 'نطور أنظمة برمجية مخصصة تُبنى وفق احتياجات العمل الفعلية وتدعم التوسع والتكامل.'
    },
    icon: 'code',
    link: '/services/custom-software',
    featured: true
  },
  {
    id: 'data-analytics',
    title: {
      en: 'Data Analytics',
      ar: 'تحليل البيانات'
    },
    description: {
      en: 'We turn numbers into clear stories that drive the right decision at the right time.',
      ar: 'نحوّل الأرقام إلى رؤى واضحة تدعم آلية اتخاذ القرار في الوقت المناسب.'
    },
    icon: 'analytics',
    link: '/services/data-analytics',
    featured: true
  },
  {
    id: 'ai-solutions',
    title: {
      en: 'AI Solutions',
      ar: 'حلول الذكاء الاصطناعي'
    },
    description: {
      en: 'We design AI solutions that are actually used in operations, not just for show.',
      ar: 'نصمم حلول تعتمد على الذكاء الاصطناعي في عملية التشغيل الفعلي، حيث نوظف البيانات والمعطيات ونحولها إلى قيم ملموسة، من التنبؤ الأولي حتى الأتمتة الكاملة.'
    },
    icon: 'ai',
    link: '/services/ai-solutions',
    featured: true
  },
  {
    id: 'it-infrastructure',
    title: {
      en: 'IT Infrastructure',
      ar: 'البنية التحتية لتقنية المعلومات'
    },
    description: {
      en: 'We build flexible and secure infrastructure that keeps pace with your business growth without disrupting operations.',
      ar: 'نبني بنية تحتية مرنة وآمنة تواكب نمو الأعمال دون تعطيل التشغيل.'
    },
    icon: 'cloud',
    link: '/services/it-infrastructure',
    featured: true
  },
  {
    id: 'web-development',
    title: {
      en: 'Web Development',
      ar: 'تطوير الويب'
    },
    description: {
      en: 'We develop websites and web platforms that express your brand and work as a real growth tool.',
      ar: 'نطور مواقع ومنصات ويب تعبّر عن العلامة التجارية والهوية البصرية، وتعمل كأداة نمو حقيقية.'
    },
    icon: 'web',
    link: '/services/web-development',
    featured: true
  },
  {
    id: 'mobile-apps',
    title: {
      en: 'Mobile Applications',
      ar: 'تطبيقات الجوال'
    },
    description: {
      en: 'We design mobile apps that are easy to use and make a difference in customer experience.',
      ar: 'نصمم تطبيقات جوال سهلة الاستخدام وتصنع الفارق في تجربة العميل.'
    },
    icon: 'mobile',
    link: '/services/mobile-apps',
    featured: true
  }
];
