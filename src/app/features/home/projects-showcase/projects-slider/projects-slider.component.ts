import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../core/models/content.models';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-slider',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="slider-wrapper">
      <div class="slider-container">
        <button
          class="slider-button prev"
          (click)="previousSlide()"
          [disabled]="currentSlide === 0"
          aria-label="Previous project"
        >
          <svg
            [style.transform]="currentLang === 'ar' ? 'rotate(180deg)' : 'none'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div class="slider-viewport">
          <div
            class="slider-track"
            [style.transform]="
              'translateX(calc(' +
              (currentLang === 'ar' ? '' : '-') +
              currentSlide +
              ' * (var(--slide-width) + var(--slide-gap))))'
            "
          >
            <div
              *ngFor="let project of projects; let i = index"
              class="slider-item"
              [class.active]="currentSlide === i"
            >
              <app-project-card
                [project]="project"
                [currentLang]="currentLang"
                [active]="currentSlide === i"
              >
              </app-project-card>
            </div>
          </div>
        </div>

        <button
          class="slider-button next"
          (click)="nextSlide()"
          [disabled]="currentSlide >= projects.length - 1"
          aria-label="Next project"
        >
          <svg
            [style.transform]="currentLang === 'ar' ? 'rotate(180deg)' : 'none'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div class="dots-container">
        <div
          *ngFor="let project of projects; let i = index"
          class="dot"
          [class.active]="currentSlide === i"
          (click)="goToSlide(i)"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      .slider-wrapper {
        width: 100%;
        overflow: visible;
        --slide-width: 80%;
        --slide-gap: 2rem;
      }

      .slider-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        overflow: visible;
      }

      .slider-viewport {
        flex: 1;
        overflow: hidden;
        padding-right: 100px;
        margin-right: -100px;
      }

      .slider-track {
        display: flex;
        gap: 2rem;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        overflow: visible;
      }

      .slider-item {
        flex: 0 0 80%;
        min-width: 0;
        opacity: 0.65;
        transform: scale(0.96);
        transition: all 0.45s ease;
        overflow: visible;
      }

      .slider-item.active {
        opacity: 1;
        transform: scale(1);
      }

      @media (max-width: 768px) {
        .slider-wrapper {
          --slide-width: 100%;
          --slide-gap: 1rem;
        }

        .slider-item {
          flex: 0 0 100%;
          opacity: 1;
          transform: scale(1);
        }

        .slider-track {
          gap: 1rem;
        }

        .slider-container {
          gap: 0.5rem;
        }

        .slider-viewport {
          padding-right: 0;
          margin-right: 0;
        }
      }

      .slider-button {
        flex-shrink: 0;
        background: #0f172a;
        border: 1px solid rgba(2, 6, 23, 0.12);
        border-radius: 50%;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.25s ease;
        color: white;
        box-shadow: 0 8px 20px rgba(2, 6, 23, 0.12);
        position: relative;
        z-index: 100;
      }

      .slider-button:hover:not(:disabled) {
        background: linear-gradient(90deg, #10b981, #06b6d4);
        transform: scale(1.06);
        border-color: transparent;
      }

      .slider-button:disabled {
        opacity: 0.35;
        cursor: not-allowed;
        transform: none;
      }

      @media (max-width: 768px) {
        .slider-button {
          width: 40px;
          height: 40px;
        }

        .slider-button svg {
          width: 18px;
          height: 18px;
        }
      }

      .dots-container {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-top: 2rem;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #e6eef7;
        cursor: pointer;
        transition: all 0.28s ease;
        border: 1px solid rgba(2, 6, 23, 0.04);
      }

      .dot:hover {
        transform: scale(1.1);
      }

      .dot.active {
        background: linear-gradient(90deg, #10b981, #06b6d4);
        width: 36px;
        border-radius: 8px;
        border: none;
      }
    `,
  ],
})
export class ProjectsSliderComponent implements OnInit, OnDestroy {
  @Input() projects: Project[] = [];
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() autoSlide = false;
  @Input() autoSlideInterval = 5000;

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      // Stop at the end instead of looping
      if (this.currentSlide < this.projects.length - 1) {
        this.nextSlide();
      } else {
        // Stop auto-sliding when reaching the end
        this.stopAutoSlide();
      }
    }, this.autoSlideInterval);
  }

  private stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.projects.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = Math.min(Math.max(0, index), Math.max(0, this.projects.length - 1));
    // Restart auto-slide if enabled and not at the end
    if (this.autoSlide && this.currentSlide < this.projects.length - 1) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }
}
