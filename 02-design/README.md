# 02-Design: Visual References

## Purpose

Store design inspiration, screenshots, mockups, and visual references here.

AI can analyze images. Feed it screenshots to communicate design faster than words.

---

## Step-by-Step Guide

### Step 1: Gather Inspiration

Find apps or websites with the look you want. Good sources:
- **Dribbble** - dribbble.com
- **Framer Templates** - framer.com/templates
- **Mobbin** - mobbin.com (mobile app patterns)
- **Godly** - godly.website
- **Awwwards** - awwwards.com
- **Land-book** - land-book.com (landing pages)

### Step 2: Screenshot What You Like

Take screenshots of:
- Overall layouts you like
- Specific components (navbars, cards, forms)
- Color schemes
- Typography treatments
- Animations or interactions (screen record if needed)

Save them in the `references/` subfolder.

### Step 3: Use Screenshots with AI

When prompting your AI coding tool:

```
"Match this layout" + [attach screenshot]

"Use this exact card design" + [attach screenshot]

"Here's what it looks like now, here's what's wrong, fix it"
+ [attach your current screenshot]
```

### Step 4: Iterate Visually

Many coding tools (like Cursor) have visual previews. Use them to:
- See changes in real-time
- Click on elements to modify them
- Experiment with CSS quickly
- Apply changes directly to code

---

## Folder Structure

```
02-design/
├── README.md (this file)
├── references/
│   ├── layout-inspiration-1.png
│   ├── color-scheme.png
│   ├── navbar-design.png
│   ├── mobile-layout.png
│   └── ...
└── mockups/ (optional)
    ├── wireframe-home.png
    ├── wireframe-dashboard.png
    └── ...
```

---

## File Naming Suggestions

Be descriptive so you remember what each file is:

- `layout-bento-grid-example.png`
- `navbar-glassmorphism-dark.png`
- `color-palette-modern-dark.png`
- `card-design-shadow-hover.png`
- `mobile-menu-slide-in.png`
- `form-validation-states.png`

---

## Design Styles Reference

Quick reference for prompting AI:

| Style | Description | Keywords for AI |
|-------|-------------|-----------------|
| **Glassmorphism** | Frosted glass, blur, transparency | "glassmorphism, backdrop-blur, translucent" |
| **Neobrutalism** | Bold, thick borders, high contrast | "neobrutalist, thick black borders, bold colors" |
| **Neumorphism** | Soft shadows, extruded look | "neumorphic, soft UI, inset shadows" |
| **Bento Grid** | Modular card layout, varying sizes | "bento grid layout, modular cards" |
| **Minimal** | Clean, lots of whitespace | "minimal, clean, whitespace" |
| **Dark Mode** | Dark backgrounds, light text | "dark theme, dark mode" |

---

## Tips

1. **Screenshot > Description** - A picture is worth a thousand words of prompting

2. **Be Specific** - Screenshot just the part you want, not whole pages

3. **Show Current State** - When debugging visuals, show AI what it looks like now

4. **Multiple References** - Show 2-3 examples to help AI understand the pattern

5. **Note What You Like** - Create a `notes.md` file describing why you saved each reference

---

## References

- FRONTEND_GUIDELINES.md - Where design decisions get documented
- APP_FLOW.md - What screens need designing
