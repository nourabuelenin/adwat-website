import { Project } from '../models/content.models';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'gov-digital-platform',
    title: {
      en: 'National Digital Services Platform',
      ar: 'منصة الخدمات الرقمية الوطنية'
    },
    description: {
      en: 'Comprehensive digital platform serving millions of citizens with secure, scalable government services aligned with Vision 2030.',
      ar: 'منصة رقمية شاملة تخدم الملايين من المواطنين بخدمات حكومية آمنة وقابلة للتطوير متوافقة مع رؤية 2030.'
    },
    industry: {
      en: 'Government & Public Sector',
      ar: 'القطاع الحكومي والعام'
    },
    year: 2024,
    tags: ['Government', 'Digital Transformation', 'Vision 2030'],
    featured: true
  },
  {
    id: 'enterprise-erp',
    title: {
      en: 'Enterprise Resource Planning System',
      ar: 'نظام تخطيط موارد المؤسسة'
    },
    description: {
      en: 'Integrated ERP solution for a major Saudi enterprise, streamlining operations across 15+ departments and 5000+ users.',
      ar: 'حل متكامل لتخطيط موارد المؤسسات لشركة سعودية كبرى، يعمل على تبسيط العمليات عبر أكثر من 15 قسمًا وأكثر من 5000 مستخدم.'
    },
    industry: {
      en: 'Manufacturing & Industrial',
      ar: 'التصنيع والصناعة'
    },
    year: 2023,
    tags: ['ERP', 'Enterprise', 'Integration'],
    featured: true
  },
  {
    id: 'smart-city',
    title: {
      en: 'Smart City Infrastructure Management',
      ar: 'إدارة البنية التحتية للمدينة الذكية'
    },
    description: {
      en: 'IoT-enabled smart city platform managing urban infrastructure, traffic, utilities, and citizen services in real-time.',
      ar: 'منصة مدينة ذكية تعمل بإنترنت الأشياء لإدارة البنية التحتية الحضرية والمرور والمرافق وخدمات المواطنين في الوقت الفعلي.'
    },
    industry: {
      en: 'Smart Cities & Infrastructure',
      ar: 'المدن الذكية والبنية التحتية'
    },
    year: 2024,
    tags: ['Smart City', 'IoT', 'Infrastructure'],
    featured: true
  },
  {
    id: 'healthcare-system',
    title: {
      en: 'Integrated Healthcare Management System',
      ar: 'نظام إدارة الرعاية الصحية المتكامل'
    },
    description: {
      en: 'Comprehensive healthcare platform connecting hospitals, clinics, and patients with secure, HIPAA-compliant digital services.',
      ar: 'منصة رعاية صحية شاملة تربط المستشفيات والعيادات والمرضى بخدمات رقمية آمنة ومتوافقة مع معايير HIPAA.'
    },
    industry: {
      en: 'Healthcare & Medical',
      ar: 'الرعاية الصحية والطبية'
    },
    year: 2023,
    tags: ['Healthcare', 'Digital Health', 'Integration'],
    featured: true
  },
  {
    id: 'financial-platform',
    title: {
      en: 'Digital Banking Platform',
      ar: 'منصة الخدمات المصرفية الرقمية'
    },
    description: {
      en: 'Secure digital banking solution with advanced features for corporate clients and retail customers, fully compliant with SAMA regulations.',
      ar: 'حل مصرفي رقمي آمن مع ميزات متقدمة للعملاء من الشركات والأفراد، متوافق تمامًا مع لوائح ساما.'
    },
    industry: {
      en: 'Banking & Financial Services',
      ar: 'الخدمات المصرفية والمالية'
    },
    year: 2024,
    tags: ['FinTech', 'Banking', 'Security'],
    featured: true
  },
  {
    id: 'education-platform',
    title: {
      en: 'National Education Management Platform',
      ar: 'منصة إدارة التعليم الوطنية'
    },
    description: {
      en: 'Unified education management system serving thousands of schools, educators, and students across the Kingdom.',
      ar: 'نظام إدارة تعليمي موحد يخدم آلاف المدارس والمعلمين والطلاب في جميع أنحاء المملكة.'
    },
    industry: {
      en: 'Education & Training',
      ar: 'التعليم والتدريب'
    },
    year: 2023,
    tags: ['Education', 'E-Learning', 'Government'],
    featured: true
  }
];
