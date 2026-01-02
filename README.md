# Adwat Information Technology - Corporate Website

Enterprise-grade Angular + Tailwind CSS website for Adwat Information Technology, a leading Saudi software development company.

## 🎯 Project Overview

This is a modern, brandbook-compliant corporate website built with:
- **Angular 18** (latest stable)
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Standalone Components** architecture

## 🏗️ Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── data/          # Data files (services, projects, etc.)
│   │   ├── layout/        # Header, Footer components
│   │   └── models/        # TypeScript interfaces
│   ├── features/
│   │   ├── home/          # Home page components
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── projects/      # Projects page
│   │   └── contact/       # Contact page
│   ├── shared/
│   │   └── components/    # Reusable components (Button, Container, Section)
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── images/
│       ├── logo/          # Company logos
│       ├── about/         # About page images
│       ├── partners/      # Partner logos
│       └── projects/      # Project images
└── styles.css             # Global styles with Tailwind

```

## 🎨 Brand Guidelines

### Colors
- **Primary Dark Green**: `#003729`
- **Primary Teal**: `#025B44`
- **Cream/Off-white**: `#FFFDF1`
- **Navy Blue**: `#0D3B62`
- **Bright Blue**: `#176DB5`

### Typography
- **English**: Montserrat (Google Fonts)
- **Arabic**: GE SS Two / Noto Sans Arabic (fallback)

### Design Principles
- Enterprise-focused, professional tone
- Clean, scalable layouts
- Mobile-first responsive design
- Accessibility compliance

## 📦 Installation

```bash
# Install dependencies
npm install

# Install Tailwind CSS peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind (already configured)
npx tailwindcss init
```

## 🚀 Development

```bash
# Start development server
npm start
# or
ng serve

# The app will be available at http://localhost:4200
```

## 🏭 Build

```bash
# Production build
npm run build
# or
ng build --configuration production

# Output will be in dist/adwat-website
```

## 📂 Key Features

### ✅ Implemented
- Complete brandbook-compliant design system
- Responsive header with mobile menu
- Home page with 8 sections:
  - Hero with CTAs
  - About overview
  - Services showcase
  - Projects portfolio
  - Why Choose Us
  - Client testimonials
  - FAQ section
  - Final CTA
- Footer with contact info (KSA & Egypt offices)
- Multi-language ready (EN/AR structure)
- Data-driven content architecture
- SEO-ready structure
- Routing for all main pages

### 🔜 To Be Added
- Actual logo files (SVG/PNG)
- Project and team images
- Partner logos
- Arabic font files (GE SS Two)
- Full About, Services, Projects page content
- Contact form backend integration
- Google Maps integration for offices
- Blog/News section
- Analytics integration

## 🌐 Routes

- `/` - Home page
- `/about` - About Us
- `/services` - Our Services
- `/projects` - Our Projects
- `/contact` - Contact Us

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Adding New Services
Edit `src/app/core/data/services.data.ts`

### Adding New Projects
Edit `src/app/core/data/projects.data.ts`

### Modifying Brand Colors
Edit `tailwind.config.js` in the `theme.extend.colors` section

### Adding New Routes
Edit `src/app/app.routes.ts`

## 📖 Component Usage

### Button Component
```typescript
<app-button 
  [variant]="'primary'"  // 'primary' | 'secondary'
  [size]="'large'"       // 'normal' | 'large'
  [fullWidth]="true"     // boolean
  routerLink="/contact">
  Contact Us
</app-button>
```

### Container Component
```typescript
<app-container [size]="'default'">  // 'default' | 'large' | 'content'
  <!-- Content here -->
</app-container>
```

### Section Component
```typescript
<app-section 
  [variant]="'light'"    // 'default' | 'dark' | 'light'
  [id]="'services'">
  <!-- Content here -->
</app-section>
```

## 🌍 Internationalization

The project is structured for easy English/Arabic content switching:
- All content uses bilingual objects: `{ en: 'English', ar: 'العربية' }`
- Language toggle in header
- RTL support ready for Arabic

## 🔐 Security & Compliance

- Built with enterprise security best practices
- No hardcoded sensitive data
- Environment-based configuration ready
- HTTPS-ready

## 📧 Contact

**Adwat Information Technology**
- Website: [www.adwat.sa](http://www.adwat.sa)
- Email: info@adwat.sa
- Established: 2000
- Focus: Enterprise Software Solutions for Saudi Arabia

## 📝 License

Proprietary - © 2026 Adwat Information Technology. All rights reserved.

---

**Built with 💚 for Saudi Arabia's Digital Future**
