import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedCubeComponent } from '../animated-cube/animated-cube.component';

@Component({
  selector: 'app-hero3d',
  standalone: true,
  imports: [CommonModule, AnimatedCubeComponent],
  templateUrl: './hero3d.component.html',
  styleUrl: './hero3d.component.css'
})
export class Hero3dComponent implements OnInit, OnDestroy {
  assemblyProgress = 0;
  private animationId?: number;

  ngOnInit(): void {
    this.startAssemblyAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private startAssemblyAnimation(): void {
    const startTime = Date.now();
    const duration = 3000;
    const delayStart = 800;

    const animate = () => {
      const elapsed = Date.now() - startTime - delayStart;
      
      if (elapsed < 0) {
        this.animationId = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      this.assemblyProgress = progress;

      if (progress < 1) {
        this.animationId = requestAnimationFrame(animate);
      }
    };

    this.animationId = requestAnimationFrame(animate);
  }
}