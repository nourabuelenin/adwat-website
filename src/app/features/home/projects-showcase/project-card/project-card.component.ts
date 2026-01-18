import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../../../core/models/content.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="project-card-wrapper">
      <div class="project-card" [class.active]="active">
        <!-- Left Content -->
        <div class="card-content">
          <h3 class="project-title">
            {{ project.title[currentLang] }}
          </h3>

          <p class="project-description">
            {{ project.description[currentLang] }}
          </p>

          <div class="client-info">
            <div class="client-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                />
              </svg>
            </div>
            <div class="client-details">
              <span class="client-name">{{ project.industry[currentLang] }}</span>
              <span class="client-role">{{ project.tags?.join(' • ') || '' }}</span>
            </div>
          </div>

          <!-- <button class="case-study-btn" routerLink="/projects">
            {{ caseStudyText[currentLang] }}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button> -->
        </div>

        <!-- Mockup Inside Card but Breaking Out -->
        <div class="card-mockup" *ngIf="project.image">
          <img [src]="project.image" [alt]="project.title[currentLang]" class="mockup-image" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .project-card-wrapper {
        position: relative;
      }

      .project-card {
        background: linear-gradient(135deg, #f0fdf9 0%, #ecfdf5 50%, #f0fdfa 100%);
        border-radius: 20px;
        padding: 2.5rem;
        color: #0f172a;
        min-height: 380px;
        box-shadow:
          0 4px 6px -1px rgba(0, 0, 0, 0.05),
          0 10px 15px -3px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(16, 185, 129, 0.1);
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 2rem;
        align-items: center;
        overflow: visible;
      }

      @media (max-width: 1024px) {
        .project-card {
          grid-template-columns: 1fr;
          min-height: auto;
        }
      }

      .card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .project-title {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #047857, #0d9488);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .project-description {
        color: #475569;
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }

      .client-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }

      .client-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: linear-gradient(135deg, #10b981, #06b6d4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }

      .client-details {
        display: flex;
        flex-direction: column;
      }

      .client-name {
        font-weight: 600;
        font-size: 0.9rem;
        color: #0f172a;
      }

      .client-role {
        color: #64748b;
        font-size: 0.8rem;
      }

      .case-study-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #10b981, #059669);
        border: none;
        color: white;
        padding: 0.875rem 1.5rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.25s ease;
        width: fit-content;
        box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
      }

      .case-study-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
      }

      .case-study-btn svg {
        transition: transform 0.25s ease;
      }

      .case-study-btn:hover svg {
        transform: translateX(4px);
      }

      /* Mockup - Breaking out of card */
      .card-mockup {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }

      .mockup-image {
        width: 100%;
        max-width: 520px;
        height: auto;
        transform: translateX(60px) translateY(20px);
        filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2))
          drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .project-card:hover .mockup-image {
        transform: translateX(70px) translateY(15px) scale(1.02);
        filter: drop-shadow(0 35px 60px rgba(0, 0, 0, 0.25))
          drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
      }

      @media (max-width: 1400px) {
        .mockup-image {
          max-width: 450px;
          transform: translateX(40px) translateY(15px);
        }

        .project-card:hover .mockup-image {
          transform: translateX(50px) translateY(10px) scale(1.02);
        }
      }

      @media (max-width: 1200px) {
        .mockup-image {
          max-width: 380px;
          transform: translateX(30px) translateY(10px);
        }

        .project-card:hover .mockup-image {
          transform: translateX(35px) translateY(5px) scale(1.02);
        }
      }

      @media (max-width: 1024px) {
        .project-card {
          grid-template-columns: 1fr;
          min-height: auto;
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.35rem;
        }

        .project-description {
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .client-info {
          margin-bottom: 1rem;
        }

        .client-avatar {
          width: 30px;
          height: 30px;
        }

        .client-avatar svg {
          width: 16px;
          height: 16px;
        }

        .client-name {
          font-size: 0.8rem;
        }

        .client-role {
          font-size: 0.7rem;
        }

        .case-study-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.8rem;
        }

        .card-mockup {
          display: block;
          margin-top: 1rem;
        }

        .mockup-image {
          max-width: 100%;
          transform: none;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
        }

        .project-card:hover .mockup-image {
          transform: none;
        }
      }

      @media (max-width: 480px) {
        .project-card {
          padding: 1.25rem;
        }

        .project-title {
          font-size: 1.15rem;
        }

        .project-description {
          font-size: 0.8rem;
        }
      }

      /* Active state */
      .project-card.active {
        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%);
        border-color: rgba(16, 185, 129, 0.25);
        box-shadow:
          0 8px 12px -2px rgba(16, 185, 129, 0.1),
          0 20px 30px -5px rgba(16, 185, 129, 0.08);
      }
    `,
  ],
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() active = false;

  caseStudyText = {
    en: 'Related case study',
    ar: 'دراسة الحالة ذات الصلة',
  };
}
