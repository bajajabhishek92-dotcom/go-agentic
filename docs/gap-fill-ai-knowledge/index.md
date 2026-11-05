# Gap-fill AI knowledge

New teaching material that closes holes in the baseline corpus (IBM / Sequoia / OpenAI / Hugging Face / DeepMind / AWS) and adds **orientation themes** readers need before diving into techniques.

**Corpus start-here:** [`../README.md`](../README.md).

**Integrated:** Gap-fill orientation + source articles are in the [knowledge graph](../ai-knowledge-graph/index.md), [readable HTML](../ai-knowledge-articles-readable/articles.html), [themes](../ai-knowledge-by-theme/themes.html) cross-links, and [Logseq export](../logseq-ai-knowledge/).

## Start here (recommended path)

1. **Orientation themes** (below) — timeline → players → policy → agent benchmarks  
2. **[Coverage gaps audit](coverage-gaps.md)** — what’s strong, thin, and missing  
3. **[Sources & rationale](sources.md)** — why these publishers were chosen  
4. Source-folder deep dives as needed  

**Quality review:** [`../corpus-quality-review/report.md`](../corpus-quality-review/report.md)

### Citation pass (2026-11-05)

All **21** orientation theme articles now have a `## Sources` block with **≥2 primary `https://` URLs** each (EUR-Lex, NIST AI RMF, Epoch MirrorCode, SWE-bench, AI Index, Anthropic, CSET, FPF, etc.). Ticket CQ-004 / handoff Ticket A addressed in this folder.

## Orientation themes (new)

| Theme | Path | Articles |
|-------|------|----------|
| AI development timeline | [`ai-timeline/`](ai-timeline/) | 5 |
| Market players & roles | [`market-players/`](market-players/) | 5 |
| Global AI policy | [`global-policy/`](global-policy/) | 6 |
| Benchmarking agents | [`agent-benchmarks/`](agent-benchmarks/) | 5 |

## Technical / domain gap-fill (by source)

| Source | Path | Fills |
|--------|------|-------|
| Anthropic News & Research | [`anthropic-news/`](anthropic-news/) | Evals science, alignment practice, agent harnesses |
| Google Research Blog | [`google-research-blog/`](google-research-blog/) | Health, education, Earth AI, multimodal methods |
| NVIDIA Technical Blog | [`nvidia-technical-blog/`](nvidia-technical-blog/) | AI factories, robotics systems, secure agent runtime |
| Epoch AI | [`epoch-ai/`](epoch-ai/) | Compute economics, chip geography, capability indices |
| CSET (Georgetown) | [`cset-georgetown/`](cset-georgetown/) | China/Asia ecosystem, chips, governance geopolitics |
| IEEE Spectrum AI | [`ieee-spectrum-ai/`](ieee-spectrum-ai/) | Robotics safety, HITL paradoxes, global adoption |
| Future of Privacy Forum | [`fpf/`](fpf/) | Privacy law, ADM/chatbot legislation |

NVIDIA and FPF teachables were expanded to ≥650 words in the reviewer iteration pass (CQ-015 / Ticket C).

## Inventory

Machine-readable counts: `/cursor/stores/self/internal/gap-fill-inventory.json`
