---
title: 'AI That Designs Chips: Closing the Loop on Silicon'
slug: a-ai-designed-chips
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Physical AI, Voice & Autonomy
cluster_id: physical-ai
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/physical-ai
keywords:
- energy-goodput-constraints
- ai-designed-chips
- sequoia
- physical-ai
- cluster-physical-ai
- corpus-sequoia-ai-knowledge
- article
- chips
- silicon
- designs
- loop
- closing
- real
- www.youtube.com/watch
summary: 'Ricursive Intelligence’s founders Anna Goldie and Azalia Mirhoseini represent a recursive bet: use AI to design the chips that run AI. Their Google-era AlphaChip work helped design multiple generations of TPUs and cut chip floor planning from months to hours. The teaching…'
related:
- AI-Designed Chips
- Energy & Goodput Constraints
path: sequoia/ai-designed-chips.md
---

# AI That Designs Chips: Closing the Loop on Silicon

Ricursive Intelligence’s founders Anna Goldie and Azalia Mirhoseini represent a recursive bet: use AI to design the chips that run AI. Their Google-era AlphaChip work helped design multiple generations of TPUs and cut chip floor planning from **months to hours**. The teaching core is not “RL cool demos”—it is closing the loop between learned placement and the painful constraints of real tapeout, then accelerating design until models and hardware can co-evolve.

## Definition: AI-for-EDA vs proxy optimization

Chip design is a multi-year, often hundreds-of-millions-of-dollars bottleneck. Floor planning places macros and logic so wire length, timing, power, and manufacturability work together. **AI that designs chips** means learned systems proposing placements (and, broader, design decisions) inside or beside real EDA flows—not academic sketches that never meet a signoff timer.

The product lesson generalizes beyond EDA: **if your reward function is not the real objective, RL will optimize the wrong world**. Academic proxies such as half-perimeter wire length can look publishable and still anger chip designers who live in timing closure, power, congestion, and tool-flow reality. Successful work sits inside the real toolchain, with rewards defined by engineers who ship silicon—not only by papers.

AlphaChip-era results included unusual “alien” placements (curved and donut-like patterns) that reduced wire length, power, and timing violations—move-37 moments human designers would hesitate to try. Novelty is valuable only when the fab and signoff stack agree.

## Mechanism: from fabless to designless, and co-design

Goldie and Mirhoseini describe an industry shift analogy: TSMC enabled **fabless** giants; Ricursive aims at **designless**—companies creating custom silicon without maintaining enormous in-house design teams. Asymmetric cycles today hurt co-design: AI methods evolve faster than chips can be built. Compressing design time unlocks true co-evolution of workloads, applications, and silicon—the recursive self-improvement loop where better chips train better design models that propose better chips.

Synthetic data and large-scale training on placement/design distributions matter because real tapeouts are scarce. The mechanism is not a single magic net; it is models + EDA integration + feedback from timing/power/manufacturability oracles that approximate what tapeout cares about.

Dylan Patel / SemiAnalysis themes sharpen why this matters for AI companies: **hardware–software co-design** is framed as a real **100×** lever—not a slogan. Model sparsity and density pull toward different accelerators; teams shaped for one GPU generation struggle on another; memory bandwidth (HBM stacks today, tighter on-package memory tomorrow) dominates what algorithms can afford. CUDA’s “moat” is less a language trick than a full stack of libraries, kernels, and ecosystem. If AI shortens chip design and software is co-tuned, the cost curve of intelligence bends again—alongside energy and data-efficiency work.

## Why chip design is the AI bottleneck

Neural nets existed for decades; they became practical when compute did. If chips remain the slow, expensive constraint, scaling laws stall on fabrication calendars. AI that proposes better floorplans and, eventually, broader design automation, attacks that bottleneck from inside the loop—especially for custom accelerators matched to real training and inference graphs.

## Failure modes

- **Proxy reward theater.** Optimizing HPWL (or any single metric) while timing/power regress in the real flow.
- **Paper-only EDA.** Methods that cannot sit in production toolchains or that designers refuse to trust.
- **Ignoring manufacturability.** Beautiful placements that will not yield.
- **Co-design theater.** Buying GPUs while treating model architecture as hardware-agnostic forever—then wondering why a sparse expert model hates your accelerator.
- **Cycle mismatch.** Assuming software can wait years for the “perfect” chip without intermediate co-optimization.
- **Talent myth.** Believing designless means zero chip expertise; you still need people who can define rewards, constraints, and signoff.

## Practices for AI builders (even if you never tape out)

Treat reward design as product management: write the real objective (latency at batch size B, $/token, joules/token, yield) and refuse proxies that diverge. Prefer co-design checklists when choosing model shapes (sparsity, precision, memory traffic). Track goodput and bandwidth, not only peak FLOPs. If you use learned autosystems (compilers, schedulers, placement), demand ablation against the metrics ops will fire you for.

### Practice checklist

- Name the true objective (timing, power, $/token, joules) before choosing a learning reward; document proxy gaps.
- Integrate learned tools into the real EDA or compiler flow early—refuse offline-only demos as launch criteria.
- Include designer-in-the-loop review for trust and constraint capture; measure override rates.
- Use synthetic + historical design data deliberately; watch distribution shift vs your next node/process.
- For model↔chip co-design: match sparsity/density and memory traffic to the target accelerator family.
- Budget for iteration speed (hours/days vs months) as a first-class roadmap goal—slow loops kill co-evolution.
- Prefer full-stack evaluation (libraries, kernels, interconnect) over single-kernel peaks when claiming speedups.
- If pursuing “designless” custom silicon, still staff constraint owners who can say no to unsafe proposals.

### Sources

- [AI That Designs Its Own Chips: Ricursive's Anna Goldie and Azalia Mirhoseini](https://www.youtube.com/watch?v=K05Dh-QjM8c)
- [How Ricursive Intelligence’s Founders are Using AI to Shape The Future of Chip Design](https://www.youtube.com/watch?v=55LT52eVArM)
- [Why Hardware-Software Co-Design Is AI's Real 100x: Dylan Patel of SemiAnalysis](https://www.youtube.com/watch?v=f6D_aiy8qyU)
