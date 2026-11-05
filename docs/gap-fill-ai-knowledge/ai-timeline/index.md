# How AI Got Here

**Read time:** ~3 minutes · **Interactive:** [timeline.html](timeline.html)

A cold-reader chronology of modern AI as **operating regimes**—not a product-launch laundry list. Each era names what changed for builders and users, who drove it, and the one line to remember.

Grounded in Stanford HAI’s AI Index aggregates, Epoch AI compute/capability/adoption series, Anthropic’s agent-era framing, and supporting lab/policy reporting.

---

## At a glance

| Era | When | One-line takeaway |
| --- | --- | --- |
| [Features & narrow ML](#1-features--narrow-ml) | ≤2011 | AI was invisible infrastructure; feature craft was the scarce skill. |
| [Deep learning](#2-deep-learning) | ~2012–2016 | Scale data + GPUs; models learn representations instead of hand-built features. |
| [Transformers & foundation models](#3-transformers--foundation-models) | ~2017–2021 | One pretrained model adapts to many tasks; generality becomes the product. |
| [Assistants](#4-assistants) | ~2022–2023 | Chat turns foundation models into everyday collaborators at consumer scale. |
| [Agents & everyday adoption](#5-agents--everyday-adoption) | 2024→ | AI acts with tools over many steps; use becomes habit at work and in regulated domains. |

**Parallel tracks that run through every era:** [compute & price](compute-and-frontiers.md) · [capability lead times](compute-and-frontiers.md#capability-frontiers) · [adoption metrics](agents-and-adoption.md#adoption)

---

## 1. Features & narrow ML

**When:** decades through ~2011

**What happened**
- Production “AI” meant rules, search, classical ML, and carefully engineered features.
- Systems were competent but **single-purpose**: spam, ranking, speech, fraud—each its own pipeline.
- Users met AI as autocomplete and recommendations, not as a collaborator.

**Why it mattered**  
Set the baseline: progress was real, but every new domain needed specialists and a new stack.

**Key players**  
Academic ML labs · search/ads teams at Google/Yahoo/Microsoft · IBM (Deep Blue era) · classical vision/speech groups

**Takeaway:** *AI was infrastructure you didn’t chat with.*

---

## 2. Deep learning

**When:** ~2012–2016 (ImageNet shock → sequence models)

**What happened**
- Neural nets learn useful representations end-to-end when data and GPU compute are plentiful.
- Vision, then speech and language, shift from handcrafted features to trained stacks.
- “Scale the model and the data” becomes a credible industrial strategy.

**Why it mattered**  
Moved the scarce skill from feature craft toward **training scale**—but products were still mostly single-task.

**Key players**  
Toronto/NYU/Stanford/Montreal labs · GPU makers (NVIDIA) · Google Brain, DeepMind, Facebook AI Research · ImageNet / Fei-Fei Li

**Takeaway:** *Representation learning went mainstream; generality did not—yet.*

---

## 3. Transformers & foundation models

**When:** ~2017–2021 (Attention Is All You Need → large pretrained LMs)

**What happened**
- Transformers make large-scale language (then multimodal) pretraining practical.
- Organizations invest in **foundation models** and adapt them with prompting/fine-tuning instead of training every task from scratch.
- Broad benchmarks appear; scores climb fast—capability surprise becomes normal.

**Why it mattered**  
Changed the unit of progress from “a model per task” to “a general model plus adaptation.”

**Key players**  
Google (Transformer, BERT, T5) · OpenAI (GPT line) · Hugging Face open ecosystem · DeepMind · Meta research

**Takeaway:** *Generality became the product claim.*

---

## 4. Assistants

**When:** ~2022–2023 (ChatGPT-class interfaces → copilots everywhere)

**What happened**
- Instruction tuning, preference optimization, and chat UX turn models into consumer interfaces.
- Writing, coding, and Q&A habits scale; near-daily use jumps quickly in polling.
- Inference prices for a *fixed* capability level plunge—yesterday’s frontier shows up in cheap tiers.

**Why it mattered**  
Shifted competition from research demos to **product loops**: latency, trust, cost, refusals.

**Key players**  
OpenAI · Anthropic · Google · Microsoft (GitHub Copilot / Azure) · open-weight challengers

**Takeaway:** *People started treating models as collaborators, not APIs.*

---

## 5. Agents & everyday adoption

**When:** 2024 → *you are here*

**What happened**
- Systems call tools, modify state, and run multi-step goals—not just reply in chat.
- Harnesses (orchestration, sandboxes, escalation) become co-equal with model weights.
- Adoption leaves novelty: enterprise uptake, FDA-cleared devices, robotaxis, science workflows; open–closed gaps shrink to months.

**Why it mattered**  
Failure modes, economics, and evaluation all change shape once AI **acts**. Governance and IAM for non-human actors lag the product shift.

**Key players**  
Anthropic, OpenAI, Google DeepMind · hyperscalers & NVIDIA · open-weight labs · METR/Epoch eval work · regulators (EU AI Act era, U.S. agencies)

**Takeaway:** *The scarce skill is systems design + outcome eval—not just prompting.*

---

## How to read this without mythology

1. **Eras overlap.** Classical ML still runs fraud systems; assistants and agents ship in the same products.
2. **Inflection ≠ invention.** Transformers didn’t invent attention; agents didn’t invent tool use. Eras mark when defaults and investment shifted.
3. **Frontiers are plural.** A model can lead on math and lag on software engineering; lead times at the top now last months, not years.

---

## Go deeper (optional)

- **Interactive page:** [timeline.html](timeline.html) — vertical timeline with era chips (best on phone or desktop).
- [Compute & capability frontiers](compute-and-frontiers.md) — chips, power, inference price, and shrinking lead times.
- [Agents & adoption](agents-and-adoption.md) — tools/harnesses, evals, and everyday use metrics.

## See also

- [Epoch AI](../epoch-ai/index.md) · [Anthropic News](../anthropic-news/index.md) · [Google Research Blog](../google-research-blog/index.md) · [IEEE Spectrum AI](../ieee-spectrum-ai/index.md) · [Gap-fill home](../index.md)

## Sources (hub)

- [Stanford HAI — AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- [Our World in Data — A brief history of AI](https://ourworldindata.org/brief-history-of-ai)
- [Epoch AI — plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought)
- [Epoch AI — near-daily AI use doubled](https://epoch.ai/data-insights/near-daily-ai-use-doubled)
- [Anthropic — demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)
