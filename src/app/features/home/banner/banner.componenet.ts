import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, RouterModule, ContainerComponent, SectionComponent],
  templateUrl: './banner.componenet.html',
  styleUrl: './banner.componenet.css',
})
export class BannerComponenet {
  private translationService = inject(TranslationService);

  // Computed property that returns the correct banner based on language
  bannerImage = computed(() => {
    const lang = this.translationService.currentLang();
    return lang === 'ar' ? 'assets/images/banner-ar.webp' : 'assets/images/banner-en.webp';
  });
}
