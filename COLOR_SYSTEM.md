# Dairy Power Global Color System

## Brand Colors

All pages and components use a consistent **Blue → Cyan → Green** gradient color scheme.

### CSS Variables (in `/src/styles/theme.css`)
```css
--brand-blue: #2563eb     /* Primary blue */
--brand-cyan: #06b6d4     /* Accent cyan */
--brand-green: #10b981    /* Secondary green */
--brand-slate-dark: #0f172a  /* Dark backgrounds */
--brand-slate-blue: #1e3a8a /* Dark blue variant */
```

### Tailwind Color Classes
```
Blue:  blue-50, blue-100, blue-200, blue-400, blue-500, blue-600
Cyan:  cyan-50, cyan-100, cyan-200, cyan-400, cyan-500, cyan-600
Green: green-400, green-500, green-600
```

---

## Global Component Classes (in `/src/styles/components.css`)

### Hero & Backgrounds
- `.hero-gradient` - Blue-cyan-green gradient background
- `.hero-orb-1` / `.hero-orb-2` - Animated background orbs
- `.section-bg-light` - Light gradient (slate-50 → blue-50 → cyan-50)
- `.section-bg-dark` - Dark gradient (slate-900 → blue-900)
- `.rotating-glow` - Animated glow effect for CTA sections

### Cards & Effects
- `.card-glow` - White card with shadow
- `.card-glow-effect` - Blue-cyan-green glow on hover
- `.badge-primary` - White badge with backdrop blur
- `.mission-card` - Blue-cyan gradient card for mission/vision

### Buttons
- `.btn-gradient` - Blue → Cyan gradient button
- `.btn-gradient-secondary` - Cyan → Green gradient button
- `.btn-white-cta` - White button with blue text
- `.btn-border-white` - White border button

### Icons
- `.icon-gradient-blue` - Blue → Cyan icon container
- `.icon-gradient-green` - Cyan → Green icon container

### Misc
- `.cert-badge` - Certification badge (blue-cyan gradient)
- `.product-table-header` - Product card table header
- `.text-gradient` - Gradient text effect
- `.input-focus` - Input focus state (blue border)
- `.wave-divider` - SVG wave divider positioning

---

## Page-Specific Usage

### All Pages
✅ **Hero Section**: Blue-cyan-green gradient with animated orbs
✅ **Buttons**: Blue-cyan gradients
✅ **Icons**: Blue-cyan or cyan-green containers
✅ **Cards**: White with blue-cyan glow on hover
✅ **Borders**: Blue-100, Blue-200
✅ **Shadows**: shadow-blue-500/50, shadow-cyan-500/50

### Home
- Hero gradient: `from-blue-600 via-cyan-500 to-green-500`
- Process cards: Blue-cyan-green gradient hover effect
- CTA section: Dark slate-blue gradient with rotating glow

### Products
- Category filters: Blue-cyan gradient when active
- Product cards: Blue-cyan-green glow effect
- Table headers: Blue-50 → Cyan-50 gradient

### About
- Mission/Vision cards: Blue-cyan gradient backgrounds
- Values grid: Blue-cyan-green hover effects
- Timeline: Blue-cyan gradient progress

### Quality
- Certifications: Blue-cyan icon containers
- Quality measures: Blue-cyan backgrounds
- Safety standards: Blue-cyan badges

### Infrastructure
- Facility cards: Blue-cyan icon containers
- Process flow: Blue-cyan gradient badges

### Contact
- Contact icons: Blue-cyan gradient containers
- Department section: Blue-50 → Cyan-50 background
- Form inputs: Blue-500 focus border
- Submit button: Blue-cyan gradient

---

## Shared Components

### HeroSection (`/src/app/components/HeroSection.tsx`)
- Gradient: Blue-cyan-green
- Badge: White with backdrop blur
- Wave divider: White SVG

### FeatureGrid
- Icon containers: Blue-cyan gradient
- Hover effect: Blue-cyan-green glow

### InteractiveTimeline
- Progress bar: Blue-cyan gradient
- Milestone bubbles: Blue-cyan gradient
- Event cards: Blue-50 → Cyan-50 background

### ProcessFlow
- Step badges: Blue-cyan gradient
- Icon backgrounds: Blue-100 → Cyan-100
- Connecting lines: Blue-cyan gradient

### ProductCard3D
- Hover glow: Blue-cyan-green gradient
- Category badge: Blue gradient
- Table header: Blue-50 → Cyan-50

---

## Navigation & Footer

### Header
- Logo: Blue → Cyan gradient circle
- Active links: Blue-600
- Mobile menu background: Blue-50

### Footer
- Logo: Blue → Cyan gradient circle
- Links: Hover to Blue-600
- Social icons: Blue-100 background, Blue-600 icons

---

## DO NOT USE
❌ Purple colors
❌ Pink colors
❌ Orange colors
❌ Yellow colors
❌ Emerald colors (use green instead)
❌ Indigo/Violet colors

---

## Quick Reference

**Primary Gradient**: `from-blue-600 via-cyan-500 to-green-500`
**Icon Gradient**: `from-blue-500 to-cyan-500`
**Card Hover Glow**: `from-blue-500 via-cyan-500 to-green-500`
**Shadow**: `shadow-blue-500/50`
**Focus Border**: `focus:border-blue-500`
**Light Background**: `from-slate-50 via-blue-50 to-cyan-50`
**Dark Background**: `from-slate-900 via-blue-900 to-slate-900`
