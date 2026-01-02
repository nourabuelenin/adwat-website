import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ContainerComponent, SectionComponent, ButtonComponent, RouterModule],
  template: `
    <app-section>
      <app-container>
        <h1 class="text-4xl font-bold text-adwat-dark-green mb-6">Our Services</h1>
        <p class="text-lg text-adwat-dark-green/70 mb-8">
          This page is under construction. Full services catalog with detailed service descriptions coming soon.
        </p>
        <app-button routerLink="/">Back to Home</app-button>
      </app-container>
    </app-section>
  `
})
export class ServicesComponent {}
