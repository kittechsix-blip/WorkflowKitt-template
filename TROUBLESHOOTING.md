# Troubleshooting Guide - When Things Don't Go as Planned

This guide helps you figure out what to do when something feels wrong or confusing during your project.

**How to use this:** Find the problem that sounds most like yours, then follow the steps under "What to Check" and "How to Fix."

---

## 🗺️ Problems During Planning Phase

### "The AI keeps asking vague questions"

**What this means:** The interrogation isn't going well. Questions feel too generic or don't relate to your app.

**What to check:**
- Did the AI read your CLAUDE.md file?
- Does your CLAUDE.md have your project name and description?
- Are you answering questions with enough detail?

**How to fix:**
1. Stop and say: "Let's start over. Please read CLAUDE.md and ask more specific questions about my project."
2. When answering questions, give examples: Instead of "I want it to be easy to use," say "I want it to be easy to use, like Instagram - where you can figure it out without reading instructions."
3. If a question doesn't make sense, say: "I don't understand this question. Can you rephrase it?"

---

### "My answers contradict each other"

**What this means:** You said one thing earlier, then something different later. Now the AI is confused.

**What to check:**
- Read back through your answers in `00-planning/notes/interrogation-answers.md`
- Are there conflicts? (Example: "Users can edit posts" vs "Content is read-only")

**How to fix:**
1. Tell the AI: "I think I contradicted myself. Let me clarify..."
2. Be specific about which answer to trust: "Ignore what I said about editing. Users should NOT be able to edit posts."
3. The AI will update the documentation to match your clarification

---

### "I don't know how to answer a question"

**What this means:** The question requires technical knowledge you don't have yet.

**What to check:**
- Is this a question about technology choices? (databases, frameworks, hosting)
- Is this a question about user experience? (how something should work)

**How to fix:**

**For technical questions:**
- Say: "I don't know enough to decide. What do you recommend for my use case?"
- The AI will suggest options and explain trade-offs in plain English

**For user experience questions:**
- Describe the *feeling* you want: "I want it to feel instant" or "I want it to feel safe"
- Reference other apps: "Like how Stripe makes payment feel secure"
- The AI can translate feelings into specific features

---

## 📝 Problems During Documentation Phase

### "The docs feel incomplete"

**What this means:** The AI created the 6 documentation files, but they feel thin or missing important details.

**What to check:**
- Look at `01-docs/VALIDATION_CHECKLIST.md` (if it exists)
- Read through each doc: PRD.md, APP_FLOW.md, TECH_STACK.md, FRONTEND_GUIDELINES.md, BACKEND_STRUCTURE.md, IMPLEMENTATION_PLAN.md
- What feels missing?

**How to fix:**
1. Be specific about what's missing: "The APP_FLOW.md doesn't show what happens if login fails"
2. Ask the AI to expand: "Please add error flows to APP_FLOW.md for login, signup, and password reset"
3. Reference other apps: "The payment flow should be documented like Stripe's checkout - every step explicit"

---

### "The docs contradict the interrogation answers"

**What this means:** The AI misunderstood something during documentation.

**What to check:**
- Read your original answers in `00-planning/notes/interrogation-answers.md`
- Compare to what's written in the docs
- Which one is correct?

**How to fix:**
1. Point out the contradiction: "In interrogation I said users can delete their accounts, but BACKEND_STRUCTURE.md says accounts are permanent. I want deletion to be possible."
2. Ask for updates: "Please update BACKEND_STRUCTURE.md and any related docs to support account deletion."

---

## 🎨 Problems During Design Phase

### "The design description is too vague"

**What this means:** FRONTEND_GUIDELINES.md exists but doesn't have enough detail for the AI to code from.

**What to check:**
- Does FRONTEND_GUIDELINES.md have specific colors? (not "blue" but "#3B82F6")
- Does it have spacing rules? ("8px, 16px, 24px, 32px")
- Does it have font sizes? ("14px for body, 18px for headings")

**How to fix:**
1. Provide examples: "I want it to look like [app name]'s dashboard - clean, lots of white space, subtle colors"
2. Send screenshots if you have inspiration
3. Ask the AI: "Can you create a complete design system based on [reference app/style]?"
4. Be specific about the feeling: "professional but friendly" or "bold and energetic"

---

### "The AI built something that looks wrong"

**What this means:** The design guidelines were unclear or the AI misinterpreted them.

**What to check:**
- Compare what you see to FRONTEND_GUIDELINES.md
- Is the AI following the guidelines?
- Or are the guidelines themselves unclear?

**How to fix:**

**If AI isn't following guidelines:**
- Point it out: "The button should be #3B82F6 according to FRONTEND_GUIDELINES.md, but it's appearing as #2563EB"

**If guidelines are unclear:**
- Update them: "Let's update FRONTEND_GUIDELINES.md. Buttons should be rounded (8px radius) with a subtle shadow."

---

## 🏗️ Problems During Build Phase

### "The code doesn't match the design mockup"

**What this means:** What you see in the browser doesn't match what you described or showed the AI.

**What to check:**
- Is the mockup/description clear?
- Did the AI read the right design files?

**How to fix:**
1. Take a screenshot of what you see
2. Take a screenshot or describe what you expected
3. Say: "This doesn't match. The buttons should be [specific description]. Please update."
4. Be specific about spacing, colors, sizes - numbers help: "The gap between cards should be 24px, not 16px"

---

### "Features aren't working as described in APP_FLOW.md"

**What this means:** There's a gap between documentation and implementation.

**What to check:**
- Read the specific flow in APP_FLOW.md
- Test the actual feature
- What's different?

**How to fix:**
1. Point out the specific flow: "In APP_FLOW.md, step 3 of the login flow says 'redirect to dashboard', but instead it's showing a blank page"
2. Ask for correction: "Please update the login flow to match APP_FLOW.md exactly"

---

### "The build order feels wrong"

**What this means:** The AI is trying to build features in a confusing sequence.

**What to check:**
- Look at IMPLEMENTATION_PLAN.md
- Does the order make sense to you?
- What feels off?

**How to fix:**
1. Say: "Let's pause. The build order feels wrong. I want to build [feature A] before [feature B] because [reason]."
2. Ask: "Can we update IMPLEMENTATION_PLAN.md to reflect this order?"
3. The AI will adjust and explain dependencies if there are any

---

## 🧪 Problems During Testing Phase

### "I found a bug but don't know how to describe it"

**What this means:** Something's wrong but you're not sure how to explain it technically.

**What to check:**
- What did you do? (steps to reproduce)
- What did you expect to happen?
- What actually happened?

**How to fix:**
1. Describe it like a story: "I clicked the Login button, then I typed my email and password, then I clicked Submit. I expected to see my dashboard, but instead the button just kept spinning."
2. Take screenshots if possible
3. The AI can translate your description into technical debugging

---

### "The app works on my computer but not my phone"

**What this means:** Responsive design issue or browser compatibility problem.

**What to check:**
- What device/browser are you using on each?
- What specifically doesn't work? (layout? features? both?)

**How to fix:**
1. Say: "The app works on Chrome on my laptop, but on Safari on my iPhone, the [specific feature] doesn't work"
2. The AI will test for mobile/browser-specific issues
3. Be specific about what breaks: layout, buttons not clickable, features not working, etc.

---

### "Features work but feel slow or janky"

**What this means:** Performance issue or animation timing problem.

**What to check:**
- Is it slow everywhere or just certain features?
- Does it happen consistently or only sometimes?

**How to fix:**
1. Identify the specific slow part: "When I click 'Load More', it takes 3-4 seconds and freezes the screen"
2. The AI can optimize that specific interaction
3. Use feeling words: "It feels janky" or "It stutters when scrolling"

---

## 🚀 Problems During Shipping Phase

### "I don't know if it's ready to ship"

**What this means:** You're not sure if you've tested enough or if something's missing.

**What to check:**
- Look at `PRODUCTION_READINESS.md` (if it exists)
- Have you tested all major flows?
- Do all features work as documented?

**How to fix:**
1. Ask: "Can you review my app against PRODUCTION_READINESS.md and tell me what's missing?"
2. Make a list of what feels unfinished
3. Work through the list one item at a time

---

### "Deployment failed or isn't working"

**What this means:** Technical issue with hosting or deployment.

**What to check:**
- What error message did you get? (copy it exactly)
- Where are you trying to deploy? (Netlify, Vercel, etc.)
- What step failed?

**How to fix:**
1. Share the exact error message with the AI
2. Say which deployment service you're using
3. The AI can guide you through service-specific solutions

---

## 🆘 General Troubleshooting Tips

### "The AI seems confused"

**Start fresh:**
1. Say: "Let's take a step back. Read CLAUDE.md and progress.txt again and tell me where we are."
2. The AI will reorient itself

### "I don't understand what the AI is asking me to do"

**Ask for clarification:**
1. Say: "I don't understand. Can you explain that in simpler terms?"
2. Or: "Can you break that into smaller steps?"

### "I want to change something we decided earlier"

**That's normal:**
1. Say: "I want to change [specific decision]. Instead of [old way], I want [new way]."
2. The AI will update docs and code to match

### "Nothing here matches my problem"

**Describe it anyway:**
1. Tell the AI: "Something's wrong but I'm not sure what. Here's what I'm experiencing..."
2. The AI will help you diagnose

---

## 📚 Quick Reference: Which File to Check

| Problem Area | Check This File |
|--------------|----------------|
| Requirements unclear | `01-docs/PRD.md` |
| User flows confusing | `01-docs/APP_FLOW.md` |
| Tech choices unclear | `01-docs/TECH_STACK.md` |
| Design inconsistent | `01-docs/FRONTEND_GUIDELINES.md` |
| Data structure issues | `01-docs/BACKEND_STRUCTURE.md` |
| Build order problems | `01-docs/IMPLEMENTATION_PLAN.md` |
| Lost track of progress | `progress.txt` |
| AI confused about project | `CLAUDE.md` |

---

**Remember:** Getting stuck is normal. Every problem is solvable. The AI is here to help you figure it out. 🚀
