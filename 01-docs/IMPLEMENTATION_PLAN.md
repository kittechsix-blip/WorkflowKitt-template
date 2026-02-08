# Implementation Plan
# Vibe Coding Guide

---

## Overview

**Total Phases:** 6 build phases
**Total Steps:** 23 implementation steps
**Estimated Time:** 2-3 hours

This plan builds the guide incrementally. Complete each step before moving on.

---

## Phase 1: Foundation

### 1.1 Create HTML Shell

**Goal:** Base HTML file with CDN imports and structure

**Create:** `Vibe-Coding-Guide.html`

**Content:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vibe Coding Guide</title>
  <!-- CDN imports here -->
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    // React app here
  </script>
</body>
</html>
```

**Verify:**
- [ ] File opens in browser without errors
- [ ] No console errors

---

### 1.2 Add CDN Imports

**Goal:** Load React, Babel, and Tailwind from CDN

**Add to `<head>`:**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
```

**Verify:**
- [ ] React available (`console.log(React.version)`)
- [ ] Can render JSX component

---

### 1.3 Define Color System

**Goal:** Create colors object per FRONTEND_GUIDELINES.md

**Add to script:**
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

**Verify:**
- [ ] Colors object accessible
- [ ] Test with colored div

---

### 1.4 Create SVG Icon Components

**Goal:** Inline SVG icons as React components

**Icons needed:**
- ChevronDown, ChevronRight
- Copy, Check
- FolderOpen, FileText, Terminal
- Sparkles, Rocket, Package
- ArrowRight, GripVertical, MousePointer
- RefreshCw

**Pattern:**
```javascript
const Icons = {
  Check: ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" ...>
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
  // ... other icons
};
```

**Verify:**
- [ ] Each icon renders
- [ ] Size and color props work

---

## Phase 2: Core Components

### 2.1 Build CopyButton Component

**Goal:** Button that copies text with feedback

**Props:** `text: string`

**Behavior:**
1. Click → navigator.clipboard.writeText(text)
2. Show "Copied!" for 2 seconds
3. Return to "Copy Prompt"

**Styling:** Per FRONTEND_GUIDELINES.md Copy Button spec

**Verify:**
- [ ] Copies text to clipboard
- [ ] Shows feedback state
- [ ] Returns to normal

---

### 2.2 Build DragDropVisual Component

**Goal:** Visual diagram for file operations

**Props:** `from, to, description`

**Elements:**
- Source box (grip icon, dashed border)
- Animated arrow with mouse pointer
- Destination box (folder icon, solid border)
- Description text

**Verify:**
- [ ] Renders diagram
- [ ] Mouse icon pulses
- [ ] Labels display correctly

---

### 2.3 Build ProgressBar Component (if separate)

**Goal:** Reusable progress bar

**Props:** `percent, height`

**Verify:**
- [ ] Fills to correct width
- [ ] Turns green at 100%
- [ ] Animates smoothly

---

## Phase 3: Step & Phase Components

### 3.1 Build Step Component

**Goal:** Expandable step card with all content sections

**Props:**
- number, title, description
- prompt, expectedOutput, whyItMatters
- dragDrop, troubleshooting
- isComplete, onToggle
- isExpanded, onExpand
- mode

**Sections when expanded:**
1. Why this matters (if beginner mode)
2. Description
3. Drag-drop visual (if applicable)
4. Expected output (if applicable)
5. Prompt with copy button (if applicable)
6. Troubleshooting (if applicable)

**Verify:**
- [ ] Expands/collapses on click
- [ ] Checkbox toggles independently
- [ ] All sections render correctly
- [ ] Mode affects visibility

---

### 3.2 Build Phase Component

**Goal:** Collapsible container with steps

**Props:**
- number, title, icon
- steps array
- progress, onStepToggle
- expandedStep, onExpandStep
- mode

**Elements:**
- Header (icon, title, progress count, chevron)
- Progress bar
- Steps list (when expanded)

**Verify:**
- [ ] Expands/collapses
- [ ] Shows correct progress count
- [ ] Progress bar fills correctly
- [ ] Steps render inside

---

## Phase 4: Main App & State

### 4.1 Build Main App Component

**Goal:** Root component with all pieces

**State:**
```javascript
const [progress, setProgress] = useState(() => loadProgress());
const [mode, setMode] = useState(() => loadMode());
const [expandedStep, setExpandedStep] = useState(null);
```

**Sections:**
1. Header (title, toggle, progress, reset)
2. Overall progress bar
3. Phase list (map over phases)
4. Completion celebration (at 100%)
5. Footer

**Verify:**
- [ ] All sections render
- [ ] State updates work
- [ ] Layout looks correct

---

### 4.2 Implement localStorage Persistence

**Goal:** Save/load progress and mode

**Functions:**
- loadProgress, saveProgress
- loadMode, saveMode

**Hook into state:**
```javascript
useEffect(() => {
  saveProgress(progress);
}, [progress]);
```

**Verify:**
- [ ] Progress persists on refresh
- [ ] Mode persists on refresh
- [ ] Works with empty localStorage

---

### 4.3 Implement Mode Toggle

**Goal:** Switch between beginner/advanced

**UI:**
- Toggle switch in header
- Visual indication of current mode

**Behavior:**
- Beginner: full explanations
- Advanced: concise, just prompts

**Verify:**
- [ ] Toggle changes mode
- [ ] Content updates immediately
- [ ] Preference persists

---

### 4.4 Implement Reset Functionality

**Goal:** Clear progress with confirmation

**Behavior:**
1. Click reset button
2. Show confirmation dialog
3. If confirmed, clear progress
4. Return to 0%

**Verify:**
- [ ] Confirmation appears
- [ ] Cancel preserves progress
- [ ] Reset clears everything

---

## Phase 5: Content Population

### 5.1 Write Phase 1 Content (Planning)

**Steps:**
1. Duplicate the Template
2. Interrogate Your Idea
3. Deep Dive Questions
4. Save Your Answers

**Each step needs:**
- title, description
- whyItMatters
- prompt (if applicable)
- expectedOutput
- dragDrop (if applicable)
- troubleshooting (for key steps)

**Verify:**
- [ ] All 4 steps complete
- [ ] Prompts copy correctly
- [ ] Descriptions clear for non-technical

---

### 5.2 Write Phase 2 Content (Documentation)

**Steps:**
1. Open Claude Code
2. Auto-Populate All Docs
3. Validate the Docs

**Verify:**
- [ ] All 3 steps complete
- [ ] Expected outputs described

---

### 5.3 Write Phase 3 Content (Design)

**Steps:**
1. Add Reference Screenshots
2. Review Your Design System

**Verify:**
- [ ] All 2 steps complete
- [ ] Drag-drop visuals work

---

### 5.4 Write Phase 4 Content (Build)

**Steps:**
1. Start Coding
2. Resume Sessions
3. Debug Issues
4. Feature Complete Check

**Verify:**
- [ ] All 4 steps complete
- [ ] Debug troubleshooting included

---

### 5.5 Write Phase 5 Content (Assets)

**Steps:**
1. Add Your Logo
2. Add Icons & Photos
3. Add Custom Fonts

**Verify:**
- [ ] All 3 steps complete
- [ ] Drag-drop visuals for each

---

### 5.6 Write Phase 6 Content (Ship)

**Steps:**
1. Test All User Flows
2. Verify Responsive Design
3. Review Against PRD
4. Deploy!

**Verify:**
- [ ] All 4 steps complete
- [ ] Celebration shows at 100%

---

## Phase 6: Polish & Validate

### 6.1 Add Expected Output Sections

**Goal:** Every prompt step explains what Claude outputs

**Format:**
```
What you'll see:
- Claude will ask you X, Y, Z questions
- Keep answering until it stops asking
- You'll know it worked when [specific indicator]
```

**Verify:**
- [ ] All prompt steps have expected output
- [ ] Plain English, no jargon

---

### 6.2 Add Troubleshooting Sections

**Goal:** Key steps have "Stuck?" support

**Focus on:**
- Step 1.2 (interrogation)
- Step 2.2 (doc population)
- Step 4.1 (start coding)
- Step 4.3 (debugging)

**Include:**
- 2-3 common problems with solutions
- Debug prompt copy button
- "Ask Claude" suggestion

**Verify:**
- [ ] Troubleshooting renders correctly
- [ ] Debug prompts copy

---

### 6.3 Test All Interactions

**Checklist:**
- [ ] All 6 phases expand/collapse
- [ ] All 20 steps expand/collapse
- [ ] All 20 checkboxes toggle
- [ ] All prompts copy to clipboard
- [ ] Progress persists on refresh
- [ ] Mode toggle works and persists
- [ ] Reset clears all progress
- [ ] 100% shows celebration

---

### 6.4 Test Browser Compatibility

**Browsers:**
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

**Check:**
- [ ] No console errors
- [ ] Styling correct
- [ ] Copy works
- [ ] localStorage works

---

### 6.5 Responsive Check

**Widths:**
- [ ] 720px (primary desktop)
- [ ] 1280px (wide desktop)
- [ ] 375px (mobile - basic check)

**Verify:**
- [ ] Readable at all sizes
- [ ] No horizontal scroll
- [ ] Touch targets adequate

---

### 6.6 Final Review Against Docs

**Compare to:**
- [ ] PRD.md - all features present?
- [ ] APP_FLOW.md - all flows work?
- [ ] FRONTEND_GUIDELINES.md - styling matches?
- [ ] BACKEND_STRUCTURE.md - persistence works?

---

## Completion Criteria

The guide is DONE when:

1. ✅ All 6 phases implemented with all steps
2. ✅ All 20 steps have complete content
3. ✅ Progress tracking works and persists
4. ✅ Beginner/Advanced toggle works
5. ✅ All prompts are copyable
6. ✅ Expected outputs documented
7. ✅ Troubleshooting included for key steps
8. ✅ Works in Chrome, Safari, Firefox, Edge
9. ✅ Single HTML file, no external dependencies
10. ✅ Passes all acceptance criteria from PRD.md

---

## Progress Tracking

After each step:
1. Check off verification items
2. Update progress.txt
3. Note any issues
4. Move to next step

**Current Step:** 1.1
**Last Updated:** February 4, 2026

---

## References

- PRD.md - What features to build
- APP_FLOW.md - How features should work
- TECH_STACK.md - What tools to use
- FRONTEND_GUIDELINES.md - How things should look
- BACKEND_STRUCTURE.md - How data should work
