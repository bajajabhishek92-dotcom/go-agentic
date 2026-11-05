# Build plan — ship MVP in go-agentic

**Repo:** https://github.com/bajajabhishek92-dotcom/go-agentic  
**Today on `main`:** articles HTML + index (86), themes, Logseq graph, setup doc (PR #1 merged). Graph explorer + gap-fill + this launch pack live primarily in the Project store—**publish pass required**.  
**Deploy target:** GitHub Pages from `/docs` (or `/docs/site` if you want a clean public root without exposing raw Logseq).

---

## Ordered engineering plan

### Phase 0 — Freeze the story (half day of decisions, no code drift)
1. Lock product name: **AI Engineering Atlas**.
2. Lock visual direction: Forge Atlas (`make-it-pop.md`).
3. Lock MVP IA from `product-spec.md`.
4. Accept quality debts that ship labeled (Sequoia thin; orientation citations if not done)—never silent.

### Phase 1 — Citation + inventory honesty (blocks “trust”)
1. Add **Sources** + `as_of` frontmatter/footer to all 21 orientation articles under `gap-fill-ai-knowledge/{ai-timeline,market-players,global-policy,agent-benchmarks}/`.
2. Prefer primary URLs (EUR-Lex, NIST AI RMF, Epoch, Stanford AI Index, Anthropic eval posts, SWE-bench).
3. Fix DeepMind canonical URLs where redirects were flagged.
4. Publish a one-page inventory: baseline 86 + gap-fill N + graph hubs; no “300 taught” claim.

### Phase 2 — Site shell in repo
Recommended layout on Pages:

```
docs/
  index.html                 ← hub (entry URL)
  site/
    css/atlas.css
    js/nav.js
    search.html              ← port of articles.html search
    timeline/index.html
    players/index.html
    policy/index.html
    benchmarks/index.html
    themes/                  ← copy or iframe themes.html restyled
    graph/                   ← explore.html + graph.json
    articles/                ← articles.html + articles-index.json + md/html bodies
    about/index.html
  ai-knowledge-*/            ← keep existing trees; hub links into site/ or relative paths
  launch-product/            ← optional: publish these planning docs under /about/method
```

**Practical shortcut for v0:** copy `docs/launch-product/preview/` from the Project store into `docs/` as the hub, fix relative links to repo paths (`ai-knowledge-articles/`, not `-readable`), enable Pages.

### Phase 3 — Data model (unify JSON)

**Article record** (extend existing `articles-index.json`):

```json
{
  "id": "a-lifeval-everyday-agent-evals",
  "title": "...",
  "summary": "...",
  "corpus": "openai-news",
  "cluster_id": "trust-evals",
  "path": "extra/openai-news/lifeval-everyday-agent-evals.md",
  "tags": ["evals", "agents"],
  "sources": [{"title": "...", "url": "https://..."}],
  "as_of": "2026-11-05",
  "orientation": null
}
```

**Orientation record** (new `orientation-index.json`):

```json
{
  "id": "era-transformers",
  "lane": "timeline",
  "label": "Transformers & foundation models",
  "blurb": "...",
  "article_path": "gap-fill-ai-knowledge/ai-timeline/eras-of-modern-ai.md",
  "as_of": "2026-11-05",
  "primary_sources": ["https://..."]
}
```

**Graph** — keep `graph.json` schema (`meta`, `clusters`, `nodes`, `edges`). Regeneration job:
1. Parse all corpora Markdown (IBM/Sequoia/Extra/gap-fill).
2. Upsert article hubs + orientation concepts.
3. Emit `graph.json` + refresh Logseq pages.
4. Bump `meta.generated_at`.

### Phase 4 — Page build order (MVP)
| Order | Page | Depends on | Done when |
|------:|------|------------|-----------|
| 1 | `index.html` hub | CSS tokens, nav | Brand + 3 start-here + links live |
| 2 | Search / articles | `articles-index.json` | Query → article works on Pages |
| 3 | Graph | `graph.json` | explore loads via http(s) |
| 4 | Timeline / Players / Policy / Benchmarks | orientation index + md/html | Each lane has ≥4 linked teachables |
| 5 | Themes under chrome | existing essays | Shared nav, no orphan window |
| 6 | About | quality report excerpt | Scorecard + method + cadence |

Stub pages are OK if they teach via links; empty marketing shells are not.

### Phase 5 — Deploy
1. Repo Settings → Pages → Deploy from branch `main` → folder `/docs`.
2. Confirm entry: `https://bajajabhishek92-dotcom.github.io/go-agentic/`
3. If project-site base path breaks relative assets, set `<base href="/go-agentic/">` or use root-relative paths carefully.
4. Add custom domain later (optional).
5. Smoke: incognito, mobile width, search, graph fetch, deep link hash.

### Phase 6 — Integration debts (immediately post-MVP)
1. Merge gap-fill into graph + searchable index.
2. Expand thin Sequoia teachables (priority: cars-not-horses, own-your-weights, agent-harnesses, path-to-agi, continual-learning).
3. Sync store `ai-knowledge-articles-readable` naming with repo `ai-knowledge-articles`.
4. Delete duplicate `logseq-ai-knowledge 2` after coordinator OK.
5. Re-score corpus quality; publish delta on About.

---

## Launch checklist

**Trust**
- [ ] 21/21 orientation articles have Sources URLs
- [ ] Hub as-of date set
- [ ] Quality scorecard linked from About
- [ ] Inventory counts accurate

**Product**
- [ ] Single entry URL live on Pages
- [ ] Nav: Search, Timeline, Players, Policy, Benchmarks, Graph, Themes, About
- [ ] Three start-here paths work end-to-end
- [ ] Deep links shareable (open in incognito)

**Engineering**
- [ ] No console errors on hub/graph/search
- [ ] `graph.json` fetch works on https (not only file://)
- [ ] Mobile nav usable
- [ ] README points to Pages URL first

**Presentation**
- [ ] LinkedIn post drafted (below)
- [ ] GitHub README rewritten (below)
- [ ] Portfolio bullet uses six skill verbs

---

## How Abhishek should present this

### GitHub README (top of `go-agentic`)

```markdown
# AI Engineering Atlas

A cited, searchable knowledge atlas of the agent era—teachable articles,
theme syntheses, a typed concept graph, and orientation lanes for timeline,
market players, global policy, and agent benchmarks.

**Live:** https://bajajabhishek92-dotcom.github.io/go-agentic/

This is portfolio evidence of AI engineering practice: source operations,
knowledge modeling, evaluation hygiene, gap analysis, and iteration under
an independent quality review—not a folder of video summaries.

## Start here
- Builder path → …
- Landscape path → …
- Trust & evals path → …

## Method
Sources → teachables → themes → graph → review → gap-fill → re-score
```

### LinkedIn (launch post skeleton)

> I built **AI Engineering Atlas**—a public, cited map of how modern AI systems are actually engineered.  
>  
> It’s not a YouTube digest. It’s a knowledge system: multi-source teachables, theme synthesis, a typed concept graph, and first-class lanes for timeline, market roles, policy regimes, and agent-eval hygiene—plus a published quality review I’m still iterating against.  
>  
> Live: &lt;Pages URL&gt;  
> What to click first: Landscape path (3 minutes) or the graph explorer.  
>  
> Happy to walk hiring managers through the method: intake → teachable standard → graph → eval surface → gap-fill.

Pin the post; first comment = Builder path link + “what I’d improve next” (Sequoia depth / graph merge)—signals seniority.

### Portfolio / resume bullet

> Designed and shipped **AI Engineering Atlas**, a static knowledge product (search, graph, policy/benchmark orientation) over a multi-source AI corpus; ran gap analysis and external quality review (6.2/10 → remediation backlog) as part of the public artifact.

### Demo script for interviews (5 minutes)
Hub → Landscape → Timeline era → Players role → Benchmarks hygiene row → Graph Trust cluster → About scorecard. Speak to **tradeoffs** (what’s thin, what’s next)—that’s the engineer tell.

---

## Highest-leverage sequence (if time-boxed)

1. Pages hub with real nav (preview → repo).  
2. Citation pass on orientation (trust).  
3. Wire Timeline/Players/Policy/Benchmarks to gap-fill.  
4. README + LinkedIn around skill claim.  
5. Graph + search under same chrome.  
6. Only then: graph regeneration / Sequoia expansion / chat wrappers.
