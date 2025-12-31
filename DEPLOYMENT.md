# Deploying KPAnalytix to GitHub Pages

## Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `kpanalytix` (must match the `base` in vite.config.js)
3. Keep it **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2: Push Your Code

Open a terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/kpanalytix.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically run and deploy your site

### Step 4: View Your Site

After ~2 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/kpanalytix/
```

---

## Updating Your Site

Just push new commits:
```bash
git add .
git commit -m "Your update message"
git push
```
GitHub Actions will automatically rebuild and deploy.

---

## Custom Domain (Optional)

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `www.kpanalytix.com`)
3. Add DNS records at your domain provider:
   - For apex domain: A records pointing to GitHub's IPs
   - For www: CNAME pointing to `YOUR_USERNAME.github.io`
4. Update `vite.config.js`:
   ```js
   base: '/',  // Change from '/kpanalytix/'
   ```
5. Rebuild and push

---

## Alternative: Vercel (Recommended for Production)

Vercel is easier and supports environment variables securely:

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project" → Import from GitHub
3. Select your repository
4. Add environment variable: `VITE_OPENAI_API_KEY`
5. Click Deploy

Your site will be at: `https://kpanalytix.vercel.app`

For Vercel, remove the `base` line from `vite.config.js`.

---

## Troubleshooting

**404 on page refresh?**
This is normal for SPAs on GitHub Pages. The site handles routing client-side.

**Videos not loading?**
Make sure the video files are committed (they're large, ~22MB total).

**Styles broken?**
Check that the `base` in vite.config.js matches your repo name exactly.
