# Gap-fill sources — selection & rationale

Chosen to cover **technical blind spots** and four **orientation themes** (timeline, market players, global policy, agent benchmarking). None of IBM, Sequoia, OpenAI, Hugging Face, DeepMind, or AWS are used as primary sources here.

## Primary sources (process ~50–100 latest items each)

### 1. Anthropic News & Research (`anthropic-news`)

- **URLs:** https://www.anthropic.com/news · https://www.anthropic.com/research · https://www.anthropic.com/engineering
- **Type:** Frontier lab news, research notes, engineering write-ups
- **Fills:** Agent/model **evals science**, constitutional/usage-policy practice, alignment & safety research depth, policy engagement—beyond product-changelog style posts already covered via OpenAI News.
- **Also feeds themes:** `agent-benchmarks/`, slices of `global-policy/`

### 2. Google Research Blog (`google-research-blog`)

- **URL:** https://research.google/blog/ (RSS available)
- **Type:** Corporate research blog (distinct from DeepMind’s blog already in Extra)
- **Fills:** **Clinical/health AI**, **education**, applied multimodal/science methods, HCI/deliberation—application domains thin in the baseline.
- **Also feeds themes:** timeline inflection examples; evals/methods for `agent-benchmarks/`

### 3. NVIDIA Technical Blog (`nvidia-technical-blog`)

- **URL:** https://developer.nvidia.com/blog/ (RSS ~100 items)
- **Type:** Systems/engineering technical blog
- **Fills:** **Hardware beyond chips** (factories, networking, serving stacks), **robotics** systems depth, multimodal inference engineering—not venture narrative alone.
- **Also feeds themes:** infra role in `market-players/`

### 4. Epoch AI (`epoch-ai`)

- **URL:** https://epoch.ai/ (Atom + sitemaps for publications / data insights)
- **Type:** Independent research org (compute, capabilities, economics)
- **Fills:** **Compute economics**, datacenter/energy scale, chip-import geography, open- vs closed-capability gaps—evidence layer for “hardware beyond chips” and geopolitics of compute.
- **Also feeds themes:** `ai-timeline/`, `market-players/`, `agent-benchmarks/` (capability indices)

### 5. CSET — Georgetown (`cset-georgetown`)

- **URL:** https://cset.georgetown.edu/
- **Type:** University policy-research center
- **Fills:** **Asia/China AI ecosystem**, export controls / chip tracking, comparative **AI governance**—the largest geographic hole in the baseline.
- **Also feeds themes:** `global-policy/`, `market-players/` (state actors)

### 6. IEEE Spectrum AI (`ieee-spectrum-ai`)

- **URL:** https://spectrum.ieee.org/topic/artificial-intelligence/ (topic RSS)
- **Type:** Reputable engineering journalism
- **Fills:** Cross-cutting robotics/systems stories, global adoption outside US lab blogs, readable context for non-specialists.
- **Also feeds themes:** timeline color; market/application anecdotes

## Supporting sources (theme anchors & privacy law)

| Source | Role |
|--------|------|
| **Stanford HAI AI Index** | Quantitative spine for timeline + market map (investment, adoption, global distribution) |
| **NIST AI RMF** | US framework anchor for `global-policy/` |
| **EU AI Act materials** (European Commission digital strategy) | Binding-regime teaching for EU |
| **UK AI regulation policy papers** | Pro-innovation / regulator-coordination model |
| **Future of Privacy Forum (FPF)** (`fpf/`) | Privacy law, ADM acts, chatbot regulation—supports privacy gap inside `global-policy/` and a dedicated teaching folder |

## Theme folder mapping

| Theme slug | Primary inputs |
|------------|----------------|
| [`ai-timeline/`](ai-timeline/) | Epoch capability/compute trends; AI Index eras; Anthropic/Google Research historical markers; Spectrum context |
| [`market-players/`](market-players/) | Epoch (labs/compute); NVIDIA (infra); CSET (states); AI Index (investment/adoption); Anthropic/Google Research as lab archetypes |
| [`global-policy/`](global-policy/) | CSET; NIST; EU AI Act; UK papers; FPF; Anthropic policy posts |
| [`agent-benchmarks/`](agent-benchmarks/) | Anthropic evals; Epoch capability indices / automation reports; Google Research eval methods |

## Processing notes

- Target: **~50–100 latest items** per primary source when the listing/RSS/sitemap allows; teaching articles are **concept explainers**, not one-file-per-URL summaries (same pattern as Extra corpus).
- Fetch: RSS/Atom where available; Jina reader for JS-heavy or thin HTML pages.
- Inventory: `/cursor/stores/self/internal/gap-fill-inventory.json`
