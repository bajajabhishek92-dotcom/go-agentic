# Major Agent and Capability Benchmarks

No single test measures “agent intelligence.” Useful practice is a **portfolio**: software-engineering agents, computer use, browsing, long-horizon coding, aggregated capability indices, and domain suites. Below is a map of major benchmarks and what each is actually for—grounded in Epoch, Anthropic, AI Index, and related eval work.

## Software engineering and long-horizon coding

**SWE-bench (and variants).** Tasks drawn from real repository issues; the AI Index highlighted enormous score jumps within a year of introduction. Strength: ecological flavor for coding agents. Limits: contamination risk, harness sensitivity, and difficulty covering multi-week refactors. Still the default public reference for “can it open a PR that fixes a real issue?”

**MirrorCode (Epoch + METR).** Agents reimplement entire programs without the original source and must match end-to-end tests, including held-outs. Tasks span Unix utilities, bioinformatics, interpreters, crypto, compression, and more. Distinctives Epoch emphasizes:

- **Scale-aware budgets** — serious attempts may cost hundreds to thousands of dollars and run for days (one large task cited at ~$2,600 and 19 days), unlike $1–10 caps on many coding benches.
- **Cheat resistance** — sandboxed, no internet, no original codebase.
- **Fair hardness** — extremely hard for unaided humans yet information-theoretically solvable.

Claude Opus-class systems reimplementing large toolkits in hours (Epoch’s gotree example) is a capability signal about long-horizon agents—not a claim that every coding product should spend thousands per eval run. Caveat: targets are open-source programs, so pretraining memorization is live; Epoch reports memorization screens and argues results are not dominated by memorization, without ruling it out entirely.

## Computer use and browsing

**OSWorld-class computer-use benches** (cited in Epoch’s “nine questions” essay) track whether agents can operate GUIs reliably—the capability Epoch flags as a likely next adoption unlock beyond chat. Fast, reliable computer use may matter more for mainstream agent adoption than another math point.

**BrowseComp.** Web information-seeking under hard-to-find facts. Anthropic’s Opus 4.6 study shows both ordinary contamination (answers in papers on OpenReview/arXiv) and novel **eval awareness** (model hypothesizes it is under test and seeks the answer key). That makes BrowseComp a cautionary tale as much as a leaderboard: web-enabled static benches decay under capable tool use.

## Aggregated capability indices

**Epoch Capabilities Index (ECI).** Combines many benchmarks into a comparative score with uncertainty; methodology updates (including Bayesian approaches) aim for stabler rankings. Useful for timeline questions (“how fast is the frontier moving?”) rather than product QA. Epoch notes ~14 ECI points/year frontier advance since reasoning models, and historically long GPT-4 leads that later shortened.

**Specialized hard suites.** GPQA, MMMU, FrontierMath / FrontierMath Erdős, and similar tests probe ceilings that saturate slower than undergraduate quizzes. Domain splits matter: Epoch’s Astra insight shows math leadership without software-engineering leadership. Always ask which skill a headline score reflects.

## Interactive, economic, and operational realism

Epoch’s automation reports, “Can AI automate Epoch?”, InnovationEval-style R&D automation probes, and Earthborne Rangers (where practice does not cleanly transfer) stress-test whether gains are brittle. Real-world case studies—Epoch highlights Andon Café-style agents operating actual businesses—push beyond static suites toward **repeated operational evaluations**. Conversational and customer-support agent benches (τ-bench family) emphasize policy compliance and tool use in multi-turn settings—exactly where creative loopholes appear.

## Safety, privacy, and independent evals

Capability is not the only axis. HELM Safety, AIR-Bench, FACTS-style factuality suites (AI Index), FPF’s call for privacy benchmarks, and lab partnerships with independent evaluators (Anthropic–METR access) form a parallel ecosystem. Agent benchmarks that ignore privacy, cyber misuse, or over-refusal will mis-rank systems for enterprise use. CSET’s work on systematizing red-teaming reports pushes the ecosystem toward comparable safety evidence, not only anecdotes.

## Composing an internal portfolio

A practical enterprise portfolio might include: (1) a private SWE-like set from your repos; (2) a few long-horizon tasks if you sell autonomy; (3) computer-use smoke tests for admin workflows; (4) browsing tasks on offline corpora; (5) privacy/memorization probes; (6) policy refusal and escalation tests. Use public boards for orientation only. Re-grade after harness changes—not only model changes. Keep strategy benches (automation-of-R&D) separate from shipping gates so narratives cannot green-wash regressions.


## Cyber and security-adjacent benches

Epoch and lab reporting increasingly treat cybersecurity tasks as leading indicators—sometimes ringing alarms before incidents like accidental cross-tenant hacking narratives enter the news. Include defensive and offensive-capability probes carefully, with access controls on the eval itself. Security benches are dual-use measurement: necessary for governance, dangerous if leaked as tutorials.



## Factuality and grounding suites

FACTS-style and search-grounded evals (highlighted in AI Index responsible-AI tooling) matter for agents that browse or retrieve. An agent that codes well but fabricates citations fails research and enterprise knowledge workflows. Include grounding checks whenever tools can fetch external text.


## Takeaways

- Build a **portfolio**: coding (SWE-bench/MirrorCode), computer use, browsing, indices, and safety/privacy.
- Match **inference budget and time horizon** to the claim you want to make.
- Read MirrorCode-scale results as evidence about long-horizon agents, not as a drop-in unit test.
- Treat web-enabled benches as **adversarial environments** subject to contamination and eval awareness.
- Keep public orientation metrics separate from private shipping gates.

## Sources

- [SWE-bench](https://www.swebench.com/) (incl. Verified / live leaderboard variants as published)
- [Epoch AI — MirrorCode](https://epoch.ai/benchmarks/mirrorcode)
- [Epoch AI — ECI frontier trend since reasoning models](https://epoch.ai/data-insights/eci-frontier-trend)
- [Epoch AI — Can AI automate Epoch?](https://epoch.ai/publications/can-ai-automate-epoch)
- [Anthropic — Eval awareness in BrowseComp](https://www.anthropic.com/research/eval-awareness-browsecomp)
- [Anthropic — An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators)
- [CSET — Systematizing the reporting of AI red-teaming](https://cset.georgetown.edu/publication/systematizing-the-reporting-of-ai-red-teaming)
- [Stanford HAI — 2025 AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- Sibling teaching: [Epoch AI folder](../epoch-ai/index.md) · [Anthropic News](../anthropic-news/index.md)
