import { Project } from '../models/content.models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'traffic-monitoring',
    title: {
      en: 'Traffic Incident Monitoring System',
      ar: 'نظام مراقبة حوادث المرور',
    },
    description: {
      en: 'An intelligent solution for monitoring and analyzing road incidents using data and AI to support real-time traffic safety decisions. Helps authorities predict high-risk areas and proactive intervention to reduce accidents.',
      ar: 'حل ذكي لمراقبة وتحليل حوادث الطرق يعتمد على البيانات والذكاء الاصطناعي لدعم قرارات السلامة المرورية في الوقت الفعلي. يساعد الجهات المعنية على التنبؤ بالمناطق عالية الخطورة والتدخل الاستباقي للحد من الحوادث.',
    },
    industry: {
      en: 'Government Platform',
      ar: 'منصة حكومية',
    },
    year: 2024,
    tags: ['Software Development', 'AI Training', 'Software Development'],
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
            en: 'Riyadh Municipality Needed An Intelligent System To Monitor Traffic Incidents, Provide Predictive Safety Monitoring To Reduce Road Accidents.',
            ar: 'احتاجت أمانة الرياض إلى نظام ذكي لمراقبة حوادث المرور، وتوفير مراقبة السلامة التنبؤية للحد من حوادث الطرق.',
          },
        ],
      },
      keyFeatures: {
        title: { en: 'Key Features', ar: 'الميزات الرئيسية' },
        points: [
          {
            en: 'AI-Powered Predictive Analytics For Incident Prediction And Critical Event Identification.',
            ar: 'تحليلات تنبؤية مدعومة بالذكاء الاصطناعي للتنبؤ بالحوادث وتحديد الأحداث الحرجة.',
          },
          {
            en: 'Real-Time Monitoring With Fully Automated Incident Detection Systems.',
            ar: 'مراقبة في الوقت الفعلي مع أنظمة كشف حوادث آلية بالكامل.',
          },
          {
            en: 'Comprehensive Dashboard For Traffic Management And High-Risk Coordination.',
            ar: 'لوحة معلومات شاملة لإدارة حركة المرور وتنسيق المناطق عالية الخطورة.',
          },
          {
            en: 'Integration With Existing Municipal Sensors And Traffic Infrastructure.',
            ar: 'التكامل مع أجهزة الاستشعار البلدية الحالية وبنية المرور التحتية.',
          },
        ],
      },
      impact: {
        title: { en: 'Impact', ar: 'التأثير' },
        points: [
          {
            en: 'Significant Reduction In Traffic Accident Rates Across Riyadh Through Proactive Intervention.',
            ar: 'تخفيض كبير في معدلات حوادث المرور في الرياض من خلال التدخل الاستباقي.',
          },
          {
            en: 'Enhanced Response Times Through Automated And Dynamic.',
            ar: 'تحسين أوقات الاستجابة من خلال الأتمتة والديناميكية.',
          },
          {
            en: 'Improved Road Safety Through Predictive Maintenance And Resource Optimization.',
            ar: 'تحسين سلامة الطرق من خلال الصيانة التنبؤية وتحسين الموارد.',
          },
          {
            en: 'Data-Driven Decision Making For Urban Traffic Planning And Smart Initiatives.',
            ar: 'اتخاذ قرارات قائمة على البيانات لتخطيط المرور الحضري والمبادرات الذكية.',
          },
        ],
      },
      relatedProjects: ['construction-management', 'e-next'],
    },
  },
  {
    id: 'advanced-monitoring',
    title: {
      en: 'Advanced Monitoring System',
      ar: 'نظام المراقبة المتقدم',
    },
    description: {
      en: 'A centralized platform for real-time hospital performance monitoring, enabling unified oversight of operations and healthcare quality across a wide network of facilities. Supports rapid decision-making and improves response efficiency and resource management at the sector level.',
      ar: 'منصة مركزية لمراقبة أداء المستشفيات في الوقت الفعلي، تتيح إشرافًا موحدًا على العمليات وجودة الرعاية الصحية عبر شبكة واسعة من المنشآت. تدعم اتخاذ القرار السريع وتحسين كفاءة الاستجابة وإدارة الموارد على مستوى القطاع الصحي.',
    },
    industry: {
      en: 'Ministry of Health',
      ar: 'وزارة الصحة',
    },
    year: 2024,
    tags: ['Healthcare', 'Monitoring', 'Government'],
    featured: true,
    image: 'assets/images/projects/TASM.png',
  },
  {
    id: 'construction-management',
    title: {
      en: 'Construction Project Management Platform',
      ar: 'منصة إدارة مشاريع البناء',
    },
    description: {
      en: 'A unified digital platform for managing construction projects, bringing all project stakeholders together in one environment with clear workflows and real-time performance analytics. Helps control coordination, improve resource utilization, and reduce delays and costs throughout the project lifecycle.',
      ar: 'منصة رقمية موحدة لإدارة مشاريع البناء، تجمع جميع أطراف المشروع في بيئة واحدة بسير عمل واضح وتحليلات أداء لحظية. تساعد على ضبط التنسيق، تحسين استخدام الموارد، وتقليل التأخير والتكاليف عبر دورة المشروع كاملة.',
    },
    industry: {
      en: 'Management Platform',
      ar: 'منصة إدارة',
    },
    year: 2024,
    tags: ['Construction', 'Project Management', 'Enterprise'],
    featured: true,
    image: 'assets/images/projects/czone.png',
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
    tags: ['E-Commerce', 'AI', 'Digital'],
    featured: true,
  },
  {
    id: 'go-care-beauty',
    title: {
      en: 'Go Care Beauty & Personal Care Platform',
      ar: 'Go Care منصة الجمال والعناية الشخصية',
    },
    description: {
      en: 'A smart platform connecting customers with beauty salons and clinics through instant booking, location-based search, and a trusted rating system. Simplifies appointment management for service providers and delivers a seamless, transparent booking experience for customers.',
      ar: 'منصة ذكية تربط العملاء بصالونات وعيادات التجميل عبر حجز فوري، بحث حسب الموقع، ونظام تقييم موثوق. تسهل إدارة المواعيد لمقدمي الخدمات وتقدم تجربة حجز سلسة وشفافة للعملاء.',
    },
    industry: {
      en: 'Beauty & Personal Care',
      ar: 'الجمال والعناية الشخصية',
    },
    year: 2024,
    tags: ['Beauty', 'Booking', 'Mobile App'],
    featured: true,
    image: 'assets/images/projects/gocare.png',
  },
  {
    id: 'go-care-healthcare',
    title: {
      en: 'Go Care Healthcare Management System',
      ar: 'Go Care نظام إدارة الرعاية الصحية',
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
    tags: ['Healthcare', 'Management', 'Digital Health'],
    featured: true,
  },
  {
    id: 'education-platform',
    title: {
      en: 'National Education Management Platform',
      ar: 'منصة إدارة التعليم الوطنية',
    },
    description: {
      en: 'Unified education management system serving thousands of schools, educators, and students across the Kingdom.',
      ar: 'نظام إدارة تعليمي موحد يخدم آلاف المدارس والمعلمين والطلاب في جميع أنحاء المملكة.',
    },
    industry: {
      en: 'Education & Training',
      ar: 'التعليم والتدريب',
    },
    year: 2023,
    tags: ['Education', 'E-Learning', 'Government'],
    featured: true,
  },
];
