# Product spec — “#1 usable at launch”

**Product:** AI Engineering Atlas  
**Launch bar:** A cold global visitor reaches a useful, cited answer in ≤60s from a single URL—without cloning, without Logseq, without knowing the corpus layout.  
**Repo target:** `bajajabhishek92-dotcom/go-agentic` (GitHub Pages from `/docs` or `/docs/site`)  
**Current state:** Strong islands (86 searchable articles, 10 themes, graph explorer, ~96 gap-fill drafts) but **not a product**—fragmented entry, gap-fill orphaned, orientation unsourced, no hosted reader (quality review **6.2/10**, FAIL as integrated corpus).

---

## Usability contract (non-negotiable)

| # | Contract | Pass condition |
|---|----------|----------------|
| 1 | **Single entry URL** | `https://<user>.github.io/go-agentic/` (or custom domain) is the only link Abhishek shares |
| 2 | **60-second start** | From hero → one Start-here path → first teachable with Sources visible |
| 3 | **Search** | Full-text over title/summary/tags/cluster/corpus; results deep-link to article |
| 4 | **Trust visible** | Every claim page shows Sources and an **as-of** date; graph nodes link to articles |
| 5 | **Works offline-ish** | Static HTML/JSON; no login; mobile readable |
| 6 | **Honest inventory** | Counts match reality (articles, graph hubs, gap-fill status); no inflated “300 videos taught” |

If any of 1–4 fail, do not call it launched.

---

## Information architecture

```
/                         Hub (hero + start-here + freshness)
/search/                  Article search (or hub-embedded)
/timeline/                AI development eras & inflection points
/players/                 Market roles map (labs, hyperscalers, open-weight, chips, states…)
/policy/                  Global regime tracker (US/EU/UK/China + privacy/ADM)
/benchmarks/              Agent eval ledger (what measures what; failure modes)
/themes/                  10 synthesis essays
/graph/                   Interactive concept explorer
/articles/                Full teachable reader
/about/                   Method, quality scorecard, update cadence, how to cite
```

**Default onboarding order (product opinion):** Timeline → Players → one Theme (Agentic Systems or Trust/Evals) → Graph → deep articles. Policy and Benchmarks are parallel first-class lanes for “landscape” visitors.

---

## Surface specs

### 1. Single entry / Hub
- **Job:** Brand the atlas; route by intent; prove freshness.
- **Must show:** product name, one headline, one sentence method, CTA group (Start learning / Explore map / Search), as-of stamp, link to quality scorecard.
- **Must not show:** raw corpus folder dump, Logseq setup as primary CTA, video counts as hero metric.

### 2. Search
- **Data:** extend `articles-index.json` to include gap-fill + orientation once cited.
- **UX:** instant filter; facets for corpus, cluster, orientation tag; keyboard `/` focus.
- **MVP:** reuse/port existing `articles.html` search into hub chrome with shared nav.

### 3. Timeline
- **Job:** Eras as operating regimes (not product launch laundry lists).
- **MVP content:** wire 5 `gap-fill-ai-knowledge/ai-timeline/` articles into a vertical living timeline with era chips + deep links.
- **Later:** filter by builder vs user impact; compute spine overlay (Epoch-style).

### 4. Players map
- **Job:** Who does what in the stack—roles, not logos-as-decoration.
- **MVP:** role cards (Frontier labs, Hyperscalers, Open-weight ecosystems, Chip/infra, Enterprises, States/startups) linking to `market-players/` teachables.
- **Later:** interactive force/SVG map driven by graph nodes tagged `player`.

### 5. Policy tracker
- **Job:** Comparative regimes + privacy/ADM second wave—teachable, not legal advice.
- **MVP:** regime table (US NIST/federal, EU AI Act, UK coordination, China governance) + article links; each row has as-of + primary source URL.
- **Later:** changelog of material legal moves; jurisdiction filter.

### 6. Agent benchmarks ledger
- **Job:** Portfolio of agent evals + hygiene (limits, good practice).
- **MVP:** table of major benchmarks (what it tests / what it doesn’t / linked teachable); pages from `agent-benchmarks/`.
- **Later:** scrape-free manual score snapshots with citation; “eval design checklist” interactive.

### 7. Trust / citation UX
- Every article page: **Sources** block with live URLs; **as-of** ISO date; optional “confidence” note for contested claims.
- Hub footer: “How this was built” → method + quality review link.
- Broken-link policy: prefer canonical URLs (DeepMind redirects already flagged).

### 8. Start-here paths (presets)
Ship three named paths on the hub:

| Path | For | Sequence |
|------|-----|----------|
| **Builder** | engineers shipping agents | Agentic Engineering theme → harness/context articles → benchmarks hygiene → graph cluster |
| **Landscape** | PMs / founders / curious | Timeline → Players → Policy → one Extra deep dive |
| **Trust & evals** | safety/eval-minded | Trust theme → agent-benchmarks set → LifeVal/JEV-style articles |

### 9. Update cadence
| Cadence | Action |
|---------|--------|
| **Weekly** | as-of bump on hub if any article/graph change; fix broken links |
| **Biweekly** | 1–3 new or expanded teachables OR citation passes |
| **Monthly** | Re-run quality checklist subset; publish delta in `/about` |
| **Quarterly** | Full quality re-score; graph regeneration including new sources |

Public “Last reviewed” on hub. Missed cadence → stamp goes stale on purpose (trust signal).

---

## MVP vs later

### MVP (ship or it isn’t a launch)

1. Hosted hub URL with shared nav to Search, Themes, Graph, Timeline, Players, Policy, Benchmarks, About.
2. Search over baseline **86** articles (gap-fill merged if citations landed; else clearly labeled “Orientation (beta)” stubs that still teach).
3. Timeline / Players / Policy / Benchmarks pages that surface existing gap-fill Markdown (or HTML stubs with ledes + links)—not empty “coming soon” walls.
4. Graph explorer + themes HTML under same chrome.
5. About page: method six-pack (systems, evals, source ops, graph, gaps, iteration) + embed/link quality scorecard + how to present on LinkedIn.
6. README on GitHub that opens with the hosted URL and the skill claim—not folder trees.
7. Deep links: every major view has a stable hash or path (`/benchmarks/#leaderboard-limits`).

### Later (post-MVP, do not block launch)

- Gap-fill fully merged into `graph.json` / Logseq / readable index (target ≥150 article hubs).
- Sequoia depth expansion to IBM-comparable teachables.
- Custom domain + Open Graph cards for shareable deep links.
- Player SVG map; policy changelog; benchmark score snapshots.
- Optional RAG/chat **over cited corpus only** with answer→source citations (never as the skill proof itself).
- i18n; print stylesheet; offline PWA cache.

### Explicitly out of launch scope

- Mobile apps, auth, comments, newsletter capture walls, generative “ask anything” without retrieval constraints, paywalls.

---

## Acceptance tests (launch checklist excerpt)

- [ ] Incognito visit to entry URL: hub paints without console errors.
- [ ] Click **Builder** path → reach an article with ≥3 source links in &lt;60s.
- [ ] Search “quantization” → relevant IBM/HF hit opens.
- [ ] Timeline era click → orientation article readable on mobile.
- [ ] Policy EU row → EUR-Lex or equivalent primary link present (after citation pass).
- [ ] About shows quality score and open P0/P1 debts.
- [ ] Shared link to `/graph/` works on cold machine (Pages), not only `file://`.

---

## Metrics (lightweight)

| Metric | Target at launch+2 weeks |
|--------|--------------------------|
| Time-to-first-cited-article (manual user test, n=5 strangers) | median ≤60s |
| Dead nav links | 0 |
| Orientation articles with Sources URLs | 21/21 |
| Hub as-of freshness | ≤14 days |
| External “what is this?” comprehension (one-sentence test) | ≥4/5 pass positioning test |

Vanity traffic is optional. Comprehension + trust are the product KPIs.
