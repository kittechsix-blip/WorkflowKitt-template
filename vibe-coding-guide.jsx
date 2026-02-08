import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Copy, Check, FolderOpen, FileText, Terminal, Sparkles, Rocket, Package, ArrowRight, GripVertical, MousePointer2 } from 'lucide-react';

// Warm neutrals color palette
const colors = {
  bg: '#FAFAF9',
  surface: '#FFFFFF',
  surfaceHover: '#F5F5F4',
  border: '#E7E5E4',
  borderLight: '#F5F5F4',
  text: '#1C1917',
  textMuted: '#78716C',
  textLight: '#A8A29E',
  accent: '#78716C',
  accentHover: '#57534E',
  success: '#16A34A',
  successBg: '#F0FDF4',
};

// Copy button component
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
      style={{
        background: copied ? colors.successBg : colors.surfaceHover,
        color: copied ? colors.success : colors.textMuted,
        border: `1px solid ${copied ? colors.success : colors.border}`,
      }}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Prompt'}</span>
    </button>
  );
};

// Drag and Drop Visual Component
const DragDropVisual = ({ from, to, description }) => (
  <div className="my-6 p-6 rounded-xl" style={{ background: colors.surfaceHover }}>
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: colors.surface, border: `2px dashed ${colors.border}` }}>
          <GripVertical size={24} style={{ color: colors.textMuted }} />
        </div>
        <span className="text-sm font-medium" style={{ color: colors.textMuted }}>{from}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-12 h-0.5" style={{ background: colors.border }} />
        <MousePointer2 size={20} style={{ color: colors.accent }} className="animate-pulse" />
        <ArrowRight size={20} style={{ color: colors.accent }} />
        <div className="w-12 h-0.5" style={{ background: colors.border }} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: colors.surface, border: `2px solid ${colors.accent}` }}>
          <FolderOpen size={24} style={{ color: colors.accent }} />
        </div>
        <span className="text-sm font-medium" style={{ color: colors.accent }}>{to}</span>
      </div>
    </div>
    <p className="text-center mt-4 text-sm" style={{ color: colors.textMuted }}>{description}</p>
  </div>
);

// Step component with expandable content
const Step = ({ number, title, description, prompt, dragDrop, isComplete, onToggle, isExpanded, onExpand }) => {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: colors.surface,
        border: `1px solid ${isComplete ? colors.success : colors.border}`,
        boxShadow: isExpanded ? '0 4px 20px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)'
      }}
    >
      <div
        className="flex items-center gap-4 p-5 cursor-pointer hover:bg-opacity-50 transition-colors"
        onClick={onExpand}
        style={{ background: isComplete ? colors.successBg : 'transparent' }}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0"
          style={{
            background: isComplete ? colors.success : colors.surface,
            border: `2px solid ${isComplete ? colors.success : colors.border}`,
          }}
        >
          {isComplete && <Check size={16} color="white" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: colors.textLight }}>Step {number}</span>
          </div>
          <h3 className="font-semibold text-lg" style={{ color: isComplete ? colors.success : colors.text }}>{title}</h3>
        </div>

        <div className="flex-shrink-0">
          {isExpanded ? <ChevronDown size={20} style={{ color: colors.textMuted }} /> : <ChevronRight size={20} style={{ color: colors.textMuted }} />}
        </div>
      </div>

      {isExpanded && (
        <div className="px-5 pb-5 pt-2 border-t" style={{ borderColor: colors.borderLight }}>
          <p className="mb-4 leading-relaxed" style={{ color: colors.textMuted }}>{description}</p>

          {dragDrop && <DragDropVisual {...dragDrop} />}

          {prompt && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium" style={{ color: colors.textMuted }}>Prompt to use:</span>
                <CopyButton text={prompt} />
              </div>
              <pre
                className="p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap"
                style={{ background: colors.surfaceHover, color: colors.text, border: `1px solid ${colors.border}` }}
              >
                {prompt}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Phase component
const Phase = ({ number, title, icon: Icon, steps, progress, onStepToggle, expandedStep, onExpandStep }) => {
  const [isOpen, setIsOpen] = useState(number === 1);
  const completedSteps = steps.filter((_, i) => progress[`${number}-${i}`]).length;
  const progressPercent = (completedSteps / steps.length) * 100;

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-6 rounded-2xl transition-all duration-300"
        style={{
          background: colors.surface,
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: colors.surfaceHover }}
        >
          <Icon size={28} style={{ color: colors.accent }} />
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold" style={{ color: colors.textLight }}>Phase {number}</span>
            <span className="text-sm" style={{ color: colors.textMuted }}>• {completedSteps}/{steps.length} complete</span>
          </div>
          <h2 className="text-xl font-bold" style={{ color: colors.text }}>{title}</h2>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: colors.borderLight }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%`, background: progressPercent === 100 ? colors.success : colors.accent }}
            />
          </div>
        </div>

        <div className="flex-shrink-0">
          {isOpen ? <ChevronDown size={24} style={{ color: colors.textMuted }} /> : <ChevronRight size={24} style={{ color: colors.textMuted }} />}
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 ml-6 space-y-3">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={`${number}.${index + 1}`}
              {...step}
              isComplete={progress[`${number}-${index}`]}
              onToggle={() => onStepToggle(`${number}-${index}`)}
              isExpanded={expandedStep === `${number}-${index}`}
              onExpand={() => onExpandStep(expandedStep === `${number}-${index}` ? null : `${number}-${index}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main App
export default function VibeCodingGuide() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('vibe-coding-progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [expandedStep, setExpandedStep] = useState(null);

  useEffect(() => {
    localStorage.setItem('vibe-coding-progress', JSON.stringify(progress));
  }, [progress]);

  const handleToggle = (key) => {
    setProgress(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSteps = phases.reduce((acc, p) => acc + p.steps.length, 0);
  const completedSteps = Object.values(progress).filter(Boolean).length;
  const overallProgress = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="min-h-screen" style={{ background: colors.bg }}>
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg" style={{ background: `${colors.bg}ee` }}>
        <div className="max-w-3xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3" style={{ color: colors.text }}>
                <Sparkles size={28} style={{ color: colors.accent }} />
                Vibe Coding Guide
              </h1>
              <p className="text-sm mt-1" style={{ color: colors.textMuted }}>Your step-by-step journey to building apps with AI</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold" style={{ color: overallProgress === 100 ? colors.success : colors.text }}>{overallProgress}%</div>
              <div className="text-sm" style={{ color: colors.textMuted }}>{completedSteps}/{totalSteps} steps</div>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full overflow-hidden" style={{ background: colors.borderLight }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%`, background: overallProgress === 100 ? colors.success : colors.accent }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {phases.map((phase) => (
          <Phase
            key={phase.number}
            {...phase}
            progress={progress}
            onStepToggle={handleToggle}
            expandedStep={expandedStep}
            onExpandStep={setExpandedStep}
          />
        ))}

        {/* Completion Message */}
        {overallProgress === 100 && (
          <div className="mt-8 p-8 rounded-2xl text-center" style={{ background: colors.successBg, border: `2px solid ${colors.success}` }}>
            <Rocket size={48} style={{ color: colors.success }} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2" style={{ color: colors.success }}>You did it!</h2>
            <p style={{ color: colors.textMuted }}>Your app is ready to ship. Go build something amazing.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 text-center">
        <p className="text-sm" style={{ color: colors.textLight }}>
          Built with love for vibe coders everywhere
        </p>
      </footer>
    </div>
  );
}

// Phase Data
const phases = [
  {
    number: 1,
    title: 'Planning',
    icon: Sparkles,
    steps: [
      {
        title: 'Duplicate the Template',
        description: 'Start fresh by copying the vibe-coding-template folder and renaming it to your project name. This keeps your template clean for future projects.',
        dragDrop: {
          from: 'vibe-coding-template',
          to: 'my-awesome-app',
          description: 'Copy the folder and rename it to your project name'
        }
      },
      {
        title: 'Interrogate Your Idea',
        description: 'Open Claude (chat or desktop app) and use the interrogation prompt below. Answer every question Claude asks until there are no assumptions left. This is the most important step — garbage planning = garbage code.',
        prompt: `Before writing any code, endlessly interrogate my idea in Planning mode only.
Assume nothing. Ask questions until there are no assumptions left.

My idea: [DESCRIBE YOUR APP IN 1-2 SENTENCES]`
      },
      {
        title: 'Deep Dive Questions',
        description: 'If Claude stops asking questions too early, use this prompt to go deeper. Cover users, features, data, flows, edge cases, auth, and platform requirements.',
        prompt: `Keep asking questions. I want you to interrogate:

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
- Does this integrate with external services?`
      },
      {
        title: 'Save Your Answers',
        description: 'Copy your entire Q&A conversation and save it. You\'ll need this for the next phase when we populate all the documentation.',
        dragDrop: {
          from: 'Q&A Conversation',
          to: '00-planning/notes/',
          description: 'Save your interrogation answers as a text file in the notes folder'
        }
      }
    ]
  },
  {
    number: 2,
    title: 'Documentation',
    icon: FileText,
    steps: [
      {
        title: 'Open Claude Code in Your Project',
        description: 'Open Terminal, navigate to your project folder, and type "claude" to start Claude Code. This is where the magic happens — Claude will write directly to your files.',
        prompt: `cd ~/Desktop/your-project-name
claude`
      },
      {
        title: 'Auto-Populate All Docs',
        description: 'Paste this prompt into Claude Code along with your planning answers from Phase 1. Claude will write specific, detailed content to all six documentation files automatically.',
        prompt: `Read the template files in 01-docs/ and CLAUDE.md first.

Based on my planning answers below, populate ALL documentation files with real, specific content. No placeholders.

## MY PROJECT NAME: [YOUR PROJECT NAME]

## MY PLANNING ANSWERS:
[PASTE YOUR ENTIRE INTERROGATION Q&A FROM PHASE 1]

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

Write directly to each file. Use specific values, not examples or placeholders.`
      },
      {
        title: 'Validate the Docs',
        description: 'Ask Claude to review what it wrote and identify anything vague, missing, or assumed. Fix any issues before moving to the build phase.',
        prompt: `Review all the docs you just wrote:

1. Identify anything vague or ambiguous
2. Identify missing information that would block coding
3. Identify assumptions you made that I didn't confirm

List issues so I can clarify.`
      }
    ]
  },
  {
    number: 3,
    title: 'Design',
    icon: Package,
    steps: [
      {
        title: 'Add Reference Screenshots',
        description: 'Drop any inspiration images, screenshots of apps you like, or mockups into the design folder. These help Claude understand your visual goals.',
        dragDrop: {
          from: 'Screenshots & Mockups',
          to: '02-design/references/',
          description: 'Drag inspiration images into the references folder'
        }
      },
      {
        title: 'Review Your Design System',
        description: 'Open FRONTEND_GUIDELINES.md and verify the colors, fonts, and spacing feel right. This is your design system — every component will follow these rules.',
        prompt: `Read 01-docs/FRONTEND_GUIDELINES.md.

Show me a summary of:
1. The color palette with hex codes
2. The typography scale
3. The spacing values
4. The border radius values

Does this match my vision? If not, I'll tell you what to change.`
      }
    ]
  },
  {
    number: 4,
    title: 'Build',
    icon: Terminal,
    steps: [
      {
        title: 'Start Coding',
        description: 'Begin building from step 1.1 in your implementation plan. Claude will create files in the correct locations following your guidelines.',
        prompt: `Read CLAUDE.md and progress.txt first.

We're building [PROJECT NAME].
Start from step 1.1 in IMPLEMENTATION_PLAN.md.

Before writing code, confirm you understand:
1. What we're building
2. Where it goes in the file structure
3. What design tokens to use
4. What the success state looks like`
      },
      {
        title: 'Resume Sessions',
        description: 'When you come back after a break, use this prompt to pick up where you left off. Claude reads progress.txt to remember context.',
        prompt: `Read CLAUDE.md and progress.txt.

Continue from where we left off. Check IMPLEMENTATION_PLAN.md for next steps.
Update progress.txt when tasks complete.`
      },
      {
        title: 'Debug Issues',
        description: 'When something breaks, don\'t let Claude guess. Use this prompt to force systematic debugging.',
        prompt: `Something's broken. Before guessing at fixes:

1. Read the relevant section of [WHICH DOC]
2. Check progress.txt for recent changes
3. Explain what SHOULD happen based on the docs
4. Explain what IS happening
5. Identify the gap between expected and actual behavior
6. Propose a specific fix with reasoning

Don't shotgun solutions. Diagnose first.`
      },
      {
        title: 'Feature Complete Check',
        description: 'After finishing each feature, verify it matches your docs before moving on.',
        prompt: `We just completed [FEATURE NAME].

Before moving on:
1. Does it match the requirements in PRD.md?
2. Does the flow match APP_FLOW.md?
3. Does the styling match FRONTEND_GUIDELINES.md?
4. Does the data handling match BACKEND_STRUCTURE.md?
5. Update progress.txt with what was built
6. What's the next step in IMPLEMENTATION_PLAN.md?`
      }
    ]
  },
  {
    number: 5,
    title: 'Assets',
    icon: FolderOpen,
    steps: [
      {
        title: 'Add Your Logo',
        description: 'Drop your logo files into the assets folder. Include different sizes if you have them (favicon, app icon, full logo).',
        dragDrop: {
          from: 'Logo Files',
          to: '04-assets/images/logo/',
          description: 'Add your logo in various sizes'
        }
      },
      {
        title: 'Add Icons & Photos',
        description: 'Any custom icons, illustrations, or photos go in their respective folders in 04-assets.',
        dragDrop: {
          from: 'Images & Icons',
          to: '04-assets/images/',
          description: 'Organize assets into icons/, photos/, and exports/ folders'
        }
      },
      {
        title: 'Add Custom Fonts',
        description: 'If using custom fonts (not Google Fonts), add the font files here and reference them in your FRONTEND_GUIDELINES.md.',
        dragDrop: {
          from: 'Font Files (.woff, .woff2)',
          to: '04-assets/fonts/',
          description: 'Add any custom font files'
        }
      }
    ]
  },
  {
    number: 6,
    title: 'Ship',
    icon: Rocket,
    steps: [
      {
        title: 'Test All User Flows',
        description: 'Go through every flow in APP_FLOW.md and verify it works as documented. Check success states, error states, and edge cases.',
        prompt: `Read 01-docs/APP_FLOW.md.

For each user flow listed:
1. Walk me through testing it
2. What should I see at each step?
3. What are the potential failure points?
4. What edge cases should I test?`
      },
      {
        title: 'Verify Responsive Design',
        description: 'Test your app at mobile (375px), tablet (768px), and desktop (1280px) widths. Everything should look intentional at every size.',
      },
      {
        title: 'Review Against PRD',
        description: 'Compare your finished app against the original requirements. Every feature in scope should be complete.',
        prompt: `Read 01-docs/PRD.md.

Compare what we built against:
1. All features listed - are they complete?
2. Success criteria - do we meet them?
3. Scope boundaries - did we stay in scope?

List any gaps.`
      },
      {
        title: 'Deploy!',
        description: 'Push your code and deploy. Celebrate. You built an app with vibes.',
      }
    ]
  }
];
