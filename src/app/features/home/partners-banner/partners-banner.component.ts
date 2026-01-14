import { Component, ElementRef, ViewChild, AfterViewInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PARTNERS_DATA } from '../../../core/data/content.data';
import { Partner } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-partners-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-banner.component.html',
  styleUrls: ['./partners-banner.component.css']
})
export class PartnersBannerComponent implements AfterViewInit, OnDestroy {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;

  partners: Partner[] = PARTNERS_DATA;
  // Triple the partners for seamless infinite scroll
  scrollPartners: Partner[] = [...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA];

  @ViewChild('scrollTrack') scrollTrack!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private animationId: number | null = null;
  private autoScrollSpeed = 0.5;
  private isHovering = false;

  content = {
    trustedBy: {
      en: 'Trusted by leading organizations',
      ar: 'موثوق به من قبل المؤسسات الرائدة'
    }
  };

  ngAfterViewInit() {
    this.setupDragScroll();
    this.startAutoScroll();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private setupDragScroll() {
    const track = this.scrollTrack.nativeElement;

    // Mouse events
    track.addEventListener('mousedown', this.onMouseDown.bind(this));
    track.addEventListener('mousemove', this.onMouseMove.bind(this));
    track.addEventListener('mouseup', this.onMouseUp.bind(this));
    track.addEventListener('mouseleave', this.onMouseLeave.bind(this));

    // Touch events
    track.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: true });
    track.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true });
    track.addEventListener('touchend', this.onTouchEnd.bind(this));

    // Hover events
    track.addEventListener('mouseenter', () => this.isHovering = true);
    track.addEventListener('mouseleave', () => this.isHovering = false);
  }

  private onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.scrollTrack.nativeElement.classList.add('grabbing');
    this.startX = e.pageX - this.scrollTrack.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollTrack.nativeElement.scrollLeft;
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.scrollTrack.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.scrollTrack.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private onMouseUp() {
    this.isDragging = false;
    this.scrollTrack.nativeElement.classList.remove('grabbing');
  }

  private onMouseLeave() {
    this.isDragging = false;
    this.scrollTrack.nativeElement.classList.remove('grabbing');
  }

  private onTouchStart(e: TouchEvent) {
    this.startX = e.touches[0].pageX - this.scrollTrack.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollTrack.nativeElement.scrollLeft;
  }

  private onTouchMove(e: TouchEvent) {
    const x = e.touches[0].pageX - this.scrollTrack.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.scrollTrack.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private onTouchEnd() {
    // Touch ended
  }

  private startAutoScroll() {
    const scroll = () => {
      if (!this.isDragging && !this.isHovering) {
        const track = this.scrollTrack.nativeElement;
        track.scrollLeft += this.autoScrollSpeed;

        // Reset to start when reaching the middle (seamless loop)
        const maxScroll = track.scrollWidth / 3;
        if (track.scrollLeft >= maxScroll * 2) {
          track.scrollLeft = maxScroll;
        }
        if (track.scrollLeft <= 0) {
          track.scrollLeft = maxScroll;
        }
      }
      this.animationId = requestAnimationFrame(scroll);
    };

    this.animationId = requestAnimationFrame(scroll);

    // Initialize scroll position to middle set
    setTimeout(() => {
      const track = this.scrollTrack.nativeElement;
      track.scrollLeft = track.scrollWidth / 3;
    }, 100);
  }
}
