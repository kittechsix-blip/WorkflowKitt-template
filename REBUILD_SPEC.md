# Workflow Kitt V2 - Complete Rebuild Specification

**Date:** February 7, 2026
**Build Target:** Single standalone HTML file
**Est. Build Time:** 30-45 minutes focused work
**Output File:** `Workflow-Kitt-V2.html`

---

## 1. VISUAL DESIGN

### Color Scheme (High Contrast)

```javascript
const colors = {
  // Backgrounds
  bg: '#FEFDFB',              // Pearl white
  surface: '#FFFFFF',          // Pure white cards
  surfaceHover: '#F8F7FF',    // Light purple tint on hover

  // Borders
  border: '#E0D9F0',          // Light purple border
  borderLight: '#F0EDF7',     // Subtle purple border

  // Text (HIGH CONTRAST)
  text: '#1A0F2E',            // Very dark purple (almost black)
  textMuted: '#5B4A75',       // Medium dark purple
  textLight: '#8B7BA8',       // Muted purple

  // Accent (from Kittech logo)
  accent: '#7B5FCC',          // Primary purple
  accentHover: '#9D7FEA',     // Lighter purple on hover
  accentDark: '#5B3FA8',      // Darker purple for active

  // Status colors
  success: '#059669',         // Emerald green
  successBg: '#D1FAE5',       // Light green bg
  warning: '#D97706',         // Amber
  warningBg: '#FEF3C7',       // Light amber bg
  error: '#DC2626',           // Red
  errorBg: '#FEE2E2',         // Light red bg

  // Utility
  codeBg: '#F5F3F7',          // Light purple-gray for code
  divider: '#E9E4F0',         // Subtle dividers
};
```

### Header Layout

```
┌─────────────────────────────────────┐
│            Kittech                  │  ← 18px, medium purple (#5B4A75)
│                                     │
│         [PURPLE LOGO]               │  ← 80px × 80px
│                                     │
│          WorkFlow                   │  ← 32px, bold, dark purple (#1A0F2E)
│                                     │
│    Build apps with AI, step by step│  ← 14px, muted (#5B4A75)
└─────────────────────────────────────┘
```

**Logo Details:**
- Use the Kittech logo image provided
- Size: 80px × 80px
- Center aligned
- Slight shadow or glow effect optional

**Favicon:**
- Extract the triangle from the logo
- Create as data URI SVG for favicon

---

## 2. STRUCTURE & CONTENT

### Main Layout

```
[HEADER - sticky at top]

[DOWNLOAD TEMPLATE BUTTON - prominent, purple]

[4 CORE PHASES - vertical list]
  Phase 1: PLANNING (4 steps)
  Phase 2: BUILD (5 steps)
  Phase 3: POLISH (4 steps)
  Phase 4: SHIP (2 steps)

[DIVIDER - "Additional Tools"]

[BONUS FEATURES - collapsible sections]
  - My Favorites
  - My Projects
  - Learning Stories Library
  - Quick Copy Drawer (button to open)

[FOOTER]
```

---

## 3. PHASE 1: PLANNING (4 Steps)

### Step 1.1: Download the Template Folder

**Title:** Download the Template Folder

**Description:**
Click "Download Template Folder" at the top of this guide. Unzip it, rename the folder to your project name, then drag it into Claude Code.

**Why it matters:**
The template contains all the prompts, documentation templates, and folder structure Claude needs. Dragging it into Claude Code gives Claude access to read and write your files.

**Expected output:**
Claude Code shows your project folder in the sidebar with all the folders: 00-planning, 01-docs, 02-design, 03-code, 04-assets.

**Drag-drop visual:**
- FROM: vibe-coding-template.zip
- TO: Claude Code
- Description: "Unzip → Rename to your project → Drag into Claude Code"

**No prompt** (this is a manual step)

---

### Step 1.2: Create Your PRD in Plan Mode

**Title:** Create Your PRD in Plan Mode

**Description:**
Ask Claude to create a to-do list plan for your project

**Why it matters:**
Claude creates a structured to-do list of everything that needs to be built. This becomes your roadmap.

**Prompt with inline editing:**

```javascript
{
  template: `Make a PRD.md (to-do list) file in Claude Code Plan Mode:

I want to build "{{projectName}}" for "{{problemSolved}}"

Help me create a comprehensive plan and write this in PRD.md as a to-do list.`,

  fields: [
    {
      name: 'projectName',
      label: 'Your Project Name',
      type: 'text',
      placeholder: 'e.g., Recipe Finder App',
    },
    {
      name: 'problemSolved',
      label: 'Problem You\'re Solving',
      type: 'textarea',
      placeholder: 'e.g., Home cooks want to find recipes based on ingredients they have',
      rows: 3,
    },
  ]
}
```

**Expected output:**
Claude will create a PRD.md file with a numbered to-do list of features, broken down into small, manageable tasks. You'll see the file appear in your 00-planning folder.

**Troubleshooting:**
- **Issue:** Claude doesn't enter Plan Mode
  - **Solution:** Say "Please use Plan Mode to create this PRD"
- **Issue:** Plan is too vague
  - **Solution:** Ask "Can you break each item down into smaller, more specific tasks?"

---

### Step 1.3: Complete the Detailed Interview

**Title:** Complete the Detailed Interview

**Description:**
Let Claude interview you about every aspect of your project using the AskUserQuestion tool.

**Why it matters:**
This is the MOST IMPORTANT step. Claude asks you structured questions (with multiple choice options) about:
- **Product:** Who's it for? What problem does it solve? What features?
- **Tech Stack:** React or Next.js? Supabase or Firebase? Where to deploy?
- **Design/UX:** What style? Colors? Layout? Inspiration apps?
- **Assets:** Do you have a logo? (You can drag images into the chat!)

The better you answer, the better Claude understands what to build.

**Prompt with inline editing:**

```javascript
{
  template: `Read the PRD.md plan file and interview me in detail using the AskUserQuestion tool.

Ask me about:
- Product details (who it's for, what it does, how it works)
- Technical implementation (frameworks, databases, hosting)
- UI and UX design (style, colors, layout, inspiration)
- Assets I have (logos, icons, photos, fonts)
- Potential concerns and tradeoffs

For each question, research thoroughly to help me make informed decisions.
I can share pictures of UI examples to show what I expect.`,

  fields: [] // No editable fields - this prompt is complete as-is
}
```

**What you'll see:**
Claude uses the AskUserQuestion tool to give you 2-4 options for each decision:

Example:
```
Question: "What's the visual style for your app?"
Options:
☐ Professional & Corporate (blues, grays, clean)
☐ Warm & Friendly (oranges, yellows, soft)
☐ Bold & Energetic (bright colors, high contrast)
☐ Minimal & Calm (neutrals, lots of white space)
```

**Tips:**
- Take your time with each answer
- Share screenshots of apps you like (drag them into chat)
- If you have logo/icon files, drag them into the chat when asked
- Don't rush - this phase determines everything

**Expected output:**
After 20-30 questions, Claude will say "I have all the information I need" and will auto-populate all 6 documentation files:
- PRD.md (updated with full requirements)
- APP_FLOW.md (every screen and user flow)
- TECH_STACK.md (exact packages and versions)
- FRONTEND_GUIDELINES.md (your complete design system)
- BACKEND_STRUCTURE.md (database schema and API structure)
- IMPLEMENTATION_PLAN.md (numbered build steps)

**Troubleshooting:**
- **Issue:** Claude stops asking too early
  - **Solution:** Say "Keep asking more questions about [tech stack/design/features]"
- **Issue:** Questions are confusing
  - **Solution:** Say "Can you explain this question differently? I'm not sure what you're asking"
- **Issue:** You're not sure how to answer
  - **Solution:** Say "What do you recommend for my use case?"

---

### Step 1.4: Review & Approve Your Plan

**Title:** Review & Approve Your Plan

**Description:**
Quickly skim the docs Claude created to make sure they match your vision

**Why it matters:**
This is your last chance to course-correct before Claude starts writing code. If something doesn't match your vision, fix it now.

**Prompt with inline editing:**

```javascript
{
  template: `Show me a summary of what you've planned:
1. The main features from PRD.md
2. The tech stack from TECH_STACK.md
3. The color palette from FRONTEND_GUIDELINES.md

Does this match my vision? If not, I'll tell you what to change.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude shows you a concise summary of the key decisions. Review them and either approve or request changes.

**What to check:**
- Are the features what you wanted?
- Is the tech stack reasonable?
- Do the colors and style match your vision?

**If you need changes:**
Say exactly what to change: "Change the color palette to blues and whites instead of warm neutrals"

---

## 4. PHASE 2: BUILD (5 Steps)

### Step 2.1: Start Building

**Title:** Start Building

**Description:**
Tell Claude to begin coding from the implementation plan

**Why it matters:**
Claude follows the one-task-at-a-time workflow. This prevents overwhelm and ensures each piece works before moving on.

**Prompt with inline editing:**

```javascript
{
  template: `Read CLAUDE.md and progress.txt.

Start building from task 1 in IMPLEMENTATION_PLAN.md.

Remember the workflow:
1. Implement the task
2. Test that it works
3. Check for security issues
4. Update CLAUDE.md with what was completed
5. Tell me when to start a new conversation for the next task

Use best coding practices and emphasize security.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude will:
1. Read your docs to understand what to build
2. Tell you what it's about to implement
3. Create the code files
4. Show you how to test it
5. Update CLAUDE.md with progress
6. Tell you "Task complete. Start a new conversation for the next task."

**Troubleshooting:**
- **Issue:** Claude builds the wrong thing
  - **Solution:** Point it to the specific requirement in PRD.md or APP_FLOW.md
- **Issue:** Code doesn't match design
  - **Solution:** Say "Check FRONTEND_GUIDELINES.md and update the styling to match"

---

### Step 2.2: One-Task-at-a-Time Workflow

**Title:** One-Task-at-a-Time Workflow

**Description:**
Follow this pattern for each task until the app is complete

**The Pattern:**

For EACH task:
1. **Start a new conversation** (clear context window)
2. **Implement** the task following the plan
3. **Test** that it works (Claude will guide you)
4. **Security check** (Claude reviews for vulnerabilities)
5. **Update CLAUDE.md** (Claude documents what's done)
6. **Repeat** for the next task

**Why it matters:**
This prevents context window overload and ensures each feature is solid before adding more.

**Prompt for each new task:**

```javascript
{
  template: `Read CLAUDE.md and progress.txt.

Continue from where we left off. What's the next task in IMPLEMENTATION_PLAN.md?

Implement it, test it, check security, then update CLAUDE.md.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude reads the current state, identifies the next task, implements it, tests it, and updates the docs.

**How to know it's working:**
- You can test each feature as it's built
- CLAUDE.md always shows current progress
- No features are left half-done

---

### Step 2.3: Resume Sessions

**Title:** Resume Sessions

**Description:**
How to pick up where you left off after a break

**Why it matters:**
Claude has no memory between sessions. These files tell it exactly where you are.

**Prompt with inline editing:**

```javascript
{
  template: `Read CLAUDE.md and progress.txt.

Show me:
1. What we completed last session
2. What we're working on next
3. Any blockers or issues

Then continue building.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude summarizes progress and continues seamlessly.

---

### Step 2.4: Debug Issues

**Title:** Debug Issues

**Description:**
When something breaks, debug it systematically

**Why it matters:**
Systematic debugging finds the real problem. Random fixes waste time and break other things.

**Prompt with inline editing:**

```javascript
{
  template: `Something's broken with {{issueDescription}}.

Before guessing at fixes:
1. Read the relevant documentation (PRD.md, APP_FLOW.md, etc.)
2. Check progress.txt for recent changes
3. Explain what SHOULD happen based on the docs
4. Explain what IS happening
5. Identify the gap between expected and actual behavior
6. Propose a specific fix with reasoning

Don't make random changes. Diagnose first.`,

  fields: [
    {
      name: 'issueDescription',
      label: 'Describe the Issue',
      type: 'textarea',
      placeholder: 'e.g., The login button doesn\'t respond when clicked',
      rows: 3,
    },
  ]
}
```

**Expected output:**
Claude walks through the diagnostic steps and proposes a targeted fix with clear reasoning.

---

### Step 2.5: Add Assets

**Title:** Add Assets

**Description:**
Add your logo, icons, images, and fonts when Claude needs them

**Why it matters:**
Having assets in the right place lets Claude reference them in your code.

**Instructions:**
During the build, Claude will ask you to add specific assets. Drag them into the correct folders:
- Logos → `04-assets/images/logo/`
- Icons → `04-assets/images/icons/`
- Photos → `04-assets/images/photos/`
- Fonts → `04-assets/fonts/`

**Drag-drop visual:**
- FROM: Your logo files
- TO: 04-assets/images/logo/
- Description: "Organize assets so Claude can use them"

**Expected output:**
Claude sees the files and uses them in your components.

**No prompt** (this is a manual step during the build)

---

## 5. PHASE 3: POLISH (4 Steps)

### Step 3.1: Test All Features

**Title:** Test All Features

**Description:**
Go through every feature and verify it works as designed

**Why it matters:**
Real users will try everything. Testing now prevents embarrassing bugs after launch.

**Prompt with inline editing:**

```javascript
{
  template: `Read APP_FLOW.md.

For each user flow listed:
1. Walk me through testing it step by step
2. What should I see at each step?
3. What are the potential failure points?
4. What edge cases should I test?`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude gives you a testing checklist based on your app's flows. Follow it systematically.

---

### Step 3.2: Test on Mobile

**Title:** Test on Mobile

**Description:**
Verify your app works on phones and tablets

**Why it matters:**
Many users will access your app on mobile. It needs to work everywhere.

**Instructions:**
Open your app on your phone (or use Chrome DevTools mobile simulator). Test:
- Does text fit without horizontal scrolling?
- Are buttons easy to tap?
- Do all features work on touch screens?
- Is the layout readable?

**Expected output:**
Your app looks good and works smoothly on mobile devices.

**No prompt** (this is manual testing)

---

### Step 3.3: Fix Bugs

**Title:** Fix Bugs

**Description:**
Address any issues you found during testing

**Why it matters:**
This is your polish phase - make everything work perfectly.

**Prompt with inline editing:**

```javascript
{
  template: `I found these issues during testing:

{{bugList}}

For each one:
1. Diagnose the root cause
2. Propose a fix
3. Test the fix
4. Update CLAUDE.md`,

  fields: [
    {
      name: 'bugList',
      label: 'List the Bugs Found',
      type: 'textarea',
      placeholder: '1. Login button not responding\n2. Mobile menu doesn\'t close\n3. Form validation shows wrong error',
      rows: 5,
    },
  ]
}
```

**Expected output:**
All bugs fixed, app works smoothly.

---

### Step 3.4: Run Ralph Loop (Optional)

**Title:** Run Ralph Loop (Optional)

**Description:**
Use automated testing if applicable

**Why it matters:**
Automated testing can catch issues you might miss.

**Prompt with inline editing:**

```javascript
{
  template: `Run the Ralph loop for automated validation:
https://github.com/michaelshimeles/ralphy

Test the app thoroughly and report any issues.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Ralph loop runs tests and reports results.

---

## 6. PHASE 4: SHIP (2 Steps)

### Step 4.1: Deploy Your App

**Title:** Deploy Your App

**Description:**
Push your code and make it live

**Why it matters:**
You're making your app available to the world!

**Prompt with inline editing:**

```javascript
{
  template: `Read TECH_STACK.md for deployment instructions.

Deploy the app to {{hostingPlatform}}.

Walk me through the deployment steps.`,

  fields: [
    {
      name: 'hostingPlatform',
      label: 'Hosting Platform',
      type: 'text',
      placeholder: 'e.g., Vercel, Netlify, Railway',
    },
  ]
}
```

**Expected output:**
Your app is live at a public URL. Share it!

---

### Step 4.2: Create Your Learning Story

**Title:** Create Your Learning Story

**Description:**
Ask Claude to document everything you learned

**Why it matters:**
Building is great, but understanding what you built makes you a better builder. This document captures your journey so you can learn from it and reference it later.

**Prompt with inline editing:**

```javascript
{
  template: `The project is complete! Please create my FOR[Andykitlowski].md learning document.

This should explain the entire project in plain language, including:
- Technical architecture and how it's structured
- How the various parts are connected
- Technologies used and why we chose them
- Lessons I can learn from this project:
  * Bugs we ran into and how we fixed them
  * Potential pitfalls and how to avoid them in the future
  * New technologies/concepts introduced
  * How good engineers think and work
  * Best practices demonstrated in this project

Make it engaging and memorable - use technical terms appropriately, but also use analogies and anecdotes to make concepts stick. Don't make it sound like boring technical documentation.

This is a learning tool to help me grow as a builder.`,

  fields: [] // No editable fields
}
```

**Expected output:**
Claude creates `FOR[Andykitlowski].md` - a friendly, engaging explanation of your entire project with lessons learned, mental models, and growth opportunities.

**What to do with it:**
Read it! This is your personal knowledge base. Refer back to it when building your next project.

---

## 7. BONUS FEATURES (After Phases)

### Divider Section

**Between Phase 4 and Bonus Features:**

```
─────────────────────────────────────
      Additional Tools & Libraries
─────────────────────────────────────
```

Styled with:
- Centered text
- Muted purple color
- Top/bottom padding: 40px
- Horizontal rule with purple tint

---

### Bonus Feature 1: My Favorites

**Keep existing functionality:**
- Collapsible section
- Bookmark favorite prompts from any step
- Star icon to add/remove favorites
- Quick access to bookmarked prompts
- Persists to localStorage

**Styling updates:**
- Use new purple color scheme
- Purple star icon when favorited
- Light purple background when expanded

---

### Bonus Feature 2: My Projects

**Keep existing functionality:**
- Track multiple projects
- Project name, description, status
- Notes section
- "What I Learned" section
- Edit/delete projects
- Persists to localStorage

**Styling updates:**
- Use new purple color scheme
- Status badges in purple tones
- Purple accent for "What I Learned" section

---

### Bonus Feature 3: Learning Stories Library

**Keep existing functionality:**
- Store LEARNING_STORY.md files
- Collapsible story viewer
- Add/delete stories
- Persists to localStorage

**Styling updates:**
- Green background (success color) for the section header
- Purple accents for story cards
- Consistent with new color scheme

---

### Bonus Feature 4: Quick Copy Drawer

**Keep existing functionality:**
- Side drawer with all prompts
- One-click copying
- Organized by phase
- "Copied!" feedback

**Styling updates:**
- Purple accent color
- Drawer slides in from right
- Semi-transparent dark overlay when open

---

## 8. EDITABLE PROMPT COMPONENT

### Component Specification

```jsx
const EditablePrompt = ({ template, fields }) => {
  // State
  const [fieldValues, setFieldValues] = useState({});
  const [copied, setCopied] = useState(false);

  // Fill template with field values
  const getFilledPrompt = () => {
    let filled = template;
    Object.entries(fieldValues).forEach(([name, value]) => {
      filled = filled.replace(
        new RegExp(`{{${name}}}`, 'g'),
        value || `[${name}]`
      );
    });
    return filled;
  };

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFilledPrompt());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Copy failed');
    }
  };

  return (
    <div style={{ /* purple-themed styling */ }}>
      {/* Render input fields */}
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea {...field} />
          ) : (
            <input {...field} />
          )}
        </div>
      ))}

      {/* Optional preview */}
      <details>
        <summary>Preview filled prompt</summary>
        <pre>{getFilledPrompt()}</pre>
      </details>

      {/* Copy button */}
      <button onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Filled Prompt'}
      </button>
    </div>
  );
};
```

**Styling:**
- Purple border and accents
- Light purple background
- Input fields with purple focus ring
- Copy button with purple background
- Success green when copied

---

## 9. EMBEDDED CLAUDE.MD TEMPLATE

Use the complete template from: `/private/tmp/.../scratchpad/NEW_CLAUDE_TEMPLATE.md`

**Key sections:**
- Plan Mode PRD approach
- AskUserQuestion interview workflow
- One-task-at-a-time implementation
- Critical Rules (read 3+ files before editing)
- Styling preferences (TailwindCSS, Shadcn, etc.)
- Ralph loop integration
- FOR[Andykitlowski].md creation instructions

**Embed in templateFiles object for ZIP download**

---

## 10. TEMPLATE DOWNLOAD

**Button placement:**
- Below header
- Above Phase 1
- Prominent purple button
- Full width on mobile, centered on desktop

**Functionality:**
- Uses JSZip to create ZIP file
- Includes all template files:
  - CLAUDE.md (NEW version with complete workflow)
  - progress.txt
  - PROJECT_CHECKLIST.md
  - All 00-planning files
  - All 01-docs template files
  - Folder structure
- Downloads as `workflow-kitt-template.zip`

---

## 11. TECHNICAL IMPLEMENTATION NOTES

### File Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, CDN imports -->
  <!-- Custom CSS with purple color scheme -->
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    // Color scheme
    const colors = { ... };

    // Template files (NEW CLAUDE.md)
    const templateFiles = { ... };

    // Icons (existing, update colors)
    const Icons = { ... };

    // NEW: EditablePrompt component
    const EditablePrompt = ({ template, fields }) => { ... };

    // Existing bonus feature components
    // (update styling to purple)

    // NEW: Phases data (4 phases, 15 steps)
    const phases = [
      { number: 1, title: 'PLANNING', steps: [...] },
      { number: 2, title: 'BUILD', steps: [...] },
      { number: 3, title: 'POLISH', steps: [...] },
      { number: 4, title: 'SHIP', steps: [...] },
    ];

    // Main App component
    function WorkflowKitt() {
      // State management
      // Render header (NEW layout)
      // Render download button
      // Render 4 phases
      // Render bonus features
      // Render footer
    }

    // Render app
    ReactDOM.render(<WorkflowKitt />, document.getElementById('root'));
  </script>
</body>
</html>
```

### Key Updates from V1

1. **Color scheme:** Warm neutrals → Purple with high contrast
2. **Header:** Sparkle icon → Kittech + Logo + WorkFlow
3. **Phases:** 6 phases (21 steps) → 4 phases (15 steps)
4. **Prompts:** Static copy buttons → Editable fields with inline filling
5. **CLAUDE.md:** Basic template → Complete workflow guide
6. **Bonus features:** Mixed in → Grouped after phases

### Testing Checklist

- [ ] Purple color scheme applied throughout
- [ ] Header shows Kittech → Logo → WorkFlow correctly
- [ ] All 15 steps render with correct content
- [ ] EditablePrompt works for all prompts with fields
- [ ] Copy buttons work (both editable and simple prompts)
- [ ] Progress tracking works (checkboxes + localStorage)
- [ ] Bonus features work and styled with purple
- [ ] Template download includes NEW CLAUDE.md
- [ ] Mobile responsive
- [ ] No console errors
- [ ] High contrast accessible (text readable)

---

## 12. LOGO INTEGRATION

**Logo file:** `/Users/kittechsix/Desktop/Automation.png`

**Tasks:**
1. Convert logo to base64 or embed as data URI
2. Use in header (80px × 80px)
3. Extract triangle for favicon
4. Ensure logo looks crisp on retina displays

**Header HTML:**

```html
<header style={{ textAlign: 'center', padding: '40px 20px' }}>
  <div style={{ fontSize: '18px', color: colors.textMuted, marginBottom: '12px' }}>
    Kittech
  </div>
  <img
    src="[BASE64_LOGO_HERE]"
    alt="Kittech Logo"
    style={{ width: '80px', height: '80px', margin: '0 auto' }}
  />
  <h1 style={{
    fontSize: '32px',
    fontWeight: '700',
    color: colors.text,
    margin: '12px 0 8px'
  }}>
    WorkFlow
  </h1>
  <p style={{ fontSize: '14px', color: colors.textMuted, margin: 0 }}>
    Build apps with AI, step by step
  </p>
</header>
```

---

## SUCCESS CRITERIA

The rebuild is complete when:

✅ Visual design matches spec (pearl white + purple)
✅ Header shows Kittech + Logo + WorkFlow layout
✅ All 4 phases render with 15 steps
✅ All step content is accurate and complete
✅ Inline editable prompts work for all applicable prompts
✅ Copy buttons work (both types)
✅ Progress tracking persists
✅ Bonus features work and are styled consistently
✅ Template download includes NEW CLAUDE.md
✅ Mobile responsive
✅ No console errors
✅ High contrast (accessible)

---

## NEXT STEPS

1. **Review this spec** - Approve or request changes
2. **Start fresh session** - "Build Workflow Kitt V2 from REBUILD_SPEC.md"
3. **Build & test** - ~30-45 min focused work
4. **Deploy** - Replace old version with new version

---

**This specification is complete and ready for implementation.** 🚀
