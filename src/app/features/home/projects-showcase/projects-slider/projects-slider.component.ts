import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../../../../core/models/content.models';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-slider',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.css'],
})
export class ProjectsSliderComponent implements OnInit, OnDestroy {
  @Input() projects: Project[] = [];
  @Input() currentLang: 'en' | 'ar' = 'en';
  @Input() autoSlide = false;
  @Input() autoSlideInterval = 5000;

  currentSlide = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

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
      if (this.currentSlide < this.projects.length - 1) {
        this.nextSlide();
      } else {
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
    if (this.autoSlide && this.currentSlide < this.projects.length - 1) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }
}
