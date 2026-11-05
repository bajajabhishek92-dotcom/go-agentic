# Capability Indices and Bayesian ECI Methodology

Leaderboards that list raw scores on mismatched benchmarks cannot answer “which model is more capable overall?” Epoch’s **Epoch Capabilities Index (ECI)** borrows **Item Response Theory (IRT)** from educational testing so models can be compared even when they sat different exams. The Bayesian methodology update makes the uncertainty in those comparisons first-class.

## From exam scores to a shared capability axis

Classical IRT models the chance a student answers one question correctly. Epoch adapts this to continuous benchmark scores (0–100% scales only): a model’s score is treated as the expected share of items it gets right. A four-parameter logistic setup with **fixed floor and ceiling** (guessing → 0, max achievable → 1) leaves **difficulty** and **slope** to be learned per benchmark. The modeling assumption: performance on every included benchmark depends on a **single latent capability** θ. Predicted score rises with how far θ exceeds benchmark difficulty, scaled by slope—so a model matching a benchmark’s difficulty predicts ~50% after rescaling.

That single-axis assumption is a feature and a limit: it enables incomplete score matrices to speak to one another, but domain specialists should still consult **slices** (cyber, math, SWE) when the research question is specialized.

## Why move to Bayesian estimation

Earlier ECI fits used frequentist machinery. The Bayesian update improves uncertainty handling: posteriors over model abilities and benchmark parameters yield **credible intervals** (the 90% bands readers see on Cyber ECI and frontier charts) and make sparse evaluation matrices less brittle. Teaching points:

- ECI is a **latent-scale index**, not an average of raw percentages.
- Benchmarks with flat or weird score distributions get extreme slopes/difficulties; curation matters.
- Domain slices reuse the same logic on a filtered benchmark set—Cyber ECI is ECI with a cyber exam shortlist, not a different philosophy.
- Methodology versioning matters: Bayesian updates can shift absolute levels even when ranking order is mostly stable—cite the ECI vintage when comparing older charts.

## Reading frontier trends

Epoch reports that since reasoning-model introductions, the **ECI frontier advanced about 14 points per year**. Separately, historical notes such as GPT-4’s unusually long ECI lead illustrate that **dominance duration** varies by era—useful context when people extrapolate “model X will lead forever.” Combine trend speed with lead duration when teaching race narratives: fast frontiers and short reigns can coexist.

## Design principles for consumers of ECI

- Prefer **comparability across incomplete score matrices** over single-benchmark crowns.
- Publish and read **intervals**, especially when a model has few overlapping evals.
- Keep domain indices as **slices**, not substitutes for the full story.
- Ask whether a headline gap is within credible-interval overlap before declaring a new hierarchy.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Takeaways

- ECI translates messy leaderboards into a **shared latent scale** with explicit uncertainty.
- Bayesian posteriors are the difference between a point myth and an interval you can teach.
- Frontier pace (~14 pts/year post-reasoning) and lead duration are separate facts.
- Use slices for domain policy; use full ECI for overall capability narratives.

**Sources**

- [Updating the Epoch Capabilities Index methodology to use a Bayesian model](https://epoch.ai/publications/eci-bayesian-methodology)
- [The ECI frontier has advanced by 14 points per year since the introduction of reasoning models](https://epoch.ai/data-insights/eci-frontier-trend)
- [GPT-4 led in ECI far longer than any other model](https://epoch.ai/data-insights/gpt-4-longest-eci-lead)
