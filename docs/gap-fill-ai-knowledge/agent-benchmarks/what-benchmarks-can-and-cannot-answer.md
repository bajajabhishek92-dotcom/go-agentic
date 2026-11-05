# What Benchmarks Can and Cannot Answer

Benchmarks are decision tools. Epoch’s essay on **nine big questions benchmarks can help answer** is a useful antidote to both benchmark worship and benchmark nihilism: measurement shines when tied to a concrete question—and fails when asked to prophesy everything.

## Questions benchmarks are good for

Adapted from Epoch’s framing and adjacent eval practice:

1. **Are models improving on a defined skill?** Indices like ECI and hard suites (GPQA, FrontierMath, SWE-bench) track directional progress with error bars.
2. **Where might near-term economic impact unlock?** Coding agents, computer use, and cyber capabilities are examples Epoch flags as high-signal for adoption or risk.
3. **How long do leads last / how crowded is the frontier?** Lead-time analyses and top-vs-10th gaps (AI Index; Epoch GPT-4 lead insight) inform competitive strategy.
4. **Is open weight catching closed?** Measured gaps in months (Epoch cyber comparison; AI Index quality deltas) beat anecdotal claims.
5. **Can systems finish long-horizon work?** MirrorCode-style tasks stress persistence beyond short coding puzzles.
6. **Did our product regress?** Internal suites with fixed tasks answer shipping questions public leaderboards cannot.
7. **Are safety/privacy properties changing?** Emerging privacy benchmarks (FPF) and safety suites fill axes capability boards ignore.
8. **How much does inference spend buy?** Cost-conditioned curves (price of thought; MirrorCode budgets) reveal Pareto fronts.
9. **When should policymakers or labs update risk tiers?** Capability thresholds tied to cyber, bio, or autonomy evals inform pacing debates (Anthropic’s measurements of internal AI R&D pace complement external benches).

## Questions benchmarks answer poorly

- **Will this be good for society overall?** Value-laden, path-dependent, not a leaderboard output.
- **What is the one true IQ of the model?** Skills diverge; math leaders can lag at software engineering.
- **Is AGI here?** Undefined target invites goalpost motion; prefer operational milestones.
- **Will customers pay?** Demoing a task ≠ willingness to integrate, trust, or budget for it.
- **Is the agent aligned?** Behavioral suites help but miss deceptive or rare catastrophic failures—hence independent evals and control stacks.
- **How will open-ended creativity or novel science go?** Some science-agent wins are real; automated discovery evals remain brittle and contamination-prone.

IEEE Spectrum’s coverage of humans-in-the-loop paradoxes and contested “AI solves hard math/prize problems” stories shows how public capability claims can outrun verification norms—another reason to keep scientific and agent evals conservative.

## Matching metric to decision

| Decision | Prefer |
|----------|--------|
| Ship this prompt change? | Private regression suite + cost/latency |
| Adopt a new base model? | Capability suite + harness A/B + safety checks |
| Claim SOTA publicly? | Multiple benches, harness disclosure, contamination review |
| Set enterprise risk tier | Domain tasks, privacy/security probes, human oversight drills |
| Inform policy thresholds | Independent evals, multi-lab replication, clear operational definitions |

Anthropic’s split between measuring **how models are built** (AI-led R&D fraction, oversight coverage, compute allocation) and **what models can do** (capability evals) is a healthy reminder: some critical questions need **process metrics**, not more leaderboards.

## Connecting to timeline and policy themes

Capability indices and agent benches feed the AI timeline (how fast things move) and global policy (when to trigger duties). They do not replace NIST-style risk management or EU conformity evidence, but they supply inputs. Conversely, policy definitions of “systemic risk” or “high-risk use” should inspire new tasks—not only reuse academic trivia. The healthiest ecosystems treat eval science, product QA, and governance as one measurement stack with different audiences.

## A discipline of question-first measurement

Before adding a task to your suite, write one sentence: “This task helps us decide ___.” If you cannot finish the sentence, cut the task. Before citing a public leaderboard in a strategy doc, write: “If this score is wrong by 20%, would our decision change?” If not, you are decorating slides. Epoch’s “Rosetta stone” impulse for benchmarks—translating scores into comparable meaning—belongs inside companies, not only research orgs.


## Communicating uncertainty

When sharing results with executives or regulators, lead with confidence intervals, trial counts, and known failure modes—not a single bold percentage. Independent evaluators (Anthropic’s METR-style access model) exist partly to force that honesty. Overconfident charts create brittle policy and product decisions.



## From scores to operational thresholds

Translate eval results into product rules: “below X pass rate on irreversible-action tasks, require human approval”; “above Y cost per success, degrade to weaker model.” Benchmarks earn their keep when they gate behavior—not when they decorate blog posts.


## Takeaways

- Tie every suite to a **decision question**; retire orphan metrics.
- Use public benches for orientation; use private suites for shipping.
- Reject single-number mystique; report skill portfolios and costs.
- Complement capability scores with process, privacy, and independent assessments when stakes are high.
- Let policy and product definitions drive new tasks—not only academic fashion.

## Sources

- [SWE-bench](https://www.swebench.com/) (incl. Verified / live leaderboard variants as published)
- [Epoch AI — 9 big questions benchmarks can help answer](https://epoch.ai/gradient-updates/9-big-questions-benchmarks-can-help-answer)
- [Epoch AI — ECI Bayesian methodology](https://epoch.ai/publications/eci-bayesian-methodology)
- [Epoch AI — The plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought)
- [Anthropic — Measuring the pace of AI development inside labs](https://www.anthropic.com/institute/measuring-pace-of-ai-development)
- [FPF — Benchmarking privacy in frontier AI](https://fpf.org/blog/what-gets-measured-gets-governed-benchmarking-privacy-in-frontier-ai-development-and-deployment/)
- [Stanford HAI — 2025 AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- Sibling teaching: [Epoch AI folder](../epoch-ai/index.md) · [FPF](../fpf/index.md)
