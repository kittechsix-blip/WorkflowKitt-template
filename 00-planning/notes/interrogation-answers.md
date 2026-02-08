# Vibe Coding Guide - Interrogation Answers
**Date:** February 4, 2026
**Interviewer:** Claude
**Interviewee:** kittech

---

## User & Purpose

### Who is the target user?
- **Primary:** Non-technical creators who want to build apps with AI
- **Secondary:** Anyone learning the vibe coding workflow from scratch
- **Tertiary:** People who will be taught by the primary user

### What problem does this solve?
1. **Learning gap:** User doesn't know the vibe coding workflow
2. **Output confusion:** User doesn't understand what Claude produces
3. **Teaching need:** User wants to teach others the process

### Why would they choose this over alternatives?
- Step-by-step instructions (not overwhelming documentation)
- Adaptive detail levels (beginner vs advanced modes)
- Plain English explanations of what Claude outputs
- Shareable format (can send to others to learn from)

---

## Core Functionality

### What is the single most important action?
**Following a step and understanding what happened.**

Each step should:
1. Tell you exactly what to do
2. Give you the prompt to copy
3. Explain what Claude will output
4. Help you verify it worked

### What triggers that action?
- User clicks/opens a phase
- User expands a step
- User copies a prompt and uses it in Claude Code

### What happens immediately after?
- User sees the expected output description
- User can check off the step as complete
- User moves to the next step

### What data is created, modified, or deleted?
- **Created:** Progress state (which steps are complete)
- **Modified:** Checkbox states, expanded/collapsed states
- **Stored:** Progress saves to browser localStorage

---

## User Flows

### What does the user see first?
1. Overall progress indicator (0% to start)
2. Six phases listed vertically
3. Phase 1 expanded by default
4. First step ready to click

### How do they navigate?
- Click phase header → expand/collapse phase
- Click step → expand details, prompt, and expected output
- Click checkbox → mark step complete
- Toggle → switch between beginner/advanced mode

### All possible paths:
1. **Linear:** Phase 1 → Phase 2 → ... → Phase 6 (recommended)
2. **Jump around:** Click any phase to expand it
3. **Resume:** Return later, progress is saved
4. **Reset:** Clear all progress and start over
5. **Share:** Send file/link to someone else

---

## Features & Requirements

### Must Have (MVP)
- [ ] 6 phases with expandable steps
- [ ] Copy prompt buttons (one-click)
- [ ] Progress tracking (checkboxes that persist)
- [ ] Expected output descriptions at each step
- [ ] Beginner/Advanced toggle
- [ ] "Why" explanations always visible
- [ ] Troubleshooting tips when stuck
- [ ] Debug prompt link
- [ ] "Ask Claude" fallback option
- [ ] Warm neutrals, Apple-like design
- [ ] Desktop side-by-side optimized
- [ ] Shareable (standalone HTML file)

### Nice to Have
- [ ] Drag-and-drop visual diagrams
- [ ] Animated transitions
- [ ] Print-friendly version
- [ ] Mobile responsive (secondary priority)

### Out of Scope
- Account system / login
- Cloud sync of progress
- Video tutorials
- Interactive code execution
- Integration with Claude Code directly

---

## Technical Constraints

### Platform
- Must work in modern browsers (Chrome, Safari, Firefox)
- Single HTML file (no server required)
- No installation needed
- Progress stored in localStorage

### Design System
- **Color palette:** Warm neutrals (#F5F5F4, #78716C, etc.)
- **Typography:** System fonts (Apple-like)
- **Spacing:** Generous whitespace, calm feel
- **Radius:** Rounded corners (16px for cards, 8px for buttons)

---

## Success Criteria

1. A non-technical person can follow the guide and complete their first app
2. The guide is clear enough to share with others who can learn independently
3. Users understand what Claude outputs at each step (no confusion)
4. Progress persists between sessions
5. Beginner and advanced users both find it useful (adaptive detail)

---

## Open Questions (Resolved)

| Question | Resolution |
|----------|------------|
| What format? | Interactive HTML/React app |
| What detail level? | Adaptive (toggle) |
| Include screenshots? | No, text and icons only |
| Add custom phases? | No, keep 6 phases as-is |
