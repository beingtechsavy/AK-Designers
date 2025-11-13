# 🚀 Deployment Guide

Your site is ready to deploy! Choose one of these platforms:

---

## ⚡ Option 1: Vercel (Recommended - Easiest)

### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects settings (vercel.json is configured)
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional):
- Go to Project Settings → Domains
- Add your custom domain (e.g., arunkumarlandscapes.com)
- Update DNS records as instructed

---

## 🎨 Option 2: Render

### Steps:
1. **Push to GitHub** (same as above)

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render auto-detects settings (render.yaml is configured)
   - Click "Create Web Service"

3. **Done!** Your site will be live at `your-project.onrender.com`

### Custom Domain (Optional):
- Go to Settings → Custom Domain
- Add your domain and update DNS

---

## 🐳 Option 3: Railway

### Steps:
1. **Push to GitHub** (same as above)

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Node.js
   - Click "Deploy"

3. **Done!** Your site will be live with a Railway URL

---

## 📋 Pre-Deployment Checklist

### ✅ Already Done:
- [x] Build scripts configured
- [x] Production build tested
- [x] Deployment configs created (vercel.json, render.yaml)
- [x] .env.example created
- [x] All pages working
- [x] Responsive design
- [x] Contact information updated

### ⚠️ Optional (Can do after deployment):
- [ ] Replace placeholder images with real photos
- [ ] Update Google Maps embed URL in Contact page
- [ ] Add social media links to footer
- [ ] Set up DATABASE_URL if you want dynamic content
- [ ] Add custom domain

---

## 🔧 Environment Variables

If you want to use the database (optional):

**Add this environment variable in your deployment platform:**
```
DATABASE_URL=your_postgresql_connection_string
```

**Note:** Currently the site works perfectly with static data, so this is optional.

---

## 🌐 After Deployment

### Test Your Site:
1. Visit your deployment URL
2. Check all pages: Home, Portfolio, About, Contact
3. Test navigation and links
4. Test WhatsApp button
5. Test contact form (shows toast message)
6. Test on mobile devices

### Update Content:
- Edit files in `client/src/pages/`
- Push to GitHub
- Platform auto-deploys (usually within 1-2 minutes)

---

## 💡 Quick Commands

### Local Development:
```bash
npm run dev          # Start dev server at http://localhost:5000
```

### Build & Test Production:
```bash
npm run build        # Build for production
npm start            # Test production build locally
```

### Type Checking:
```bash
npm run check        # Check for TypeScript errors
```

---

## 🎉 You're Ready!

Your site is production-ready. Just push to GitHub and deploy on your chosen platform. The whole process takes about 5 minutes!

**Recommended:** Start with Vercel - it's the fastest and easiest option.
