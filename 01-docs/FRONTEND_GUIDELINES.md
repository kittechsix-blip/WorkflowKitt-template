# Frontend Guidelines
# Vibe Coding Guide

---

## Design Philosophy

**Style:** Clean, minimal, Apple-inspired

**Mood:** Calm, confidence-building, not overwhelming

**Principle:** Every design decision reduces cognitive load and builds trust

---

## Color Palette

### Warm Neutrals (Primary Palette)

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Background | `#FAFAF9` | `--color-bg` | Page background |
| Surface | `#FFFFFF` | `--color-surface` | Cards, panels |
| Surface Hover | `#F5F5F4` | `--color-surface-hover` | Hover states, code blocks |
| Border | `#E7E5E4` | `--color-border` | Card borders, dividers |
| Border Light | `#F5F5F4` | `--color-border-light` | Subtle separators |

### Text Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Text | `#1C1917` | `--color-text` | Primary text, headings |
| Text Muted | `#78716C` | `--color-text-muted` | Secondary text, descriptions |
| Text Light | `#A8A29E` | `--color-text-light` | Tertiary text, labels |

### Accent Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Accent | `#78716C` | `--color-accent` | Icons, progress bar, highlights |
| Accent Hover | `#57534E` | `--color-accent-hover` | Hover state for accent |
| Success | `#16A34A` | `--color-success` | Completed states, checkmarks |
| Success BG | `#F0FDF4` | `--color-success-bg` | Success background tint |

### Color Object (JavaScript)
```javascript
const colors = {
  bg: '#FAFAF9',
  surface: '#FFFFFF',
  surfaceHover: '#F5F5F4',
  border: '#E7E5E4',
  borderLight: '#F5F5F4',
  text: '#1C1917',
  textMuted: '#78716C',
  textLight: '#A8A29E',
  accent: '#78716C',
  accentHover: '#57534E',
  success: '#16A34A',
  successBg: '#F0FDF4',
};
```

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
System fonts for native feel and instant loading.

### Code/Mono Font
```css
font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
```
Used for prompt blocks.

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| 3XL | 32px | 1.2 | 700 | Progress percentage |
| 2XL | 24px | 1.3 | 700 | Page title |
| XL | 20px | 1.4 | 700 | Phase titles |
| LG | 18px | 1.5 | 600 | Step titles |
| Base | 16px | 1.6 | 400 | Body text, descriptions |
| SM | 14px | 1.5 | 400-500 | Secondary text, buttons |
| XS | 12px | 1.4 | 400 | Labels, metadata |
| Code | 13px | 1.5 | 400 | Prompt blocks |

---

## Spacing Scale

Based on 4px increments:

| Token | Value | Usage |
|-------|-------|-------|
| 1 | 4px | Tight gaps, icon margins |
| 2 | 8px | Small padding, list gaps |
| 3 | 12px | Button padding, minor sections |
| 4 | 16px | Card content gap |
| 5 | 20px | Card padding |
| 6 | 24px | Phase card padding, section gaps |
| 8 | 32px | Major section margins |
| 10 | 40px | Page vertical padding |

### Common Patterns
- Phase card padding: 24px
- Step card padding: 20px
- Content gap: 16px
- Button padding: 8px 16px
- Max content width: 720px

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| SM | 4px | Small buttons, tags |
| MD | 8px | Buttons, inputs, code blocks |
| LG | 12px | Step cards |
| XL | 16px | Phase card icons |
| 2XL | 20px | Phase cards, major containers |
| Full | 9999px | Checkboxes (circles), pills |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| SM | `0 1px 3px rgba(0,0,0,0.04)` | Subtle cards (collapsed) |
| LG | `0 4px 20px rgba(0,0,0,0.08)` | Expanded steps |

---

## Component Specifications

### Header (Sticky)
```
Background: bg with 93% opacity + backdrop-blur
Border bottom: 1px solid border-light
Padding: 24px
Max width: 720px centered
```

### Phase Card
```
Background: surface
Border: 1px solid border
Border Radius: 20px
Padding: 24px
Shadow: SM
Icon container: 56x56px, radius 16px, bg surface-hover
```

### Step Card (Collapsed)
```
Background: surface
Border: 1px solid border (success if complete)
Border Radius: 16px
Padding: 20px
Margin bottom: 12px
```

### Step Card (Expanded)
```
Same as collapsed +
Shadow: LG
Content section: padding 8px 20px 20px
Border top on content: 1px solid border-light
```

### Checkbox
```
Size: 32x32px
Border Radius: Full (circle)
Border: 2px solid border
Checked: bg success, border success, white checkmark icon
```

### Copy Button
```
Padding: 8px 16px
Border Radius: 8px
Background: surface-hover
Border: 1px solid border
Font: 14px medium
Copied state: success-bg background, success border & text
```

### Progress Bar
```
Height: 8px (header), 6px (phases)
Border Radius: 4px
Background: border-light
Fill: accent (or success at 100%)
Transition: width 500ms ease
```

### Prompt Block
```
Background: surface-hover
Border: 1px solid border
Border Radius: 8px
Padding: 16px
Font: 13px mono
White-space: pre-wrap
Word-break: break-word
```

### Drag-Drop Visual
```
Container: padding 24px, radius 16px, bg surface-hover
Source box: 64x64px, radius 12px, dashed border
Destination box: 64x64px, radius 12px, solid accent border
Arrow: accent color with pulsing mouse icon
```

---

## Interactive States

### Hover
- Buttons: Slightly darker background
- Cards: No change (use click to expand)

### Active/Focus
- All interactive: 2px outline, offset 2px, accent color
- Buttons: scale 0.98

### Complete
- Checkbox: Green background with white check
- Step card: Success border, success-bg on header
- Progress bar: Accent → Success at 100%

---

## Animations & Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Phase expand | height, opacity | 300ms | ease |
| Step expand | height, opacity | 200ms | ease |
| Progress bar | width | 500ms | ease |
| Checkbox | transform, background | 150ms | ease |
| Copy button | background | 200ms | ease |
| All hovers | background, border | 200ms | ease |

### Pulse Animation (drag indicator)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

---

## Responsive Design

### Breakpoints
| Name | Width | Target |
|------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640-1024px | Tablets |
| Desktop | > 1024px | Primary (side-by-side with Claude Code) |

### Layout
- Max content width: 720px
- Centered with auto margins
- Horizontal padding: 24px
- Steps indent from phases: 24px left margin

### Mobile Adjustments
- Reduce padding to 16px
- Full-width cards
- Smaller typography scale
- Touch targets min 44x44px

---

## Icons (Inline SVG)

All icons rendered as inline SVG for zero dependencies:

| Icon | Usage |
|------|-------|
| Sparkles | Planning phase, page title |
| FileText | Documentation phase |
| Package | Design phase |
| Terminal | Build phase |
| FolderOpen | Assets phase |
| Rocket | Ship phase, completion |
| ChevronDown/Right | Expand/collapse indicators |
| Copy | Copy button |
| Check | Completed checkbox, copied confirmation |
| GripVertical | Drag source indicator |
| MousePointer | Drag animation |
| ArrowRight | Drag direction |
| RefreshCw | Reset button |

---

## Accessibility

- Color contrast: WCAG AA (4.5:1 minimum)
- All interactive elements keyboard accessible
- Focus states visible
- Semantic HTML: main, header, footer, button
- Progress announced via aria labels

---

## Do's and Don'ts

### DO:
- Use the color variables consistently
- Follow the spacing scale (no arbitrary values)
- Keep animations subtle and purposeful
- Test at 720px width (primary use case)
- Use system fonts only

### DON'T:
- Hardcode colors inline
- Use shadows heavier than LG
- Add decorative elements (keep it minimal)
- Use custom fonts (loading time)
- Animate layout-causing properties (stick to opacity, transform)

---

## References

- TECH_STACK.md - Tailwind CDN setup
- APP_FLOW.md - What screens use these styles
- PRD.md - Feature requirements driving design
