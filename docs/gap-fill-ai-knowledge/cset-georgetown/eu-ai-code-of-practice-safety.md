# EU AI Code of Practice: Systemic Risk as a Process

The EU’s AI regulatory stack pairs binding rules with a voluntary **Code of Practice** that operationalizes how general-purpose AI (GPAI) providers should handle **systemic risk**. CSET’s July 2025 analysis of the Safety and Security chapter treats compliance as a continuous loop—not a one-time checklist—and asks whether the Code could become a de facto global template.

## Where the Code sits in the AI Act

The AI Act requires advanced-model providers to mitigate risks; Articles 53 and 55 obligations for GPAI (and systemic-risk GPAI) needed operational detail. The Commission’s three Code chapters—transparency, copyright, and safety/security—supply that detail. GPAI thresholds cited in CSET’s walkthrough include training compute above **10^23 FLOPs** for transparency/copyright duties and above **10^25 FLOPs** for systemic-risk safety duties (capturing well-known frontier models). Adherence is voluntary, but **presumption of conformity** is a strong incentive: regulators may treat Code adherence as demonstrating Act compliance, cutting administrative burden versus bespoke proof.

## Identify → evaluate → estimate → gate release

The safety chapter addresses Article 55(1) obligations by defining a risk-management process that runs whenever major deployment decisions happen—new systemic-risk GPAI market entry or significant updates. Providers must:

- **Identify** potential systemic risks using literature, training-data analysis, incident databases, and expert/lay input.
- **Analyze and evaluate** with state-of-the-art methods (benchmarks, red teaming, human-uplift studies) aimed at each risk.
- Build **risk scenarios** for how harms could unfold post-deployment.
- Feed findings into risk estimation (likelihood × severity) and compare against **pre-defined, measurable acceptance criteria** tied to capabilities.
- Mitigate and **repeat** until residual risk is acceptable across identified risks—then release.

Steps are interconnected: modeling informs eval design; post-market monitoring and independent expertise feed back into analysis. Pre-commitment to thresholds is the anti-rationalization mechanism—teams should not quietly raise tolerance at ship time.

## Lifecycle governance, not a launch PDF

Beyond the pre-release loop, the Code stresses ongoing light-touch evaluations, mitigations, post-market monitoring, incident reporting, and internal accountability structures. CSET’s teaching angle: the chapter sets a **minimum standard of practice** that can exceed ad-hoc industry custom if widely adopted. Global impact may resemble GDPR’s pull—providers serving the EU market standardize processes elsewhere for cost and reputation.

Companion CSET work on **AI governance at the frontier** reminds readers that proposals elsewhere still disagree on oversight actors and which risk techniques work; the EU Code is one operational answer, not the only possible one.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Builder implication

If you ship GPAI into the EU, treat the Code as a **product requirements document** for evidence: which evals, which residual-risk narratives, which incident channels. Pair it with the binding Act calendar in [`../global-policy/eu-ai-act-risk-based-rules.md`](../global-policy/eu-ai-act-risk-based-rules.md)—the Code does not replace EUR-Lex obligations; it operationalizes how providers argue conformity.

## Takeaways

- Systemic-risk compliance is a **feedback loop**, not a single red-team weekend.
- Presumption of conformity makes a “voluntary” code strategically sticky.
- Pre-defined acceptance tiers are the governance innovation to watch for diffusion.
- Continuous monitoring and incident reporting are part of the safety claim, not footnotes.

## Sources

- [AI Safety under the EU AI Code of Practice — A New Global Standard?](https://cset.georgetown.edu/article/eu-ai-code-safety)
- [AI Governance at the Frontier](https://cset.georgetown.edu/publication/ai-governance-at-the-frontier)
- [EUR-Lex — Regulation (EU) 2024/1689 (AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
