import { Service } from '../models/content.models';

export const SERVICES_DATA: Service[] = [
  {
    id: 'custom-software-development',
    title: {
      en: 'Custom Software Development',
      ar: 'تطوير البرمجيات المخصصة'
    },
    description: {
      en: 'Enterprise-grade software solutions tailored to your business needs, built with cutting-edge technologies and best practices.',
      ar: 'حلول برمجية على مستوى المؤسسات مصممة خصيصًا لتلبية احتياجات عملك، مبنية بأحدث التقنيات وأفضل الممارسات.'
    },
    icon: 'code',
    link: '/services/custom-software',
    featured: true
  },
  {
    id: 'digital-transformation',
    title: {
      en: 'Digital Transformation',
      ar: 'التحول الرقمي'
    },
    description: {
      en: 'Comprehensive digital transformation strategies that modernize operations, enhance efficiency, and drive business growth.',
      ar: 'استراتيجيات تحول رقمي شاملة تعمل على تحديث العمليات وتعزيز الكفاءة ودفع نمو الأعمال.'
    },
    icon: 'transform',
    link: '/services/digital-transformation',
    featured: true
  },
  {
    id: 'enterprise-systems',
    title: {
      en: 'Enterprise System Integration',
      ar: 'تكامل أنظمة المؤسسات'
    },
    description: {
      en: 'Seamless integration of enterprise systems to create unified, efficient workflows across your organization.',
      ar: 'تكامل سلس لأنظمة المؤسسات لإنشاء سير عمل موحد وفعال في جميع أنحاء مؤسستك.'
    },
    icon: 'integration',
    link: '/services/enterprise-integration',
    featured: true
  },
  {
    id: 'cloud-solutions',
    title: {
      en: 'Cloud Solutions',
      ar: 'الحلول السحابية'
    },
    description: {
      en: 'Secure, scalable cloud infrastructure and migration services designed for enterprise-level performance and reliability.',
      ar: 'بنية تحتية سحابية آمنة وقابلة للتطوير وخدمات ترحيل مصممة للأداء والموثوقية على مستوى المؤسسات.'
    },
    icon: 'cloud',
    link: '/services/cloud-solutions',
    featured: true
  },
  {
    id: 'cybersecurity',
    title: {
      en: 'Cybersecurity Solutions',
      ar: 'حلول الأمن السيبراني'
    },
    description: {
      en: 'Advanced security measures and compliance solutions to protect your critical business assets and sensitive data.',
      ar: 'تدابير أمنية متقدمة وحلول امتثال لحماية أصول عملك الحيوية والبيانات الحساسة.'
    },
    icon: 'security',
    link: '/services/cybersecurity',
    featured: true
  },
  {
    id: 'consulting',
    title: {
      en: 'IT Consulting & Strategy',
      ar: 'استشارات تقنية المعلومات والاستراتيجية'
    },
    description: {
      en: 'Expert technology consulting to align IT strategy with business objectives and maximize your technology investments.',
      ar: 'استشارات تقنية خبيرة لمواءمة استراتيجية تقنية المعلومات مع أهداف العمل وتعظيم استثماراتك التقنية.'
    },
    icon: 'consulting',
    link: '/services/consulting',
    featured: true
  }
];
