import { Service } from '../models/content.models';

export interface ServiceFeature {
  en: string;
  ar: string;
}

export interface ServiceTag {
  label: string;
  icon?: string;
}

export interface ExtendedService extends Service {
  features: ServiceFeature[];
  tags?: ServiceTag[];
}

export const SERVICES_DATA: ExtendedService[] = [
  {
    id: 'data-analytics',
    title: {
      en: 'Data Analytics',
      ar: 'تحليل البيانات',
    },
    description: {
      en: 'We turn numbers into clear stories that drive the right decision at the right time.',
      ar: 'نحوّل الأرقام إلى رؤى واضحة تدعم آلية اتخاذ القرار في الوقت المناسب.',
    },
    icon: 'analytics',
    link: '/services/data-analytics',
    featured: true,
    features: [
      { en: 'Business intelligence dashboards', ar: 'لوحات ذكاء الأعمال' },
      { en: 'Data visualization and reporting', ar: 'تصور البيانات والتقارير' },
      { en: 'Predictive analytics and modeling', ar: 'التحليلات التنبؤية والنمذجة' },
      { en: 'Data warehousing and ETL processes', ar: 'مستودعات البيانات وعمليات ETL' },
      { en: 'Real-time data monitoring', ar: 'مراقبة البيانات في الوقت الفعلي' },
    ],
    tags: [
      { label: 'Analytics', icon: 'analytics' },
      { label: 'Insights', icon: 'insights' },
    ],
  },
  {
    id: 'ai-solutions',
    title: {
      en: 'AI Solutions',
      ar: 'حلول الذكاء الاصطناعي',
    },
    description: {
      en: 'We design AI solutions that are actually used in operations, not just for show.',
      ar: 'نصمم حلول تعتمد على الذكاء الاصطناعي في عملية التشغيل الفعلي، حيث نوظف البيانات والمعطيات ونحولها إلى قيم ملموسة، من التنبؤ الأولي حتى الأتمتة الكاملة.',
    },
    icon: 'ai',
    link: '/services/ai-solutions',
    featured: true,
    features: [
      { en: 'Machine learning model development', ar: 'تطوير نماذج التعلم الآلي' },
      { en: 'Natural language processing (NLP)', ar: 'معالجة اللغة الطبيعية (NLP)' },
      { en: 'Computer vision and image recognition', ar: 'رؤية الكمبيوتر والتعرف على الصور' },
      {
        en: 'Chatbot and virtual assistant development',
        ar: 'تطوير روبوتات المحادثة والمساعدين الافتراضيين',
      },
      {
        en: 'AI-powered automation and optimization',
        ar: 'الأتمتة والتحسين المدعوم بالذكاء الاصطناعي',
      },
    ],
  },
  {
    id: 'web-development',
    title: {
      en: 'Web Design & Development',
      ar: 'تصميم وتطوير الويب',
    },
    description: {
      en: 'Our web development team creates custom, responsive websites and web applications that enhance your digital presence in the Middle Eastern market and drive business growth.',
      ar: 'يقوم فريق تطوير الويب لدينا بإنشاء مواقع ويب وتطبيقات ويب مخصصة ومتجاوبة تعزز وجودك الرقمي في السوق الشرق أوسطي وتدفع نمو الأعمال.',
    },
    icon: 'web',
    link: '/services/web-development',
    featured: true,
    features: [
      { en: 'Custom website design and development', ar: 'تصميم وتطوير مواقع ويب مخصصة' },
      { en: 'E-commerce solutions', ar: 'حلول التجارة الإلكترونية' },
      {
        en: 'Content management systems (WordPress, Drupal)',
        ar: 'أنظمة إدارة المحتوى (ووردبريس، دروبال)',
      },
      { en: 'Progressive web applications', ar: 'تطبيقات الويب التقدمية' },
      { en: 'Web portal development', ar: 'تطوير بوابات الويب' },
    ],
    tags: [
      { label: 'Responsive', icon: 'responsive' },
      { label: 'Fast', icon: 'fast' },
    ],
  },
  {
    id: 'mobile-apps',
    title: {
      en: 'Mobile App Development',
      ar: 'تطوير التطبيقات المحمولة',
    },
    description: {
      en: 'We develop high-quality, user-friendly mobile applications for iOS and Android platforms that help Saudi and Egyptian businesses engage with their customers and streamline operations.',
      ar: 'نطور تطبيقات محمولة عالية الجودة وسهلة الاستخدام لمنصات iOS وAndroid تساعد الشركات السعودية والمصرية على التفاعل مع عملائها وتبسيط العمليات.',
    },
    icon: 'mobile',
    link: '/services/mobile-apps',
    featured: true,
    features: [
      { en: 'Native iOS and Android development', ar: 'تطوير iOS وAndroid الأصلي' },
      {
        en: 'Cross-platform development (React Native, Flutter)',
        ar: 'التطوير عبر المنصات (React Native, Flutter)',
      },
      { en: 'Mobile app UI/UX design', ar: 'تصميم واجهة وتجربة المستخدم للتطبيقات' },
      { en: 'App maintenance and support', ar: 'صيانة ودعم التطبيقات' },
      { en: 'App store optimization', ar: 'تحسين متجر التطبيقات' },
    ],
    tags: [
      { label: 'Android', icon: 'android' },
      { label: 'iOS', icon: 'ios' },
    ],
  },
  {
    id: 'it-infrastructure',
    title: {
      en: 'IT Infrastructure',
      ar: 'البنية التحتية لتكنولوجيا المعلومات',
    },
    description: {
      en: 'Our IT infrastructure services help businesses in the Kingdom and beyond leverage the power of modern technology to improve scalability, reduce costs, and enhance security.',
      ar: 'تساعد خدمات البنية التحتية لتكنولوجيا المعلومات لدينا الشركات في المملكة وما بعدها على الاستفادة من قوة التكنولوجيا الحديثة لتحسين قابلية التوسع وتقليل التكاليف وتعزيز الأمان.',
    },
    icon: 'cloud',
    link: '/services/it-infrastructure',
    featured: true,
    features: [
      { en: 'Cloud migration and deployment', ar: 'الهجرة والنشر السحابي' },
      { en: 'Cloud infrastructure management', ar: 'إدارة البنية التحتية السحابية' },
      { en: 'AWS, Azure, and Google Cloud solutions', ar: 'حلول AWS وAzure وGoogle Cloud' },
      { en: 'Cloud security and compliance', ar: 'الأمان والامتثال السحابي' },
      {
        en: 'Disaster recovery and backup solutions',
        ar: 'حلول استعادة البيانات والنسخ الاحتياطي',
      },
    ],
    tags: [
      { label: 'AWS', icon: 'aws' },
      { label: 'Azure', icon: 'azure' },
      { label: 'GCP', icon: 'gcp' },
    ],
  },
  {
    id: 'digital-transformation',
    title: {
      en: 'Digital Transformation',
      ar: 'التحول الرقمي',
    },
    description: {
      en: 'We help organizations rebuild their way of working using technology to achieve real leaps in performance and efficiency.',
      ar: 'نساعد المؤسسات على إعادة بناء طريقة العمل بتوظيف التقنية لتحقيق قفزات حقيقية في الأداء والكفاءة.',
    },
    icon: 'transform',
    link: '/services/digital-transformation',
    featured: true,
    features: [
      { en: 'IT strategy development', ar: 'تطوير استراتيجية تكنولوجيا المعلومات' },
      { en: 'Digital transformation consulting', ar: 'استشارات التحول الرقمي' },
      { en: 'Technology assessment and roadmapping', ar: 'تقييم التكنولوجيا ورسم الطريق' },
      { en: 'IT project management', ar: 'إدارة مشاريع تكنولوجيا المعلومات' },
      { en: 'Vendor selection and management', ar: 'اختيار وإدارة الموردين' },
    ],
    tags: [
      { label: 'Strategy', icon: 'strategy' },
      { label: 'Implementation', icon: 'implementation' },
    ],
  },
  {
    id: 'custom-software',
    title: {
      en: 'Software Solutions',
      ar: 'حلول البرمجيات',
    },
    description: {
      en: 'We develop custom software systems built based on your business needs.',
      ar: 'نطور أنظمة برمجية مخصصة تُبنى وفق احتياجات العمل الفعلية وتدعم التوسع والتكامل.',
    },
    icon: 'code',
    link: '/services/custom-software',
    featured: true,
    features: [
      { en: 'Custom software development', ar: 'تطوير البرمجيات المخصصة' },
      { en: 'Enterprise resource planning (ERP)', ar: 'تخطيط موارد المؤسسات (ERP)' },
      { en: 'Customer relationship management (CRM)', ar: 'إدارة علاقات العملاء (CRM)' },
      { en: 'Data protection and compliance', ar: 'حماية البيانات والامتثال' },
      { en: 'Security assessment and auditing', ar: 'تقييم ومراجعة الأمان' },
    ],
    tags: [
      { label: 'Secure', icon: 'secure' },
      { label: 'Compliant', icon: 'compliant' },
    ],
  },
];
