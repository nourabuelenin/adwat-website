import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';

import { environment } from '../environments/environment';
import Clarity from '@microsoft/clarity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ScrollProgressComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Adwat Information Technology';

  constructor() {
    this.initClarity();
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
