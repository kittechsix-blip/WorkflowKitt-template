# Product Requirements Document (PRD)
# Vibe Coding Guide

---

## Project Overview

**Project Name:** Vibe Coding Guide

**One-Line Description:** An interactive, step-by-step guide that teaches non-technical creators how to build apps using the vibe coding workflow with AI.

**Problem Statement:** Non-technical creators want to build apps with AI but don't know the workflow, don't understand Claude's output, and can't confidently teach the process to others.

**Target Release:** February 2026

---

## Target Users

### Primary User Persona

**Who:** Non-technical founders, creators, and makers who want to build mobile/web apps with AI assistance. No coding background required.

**Their Problem:** They know AI can help them build apps, but they don't know what steps to take, in what order, or what prompts to use. When Claude outputs code, they don't understand if it's correct.

**Current Solution:** Trial and error with AI, watching tutorials that don't match their specific workflow, asking friends who code.

**Why They'll Switch:** Step-by-step instructions with copy-paste prompts, plain English explanations of what Claude outputs, adaptive detail levels for different experience.

### Secondary Users

People who have learned the workflow and want to teach it to others. They need a shareable resource.

---

## Core Features

### Feature 1: 6-Phase Journey

**Description:** The guide organizes the vibe coding workflow into 6 clear phases: Planning → Documentation → Design → Build → Assets → Ship

**User Story:** As a non-technical creator, I want to see a clear roadmap of phases so I know where I am in the process.

**Acceptance Criteria:**
- [x] All 6 phases visible on main screen
- [x] Each phase shows progress (X/Y steps complete)
- [x] Phases are expandable/collapsible
- [x] Phase 1 expanded by default

**Priority:** Must Have

---

### Feature 2: Expandable Steps with Copy Prompts

**Description:** Each step expands to show detailed instructions and one-click copyable prompts.

**User Story:** As a user, I want to click a step and see exactly what to do, including prompts I can copy directly into Claude.

**Acceptance Criteria:**
- [x] Click step → expands to show details
- [x] Each prompt has a "Copy" button
- [x] Copy shows "Copied!" confirmation for 2 seconds
- [x] Only one step expanded at a time

**Priority:** Must Have

---

### Feature 3: Progress Tracking

**Description:** Checkboxes track completion and persist across sessions.

**User Story:** As a returning user, I want my progress saved so I can pick up where I left off.

**Acceptance Criteria:**
- [x] Each step has a checkbox
- [x] Progress saved to localStorage
- [x] Progress survives browser refresh
- [x] Overall progress shown as percentage in header

**Priority:** Must Have

---

### Feature 4: Expected Output Descriptions

**Description:** Plain English descriptions of what Claude will produce at each step.

**User Story:** As a non-technical user, I want to know what Claude should output so I can verify it worked correctly.

**Acceptance Criteria:**
- [x] Every step with a prompt includes "What you'll see" section
- [x] Descriptions use plain English, no jargon
- [x] Focus on verification (how to know it worked)

**Priority:** Must Have

---

### Feature 5: Beginner/Advanced Toggle

**Description:** Switch between verbose (beginner) and concise (advanced) modes.

**User Story:** As a user, I want to toggle detail levels so beginners get full explanations while experienced users can move faster.

**Acceptance Criteria:**
- [x] Toggle switch in header
- [x] Beginner mode shows "Why this matters" sections
- [x] Advanced mode hides extra explanations
- [x] Preference saved to localStorage

**Priority:** Must Have

---

### Feature 6: "Why" Explanations

**Description:** Reasoning behind each step is always visible.

**User Story:** As someone learning, I want to understand why each step matters so I can internalize the workflow.

**Acceptance Criteria:**
- [x] Every step includes explanation of purpose
- [x] Explanations visible by default (not hidden)
- [x] Written for non-technical audience

**Priority:** Must Have

---

### Feature 7: Troubleshooting Support

**Description:** Help when users get stuck.

**User Story:** As a user who's stuck, I want troubleshooting options so I can get unstuck without starting over.

**Acceptance Criteria:**
- [x] Each key step includes "Stuck?" section
- [x] Shows common problems with solutions
- [x] Links to debug prompt from template
- [x] Suggests "Ask Claude" as fallback

**Priority:** Must Have

---

### Feature 8: Drag-and-Drop Visuals

**Description:** Animated diagrams showing file/folder drag operations.

**User Story:** As a visual learner, I want to see exactly what to drag where.

**Acceptance Criteria:**
- [x] Visual shows source and destination
- [x] Animated arrow between them
- [x] Clear text description below
- [x] Works on steps involving file operations

**Priority:** Nice to Have

---

## Scope

### In Scope (v1)

- 6-phase journey with all steps
- Progress tracking with persistence
- Copy prompt buttons
- Expected output descriptions
- Beginner/Advanced toggle
- Troubleshooting support
- Drag-and-drop visuals
- Warm neutrals Apple-like design
- Desktop-optimized (side-by-side with Claude Code)
- Standalone HTML file (shareable)

### Explicitly Out of Scope

- User accounts or login
- Cloud sync of progress
- Video tutorials embedded in guide
- Direct integration with Claude Code
- Real-time collaboration
- Mobile app version

### Future Considerations (v2+)

- Print-friendly stylesheet
- Additional visual themes
- Community-submitted troubleshooting tips
- Integration with project templates

---

## Success Criteria

### Functional Success
- [x] All Must Have features working
- [x] All acceptance criteria met
- [x] No critical bugs

### User Success
- [ ] Non-technical user can complete Phase 1-2 without external help
- [ ] Users report understanding Claude's output (self-assessed)
- [ ] Guide is shareable as single file

### Technical Success
- [x] Works in Chrome, Safari, Firefox, Edge
- [x] Progress persists across sessions
- [x] Single HTML file, no server required

---

## Constraints & Assumptions

### Constraints
- Single HTML file (no build process)
- No external server or database
- Must work offline after first load
- Warm neutrals color palette (per user preference)

### Assumptions
- Users have Claude Code installed
- Users can open HTML files in a browser
- Users have basic computer literacy (can drag files, use browser)

---

## Open Questions

- [x] Output format? → Interactive HTML/React app
- [x] Detail level? → Adaptive with toggle
- [x] Include screenshots? → No, text and icons only
- [x] Custom phases? → No, keep 6 phases as-is

---

## References

- APP_FLOW.md - How users experience these features
- TECH_STACK.md - What builds these features
- FRONTEND_GUIDELINES.md - How these features look
- BACKEND_STRUCTURE.md - How data for these features works
