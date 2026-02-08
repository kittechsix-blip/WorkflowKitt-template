# Technology Stack
# Vibe Coding Guide

---

## Overview

**Project Type:** Single-page web application (standalone HTML)

**Architecture:** Client-side only, no server

**Distribution:** Single HTML file that opens in any browser

---

## Core Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | Component-based UI |
| ReactDOM | 18.2.0 | DOM rendering |
| Babel Standalone | 7.23.5 | JSX transformation in browser |
| Tailwind CSS | 3.x (CDN) | Utility-first styling |

---

## CDN Sources

All libraries loaded from CDN - no local dependencies:

```html
<!-- React -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>

<!-- Babel (for in-browser JSX) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```

---

## Browser APIs Used

| API | Purpose | Fallback |
|-----|---------|----------|
| localStorage | Persist progress & preferences | In-memory only |
| Clipboard API | Copy prompts | Manual selection |
| CSS Transitions | Smooth animations | Instant changes |

---

## File Structure

```
vibe-coding-template/
├── Vibe-Coding-Guide.html    # The actual guide (standalone, runnable)
├── vibe-coding-guide.jsx     # Source component (reference/development)
├── 00-planning/
│   └── notes/
│       └── interrogation-answers.md
├── 01-docs/
│   ├── PRD.md
│   ├── APP_FLOW.md
│   ├── TECH_STACK.md (this file)
│   ├── FRONTEND_GUIDELINES.md
│   ├── BACKEND_STRUCTURE.md
│   └── IMPLEMENTATION_PLAN.md
└── ...
```

The `.html` file is self-contained with:
- HTML structure
- CSS styles (inline + Tailwind CDN)
- React components (in `<script type="text/babel">`)
- All content data (phases, steps, prompts)
- SVG icons (inline)

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| IE | Any | ❌ Not supported |

---

## Why This Stack?

### Why React?
- Component architecture perfect for nested phases/steps
- useState/useEffect for state management
- Familiar to anyone who wants to customize later

### Why Standalone HTML?
- **Zero friction:** Double-click to open
- **Shareable:** Email the file, it just works
- **No build step:** No npm, no node, no terminal
- **Offline-capable:** Works after first load caches CDN

### Why Babel in Browser?
- Allows JSX syntax without build tooling
- Small performance cost acceptable (loads once)
- Keeps single-file architecture intact

### Why Tailwind via CDN?
- Utility classes co-located with components
- No separate CSS file to manage
- Consistent spacing/sizing system
- No build process needed

---

## Dependencies

### Production (CDN)
```
react@18.2.0
react-dom@18.2.0
babel-standalone@7.23.5
tailwindcss@3.x
```

### Development
None - edit the HTML file directly

---

## Environment Variables

None needed - everything is client-side

---

## Deployment

**Platform:** None (local file)

**Distribution:** Share the HTML file via email, drive, or include in template folder

**Hosting (optional):** Can be hosted on any static host (GitHub Pages, Netlify, Vercel) but not required

---

## Performance Considerations

| Concern | Mitigation |
|---------|------------|
| CDN dependency | Files cached after first load |
| Babel compilation | One-time on page load (~200ms) |
| localStorage limits | Progress data is tiny (~1KB) |
| HTML file size | ~50KB (acceptable for zero-dep distribution) |

---

## Package Management Rules

### NOT APPLICABLE
This project has no package.json or npm dependencies. Everything runs from CDN.

### To Customize:
1. Open `Vibe-Coding-Guide.html` in code editor
2. Edit the `<script type="text/babel">` section
3. Save and refresh browser

### To Update React Version:
Change the CDN URLs in the `<head>` section

---

## Tech Decisions Log

| Decision | Options | Choice | Reasoning |
|----------|---------|--------|-----------|
| Framework | React, Vue, Vanilla | React | Component model, familiar to devs |
| Build | Webpack, Vite, None | None | Simplicity, shareability |
| Styling | CSS, SCSS, Tailwind | Tailwind CDN | No build, utility classes |
| State | Redux, Context, useState | useState | Simple needs, no overhead |
| Icons | Library, CDN, Inline | Inline SVG | No external dependency |

---

## References

- FRONTEND_GUIDELINES.md - How styling is configured
- BACKEND_STRUCTURE.md - How data persistence works
- IMPLEMENTATION_PLAN.md - Build sequence
