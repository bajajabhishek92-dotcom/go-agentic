---
title: Three Quarters to AGI—and What Still Blocks the Last Mile
slug: a-path-to-agi
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Science, Frontier & Interpretability
cluster_id: science-frontier
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/science-frontier
keywords:
- world-models
- path-to-agi-last-mile
- continual-learning
- sequoia
- science-frontier
- cluster-science-frontier
- corpus-sequoia-ai-knowledge
- article
- agi
- three
- still
- quarters
- mile
- last
summary: 'Demis Hassabis’s Sequoia conversation is notable for calibrated optimism: AGI as a multi-decade mission that, in his telling, has stayed roughly on the schedule DeepMind sketched around 2010—and for which he still names roughly 2030 as a distribution year. The useful teaching…'
related:
- Continual Learning
- Path to AGI (Last Mile)
- World Models
path: sequoia/path-to-agi.md
---

# Three Quarters to AGI—and What Still Blocks the Last Mile

Demis Hassabis’s Sequoia conversation is notable for calibrated optimism: AGI as a multi-decade mission that, in his telling, has stayed roughly on the schedule DeepMind sketched around 2010—and for which he still names roughly **2030** as a distribution year. The useful teaching point is not a scoreboard percentage. It is that remaining gaps are **conceptual and architectural**, not only “buy more GPUs.” Across Hassabis, David Silver’s “superlearner” bet, and Pushmeet Kohli’s AI-for-science stack, a shared picture emerges of what “mostly there” means—and what still breaks when builders treat today’s chatbots as finished AGI.

## Define the destination before counting progress

**AGI**, in these talks, is not “a very good assistant.” Hassabis’s original DeepMind framing was blunt: *solve intelligence, then use it to solve everything else*. That implies a system that can generate and test knowledge in the world—science, medicine, simulation—not only regurgitate text. Silver sharpens the same idea as a **superlearner**: an agent with depth (start from knowing nothing and discover far beyond human priors) and breadth (drop into any stream of experience—simulated, digital, or physical—and keep learning).

That definition matters for product strategy. If AGI means open-ended discovery from experience, then LLM fine-tunes on human data are a powerful *phase*, not the end state. Silver’s critique of today’s labs is precise: much “scientific discovery” still has heavy human-in-the-loop scaffolding; embodied and non-linguistic domains (plasma control, radio towers, robot arms) may not even fit a language-first paradigm. Counting progress against the wrong destination produces false confidence.

## Mechanisms that got us “this far”

Several phase changes explain why the field feels close:

1. **Deep learning + reinforcement learning at scale.** Hassabis describes DeepMind’s early bet as combining two then-siloed academic traditions, plus accelerated compute—ideas that looked sci-fi when expert systems still dominated MIT and Cambridge. Games (Go, chess) were the proving ground because they offered perfect simulators and clear reward.
2. **Removing human priors where they limit discovery.** Silver’s AlphaZero lineage is the teaching example: once human game data is set aside, the agent can shoot past human style and keep climbing an open-ended learning curve. The same logic argues against forever breadcrumb-trailing RL toward hand-specified “science” objectives.
3. **Foundation models + harnesses for science.** Kohli’s FunSearch / AlphaEvolve pattern pairs generative models with **evaluators**—programmatic judges that distinguish hallucination from insight. AlphaFold showed classical neural nets can approximate problems once thought to require quantum modeling; AlphaEvolve shows LLMs plus evolutionary search can improve decades-old algorithms when a trusted scoring function exists.
4. **World models and simulators.** Hassabis emphasizes learned simulators (weather, virtual cells) as the bridge from AI-as-tool to new sciences of emergent systems—economics, biology—where controlled experiments are otherwise impossible.

None of these mechanisms alone is AGI. Together they explain why coding and math feel transformed while robotics and open-world science still feel hard.

## What still blocks the last mile

**Continual learning / age of experience.** Static pretraining on a frozen corpus is not the same as a system that discovers forever. Silver’s “crucibles”—environments rich enough for intelligence to emerge from simple objectives—are still research, not commodity product infrastructure. Without experience loops, models remain brittle when the world changes: new tools, new codebases, new events.

**Verifiers and data scarcity outside search/code.** Kohli is explicit: AlphaEvolve-class systems work *wherever you can find a trustworthy function evaluator*. Domains without cheap, objective evals (messy enterprise judgment, much of wet-lab biology until digital–physical validation closes) do not automatically inherit coding-level progress.

**Agency vs. tool.** Hassabis recommends building an extremely capable *tool* first, then carefully crossing into questions of autonomous agency and consciousness. Builders who skip that order—shipping unbounded agents into production without audit, scope, or evals—confuse demo autonomy with reliable agency.

**Transfer from lab RL to messy deployment.** Related talks (e.g. Core Automation’s founders) stress a structural tension: models trained in the lab, deployed in the real world. Scaling RL inside a clean environment does not automatically transfer. That gap is part of the “last mile,” even if base models keep improving.

## Failure modes for builders

- **Capability freezing.** Roadmaps that assume today’s model ceiling for three years will under-build abstraction layers that absorb new generations.
- **Domain wishful thinking.** Treating every vertical as “one fine-tune from coding performance” ignores missing verifiers and experience data.
- **Human-prior lock-in.** Over-weighting imitation of expert traces can cap discovery; sometimes you need environments and rewards that allow surprise.
- **Evaluator theater.** Fancy agents without trusted scoring functions produce confident nonsense at scale.
- **Science theater.** Claiming “AI scientist” without closed-loop experiment design (digital proposal → evaluator → optional wet-lab validation) is branding, not mechanism.

## Builder practices

Prefer architectures that **swap models** without rewriting workflows. Invest in domains where you can create **experience loops and verifiers**—unit tests, binders, simulations, human expert raters at known cost. Treat science and robotics products as verifier-and-data problems first. Plan for continual learning: capture production traces, allow controlled on-policy improvement, and expect re-training when tools change. Use frontier models as tools inside harnesses; do not wait for a mythical single AGI checkpoint before shipping narrow, measurable autonomy.

### Practice checklist

- Write down your AGI-relevant definition (tool vs. superlearner vs. chat quality) so roadmap debates stay honest
- List which product surfaces have trusted evaluators today—and which are aspirational
- Design for model churn: routing, eval harnesses, and prompt/tool contracts that survive new releases
- Prefer problems where agents can act, observe, and be scored without a human on every step
- Separate demo agency (long tool traces) from production agency (scoped permissions, logs, rollback)
- Budget for environment/crucible engineering, not only inference spend
- When claiming scientific AI, specify the digital→physical validation loop

### Sources

- [Demis Hassabis: We're Three Quarters of the Way to AGI](https://www.youtube.com/watch?v=AFpeWo1GTeg)
- [David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience](https://www.youtube.com/watch?v=L4SWQebqhek)
- [DeepMind's Pushmeet Kohli on AI's Scientific Revolution](https://www.youtube.com/watch?v=6J7d4_yvqcg)
