# AI Engineering Atlas — Reader

Polished static reader for orientation lanes (Timeline → Players → Policy → Benchmarks) plus Topics/Search.

## Open locally

From this folder (or the published twin under `docs/atlas/` in go-agentic):

```bash
# Option A — any static server from the docs/ parent
cd .. && python3 -m http.server 8765
# then open:
```

- Local (store): [http://127.0.0.1:8765/atlas-reader/](http://127.0.0.1:8765/atlas-reader/)
- Local (repo twin): [http://127.0.0.1:8765/atlas/](http://127.0.0.1:8765/atlas/)
- Or File → Open File on `index.html` (works offline; fonts need network).

**Start here:** `index.html` → **Timeline** is a top-level lane (not a keyword in the old 86-article search).

| Page | Path |
|------|------|
| Start | [`index.html`](index.html) |
| Timeline | [`timeline.html`](timeline.html) |
| Players | [`players.html`](players.html) |
| Policy | [`policy.html`](policy.html) |
| Benchmarks | [`benchmarks.html`](benchmarks.html) |
| Topics / Search | [`topics.html`](topics.html) |

## Live (GitHub Pages)

After merge to `main` (repo `docs/` → Pages root):

- https://bajajabhishek92-dotcom.github.io/go-agentic/atlas/
- Timeline: https://bajajabhishek92-dotcom.github.io/go-agentic/atlas/timeline.html
- Full corpus search (182, includes gap-fill): https://bajajabhishek92-dotcom.github.io/go-agentic/ai-knowledge-articles/articles.html

htmlpreview fallback:

- https://htmlpreview.github.io/?https://github.com/bajajabhishek92-dotcom/go-agentic/blob/main/docs/atlas/index.html

## UX patterns borrowed

| Source | What we took |
|--------|----------------|
| **Stripe docs** | Persistent left nav + reading pane; large body type; quiet sticky chrome |
| **Linear docs** | Sparse IA, high-contrast active states, minimal chrome noise |
| **Notion help** | Progressive disclosure (Sources `<details>`), “start here” path list |
| **Anthropic / OpenAI docs** | Visible **AS OF** stamp + primary source links on every teachable |
| **Distill / explainers** | Timeline as a visual chronological rail with “you are here”, not a markdown wall |

Visual system: **Forge Atlas** (cool paper, cobalt accent, Syne + Source Serif 4 + IBM Plex Mono)—not purple-AI-slop.

## Content source (facts only)

- Gap-fill orientation: `../gap-fill-ai-knowledge/{ai-timeline,market-players,global-policy,agent-benchmarks}/`
- Topics search also indexes `../ai-knowledge-articles/articles-index.json` (182)

## Must-fix note

The legacy `articles.html` used to advertise **86** baseline articles only—searching “timeline” returned **0**. This reader puts Timeline/Players/Policy/Benchmarks in **top nav**, and the rebuilt `articles.html` embeds all **182** (baseline + gap-fill) with orientation keywords so “timeline” hits.
