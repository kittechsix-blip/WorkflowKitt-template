# Application Flow
# Vibe Coding Guide

---

## Screen Overview

The guide is a **single-page application** with these sections:

```
┌─────────────────────────────────────────────────┐
│  HEADER (sticky)                                │
│  ┌─────────────────────────────────────────────┐│
│  │ ✨ Vibe Coding Guide                        ││
│  │ [Beginner ○──● Advanced]        45%  9/20  ││
│  │ ═══════════════════════════════════════    ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│                                                 │
│  PHASE 1: Planning              ▼   2/4 ✓      │
│  ┌─────────────────────────────────────────┐   │
│  │ ○ 1.1 Duplicate the Template            │   │
│  └─────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────┐   │
│  │ ● 1.2 Interrogate Your Idea    ▼        │   │
│  │ ─────────────────────────────────────   │   │
│  │ Why: This is the most important step... │   │
│  │                                         │   │
│  │ What to do: Open Claude and paste...    │   │
│  │                                         │   │
│  │ ┌─────────────────────────────────────┐ │   │
│  │ │ Prompt:                   [Copy] ✓  │ │   │
│  │ │ Before writing any code...          │ │   │
│  │ └─────────────────────────────────────┘ │   │
│  │                                         │   │
│  │ What you'll see: Claude will ask you... │   │
│  │                                         │   │
│  │ Stuck? [Common problems] [Debug prompt] │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  PHASE 2: Documentation         ▶   0/3        │
│  (collapsed)                                    │
│                                                 │
│  ... phases 3-6 ...                             │
│                                                 │
├─────────────────────────────────────────────────┤
│  🚀 CELEBRATION (shown at 100%)                 │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
│  Built with love for vibe coders everywhere     │
└─────────────────────────────────────────────────┘
```

---

## User Flows

### Flow 1: First-Time User

**Trigger:** User opens Vibe-Coding-Guide.html for the first time

**Steps:**
1. Guide loads with 0% progress, beginner mode active
2. Phase 1 (Planning) is expanded by default
3. User sees Step 1.1 ready to expand
4. User clicks Step 1.1 → expands to show details
5. User reads "Why this matters" explanation
6. User sees drag-drop visual for duplicating folder
7. User completes action in Finder/Explorer (outside guide)
8. User clicks checkbox → step marked complete
9. Progress updates: 1/20 (5%)
10. User continues to Step 1.2

**Decision Points:**
- If user clicks a different step → previous step collapses
- If user clicks phase header → phase collapses/expands

---

### Flow 2: Copying a Prompt

**Trigger:** User is on a step with a prompt and wants to copy it

**Steps:**
1. User clicks "Copy Prompt" button
2. Prompt text copied to clipboard
3. Button changes to "Copied!" with green styling
4. After 2 seconds, button returns to normal
5. User switches to Claude Code
6. User pastes prompt

**On Error:** If clipboard fails, show "Copy failed - select text manually"

---

### Flow 3: Returning User

**Trigger:** User opens guide after previous session

**Steps:**
1. Guide loads, reads progress from localStorage
2. Shows: "45% complete (9/20 steps)"
3. Progress bar filled to 45%
4. Phases show their individual progress
5. User clicks current phase to expand
6. User continues where they left off

**Edge Case:** If localStorage cleared, user starts fresh (0%)

---

### Flow 4: Toggle Beginner/Advanced Mode

**Trigger:** User clicks mode toggle in header

**Steps:**
1. **In Beginner Mode (default):**
   - "Why this matters" sections visible
   - Detailed instructions shown
   - Troubleshooting tips expanded

2. User clicks toggle to "Advanced"
   - Toggle slides to Advanced position
   - "Why" sections hide/collapse
   - Instructions become concise
   - Just prompts and essential info

3. Preference saved to localStorage
4. Persists on next visit

---

### Flow 5: Getting Stuck

**Trigger:** User is on a step and something isn't working

**Steps:**
1. User scrolls to "Stuck?" section at bottom of step
2. Three options presented:
   - **Common Problems:** Expandable list of issues
   - **Debug Prompt:** Copy button for diagnostic prompt
   - **Ask Claude:** Suggestion to describe issue to Claude

3. Option A - Common Problems:
   - User expands list
   - Finds matching issue
   - Follows solution

4. Option B - Debug Prompt:
   - User copies debug prompt
   - Pastes into Claude Code
   - Describes specific issue
   - Claude helps diagnose

5. Option C - Ask Claude:
   - User opens Claude
   - Describes: "I'm on step X.X and..."
   - Gets personalized help

---

### Flow 6: Completing the Guide

**Trigger:** User checks off final step (Step 6.4)

**Steps:**
1. Progress hits 100%
2. Progress bar fills completely (green)
3. Celebration message appears:
   - 🚀 "You did it!"
   - "Your app is ready to ship. Go build something amazing."
4. User can:
   - Reset progress (start fresh)
   - Close guide
   - Share with others

---

### Flow 7: Reset Progress

**Trigger:** User clicks Reset button in header

**Steps:**
1. Confirmation dialog appears:
   - "Reset all progress? This cannot be undone."
   - [Cancel] [Reset]
2. User clicks Reset
3. All checkboxes cleared
4. Progress returns to 0%
5. Phase 1 expands (fresh start)
6. localStorage cleared

**Cancel:** Dialog closes, no changes

---

## State Management

### Progress State
```javascript
{
  "1-0": true,   // Phase 1, Step 0 complete
  "1-1": true,   // Phase 1, Step 1 complete
  "1-2": false,  // Phase 1, Step 2 incomplete
  "2-0": false,  // Phase 2, Step 0 incomplete
  // ... etc for all 20 steps
}
```

### Preferences State
```javascript
{
  "mode": "beginner"  // or "advanced"
}
```

### UI State (not persisted)
```javascript
{
  expandedPhase: 1,      // Which phase is open (1-6)
  expandedStep: "1-2",   // Which step is open
}
```

### localStorage Keys
- `vibe-coding-progress` → Progress state (JSON)
- `vibe-coding-mode` → Mode preference (string)

---

## Error States

| Error | When | User Sees | Recovery |
|-------|------|-----------|----------|
| localStorage unavailable | Private browsing | Works in session, no persist | None needed |
| Clipboard copy fails | Browser restriction | "Copy failed" message | Select manually |
| Corrupted localStorage | Data error | Starts fresh at 0% | Automatic |

---

## Empty States

| State | When | Display |
|-------|------|---------|
| First visit | No progress | 0%, Phase 1 expanded, welcome |
| After reset | Progress cleared | Same as first visit |

---

## Loading States

| Action | Loading Indicator |
|--------|-------------------|
| Initial load | None (instant) |
| Copy to clipboard | Button state change |
| Progress update | Immediate (no delay) |

---

## Transitions & Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Phase expand/collapse | Height + fade | 300ms ease |
| Step expand/collapse | Height + fade | 200ms ease |
| Progress bar fill | Width | 500ms ease |
| Checkbox complete | Scale + check appear | 150ms |
| Copy button feedback | Background color | 200ms |
| Mode toggle slide | Transform | 200ms |
| Drag indicator pulse | Opacity | 2s infinite |

---

## References

- PRD.md - What features drive these flows
- FRONTEND_GUIDELINES.md - How these screens look
- BACKEND_STRUCTURE.md - How data persists
