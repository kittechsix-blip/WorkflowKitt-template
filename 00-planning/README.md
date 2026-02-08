# 00-Planning: Interrogate Your Idea

## Purpose

This is where you tear your idea apart BEFORE writing any documentation or code.

AI hallucinates when your clarity ends. Extend your clarity by finding every gap in your thinking now.

---

## Step-by-Step Guide

### Step 1: Open a Fresh AI Session

Start with Claude, ChatGPT, or your preferred AI tool. Don't use your coding environment yet.

### Step 2: Use the Interrogation Prompt

Copy this prompt and paste it:

```
Before writing any code, endlessly interrogate my idea in Planning mode only.
Assume nothing. Ask questions until there are no assumptions left.

My idea: [DESCRIBE YOUR APP IN 1-2 SENTENCES]
```

### Step 3: Answer Every Question

AI should ask you things like:
- Who is this for?
- What's the core action a user takes?
- What happens when they complete that action?
- What data needs to be saved?
- What data needs to be displayed?
- What happens on error?
- What happens on success?
- Does this need a login?
- Does this need a database?
- Does this need to work on mobile?

**If you can't answer a question, that's a gap in your thinking. Figure it out before moving on.**

### Step 4: Document Your Answers

Save your answers in the `notes/` subfolder. Create a file like `idea-answers.md`.

These answers become the raw material for your documentation in `01-docs/`.

### Step 5: Generate Your Docs

Once you've answered everything, use this prompt:

```
Based on our interrogation, generate my canonical documentation files:
- PRD.md
- APP_FLOW.md
- TECH_STACK.md
- FRONTEND_GUIDELINES.md
- BACKEND_STRUCTURE.md
- IMPLEMENTATION_PLAN.md

Use the answers from our conversation as the source material.
Be specific and exhaustive. No ambiguity.
```

### Step 6: Review and Refine

Don't blindly accept what AI generates. Read every doc. Fix anything vague. Add anything missing.

Then copy the final versions to `01-docs/`.

---

## Files in This Folder

| File | Purpose |
|------|---------|
| `README.md` | This guide |
| `INTERROGATION_PROMPTS.md` | Copy-paste prompts for planning |
| `notes/` | Store your brainstorming and answers |

---

## When You're Done

You should be able to clearly explain:

1. **The User** - Who is this for? What do they want?
2. **The Core Action** - What's the main thing users do?
3. **The Data** - What gets saved? What gets displayed?
4. **The Flows** - How do users move through the app?
5. **The Edge Cases** - What happens when things go wrong?

If any of these are fuzzy, keep interrogating.
