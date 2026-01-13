import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { SectionComponent } from '../../../shared/components/section/section.component';
import { FEATURES_DATA } from '../../../core/data/content.data';
import { Feature } from '../../../core/models/content.models';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, ContainerComponent, ],
  template: `
    <section class="py-20 lg:py-28 bg-white" id="why-choose-us">
      <app-container>
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            {{ content.heading[currentLang()] }}
          </p>
          <h2 class="text-3xl lg:text-4xl font-bold text-adwat-dark-green mb-4">
            {{ content.title[currentLang()] }}
          </h2>
          <p class="text-lg text-adwat-dark-green/70">
            {{ content.description[currentLang()] }}
          </p>
        </div>

        <!-- Vision, Mission, Values Section -->
        <div class="grid md:grid-cols-3 gap-8 lg:gap-16">
          <div *ngFor="let item of visionMissionValues" class="text-center">
            <!-- Floating 3D Cube -->
            <div class="cube-container mx-auto mb-8">
              <div class="cube" [ngClass]="item.cubeStyle">
                <div class="cube-face front"></div>
                <div class="cube-face back"></div>
                <div class="cube-face right"></div>
                <div class="cube-face left"></div>
                <div class="cube-face top"></div>
                <div class="cube-face bottom"></div>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-adwat-dark-green mb-4">
              {{ item.title[currentLang()] }}
            </h3>
            <p class="text-adwat-dark-green/60 leading-relaxed text-sm max-w-xs mx-auto">
              {{ item.description[currentLang()] }}
            </p>
          </div>
        </div>
      </app-container>
    </section>
  `,
  styles: [`
    .cube-container {
      width: 140px;
      height: 140px;
      perspective: 600px;
    }
    
    .cube {
      width: 90px;
      height: 90px;
      position: relative;
      transform-style: preserve-3d;
      margin: 25px auto;
      animation: float 6s ease-in-out infinite;
    }
    
    .cube-face {
      position: absolute;
      width: 90px;
      height: 90px;
      backface-visibility: visible;
    }
    
    /* Light Green Cube - Vision */
    .cube-green .cube-face {
      background: linear-gradient(135deg, rgba(122, 184, 122, 0.25) 0%, rgba(122, 184, 122, 0.15) 100%);
      border: 1px solid rgba(122, 184, 122, 0.4);
      box-shadow: 0 8px 32px rgba(122, 184, 122, 0.15);
    }
    
    .cube-green .cube-face.front { 
      transform: translateZ(45px);
      background: linear-gradient(135deg, rgba(122, 184, 122, 0.35) 0%, rgba(122, 184, 122, 0.2) 100%);
    }
    .cube-green .cube-face.back { transform: rotateY(180deg) translateZ(45px); }
    .cube-green .cube-face.right { transform: rotateY(90deg) translateZ(45px); }
    .cube-green .cube-face.left { transform: rotateY(-90deg) translateZ(45px); }
    .cube-green .cube-face.top { 
      transform: rotateX(90deg) translateZ(45px);
      background: linear-gradient(135deg, rgba(122, 184, 122, 0.4) 0%, rgba(122, 184, 122, 0.25) 100%);
    }
    .cube-green .cube-face.bottom { transform: rotateX(-90deg) translateZ(45px); }
    
    /* Cashmere/Beige Cube - Mission */
    .cube-cashmere .cube-face {
      background: linear-gradient(135deg, rgba(210, 180, 160, 0.3) 0%, rgba(210, 180, 160, 0.15) 100%);
      border: 1px solid rgba(210, 180, 160, 0.5);
      box-shadow: 0 8px 32px rgba(210, 180, 160, 0.15);
    }
    
    .cube-cashmere .cube-face.front { 
      transform: translateZ(45px);
      background: linear-gradient(135deg, rgba(210, 180, 160, 0.4) 0%, rgba(210, 180, 160, 0.2) 100%);
    }
    .cube-cashmere .cube-face.back { transform: rotateY(180deg) translateZ(45px); }
    .cube-cashmere .cube-face.right { transform: rotateY(90deg) translateZ(45px); }
    .cube-cashmere .cube-face.left { transform: rotateY(-90deg) translateZ(45px); }
    .cube-cashmere .cube-face.top { 
      transform: rotateX(90deg) translateZ(45px);
      background: linear-gradient(135deg, rgba(210, 180, 160, 0.45) 0%, rgba(210, 180, 160, 0.25) 100%);
    }
    .cube-cashmere .cube-face.bottom { transform: rotateX(-90deg) translateZ(45px); }
    
    /* Lavender Cube - Values */
    .cube-lavender .cube-face {
      background: linear-gradient(135deg, rgba(180, 160, 210, 0.3) 0%, rgba(180, 160, 210, 0.15) 100%);
      border: 1px solid rgba(180, 160, 210, 0.5);
      box-shadow: 0 8px 32px rgba(180, 160, 210, 0.15);
    }
    
    .cube-lavender .cube-face.front { 
      transform: translateZ(45px);
      background: linear-gradient(135deg, rgba(180, 160, 210, 0.4) 0%, rgba(180, 160, 210, 0.2) 100%);
    }
    .cube-lavender .cube-face.back { transform: rotateY(180deg) translateZ(45px); }
    .cube-lavender .cube-face.right { transform: rotateY(90deg) translateZ(45px); }
    .cube-lavender .cube-face.left { transform: rotateY(-90deg) translateZ(45px); }
    .cube-lavender .cube-face.top { 
      transform: rotateX(90deg) translateZ(45px);
      background: linear-gradient(135deg, rgba(180, 160, 210, 0.45) 0%, rgba(180, 160, 210, 0.25) 100%);
    }
    .cube-lavender .cube-face.bottom { transform: rotateX(-90deg) translateZ(45px); }
    
    @keyframes float {
      0%, 100% { transform: translateY(0) rotateX(-20deg) rotateY(-25deg); }
      50% { transform: translateY(-12px) rotateX(-20deg) rotateY(-25deg); }
    }
    
    /* Stagger animations */
    .cube-green { animation-delay: 0s; }
    .cube-cashmere { animation-delay: 0.3s; }
    .cube-lavender { animation-delay: 0.6s; }
  `]
})
export class WhyChooseUsComponent {
  private translationService = inject(TranslationService);
  currentLang = this.translationService.currentLang;
  features: Feature[] = FEATURES_DATA;

  content = {
    heading: { en: 'Why Choose Adwat', ar: 'لماذا تختار أدوات' },
    title: { en: 'Your Trusted Partner in Digital Excellence', ar: 'شريكك الموثوق في التميز الرقمي' },
    description: { en: 'Proven expertise, enterprise-scale solutions, and unwavering commitment to your success', ar: 'خبرة مثبتة وحلول على نطاق المؤسسات والتزام ثابت بنجاحك' }
  };

  visionMissionValues = [
    {
      title: { en: 'Vision', ar: 'الرؤية' },
      description: { 
        en: 'Become One of KSA\'s Foremost Business Organizations and Harnessing the Power of Satisfied Customers', 
        ar: 'أن نصبح من أبرز المؤسسات التجارية في المملكة العربية السعودية ونستثمر قوة رضا العملاء' 
      },
      cubeStyle: 'cube-green'
    },
    {
      title: { en: 'Mission', ar: 'المهمة' },
      description: { 
        en: 'We develop digital strategies to enhance the efficiency and flexibility of your team, enabling extraordinary outcomes.', 
        ar: 'نطور استراتيجيات رقمية لتعزيز كفاءة ومرونة فريقك، مما يمكّن من تحقيق نتائج استثنائية.' 
      },
      cubeStyle: 'cube-cashmere'
    },
    {
      title: { en: 'Values', ar: 'القيم' },
      description: { 
        en: 'We value innovation, collaboration, and customer satisfaction. Our focus is on creating efficient digital solutions that deliver real results for our clients.', 
        ar: 'نقدّر الابتكار والتعاون ورضا العملاء. تركيزنا على إنشاء حلول رقمية فعالة تحقق نتائج حقيقية لعملائنا.' 
      },
      cubeStyle: 'cube-lavender'
    }
  ];
}
