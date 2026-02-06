/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Adwat Brand Colors - Primary Palette
        'adwat-dark-green': '#003729',
        'adwat-teal': '#025B44',
        'adwat-cream': '#FFFDF1',
        
        // Adwat Brand Colors - Secondary Palette
        'adwat-navy': '#0D3B62',
        'adwat-blue': '#176DB5',
        
        // Semantic color mappings for easier usage
        primary: {
          DEFAULT: '#025B44',
          dark: '#003729',
          light: '#176DB5',
        },
        secondary: {
          DEFAULT: '#0D3B62',
          light: '#176DB5',
        },
        accent: {
          DEFAULT: '#FFFDF1',
        }
      },
      fontFamily: {
        // English - Montserrat (Professional, Modern)
        'montserrat': ['Montserrat', 'sans-serif'],
        
        // Arabic - Bahij TheSansArabic (Self-hosted, Premium Arabic Font)
        'arabic': ['Bahij TheSansArabic', 'Noto Sans Arabic', 'sans-serif'],
        
        // Legacy alias (for backward compatibility)
        'ge-ss-two': ['Bahij TheSansArabic', 'Noto Sans Arabic', 'sans-serif'],
        
        // Fallback fonts
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Typography scale following enterprise standards
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Consistent spacing system
        'section': '5rem',      // 80px - Standard section padding
        'section-sm': '3rem',   // 48px - Smaller section padding (mobile)
        'container': '5rem',    // 80px - Container side padding
        'container-sm': '1rem', // 16px - Container side padding (mobile)
      },
      maxWidth: {
        // Container widths
        'container': '1440px',
        'container-lg': '1440px',
        'content': '960px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 55, 41, 0.1), 0 2px 4px -1px rgba(0, 55, 41, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 55, 41, 0.1), 0 4px 6px -2px rgba(0, 55, 41, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
