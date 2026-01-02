# ⚡ QUICK START GUIDE

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies (2 min)
```bash
cd /home/nour/Desktop/Adwat
npm install
```

### Step 2: Start Development Server (1 min)
```bash
npm start
```
Open browser to: **http://localhost:4200**

### Step 3: View Your Website (2 min)
Navigate through:
- ✅ Home page (all 8 sections)
- ✅ About page
- ✅ Services page
- ✅ Projects page
- ✅ Contact page

---

## 🎨 Quick Customizations

### Change Primary Color
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',  // Change this
  }
}
```

### Add Your Logo
**Location**: `src/assets/images/logo/`
- Replace `adwat-logo.svg`
- Replace `adwat-logo-white.svg`

### Update Services
**File**: `src/app/core/data/services.data.ts`
```typescript
export const SERVICES_DATA: Service[] = [
  {
    id: 'your-service',
    title: { en: 'Your Service', ar: 'خدمتك' },
    description: { en: '...', ar: '...' },
    featured: true
  }
];
```

### Update Contact Info
**File**: `src/app/core/layout/footer/footer.component.ts`
```typescript
contactInfo = {
  ksa: {
    phone: '+966 XX XXX XXXX',  // Update
    email: 'info@adwat.sa'      // Update
  }
}
```

---

## 📱 Test Mobile View

### In Chrome DevTools:
1. Press `F12`
2. Click device icon (or `Ctrl+Shift+M`)
3. Select device: iPhone 12, iPad, etc.
4. Test navigation menu, buttons, layouts

---

## 🌐 Language Switching

### Test Arabic/English:
1. Click language toggle in header
2. Watch content switch direction (RTL/LTR)
3. Language preference saved in browser

---

## 🏗️ Build for Production

```bash
npm run build
```
Output location: `dist/adwat-website/browser/`

---

## 📦 Project Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start dev server |
| `npm run build` | Production build |
| `npm test` | Run tests |
| `npm run lint` | Check code quality |

---

## 🔍 File Locations Cheat Sheet

| What | Where |
|------|-------|
| Colors | `tailwind.config.js` |
| Global styles | `src/styles.css` |
| Services data | `src/app/core/data/services.data.ts` |
| Projects data | `src/app/core/data/projects.data.ts` |
| Home page | `src/app/features/home/` |
| Header | `src/app/core/layout/header/` |
| Footer | `src/app/core/layout/footer/` |
| Routes | `src/app/app.routes.ts` |

---

## ❓ Common Issues

### Port 4200 already in use?
```bash
# Kill process on port 4200
lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4300
```

### Node version issues?
```bash
# Check version (need 18+)
node --version

# Update if needed
nvm install 18
nvm use 18
```

### Tailwind not working?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 Need More Help?

- **Full documentation**: See `README.md`
- **Deployment guide**: See `DEPLOYMENT.md`
- **Project overview**: See `PROJECT_SUMMARY.md`

---

## ✅ Checklist Before Going Live

- [ ] Replace placeholder logo
- [ ] Update all contact information
- [ ] Add real project images
- [ ] Review all English content
- [ ] Add Arabic translations
- [ ] Test on mobile devices
- [ ] Test in multiple browsers
- [ ] Set up analytics
- [ ] Configure domain & SSL

---

**Happy Building! 🚀**
