import { FAQ, Feature, Testimonial, Partner } from '../models/content.models';

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: {
      en: 'What industries does Adwat serve?',
      ar: 'ما هي الصناعات التي تخدمها أدوات؟'
    },
    answer: {
      en: 'Adwat serves government entities, first-line enterprises, healthcare, finance, education, manufacturing, and strategic partners across Saudi Arabia and the region.',
      ar: 'تخدم أدوات الجهات الحكومية والمؤسسات الرائدة والرعاية الصحية والمالية والتعليم والتصنيع والشركاء الاستراتيجيين في جميع أنحاء المملكة العربية السعودية والمنطقة.'
    },
    order: 1
  },
  {
    id: 'faq-2',
    question: {
      en: 'How does Adwat ensure data security and compliance?',
      ar: 'كيف تضمن أدوات أمان البيانات والامتثال؟'
    },
    answer: {
      en: 'We implement industry-leading security protocols, comply with international standards (ISO, SAMA, HIPAA), and maintain strict government-approved security measures for all projects.',
      ar: 'نطبق بروتوكولات أمنية رائدة في الصناعة، ونلتزم بالمعايير الدولية (ISO، ساما، HIPAA)، ونحافظ على تدابير أمنية صارمة معتمدة من الحكومة لجميع المشاريع.'
    },
    order: 2
  },
  {
    id: 'faq-3',
    question: {
      en: 'What is your approach to digital transformation projects?',
      ar: 'ما هو نهجكم في مشاريع التحول الرقمي؟'
    },
    answer: {
      en: 'We follow a strategic, phased approach: assessment, planning, implementation, and optimization. Our solutions are designed for scalability and align with Vision 2030 objectives.',
      ar: 'نتبع نهجًا استراتيجيًا متدرجًا: التقييم، والتخطيط، والتنفيذ، والتحسين. تم تصميم حلولنا لتكون قابلة للتطوير ومتوافقة مع أهداف رؤية 2030.'
    },
    order: 3
  },
  {
    id: 'faq-4',
    question: {
      en: 'Do you provide ongoing support and maintenance?',
      ar: 'هل تقدمون الدعم والصيانة المستمرة؟'
    },
    answer: {
      en: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support teams.',
      ar: 'نعم، نقدم حزم دعم شاملة تشمل المراقبة على مدار الساعة، والتحديثات المنتظمة، وتحسين الأداء، وفرق دعم فني مخصصة.'
    },
    order: 4
  },
  {
    id: 'faq-5',
    question: {
      en: 'How long does a typical enterprise project take?',
      ar: 'كم من الوقت يستغرق مشروع مؤسسي نموذجي؟'
    },
    answer: {
      en: 'Project timelines vary based on scope and complexity. Enterprise solutions typically range from 6-18 months, with phased delivery milestones throughout the project lifecycle.',
      ar: 'تختلف الجداول الزمنية للمشروع بناءً على النطاق والتعقيد. عادةً ما تتراوح حلول المؤسسات من 6 إلى 18 شهرًا، مع معالم تسليم متدرجة طوال دورة حياة المشروع.'
    },
    order: 5
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'feature-1',
    title: {
      en: '20+ Years of Excellence',
      ar: 'أكثر من 20 عامًا من التميز'
    },
    description: {
      en: 'Two decades of proven expertise delivering mission-critical solutions for government and enterprise clients across Saudi Arabia.',
      ar: 'عقدان من الخبرة المثبتة في تقديم حلول حيوية للعملاء الحكوميين والمؤسسات في جميع أنحاء المملكة العربية السعودية.'
    },
    icon: 'experience'
  },
  {
    id: 'feature-2',
    title: {
      en: 'Government-Ready Solutions',
      ar: 'حلول جاهزة للقطاع الحكومي'
    },
    description: {
      en: 'Fully compliant with government regulations and security standards, trusted by major Saudi government entities.',
      ar: 'متوافقة تمامًا مع اللوائح الحكومية ومعايير الأمان، موثوق بها من قبل الجهات الحكومية السعودية الكبرى.'
    },
    icon: 'government'
  },
  {
    id: 'feature-3',
    title: {
      en: 'Enterprise-Scale Architecture',
      ar: 'بنية على نطاق المؤسسات'
    },
    description: {
      en: 'Scalable, secure solutions built to handle millions of users and transactions with 99.9% uptime reliability.',
      ar: 'حلول قابلة للتطوير وآمنة مصممة للتعامل مع ملايين المستخدمين والمعاملات مع موثوقية تصل إلى 99.9٪.'
    },
    icon: 'scale'
  },
  {
    id: 'feature-4',
    title: {
      en: 'Vision 2030 Aligned',
      ar: 'متوافقة مع رؤية 2030'
    },
    description: {
      en: 'Our solutions directly support Saudi Arabia\'s Vision 2030 digital transformation objectives and national development goals.',
      ar: 'تدعم حلولنا بشكل مباشر أهداف التحول الرقمي لرؤية 2030 وأهداف التنمية الوطنية للمملكة العربية السعودية.'
    },
    icon: 'vision'
  },
  {
    id: 'feature-5',
    title: {
      en: 'Advanced Security & Compliance',
      ar: 'أمان وامتثال متقدم'
    },
    description: {
      en: 'ISO certified with comprehensive security frameworks meeting international and local regulatory requirements.',
      ar: 'معتمدة من ISO مع أطر أمنية شاملة تلبي المتطلبات التنظيمية الدولية والمحلية.'
    },
    icon: 'security'
  },
  {
    id: 'feature-6',
    title: {
      en: 'Strategic Partnerships',
      ar: 'شراكات استراتيجية'
    },
    description: {
      en: 'Partnered with leading global technology providers and regional organizations to deliver best-in-class solutions.',
      ar: 'شراكة مع مزودي التكنولوجيا العالميين الرائدين والمنظمات الإقليمية لتقديم حلول من الدرجة الأولى.'
    },
    icon: 'partnership'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testimonial-1',
    clientName: {
      en: 'Dr. Abdullah Al-Saud',
      ar: 'د. عبدالله آل سعود'
    },
    position: {
      en: 'Director of Digital Transformation',
      ar: 'مدير التحول الرقمي'
    },
    company: {
      en: 'Government Entity',
      ar: 'جهة حكومية'
    },
    content: {
      en: 'Adwat delivered a comprehensive digital platform that transformed our citizen services. Their expertise in government requirements and security standards was exceptional.',
      ar: 'قدمت أدوات منصة رقمية شاملة حولت خدمات المواطنين لدينا. كانت خبرتهم في المتطلبات الحكومية ومعايير الأمان استثنائية.'
    },
    rating: 5
  },
  {
    id: 'testimonial-2',
    clientName: {
      en: 'Eng. Sarah Al-Mutairi',
      ar: 'م. سارة المطيري'
    },
    position: {
      en: 'Chief Technology Officer',
      ar: 'المدير التنفيذي للتكنولوجيا'
    },
    company: {
      en: 'Major Saudi Enterprise',
      ar: 'مؤسسة سعودية كبرى'
    },
    content: {
      en: 'Working with Adwat on our enterprise system integration was seamless. Their team understands complex business requirements and delivers scalable solutions.',
      ar: 'كان العمل مع أدوات على تكامل نظام المؤسسة سلسًا. يفهم فريقهم متطلبات الأعمال المعقدة ويقدم حلولًا قابلة للتطوير.'
    },
    rating: 5
  },
  {
    id: 'testimonial-3',
    clientName: {
      en: 'Mohammed Al-Qahtani',
      ar: 'محمد القحطاني'
    },
    position: {
      en: 'IT Director',
      ar: 'مدير تقنية المعلومات'
    },
    company: {
      en: 'Healthcare Organization',
      ar: 'مؤسسة رعاية صحية'
    },
    content: {
      en: 'Adwat\'s healthcare platform exceeded our expectations. The system is robust, secure, and has significantly improved our operational efficiency.',
      ar: 'تجاوزت منصة الرعاية الصحية من أدوات توقعاتنا. النظام قوي وآمن وحسّن بشكل كبير كفاءتنا التشغيلية.'
    },
    rating: 5
  }
];

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'partner-1',
    name: 'Microsoft',
    logo: '/assets/images/partners/microsoft.svg',
    category: 'partner'
  },
  {
    id: 'partner-2',
    name: 'AWS',
    logo: '/assets/images/partners/aws.svg',
    category: 'partner'
  },
  {
    id: 'partner-3',
    name: 'Oracle',
    logo: '/assets/images/partners/oracle.svg',
    category: 'partner'
  },
  {
    id: 'partner-4',
    name: 'SAP',
    logo: '/assets/images/partners/sap.svg',
    category: 'partner'
  },
  {
    id: 'partner-5',
    name: 'Government Entity',
    logo: '/assets/images/partners/gov-entity.svg',
    category: 'government'
  },
  {
    id: 'partner-6',
    name: 'Enterprise Client',
    logo: '/assets/images/partners/enterprise.svg',
    category: 'enterprise'
  }
];
