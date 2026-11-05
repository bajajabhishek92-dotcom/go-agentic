---
title: Factuality Benchmarks and Double-Blind Evaluations
slug: a-factuality-and-blind-evals
type: article
corpus: DeepMind Blog
corpus_key: deepmind-blog
cluster: Trust, Evaluation & Decision Quality
cluster_id: trust-evals
tags:
- article
- corpus/deepmind-blog
- cluster/trust-evals
keywords:
- benchmark-signal-disentanglement
- agent-evaluation
- deepmind-blog
- trust-evals
- cluster-trust-evals
- corpus-deepmind-blog
- article
- factuality
- double-blind
- benchmarks
- evaluations
- private
- models
- under
summary: 'As models become default information sources, two evaluation problems dominate: **measuring
  factuality across modes**, and **preventing contamination** so scores stay trustworthy.'
related:
- Agent Evaluation
- Benchmark Signal Disentanglement
path: extra/deepmind-blog/factuality-and-blind-evals.md
---

# Factuality Benchmarks and Double-Blind Evaluations

As models become default information sources, two evaluation problems dominate: **measuring factuality across modes**, and **preventing contamination** so scores stay trustworthy.

## FACTS: factuality is not one skill

The FACTS Benchmark Suite (with Kaggle) splits factual performance into complementary slices:

1. **Parametric** — answer factoid questions from internal knowledge (Wikipedia-style trivia), no tools.
2. **Search** — use a shared web-search tool correctly; hard items need multi-hop retrieval and synthesis under identical tool conditions for all models.
3. **Multimodal** — answer image-grounded questions with complete, correct text (vision + world knowledge).
4. **Grounding (v2)** — stay faithful to provided context in the prompt.

A suite score averages public and private sets across these benchmarks. Holding out private sets and having a third party (Kaggle) run leaderboards reduces gaming. Reported results (e.g. Gemini 3 Pro leading yet still under 70% overall, with Multimodal weakest) show **headroom**—factuality remains an open research problem even for frontier systems.

### Why the split teaches better

A model can memorize well but fail tool use, or cite search poorly, or invent details about an image. One blended “truthfulness” number hides which subsystem to fix. Product teams should track the same slices: closed-book Q&A, tool-augmented answers, grounded-doc answers, and vision Q&A.

## Double-blind proprietary evals

Benchmark contamination is the exam-peek problem: if the model (or trainer) saw the questions, scores inflate. Historically, external high-stakes evals forced a trade-off—hand over secret prompts (risk provider contamination) or hand over weights (risk IP).

DeepMind’s pilot with Singapore AISI, OpenMined, AVERI, and MLCommons uses **Confidential Space** (confidential computing) so:

- evaluators never see Gemini weights;
- Google never sees evaluator prompts;
- cryptographic evidence supports that both stayed private.

That matters especially for sensitive cyber or government evals where prompts themselves are sensitive. Contracts and zero-logging help; attestation adds a technical layer.

## Practices to adopt

- Evaluate factuality as a **suite**, not a single leaderboard line.
- Keep **private held-out** sets under independent custody.
- Standardize tools when comparing “search-augmented” models.
- For proprietary models and confidential tests, prefer **cryptographically double-blind** setups over trust-only NDAs.
- Treat scores below a high bar as expected; use them to prioritize failure modes (search hops, multimodal completeness, grounding).

**Sources**

- [FACTS Benchmark Suite: Systematically evaluating the factuality of large language models](https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/)
- [Piloting the world's first double-blind AI evaluations](https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/)
