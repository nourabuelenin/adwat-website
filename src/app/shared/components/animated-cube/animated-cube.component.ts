import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Input,
  NgZone,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface LayerConfig {
  position: THREE.Vector3;
  targetPosition: THREE.Vector3;
  rotation: THREE.Euler;
  color: string;
  targetColor: string;
  opacity: number;
  targetOpacity: number;
}

@Component({
  selector: 'app-animated-cube',
  imports: [CommonModule],
  templateUrl: './animated-cube.component.html',
  styleUrls: ['./animated-cube.component.css'],
})
export class AnimatedCubeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef<HTMLDivElement>;
  @Input() disassembleOnHover: boolean = true;
  @Input() startDelay: number = 800; // Delay before assembly starts

  private assemblyProgress: number = 0;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private cubeGroup!: THREE.Group;
  private layers: { mesh: THREE.Mesh; config: LayerConfig }[] = [];
  private animationId: number = 0;

  // Hover state management
  private isHovered: boolean = false;
  private currentProgress: number = 0;
  private targetProgress: number = 1;

  constructor(private ngZone: NgZone) {}

  // Colors matching the logo exactly
  private readonly colors = {
    greenDark: '#7ab87a',
    greenLight: '#b8d4b8',
    purpleDark: '#5c5c9e',
    purpleLight: '#8888bb',
    magentaDark: '#c77eb3',
    magentaLight: '#dda8cc',
    pinkLight: '#e8c5dd',
    pinkLighter: '#f0dde9',
    whiteGreenHint: '#f8fcf8',
    whitePurpleHint: '#f8f8fc',
    whiteMagentaHint: '#fcf8fb',
    whiteCore: '#fafafa',
  };

  ngAfterViewInit(): void {
    this.initScene();
    this.createCube();

    // Start assembly animation
    this.startAssemblyAnimation();

    this.animate();

    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // Add hover listeners to the canvas container
    this.canvasContainer.nativeElement.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.canvasContainer.nativeElement.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
    if (this.canvasContainer?.nativeElement) {
      this.canvasContainer.nativeElement.removeEventListener(
        'mouseenter',
        this.onMouseEnter.bind(this),
      );
      this.canvasContainer.nativeElement.removeEventListener(
        'mouseleave',
        this.onMouseLeave.bind(this),
      );
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    // Dispose resources
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.controls) {
      this.controls.dispose();
    }

    // Dispose scene objects
    this.layers.forEach(({ mesh }) => {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    });
    this.layers = [];

    if (this.scene) {
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      this.scene.clear();
    }
  }

  private onMouseEnter(): void {
    if (this.disassembleOnHover) {
      this.isHovered = true;
      this.targetProgress = 0; // Disassemble
    }
  }

  private onMouseLeave(): void {
    if (this.disassembleOnHover) {
      this.isHovered = false;
      this.targetProgress = 1; // Reassemble
    }
  }

  private initScene(): void {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.canvasContainer.nativeElement.clientWidth /
        this.canvasContainer.nativeElement.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(0, 0, 9);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(
      this.canvasContainer.nativeElement.clientWidth,
      this.canvasContainer.nativeElement.clientHeight,
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.position.set(5, 5, 5);
    this.scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, -5, -5);
    this.scene.add(directionalLight2);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.autoRotate = false;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.maxPolarAngle = Math.PI / 1.5;

    // Cube Group
    this.cubeGroup = new THREE.Group();
    this.cubeGroup.rotation.set(0.4, -0.6, 0);
    this.scene.add(this.cubeGroup);
  }

  private createCube(): void {
    const layerConfigs: LayerConfig[] = [
      // Top layers (green)
      {
        position: new THREE.Vector3(1.2, 2.8, -1.2),
        targetPosition: new THREE.Vector3(0, 0.91, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        color: this.colors.greenLight,
        targetColor: this.colors.whiteGreenHint,
        opacity: 0.35,
        targetOpacity: 0.9,
      },
      {
        position: new THREE.Vector3(0.6, 2.0, -0.6),
        targetPosition: new THREE.Vector3(0, 0.92, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        color: this.colors.greenDark,
        targetColor: this.colors.whiteGreenHint,
        opacity: 0.55,
        targetOpacity: 0.95,
      },
      // Left side layers (purple)
      {
        position: new THREE.Vector3(-2.4, 0.4, 0.4),
        targetPosition: new THREE.Vector3(-0.91, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
        color: this.colors.purpleLight,
        targetColor: this.colors.whitePurpleHint,
        opacity: 0.4,
        targetOpacity: 0.9,
      },
      {
        position: new THREE.Vector3(-1.6, 0.2, 0.2),
        targetPosition: new THREE.Vector3(-0.92, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
        color: this.colors.purpleDark,
        targetColor: this.colors.whitePurpleHint,
        opacity: 0.7,
        targetOpacity: 0.98,
      },
      // Core front face
      {
        position: new THREE.Vector3(0, 0, 0.92),
        targetPosition: new THREE.Vector3(0, 0, 0.92),
        rotation: new THREE.Euler(0, 0, 0),
        color: '#4a4a8a',
        targetColor: this.colors.whiteCore,
        opacity: 0.85,
        targetOpacity: 0.98,
      },
      // Core back face
      {
        position: new THREE.Vector3(0, 0, -0.92),
        targetPosition: new THREE.Vector3(0, 0, -0.92),
        rotation: new THREE.Euler(0, 0, 0),
        color: '#4a4a8a',
        targetColor: this.colors.whiteCore,
        opacity: 0.85,
        targetOpacity: 0.98,
      },
      // Right side layers (magenta)
      {
        position: new THREE.Vector3(1.6, -0.2, 0.4),
        targetPosition: new THREE.Vector3(0.91, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
        color: this.colors.magentaDark,
        targetColor: this.colors.whiteMagentaHint,
        opacity: 0.55,
        targetOpacity: 0.95,
      },
      {
        position: new THREE.Vector3(2.4, -0.4, 0.8),
        targetPosition: new THREE.Vector3(0.92, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
        color: this.colors.magentaLight,
        targetColor: this.colors.whiteMagentaHint,
        opacity: 0.35,
        targetOpacity: 0.9,
      },
      // Bottom layers (pink)
      {
        position: new THREE.Vector3(-0.6, -2.0, 0.6),
        targetPosition: new THREE.Vector3(0, -0.91, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        color: this.colors.pinkLight,
        targetColor: this.colors.whiteMagentaHint,
        opacity: 0.45,
        targetOpacity: 0.92,
      },
      {
        position: new THREE.Vector3(-1.2, -2.8, 1.2),
        targetPosition: new THREE.Vector3(0, -0.92, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
        color: this.colors.pinkLighter,
        targetColor: this.colors.whiteMagentaHint,
        opacity: 0.28,
        targetOpacity: 0.88,
      },
    ];

    layerConfigs.forEach((config) => {
      const geometry = new THREE.BoxGeometry(1.8, 1.8, 0.06);
      const material = new THREE.MeshPhysicalMaterial({
        color: config.color,
        transparent: true,
        opacity: config.opacity,
        roughness: 0.15,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(config.position);
      mesh.rotation.copy(config.rotation);

      this.cubeGroup.add(mesh);
      this.layers.push({ mesh, config });
    });
  }

  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private lerpColor(color1: string, color2: string, t: number): THREE.Color {
    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);
    return c1.lerp(c2, t);
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.animationId = requestAnimationFrame(loop);

        // Smoothly interpolate current progress towards target
        if (this.disassembleOnHover) {
          const lerpSpeed = 0.04; // Adjust for faster/slower transition
          this.currentProgress += (this.targetProgress - this.currentProgress) * lerpSpeed;

          // Update cube assembly based on current progress
          if (this.layers.length > 0) {
            this.updateCubeAssemblyWithProgress(this.currentProgress);
          }
        }

        // Slow rotation after assembly
        const rotationSpeed = this.currentProgress >= 0.9 ? 0.004 : 0.002;
        this.cubeGroup.rotation.y += rotationSpeed;
        this.cubeGroup.rotation.x = 0.4 + Math.sin(Date.now() * 0.0003) * 0.05;

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };

      loop();
    });
  }

  private startAssemblyAnimation(): void {
    const startTime = Date.now();
    const duration = 3000;

    this.ngZone.runOutsideAngular(() => {
      const animateAssembly = () => {
        const elapsed = Date.now() - startTime - this.startDelay;

        if (elapsed < 0) {
          requestAnimationFrame(animateAssembly);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        this.assemblyProgress = progress;

        // If not being hovered (which overrides progress), update the target
        if (!this.isHovered) {
          this.targetProgress = progress;
        }

        if (progress < 1) {
          requestAnimationFrame(animateAssembly);
        }
      };
      requestAnimationFrame(animateAssembly);
    });
  }

  private updateCubeAssemblyWithProgress(progress: number): void {
    const eased = this.easeInOutCubic(progress);

    this.layers.forEach(({ mesh, config }) => {
      // Interpolate position
      mesh.position.lerpVectors(config.position, config.targetPosition, eased);

      // Interpolate color and opacity
      const material = mesh.material as THREE.MeshPhysicalMaterial;
      material.color = this.lerpColor(config.color, config.targetColor, eased);
      material.opacity = config.opacity + (config.targetOpacity - config.opacity) * eased;
    });
  }

  private onWindowResize(): void {
    if (!this.canvasContainer) return;

    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
