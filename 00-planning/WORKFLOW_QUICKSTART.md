# Vibe Coding Workflow - Quick Start Guide

Follow these steps every time you start a new project.

---

## Step 1: Duplicate the Template

1. Copy the entire `vibe-coding-template` folder
2. Rename it to your project name (e.g., `my-awesome-app`)
3. Open the folder in your file explorer

---

## Step 2: Interrogate Your Idea (Claude Chat or Claude Code)

Open Claude and paste this:

```
Before writing any code, endlessly interrogate my idea in Planning mode only.
Assume nothing. Ask questions until there are no assumptions left.

My idea: [DESCRIBE YOUR APP IN 1-2 SENTENCES]
```

**Then keep answering Claude's questions until it stops asking.**

If Claude stops too early, paste this:

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

USER FLOWS:
- What does the user see first?
- How do they navigate between screens?
- What are all the possible paths through the app?

EDGE CASES:
- What happens if the user makes a mistake?
- What happens if something fails?
- What happens with empty states?

ACCESS & AUTH:
- Does this need user accounts?
- What can anonymous users do vs logged-in users?
- Are there different user roles?

PLATFORM:
- Does this need to work on mobile?
- Does this need offline support?
- Does this integrate with external services?
```

**Save this entire conversation - you'll need it for Step 3.**

---

## Step 3: Auto-Populate All Docs (Claude Code)

### How to Open Claude Code in Your Project Folder

**Option A: Terminal**
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your project:
   ```
   cd ~/Desktop/your-project-name
   ```
3. Type `claude` and press Enter

**Option B: Drag & Drop (Mac)**
1. Open Terminal
2. Type `cd ` (with a space after)
3. Drag your project folder into the Terminal window
4. Press Enter
5. Type `claude` and press Enter

**First time?** Install Claude Code first:
```
npm install -g @anthropic-ai/claude-code
claude login
```

---

### Once Claude Code is Open, Paste This:

```
Read the template files in 01-docs/ and CLAUDE.md first.

Based on my planning answers below, populate ALL documentation files with real, specific content. No placeholders.

## MY PROJECT NAME: [YOUR PROJECT NAME]

## MY PLANNING ANSWERS:
[PASTE YOUR ENTIRE INTERROGATION Q&A FROM STEP 2]

---

INSTRUCTIONS:
1. Write populated content to each file in 01-docs/:
   - PRD.md
   - APP_FLOW.md
   - TECH_STACK.md
   - FRONTEND_GUIDELINES.md
   - BACKEND_STRUCTURE.md
   - IMPLEMENTATION_PLAN.md

2. Update CLAUDE.md with summary info (project overview, tech stack, colors)

3. Update progress.txt to show starting state

Write directly to each file. Use specific values, not examples or placeholders.
```

**Claude Code will write to all your files automatically.**

---

## Step 4: Validate the Docs (Claude Code)

After Step 3 completes, paste this:

```
Review all the docs you just wrote:

1. Identify anything vague or ambiguous
2. Identify missing information that would block coding
3. Identify assumptions you made that I didn't confirm

List issues so I can clarify.
```

**Fix any issues Claude identifies, then move to Step 5.**

---

## Step 5: Start Coding (Claude Code)

When you're ready to build, paste this:

```
Read CLAUDE.md and progress.txt first.

We're building [PROJECT NAME].
Start from step 1.1 in IMPLEMENTATION_PLAN.md.

Before writing code, confirm you understand:
1. What we're building
2. Where it goes in the file structure
3. What design tokens to use
4. What the success state looks like
```

---

## Step 6: Resume Any Session (Claude Code)

When returning after a break, paste this:

```
Read CLAUDE.md and progress.txt.

Continue from where we left off. Check IMPLEMENTATION_PLAN.md for next steps.
Update progress.txt when tasks complete.
```

---

## Quick Reference: What Goes Where

| File | Purpose | When Claude Code Reads It |
|------|---------|---------------------------|
| `CLAUDE.md` | Master summary | **Automatically at session start** |
| `01-docs/PRD.md` | Feature requirements | When building features |
| `01-docs/APP_FLOW.md` | User flows | When building navigation/screens |
| `01-docs/TECH_STACK.md` | Packages & versions | When installing/importing |
| `01-docs/FRONTEND_GUIDELINES.md` | Design system | When styling components |
| `01-docs/BACKEND_STRUCTURE.md` | Database & API | When building data layer |
| `01-docs/IMPLEMENTATION_PLAN.md` | Build sequence | When deciding what's next |
| `progress.txt` | Session tracking | At start & end of sessions |

---

## The 60-Second Version

1. **Duplicate template** → rename to project name
2. **Interrogate idea** → paste Prompt 1, answer all questions
3. **Populate docs** → paste Step 3 prompt + your answers into Claude Code
4. **Validate** → paste Step 4 prompt, fix issues
5. **Code** → paste Step 5 prompt, start building
6. **Resume** → paste Step 6 prompt when returning

That's it. Your docs are populated, Claude Code knows where to read them, and you're ready to build.
