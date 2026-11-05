# From Vibe Coding to Agentic Engineering

Coding is the canary domain for agents: rich training data, fast verifiers (compilers, tests, types, CI), and developers willing to change tools. Sequoia conversations with Andrej Karpathy, Anthropic’s Boris Cherny, OpenAI’s Greg Brockman, and Factory’s Matan Grinberg describe the same arc from different angles—from autocomplete novelty to **agentic engineering**, the discipline of coordinating fallible agents so they ship faster *without* dropping the professional quality bar.

## Definition: vibe coding vs. agentic engineering

Karpathy coined **vibe coding** for the moment when you stop micromanaging completions and start trusting a coherent agentic workflow to fill in large stretches of a codebase. In his framing, vibe coding **raises the floor**: more people can build software, and side projects multiply because the cost of attempting something collapses.

**Agentic engineering** is the complementary discipline. It is not “let the model cook.” It is preserving—and then extrapolating—the quality bar of professional software while agents do more of the typing. You are still responsible for vulnerabilities, design coherence, and whether the system does what the business meant. Agents are “spiky”: powerful, stochastic, sometimes brilliant, sometimes wrong. The engineering problem is how you coordinate them.

That distinction matters commercially. Teams that only raise the floor ship prototypes. Teams that practice agentic engineering ship systems they can operate, audit, and evolve.

## Mechanism: what actually changed

Three technical shifts made the transition feel discontinuous rather than incremental.

**Longer coherent horizons.** Earlier tools were good at chunks—functions, refactors, local edits—and still needed constant human glue. Karpathy dates a sharper change to late-year agentic workflows that could stay on a task long enough to feel like a coworker, not a completion engine.

**Harnesses as the product surface.** Cherny’s Claude Code story is extreme but instructive: pick languages and frameworks that are “on distribution” for the model, then let the model write essentially all of the code. His personal setup pushes further—multiple sessions, nested sub-agents, and scheduled **loops** (cron-like jobs) that babysit PRs, heal flaky CI, and cluster feedback. The mechanism is not a single prompt; it is a runtime that schedules work, recovers, and keeps the factory moving while humans sleep.

**Verification moves into the loop.** Agents that can run shells, tests, and browsers close the feedback cycle that used to require a human after every guess. Factory’s Matan Grinberg emphasizes harness details that look boring until you operate at scale: caching economics, behavior under context compaction, and how tools validate work in the environment. A model-agnostic harness, in his view, avoids overfitting to one lab’s quirks—useful when the frontier model of the month keeps changing.

Cherny’s claim that “coding is solved” is best read as a *local* claim: for codebases and languages on-distribution for current models, the marginal cost of generating working code collapsed. He is explicit that huge, weird, off-distribution systems are still hard—and that waiting for the next model is often the real roadmap. Product value therefore migrates to orchestration, verification, problem selection, and review.

## Practice: what builders actually own

If agents write the diffs, humans own a different stack:

1. **Intent and constraints.** Specs, acceptance criteria, non-goals, security boundaries, and “what must never regress.”
2. **Architecture and taste.** Karpathy’s examples are vivid: agents invent awkward account/email dualities; humans still decide identity models, aesthetics, and which tradeoffs are allowed.
3. **Eval loops.** Tests, types, canaries, replayable trajectories, and metrics for escaped defects—not vibes about “the PR looks good.”
4. **Attention allocation.** Brockman generalizes beyond code: once doing is cheap, **human attention**—is this good, wanted, aligned with values and policy?—becomes scarce. Products should conserve and route attention (escalation vs. auto-approve), not only burn tokens.

Grinberg’s “dark factory” prediction sharpens the ops picture: a large share of coding tokens may eventually run asynchronously—software building itself off the critical path of a human sitting in an IDE—while CIOs start justifying tokens the way they justify headcount. That only works if asynchronous work is instrumented: ownership, provenance, rollback, and cost controls. Enterprise adoption often passes through messy phases (encourage usage → measure usage in perf → cost rationalization). Designing for phase three early beats discovering token bills after culture mandates “use AI for everything.”

## Failure modes

- **Vibe coding in production.** Raising the floor without a quality bar introduces vulnerabilities and unmaintainable glue.
- **Puzzle hiring for an agentic job.** Karpathy notes that LeetCode-shaped screens miss the skill that matters: take a large project and drive agents to a finished, good system.
- **Harness theater.** Claiming a magical harness without metrics on compaction, tool validation, recovery, and cross-model robustness.
- **Attention bankruptcy.** Generating more PRs than anyone can responsibly review; missing governance for derived artifacts when permissions change upstream (Brockman’s knowledge-base example).
- **Synchronous-only workflows.** Forcing every agent turn through a human in the loop when the work is babysitting CI—or the opposite error: fully async with no owner when judgment is required.
- **Model lock-in without an exit.** Betting the business on one lab’s UX while the frontier rotates; Grinberg argues modular, model-agnostic systems are the enterprise hedge.

### Practice checklist

- Treat tests, types, and CI as agent fuel—invest before you scale agent concurrency
- Write executable specs (acceptance tests, invariants) agents can chase without guessing intent
- Make review first-class: diffs with citations, replay, and clear escalate-vs-auto-approve paths
- Track escaped defects from agent-authored changes as a core quality metric, not a footnote
- Prefer harness behaviors you can measure (recovery, compaction, tool success) over lore
- Hire and promote for large-project agent orchestration, not only solo puzzle speed
- Budget human attention: design products that allocate scarce review, not only generate output
- Plan for asynchronous “dark factory” work with ownership, cost controls, and rollback

### Sources

- [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs)
- [Anthropic's Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)
- [OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck](https://www.youtube.com/watch?v=bBS93A0BeNI)
- [Factory's Matan Grinberg: The Coming ‘Dark Factory’ Where Software Builds Itself](https://www.youtube.com/watch?v=ZesOukBjPmI)
