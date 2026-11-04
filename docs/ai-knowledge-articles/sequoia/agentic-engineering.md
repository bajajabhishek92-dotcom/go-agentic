# From Vibe Coding to Agentic Engineering

Coding is the canary domain for agents: rich data, fast verifiers, and developers willing to change tools. Andrej Karpathy and Anthropic’s Boris Cherny describe a shift from autocomplete novelty to **agentic engineering**—systems that plan, edit, test, and recover across a codebase.

## What changed

- Models handle longer horizons and tool use (shell, tests, browsers)
- Harnesses like Claude Code made “dispatch a coding agent” a default workflow
- The bottleneck moves from typing syntax to specifying intent, constraints, and review

Cherny’s provocative claim that “coding is solved” is best read as: the marginal cost of generating working code collapsed for many tasks—so product value moves to orchestration, verification, and problem selection. Karpathy’s arc from “vibe coding” to disciplined agentic engineering emphasizes taste, architecture, and eval loops humans still own.

## Human attention is the new bottleneck

Greg Brockman’s Ascent talk generalizes the point beyond code: as agents accelerate production, **human attention**—review, prioritization, responsibility—becomes scarce. Design products that conserve and allocate attention, not only tokens.

### Practice checklist

- Invest in test suites and types; they are agent fuel
- Make review workflows first-class (diffs, citations, replay)
- Track escaped defects from agent PRs as a core quality metric
- Teach teams to write specs agents can execute

### Sources

- [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs)
- [Anthropic's Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)
- [OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck](https://www.youtube.com/watch?v=bBS93A0BeNI)
- [Factory's Matan Grinberg: The Coming ‘Dark Factory’ Where Software Builds Itself](https://www.youtube.com/watch?v=ZesOukBjPmI)
