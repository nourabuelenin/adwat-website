import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedCubeComponent } from '../animated-cube/animated-cube.component';

@Component({
  selector: 'app-hero3d',
  standalone: true,
  imports: [CommonModule, AnimatedCubeComponent],
  templateUrl: './hero3d.component.html',
  styleUrl: './hero3d.component.css',
})
export class Hero3dComponent {}
