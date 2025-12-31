# KPAnalytix Website

A modern, bilingual (Arabic/English) React.js website for KPAnalytix - a data analytics and AI solutions company based in Riyadh, Saudi Arabia.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Pages](#pages)
- [Components](#components)
- [Internationalization](#internationalization)
- [Styling](#styling)
- [Customization](#customization)
- [Deployment](#deployment)

---

## Overview

KPAnalytix website is a professional B2B/B2G landing page designed with a minimalist, high-tech aesthetic inspired by UXBERT Labs. The site showcases data analytics and AI solutions services with a focus on government and business clients.

### Design Principles
- **Minimalist & Clean**: Focus on content with subtle animations
- **Professional**: Appropriate for B2B/B2G audience
- **Bilingual**: Full Arabic and English support with RTL
- **Responsive**: Works on all device sizes
- **Accessible**: WCAG-compliant design

---

## Features

### Core Features
- ✅ Bilingual support (English/Arabic) with RTL
- ✅ Responsive design for all devices
- ✅ Smooth page transitions with Framer Motion
- ✅ Scroll-triggered animations
- ✅ FAQ-based chatbot
- ✅ Contact form
- ✅ Fullscreen navigation overlay
- ✅ Sticky header with scroll effects

### Pages
- Home (Hero, About preview, Services preview, Team preview, CTA)
- About Us (Mission, Vision, History, Values)
- Our Experience (Statistics, Highlights, Categories)
- Our Services (Detailed service descriptions with features)
- Our Team (Founder bio, Team members)
- Contact Us (Form + Company information)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| React Router 6 | Navigation |
| i18next | Internationalization |
| Framer Motion | Animations |
| CSS Modules | Scoped styling |
| Vite | Build tool |

---

## Project Structure

```
kpanalytix/
├── public/
│   ├── favicon.svg
│   └── videos/
│       ├── home-bg.mp4
│       └── services-bg.mp4
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.css
│   │   ├── Chatbot/
│   │   │   ├── Chatbot.jsx         # GPT-4o-mini powered
│   │   │   └── Chatbot.module.css
│   │   └── ui/
│   │       ├── Button.jsx
│   │       └── Button.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.module.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.module.css
│   │   ├── Team/
│   │   │   ├── Team.jsx
│   │   │   └── Team.module.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.module.css
│   ├── locales/
│   │   ├── en.json          # English translations
│   │   └── ar.json          # Arabic translations
│   ├── styles/
│   │   ├── variables.css    # CSS custom properties
│   │   └── globals.css      # Global styles
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── i18n.js              # i18n configuration
├── .env.example             # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```bash
   cd kpanalytix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Configuration

### Color Palette

The brand colors are defined in `src/styles/variables.css`:

```css
:root {
  --color-primary: #1c048a;      /* Deep Purple/Blue - Logo color */
  --color-secondary: #7e6fbf;    /* Medium Purple */
  --color-tertiary: #b7aedb;     /* Light Purple */
  --color-background-light: #e5e2f2;  /* Very Light Purple */
}
```

### Fonts

- **English**: Outfit (Google Fonts)
- **Arabic**: IBM Plex Sans Arabic (Google Fonts)

Fonts are loaded in `index.html` and applied based on language direction.

---

## Pages

### Home Page (`/`)
- **Hero Section**: Full-screen with animated title and CTA
- **About Preview**: Company description + statistics grid
- **Services Preview**: 4 featured services with hover effects
- **Team Preview**: Founder card
- **CTA Section**: Contact call-to-action

### About Page (`/about`)
- **Hero Section**: Page title and subtitle
- **Mission & Vision**: Two-card grid layout
- **History Section**: Company story
- **Values Section**: 4 core values

### Experience Page (`/experience`)
- **Hero Section**: Page title
- **Stats Section**: Key numbers (20+ years, 10+ countries, etc.)
- **Highlights Section**: Major achievements
- **Categories Section**: Expertise areas grid

### Services Page (`/services`)
- **Hero Section**: With data tiers visualization
- **Data Solutions**: 7 services
- **Policy Advisory**: 3 services
- **International Benchmarking**: 2 services

Each service card includes:
- Title
- Description
- Feature tags

### Team Page (`/team`)
- **Hero Section**: Page title
- **Founder Section**: Detailed bio, achievements, education
- **Team Members**: Placeholder for additional members

### Contact Page (`/contact`)
- **Hero Section**: Page title
- **Contact Form**: Name, email, phone, company, subject, message
- **Contact Info**: Address, email, phone, CRN, TRN

---

## Components

### Header Component
**Location**: `src/components/Header/`

Features:
- Logo with SVG
- Language toggle (EN/AR)
- Hamburger menu (2-bar → X animation)
- Sticky on scroll with background blur

### Navigation Component
**Location**: `src/components/Navigation/`

Features:
- Full-screen overlay
- Staggered link animations
- Active route highlighting
- Contact info footer
- Keyboard accessible (Escape to close)

### Footer Component
**Location**: `src/components/Footer/`

4 Sections:
1. Company logo + tagline + contact details
2. Quick links
3. Services links
4. Contact CTA button

### Chatbot Component
**Location**: `src/components/Chatbot/`

Features:
- **GPT-4o-mini powered** AI assistant
- Scoped to KPAnalytix information only
- Bilingual responses (English/Arabic)
- Suggestion chips for quick questions
- Typing indicator
- Mobile-responsive

**Setup**:
1. Copy `.env.example` to `.env`
2. Add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```

**Security Note**:
For production, do NOT expose your API key in the frontend. Instead:
- Use a backend proxy (Node.js, Python, etc.)
- Use serverless functions (Vercel Edge Functions, Netlify Functions, AWS Lambda)
- The API key should only be used server-side

### Button Component
**Location**: `src/components/ui/Button.jsx`

Props:
- `variant`: primary | secondary | outline | ghost
- `size`: sm | md | lg
- `to`: Internal link (React Router)
- `href`: External link
- `icon`: SVG icon element
- `iconPosition`: left | right
- `fullWidth`: boolean

---

## Internationalization

### Adding/Editing Translations

**English**: `src/locales/en.json`
**Arabic**: `src/locales/ar.json`

Structure:
```json
{
  "nav": {
    "home": "Home",
    "about": "About Us"
  },
  "hero": {
    "title": "Main Title",
    "subtitle": "Subtitle text"
  }
}
```

### Using Translations in Components

```jsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return <h1>{t('hero.title')}</h1>
}
```

### Language Switching

The language toggle in the Header automatically:
1. Changes the language
2. Updates document direction (RTL/LTR)
3. Saves preference to localStorage

---

## Styling

### CSS Variables

All design tokens are in `src/styles/variables.css`:
- Colors
- Typography
- Spacing
- Borders & Radius
- Shadows
- Transitions
- Z-index layers

### CSS Modules

Each component has its own `.module.css` file for scoped styling:

```jsx
import styles from './Component.module.css'

<div className={styles.container}>
```

### RTL Support

RTL styles are automatically applied when `dir="rtl"`:

```css
[dir="rtl"] .button {
  flex-direction: row-reverse;
}
```

---

## Customization

### Updating Company Information

1. **Contact Details**: Edit the footer in `src/components/Footer/Footer.jsx`
2. **Translations**: Update `src/locales/en.json` and `ar.json`
3. **Placeholders to Replace**:
   - `[Address Line 1]`
   - `[Address Line 2]`
   - `[email@kpanalytix.com]`
   - `[+966 XX XXX XXXX]`
   - `[CRN Number]`
   - `[TRN Number]`

### Adding Team Members

In `src/locales/en.json` and `ar.json`:

```json
"team": {
  "member2": {
    "name": "Team Member Name",
    "role": "Position Title",
    "bio": "Brief biography..."
  }
}
```

### Adding Services

1. Add to `src/locales/en.json` under `services.items`:
```json
"newService": {
  "title": "Service Name",
  "description": "Service description...",
  "features": ["Feature 1", "Feature 2"]
}
```

2. Add the same structure to `ar.json`
3. Reference in the appropriate page component

### Changing Colors

Edit `src/styles/variables.css`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

---

## Deployment

### Build

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Deploy Options

**Vercel** (Recommended):
```bash
npx vercel
```

**Netlify**:
- Connect GitHub repo
- Build command: `npm run build`
- Publish directory: `dist`

**Apache/Nginx**:
- Upload `dist/` contents
- Configure SPA routing (redirect all routes to index.html)

---

## File Reference

| File | Purpose |
|------|---------|
| `src/i18n.js` | Internationalization config |
| `src/App.jsx` | Main app with routing |
| `src/styles/variables.css` | Design tokens |
| `src/styles/globals.css` | Global styles |
| `src/locales/en.json` | English translations |
| `src/locales/ar.json` | Arabic translations |
| `.env.example` | Environment variables template |
| `public/videos/` | Background videos for Home and Services pages |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## License

© 2025 KPAnalytix. All rights reserved.

---

## Support

For technical support or customization requests, contact: [email@kpanalytix.com]
