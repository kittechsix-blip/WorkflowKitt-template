# 01-Docs: Your Canonical Documentation

## Purpose

These 6 documents define your entire project. They are the source of truth that AI references to avoid hallucinating.

Complete them IN ORDER. Each one feeds the next.

---

## Step-by-Step Guide

### Step 1: Complete Planning First

Before touching these docs, finish the interrogation process in `00-planning/`.

You should have clear answers to: who, what, why, how, and edge cases.

### Step 2: Fill Out Docs in Order

| Order | File | What It Defines |
|-------|------|-----------------|
| 1 | PRD.md | WHAT you're building, for whom, features, scope |
| 2 | APP_FLOW.md | HOW users move through the app |
| 3 | TECH_STACK.md | WHAT TOOLS build it |
| 4 | FRONTEND_GUIDELINES.md | HOW IT LOOKS |
| 5 | BACKEND_STRUCTURE.md | HOW DATA WORKS |
| 6 | IMPLEMENTATION_PLAN.md | BUILD ORDER |

### Step 3: Cross-Reference

Each doc should reference the others:
- PRD defines features → APP_FLOW defines how users experience them
- APP_FLOW defines screens → FRONTEND_GUIDELINES defines how they look
- PRD defines data needs → BACKEND_STRUCTURE defines the schema
- All of the above → IMPLEMENTATION_PLAN defines build sequence

### Step 4: Lock Them Down

Once these docs are complete, treat them as contracts. Don't change them casually.

If you need to change scope, update the relevant doc FIRST, then update code.

---

## Document Summaries

### PRD.md (Product Requirements Document)
Your contract with yourself. What does "done" look like?
- Project overview
- Target users and their problems
- Feature list with specific acceptance criteria
- What's IN scope
- What's explicitly OUT of scope
- Success metrics

### APP_FLOW.md (Application Flow)
How users move through your app. Eliminates navigation guesswork.
- Every screen/page that exists
- User navigation paths
- What triggers each flow
- Step-by-step sequences
- Decision points and branches
- Success and error states

### TECH_STACK.md (Technology Stack)
Every package, locked to versions. No hallucinated dependencies.
- Framework and version
- Language and version
- Styling approach
- UI component library
- Backend/database
- Authentication
- Deployment target
- All other dependencies

### FRONTEND_GUIDELINES.md (Design System)
Visual decisions, locked down. Consistent styling everywhere.
- Color palette with hex codes
- Typography scale
- Spacing scale
- Border radius values
- Shadow definitions
- Component styling patterns
- Responsive breakpoints
- Animation/transition standards

### BACKEND_STRUCTURE.md (Backend Architecture)
Data structure and API contracts. No schema guessing.
- Database tables with columns, types, relationships
- Authentication logic
- API endpoints with request/response formats
- Storage rules
- Edge case handling

### IMPLEMENTATION_PLAN.md (Build Sequence)
Step-by-step build order. No jumping around.
- Numbered steps (1.1, 1.2, 2.1, 2.2, etc.)
- What each step produces
- Dependencies between steps
- Testing checkpoints

---

## Tips for Good Docs

1. **Be specific.** "A blue button" is bad. "#3B82F6 button with 8px border-radius and 16px padding" is good.

2. **No ambiguity.** If something could be interpreted two ways, clarify it.

3. **Think like a stranger.** Could someone who knows nothing about your idea build this from these docs?

4. **Include edge cases.** What happens on error? Empty state? Too much data?

5. **Update when scope changes.** Docs should always match intent.
