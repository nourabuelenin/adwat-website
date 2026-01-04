import { Component, OnInit, HostListener } from '@angular/core';
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
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLang: 'en' | 'ar' = 'en';

  navItems: NavItem[] = [
    { label: { en: 'Home', ar: 'الرئيسية' }, route: '/' },
    { label: { en: 'About', ar: 'من نحن' }, route: '/about' },
    { label: { en: 'Services', ar: 'خدماتنا' }, route: '/services' },
    { label: { en: 'Projects', ar: 'مشاريعنا' }, route: '/projects' },
    { label: { en: 'Contact', ar: 'اتصل بنا' }, route: '/contact' }
  ];

  ngOnInit(): void {
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLang');
    if (storedLang === 'ar' || storedLang === 'en') {
      this.currentLang = storedLang;
    }
    // Check initial scroll position
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
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('preferredLang', this.currentLang);
    document.documentElement.lang = this.currentLang;
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }

  getNavLabel(item: NavItem): string {
    return item.label[this.currentLang];
  }
}
