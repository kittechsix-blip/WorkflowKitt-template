# 04-Assets: Project Assets

## Purpose

Store source files, images, fonts, and other assets that will be used in your project.

This is for source files and working copies. Final optimized assets go in `03-code/public/`.

---

## Folder Structure

```
04-assets/
├── README.md (this file)
├── images/
│   ├── logo/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   └── logo-dark.svg
│   ├── icons/
│   └── photos/
├── fonts/
│   └── (custom font files)
├── videos/
│   └── (video assets)
└── exports/
    └── (exported/optimized versions)
```

---

## Asset Guidelines

### Images

**Formats:**
- **SVG** - Logos, icons, illustrations (scalable, small file size)
- **PNG** - Screenshots, images needing transparency
- **JPG** - Photos, complex images without transparency
- **WebP** - Modern format, smaller than PNG/JPG (use with fallback)

**Naming:**
- Lowercase with hyphens: `hero-background.jpg`
- Include size if multiple: `avatar-32.png`, `avatar-64.png`
- Include variant: `logo-dark.svg`, `logo-light.svg`

**Optimization:**
- Compress images before adding to code
- Tools: TinyPNG, ImageOptim, Squoosh
- Consider lazy loading for below-fold images

### Icons

**Recommended:** Use an icon library (Lucide, Heroicons, Phosphor)

If custom icons:
- SVG format
- Consistent size (e.g., 24x24 viewBox)
- Single color (use `currentColor` for flexibility)

### Fonts

**Recommended:** Use Google Fonts or system fonts

If custom fonts:
- Include all needed weights (400, 500, 600, 700)
- Include both `.woff2` (modern) and `.woff` (fallback)
- Define in CSS with proper font-display

### Videos

- MP4 format for best compatibility
- Consider poster image for loading state
- Keep file sizes reasonable (compress with HandBrake)
- Host large videos externally (YouTube, Vimeo, Cloudinary)

---

## Workflow

### Step 1: Collect Assets

Gather all assets you'll need:
- Logo files (get from designer or create)
- Hero images/illustrations
- Product screenshots
- Team photos
- Custom icons

### Step 2: Organize Here

Put source files in appropriate subfolders:
```
04-assets/
├── images/logo/logo-source.ai  # Original Illustrator file
├── images/logo/logo.svg        # Exported SVG
└── images/hero/hero-photo.psd  # Original Photoshop file
```

### Step 3: Optimize

Before using in code, optimize:
1. Export appropriate format
2. Compress (TinyPNG, Squoosh)
3. Resize to needed dimensions
4. Save to `exports/` or directly to `03-code/public/`

### Step 4: Use in Code

Reference from your code's public folder:
```jsx
<img src="/images/logo.svg" alt="Logo" />
```

---

## Asset Checklist

Common assets to gather before building:

### Branding
- [ ] Logo (SVG + PNG)
- [ ] Logo dark variant
- [ ] Favicon (multiple sizes: 16, 32, 180, 192, 512)
- [ ] Open Graph image (1200x630)
- [ ] Brand colors (in FRONTEND_GUIDELINES.md)

### UI
- [ ] Placeholder avatar
- [ ] Empty state illustrations
- [ ] Error state illustrations
- [ ] Loading animations (if custom)

### Content
- [ ] Hero image/illustration
- [ ] Feature images
- [ ] Team photos (if applicable)
- [ ] Testimonial photos (if applicable)

### Technical
- [ ] Custom fonts (if not using Google Fonts)
- [ ] Custom icons (if not using icon library)

---

## Tools

**Image Optimization:**
- TinyPNG - tinypng.com
- Squoosh - squoosh.app
- ImageOptim - imageoptim.com (Mac)

**SVG Optimization:**
- SVGOMG - jakearchibald.github.io/svgomg/
- SVGO - command line tool

**Image Editing:**
- Figma - figma.com (free)
- Canva - canva.com (free tier)
- Photopea - photopea.com (free Photoshop alternative)

**Favicon Generation:**
- RealFaviconGenerator - realfavicongenerator.net
- Favicon.io - favicon.io

---

## References

- FRONTEND_GUIDELINES.md - Brand colors and design system
- 02-design/references/ - Design inspiration
