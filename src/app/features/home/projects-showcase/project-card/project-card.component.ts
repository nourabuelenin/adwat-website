import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../../../core/models/content.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="project-card" [class.active]="active">
      <!-- Left Content -->
      <div class="card-content">
        <h3 class="project-title">
          {{ project.title[currentLang] }}
        </h3>
        
        <div class="quote-icon">"</div>
        
        <p class="project-description">
          {{ project.description[currentLang] }}
        </p>
        
        <div class="client-info">
          <div class="client-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div class="client-details">
            <span class="client-name">{{ project.industry[currentLang] }}</span>
            <span class="client-role">{{ project.tags?.join(' • ') || '' }}</span>
          </div>
        </div>
        
        <button class="case-study-btn" routerLink="/projects">
          {{ caseStudyText[currentLang] }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
      
      <!-- Right Mockup -->
      <div class="card-mockup">
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="screen-header">
              <div class="header-avatar"></div>
              <div class="header-info">
                <div class="header-name"></div>
                <div class="header-location"></div>
              </div>
            </div>
            <div class="screen-content">
              <div class="content-card">
                <div class="card-title-mock"></div>
                <div class="card-tabs">
                  <span class="tab active"></span>
                  <span class="tab"></span>
                </div>
                <div class="card-list">
                  <div class="list-item" *ngFor="let i of [1,2,3]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tablet-mockup">
          <div class="tablet-screen">
            <div class="tablet-header"></div>
            <div class="tablet-content">
              <div class="tablet-sidebar"></div>
              <div class="tablet-main">
                <div class="main-card" *ngFor="let i of [1,2]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: white;
      border-radius: 12px;
      padding: 2.5rem;
      color: #0f172a;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      min-height: 420px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
      border: 1px solid rgba(15,23,42,0.04);
    }

    @media (max-width: 1024px) {
      .project-card {
        grid-template-columns: 1fr;
        padding: 2rem;
        min-height: auto;
      }

      .card-mockup {
        display: none;
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .project-title {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 1rem;
      color: #0f172a;
    }

    .quote-icon {
      font-size: 3.5rem;
      font-family: Georgia, serif;
      color: #e6eef7;
      line-height: 0.5;
      margin-bottom: 1rem;
    }

    .project-description {
      color: #475569;
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .client-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .client-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
    }

    .client-details {
      display: flex;
      flex-direction: column;
    }

    .client-name {
      font-weight: 600;
      font-size: 0.975rem;
      color: #0f172a;
    }

    .client-role {
      color: #64748b;
      font-size: 0.85rem;
    }

    .case-study-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: transparent;
      border: 1px solid rgba(15,23,42,0.08);
      color: #0f172a;
      padding: 0.75rem 1.25rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s ease;
      width: fit-content;
    }

    .case-study-btn:hover {
      background: #0f172a;
      color: white;
      border-color: #0f172a;
    }

    .project-card.active {
      background: linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.06));
      border: 1px solid rgba(16,185,129,0.18);
      box-shadow: 0 24px 60px rgba(16,185,129,0.07);
      color: #042f2a;
    }

    .project-card.active .project-title {
      color: #064e3b;
    }

    .project-card.active .case-study-btn {
      background: linear-gradient(90deg, #10b981, #06b6d4);
      color: white;
      border-color: transparent;
    }

    .card-mockup {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .phone-mockup {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 180px;
      height: 360px;
      background: #0f172a;
      border-radius: 24px;
      padding: 8px;
      border: 2px solid #334155;
      z-index: 2;
    }

    .phone-screen {
      width: 100%;
      height: 100%;
      background: #1e293b;
      border-radius: 18px;
      overflow: hidden;
      padding: 12px;
    }

    .screen-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .header-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #334155;
    }

    .header-info {
      flex: 1;
    }

    .header-name {
      height: 8px;
      width: 60%;
      background: #334155;
      border-radius: 4px;
      margin-bottom: 4px;
    }

    .header-location {
      height: 6px;
      width: 40%;
      background: #475569;
      border-radius: 4px;
    }

    .screen-content {
      padding: 8px 0;
    }

    .content-card {
      background: #334155;
      border-radius: 12px;
      padding: 12px;
    }

    .card-title-mock {
      height: 10px;
      width: 80%;
      background: #475569;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    .card-tabs {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
    }

    .tab {
      height: 24px;
      width: 60px;
      border-radius: 12px;
      background: #475569;
    }

    .tab.active {
      background: #10b981;
    }

    .card-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .list-item {
      height: 8px;
      background: #475569;
      border-radius: 4px;
    }

    .list-item:nth-child(1) { width: 100%; }
    .list-item:nth-child(2) { width: 85%; }
    .list-item:nth-child(3) { width: 70%; }

    .tablet-mockup {
      position: absolute;
      left: 0;
      top: 50%
;
      transform: translateY(-50%);
      width: 200px;
      height: 280px;
      background: #0f172a;
      border-radius: 16px;
      padding: 6px;
      border: 2px solid #334155;
      z-index: 1;
    }

    @media (max-width: 1024px) {
      .tablet-mockup {
        display: none;
      }
    }

    .tablet-screen {
      width: 100%;
      height: 100%;
      background: #1e293b;
      border-radius: 12px;
      overflow: hidden;
      padding: 10px;
    }

    .tablet-header {
      height: 20px;
      background: #334155;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .tablet-content {
      display: flex;
      gap: 8px;
      height: calc(100% - 30px);
    }

    .tablet-sidebar {
      width: 40px;
      background: #334155;
      border-radius: 8px;
    }

    .tablet-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .main-card {
      flex: 1;
      background: #334155;
      border-radius: 8px;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() active = false;

  caseStudyText = {
    en: 'Related case study',
    ar: 'دراسة الحالة ذات الصلة'
  };
}
