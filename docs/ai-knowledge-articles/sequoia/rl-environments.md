---

title: 'RL Environments: The Missing Dataset for Real Work'
slug: a-rl-environments
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Training, Learning & Data
cluster_id: training-data
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/training-data
keywords:
- rl-environments
- continual-learning
- sequoia
- training-data
- cluster-training-data
- corpus-sequoia-ai-knowledge
- article
- environments
- work
- real
- missing
- dataset
- you
- verifiers
summary: "Reinforcement learning for agents is no longer only a lab technique. In Sequoia talks with Mercor’s Brendan Foody and Prime Intellect’s Will Brown and Johannes Hagemann, the bottleneck has shifted from “can we do RL?” to can we build environments that look like the economy? Without those environments, post-training reinforces eloquence in chat—not completed work."
related:
- Continual Learning
- RL Environments
path: sequoia/rl-environments.md
---

# RL Environments: The Missing Dataset for Real Work

Reinforcement learning for agents is no longer only a lab technique. In Sequoia talks with Mercor’s Brendan Foody and Prime Intellect’s Will Brown and Johannes Hagemann, the bottleneck has shifted from “can we do RL?” to **can we build environments that look like the economy?** Without those environments, post-training reinforces eloquence in chat—not completed work.

## Definition: what an RL environment is

Foody’s teaching breakdown has three parts. An RL environment is not a single prompt file; it is a packaged world an agent can act in, with a way to score outcomes.

1. **Worlds** — the docs, sheets, messages, slides, data rooms, and project state of real work. Example: lawyers from top firms write scenarios from real matters and outline full data rooms so the agent faces something like a live deal—not a toy paragraph.
2. **Apps** — high-fidelity clones of tools people actually use (Salesforce, ServiceNow, Microsoft 365, and peers), reachable via MCP, CLI, or computer-use agents (CUA). If the agent cannot operate the software stack of the job, it is not learning the job.
3. **Tasks** — prompts plus **verifiers**. Verifiers may be rubrics or unit tests; the same artifact can power eval *or* training. The verifier is what turns “sounds right” into “done correctly.”

Frontier labs cannot automate “everything on a laptop” without covering the distribution of worlds, apps, and tasks across jobs. Foody points at the scale of that distribution—on the order of **hundreds of labor categories** (e.g., GDPval-style domain coverage across Bureau of Labor Statistics job structure)—each with its own software stack. Humans remain central to constructing it, often with models in the loop.

## Mechanism: why environments beat chat rubrics

Chat evals reward fluent answers. Environment evals reward **state change**: the ticket closed, the spreadsheet reconciled, the clause redlined against a rubric, the form submitted without schema errors.

Mercor’s published legal-environment results illustrate the mechanism with concrete post-training signal: on the order of **1,800 tasks** and about **$500K** in compute, they report large jumps on domain metrics (e.g., corporate law moving from **4.7% to 26.6%** on their reported slice), with generalization into related eval suites beyond the exact training rooms. The point for builders is not the leaderboard line—it is that **modest, domain-faithful environment data** can move agent competence when verifiers exist.

Prime Intellect’s “GitHub for RL environments” thesis is the ecosystem layer: share, version, and compose environments the way datasets and benchmarks standardized earlier ML eras. Their hub framing includes verifiable software-engineering environments, specialized domains (they cite examples spanning medical physics to cybersecurity), and tooling so researchers can train inside the same packaged worlds. A parallel product lesson: application companies increasingly need **product–model optimization loops**—Cursor-style post-training inside the real IDE environment—so institutional knowledge compounds in weights, not only in prompt lore.

## Why application companies should care

RL environments used to be lab infrastructure. Now they determine whether your agent learns *your* workflow or a generic demo. If you only eval on chat rubrics, you will overfit to eloquence. If you train and eval in environments with verifiers, you can reinforce completed work.

That is also a moat story. Foody’s “own your intelligence” context: labs buy enormous volumes of complex tasks (he mentions frontier labs purchasing on the order of **tens of thousands of tasks per month** in some cases), while application companies inherit the same stack to specialize models to their domain. Expert hours—lawyers, engineers, doctors, bankers designing scenarios and rubrics—are a first-class training cost, not an annotation footnote.

## Constraints and failure modes

- **Faithful app clones are expensive** (and legally delicate). Thin mocks teach thin skills.
- **Verifiers are hard for fuzzy knowledge work.** Easier for code, forms, and structured ops; for open-ended writing you need rubrics that experts actually agree on.
- **Expert-hour supply is its own industry.** Scaling environments means scaling scarce professionals who can author worlds and tasks.
- **Benchmaxing.** Once an environment is public, it risks leaking into training data and ceasing to measure what you think it measures—Prime Intellect and peers still need held-out and refreshed suites.
- **Env without train loop.** A beautiful simulator that never connects to your post-training pipeline is a museum exhibit.

### Practice checklist

- Write verifiers before prompts whenever possible—score finished work, not vibes
- Prefer environment-based evals for agent releases over chat-only rubrics
- Invest in a thin slice of *your* app world (real tools + real artifacts) before buying generic agent benchmarks
- Track expert hours as a first-class training cost beside GPU spend
- Version environments like code: changelog, fixtures, and regression suites when apps change
- Separate public leaderboard envs from private held-out envs to reduce benchmax leakage
- Close the loop: the same env should support eval today and RL/post-training tomorrow
- Start where verifiers are crisp (code, ops, structured documents), then extend to fuzzier domains with expert rubrics

### Sources

- [RL Environments Explained: How AI Agents Learn Real-World Work | Brendan Foody, Mercor](https://www.youtube.com/watch?v=a00xIn5kwhM)
- [Building the GitHub for RL Environments: Prime Intellect's Will Brown & Johannes Hagemann](https://www.youtube.com/watch?v=SJc1y5z5wwM)
