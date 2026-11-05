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

## Live

GitHub Pages is often unset on this repo (`github.io` 404). Prefer a host that serves **`text/html`** (not jsDelivr `text/plain`, which dumps source):

- Topics (in-page reader): https://gitcdn.link/repo/bajajabhishek92-dotcom/go-agentic/main/docs/atlas/topics.html
- Local: from `docs/`, `python3 -m http.server 8765` → http://127.0.0.1:8765/atlas/topics.html

Topic cards open an **in-page** reading pane (`#article-id`) using embedded `corpus-bodies.js` — they do not navigate to raw `.md` or CDN-plain `articles.html`.

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

## Reader link contract

**Topics cards stay in-page:** `topics.html#<id>` opens the embedded reading pane (bodies from `assets/corpus-bodies.js` + orientation HTML in `content.js`). No navigation to files that CDNs often serve as `text/plain`.

- Orientation lane chrome → `atlas/{timeline|players|policy|benchmarks}.html#<article-id>`
- Sidebar “Corpus reader” → same-host relative `../ai-knowledge-articles/articles.html` (never GitHub blob/rawcdn)
- Lane meta “Open in Topics reader” → `./topics.html#<html_id|id>`

Never link cards to raw `.md` or GitHub blob URLs. Snippets truncate on **sentence boundaries**.
