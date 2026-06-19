# Contributing to Yggdrasil

First: thank you. Yggdrasil exists because people who know things write them down for people who don't yet. Every contribution — a fixed typo, a better analogy, a new lesson, a cleaner exercise — makes the curriculum better for everyone who comes after you.

This document explains how to contribute effectively. Read it before opening a PR.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Before You Start](#before-you-start)
- [Development Setup](#development-setup)
- [Contribution Types](#contribution-types)
  - [Fixing Errors](#fixing-errors)
  - [Improving Existing Lessons](#improving-existing-lessons)
  - [Writing New Lessons](#writing-new-lessons)
  - [Adding Projects](#adding-projects)
  - [Translations](#translations)
- [Style Guide](#style-guide)
- [Review Process](#review-process)
- [Community Standards](#community-standards)

---

## Ways to Contribute

| Type | Effort | What to Do |
|------|--------|------------|
| Fix a typo or broken link | 2 minutes | Open a PR directly |
| Clarify confusing explanation | 15–30 min | Open a PR with the change |
| Report a technical error | 5 min | Open an Issue with `bug` label |
| Improve an existing lesson | 1–3 hours | Discuss in Issues first, then PR |
| Add a new lesson | 4–10 hours | Open an Issue first to align scope |
| Add a new project | 2–5 hours | Open an Issue first |
| Add a translation | Variable | Open an Issue, coordinate with maintainers |
| Suggest a resource | 5 min | Open a Discussion |

---

## Before You Start

1. **Search first.** Check [open Issues](https://github.com/GrantW4/yggdrasil/issues) and [open PRs](https://github.com/GrantW4/yggdrasil/pulls) before starting work. Someone may already be doing it.

2. **For anything larger than a typo fix:** open an Issue describing what you want to change and why before writing code or prose. This saves both of us time if the change isn't the right fit.

3. **For new lessons:** post in [GitHub Discussions](https://github.com/GrantW4/yggdrasil/discussions) under "Curriculum Proposals" first. New lessons need to fit the curriculum's scope and sequence — alignment up front avoids rewrite requests later.

---

## Development Setup

```bash
# Fork the repo, then clone your fork
git clone https://github.com/YOUR_USERNAME/yggdrasil.git
cd yggdrasil

# Install Node.js dependencies (for Docusaurus)
npm install

# Run the docs site locally
npm run start

# Run curriculum validation
pip install -r scripts/requirements.txt
python scripts/validate-lessons.py
```

You do not need Node.js to contribute markdown content only — it's just needed if you're working on the Docusaurus website.

---

## Contribution Types

### Fixing Errors

Technical errors (wrong math, broken code, incorrect statements) are the highest-priority contributions. If you find one:

1. Open an Issue labeled `bug` describing the error and what the correct version should be
2. Link to the source (paper, documentation) that confirms the correct answer
3. Submit a PR with the fix

For code errors, include a minimal test that demonstrates the bug and passes with your fix.

---

### Improving Existing Lessons

Good improvements include:
- Better analogies or explanations for confusing concepts
- Additional worked examples
- Clearer exercise prompts
- Better curated resources (higher quality, more current, or more accessible)
- Removing content that is outdated or redundant

Before improving an explanation, consider: *does this change make the concept clearer for someone encountering it for the first time?* That is the only test that matters.

---

### Writing New Lessons

New lessons must:

1. **Fit the curriculum sequence.** Every lesson should build on what came before and prepare for what comes after. Explain in your Issue where it fits and why.

2. **Follow the lesson template.** Use [`templates/lesson-template.md`](templates/lesson-template.md) exactly. Do not skip sections.

3. **Include all required components:**
   - Learning objectives (specific, measurable)
   - Background "why" section
   - Core concepts with mathematical formulation where applicable
   - Intuition check questions
   - Working code implementation
   - At least 3 exercises (easy / medium / challenge)
   - Common mistakes section
   - A quiz (use [`templates/quiz-template.md`](templates/quiz-template.md))

4. **Be technically correct.** All code must run. All math must be correct. All statements must be verifiable. Cite your sources.

5. **Be original.** Do not copy text from other sources. Paraphrase and cite. Do not reproduce copyrighted material.

---

### Adding Projects

Projects are the hands-on capstones of each module. A good project:

- Is achievable in the estimated time by a learner who has completed the module
- Produces a tangible artifact (a working model, a benchmark report, a visualization)
- Has clear, unambiguous requirements with a verifiable checklist
- Teaches something the lessons alone couldn't

Follow [`templates/phase-capstone-template.md`](templates/phase-capstone-template.md) as a structural guide.

---

### Translations

We welcome translations of the curriculum into other languages. Before starting:

1. Open an Issue to claim the language — we'll create a `translations/[lang-code]/` directory
2. Coordinate with any existing translators for that language
3. Translate content faithfully — do not add or remove content, only translate
4. Technical terms should remain in English with a parenthetical translation on first use

---

## Style Guide

### Voice and Tone

- **Direct.** Say what you mean. No passive voice where active works.
- **Precise.** Define every term you introduce. Never use jargon without explanation.
- **Encouraging without being patronizing.** Difficulty is real. Acknowledge it. Don't sugarcoat it. Don't amplify it.
- **Second person.** Write "you" not "the student" or "the learner."

### Markdown

- One blank line between sections
- Code blocks use fenced triple-backtick with language specified: ` ```python `
- Math uses LaTeX in `$$` blocks for display math, `$...$` for inline
- Tables for structured comparison data
- No HTML unless absolutely necessary

### Code

- Python 3.11+
- [Black](https://github.com/psf/black) formatting (88 char line length)
- Type hints on all function signatures
- Docstrings on all public functions
- No external dependencies in lesson code unless the lesson is specifically about that library

### Math

- Always introduce notation in words before using symbols
- Every variable must be defined on first use
- Show the derivation, not just the result
- Use LaTeX: `$$\mathbf{w} = (X^T X)^{-1} X^T \mathbf{y}$$`

---

## Review Process

All PRs go through review by at least one maintainer. Here's what to expect:

1. **Automated checks run first** (CI validates lesson structure and code)
2. **A maintainer reviews within 7 days** for bug fixes, 14 days for new content
3. **You may receive change requests** — this is normal and not a rejection
4. **Once approved, a maintainer merges** — contributors do not merge their own PRs

**What reviewers look for:**
- Technical correctness (the most important thing)
- Adherence to the lesson template
- Writing quality (clarity, tone, precision)
- Code that actually runs
- Exercises that are genuinely instructive, not just busywork

**What reviewers do not expect:**
- Perfect prose on the first draft
- Complete coverage of every edge case
- Flawless English (non-native speakers are very welcome)

---

## Community Standards

Yggdrasil follows a simple code of conduct:

1. **Be technically honest.** If you're not sure, say so. Don't teach confidently what you don't know.
2. **Be kind to beginners.** You were one. The question that seems obvious to you was once hard.
3. **Argue about ideas, not people.** Disagreements about curriculum content are welcome and healthy. Personal attacks are not.
4. **Give credit.** If you adapt someone else's explanation or example, attribute it.

Violations of these standards will result in removal from the project. There are no warnings for egregious behavior.

---

## Questions?

- **Quick questions:** [Discord #contributing](https://discord.gg/yggdrasil)
- **Curriculum proposals:** [GitHub Discussions](https://github.com/GrantW4/yggdrasil/discussions)
- **Bug reports:** [GitHub Issues](https://github.com/GrantW4/yggdrasil/issues)

Thank you for making Yggdrasil better.
