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
summary: Reinforcement learning for agents is no longer only a lab technique. The bottleneck has shifted
  from “can we do RL?” to **can we build environments that look like the economy?**
related:
- Continual Learning
- RL Environments
path: sequoia/rl-environments.md
---

# RL Environments: The Missing Dataset for Real Work

Reinforcement learning for agents is no longer only a lab technique. The bottleneck has shifted from “can we do RL?” to **can we build environments that look like the economy?**

## What an RL environment contains

Mercor’s Brendan Foody describes three parts:

1. **Worlds** — the docs, sheets, messages, and project state of real work
2. **Apps** — high-fidelity clones of tools people actually use (Salesforce, ServiceNow, M365…), reachable via MCP, CLI, or computer use
3. **Tasks** — prompts plus verifiers (rubrics, unit tests) usable for eval *or* training

Frontier labs cannot automate “everything on a laptop” without covering the distribution of worlds, apps, and tasks across jobs. That distribution is vast—think hundreds of labor categories, each with its own software stack—and humans remain central to constructing it, often with models in the loop.

## Why application companies should care

RL environments used to be lab infrastructure. Now they determine whether your agent learns *your* workflow or a generic demo. “GitHub for RL environments” style platforms (Prime Intellect and peers) point to a market for sharing, versioning, and composing environments—similar to how datasets and benchmarks standardized earlier ML eras.

If you only eval on chat rubrics, you will overfit to eloquence. If you train and eval in environments with verifiers, you can reinforce *completed work*.

## Constraints

- Building faithful app clones is expensive and legally delicate
- Verifiers are hard for fuzzy knowledge work; easier for code, forms, and structured ops
- Expert-hour supply (labeling, scenario design) is a scaling industry of its own

### Practice checklist

- Write verifiers before prompts whenever possible
- Prefer environment-based evals for agent releases
- Invest in a thin slice of *your* app world before buying generic agent benchmarks
- Track expert hours as a first-class training cost

### Sources

- [RL Environments Explained: How AI Agents Learn Real-World Work | Brendan Foody, Mercor](https://www.youtube.com/watch?v=a00xIn5kwhM)
- [Building the GitHub for RL Environments: Prime Intellect's Will Brown & Johannes Hagemann](https://www.youtube.com/watch?v=SJc1y5z5wwM)
