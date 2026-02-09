# CLAUDE.md - AI Operating Manual
# Workflow Kitt V2

This file is read automatically by Claude Code at the start of every session. It defines the rules, constraints, and context for this specific project.

---

## Project Overview

**Project Name:** Workflow Kitt V2

**One-Line Description:** An interactive step-by-step guide that teaches non-technical creators how to build apps using AI (Claude Code), step by step.

**Target User:** Non-technical founders, creators, and makers who want to build apps with AI assistance.

**Core Value Proposition:** Transforms the overwhelming vibe coding process into a calm, clear, step-by-step journey that anyone can follow — and teach to others.

---

## Tech Stack

**Framework:** React 18.2.0 (via CDN)

**Language:** JavaScript (pre-transpiled from JSX via Babel)

**Styling:** Inline styles via React `style` prop + CSS custom properties (`:root` variables)

**UI Library:** Custom components (no external library)

**Backend/Database:** None (localStorage only)

**Authentication:** None

**Deployment:** Standalone HTML file (no server)

---

## Project Structure

```
WorkflowKitt-template/
├── Workflow-Kitt-V2.html     # THE DELIVERABLE - standalone guide
├── Workflow Kitt.html        # V1 (legacy, replaced by V2)
├── index.html                # Redirect to V2
├── vibe-coding-guide.jsx     # Source reference (not runnable alone)
├── WorkflowKitt-Icon.svg     # App icon
├── CLAUDE.md                 # This file - AI reads first
├── REBUILD_SPEC.md           # V2 rebuild specification
├── BUILD_SUMMARY.md          # Build summary
├── progress.txt              # Session tracking
├── PROJECT_CHECKLIST.md      # Overall workflow checklist
├── TROUBLESHOOTING.md        # Common issues
├── README-V2.md              # README for V2
├── 00-planning/              # Planning docs
├── 01-docs/                  # Product docs (PRD, flows, etc.)
├── 02-design/                # Design references
├── 03-code/                  # Empty (code is in HTML file)
└── 04-assets/                # Images, fonts, etc.
```

---

## Coding Rules

### ALWAYS:

- Keep everything in a single HTML file
- Use inline SVG icons (no icon libraries)
- Use the `colors` JS object for inline styles; mirror values in `:root` CSS custom properties
- Use CSS classes for hover/focus/active states (not JS onMouseEnter/onMouseLeave)
- Use ARIA attributes (`role`, `tabIndex`, `aria-expanded`) on interactive non-button elements
- Handle localStorage gracefully (try/catch)
- Write for non-technical users (plain English)
- Use stable unique IDs (not array indices) as React keys for dynamic lists
- Update progress.txt after features complete

### NEVER:

- Install npm packages (everything via CDN)
- Create separate CSS/JS files
- Use external APIs
- Hardcode colors (use the colors object and CSS custom properties)
- Assume technical knowledge in content
- Skip error handling on localStorage
- Use JS event handlers for hover states (use CSS hover classes instead)

---

## Design System Reference

### Colors (Purple Palette)
```javascript
const colors = {
  bg: '#FEFDFB',           // Page background
  surface: '#FFFFFF',       // Cards, panels
  surfaceHover: '#F8F7FF',  // Hover states
  border: '#E0D9F0',        // Card borders
  borderLight: '#F0EDF7',   // Subtle separators
  text: '#1A0F2E',          // Primary text
  textMuted: '#5B4A75',     // Secondary text
  textLight: '#8B7BA8',     // Tertiary text
  accent: '#7B5FCC',        // Primary purple
  accentHover: '#9D7FEA',   // Hover purple
  accentDark: '#5B3FA8',    // Dark purple (gradients)
  success: '#059669',       // Complete states
  successBg: '#D1FAE5',     // Success tint
  warning: '#D97706',       // Warning states
  warningBg: '#FEF3C7',     // Warning tint
  error: '#DC2626',         // Error/danger states
  errorBg: '#FEE2E2',       // Error tint
  codeBg: '#F5F3F7',        // Code block background
  divider: '#E9E4F0',       // Section dividers
};
```

These values are also available as CSS custom properties (`:root` vars) for use in hover/focus styles.

### Spacing Scale
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
```

### Border Radius
```
SM: 4px   (tags)
MD: 8px   (buttons, code blocks)
LG: 12px  (step cards)
XL: 16px  (icons)
2XL: 20px (phase cards)
Full: 9999px (checkboxes)
```

### Typography
```
Font: System fonts (-apple-system, BlinkMacSystemFont, ...)
Mono: SF Mono, Fira Code, Consolas
```

---

## Key Features

1. **4-Phase Journey:** Planning (4 steps) → Build (5 steps) → Polish (4 steps) → Ship (2 steps)
2. **15 Steps Total:** 12 sequential + 3 toolkit (use-when-needed). Expandable with details, prompts, expected outputs
3. **Editable Prompts:** `{{field}}` template system lets users fill in project-specific details before copying
4. **Progress Tracking:** Checkboxes persist to localStorage. Toolkit steps excluded from progress percentage
5. **Copy Prompts:** One-click copy with "Copied!" feedback
6. **Quick Copy Drawer:** Floating action button opens slide-out panel with all prompts for quick access
7. **Template ZIP Download:** Generates a project folder with CLAUDE.md, docs, and folder structure
8. **Favorites:** Star any prompt to save it to a dedicated section
9. **My Projects:** CRUD interface to track multiple projects with status and notes
10. **Learning Stories:** Store and review learning documents from completed projects
11. **Troubleshooting:** Issue/solution pairs for steps where users commonly get stuck
12. **Drag-Drop Visuals:** Animated file operation diagrams

---

## Component Patterns

### File Naming
- Components are inline in the HTML file (pre-transpiled from JSX)
- Use PascalCase for component functions

### Component Hierarchy
```
WorkflowKitt (root)
  ├── Header (inline)
  ├── Download Template Button
  ├── PhaseSection (x4)
  │     └── StepCard (variable per phase)
  │           ├── EditablePrompt
  │           └── DragDropVisual
  ├── FavoritesSection
  ├── ProjectsSection
  ├── LearningStoriesSection
  ├── QuickCopyDrawer (floating)
  └── Footer (inline)
```

### Hover/Interactive States
Use CSS classes defined in the `<style>` block rather than JS event handlers:
- `.btn-copy` / `.btn-copy.copied` — prompt copy buttons
- `.btn-fab` — floating action button
- `.btn-drawer-item` — quick copy drawer items
- `.btn-clear` — clear data button
- `.btn-download` — download template button

---

## Current Session Context

**Last Updated:** February 9, 2026

**Current Phase:** V2 COMPLETE — Iterating and polishing

**Status:** Workflow Kitt V2 is fully built and deployed. Ongoing quality improvements.

**Recent Changes:**
- Fixed hardcoded personal name in learning story prompt (now uses editable field)
- Quick Copy Drawer no longer copies raw placeholders
- Progress bars exclude toolkit steps (users can reach 100%)
- Full keyboard accessibility (ARIA attributes, tabIndex, keyboard handlers)
- CSS custom properties + hover classes replace all JS hover handlers
- Stable unique IDs for Projects and Learning Stories (no array index keys)
- Responsive drawer width via CSS
- Pre-transpiled JSX (removed Babel standalone runtime dependency)
- Extracted shared styles to module level
- Dead imports cleaned up

**Original Guide:** Workflow Kitt.html (V1, replaced by V2)

---

## Documentation References

Before making decisions, check these files:

1. `01-docs/PRD.md` - Features and requirements
2. `01-docs/APP_FLOW.md` - User flows and navigation
3. `01-docs/TECH_STACK.md` - Approved packages and versions
4. `01-docs/FRONTEND_GUIDELINES.md` - Design system
5. `01-docs/BACKEND_STRUCTURE.md` - localStorage persistence
6. `01-docs/IMPLEMENTATION_PLAN.md` - Build sequence
7. `progress.txt` - What's been done and what's next

---

## 🎓 LEARNING STORY (Required at Project Completion)

**IMPORTANT: When the project is complete, Claude MUST prompt the user:**

"Congratulations! Your project is complete! 🎉

Would you like me to create your Learning Story? This is a simple, story-like explanation of everything we built together, written so you can learn from it and remember how it all works.

I'll create a file called `LEARNING_STORY.md` that explains:
- The journey from idea to finished app
- What each part does (in plain English)
- Why we made the choices we did
- The technical concepts you learned (simplified)

This file is designed to help you learn and grow as a builder. Want me to create it?"

### Learning Story Format

When creating `LEARNING_STORY.md`, follow this structure:

```markdown
# 📖 The Story of [PROJECT NAME]

## Chapter 1: The Problem
[What problem did we set out to solve? Who has this problem? Why does it matter?]

## Chapter 2: The Plan
[How did we decide to solve it? What approach did we take and why?]

## Chapter 3: The Building Blocks
[List each major piece of the app with a simple explanation]

### 🧱 [Component/Feature Name]
**What it does:** [Plain English explanation]
**Why we built it this way:** [Simple reasoning]
**The technical bit:** [One paragraph explaining the code concept in beginner-friendly terms]

## Chapter 4: How It All Connects
[Explain how the pieces work together, like telling a story of data flowing through the app]

## Chapter 5: What You Learned
[List the technical concepts introduced, each with a 2-3 sentence beginner explanation]

- **[Concept 1]:** [Simple explanation]
- **[Concept 2]:** [Simple explanation]

## Chapter 6: If You Wanted to Change It
[Explain where you'd look to make common changes - helps reinforce understanding]

## The End... Or Just the Beginning?
[Encouraging note about what they could build next or how to extend this project]
```

### Writing Guidelines for Learning Stories:
- Write like you're explaining to a curious friend, not a developer
- Use analogies (e.g., "Think of state like a whiteboard the app can write on")
- Avoid jargon, or explain it immediately when used
- Be encouraging and celebrate what was built
- Keep paragraphs short (3-4 sentences max)
- Use emojis sparingly to make it friendly
