---
title: 'What Benchmarks Actually Measure: Disentangle the Signals'
slug: a-benchmark-signal-disentanglement
type: article
corpus: Hugging Face Blog
corpus_key: huggingface-blog
cluster: Trust, Evaluation & Decision Quality
cluster_id: trust-evals
tags:
- article
- corpus/huggingface-blog
- cluster/trust-evals
keywords:
- benchmark-signal-disentanglement
- agent-evaluation
- huggingface-blog
- trust-evals
- cluster-trust-evals
- corpus-huggingface-blog
- article
- benchmarks
- reasoning
- safety
- measure
- actually
- signals
- items
summary: A leaderboard number is a blend. BBQ may be filed under “safety” while many items lean on **general
  reasoning**. HarmBench mixes phishing-style compliance with copyright prompts that track reasoning more
  than
related:
- Agent Evaluation
- Benchmark Signal Disentanglement
path: extra/huggingface-blog/benchmark-signal-disentanglement.md
---

# What Benchmarks Actually Measure: Disentangle the Signals

A leaderboard number is a blend. BBQ may be filed under “safety” while many items lean on **general reasoning**. HarmBench mixes phishing-style compliance with copyright prompts that track reasoning more than refusal. Averaging them into one score hides what you are selecting for.

## BenchMIRT in one paragraph

AllenAI’s **BenchMIRT** applies multidimensional Item Response Theory to LLM eval results: estimate each model’s ability along latent dimensions and each question’s difficulty/discrimination. Trained on ~100 LLMs × 16 benchmarks × 34K+ questions (reasoning suite + Olmo 3 safety suite) **without** being told which benchmarks measure what, it repeatedly recovered two dominant dimensions: **safety** and **general reasoning**.

Findings that change how you read cards:

- BBQ aligned more with reasoning than with safety-style behavior.
- WMDP (dangerous dual-use knowledge) tracked reasoning, with higher reasoning associated with **lower** WMDP scores when refusal/failure counts as success.
- Within HarmBench, standard/contextual harmful requests tracked safety; copyright items tracked reasoning.

## Efficiency and prediction

Ranking questions by how well they discriminate ability, keeping ~10% of items often preserved nearly the same model ordering on the underlying capability; 50% was even closer. BenchMIRT predicted held-out item correctness ~79% vs ~70% for “assume overall benchmark average.” Use that to shrink expensive evals—while remembering the dual-use risk: the same tooling could drop the hardest safety items to game a score.

## Reproducible reporting (EvalEval)

Separately, **EvalEval** / Every Eval Ever pushes a shared schema and Evaluation Cards so results include enough metadata to interpret and reproduce—UK AISI is using that infrastructure to publish open evaluation results. When re-running is expensive, **report structure** becomes part of scientific integrity.

## Practice checklist

- Do not treat “safety suite average” as one capability; inspect item clusters.
- Prefer multidimensional or stratified reporting when benchmarks are known mixtures.
- Shrink evals with discrimination-aware item selection; protect against adversarial trimming of hard safety items.
- Publish Evaluation Card–style metadata (code, seeds, prompts, harness versions) with every claim that will outlive a Slack thread.

**Sources**

- [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
- [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
