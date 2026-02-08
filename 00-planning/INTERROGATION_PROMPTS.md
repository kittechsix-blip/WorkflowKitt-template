# Interrogation Prompts

Copy-paste these prompts when starting a new project. Use them in order.

---

## Prompt 1: The Interrogation Starter

```
Before writing any code, endlessly interrogate my idea in Planning mode only.
Assume nothing. Ask questions until there are no assumptions left.

My idea: [DESCRIBE YOUR APP IN 1-2 SENTENCES]
```

---

## Prompt 2: Deep Dive Questions

If AI doesn't ask enough, prompt it with:

```
Keep asking questions. I want you to interrogate:

USER & PURPOSE:
- Who exactly is the target user?
- What problem does this solve for them?
- Why would they choose this over alternatives?

CORE FUNCTIONALITY:
- What is the single most important action a user takes?
- What triggers that action?
- What happens immediately after?
- What data is created, modified, or deleted?

DATA MODEL:
- What information needs to be stored permanently?
- What are the relationships between data types?
- What needs to be displayed and where?
- What calculations or transformations happen?

USER FLOWS:
- What does the user see first?
- How do they navigate between screens?
- What are all the possible paths through the app?
- What happens at each decision point?

EDGE CASES:
- What happens if the user makes a mistake?
- What happens if something fails?
- What happens with slow connections?
- What happens with empty states?
- What happens with too much data?

ACCESS & AUTH:
- Does this need user accounts?
- What can anonymous users do vs logged-in users?
- Are there different user roles?
- What needs to be private vs public?

PLATFORM:
- Does this need to work on mobile?
- Does this need offline support?
- Does this integrate with external services?
- What browsers/devices must be supported?
```

---

## Prompt 3: Generate Documentation

After all questions are answered:

```
Based on our interrogation, generate my canonical documentation files:

1. PRD.md - Product Requirements Document
   Include: project overview, target users, features list with acceptance criteria,
   what's in scope, what's explicitly out of scope, success metrics

2. APP_FLOW.md - Application Flow
   Include: every screen/page, user navigation paths, what triggers each flow,
   step-by-step sequences, decision points, success states, error states

3. TECH_STACK.md - Technology Stack
   Include: framework, language, styling, UI library, backend, database,
   authentication, deployment, all with specific versions where possible

4. FRONTEND_GUIDELINES.md - Design System
   Include: color palette (hex codes), typography scale, spacing scale,
   border radius values, shadow definitions, component styles, breakpoints

5. BACKEND_STRUCTURE.md - Backend Architecture
   Include: database schema (tables, columns, types, relationships),
   authentication flow, API endpoints with request/response contracts,
   storage rules, edge case handling

6. IMPLEMENTATION_PLAN.md - Build Sequence
   Include: numbered step-by-step build order (1.1, 1.2, 2.1, etc.),
   dependencies between steps, testing checkpoints

Use the answers from our conversation as source material.
Be specific and exhaustive. No ambiguity.
```

---

## Prompt 4: Validate the Docs

After receiving the generated docs:

```
Review what you generated. For each document:
1. Identify anything that's vague or could be interpreted multiple ways
2. Identify any missing information based on our conversation
3. Identify any assumptions you made that I didn't explicitly confirm

List these issues so I can clarify before we proceed.
```

---

## Prompt 5: Start a New Coding Session

When you're ready to build and opening your coding environment:

```
Read CLAUDE.md and progress.txt first.

We're building [PROJECT NAME].
Here's what we've completed: [LIST]
Here's what we're working on today: [CURRENT TASK]

Start from step [X.X] in IMPLEMENTATION_PLAN.md.

Before writing code, confirm you understand:
1. What we're building
2. Where it goes in the file structure
3. What design tokens to use
4. What the success state looks like
```

---

## Prompt 6: Resume a Session

When continuing work after a break:

```
Read progress.txt for context on where we left off.

Last session:
- Completed: [WHAT WAS DONE]
- Stopped at: [WHERE WE STOPPED]
- Issues: [ANY PROBLEMS]

Continue from step [X.X] in IMPLEMENTATION_PLAN.md.
Reference FRONTEND_GUIDELINES.md for styling.
Update progress.txt when this task is complete.
```

---

## Prompt 7: Debug Mode

When something isn't working:

```
Something's broken. Before guessing at fixes:

1. Read the relevant section of [WHICH DOC]
2. Check progress.txt for recent changes
3. Explain what SHOULD happen based on the docs
4. Explain what IS happening
5. Identify the gap between expected and actual behavior
6. Propose a specific fix with reasoning

Don't shotgun solutions. Diagnose first.
```

---

## Prompt 8: Feature Complete Check

After finishing a feature:

```
We just completed [FEATURE NAME].

Before moving on:
1. Does it match the requirements in PRD.md?
2. Does the flow match APP_FLOW.md?
3. Does the styling match FRONTEND_GUIDELINES.md?
4. Does the data handling match BACKEND_STRUCTURE.md?
5. Update progress.txt with what was built
6. What's the next step in IMPLEMENTATION_PLAN.md?
```
