import { Component, OnInit, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

interface NavItem {
  label: { en: string; ar: string };
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private translationService = inject(TranslationService);
  isScrolled = false;
  isMobileMenuOpen = false;
  
  // Use signals from service
  currentLang = this.translationService.currentLang;

  navItems: NavItem[] = [
    { label: { en: 'Home', ar: 'الرئيسية' }, route: '/' },
    { label: { en: 'About', ar: 'من نحن' }, route: '/about' },
    { label: { en: 'Services', ar: 'خدماتنا' }, route: '/services' },
    { label: { en: 'Projects', ar: 'مشاريعنا' }, route: '/projects' },
    { label: { en: 'FAQ', ar: 'الأسئلة الشائعة' }, route: '/faq' }
  ];

  ngOnInit(): void {
    // Initial scroll check
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Check if scrolled past hero section (approximately 600-700px)
    this.isScrolled = window.pageYOffset > 600;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  getNavLabel(item: NavItem): string {
    return item.label[this.currentLang()];
  }
}
