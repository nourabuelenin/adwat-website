import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TESTIMONIALS_DATA, PARTNERS_DATA } from '../../../core/data/content.data';
import { Testimonial, Partner } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent],
  template: `
    <app-section [variant]="'light'" [withGradients]="true" [gradientVariant]="'left'" id="testimonials">
      <app-container>
        <div class="text-center max-w-3xl mx-auto mb-12">
          <p class="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang()] }}
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold text-adwat-dark-green mb-4">
            {{ content.title[currentLang()] }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let testimonial of testimonials" class="card p-8">
            <div class="flex mb-4">
              <span *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400 text-xl">★</span>
            </div>
            <p class="text-adwat-dark-green/80 leading-relaxed mb-6 italic">
              "{{ testimonial.content[currentLang()] }}"
            </p>
            <div class="border-t border-adwat-dark-green/10 pt-4">
              <p class="font-semibold text-adwat-dark-green">
                {{ testimonial.clientName[currentLang()] }}
              </p>
              <p class="text-sm text-adwat-dark-green/60">
                {{ testimonial.position[currentLang()] }}
              </p>
              <p class="text-sm text-adwat-dark-green/60">
                {{ testimonial.company[currentLang()] }}
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="border-t border-adwat-dark-green/10 pt-12">
          <p class="text-center text-adwat-dark-green/60 font-semibold mb-8">
            {{ content.partnersTitle[currentLang()] }}
          </p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            <div *ngFor="let partner of partners" class="flex items-center justify-center">
              <div class="w-24 h-16 bg-adwat-dark-green/5 rounded flex items-center justify-center">
                <span class="text-xs font-bold text-adwat-dark-green/40">{{ partner.name }}</span>
              </div>
            </div>
          </div>
        </div> -->
      </app-container>
    </app-section>
  `
})
export class TestimonialsComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  testimonials: Testimonial[] = TESTIMONIALS_DATA;
  partners: Partner[] = PARTNERS_DATA;

  content = {
    heading: { en: 'Client Testimonials', ar: 'آراء العملاء' },
    title: { en: 'What Our Clients Say', ar: 'ماذا يقول عملاؤنا' },
    partnersTitle: { en: 'Trusted by Leading Organizations', ar: 'موثوق به من قبل المؤسسات الرائدة' }
  };
}
