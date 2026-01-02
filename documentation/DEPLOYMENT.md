# 🚀 DEPLOYMENT GUIDE - Adwat Website

## Pre-Deployment Checklist

### ✅ Before Deploying

1. **Add Real Assets**
   - [ ] Replace logo placeholders with actual Adwat logos
   - [ ] Add partner/client logos
   - [ ] Add project images
   - [ ] Add team/office photos

2. **Content Review**
   - [ ] Review all English content
   - [ ] Add/review Arabic translations
   - [ ] Verify contact information (phone, email, addresses)
   - [ ] Update copyright year if needed

3. **Configuration**
   - [ ] Set up environment variables
   - [ ] Configure analytics (Google Analytics, etc.)
   - [ ] Set up error tracking (Sentry, etc.)
   - [ ] Configure SEO meta tags for each page

4. **Testing**
   - [ ] Test all navigation links
   - [ ] Test mobile responsiveness
   - [ ] Test language switching
   - [ ] Test form submissions
   - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - [ ] Performance testing (Lighthouse score)

5. **Security**
   - [ ] Enable HTTPS
   - [ ] Configure CSP headers
   - [ ] Review CORS settings
   - [ ] Set up rate limiting for forms

## Installation & Build

```bash
# 1. Install dependencies
npm install

# 2. Run development server (test locally)
npm start

# 3. Build for production
npm run build

# Output will be in dist/adwat-website/browser
```

## Deployment Options

### Option 1: Static Hosting (Recommended for Angular)

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist/adwat-website/browser
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/adwat-website/browser/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Option 2: Traditional Web Server

#### Apache (.htaccess)
Create `.htaccess` in the root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx (nginx.conf)
```nginx
server {
    listen 80;
    server_name adwat.sa www.adwat.sa;
    root /var/www/adwat/dist/adwat-website/browser;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## Environment Variables

Create environment files:

### src/environments/environment.ts (development)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  googleAnalyticsId: '',
  recaptchaSiteKey: ''
};
```

### src/environments/environment.prod.ts (production)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.adwat.sa',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  recaptchaSiteKey: 'YOUR_RECAPTCHA_KEY'
};
```

## Post-Deployment

### 1. DNS Configuration
Point your domain to the hosting provider:
```
A Record: @ -> YOUR_SERVER_IP
CNAME: www -> your-domain.com
```

### 2. SSL Certificate
- Use Let's Encrypt (free)
- Or configure through your hosting provider

### 3. Performance Optimization
- Enable CDN
- Configure caching headers
- Minify assets
- Enable Brotli/Gzip compression

### 4. Monitoring
- Set up uptime monitoring
- Configure error alerts
- Enable performance monitoring
- Set up analytics tracking

## Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Server
        # Add your deployment step here
```

## Backup Strategy

1. **Database Backups** (if applicable)
   - Daily automated backups
   - Store off-site

2. **Code Repository**
   - Use Git
   - Tag releases
   - Maintain staging branch

3. **Assets Backup**
   - Regular backup of uploaded files
   - Version control for static assets

## Rollback Plan

If deployment fails:
```bash
# Option 1: Deploy previous version
git checkout <previous-tag>
npm run build
# Deploy as normal

# Option 2: Use hosting provider's rollback feature
netlify rollback
# or
vercel rollback
```

## Support & Maintenance

- Monitor error logs daily
- Update dependencies monthly
- Security patches: immediately
- Performance audits: quarterly
- Content updates: as needed

## Contact for Deployment Support

Technical Team: tech@adwat.sa
DevOps Team: devops@adwat.sa

---

**Last Updated**: January 2026
