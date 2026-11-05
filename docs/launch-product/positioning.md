# Positioning — evidence of AI engineering skill

**Product working name:** AI Engineering Atlas (AEA)  
**Owner story:** Abhishek Bajaj built a living, cited, evaluable map of the AI stack—not a pile of video summaries.  
**Audience for the proof:** hiring managers, staff/principal engineers, founders, research ops, policy-adjacent builders.

---

## One-line claim

> I design **knowledge systems** for AI the way production engineers design **control planes**: sources → teachables → graph → eval surface → iteration under review.

That claim is only credible if the corpus *behaves* like engineered evidence. Summarizing YouTube is a hobby. Shipping a navigable atlas with typed edges, start-here paths, citation hygiene, gap audits, and a public quality scorecard is the portfolio.

---

## What this corpus is evidence *of*

| Skill signal | Where it shows up in the work | Why a senior reviewer believes it |
|--------------|-------------------------------|-----------------------------------|
| **Systems thinking** | 10 concept clusters; typed edges (`enables`, `constrains`, `solves`, `prerequisite`); orientation layers (timeline → players → policy → benchmarks) before techniques | Shows the world as a dependency graph, not a feed of posts |
| **Evaluation rigor** | Agent-benchmark curriculum; LifeVal / BenchMIRT / JEV-style teachables; explicit “what benchmarks can/cannot answer” | Treats claims as testable; refuses leaderboard worship |
| **Source operations** | Multi-publisher pipeline (IBM, Sequoia, OpenAI, HF, DeepMind, AWS + Anthropic, Epoch, CSET, NVIDIA, IEEE, FPF); inventory honesty on 100→300 video expansion | Shows intake, triage, and provenance—not cherry-picked vibes |
| **Knowledge graphs** | `graph.json` (159 nodes / 259 edges / 86 hubs) + interactive explorer + Logseq export | Machine-readable structure; concepts-first, articles-as-hubs |
| **Gap analysis** | `coverage-gaps.md` + intentional gap-fill corpus; quality review scored **6.2/10** with P0/P1 tickets | Self-critical measurement beats vanity completeness |
| **Iteration under review** | Independent corpus quality review, checklist, applied nav fixes, open handoffs | Engineering culture: ship → measure → fix → remeasure |

Frame every LinkedIn/GitHub/README mention around these six verbs: **map, cite, evaluate, gap-fill, graph, iterate**.

---

## The narrative arc (how to tell the story)

1. **Problem:** AI knowledge is fragmented (lab blogs, VC talks, regulation PDFs, leaderboards). Builders either drown or cargo-cult.
2. **Method:** Extract → teachable articles (definition → mechanism → practice → sources) → theme synthesis → concept graph → orientation layer for 2024–2026 landscape.
3. **Artifacts:** Searchable HTML reader, theme pack, graph explorer, gap-fill orientation (timeline / players / policy / benchmarks), quality scorecard.
4. **Proof of engineering:** Public gaps (Sequoia depth, citation holes on orientation themes, graph not yet merged with gap-fill) are *features of honesty*, not secrets. Show the ticket list.
5. **Productization:** One entry URL that makes the atlas usable by a stranger in under 60 seconds.

Do **not** lead with “I watched 200 YouTube videos.” Lead with “I built a cited atlas of agentic systems with a typed knowledge graph and an external quality review.”

---

## Anti-patterns (kill these before launch)

### Content anti-patterns
- **YouTube summary cosplay** — restating talk frames without definition → mechanism → failure modes → builder checklist. Thin Sequoia pieces (~140–350 words) currently fail this bar; expand or demote.
- **Uncited orientation** — naming Epoch / EU AI Act / NIST / SWE-bench with zero URLs. Orientation without sources is opinion, not engineering.
- **Vendor feed as truth** — shipping only IBM/Sequoia/lab blogs as the default path. Landscape (policy, chips geography, China/Asia, open-weight governance) must be first-class onboarding.
- **Fake completeness** — claiming “300 videos covered” when articles still reflect ~100. Prefer inventory honesty (already started in `videos-300.md`).

### Product anti-patterns
- **Silo landing** — separate HTML files with no hub. Strangers bounce. One URL or it doesn’t exist.
- **GitHub-blob-as-app** — blob view doesn’t run search/graph UIs. Host static Pages (or equivalent) or you have no product.
- **Logseq-required for value** — fine as power-user mode; never the only path.
- **Card farm / AI-slop UI** — purple gradients, pill clusters, stat strips, emoji. Looks generated; undermines “engineer” claim.

### Positioning anti-patterns
- **“I used AI to learn AI”** as the headline — trivializes the systems work.
- **Influencer curriculum tone** — “10 things every AI engineer must know.” Teach mechanisms; earn authority.
- **Hiding the 6.2/10 review** — burying criticism looks insecure. Publishing the scorecard with a re-score plan looks staff-level.

---

## Competitive frame (what “#1 usable” beats)

Not competing with Arxiv, Hugging Face papers, or Epoch’s research. Competing with:

| Alternative | Failure mode | Atlas win |
|-------------|--------------|-----------|
| Random bookmark folders | No structure | Typed graph + start-here paths |
| Newsletter roundups | Ephemeral, uncited | Durable teachables + Sources |
| Course marketplaces | Paywalled, outdated | Open static site, freshness stamps |
| Raw Logseq/Obsidian dumps | High friction | Browser hub first |
| Lab marketing hubs | Single-vendor bias | Multi-source + policy/geo |

**Usability definition for positioning:** a cold visitor can answer “where do I start on agents / evals / policy?” in one click, with citations visible without leaving the page flow.

---

## Portfolio translation (what reviewers should conclude)

After 5 minutes on the site, a hiring manager should be able to say:

1. This person can **structure ambiguous domains**.
2. This person cares about **evidence and evaluation**.
3. This person ships **interfaces**, not just notes.
4. This person **finds and closes gaps** under scrutiny.
5. This person will treat production AI the same way—systems, metrics, iteration.

If any of those five cannot be inferred from the landing alone, the positioning failed—not the article count.

---

## Non-goals (protect the brand)

- Becoming a news site or model-release ticker.
- Replacing primary sources (papers, EUR-Lex, NIST docs)—link out.
- Maximal article count as a vanity metric.
- Chatbot wrapper as the “product” (optional later; never the proof of skill).

---

## Success test for positioning

Ask a peer who has never seen the repo:

> “In one sentence, what did Abhishek build, and what skill does it prove?”

Pass answers sound like: *“A cited AI engineering knowledge atlas with a graph and eval/policy orientation—shows systems + evaluation discipline.”*  
Fail answers sound like: *“He summarized a bunch of AI YouTube videos.”*
