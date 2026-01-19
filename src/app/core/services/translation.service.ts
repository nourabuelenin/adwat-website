import { Injectable, signal, computed, effect } from '@angular/core';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLangSignal = signal<Language>('ar');

  readonly currentLang = this.currentLangSignal.asReadonly();
  readonly isRtl = computed(() => this.currentLangSignal() === 'ar');

  constructor() {
    this.initializeLanguage();

    // Effect to update document attributes whenever language changes
    effect(() => {
      const lang = this.currentLangSignal();
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('preferredLang', lang);
    });
  }

  private initializeLanguage(): void {
    const storedLang = localStorage.getItem('preferredLang') as Language;
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLangSignal.set(storedLang);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLangSignal.set(lang);
  }

  toggleLanguage(): void {
    this.currentLangSignal.update((lang) => (lang === 'en' ? 'ar' : 'en'));
  }
}
