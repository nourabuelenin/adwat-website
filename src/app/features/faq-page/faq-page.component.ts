import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { FAQ_DATA } from '../../core/data/content.data';
import { FAQ } from '../../core/models/content.models';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent],
  template: `
    <app-section [variant]="'light'">
      <app-container [size]="'content'">
        <div class="text-center mb-16">
          <p class="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang()] }}
          </p>
          <h1 class="text-4xl lg:text-5xl font-bold text-adwat-dark-green mb-4">
            {{ content.title[currentLang()] }}
          </h1>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            {{ content.subtitle[currentLang()] }}
          </p>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
          <div *ngFor="let faq of faqs; let i = index" class="card p-6 hover:shadow-lg transition-shadow duration-300">
            <button 
              (click)="toggleFaq(i)"
              class="w-full flex justify-between items-center text-left">
              <h3 class="text-lg font-semibold text-adwat-dark-green pr-4">
                {{ faq.question[currentLang()] }}
              </h3>
              <span class="text-primary text-2xl flex-shrink-0 transition-transform duration-300"
                    [class.rotate-45]="openIndex === i">
                {{ openIndex === i ? '−' : '+' }}
              </span>
            </button>
            <div *ngIf="openIndex === i" 
                 class="mt-4 pt-4 border-t border-adwat-dark-green/10 animate-fade-in">
              <p class="text-adwat-dark-green/70 leading-relaxed">
                {{ faq.answer[currentLang()] }}
              </p>
            </div>
          </div>
        </div>
      </app-container>
    </app-section>
  `,
  styles: [`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.3s ease-out;
    }
  `]
})
export class FaqPageComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  faqs: FAQ[] = FAQ_DATA; // Show all FAQs
  openIndex: number | null = 0; // First FAQ open by default

  content = {
    heading: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة المتكررة' },
    subtitle: { 
      en: 'Find answers to common questions about our services and how we work',
      ar: 'اعثر على إجابات للأسئلة الشائعة حول خدماتنا وطريقة عملنا'
    }
  };

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
