# Make it pop — world-class design & content moves

Goal: the Atlas should feel like **Epoch × Stripe Docs × a staff engineer’s runbook**—precise, alive, shareable—not another cream-serif “AI learning hub” or purple-glow SaaS template.

**Visual direction (locked):** *Forge Atlas*  
- Ground: cool paper `#E8ECF1` → ink `#0B1220`  
- Single signal accent: cobalt `#1F4BFF` (links, active, CTAs)  
- Secondary data ink: teal-gray `#2A6F6B` for “as-of” / meta only  
- Type: **Syne** (brand/display) + **Source Serif 4** (article body) + **IBM Plex Mono** (counts, IDs, as-of)  
- Motion: 2–3 intentional only (hub hero line draw, timeline scrub fade, graph node focus)  
- **Forbidden:** purple gradients, warm cream `#F4F1EA` academic default, terracotta accents, broadsheet hairline-newspaper grids, glow stacks, pill clouds, emoji, multi-layer card farms, dark-mode-by-default cosplay

Existing `themes.html` / `articles.html` use warm cream + teal—**acceptable as legacy readers**; new hub/preview must establish Forge Atlas and gradually restyle children to match.

---

## Content moves that create presence

### 1. Hero narrative (one composition)
First viewport contains **only**:
1. Brand: **AI Engineering Atlas** (hero-level—larger than the headline)
2. One headline: e.g. *A cited map of how AI systems actually get built*
3. One supporting sentence: method in plain language (sources → teachables → graph → review)
4. One CTA group: `Start learning` · `Explore the map` · `Search`
5. One dominant visual plane: full-bleed abstract **systems map** (nodes/edges motif), edge-to-edge—not an inset card collage

No stats strip (“86 articles · 159 nodes”) in the hero. Put inventory in a quiet meta line under the fold or in the footer.

### 2. Living timeline
- Vertical eras as **operating regimes**, not launch logos.
- Each node: year band · regime name · one-line “what builders had to change” · deep link.
- Sticky “you are here” marker for *Agent / multimodal / physical AI*.
- Shareable deep link: `/timeline/#transformers-foundation`.

### 3. Interactive players map
- MVP: role lattice (6–8 roles) with short “what they optimize for” copy; click → teachable.
- Pop moment: hover reveals **constraints** (export controls, energy, capital, open-weight soft power)—not vanity logos.
- Avoid logo walls; prefer role typography + one diagram.

### 4. Player / regime / benchmark cards (interaction containers only)
Cards are allowed **only** when they are the click target for a lane (Player, Policy regime, Benchmark).  
Each card pattern:
- Title + role
- One-sentence job-to-be-done
- As-of mono date
- Primary source chip (text link, not a pill pile)
- Open →

If removing the border doesn’t hurt interaction, remove it.

### 5. Benchmark ledger
- Dense, editorial table—not gamified trophies.
- Columns: Benchmark · Claims to measure · Failure mode · Teachable · As-of
- Opening lede: *Leaderboards are not evaluation systems.* Link to hygiene articles.
- Visual pop: monospace IDs + cobalt row focus on keyboard nav.

### 6. “As of” freshness everywhere
- Hub: `AS OF 2026-11-05` in Plex Mono, top-right of chrome.
- Every orientation/policy/benchmark page repeats as-of.
- Stale (&gt;14 days with no changelog) → accent shifts to warning amber `#B45309` on the stamp only—forces cadence without nagging copy.

### 7. Shareable deep links
Stable paths + hashes for: eras, player roles, policy regimes, benchmark rows, graph node IDs, theme IDs.  
Open Graph later: title = brand + specific node; description = one-line definition from `graph.json`.

### 8. Quality scorecard as a feature
Don’t hide the **6.2/10**. Put a compact “Corpus health” module on About (and a one-line link in footer): score, top open P0/P1, link to full review. World-class products show their instrumentation.

### 9. Start-here as product, not README
Three large text links (Builder / Landscape / Trust)—not a maze of corpus folders. Each path is a curated sequence page with progress ticks.

### 10. Citation UX that feels engineered
Inline source footnotes or end **Sources** with real URLs; optional hover preview of source title. Never “Sources woven in” as bare titles (already fixed on themes—enforce everywhere).

---

## Design moves (implementation-level)

| Move | Spec |
|------|------|
| Brand first | Wordmark occupies ~1/3 of hero height on desktop; headline cannot overpower it |
| Full-bleed hero visual | SVG/CSS systems lattice behind/around type; edge-to-edge; no rounded media card |
| Shared chrome | Thin top bar: Atlas · Search · Timeline · Players · Policy · Benchmarks · Graph · Themes · About |
| Section discipline | One job, one headline, one sentence per section below fold |
| Motion budget | (1) hero edge draw 600ms once, (2) timeline node enter on scroll, (3) graph selection crossfade—no scroll-jacking |
| Mobile | Single column; chrome collapses to “Menu”; hero brand still dominant |
| Contrast | Body text ≥4.5:1 on paper; cobalt links underlined on focus |

---

## Copy voice

- Precise, slightly dry, builder-facing.
- Prefer “harness,” “eval,” “regime,” “constraint” over “journey,” “unlock,” “supercharge.”
- Headlines state mechanisms; subcopy states stakes.
- Ban: “Ultimate guide,” “everything you need,” “in the age of AI,” emoji bullets.

**Example hub headline set (pick one):**
1. *A cited map of how AI systems actually get built*
2. *From sources to graph: an engineer’s atlas of the agent era*
3. *Teachables, edges, and evals—not another link dump*

---

## Anti-slop checklist (review before any visual ship)

- [ ] Could this first viewport belong to another brand if the wordmark were removed? If yes, strengthen brand.
- [ ] Any purple / glow / cream-terracotta / newspaper grid? Kill it.
- [ ] More than one CTA purpose in the hero? Cut.
- [ ] Stats, schedules, or promo chips in viewport one? Move below.
- [ ] Cards used as decoration? Flatten.
- [ ] Motion without hierarchy job? Remove.

---

## “Pop” proof moments (demo script)

1. Open hub → brand hits immediately; click **Landscape**.  
2. Timeline → jump to agent era → open eras article with Sources.  
3. Players → Hyperscalers card → teachable on custom silicon.  
4. Benchmarks → open “leaderboard limits” → share URL with a colleague.  
5. Graph → filter Trust/Evals → open LifeVal article via node.  
6. About → show 6.2/10 scorecard and what’s fixing next.

If that six-beat demo feels inevitable, the product pops. If the demo needs apologizing for folders, it doesn’t.
