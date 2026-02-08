# Project Checklist

Use this checklist every time you start a new project. Work through each phase in order. Don't skip steps.

---

## Phase 1: Planning (00-planning/)

- [ ] **Idea Interrogation** - Use the prompts in `INTERROGATION_PROMPTS.md` to tear apart your idea
- [ ] Answer ALL questions before moving on (who, what, why, how, edge cases)
- [ ] Document your answers in `00-planning/notes/`
- [ ] Confirm you can clearly explain: the user, the core action, the data, the flows

---

## Phase 2: Documentation (01-docs/)

Complete these in order. Each one feeds the next.

- [ ] **PRD.md** - Define what you're building, for whom, features, scope, success criteria
- [ ] **APP_FLOW.md** - Map every screen and user path (what triggers what, success/error states)
- [ ] **TECH_STACK.md** - Lock your packages, versions, APIs, and tools
- [ ] **FRONTEND_GUIDELINES.md** - Define your design system (colors, fonts, spacing, components)
- [ ] **BACKEND_STRUCTURE.md** - Define database schema, auth logic, API contracts
- [ ] **IMPLEMENTATION_PLAN.md** - Break the build into numbered steps (1.1, 1.2, 2.1, etc.)

---

## Phase 3: Session Setup

- [ ] **CLAUDE.md** - Customize the AI operating manual for this specific project
- [ ] **progress.txt** - Initialize with "Project started" and today's date
- [ ] Copy any reference screenshots to `02-design/references/`

---

## Phase 4: Build (03-code/)

- [ ] Follow IMPLEMENTATION_PLAN.md step by step
- [ ] After EVERY completed feature:
  - [ ] Update `progress.txt` with what was built
  - [ ] Note any issues or decisions made
  - [ ] Document what's next
- [ ] Test on mobile breakpoints as you build
- [ ] Commit frequently with clear messages

---

## Phase 5: Polish & Ship

- [ ] Test all user flows from APP_FLOW.md
- [ ] Verify responsive design at all breakpoints
- [ ] Check all error states work correctly
- [ ] Confirm success states work correctly
- [ ] Review against PRD.md success criteria
- [ ] Deploy

---

## Quick Reference: The Golden Rules

1. **Documentation first, code second.** Always.
2. **Interrogate before you build.** Find the gaps in your thinking.
3. **Update progress.txt religiously.** AI has no memory without it.
4. **Be specific.** "Blue button" loses. "#3B82F6 button with 8px radius" wins.
5. **Think in components.** Everything is reusable lego bricks.
6. **Mobile first.** Design for small screens, then expand.
7. **AI is a translator.** Garbage in = garbage out.

---

## When Things Break

1. Check `progress.txt` - is AI missing context?
2. Check your docs - is the requirement actually specified?
3. Re-read the relevant doc section to AI explicitly
4. If still stuck, use the interrogation prompts to clarify what you actually want
