# Can AI Automate Knowledge Work? Epoch’s Own Stress Tests

Public benchmarks often reward clean, verifiable tasks. Knowledge organizations live on **judgment, taste, and follow-through**. Epoch’s automation reports ask models to do *Epoch’s* work—and separately ask whether agents can invent ML methods humans recently invented. Together with a parallelization-constraints essay, they form a three-layer teaching stack: job-shaped automation, research invention, and growth-theory bounds after invention scales.

## Automating Epoch: real tasks, employee standards

**Epoch Automation Reports** give frontier models (and open-weight peers) tasks drawn from internal work—graphic design in Epoch’s visual language, research design, analysis—with rich context, high reasoning settings, and **no mid-run coaching**. Humans grade against employee standards. That is a different bar than multiple-choice keys or unit-test SWE tasks.

Findings that generalize beyond one nonprofit:

- Frontier models (e.g. Claude Fable 5.1, GPT-6 Astra in Epoch’s write-up) handle **well-scoped** pieces reliably but fail **open-ended** parts that block full automation.
- Models miss **implicit norms**—audience, visual style, information density—even with reference material.
- They can propose research directions yet **mismeasure** what their experiments claim and over-trust flawed results.
- Open-ended tasks still produce **idea collapse**: many models converge on similar proposals.
- Open-weight systems lag further, including on tasks frontier models already clear.

The pedagogical move: pair systematic scoring with holistic failure modes that leaderboards miss. “Looks like research” is not the same as “would pass Epoch’s hiring bar.”

## Automating AI R&D: InnovationEval

**InnovationEval** asks agents to independently discover a **novel post-training (or related ML) technique** matching a recent human paper the agent has not seen—after spending substantial GPU budget. Early results: frontier agents make **little progress** toward human-comparable innovations despite thousands of dollars of compute.

That separates “can code ML experiments” from “can close the loop on *new* methods.” Related efforts (Crux, ResearchGym, RSI-Bench) are part of the same measurement agenda. Curriculum contrast: SWE-bench measures patching known issues; InnovationEval measures inventing the next method. Conflating them inflates automation forecasts.

## Even after R&D automation: parallelization bounds

A deeper growth-theory caution: doubling researchers does not automatically double the rate of idea discovery. Ideas are **nonrival**; duplicate work is waste. Epoch’s parallelization analysis argues standard singularity models assume **unbounded parallelizability** of R&D. If recombination and task-splitting technology lag, automated researcher explosions still produce takeoff—but **timing forecasts** that ignore parallelization constraints are incomplete.

Teach the sequence: (1) can models do today’s knowledge tasks? (2) can they invent tomorrow’s methods? (3) even if yes, how fast can discovery scale when parallelization is bounded?

## How to use these reports in class

- Assign one Epoch-style task with a human rubric; score models without mid-run hints.
- Separate “scoped competence” grades from “judgment / experiment design” failure notes.
- Debate whether idea collapse is a diversity problem, a training-data problem, or both.
- Map InnovationEval compute budgets onto opportunity cost: what else could that GPU buy?

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.


## What “employee standards” buy you

Grading against what Epoch would hire for forces evaluators to write down taste: density, audience, whether an experiment’s claim matches its measurement. That documentation is the real artifact. Without it, automation demos optimize for fluent slides. With it, you can tell whether a model failed because it lacked skills or because the organization never encoded its norms. Parallelization bounds then ask the next question: even a swarm of passing agents may rediscover the same idea unless recombination technology improves.

## Takeaways

- Measure automation on **job-shaped** tasks with human professional standards.
- Distinguish **scoped competence** from **judgment / experiment design**.
- Treat “AI automates AI research” as an **empirical program**, not a slogan.
- After automation, ask how **parallelizable** discovery really is.
- Idea collapse and implicit-norm failures are first-class metrics, not footnotes.

**Sources**

- [Can AI automate Epoch?](https://epoch.ai/publications/can-ai-automate-epoch)
- [Can AI automate AI R&D yet?](https://epoch.ai/publications/innovationeval)
- [Even after R&D is automated, parallelization constraints could delay a technological singularity](https://epoch.ai/publications/parallelization-constraints-could-delay-a-technological-singularity)
