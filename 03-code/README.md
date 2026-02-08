# 03-Code: Your Project Code

## Purpose

This is where your actual application code lives.

Initialize your project here following IMPLEMENTATION_PLAN.md.

---

## Step-by-Step Guide

### Step 1: Read the Docs First

Before writing any code, ensure you've completed:
- [ ] 00-planning/ - Interrogation complete
- [ ] 01-docs/PRD.md - Requirements defined
- [ ] 01-docs/APP_FLOW.md - Flows documented
- [ ] 01-docs/TECH_STACK.md - Stack decided
- [ ] 01-docs/FRONTEND_GUIDELINES.md - Design system set
- [ ] 01-docs/BACKEND_STRUCTURE.md - Database planned
- [ ] 01-docs/IMPLEMENTATION_PLAN.md - Build order set
- [ ] CLAUDE.md - AI operating manual customized

### Step 2: Initialize Project

From this folder, run your initialization command:

```bash
# Example for Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app
```

### Step 3: Follow the Plan

Open IMPLEMENTATION_PLAN.md and work through it step by step.

After each step:
1. Verify the checklist items
2. Update progress.txt
3. Commit your changes
4. Move to next step

### Step 4: Keep AI Aligned

Every new session, start with:

```
Read CLAUDE.md and progress.txt.
We're working on [PROJECT NAME].
Continue from step [X.X] in IMPLEMENTATION_PLAN.md.
```

---

## Expected Folder Structure

After initialization, your structure should look like this (adjust for your framework):

```
03-code/
├── src/
│   ├── app/              # Routes and pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   ├── signup/
│   │   └── dashboard/
│   │
│   ├── components/       # Reusable components
│   │   ├── ui/          # Base components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   │
│   │   └── features/    # Feature-specific
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/             # Utilities
│   │   ├── supabase.ts
│   │   └── utils.ts
│   │
│   ├── hooks/           # Custom hooks
│   │   └── useAuth.ts
│   │
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   │
│   └── styles/          # Global styles
│       └── globals.css
│
├── public/              # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .env.local
```

---

## Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `UserCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Hooks: `use[Name].ts` (e.g., `useAuth.ts`)
- Types: `[name].types.ts` or in `types/index.ts`

**Components:**
- Named exports preferred: `export function Button() {}`
- Props interface above component: `interface ButtonProps {}`

**Folders:**
- All lowercase with hyphens: `user-profile/`
- Feature folders group related files

---

## Git Workflow

### Commit Often

After completing each step in IMPLEMENTATION_PLAN.md:

```bash
git add .
git commit -m "Step 1.3: Create folder structure"
```

### Good Commit Messages

- `feat: Add login page UI`
- `fix: Resolve auth redirect issue`
- `style: Update button hover states`
- `refactor: Extract auth logic to hook`
- `docs: Update README`

### Branches (Optional)

```bash
git checkout -b feature/auth
# ... work on auth ...
git checkout main
git merge feature/auth
```

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run linter

# Dependencies
npm install [pkg]    # Add production dependency
npm install -D [pkg] # Add dev dependency

# Git
git status           # Check changes
git diff             # See changes
git add .            # Stage all
git commit -m "msg"  # Commit
git push             # Push to remote
```

---

## Troubleshooting

### Build Fails
1. Check terminal for error message
2. Read the error carefully
3. Search the error online
4. Ask AI with the full error message

### Styles Not Applying
1. Check if Tailwind is configured
2. Check if class names are correct
3. Check for typos
4. Inspect element in browser

### Data Not Loading
1. Check network tab in browser
2. Check console for errors
3. Verify API endpoint
4. Check authentication

### Something Broke After a Change
1. Check git diff to see what changed
2. Revert with `git checkout -- [file]` if needed
3. Check progress.txt for recent changes

---

## References

- CLAUDE.md - AI rules and patterns
- progress.txt - What's been done
- IMPLEMENTATION_PLAN.md - What to build next
- TECH_STACK.md - What packages to use
- FRONTEND_GUIDELINES.md - How to style things
- BACKEND_STRUCTURE.md - How data works
