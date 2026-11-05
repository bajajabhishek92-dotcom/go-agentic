---
title: 'Data Efficiency: The Bottleneck After Search and Code'
slug: a-data-efficiency
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
- data-efficiency-bottleneck
- continual-learning
- sequoia
- training-data
- cluster-training-data
- corpus-sequoia-ai-knowledge
- article
- data
- efficiency
- search
- bottleneck
- code
- after
- only
summary: LLMs look magical at search and coding because those domains are drowning in data (and synthetic
  data). Most of the economy is not. Flapping Airplanes’ thesis is that **data efficiency**—getting coding-level
related:
- Continual Learning
- Data Efficiency Bottleneck
path: sequoia/data-efficiency.md
---

# Data Efficiency: The Bottleneck After Search and Code

LLMs look magical at search and coding because those domains are drowning in data (and synthetic data). Most of the economy is not. Flapping Airplanes’ thesis is that **data efficiency**—getting coding-level capability with orders of magnitude less data—will decide who can participate in AI.

## Why data, not only compute, is the constraint

Compute markets are comparatively homogeneous; you can buy FLOPS. Frontier-quality data is fragmented across businesses, regulations, and long-tail tasks. Collecting it means contracts, compliance, and painful integration. If a model were 1,000× more data-efficient, deployment into the long tail (robotics, trading, science, “toaster supply chains”) becomes correspondingly easier.

There is also a competition argument: if data is the top-cited moat, then data efficiency is what democratizes training beyond a few centralized labs.

## Systems unlock algorithms

Their technical bet is co-design: many promising learning algorithms are hard to express in today’s frameworks (PyTorch’s single-threaded programming model over parallel hardware). By building lower-level GPU virtual-machine style systems—fine-grained, hogwild, deeply pipelined loops—you unlock algorithms that current stacks make asymptotically awkward. History of ML is partly a history of new hardware primitives, not only new chips.

### Practice checklist

- Separate “data-rich” product lines from “data-poor” ones; strategy differs
- Invest in synthetic data only where verifiers exist
- Watch framework lock-in: your training stack may be hiding algorithmic options
- Treat data contracts and rights as core ML infrastructure

### Sources

- [Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher Spector](https://www.youtube.com/watch?v=ZBpY7MEra9w)
