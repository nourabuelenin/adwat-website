import { Project } from '../models/content.models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'traffic-monitoring',
    title: {
      en: 'Location Monitoring System',
      ar: 'نظام تحديد مواقع',
    },
    description: {
      en: 'An intelligent solution for monitoring and analyzing locations using data and AI to support real-time traffic safety decisions. Helps authorities predict high-risk areas and proactive intervention to reduce accidents.',
      ar: 'حل ذكي لمراقبة وتحليل حوادث الطرق يعتمد على البيانات والذكاء الاصطناعي لدعم قرارات السلامة المرورية في الوقت الفعلي. يساعد الجهات المعنية على التنبؤ بالمناطق عالية الخطورة والتدخل الاستباقي للحد من الحوادث.',
    },
    industry: {
      en: 'RSD',
      ar: 'رصد',
    },
    year: 2024,
    tags: ['Software Development', 'AI Training', 'Navigation'],
    featured: true,
    image: 'assets/images/projects/RSD.png',
    details: {
      about: {
        en: 'A Smart And Integrated System Developed In Collaboration With Riyadh Municipality To Improve Road Safety And Reduce Accident Rates Through Predictive Analytics And Real-Time Monitoring.\n\nThis Advanced System Leverages Artificial Intelligence And Big Data Analytics To Provide Comprehensive Traffic Safety Management For Urban Environments.',
        ar: 'نظام ذكي ومتكامل تم تطويره بالتعاون مع أمانة الرياض لتحسين السلامة على الطرق والحد من معدلات الحوادث من خلال التحليلات التنبؤية والمراقبة في الوقت الفعلي.\n\nيستفيد هذا النظام المتقدم من الذكاء الاصطناعي وتحليلات البيانات الضخمة لتوفير إدارة شاملة لسلامة المرور في البيئات الحضرية.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'Riyadh Municipality needed an intelligent system to monitor traffic patterns, predict accident hotspots, and implement proactive safety measures to reduce road accidents.',
            ar: 'احتاجت أمانة الرياض إلى نظام ذكي لمراقبة أنماط المرور والتنبؤ بالنقاط الساخنة للحوادث وتنفيذ تدابير السلامة الاستباقية لتقليل حوادث الطرق.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'AI-powered predictive analytics for accident prevention and hotspot identification.',
            ar: 'تحليلات تنبؤية مدعومة بالذكاء الاصطناعي لمنع الحوادث وتحديد النقاط الساخنة.',
          },
          {
            en: 'Real-time traffic monitoring with automated incident detection systems.',
            ar: 'مراقبة حركة المرور في الوقت الفعلي مع أنظمة الكشف الآلي عن الحوادث.',
          },
          {
            en: 'Comprehensive dashboard for traffic management and emergency response coordination.',
            ar: 'لوحة تحكم شاملة لإدارة المرور وتنسيق الاستجابة للطوارئ.',
          },
          {
            en: 'Integration with existing municipal systems and emergency services for rapid response.',
            ar: 'التكامل مع الأنظمة البلدية الحالية وخدمات الطوارئ للاستجابة السريعة.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Significant reduction in traffic accident rates across monitored areas.',
            ar: 'انخفاض كبير في معدلات حوادث المرور عبر المناطق المراقبة.',
          },
          {
            en: 'Improved emergency response times through automated alert systems.',
            ar: 'تحسن أوقات الاستجابة للطوارئ من خلال أنظمة التنبيه الآلية.',
          },
          {
            en: 'Enhanced road safety through predictive maintenance and infrastructure improvements.',
            ar: 'تعزيز السلامة المرورية من خلال الصيانة التنبؤية وتحسينات البنية التحتية.',
          },
          {
            en: 'Data-driven decision making for urban traffic planning and safety initiatives.',
            ar: 'اتخاذ قرارات مبنية على البيانات لتخطيط المرور الحضري ومبادرات السلامة.',
          },
        ],
      },
      relatedProjects: ['advanced-monitoring', 'e-next'],
    },
  },
  {
    id: 'advanced-monitoring',
    title: {
      en: 'Advanced Monitoring System',
      ar: 'نظام المراقبة المتقدم',
    },
    description: {
      en: 'A centralized platform for real-time performance monitoring. Supports rapid decision-making and improves response efficiency and resource management.',
      ar: 'منصة مركزية لمراقبة الأداء في الوقت الفعلي. تدعم اتخاذ القرار السريع وتحسين كفاءة الاستجابة وإدارة الموارد.',
    },
    industry: {
      en: 'Riyadh Municipality',
      ar: 'أمانة الرياض',
    },
    year: 2024,
    tags: ['Healthcare', 'Monitoring', 'Government', 'Analytics'],
    featured: true,
    image: 'assets/images/projects/TASM.png',
    details: {
      about: {
        en: 'This comprehensive healthcare monitoring platform provides unified oversight of hospital operations, patient care quality, and resource management across the healthcare network.',
        ar: 'توفر منصة مراقبة الرعاية الصحية الشاملة هذه إشرافاً موحداً على عمليات المستشفيات وجودة رعاية المرضى وإدارة الموارد عبر شبكة الرعاية الصحية.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'The Ministry of Health required a centralized system to monitor performance across multiple hospitals, ensuring quality care delivery and efficient resource allocation.',
            ar: 'احتاجت وزارة الصحة إلى نظام مركزي لمراقبة الأداء عبر مستشفيات متعددة، مما يضمن تقديم الرعاية عالية الجودة والتوزيع الفعال للموارد.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'Real-time monitoring of 25+ hospitals with comprehensive performance metrics.',
            ar: 'مراقبة في الوقت الفعلي لأكثر من 25 مستشفى مع مقاييس أداء شاملة.',
          },
          {
            en: 'Advanced analytics dashboard for healthcare quality assessment and reporting.',
            ar: 'لوحة تحكم تحليلية متقدمة لتقييم جودة الرعاية الصحية وإعداد التقارير.',
          },
          {
            en: 'Emergency response coordination system with automated alerts and notifications.',
            ar: 'نظام تنسيق الاستجابة للطوارئ مع التنبيهات والإخطارات الآلية.',
          },
          {
            en: 'Resource optimization tools for efficient hospital management and patient care.',
            ar: 'أدوات تحسين الموارد لإدارة المستشفيات الفعالة ورعاية المرضى.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: "Enhanced healthcare service delivery across the Kingdom's hospital network.",
            ar: 'تحسين تقديم الخدمات الصحية عبر شبكة المستشفيات في المملكة.',
          },
          {
            en: 'Improved patient outcomes through better quality monitoring and response systems.',
            ar: 'تحسن نتائج المرضى من خلال أنظمة مراقبة الجودة والاستجابة المحسنة.',
          },
          {
            en: 'Optimized resource allocation and operational efficiency across healthcare facilities.',
            ar: 'تحسن تخصيص الموارد والكفاءة التشغيلية عبر مرافق الرعاية الصحية.',
          },
          {
            en: 'Strengthened emergency response capabilities with real-time coordination and alerts.',
            ar: 'تعزيز قدرات الاستجابة للطوارئ مع التنسيق والتنبيهات في الوقت الفعلي.',
          },
        ],
      },
      relatedProjects: ['go-care-healthcare', 'traffic-monitoring'],
    },
  },
  {
    id: 'construction-management',
    title: {
      en: 'Project Management Platform',
      ar: 'منصة إدارة مشاريع ',
    },
    description: {
      en: 'A unified digital platform for managing projects, bringing all stakeholders together in one environment with clear workflows and real-time performance analytics. Helps control coordination, improve resource utilization, and reduce delays and costs throughout the project lifecycle.',
      ar: 'منصة رقمية موحدة لإدارة المشاريع, تجمع جميع أطراف المشروع في بيئة واحدة بسير عمل واضح وتحليلات أداء لحظية. تساعد على ضبط التنسيق، تحسين استخدام الموارد، وتقليل التأخير والتكاليف عبر دورة المشروع كاملة.',
    },
    industry: {
      en: 'Czone',
      ar: 'Czone',
    },
    year: 2024,
    tags: ['Construction', 'Project Management', 'Enterprise', 'ERP'],
    featured: true,
    image: 'assets/images/projects/czone.png',
    details: {
      about: {
        en: 'This comprehensive ERP solution revolutionizes construction project management by streamlining communication, enhancing collaboration, and optimizing resource allocation across all project stakeholders.',
        ar: 'يُحدث حل تخطيط موارد المؤسسات الشامل هذا ثورة في إدارة مشاريع البناء من خلال تبسيط التواصل وتعزيز التعاون وتحسين تخصيص الموارد عبر جميع أصحاب المصلحة في المشروع.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'Construction projects involved multiple stakeholders with complex coordination requirements, leading to communication gaps, delays, and cost overruns.',
            ar: 'شملت مشاريع البناء أصحاب مصلحة متعددين بمتطلبات تنسيق معقدة، مما أدى إلى فجوات في التواصل والتأخير وتجاوز التكاليف.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'Unified collaboration platform connecting all project stakeholders in real-time.',
            ar: 'منصة تعاون موحدة تربط جميع أصحاب المصلحة في المشروع في الوقت الفعلي.',
          },
          {
            en: 'Automated workflow management with progress tracking and milestone monitoring.',
            ar: 'إدارة سير العمل الآلية مع تتبع التقدم ومراقبة المعالم.',
          },
          {
            en: 'Advanced project analytics and performance reporting for informed decision-making.',
            ar: 'تحليلات متقدمة للمشاريع وتقارير الأداء لاتخاذ قرارات مدروسة.',
          },
          {
            en: 'Integrated resource management and cost optimization tools for better project outcomes.',
            ar: 'أدوات إدارة الموارد المتكاملة وتحسين التكاليف لنتائج مشاريع أفضل.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Streamlined project delivery with improved timeline adherence and quality control.',
            ar: 'تبسيط تسليم المشاريع مع تحسين الالتزام بالجدول الزمني ومراقبة الجودة.',
          },
          {
            en: 'Enhanced collaboration and communication among diverse project stakeholders.',
            ar: 'تعزيز التعاون والتواصل بين أصحاب المصلحة المتنوعين في المشروع.',
          },
          {
            en: 'Reduced project costs through better resource management and waste reduction.',
            ar: 'تقليل تكاليف المشروع من خلال إدارة أفضل للموارد وتقليل الهدر.',
          },
          {
            en: 'Improved project transparency and accountability across all phases of construction.',
            ar: 'تحسين شفافية المشروع والمساءلة عبر جميع مراحل البناء.',
          },
        ],
      },
      relatedProjects: ['traffic-monitoring', 'education-platform'],
    },
  },
  {
    id: 'e-next',
    title: {
      en: 'E-Next Smart E-Commerce Platform',
      ar: 'E-Next منصة التجارة الإلكترونية الذكية',
    },
    description: {
      en: 'An integrated e-commerce platform powered by AI to personalize shopping experiences, enhance security, and support digital retail business growth. Combines modern web technologies and smart management tools to boost sales and improve operational efficiency.',
      ar: 'منصة تجارة إلكترونية متكاملة تعتمد على الذكاء الاصطناعي لتخصيص تجربة التسوق، تعزيز الأمان، ودعم نمو أعمال التجزئة الرقمية. تجمع بين تقنيات ويب حديثة وأدوات إدارة ذكية لرفع المبيعات وتحسين كفاءة التشغيل.',
    },
    industry: {
      en: 'E-Commerce Platform',
      ar: 'منصة تجارة إلكترونية',
    },
    year: 2024,
    tags: ['E-Commerce', 'Retail', 'AI', 'Digital'],
    featured: true,
    details: {
      about: {
        en: 'This cutting-edge e-commerce solution combines advanced artificial intelligence with modern web technologies to deliver exceptional online shopping experiences and powerful business management capabilities.',
        ar: 'يجمع حل التجارة الإلكترونية المتطور هذا بين الذكاء الاصطناعي المتقدم وتقنيات الويب الحديثة لتقديم تجارب تسوق استثنائية عبر الإنترنت وقدرات إدارة أعمال قوية.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'Online retailers needed a comprehensive platform that could handle modern e-commerce demands while providing intelligent features for personalization and security.',
            ar: 'احتاج تجار التجزئة عبر الإنترنت إلى منصة شاملة يمكنها التعامل مع متطلبات التجارة الإلكترونية الحديثة مع توفير ميزات ذكية للتخصيص والأمان.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'AI-powered recommendation engines for personalized customer experiences and increased sales.',
            ar: 'محركات التوصيات المدعومة بالذكاء الاصطناعي لتجارب العملاء المخصصة وزيادة المبيعات.',
          },
          {
            en: 'Advanced fraud detection and security systems to protect both merchants and customers.',
            ar: 'أنظمة كشف الاحتيال والأمان المتقدمة لحماية التجار والعملاء على حد سواء.',
          },
          {
            en: 'Comprehensive business management suite with analytics, inventory, and customer relationship tools.',
            ar: 'مجموعة إدارة أعمال شاملة مع أدوات التحليلات والمخزون وعلاقات العملاء.',
          },
          {
            en: 'Modern responsive design built with Angular and React for optimal performance across all devices.',
            ar: 'تصميم حديث متجاوب مبني بـ Angular و React للأداء الأمثل عبر جميع الأجهزة.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Increased sales conversion rates through intelligent product recommendations.',
            ar: 'زيادة معدلات تحويل المبيعات من خلال توصيات المنتجات الذكية.',
          },
          {
            en: 'Enhanced security and trust with advanced fraud prevention measures.',
            ar: 'تعزيز الأمان والثقة مع تدابير منع الاحتيال المتقدمة.',
          },
          {
            en: 'Improved operational efficiency through integrated business management tools.',
            ar: 'تحسين الكفاءة التشغيلية من خلال أدوات إدارة الأعمال المتكاملة.',
          },
          {
            en: 'Superior user experience driving customer loyalty and repeat business.',
            ar: 'تجربة مستخدم فائقة تدفع ولاء العملاء وتكرار الأعمال.',
          },
        ],
      },
      relatedProjects: ['go-care-beauty'],
    },
  },
  {
    id: 'go-care-beauty',
    title: {
      en: 'Booking System',
      ar: 'نظام حجوزات',
    },
    description: {
      en: 'A smart platform connecting customers with beauty salons and clinics through instant booking, location-based search, and a trusted rating system. Simplifies appointment management for service providers and delivers a seamless, transparent booking experience for customers.',
      ar: 'منصة ذكية تربط العملاء بصالونات وعيادات التجميل عبر حجز فوري، بحث حسب الموقع، ونظام تقييم موثوق. تسهل إدارة المواعيد لمقدمي الخدمات وتقدم تجربة حجز سلسة وشفافة للعملاء.',
    },
    industry: {
      en: 'Go Care',
      ar: 'Go Care',
    },
    year: 2024,
    tags: ['Service', 'Booking', 'Mobile App'],
    featured: true,
    image: 'assets/images/projects/gocare.png',
    details: {
      about: {
        en: 'This innovative beauty service platform connects customers with qualified beauty professionals, transforming how beauty and personal care services are discovered and booked.',
        ar: 'تربط منصة خدمات الجمال المبتكرة هذه العملاء بمهنيي التجميل المؤهلين، مما يحول طريقة اكتشاف وحجز خدمات الجمال والعناية الشخصية.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'Beauty service customers struggled to find reliable providers while salons and clinics needed better visibility and efficient booking management systems.',
            ar: 'كافح عملاء خدمات الجمال للعثور على مقدمي خدمات موثوقين بينما احتاجت الصالونات والعيادات إلى رؤية أفضل وأنظمة إدارة حجوزات فعالة.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'Comprehensive directory of verified beauty salons and aesthetic clinics.',
            ar: 'دليل شامل لصالونات التجميل والعيادات التجميلية المعتمدة.',
          },
          {
            en: 'Intelligent location-based search with real-time availability and instant booking.',
            ar: 'بحث ذكي قائم على الموقع مع التوفر في الوقت الفعلي والحجز الفوري.',
          },
          {
            en: 'Advanced rating and review system ensuring quality service standards.',
            ar: 'نظام تقييم ومراجعة متقدم يضمن معايير الخدمة عالية الجودة.',
          },
          {
            en: 'Integrated business management tools for service providers including scheduling and customer management.',
            ar: 'أدوات إدارة أعمال متكاملة لمقدمي الخدمات تشمل الجدولة وإدارة العملاء.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Enhanced accessibility to quality beauty and personal care services.',
            ar: 'تحسين إمكانية الوصول إلى خدمات الجمال والعناية الشخصية عالية الجودة.',
          },
          {
            en: 'Improved customer satisfaction through verified providers and transparent ratings.',
            ar: 'تحسن رضا العملاء من خلال مقدمي الخدمات المعتمدين والتقييمات الشفافة.',
          },
          {
            en: 'Increased business opportunities and efficiency for beauty service providers.',
            ar: 'زيادة الفرص التجارية والكفاءة لمقدمي خدمات الجمال.',
          },
          {
            en: 'Streamlined booking experience with reduced wait times and better service coordination.',
            ar: 'تجربة حجز مبسطة مع تقليل أوقات الانتظار وتنسيق أفضل للخدمات.',
          },
        ],
      },
      relatedProjects: ['go-care-healthcare'],
    },
  },
  {
    id: 'go-care-healthcare',
    title: {
      en: 'Admin Management System',
      ar: 'نظام إدارة',
    },
    description: {
      en: 'A centralized administrative system for managing the entire healthcare ecosystem, from service providers and patients to appointments and operational quality. Gives healthcare managers clear visibility and greater control over performance, compliance, and service improvement.',
      ar: 'نظام إداري مركزي لإدارة منظومة الرعاية الصحية بالكامل، من مقدمي الخدمات والمرضى إلى المواعيد وجودة التشغيل. يمنح مديري الرعاية الصحية رؤية واضحة وتحكمًا أعلى في الأداء والامتثال وتحسين الخدمات.',
    },
    industry: {
      en: 'Healthcare Management',
      ar: 'إدارة الرعاية الصحية',
    },
    year: 2024,
    tags: ['Healthcare', 'Management', 'Admin Portal'],
    featured: true,
    image: 'assets/images/projects/admin-dashboard.png',
    details: {
      about: {
        en: 'The admin platform provides healthcare administrators with powerful tools to manage the entire healthcare ecosystem efficiently.',
        ar: 'توفر منصة الإدارة لمديري الرعاية الصحية أدوات قوية لإدارة النظام البيئي للرعاية الصحية بالكامل بكفاءة.',
      },
      challenge: {
        title: { en: 'The Challenge', ar: 'التحدي' },
        points: [
          {
            en: 'Healthcare administrators needed a centralized system to manage providers, patients, appointments, and overall platform operations effectively.',
            ar: 'احتاج مديرو الرعاية الصحية إلى نظام مركزي لإدارة مقدمي الخدمات والمرضى والمواعيد وعمليات المنصة الشاملة بفعالية.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'Centralized administration panel for healthcare operations.',
            ar: 'لوحة إدارة مركزية لعمليات الرعاية الصحية.',
          },
          {
            en: 'Provider and patient management systems.',
            ar: 'أنظمة إدارة مقدمي الخدمات والمرضى.',
          },
          {
            en: 'Advanced analytics and reporting capabilities.',
            ar: 'قدرات تحليلية وإعداد تقارير متقدمة.',
          },
          {
            en: 'Quality control and compliance monitoring tools.',
            ar: 'أدوات مراقبة مراقبة الجودة والامتثال.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Streamlined healthcare administration processes.',
            ar: 'تبسيط عمليات إدارة الرعاية الصحية.',
          },
          {
            en: 'Enhanced quality control and compliance management.',
            ar: 'تحسين مراقبة الجودة وإدارة الامتثال.',
          },
          {
            en: 'Improved operational efficiency and resource utilization.',
            ar: 'تحسين الكفاءة التشغيلية واستغلال الموارد.',
          },
          {
            en: 'Better healthcare service delivery and patient outcomes.',
            ar: 'تحسين تقديم الخدمات الصحية ونتائج المرضى.',
          },
        ],
      },
      relatedProjects: ['go-care-beauty', 'advanced-monitoring'],
    },
  },
  // {
  //   id: 'education-platform',
  //   title: {
  //     en: 'National Education Management Platform',
  //     ar: 'منصة إدارة التعليم الوطنية',
  //   },
  //   description: {
  //     en: 'Unified education management system serving thousands of schools, educators, and students across the Kingdom.',
  //     ar: 'نظام إدارة تعليمي موحد يخدم آلاف المدارس والمعلمين والطلاب في جميع أنحاء المملكة.',
  //   },
  //   industry: {
  //     en: 'Education & Training',
  //     ar: 'التعليم والتدريب',
  //   },
  //   year: 2023,
  //   tags: ['Education', 'E-Learning', 'Government'],
  //   featured: true,
  // },
];
