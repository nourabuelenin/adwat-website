import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { TranslationService } from '../../core/services/translation.service';

// Global tracking pixel functions loaded from index.html
declare function twq(command: string, eventId: string, data?: Record<string, unknown>): void;
declare function lintrk(command: string, data: Record<string, unknown>): void;

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink, ContainerComponent],
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  content = {
    title: {
      en: 'Thank You!',
      ar: 'شكراً لك!',
    },
    message: {
      en: 'Your inquiry has been sent successfully. Our team will get back to you within 12 hours.',
      ar: 'تم إرسال استفسارك بنجاح. سيتواصل فريقنا معك خلال 12 ساعة.',
    },
    backHome: {
      en: 'Back to Home',
      ar: 'العودة للرئيسية',
    },
    contactAgain: {
      en: 'Send Another Inquiry',
      ar: 'إرسال استفسار آخر',
    },
  };

  ngOnInit(): void {
    this.trackConversion();
  }

  private trackConversion(): void {
    try {
      // X (Twitter) conversion tracking
      if (typeof twq === 'function') {
        twq('event', 'tw-r3r02-r4o4f', {});
      }

      // LinkedIn conversion tracking
      if (typeof lintrk === 'function') {
        lintrk('track', { conversion_id: 26169049 });
      }
    } catch (error) {
      console.warn('Conversion tracking error:', error);
    }
  }
}
