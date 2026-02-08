# Backend Structure
# Vibe Coding Guide

---

## Overview

**Architecture:** Client-side only (no backend server)

**Storage:** Browser localStorage

**Data Model:** Simple key-value persistence

The Vibe Coding Guide has no traditional backend. All data lives in the browser.

---

## Data Model

### Progress Data

Tracks which steps the user has completed.

```typescript
type ProgressState = {
  [stepKey: string]: boolean;
}

// Step key format: "{phaseNumber}-{stepIndex}"
// Phase numbers: 1-6
// Step indices: 0-based within each phase

// Example:
{
  "1-0": true,   // Phase 1, Step 1 (Duplicate Template) - complete
  "1-1": true,   // Phase 1, Step 2 (Interrogate Idea) - complete
  "1-2": false,  // Phase 1, Step 3 (Deep Dive) - incomplete
  "1-3": false,  // Phase 1, Step 4 (Save Answers) - incomplete
  "2-0": false,  // Phase 2, Step 1 - incomplete
  "2-1": false,  // Phase 2, Step 2 - incomplete
  "2-2": false,  // Phase 2, Step 3 - incomplete
  // ... continues for all 20 steps
}
```

### Mode Preference

Tracks beginner vs advanced mode selection.

```typescript
type ModePreference = "beginner" | "advanced";

// Stored as plain string
"beginner"
```

---

## Storage Schema

### localStorage Keys

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `vibe-coding-progress` | JSON string | `{}` | Progress state object |
| `vibe-coding-mode` | string | `"beginner"` | Mode preference |

### Storage Size

| Data | Approximate Size |
|------|-----------------|
| Progress (all 20 steps) | ~200 bytes |
| Mode preference | ~10 bytes |
| **Total** | **< 1KB** |

localStorage limit is ~5MB, so no risk of hitting limits.

---

## Data Operations

### Load Progress
```javascript
function loadProgress() {
  try {
    const saved = localStorage.getItem('vibe-coding-progress');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {}; // Fallback to empty on parse error
  }
}
```

### Save Progress
```javascript
function saveProgress(progress) {
  try {
    localStorage.setItem('vibe-coding-progress', JSON.stringify(progress));
  } catch {
    // localStorage unavailable - fail silently
    // Progress works in-session but won't persist
  }
}
```

### Toggle Step Completion
```javascript
function toggleStep(stepKey, currentProgress) {
  const newProgress = {
    ...currentProgress,
    [stepKey]: !currentProgress[stepKey]
  };
  saveProgress(newProgress);
  return newProgress;
}
```

### Reset All Progress
```javascript
function resetProgress() {
  localStorage.removeItem('vibe-coding-progress');
  return {};
}
```

### Load Mode
```javascript
function loadMode() {
  try {
    return localStorage.getItem('vibe-coding-mode') || 'beginner';
  } catch {
    return 'beginner';
  }
}
```

### Save Mode
```javascript
function saveMode(mode) {
  try {
    localStorage.setItem('vibe-coding-mode', mode);
  } catch {
    // fail silently
  }
}
```

---

## Computed Values

### Overall Progress
```javascript
const totalSteps = phases.reduce((acc, p) => acc + p.steps.length, 0);
// totalSteps = 20

const completedSteps = Object.values(progress).filter(Boolean).length;
// completedSteps = number of true values

const overallPercent = Math.round((completedSteps / totalSteps) * 100);
// overallPercent = 0-100
```

### Phase Progress
```javascript
function getPhaseProgress(phaseNumber, progress) {
  const phase = phases.find(p => p.number === phaseNumber);
  const completed = phase.steps.filter((_, i) =>
    progress[`${phaseNumber}-${i}`]
  ).length;

  return {
    completed,
    total: phase.steps.length,
    percent: Math.round((completed / phase.steps.length) * 100)
  };
}
```

---

## Content Data Structure

All content is hardcoded in the application (no API).

### Phase Structure
```typescript
interface Phase {
  number: number;        // 1-6
  title: string;         // "Planning"
  icon: string;          // Icon component name
  steps: Step[];         // Array of steps
}
```

### Step Structure
```typescript
interface Step {
  title: string;              // "Duplicate the Template"
  description: string;        // Full description text
  whyItMatters?: string;      // Explanation (beginner mode)
  prompt?: string;            // Copyable prompt text
  expectedOutput?: string;    // What user should see
  dragDrop?: {
    from: string;             // Source label
    to: string;               // Destination label
    description: string;      // Action description
  };
  troubleshooting?: {
    commonProblems: Array<{
      issue: string;
      solution: string;
    }>;
    debugPrompt?: string;
  };
}
```

### Step Count by Phase

| Phase | Steps | Step Keys |
|-------|-------|-----------|
| 1. Planning | 4 | 1-0, 1-1, 1-2, 1-3 |
| 2. Documentation | 3 | 2-0, 2-1, 2-2 |
| 3. Design | 2 | 3-0, 3-1 |
| 4. Build | 4 | 4-0, 4-1, 4-2, 4-3 |
| 5. Assets | 3 | 5-0, 5-1, 5-2 |
| 6. Ship | 4 | 6-0, 6-1, 6-2, 6-3 |
| **Total** | **20** | |

---

## Error Handling

### localStorage Unavailable

Some browsers (private mode, certain settings) disable localStorage.

**Detection:**
```javascript
function isLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch {
    return false;
  }
}
```

**Behavior:**
- App still functions fully
- Progress works during session
- Progress lost on page close
- No error shown to user (graceful degradation)

### Corrupted Data

If localStorage contains invalid JSON:

**Behavior:**
- Parse error caught in try/catch
- Return empty object `{}`
- User starts fresh
- Old corrupted data overwritten on first save

### Browser Quota Exceeded

Extremely unlikely given ~1KB storage needs.

**Behavior:**
- Save operation fails silently
- Previous progress retained
- Current session works normally

---

## Security Considerations

| Concern | Status |
|---------|--------|
| XSS via stored data | Safe - only boolean values stored |
| Data leakage | None - data never leaves browser |
| Cross-origin access | Protected by same-origin policy |
| Sensitive data | None - just checkboxes |
| Third-party access | None - no external services |

---

## React State Integration

```javascript
// In main component
const [progress, setProgress] = useState(() => loadProgress());
const [mode, setMode] = useState(() => loadMode());

// Auto-save progress changes
useEffect(() => {
  saveProgress(progress);
}, [progress]);

// Auto-save mode changes
useEffect(() => {
  saveMode(mode);
}, [mode]);

// Toggle handler
const handleToggle = (stepKey) => {
  setProgress(prev => ({
    ...prev,
    [stepKey]: !prev[stepKey]
  }));
};

// Reset handler
const handleReset = () => {
  if (confirm('Reset all progress?')) {
    setProgress({});
  }
};
```

---

## Future Considerations

If persistence needs grow beyond localStorage:

| Feature | Possible Implementation |
|---------|------------------------|
| Cloud sync | Supabase with anonymous auth |
| Share progress | URL-encoded state parameter |
| Export/Import | JSON file download/upload |
| Multiple projects | Namespaced localStorage keys |

**Current stance:** Keep it simple. localStorage is sufficient.

---

## References

- TECH_STACK.md - Browser APIs used
- APP_FLOW.md - User flows that trigger data operations
- PRD.md - Feature requirements for persistence
