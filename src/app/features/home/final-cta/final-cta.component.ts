import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ContainerComponent],
  templateUrl: './final-cta.component.html',
  styleUrls: ['./final-cta.component.css']
})
export class FinalCtaComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  email: string = '';
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;

  content = {
    // Newsletter Card
    newsletterTitle: { en: 'Subscribe to our newsletter', ar: 'اشترك في نشرتنا الإخبارية' },
    newsletterSubtitle: { en: 'Get the latest updates and news directly to your inbox', ar: 'احصل على آخر التحديثات والأخبار مباشرة إلى بريدك' },
    emailPlaceholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
    submitButton: { en: 'Get started', ar: 'ابدأ الآن' },
    submittingButton: { en: 'Sending...', ar: 'جاري الإرسال...' },
    successMessage: { en: 'Thank you! We\'ll be in touch soon.', ar: 'شكرًا! سنتواصل معك قريبًا.' },
    expertsText: { en: 'Join 500+ satisfied clients', ar: 'انضم إلى أكثر من 500 عميل راضٍ' },
    
    // CTA Banner
    ctaTitle: { en: 'Experience superior digital solutions', ar: 'استمتع بحلول رقمية متفوقة' },
    ctaSubtitle: { en: 'Transform your business with cutting-edge technology and expert development services.', ar: 'حوّل أعمالك باستخدام التكنولوجيا المتطورة وخدمات التطوير الاحترافية.' },
    ctaButton: { en: 'Get started', ar: 'ابدأ الآن' }
  };



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
