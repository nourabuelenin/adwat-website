import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FAQ_DATA } from '../../../core/data/content.data';
import { FAQ } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent, ButtonComponent],
  template: `
    <app-section id="faq">
      <app-container [size]="'content'">
        <div class="text-center mb-12">
          <p class="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang()] }}
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold text-adwat-dark-green mb-4">
            {{ content.title[currentLang()] }}
          </h2>
        </div>

        <div class="space-y-4 mb-8">
          <div *ngFor="let faq of faqs; let i = index" class="card p-6">
            <button 
              (click)="toggleFaq(i)"
              class="w-full flex justify-between items-center text-left">
              <h3 class="text-lg font-semibold text-adwat-dark-green pr-4">
                {{ faq.question[currentLang()] }}
              </h3>
              <span class="text-primary text-2xl flex-shrink-0">
                {{ openIndex === i ? '−' : '+' }}
              </span>
            </button>
            <div *ngIf="openIndex === i" class="mt-4 pt-4 border-t border-adwat-dark-green/10">
              <p class="text-adwat-dark-green/70 leading-relaxed">
                {{ faq.answer[currentLang()] }}
              </p>
            </div>
          </div>
        </div>

        <!-- View All FAQs Button -->
        <div class="text-center">
          <app-button 
            [variant]="'secondary'" 
            [size]="'large'"
            routerLink="/faq">
            {{ currentLang() === 'en' ? 'View All FAQs' : 'عرض جميع الأسئلة' }}
          </app-button>
        </div>
      </app-container>
    </app-section>
  `
})
export class FaqComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  faqs: FAQ[] = FAQ_DATA.slice(0, 5);
  openIndex: number | null = null;

  content = {
    heading: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    title: { en: 'Frequently Asked Questions', ar: 'الأسئلة المتكررة' }
  };

  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
