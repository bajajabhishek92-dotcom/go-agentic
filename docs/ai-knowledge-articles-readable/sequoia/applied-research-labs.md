---
title: Applied Research Labs Inside Product Companies
slug: a-applied-research-labs
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
- own-your-weights
- applied-research-labs
- agent-evaluation
- sequoia
- science-frontier
- cluster-science-frontier
- corpus-sequoia-ai-knowledge
- article
- research
- labs
- product
- companies
- applied
- inside
summary: 'Harvey’s Gabe Pereyra frames the problem without romance: competing with frontier labs from the application layer is an unfair game—they have more money, talent, compute, and data. The alternative title of his talk is blunt—*building a research lab on a budget*. The broader…'
related:
- Agent Evaluation
- Applied Research Labs
- Own Your Weights
path: sequoia/applied-research-labs.md
---

# Applied Research Labs Inside Product Companies

Harvey’s Gabe Pereyra frames the problem without romance: competing with frontier labs from the application layer is an unfair game—they have more money, talent, compute, and data. The alternative title of his talk is blunt—*building a research lab on a budget*. The broader Sequoia pattern is that **application companies are becoming research orgs** because domain intelligence is the moat, and generic frontier models will not specialize themselves into professional workflows. Jerry Tworek and Rohan Anil’s Core Automation discussion adds a caution from the AGI-lab side: scaling RL in the lab does not automatically transfer to messy deployment. Chai Discovery’s “bitter lesson” for drug design rhymes from science: treat the workflow as a scaling problem with the right learning setup, not only as artisan craft.

## What an applied research lab is (and is not)

An **applied research lab** inside a product company is a team that produces *model behavior and evaluation assets* for a vertical—not a miniature OpenAI pretraining cluster. Its outputs are typically:

- **Domain benchmarks** that public leaderboards miss (legal diligence unit tests, binder assays, security win-rates)
- **Post-training recipes** and tool-use policies for professional workflows
- **Data engines** from production traces and expert-guided synthetic data
- Tight pairing of researchers with product, GTM, and customer reality

It is *not* recreating full pretraining. Pereyra’s playbook starts from the frontier ecosystem: use foundation models as a substrate, then out-specialize labs on the vertical they cannot see.

## Mechanism: how a budget lab competes

**1. Benchmarks before training.** Without a good benchmark you cannot train; without training you cannot claim frontier intelligence in-domain. Harvey’s diligence example: large suites of unit-test-like checks that turn fuzzy legal work into scoreable tasks. Evals are product infrastructure, not a research side quest.

**2. Domain experts as data directors.** Privileged customer data often cannot enter generic models—or even the vendor’s own weights. What started working for Harvey: lawyers guiding coding models to generate realistic synthetic datasets for training *and* evaluation—analogous to engineers “vibe coding” rather than hand-writing every line. Synthetic data is a bootstrap, then scaled with partners; it is not a substitute for real traces forever.

**3. Efficient RL environments.** As datasets grow, evaluation cost explodes. The applied lab’s systems work is turning tasks into environments the model can practice cheaply—exactly the same shape as frontier RL, but scoped to vertical verifiers.

**4. Post-training with neo-labs, serve in production.** Partner for weight updates you cannot afford alone; own serving, tool wiring, permissions, and product UX. The moat is the loop: production → data → eval → post-train → production.

**5. Scientific scaling where verifiers exist.** Chai’s bitter-lesson bet: scale data, models, and compute so the model learns what hand-built chemistry pipelines miss. Reported results in their talk—moving de novo antibody design hit rates from a sub-0.1% regime toward much higher rates—illustrate why applied science labs obsess over measurable design loops, not slideware “AI drug discovery.”

## Why labs that own real environments win

Tworek’s disappointment with “train in the lab, deploy in the world” is a structural lesson for application companies. Transformers carried workflow automation extraordinarily far; the next failures appear when the world shifts—new tools, codebases, relationships, events—and offline corpora go stale. An applied lab sitting on live customer environments, permissions, and outcome metrics has a **transfer advantage** frontier generalists lack. The risk flips: without research discipline, that same production access becomes anecdotal fine-tuning and eval theater.

## Failure modes

- **Fake lab, real burn.** Hiring a few PhD titles without benchmarks, data contracts, or production hooks.
- **Competing on pay packages alone.** Pereyra calls early researcher-poaching against Anthropic-scale offers a mistake; domain experts who will touch customers and pipelines often unlock more than a single frontier researcher who never sees a workflow.
- **Leaderboard cosplay.** Optimizing public exams that lawyers/doctors/chemists do not actually perform.
- **Synthetic-only complacency.** Synthetic sets start the flywheel; without production feedback they drift.
- **Lab–deploy split.** Beautiful RL in simulation that never meets identity, audit, and latency constraints.
- **Artisan refusal to scale.** In science especially, hand-crafted features that do not benefit from more data/compute lose to bitter-lesson setups *when* you have the right learning problem.

## Practices that work

Fund evals like reliability engineering. Hire hybrid profiles: researchers willing to sit with customers, and domain experts willing to steer models. Prefer problems with verifiers (tests, binders, win-rates, cycle time). Publish enough method to recruit; keep the data engine and proprietary evals closed. Use frontier APIs and neo-lab partners for undifferentiated training muscle; spend internal research on what only you can score.

### Practice checklist

- Ship a vertical benchmark before a custom training run
- Instrument production for traces you are legally allowed to learn from
- Pair every researcher with a domain owner and a clear verifier
- Budget eval compute explicitly—it grows with dataset ambition
- Decide what you post-train vs. what you prompt/tool around a frontier base
- Recruit for contact with reality, not only paper prestige
- Publish selectively; treat the data engine as proprietary infrastructure
- Re-run transfer tests in real permissions/latency environments, not only offline scores

### Sources

- [How Harvey Built a Research Lab on a Budget | Gabe Pereyra](https://www.youtube.com/watch?v=MGouk8W51v0)
- [Building the Automated AGI Lab: Core Automation's Jerry Tworek and Rohan Anil](https://www.youtube.com/watch?v=2RJiaf0SY8s)
- [Chai Discovery's Bitter Lesson: Drug Design Is Another Scaling Problem](https://www.youtube.com/watch?v=wv53mDmY-k0)
