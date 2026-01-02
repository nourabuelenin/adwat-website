import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: { en: string; ar: string };
  route: string;
}

interface FooterSection {
  title: { en: string; ar: string };
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  currentLang: 'en' | 'ar' = 'en';

  footerSections: FooterSection[] = [
    {
      title: { en: 'Company', ar: 'الشركة' },
      links: [
        { label: { en: 'About Us', ar: 'من نحن' }, route: '/about' },
        { label: { en: 'Our Services', ar: 'خدماتنا' }, route: '/services' },
        { label: { en: 'Projects', ar: 'مشاريعنا' }, route: '/projects' },
        { label: { en: 'Careers', ar: 'الوظائف' }, route: '/careers' }
      ]
    },
    {
      title: { en: 'Services', ar: 'الخدمات' },
      links: [
        { label: { en: 'Digital Transformation', ar: 'التحول الرقمي' }, route: '/services/digital-transformation' },
        { label: { en: 'Custom Software', ar: 'البرمجيات المخصصة' }, route: '/services/custom-software' },
        { label: { en: 'Cloud Solutions', ar: 'الحلول السحابية' }, route: '/services/cloud' },
        { label: { en: 'Consulting', ar: 'الاستشارات' }, route: '/services/consulting' }
      ]
    },
    {
      title: { en: 'Resources', ar: 'الموارد' },
      links: [
        { label: { en: 'Blog', ar: 'المدونة' }, route: '/blog' },
        { label: { en: 'Case Studies', ar: 'دراسات الحالة' }, route: '/case-studies' },
        { label: { en: 'Documentation', ar: 'التوثيق' }, route: '/docs' },
        { label: { en: 'Support', ar: 'الدعم' }, route: '/support' }
      ]
    },
    {
      title: { en: 'Legal', ar: 'قانوني' },
      links: [
        { label: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' }, route: '/privacy' },
        { label: { en: 'Terms of Service', ar: 'شروط الخدمة' }, route: '/terms' },
        { label: { en: 'Cookie Policy', ar: 'سياسة الكوكيز' }, route: '/cookies' },
        { label: { en: 'Compliance', ar: 'الامتثال' }, route: '/compliance' }
      ]
    }
  ];

  contactInfo = {
    ksa: {
      label: { en: 'Saudi Arabia Office', ar: 'مكتب المملكة العربية السعودية' },
      address: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
      phone: '+966 XX XXX XXXX',
      email: 'info@adwat.sa'
    },
    egypt: {
      label: { en: 'Egypt Office', ar: 'مكتب مصر' },
      address: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
      phone: '+20 XX XXX XXXX',
      email: 'info@adwat.com.eg'
    }
  };

  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/adwat', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/adwat', icon: 'twitter' },
    { name: 'Facebook', url: 'https://facebook.com/adwat', icon: 'facebook' }
  ];

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
  }

  getSectionTitle(section: FooterSection): string {
    return section.title[this.currentLang];
  }

  getLinkLabel(link: FooterLink): string {
    return link.label[this.currentLang];
  }
}
