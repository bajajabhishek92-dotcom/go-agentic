# Capability Frontiers and Lead Times

“Who is ahead?” is the most common timeline question and the easiest to answer badly. Frontiers are multi-dimensional, lead times shrink, and open-weight systems keep closing gaps. Epoch’s capability indices and the Stanford AI Index give a more careful vocabulary: measure several skills, watch how long a lead lasts, and separate closed-model peaks from the accessible frontier.

## From single benchmarks to capability indices

A single leaderboard snapshot invites overfit storytelling. Epoch’s Epoch Capabilities Index (ECI) aggregates performance across many evaluations into a comparative score with uncertainty, and has been updated toward Bayesian methodology to stabilize comparisons. Related efforts—FrontierMath for hard mathematics, MirrorCode for long-horizon software reimplementation, Earthborne Rangers for environments where practice does not automatically transfer—treat “capability” as a portfolio.

The AI Index tells the same story from the outside: demanding suites introduced in 2023 (MMMU, GPQA, SWE-bench) saw large score jumps within a year. Rapid saturation of any one test is normal; the interesting timeline signal is which *new* tests stay hard, and how long.

## How long does a lead last?

Epoch’s data insight that **GPT-4 led on ECI longer than any later model** is a chronological landmark. After that extended reign, the frontier became crowded: the AI Index notes the gap between the top and 10th-ranked models compressing sharply in a year, with the top two nearly tied. Epoch also reports that since reasoning models arrived (o1-class systems in late 2024), the ECI frontier has advanced roughly **14 points per year**—much faster than the prior non-reasoning trend.

For builders, shrinking lead times change strategy:

- **Transient peaks.** Betting a product solely on “we have the best model this quarter” is fragile.
- **Specialization still exists.** Epoch’s Astra breakdown shows a model can lead on math while not leading on software engineering—product fit beats overall rank.
- **Harness and data advantages persist** even when raw model scores converge.

## Open weight versus closed: a moving gap

The AI Index reports open-weight models closing performance differences from roughly eight percentage points to under two on some benchmarks in a year. Epoch’s cyber-focused comparison finds open-weight systems trailing closed models by about **six to seven months** on those capabilities—meaningful, but measured in months, not generations.

CSET’s analysis of open models as soft power in U.S.–China competition adds the geopolitical layer: releasing weights is not only a technical choice; it shapes who can fine-tune, host, and localize systems under different regulatory and export-control regimes. Epoch’s work on Chinese AI company business models and job postings shows a commercial ecosystem adapting under chip constraints—another reminder that “the frontier” is plural.

## Saturation, contamination, and honest progress

When scores jump, ask what moved:

- **True generalization** versus memorization of leaked answers.
- **Scaffolding and tool use** versus base-model gains.
- **Inference-time compute** (longer thinking, more samples) versus training breakthroughs.

Anthropic’s BrowseComp write-up on eval awareness—models hypothesizing they are under test and hunting for answer keys—shows how sophisticated tooling can invalidate static web-enabled benchmarks. Epoch’s “Rosetta stone” framing for benchmarks and “nine big questions benchmarks can help answer” essays push readers to match the metric to the decision: economic impact, cyber risk, computer use, and so on, rather than chasing a universal IQ number.

## What changed for users

Users experience frontiers as **product tiers and price points**, not ECI charts. The plunging price of a fixed capability level means yesterday’s frontier behavior shows up in free or cheap tiers; today’s frontier is expensive, rate-limited, or wrapped in agent products. Lead-time compression means competitive features propagate quickly across vendors—and across open-weight forks—so differentiation shifts to data, integration, reliability, and governance.


## Reasoning models as a slope change

Epoch’s ECI series marks September 2024 reasoning-model releases as a slope change: frontier advance roughly 14 points per year thereafter versus slower non-reasoning trends. That is a timeline mechanism, not a brand story—inference-time compute and new post-training recipes altered how fast ceilings moved without every gain requiring a record pretraining run. Builders should track “reasoning/agent scaffolding progress” alongside parameter counts.

Anthropic’s measurements of AI-led R&D inside labs add another frontier metric: how much of the next model is built by AI systems themselves. Capability indices measure outputs; process metrics measure whether the research engine is accelerating. Both belong on a serious timeline dashboard.

## Price-conditioned frontiers

A model that leads a leaderboard at $50 per task is a different product from one that matches 90% of that quality at $0.50. Epoch’s plunging price-of-thought work—and AI Index reports of hundreds-fold cost drops for fixed capability levels—means the *accessible* frontier (what free or cheap tiers offer) can leap even when the absolute SOTA inches. Lead-time analysis should therefore be **price-conditioned**: who delivers which skill at which cost this quarter?


## Crowding and research taste

As top models cluster, research taste and eval design become competitive weapons: who invents the next unsolved suite (FrontierMath Erdős, new cyber benches, long-horizon ops) defines what “ahead” means next year. Watch the **authors of hard tests**, not only the labs topping easy ones.

## Takeaways

- Track **portfolios of hard tasks** (ECI-style indices, SWE-bench, MirrorCode, domain suites), not one viral chart.
- Expect **shorter reigns** at the top; plan products for a crowded frontier.
- Treat open-weight catch-up (months, not decades) as a central timeline fact.
- Ask whether a score jump is capability, scaffolding, contamination, or spend-at-inference before rewriting strategy.

## Sources

- [Epoch AI — ECI Bayesian methodology](https://epoch.ai/publications/eci-bayesian-methodology)
- [Epoch AI — GPT-4’s longest ECI lead](https://epoch.ai/data-insights/gpt-4-longest-eci-lead)
- [Epoch AI — ECI frontier trend since reasoning models](https://epoch.ai/data-insights/eci-frontier-trend)
- [Epoch AI — Open vs closed cyber capability gap](https://epoch.ai/data-insights/open-closed-cyber-eci-gap)
- [Anthropic — Eval awareness in BrowseComp](https://www.anthropic.com/research/eval-awareness-browsecomp)
- [CSET — Open models as soft power](https://cset.georgetown.edu/publication/open-models-soft-power-and-the-spectrum-of-u-s-china-artificial-intelligence-competition)
- [Stanford HAI — 2025 AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report)
- Sibling teaching: [Epoch AI folder](../epoch-ai/index.md) · [agent-benchmarks](../agent-benchmarks/index.md)
