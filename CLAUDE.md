# CLAUDE.md - AI Operating Manual
# Vibe Coding Guide Project

This file is read automatically by Claude Code at the start of every session. It defines the rules, constraints, and context for this specific project.

---

## Project Overview

**Project Name:** Vibe Coding Guide

**One-Line Description:** An interactive step-by-step guide that teaches non-technical creators how to build apps using the vibe coding workflow with AI.

**Target User:** Non-technical founders, creators, and makers who want to build apps with AI assistance.

**Core Value Proposition:** Transforms the overwhelming vibe coding process into a calm, clear, step-by-step journey that anyone can follow — and teach to others.

---

## Tech Stack

**Framework:** React 18.2.0 (via CDN)

**Language:** JavaScript with JSX

**Styling:** Tailwind CSS 3.x (via CDN)

**UI Library:** Custom components (no external library)

**Backend/Database:** None (localStorage only)

**Authentication:** None

**Deployment:** Standalone HTML file (no server)

---

## Project Structure

```
vibe-coding-template/
├── Vibe-Coding-Guide.html    # THE DELIVERABLE - standalone guide
├── vibe-coding-guide.jsx     # Source reference (not runnable alone)
├── CLAUDE.md                 # This file - AI reads first
├── progress.txt              # Session tracking
├── PROJECT_CHECKLIST.md      # Overall workflow checklist
├── 00-planning/
│   ├── notes/
│   │   └── interrogation-answers.md  # User requirements
│   └── ...
├── 01-docs/
│   ├── PRD.md               # Product requirements
│   ├── APP_FLOW.md          # User flows
│   ├── TECH_STACK.md        # Technology choices
│   ├── FRONTEND_GUIDELINES.md # Design system
│   ├── BACKEND_STRUCTURE.md # Data persistence
│   └── IMPLEMENTATION_PLAN.md # Build sequence
├── 02-design/
│   └── references/          # Inspiration images
├── 03-code/                  # Empty (code is in HTML file)
└── 04-assets/                # Images, fonts, etc.
```

---

## Coding Rules

### ALWAYS:

- Keep everything in a single HTML file
- Use inline SVG icons (no icon libraries)
- Use Tailwind classes for styling
- Follow the color system in FRONTEND_GUIDELINES.md
- Handle localStorage gracefully (try/catch)
- Write for non-technical users (plain English)
- Update progress.txt after features complete

### NEVER:

- Install npm packages (everything via CDN)
- Create separate CSS/JS files
- Use external APIs
- Hardcode colors (use the colors object)
- Assume technical knowledge in content
- Skip error handling on localStorage

---

## Design System Reference

### Colors (Warm Neutrals)
```javascript
const colors = {
  bg: '#FAFAF9',           // Page background
  surface: '#FFFFFF',       // Cards, panels
  surfaceHover: '#F5F5F4',  // Hover states, code blocks
  border: '#E7E5E4',        // Card borders
  borderLight: '#F5F5F4',   // Subtle separators
  text: '#1C1917',          // Primary text
  textMuted: '#78716C',     // Secondary text
  textLight: '#A8A29E',     // Tertiary text
  accent: '#78716C',        // Icons, progress
  accentHover: '#57534E',   // Hover accent
  success: '#16A34A',       // Complete states
  successBg: '#F0FDF4',     // Success tint
};
```

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

1. **6-Phase Journey:** Planning → Docs → Design → Build → Assets → Ship
2. **20 Steps Total:** Expandable with details, prompts, expected outputs
3. **Progress Tracking:** Checkboxes persist to localStorage
4. **Copy Prompts:** One-click copy with "Copied!" feedback
5. **Beginner/Advanced Toggle:** Adaptive detail levels
6. **Troubleshooting:** Help when stuck on key steps
7. **Drag-Drop Visuals:** Animated file operation diagrams

---

## Component Patterns

### File Naming
- Components are inline in the HTML file
- Use PascalCase for component functions

### Component Template
```jsx
const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);

  return (
    <div style={{ /* inline styles using colors object */ }}>
      {/* JSX */}
    </div>
  );
};
```

---

## Current Session Context

**Last Updated:** February 7, 2026

**Current Phase:** REBUILD - Creating Workflow Kitt V2

**Status:** Specification complete, ready for implementation

**Current Focus:** Building new version with:
- Purple color scheme (high contrast)
- 4-phase structure (15 steps)
- Inline editable prompts
- Complete workflow CLAUDE.md template
- Kittech logo integration

**Spec Location:** `/Users/kittechsix/Desktop/AI Projects/WorkflowKitt-template/REBUILD_SPEC.md`

**Next Steps:**
Build Workflow-Kitt-V2.html following REBUILD_SPEC.md exactly.
Logo file: /Users/kittechsix/Desktop/Automation.png

**Original Guide:** Workflow Kitt.html (functional, being replaced with V2)

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
