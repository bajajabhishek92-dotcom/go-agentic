title:: Model Routing on the Cost–Intelligence Frontier
type:: article
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/extra-ai-knowledge/openai-news #cluster/inference-infra
node-id:: a-model-routing-cost-intelligence
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/model-routing-cost-intelligence.md
original-label:: Model Routing on the Cost–Intelligence Frontier

- #cluster/inference-infra
- #corpus/extra-ai-knowledge/openai-news
- blurb:: Frontier labs now ship **families** of models (max-intelligence, strong mid-tier, fast/cheap) plus knobs for reasoning effort and speed. Treating “one model for everything” as a moral stance is how teams burn 10–100×…

## Relations

- example of:: [[Model Routing]] — Discussed in article
- related to:: [[Generative AI Cost Operating Model]] — Discussed in article

## Article

- Frontier labs now ship **families** of models (max-intelligence, strong mid-tier, fast/cheap) plus knobs for reasoning effort and speed. Treating “one model for everything” as a moral stance is how teams burn 10–100× too much money—or ship brittle agents on the wrong tier.

## Match capability to the job

- A practical routing map:

- Table:
  - `| Tier | Use when |`
  - `| --- | --- |`
  - `| **Max frontier (e.g. Astra-class)** | Hardest reasoning, novel debugging, long-horizon agent coordination, optimizing other systems |`
  - `| **Strong efficient (e.g. Sol / Terra-class)** | Complex coding, document work, computer use at production volume |`
  - `| **Focused / high-QPS (e.g. Luna-class, Decisions)** | Classification, extraction, routing, structured micro-decisions |`

- Within a model, **reasoning effort** (low → max) and **speed modes** (standard / fast / ultrafast) are separate axes: more thought ≠ always better; ultrafast helps interactive loops even when reasoning stays moderate.

## Production efficiency levers

- Before you “need a smarter model,” check:

- **Prompt caching** — put stable instructions and tools first; volatile task data last. Cached input can cost ~95% less.
- **Compaction** — shrink long-running context while preserving state.
- **Parallel independent work** — don’t serialize unrelated tool waits.
- **Cost per successful task** — not cost per token alone; failed cheap runs are expensive.

## Case study pattern: cache policy beats model shopping alone

- Asana’s browser-agent study is instructive. An engineer used a top-tier model to *investigate* the agent: it cached fixed instructions but **not** growing page history, and trimmed screenshots every step—destroying cache continuity. After controlled experiments on history budgets and screenshot batching, the optimized workflow on an efficient frontier model ran about **76× cheaper and 5× faster** than the original production setup. Separately, LegalOn-style orgs cut Codex spend ~50% by guidelines that map task complexity and growth stage to model choice—without freezing development velocity.

## Long-running control plane

- For hour/day-scale work: mid-turn steering, async tools, subagent delegation, and explicit “ask vs proceed” boundaries matter as much as which weights you call. Computer use belongs only where APIs cannot; prefer the simplest reliable tool for each step.

- **Rule of thumb:** use the most capable model to *design and optimize* the harness; use the cheapest model that hits your eval bar to *run* it at scale.

- **Sources**

- [A model guide for the GPT-6 family](https://openai.com/index/practical-guide-building-gpt-6)
- [Asana cuts model costs 76x in browser tests with GPT-6.1 Sol](https://openai.com/index/asana-browser-agent)
- [LegalOn halves Codex costs while maintaining development speed](https://openai.com/index/legalon-halves-codex-costs)
- [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)
- [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)
- [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api)

## Navigation

- Cluster:: [[Cluster - Inference, Efficiency & Infrastructure]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
