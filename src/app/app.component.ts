import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

import { environment } from '../environments/environment';
import Clarity from '@microsoft/clarity';

// Global tracking functions loaded from index.html
declare function twq(command: string, configId: string): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollProgressComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Adwat Information Technology';
  isLoading = true;
  private router = inject(Router);

  constructor() {
    this.initClarity();
    this.initPageViewTracking();
  }

  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.isLoading = false;
    });
  }

  /**
   * Track SPA page views for X and LinkedIn.
   * Since Angular doesn't reload the page on navigation,
   * the base tracking scripts only fire once. This listens
   * to route changes and notifies the trackers of each new page view.
   */
  private initPageViewTracking(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        // Skip page-view tracking on thank-you page (only conversion fires there)
        if (event.urlAfterRedirects === '/thank-you') {
          return;
        }

        // X (Twitter) — re-fire config to register a new page view
        if (typeof twq === 'function') {
          twq('config', 'r3r02');
        }

        // LinkedIn Insight Tag — push updated page URL
        if (typeof window !== 'undefined' && (window as any).lintrk) {
          (window as any).lintrk('track', { conversion_id: null });
        }
      });
  }

  private initClarity() {
    const clarityProjectId = environment.microsoftClarity?.projectId;

    if (clarityProjectId && clarityProjectId !== 'YOUR_CLARITY_PROJECT_ID') {
      Clarity.init(clarityProjectId);
      console.log('Microsoft Clarity initialized');
    } else {
      console.warn(
        'Microsoft Clarity Project ID not found or is placeholder. Please set it in environment.ts',
      );
    }
  }
}
