# Doc Population Prompt for Claude Code

Use this prompt after completing your interrogation session. Copy the entire prompt below and paste it into Claude Code along with your planning notes.

---

## The Prompt

```
I've completed my planning interrogation. Based on the answers below, populate ALL of my project documentation files.

## MY PLANNING NOTES:
[PASTE YOUR INTERROGATION ANSWERS HERE]

---

## INSTRUCTIONS:

1. **Populate each doc in 01-docs/** with specific, detailed content:
   - PRD.md - Fill in ALL sections with my specific features, users, scope
   - APP_FLOW.md - Map out every screen and user path
   - TECH_STACK.md - Lock in specific versions and packages
   - FRONTEND_GUIDELINES.md - Define exact colors, spacing, typography
   - BACKEND_STRUCTURE.md - Define exact tables, columns, relationships
   - IMPLEMENTATION_PLAN.md - Create numbered build sequence

2. **Then update CLAUDE.md** with the summary info:
   - Project Overview section (name, description, target user, value prop)
   - Tech Stack section (framework, language, styling, backend, etc.)
   - Design System Reference (pull colors from FRONTEND_GUIDELINES.md)
   - Current Session Context (set to initial state)

3. **Update progress.txt** to show we're starting fresh

## OUTPUT FORMAT:
For each file, show me:
- The filename
- The complete populated content
- A "---" separator before the next file

## RULES:
- No placeholders like [YOUR PROJECT NAME] - use real values
- No "e.g." examples - use actual decisions
- Be exhaustive - I'd rather have too much detail than too little
- Use specific version numbers for all packages
- Every acceptance criterion must be testable
```

---

## After Claude Code Generates the Docs

1. Review each generated doc for accuracy
2. Copy each doc's content into the corresponding file in `01-docs/`
3. Copy the CLAUDE.md content to replace your root `CLAUDE.md`
4. Copy the progress.txt content to your root `progress.txt`

**Or, if using Claude Code with file access, just ask it to write directly to each file.**

---

## Quick Validation Prompt

After populating, use this to check for gaps:

```
Review the docs you just generated:

1. Is there anything vague that could be interpreted multiple ways?
2. Is there any missing information that would block implementation?
3. Are there any assumptions you made that I didn't confirm?

List these issues so I can clarify before we start coding.
```
