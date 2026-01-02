import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ContainerComponent, SectionComponent, ButtonComponent],
  template: `
    <app-section>
      <app-container [size]="'content'">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-adwat-dark-green mb-4">Contact Us</h1>
          <p class="text-lg text-adwat-dark-green/70">
            Get in touch with our team. We're here to help you transform your digital future.
          </p>
        </div>

        <div class="card p-8 max-w-2xl mx-auto">
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-adwat-dark-green mb-2">Full Name *</label>
              <input type="text" class="w-full px-4 py-3 border border-adwat-dark-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-semibold text-adwat-dark-green mb-2">Email *</label>
              <input type="email" class="w-full px-4 py-3 border border-adwat-dark-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-semibold text-adwat-dark-green mb-2">Phone</label>
              <input type="tel" class="w-full px-4 py-3 border border-adwat-dark-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-semibold text-adwat-dark-green mb-2">Company</label>
              <input type="text" class="w-full px-4 py-3 border border-adwat-dark-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-semibold text-adwat-dark-green mb-2">Message *</label>
              <textarea rows="5" class="w-full px-4 py-3 border border-adwat-dark-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>

            <app-button [variant]="'primary'" [fullWidth]="true" type="submit">
              Send Message
            </app-button>
          </form>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div class="text-center p-6">
            <h3 class="font-semibold text-adwat-dark-green mb-3">Saudi Arabia Office</h3>
            <p class="text-adwat-dark-green/70">Riyadh, Saudi Arabia</p>
            <p class="text-adwat-dark-green/70">info@adwat.sa</p>
            <p class="text-adwat-dark-green/70">+966 XX XXX XXXX</p>
          </div>
          <div class="text-center p-6">
            <h3 class="font-semibold text-adwat-dark-green mb-3">Egypt Office</h3>
            <p class="text-adwat-dark-green/70">Cairo, Egypt</p>
            <p class="text-adwat-dark-green/70">info@adwat.com.eg</p>
            <p class="text-adwat-dark-green/70">+20 XX XXX XXXX</p>
          </div>
        </div>
      </app-container>
    </app-section>
  `
})
export class ContactComponent {}
