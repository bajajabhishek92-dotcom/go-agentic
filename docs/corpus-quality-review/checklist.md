---
cursor:
  subagentId: "bc-6c7d43f4-6d9a-57c1-aa95-9271b6961919"
---

# Corpus quality checklist

Status as of 2026-11-05 after reviewer fixes noted in `report.md`.  
**PASS** = meets bar for a publishable learning corpus. **FAIL** = does not. **PARTIAL** = usable but below bar.

| ID | Criterion | Status | Evidence / notes |
|----|-----------|--------|------------------|
| U1 | Top-level start-here path exists | **PASS** *(fixed)* | `/cursor/stores/self/docs/README.md` |
| U2 | Per-corpus indexes list all articles with blurbs | **PASS** | IBM, Sequoia, Extra `*/index.md`; gap-fill theme/source indexes |
| U3 | Theme HTML companion links resolve in store | **PASS** *(fixed)* | Points to `ai-knowledge-articles-readable/articles.html` |
| U4 | Readable articles HTML loads & searches 86 baseline articles | **PASS** | `articles.html` embeds 86; `articles-index.json` count=86 |
| U5 | Readable store Markdown mirrors complete | **FAIL** | Only `ibm/` md present; sequoia/extra missing under readable/ |
| U6 | Knowledge graph explorer loads `graph.json` | **PASS** | Relative fetch in `explore.html` |
| U7 | Logseq setup instructions accurate | **PARTIAL** | Setup works; graph omits gap-fill; duplicate `logseq-ai-knowledge 2` |
| U8 | Gap-fill discoverable from baseline entry points | **PARTIAL** *(links added)* | Cross-links added; still absent from graph/Logseq/HTML packs |
| U9 | No dead relative links among reviewed indexes | **PARTIAL** | Theme path fixed; store↔repo naming still drifts |
| R1 | Covers 2024–2026 frontier models / agent era | **PARTIAL** | Extra/DeepMind/OpenAI strong; orientation in gap-fill only |
| R2 | Global policy / regulation taught | **PARTIAL** | Strong drafts in `gap-fill-ai-knowledge/global-policy/`; unsourced; not in main graph |
| R3 | Market players / timeline orientation | **PARTIAL** | Theme folders exist; unsourced; not on default path |
| R4 | Agent benchmarking quality | **PARTIAL** | Good substance in `agent-benchmarks/`; zero URLs; not integrated |
| C1 | Agentic systems depth | **PASS** | IBM + Sequoia + Extra + themes |
| C2 | Inference / infra depth | **PASS** | IBM + HF + AWS + themes |
| C3 | Security / safety depth | **PASS** | IBM + DeepMind + OpenAI + themes |
| C4 | Coding agents depth | **PASS** | IBM + OpenAI + themes |
| C5 | Physical AI / robotics depth | **PARTIAL** | Sequoia thin; NVIDIA/DeepMind help in Extra/gap-fill |
| C6 | Landscape (timeline/players/policy/benchmarks) first-class | **FAIL** | Present as orphaned gap-fill, not main product |
| C7 | Minimal harmful duplication | **PARTIAL** | Parallel context-engineering articles; themes restatement OK if linked |
| C8 | Source diversity (beyond US lab/VC/vendor) | **PARTIAL** | Gap-fill adds CSET/Epoch/FPF/IEEE; baseline path still biased |
| A1 | Claims generally supported by cited primary sources (baseline) | **PASS** | IBM/Extra Sources spot-checked (LifeVal, BenchMIRT, Argon safety) |
| A2 | Orientation themes have verifiable citations | **FAIL** | 21/21 orientation articles: 0 URLs |
| A3 | Sequoia meets “standalone teaching” standard | **FAIL** | 15/18 articles <350 words |
| A4 | Theme essays link to underlying articles | **PASS** *(fixed)* | Relative paths added to Sources |
| A5 | No fabricated primary URLs in sampled Extra | **PASS** | Sampled DeepMind/OpenAI/HF URLs resolve |
| X1 | Consistent naming store ↔ repo | **FAIL** | `ai-knowledge-articles-readable` vs `ai-knowledge-articles` |
| X2 | Freshness metadata / last-updated on articles | **FAIL** | Generally absent |
| X3 | Accessibility of primary reader | **PARTIAL** | Local HTML good; no hosted reader; Logseq friction |
| X4 | Inventory honesty (video 300 expansion) | **PASS** | `videos-300.md` states incomplete transcripts clearly |

## Rollup

| Area | Pass | Partial | Fail |
|------|-----:|--------:|-----:|
| Usability (U*) | 4 | 3 | 1 |
| Relevance (R*) | 0 | 4 | 0 |
| Coverage (C*) | 4 | 3 | 1 |
| Accuracy (A*) | 3 | 0 | 2 |
| Cross-cutting (X*) | 1 | 1 | 2 |
| **Total** | **12** | **11** | **6** |

**Verdict:** **FAIL overall as an integrated corpus** (too many P0/P1 navigation and citation gaps), with **PASS-quality islands** (IBM, Extra, themes, graph for the baseline 86). After this review’s navigation/citation link fixes, usability improves but landscape integration and Sequoia depth still fail the bar.
