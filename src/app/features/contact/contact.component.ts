import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslationService } from '../../core/services/translation.service';
import { EmailService, ContactFormData } from '../../services/email';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ContainerComponent, ButtonComponent, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private translationService = inject(TranslationService);
  private emailService = inject(EmailService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  currentLang = this.translationService.currentLang;

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/adwat/posts/?feedView=all',
      icon: faLinkedin,
    },
    { name: 'X', url: 'https://x.com/AdwatIT', icon: faXTwitter },
    { name: 'Facebook', url: 'https://www.facebook.com/AdwatIT', icon: faFacebook },
    { name: 'Instagram', url: 'https://www.instagram.com/adwat.info.tech/', icon: faInstagram },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCgmTL_KXb9n8UgpQDMfFBlA',
      icon: faYoutube,
    },
  ];

  // Form state
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // Form model
  formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: '',
  };

  content = {
    title: {
      en: 'Contact Us',
      ar: 'تواصل معنا',
    },
    subtitle: {
      en: "Get In Touch With Our Team. We're Here To Help You Transform Your Digital Future.",
      ar: 'تواصل مع فريقنا. نحن هنا لمساعدتك في تحويل مستقبلك الرقمي.',
    },
    benefits: [
      {
        en: 'We Will Respond To You Within 12 Hours.',
        ar: 'سنرد عليك خلال 12 ساعة.',
      },
      {
        en: 'Access To Dedicated Consultant Specialists.',
        ar: 'الوصول إلى استشاريين متخصصين.',
      },
    ],
    bookCall: {
      text: {
        en: 'Want To Book An Exact Time?',
        ar: 'هل تريد حجز موعد محدد؟',
      },
      button: {
        en: 'Book A Free Call',
        ar: 'احجز مكالمة مجانية',
      },
    },
    form: {
      title: {
        en: 'Contact Adwat',
        ar: 'تواصل مع أدوات',
      },
      fields: {
        name: {
          label: { en: 'Your Name', ar: 'اسمك' },
          placeholder: { en: 'Enter Your Name', ar: 'أدخل اسمك' },
        },
        email: {
          label: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
          placeholder: { en: 'Enter Your Email', ar: 'أدخل بريدك الإلكتروني' },
        },
        phone: {
          label: { en: 'Phone Number', ar: 'رقم الهاتف' },
          placeholder: { en: 'Enter Your Phone Number', ar: 'أدخل رقم هاتفك' },
        },
        company: {
          label: { en: 'Company', ar: 'الشركة' },
          placeholder: { en: 'Enter Your Company', ar: 'أدخل اسم شركتك' },
        },
        inquiry: {
          label: { en: 'Inquiry', ar: 'الاستفسار' },
          placeholder: { en: 'Enter Your Inquiry', ar: 'أدخل استفسارك' },
        },
      },
      submit: {
        en: 'Send Inquiry',
        ar: 'إرسال الاستفسار',
      },
      submitting: {
        en: 'Sending...',
        ar: 'جاري الإرسال...',
      },
      successMessage: {
        en: 'Thank you! Your inquiry has been sent successfully. We will get back to you soon.',
        ar: 'شكراً لك! تم إرسال استفسارك بنجاح. سنتواصل معك قريباً.',
      },
      errorMessage: {
        en: 'Something went wrong. Please try again.',
        ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      },
    },
  };

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    // Validate form
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      const response = await this.emailService.sendContactForm(this.formData);

      if (response.success) {
        this.resetForm();

        // Redirect to thank-you page (tracking fires there)
        this.router.navigate(['/thank-you']);
      } else {
        this.submitError = true;
        this.errorMessage = response.message;
      }
    } catch (error) {
      this.submitError = true;
      this.errorMessage = this.content.form.errorMessage[this.currentLang()];
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.phone.trim() &&
      this.formData.company.trim() &&
      this.formData.inquiry.trim()
    );
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry: '',
    };
  }
}
