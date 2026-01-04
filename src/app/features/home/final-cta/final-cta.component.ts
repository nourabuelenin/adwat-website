import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent, ContainerComponent, SectionComponent],
  templateUrl: './final-cta.component.html',
  styleUrls: ['./final-cta.component.css']
})
export class FinalCtaComponent {
  currentLang: 'en' | 'ar' = 'en';
  email: string = '';
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;

  content = {
    badge: { en: 'Let\'s Work Together', ar: 'لنعمل معًا' },
    title: { en: 'Ready to Transform Your Digital Future?', ar: 'هل أنت مستعد لتحويل مستقبلك الرقمي؟' },
    description: { en: 'Partner with Adwat to build secure, scalable solutions that drive your business forward. Let\'s create something exceptional together.', ar: 'شارك مع أدوات لبناء حلول آمنة وقابلة للتطوير تدفع عملك إلى الأمام. دعنا نخلق شيئًا استثنائيًا معًا.' },
    formTitle: { en: 'Get Started Today', ar: 'ابدأ اليوم' },
    formSubtitle: { en: 'Drop your email and we\'ll reach out', ar: 'أدخل بريدك وسنتواصل معك' },
    emailLabel: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
    emailPlaceholder: { en: 'you@company.com', ar: 'you@company.com' },
    submitButton: { en: 'Get in Touch', ar: 'تواصل معنا' },
    submittingButton: { en: 'Sending...', ar: 'جاري الإرسال...' },
    successMessage: { en: 'Thank you! We\'ll be in touch soon.', ar: 'شكرًا! سنتواصل معك قريبًا.' },
    orText: { en: 'or', ar: 'أو' },
    fullFormLink: { en: 'Fill out the complete form', ar: 'املأ النموذج الكامل' },
    features: [
      { en: 'Free Consultation', ar: 'استشارة مجانية' },
      { en: 'Quick Response within 24h', ar: 'استجابة سريعة خلال 24 ساعة' },
      { en: 'Dedicated Support', ar: 'دعم مخصص' }
    ]
  };

  ngOnInit(): void {
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') this.currentLang = storedLang;
  }

  handleSubmit(): void {
    if (!this.email || this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.email = '';

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}
