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
summary: 'LLMs look magical at search and coding because those domains are drowning in data—and friendly to synthetic data. Most of the economy is not. Flapping Airplanes’ (Ben and Asher Spector) thesis is that data efficiency—getting coding-level capability with orders of magnitude…'
related:
- Continual Learning
- Data Efficiency Bottleneck
path: sequoia/data-efficiency.md
---

# Data Efficiency: The Bottleneck After Search and Code

LLMs look magical at search and coding because those domains are drowning in data—and friendly to synthetic data. Most of the economy is not. Flapping Airplanes’ (Ben and Asher Spector) thesis is that **data efficiency**—getting coding-level capability with orders of magnitude less data—will decide who can participate in AI beyond a few centralized labs. Compute gets cheaper on a familiar curve; frontier-quality data does not. If you only optimize FLOPS, you will hit a wall shaped like contracts, compliance, and the long tail of tasks.

## Define data efficiency

**Data efficiency** asks: can we reach valuable capabilities (the kind now seen in search and coding) with *much less* data—intuitively closer to how humans learn to code from far fewer examples than today’s models consume? The Spectors cite human learning gaps on the order of **10,000× to 100,000×** less data than current models for coding-like skill. Whether those exact factors hold in every domain is less important than the research target: capability per token of precious experience.

This is distinct from **sample efficiency** as a narrow academic metric and from **inference efficiency** (cheaper serving). It is an economic and competitive claim about training and adaptation under data scarcity.

## Why data—not only compute—is the binding constraint

**Homogeneous compute vs. fragmented data.** After GPT-scale models, labs could attempt to buy “all the compute.” There is no centralized data provider for the long tail. Collecting frontier-quality experience means negotiating with businesses, navigating regulation, and integrating painful operational systems. Data is getting cheaper in some senses, but not as fast or as uniformly as FLOPS.

**Data-rich islands vs. the broad economy.** Search roughly owns the public web; coding owns a large, synthetic-friendly slice of it. Robotics requires expensive generation and capture. Trading has finite market history. Scientific discovery often has precious little labeled signal—and unbounded upside. The memorable “toaster supply chain” line is not about appliances; it stands for **tens of thousands of under-resourced workflows** that compose real GDP. Those workflows will not wait for internet-scale corpora to appear spontaneously.

**Competition and participation.** In audience polls about AI moats, **data** is often the top answer. If that is true, data efficiency is what democratizes training: more companies can participate when models need less exclusive corpus. Without it, capability concentrates wherever distressed bookstores, rare libraries, and exclusive partnerships pile up—colorful examples from the talk of how hungry labs already scrape niches.

**Deployment multiplier.** Their economic claim is direct: a model that is on the order of **1,000× more data-efficient** would be correspondingly easier to deploy into scarce-data domains. Efficiency compounds into market access, not only into nicer loss curves.

## Mechanism: systems unlock algorithms

Flapping Airplanes’ technical bet is **co-design**: many promising learning algorithms are hard to express in today’s frameworks. PyTorch and peers intentionally synthesize a **single-threaded programming model** over massively parallel GPUs—write matmul, attention, norm in sequence; the runtime contorts underneath. That ease hides a smaller circle of algorithms that GPUs can actually run efficiently but frameworks make asymptotically awkward: fine-grained updates, hogwild-style parallelism, deeply pipelined loops.

Their approach lives in the gap between “what GPUs can do” and “what frameworks express.” Internally they describe a GPU **virtual-machine** style stack that takes over the device and implements workloads current graphs fight. History of ML, in their telling, is partly a history of **new primitives for interacting with hardware**—not only new chips. Mega-kernels and related low-level work are precedents; the claim is that algorithmic novelty often arrives when someone abuses existing silicon in newly expressible ways.

Builders need not copy that stack to take the lesson: **your training framework is a research prior.** Lock-in can hide the very algorithms that would buy data efficiency.

## Failure modes

- Treating every product line as if it had coding’s data density.
- Synthetic data without verifiers—mountains of plausible garbage.
- Assuming buying more GPUs substitutes for rights, contracts, and integration.
- Framework comfort that silently forbids the algorithms you need.
- Centralization complacency: betting the company on exclusive data without a path to efficiency if rivals catch the corpus.

## Builder practices

Separate **data-rich** and **data-poor** lines of business; strategy, eval design, and model choice differ. Invest in synthetic data only where automatic or expert verifiers exist. Treat data contracts, retention, and provenance as ML infrastructure equal to cluster ops. Watch for systems bottlenecks that force inefficient algorithms. Prefer learning setups that extract more signal per scarce real episode—especially in robotics, science, and vertical ops.

### Practice checklist

- Label each major use case data-rich vs. data-poor and write different roadmaps
- Before synthetic pipelines, define the verifier (tests, simulators, expert scores)
- Inventory legal rights to train on production traces; fix gaps before model work
- Prototype whether your training stack can express fine-grained / non-standard update patterns you care about
- Measure capability per unit of proprietary data, not only leaderboard score
- Avoid assuming search/code playbooks transfer to long-tail economy tasks
- Track whether moat stories depend on exclusive data—and what efficiency would do to that moat

### Sources

- [Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher Spector](https://www.youtube.com/watch?v=ZBpY7MEra9w)
