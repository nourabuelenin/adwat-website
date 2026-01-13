import { Service } from '../models/content.models';

export const SERVICES_DATA: Service[] = [
  {
    id: 'digital-transformation',
    title: {
      en: 'Digital Transformation',
      ar: 'التحول الرقمي'
    },
    description: {
      en: 'We help organizations rebuild their way of working using technology to achieve real leaps in performance and efficiency. We transform complexity into clear systems that support growth, from strategy to implementation.',
      ar: 'نساعد المؤسسات على إعادة بناء طريقة عملها باستخدام التقنية لتحقيق قفزات حقيقية في الأداء والكفاءة. نحول التعقيد إلى أنظمة واضحة تدعم النمو، من الاستراتيجية إلى التنفيذ.'
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
      en: 'We develop custom software systems built based on your business needs. Powerful solutions that support scaling, integration, and confident decision-making.',
      ar: 'نطور أنظمة برمجية مخصصة تُبنى بناء على احتياجات عملك. حلول قوية تدعم التوسع، التكامل، واتخاذ القرار بثقة.'
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
      en: 'We turn numbers into clear stories that drive the right decision at the right time. Dashboards and analytics that connect numbers to daily decisions.',
      ar: 'نحول الأرقام إلى قصص واضحة تقود القرار الصحيح في الوقت المناسب. لوحات تحكم وتحليلات تربط الأرقام بالقرارات اليومية.'
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
      en: 'We design AI solutions that are actually used in operations, not just for show. We turn data into tangible value, from prediction to automation.',
      ar: 'نصمم حلول ذكاء اصطناعي تستخدم فعليًا في التشغيل، لا للعرض فقط. نحول البيانات إلى قيمة ملموسة، من التنبؤ إلى الأتمتة.'
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
      en: 'We build flexible and secure infrastructure that keeps pace with your business growth without disrupting operations. Cloud solutions designed for stability, high performance, and compliance.',
      ar: 'نبني بنية تحتية مرنة وآمنة تواكب نمو أعمالك دون تعطيل التشغيل. حلول سحابية مصممة للاستقرار، الأداء العالي، والامتثال.'
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
      en: 'We develop websites and web platforms that express your brand and work as a real growth tool. Smooth user experience, strong performance, and modern technologies.',
      ar: 'نطور مواقع ومنصات ويب تعبر عن علامتك وتعمل كأداة نمو حقيقية. تجربة مستخدم سلسة، أداء قوي، وتقنيات حديثة.'
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
      en: 'We design mobile apps that are easy to use and make a difference in customer experience. iOS and Android apps focusing on performance, speed, and reliability.',
      ar: 'نصمم تطبيقات جوال تستخدم بسهولة وتحدث فرقا في تجربة العميل. تطبيقات iOS وAndroid تركز على الأداء، السرعة، والاعتمادية.'
    },
    icon: 'mobile',
    link: '/services/mobile-apps',
    featured: true
  }
];
