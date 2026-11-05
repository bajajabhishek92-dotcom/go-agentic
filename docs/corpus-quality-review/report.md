---
cursor:
  subagentId: "bc-6c7d43f4-6d9a-57c1-aa95-9271b6961919"
---

# Corpus quality review — Project AI knowledge

**Reviewer:** independent (did not author the corpus)  
**Date:** 2026-11-05  
**Scope:** store docs under `/cursor/stores/self/docs/` (IBM, Sequoia, Extra, graph, themes, readable HTML, gap-fill, Logseq setup)  
**Overall score:** **6.2 / 10**

The baseline teaching stack (IBM + Extra + themes + graph + HTML readers) is usable and often strong. Sequoia depth, store navigation, citation hygiene on orientation themes, and non-integration of gap-fill (~96 new articles) keep the corpus from being a coherent “current world” knowledge product.

---

## Severity key

| Level | Meaning |
|-------|---------|
| **P0** | Blocks finding/learning or actively misleads |
| **P1** | Major quality/coverage gap; fix soon |
| **P2** | Meaningful polish / consistency |
| **P3** | Nice-to-have |

---

## Findings (ranked)

### P0-1 — No corpus start-here; readers land in silos

**Finding:** There is no top-level `/cursor/stores/self/docs/README.md` (or equivalent) that maps all products. Entry points are fragmented: `logseq-setup.md`, per-corpus indexes, `ai-knowledge-graph/index.md`, `ai-knowledge-by-theme/README.md`, `ai-knowledge-articles-readable/README.md`, `gap-fill-ai-knowledge/index.md`. A new reader cannot tell which surface to open first, or that gap-fill exists.

**Fix:** Add `docs/README.md` with a single start-here path (HTML themes → readable articles → gap-fill orientation → Logseq/graph for power users). Cross-link every corpus index to it.

**Applied this review:** created `/cursor/stores/self/docs/README.md`.

---

### P0-2 — Broken companion path: `ai-knowledge-articles` vs `ai-knowledge-articles-readable`

**Finding:** Theme README and `themes.html` link to `../ai-knowledge-articles/articles.html`. That folder **does not exist in the store** (only `ai-knowledge-articles-readable/`). The GitHub repo uses `docs/ai-knowledge-articles/`, so store and repo names diverged. Store symlink creation is blocked (`Operation not permitted`).

**Evidence:**  
- `/cursor/stores/self/docs/ai-knowledge-by-theme/README.md`  
- `/cursor/stores/self/docs/ai-knowledge-by-theme/themes.html` (companion href)  
- Missing: `/cursor/stores/self/docs/ai-knowledge-articles/`

**Fix:** Point store docs at `../ai-knowledge-articles-readable/articles.html`. Align naming with the repo in a later publish pass (or publish the `-readable` name).

**Applied this review:** fixed README + themes.html companion links; clarified readable README.

---

### P0-3 — Gap-fill corpus is invisible from baseline surfaces

**Finding:** Gap-fill already has ~96 teaching articles plus orientation themes (timeline, market players, global policy, agent benchmarks) and its own `index.md`. None of Logseq `Contents`, knowledge graph index, theme essays, or IBM/Sequoia/Extra indexes discover it. The knowledge graph still claims coverage of only IBM/Sequoia/Extra (86 hubs). Readers of the “main” product still miss 2024–2026 orientation material the gap audit correctly identified as missing.

**Evidence:**  
- `/cursor/stores/self/docs/gap-fill-ai-knowledge/index.md`  
- `/cursor/stores/self/docs/ai-knowledge-graph/index.md` (corpora table omits gap-fill)  
- `/cursor/stores/self/docs/logseq-ai-knowledge/pages/Contents.md` (corpora list ends at Extra)

**Fix (handoff to landscape worker + graph/Logseq owners):**  
1. Link gap-fill from every start-here.  
2. Rebuild graph + Logseq + readable HTML to include gap-fill nodes/articles.  
3. Add a short “orientation first” path pointing at the four theme folders.

**Applied this review:** cross-links from docs README, logseq-setup, graph index, IBM/Sequoia/Extra indexes, themes README; landscape handoff written.

---

### P1-1 — Orientation theme articles have zero outbound citations

**Finding:** All 21 articles under `ai-timeline/`, `market-players/`, `global-policy/`, and `agent-benchmarks/` have **no `http` URLs and no Sources section**, despite naming Epoch, Anthropic, AI Index, EU AI Act, NIST, MirrorCode, SWE-bench, etc. Teaching quality is often good (~750–1000 words), but claim verification is blocked. This fails the corpus’s own Extra/IBM citation pattern.

**Evidence:** word/url audit on those folders (0 URLs each). Contrast Extra/IBM articles, which consistently end with **Sources** links.

**Fix:** Add a Sources block per orientation article citing primary pages already implied by the prose (e.g. EUR-Lex for the Act, Epoch MirrorCode, NIST AI RMF, Stanford AI Index, Anthropic BrowseComp/eval posts). Do not invent unnamed studies.

**Handoff:** landscape worker ticket in `handoff-to-landscape-worker.md`.

---

### P1-2 — Sequoia articles are thin summaries, not teachables

**Finding:** 15 of 18 Sequoia articles are under ~350 words; several are ~140–210 words (`defense-edge-ai.md`, `voice-as-interface.md`, `autonomy-at-scale.md`, `path-to-agi.md`, …). They cite YouTube correctly but mostly restate talk frames without enough definition → mechanism → practice for standalone learning. Index promises “standalone teaching article, not a video summary,” which many files fail.

**Evidence:** `/cursor/stores/self/docs/sequoia-ai-knowledge/path-to-agi.md` (~206 words); `/cursor/stores/self/docs/sequoia-ai-knowledge/defense-edge-ai.md` (~138 words).

**Fix:** Expand thin Sequoia pieces to IBM-comparable depth (~800–1200 words) with concrete mechanisms, failure modes, and builder checklists—still transcript-grounded. Prioritize start-here titles: cars-not-horses, own-your-weights, agent-harnesses, path-to-agi, continual-learning.

**Handoff:** content expansion ticket (not applied—requires re-reading transcripts).

---

### P1-3 — Readable Markdown tree is incomplete vs HTML index

**Finding:** `articles.html` / `articles-index.json` correctly cover **86** articles across IBM/Sequoia/Extra. On disk under `ai-knowledge-articles-readable/`, only `ibm/` Markdown files exist (21). Sequoia/Extra Markdown mirrors are missing from the store folder (they exist in the repo under `docs/ai-knowledge-articles/`). README claims every article has YAML frontmatter “in the repo,” which confuses store readers.

**Fix:** Either copy sequoia/extra Markdown into the readable store folder or state clearly that the store deliverable is HTML+index only, with source Markdown living in corpus folders. Prefer syncing to match the repo layout.

**Applied this review:** README accuracy fix only (no bulk file copy this pass).

---

### P1-4 — Theme essays cite titles, not paths or URLs

**Finding:** Each thematic essay ends with “Sources woven in” as bare article titles (no relative links to `/docs/ibm-ai-knowledge/...` or Extra paths). Learners cannot jump from synthesis → primary teachable.

**Evidence:** `/cursor/stores/self/docs/ai-knowledge-by-theme/trust-evaluation-decision-quality.md` Sources section (0 markdown links).

**Fix:** Convert source lists to relative links into corpus folders.

**Applied this review:** linked Sources in all 10 theme essays.

---

### P1-5 — Knowledge graph / Logseq / themes omit gap-fill and are stale relative to 2026 orientation needs

**Finding:** Graph size is frozen at 159 nodes / 86 article hubs from IBM+Sequoia+Extra. Gap-fill orientation themes are exactly the “reader infrastructure” the coverage audit said was missing—but they are not in the graph, Logseq, or `themes.html`. Theme essays also predate Anthropic/Epoch/CSET/policy material.

**Fix:** Regeneration pass: extend `graph.json`, Logseq pages, readable HTML, and optionally an 11th–14th orientation essay or a separate “Landscape” HTML pack.

**Handoff:** landscape + graph workers.

---

### P1-6 — Source bias remains (US labs / vendor / VC) even after gap-fill selection

**Finding:** Baseline is IBM Technology YouTube, Sequoia Capital YouTube, OpenAI, DeepMind, Hugging Face, AWS. Gap-fill correctly adds Anthropic, Epoch, CSET, Google Research, NVIDIA, IEEE Spectrum, FPF—but until integrated, the default reader path is still vendor/VC-heavy. Asia/China, binding regulation, and compute geography exist mainly in the unlinked gap-fill silo.

**Fix:** Make orientation themes the default onboarding path; keep lab blogs as deep dives.

---

### P2-1 — Duplicate Logseq folder clutters the store

**Finding:** `/cursor/stores/self/docs/logseq-ai-knowledge` and `/cursor/stores/self/docs/logseq-ai-knowledge 2` are **identical** (181 files, `diff -rq` empty). Plus `logseq-ai-knowledge.zip`. Risk of editing the wrong copy.

**Fix:** Delete or quarantine the ` 2` copy; keep one zip archive. Add a one-line warning if a stub must remain.

**Applied this review:** stub README inside `logseq-ai-knowledge 2` pointing to the canonical folder (full delete deferred—large tree; coordinator may prefer zip-only).

---

### P2-2 — IBM 300-video expansion incomplete; articles still from prior 100

**Finding:** `videos-300.md` reports 300 listed, 111 full transcripts on disk, 121 pending; theme articles still reflect the earlier 100. Sequoia channel hard-caps at 192. Inventory honesty is good; teaching coverage has not expanded with the inventory.

**Fix:** Finish transcript backfill; then selectively author new teachables for net-new themes only (avoid one-file-per-video). Track in AL-8.

---

### P2-3 — Some DeepMind citation URLs use non-canonical paths

**Finding:** Articles cite `https://deepmind.google/blog/...` URLs that appear to redirect or mirror `blog.google/...` canonical posts (verified Live for Argon safety post). Prefer canonical URLs to reduce link rot.

**Fix:** URL normalize against live redirects when regenerating Extra DeepMind pages.

---

### P2-4 — Duplication across silos without reconciliation

**Finding:** Parallel “context engineering” teachables exist (IBM `context-engineering-for-agents.md` and Anthropic gap-fill `anthropic-news/context-engineering-for-agents.md`). Themes restate corpus ideas. Not wrong, but indexes should cross-link “same concept, different source angle.”

**Fix:** Add `See also` footers between sibling articles; graph edges already partly help for baseline only.

---

### P2-5 — Accessibility / HTML friction

**Finding:** Best UX is local `articles.html` / `themes.html` / `explore.html` (File → Open). GitHub blob view does not run search UI (`publish-main-report.md` already notes this). Logseq requires desktop app + copy. No single hosted reader.

**Fix:** Document “download HTML” path in start-here (done); optional future static host.

---

### P3-1 — Tone / consistency

IBM and Extra articles are generally clear and instructional. Sequoia voice is punchier but shallow. Gap-fill orientation prose is strong. Normalize “Sources” heading and minimum depth (~600 words) as a corpus rule.

---

## What is working (credit)

- IBM articles: consistent teaching structure, Sources with YouTube, solid depth.  
- Extra articles: concept explainers with primary blog URLs (LifeVal, BenchMIRT, etc. spot-checked live).  
- Theme essays: real cross-silo synthesis (~1200–1450 words).  
- Knowledge graph + `explore.html` + Logseq Contents: coherent start-here concepts for the baseline 86.  
- Gap-fill audit + source rationale (`coverage-gaps.md`, `sources.md`) are accurate and appropriately self-critical.  
- Orientation theme substance (eras, EU AI Act, MirrorCode/SWE-bench portfolio) is largely on-target for 2024–2026 when sampled against live Epoch/OpenAI/DeepMind pages.

---

## Scorecard (summary)

| Criterion | Score | Notes |
|-----------|------:|-------|
| Usability / navigation | 5/10 | Broken theme companion path; no docs root until this review; gap-fill orphaned |
| Relevance to current world | 6/10 | Extra/DeepMind/OpenAI fresh; orientation exists but unlinked; Sequoia thin |
| Coverage & depth | 6/10 | Strong agent/inference/coding; landscape present in gap-fill only |
| Accuracy / citation | 6.5/10 | Baseline citations good; orientation themes unsourced; Sequoia under-taught |
| Consistency / freshness / a11y | 6/10 | Naming drift store↔repo; duplicate Logseq; HTML-only best path |
| **Overall** | **6.2/10** | |

---

## Fixes applied this review

1. Created `/cursor/stores/self/docs/README.md` start-here map.  
2. Fixed theme companion links to `ai-knowledge-articles-readable`.  
3. Cross-linked gap-fill from graph, logseq-setup, IBM/Sequoia/Extra indexes, themes README.  
4. Clarified readable README (HTML=86; store md mirrors incomplete).  
5. Linked Sources in 10 theme essays to corpus Markdown paths.  
6. Added duplicate-Logseq warning README.  
7. Wrote structured feedback JSON + landscape handoff.  
8. Fixed FPF index dead link `biometric-math-exemption.md` → `biometric-math-nxt.md` (found by [Audit broken relative links](bc-0b88548b-d3d4-5d9f-a5fb-e0ac9ad14940)).

## Not fixed here (tickets)

- Cite/URL-stamp all 21 orientation theme articles.  
- Expand thin Sequoia teachables.  
- Merge gap-fill into graph, Logseq, readable HTML, themes.  
- Sync store readable Markdown tree with repo.  
- Complete IBM transcript backfill / new articles from 300 inventory.  
- Delete duplicate Logseq tree after coordinator OK.
