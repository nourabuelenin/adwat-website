import { FAQ, Feature, Testimonial, Partner } from '../models/content.models';

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: {
      en: 'How does Adwat start working with you?',
      ar: 'كيف تبدأ أدوات العمل معك؟'
    },
    answer: {
      en: 'We start by understanding the nature of the business and the real challenges before suggesting any technical solution, through analysis sessions and process reviews, then we clearly define the scope of work and implementation roadmap.',
      ar: 'نبدأ بفهم طبيعة العمل والتحديات الفعلية قبل اقتراح أي حل تقني، من خلال جلسات تحليل ومراجعة العمليات، ثم نحدد نطاق العمل وخارطة التنفيذ بوضوح.'
    },
    order: 1
  },
  {
    id: 'faq-2',
    question: {
      en: 'What is the difference between digital transformation and digitization of processes?',
      ar: 'ما الفرق بين التحول الرقمي ورقمنة العمليات؟'
    },
    answer: {
      en: 'Digitization of processes means converting current procedures into digital systems, while digital transformation includes rethinking the way of work itself and improving it using technology to achieve better results.',
      ar: 'رقمنة العمليات تعني تحويل الإجراءات الحالية إلى أنظمة رقمية، بينما التحول الرقمي يشمل إعادة التفكير في طريقة العمل نفسها وتحسينها باستخدام التقنية لتحقيق نتائج أفضل.'
    },
    order: 2
  },
  {
    id: 'faq-3',
    question: {
      en: 'When is a custom system better than ready-made solutions?',
      ar: 'متى يكون النظام المخصص أفضل من الحلول الجاهزة؟'
    },
    answer: {
      en: 'A custom system is the best choice when business requirements are complex, or when special integrations are needed, or when ready-made solutions do not meet the actual business needs.',
      ar: 'يكون النظام المخصص الخيار الأفضل عندما تكون متطلبات العمل معقدة، أو عند الحاجة إلى تكاملات خاصة، أو عندما لا تلبي الحلول الجاهزة احتياجات العمل الفعلية.'
    },
    order: 3
  },
  {
    id: 'faq-4',
    question: {
      en: 'How does Adwat ensure understanding business needs before development?',
      ar: 'كيف تضمن أدوات فهم احتياجات العمل قبل التطوير؟'
    },
    answer: {
      en: 'Adwat relies on analyzing processes and workflows, and direct communication with decision-makers and users, to ensure that the technical solution addresses the real problem, not just its symptoms.',
      ar: 'تعتمد أدوات على تحليل العمليات وسير العمل، والتواصل المباشر مع أصحاب القرار والمستخدمين، لضمان أن الحل التقني يعالج المشكلة الحقيقية لا أعراضها.'
    },
    order: 4
  },
  {
    id: 'faq-5',
    question: {
      en: 'How is project success measured after implementation?',
      ar: 'كيف يتم قياس نجاح المشروع بعد التنفيذ؟'
    },
    answer: {
      en: 'Project success is measured through clear performance indicators such as improved operational efficiency, decision-making speed, data quality, and achieving previously agreed objectives.',
      ar: 'يقاس نجاح المشروع من خلال مؤشرات أداء واضحة مثل تحسين الكفاءة التشغيلية، سرعة اتخاذ القرار، جودة البيانات، وتحقيق الأهداف المتفق عليها مسبقًا.'
    },
    order: 5
  },
  {
    id: 'faq-6',
    question: {
      en: 'Can the project be implemented in phases?',
      ar: 'هل يمكن تنفيذ المشروع على مراحل؟'
    },
    answer: {
      en: 'Yes, most projects are implemented in studied phases to reduce risks, ensure tangible value in each phase, and allow for future expansion.',
      ar: 'نعم، يتم تنفيذ معظم المشاريع على مراحل مدروسة لتقليل المخاطر، وضمان تحقيق قيمة ملموسة في كل مرحلة، مع إمكانية التوسع مستقبلًا.'
    },
    order: 6
  },
  {
    id: 'faq-7',
    question: {
      en: 'What is the difference between traditional reports and smart dashboards?',
      ar: 'ما الفرق بين التقارير التقليدية ولوحات التحكم الذكية؟'
    },
    answer: {
      en: 'Traditional reports show what happened, while smart dashboards help understand what is happening now and identify intervention points and make decisions at the right time.',
      ar: 'التقارير التقليدية تعرض ما حدث، بينما لوحات التحكم الذكية تساعد على فهم ما يحدث الآن وتحديد نقاط التدخل واتخاذ القرار في الوقت المناسب.'
    },
    order: 7
  },
  {
    id: 'faq-8',
    question: {
      en: 'When is the use of artificial intelligence truly appropriate?',
      ar: 'متى يكون استخدام الذكاء الاصطناعي مناسبًا فعلًا؟'
    },
    answer: {
      en: 'Artificial intelligence is appropriate when sufficient data is available, and when there is a pattern or problem that can be improved or predicted, and not just for using technology for its own sake.',
      ar: 'يكون الذكاء الاصطناعي مناسبًا عندما تتوفر بيانات كافية، وعند وجود نمط أو مشكلة يمكن تحسينها أو التنبؤ بها، وليس لمجرد استخدام التقنية بحد ذاتها.'
    },
    order: 8
  },
  {
    id: 'faq-9',
    question: {
      en: 'How does Adwat maintain data and system security?',
      ar: 'كيف تحافظ أدوات على أمان البيانات والأنظمة؟'
    },
    answer: {
      en: 'Adwat is committed to applying best security practices, including access control, data protection, backup, and compliance with relevant systems and regulations.',
      ar: 'تلتزم أدوات بتطبيق أفضل ممارسات الأمان، بما يشمل التحكم في الصلاحيات، حماية البيانات، النسخ الاحتياطي، والامتثال للأنظمة واللوائح ذات الصلة.'
    },
    order: 9
  },
  {
    id: 'faq-10',
    question: {
      en: 'Does Adwat provide support after system launch?',
      ar: 'هل تقدم أدوات دعمًا بعد إطلاق النظام؟'
    },
    answer: {
      en: 'Yes, Adwat provides continuous technical support and maintenance and development plans to ensure system stability, continued performance, and long-term value realization.',
      ar: 'نعم، توفر أدوات دعما فنيا مستمرًا وخطط صيانة وتطوير لضمان استقرار النظام واستمرارية الأداء وتحقيق القيمة على المدى الطويل.'
    },
    order: 10
  },
  {
    id: 'faq-11',
    question: {
      en: 'How long does it take to implement a comprehensive technical project?',
      ar: 'كم يستغرق تنفيذ مشروع تقني متكامل؟'
    },
    answer: {
      en: 'The duration varies according to the scope and complexity of the project, and the timeline is determined after the analysis and planning phase, with commitment to clear implementation phases.',
      ar: 'تختلف المدة حسب نطاق وتعقيد المشروع، ويتم تحديد الجدول الزمني بعد مرحلة التحليل والتخطيط، مع الالتزام بمراحل تنفيذ واضحة.'
    },
    order: 11
  },
  {
    id: 'faq-12',
    question: {
      en: 'Does Adwat work as a supplier or as a technical partner?',
      ar: 'هل تعمل أدوات كمورّد أم كشريك تقني؟'
    },
    answer: {
      en: 'Adwat works as a technical partner, participating in understanding challenges, decision-making, and building scalable solutions, not just as an implementation party.',
      ar: 'تعمل أدوات كشريك تقني، يشارك في فهم التحديات واتخاذ القرار وبناء حلول قابلة للتوسع، وليس كمجرد جهة تنفيذ.'
    },
    order: 12
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'feature-vision',
    title: {
      en: 'Vision',
      ar: 'الرؤية'
    },
    description: {
      en: "Become One of KSA's Foremost Business Organizations and Harnessing the Power of Satisfied Customers",
      ar: 'أن نصبح من أبرز المؤسسات التجارية في المملكة العربية السعودية ونستثمر قوة رضا العملاء'
    },
    icon: 'vision'
  },
  {
    id: 'feature-mission',
    title: {
      en: 'Mission',
      ar: 'المهمة'
    },
    description: {
      en: 'We develop digital strategies to enhance the efficiency and flexibility of your team, enabling extraordinary outcomes.',
      ar: 'نطور استراتيجيات رقمية لتعزيز كفاءة ومرونة فريقك، مما يمكّن من تحقيق نتائج استثنائية.'
    },
    icon: 'mission'
  },
  {
    id: 'feature-values',
    title: {
      en: 'Values',
      ar: 'القيم'
    },
    description: {
      en: 'We value innovation, collaboration, and customer satisfaction. Our focus is on creating efficient digital solutions that deliver real results for our clients.',
      ar: 'نقدّر الابتكار والتعاون ورضا العملاء. تركيزنا على إنشاء حلول رقمية فعالة تحقق نتائج حقيقية لعملائنا.'
    },
    icon: 'values'
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
    name: 'King Abdullah Humanitarian Foundation',
    logo: '/assets/images/partners/king-abdullah-foundation.png',
    category: 'partner'
  },
  {
    id: 'partner-2',
    name: 'Gulf Health Council',
    logo: '/assets/images/partners/gulf-health-council.png',
    category: 'partner'
  },
  {
    id: 'partner-3',
    name: 'Ministry of Health',
    logo: '/assets/images/partners/ministry-of-health.png',
    category: 'partner'
  },
  {
    id: 'partner-4',
    name: 'King Salman Hospital',
    logo: '/assets/images/partners/king-salman-hospital.png',
    category: 'partner'
  },
  {
    id: 'partner-5',
    name: 'King Saud University',
    logo: '/assets/images/partners/king-saud-university.png',
    category: 'government'
  },
  {
    id: 'partner-6',
    name: 'Sets Group',
    logo: '/assets/images/partners/sets-group.png',
    category: 'enterprise'
  },
  {
    id: 'partner-7',
    name: 'Ministry of Interior',
    logo: '/assets/images/partners/ministry-of-interior.png',
    category: 'enterprise'
  }
];
