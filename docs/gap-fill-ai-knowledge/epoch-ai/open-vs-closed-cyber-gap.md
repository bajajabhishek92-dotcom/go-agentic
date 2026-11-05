# Open vs Closed Capability Gaps: The Cyber ECI Lag

A recurring policy question—“Are open-weight models already as dangerous as closed APIs?”—needs a measurable answer. Epoch’s **Cyber ECI** slice of the Epoch Capabilities Index estimates how far open-weight models trail closed ones on cybersecurity capability benchmarks, using the same IRT-style latent scale as broader ECI work so scores remain comparable across models that sat different cyber suites.

## The headline lag

Across recent releases, open-weight systems typically trail leading closed models by about **six to seven months** on cyber capability as measured by Cyber ECI. That is a **time lag**, not a permanent qualitative gap: open models keep advancing, but the closed frontier moves too. Epoch’s tables illustrate the pattern with concrete rows—release date, accessibility (API vs open weights), Cyber ECI, and 90% intervals. Closed frontier models (recent GPT / Claude / Gemini classes) sit at the high end; strong open releases (DeepSeek-R1 variants, gpt-oss-class weights, and later open leaders such as high-scoring GLM variants on Cyber ECI) close in but usually land where closed models were months earlier. Restricted-use open weights and fully unrestricted weights both appear—**licensing is not the same as capability**.

Confidence intervals are wide for models with few cyber evaluations. Sparse scores widen uncertainty bands; prefer **trends and intervals** over single-point panic or complacency.

## Why a months-long lag still matters

A six-to-seven-month lag implies that capabilities once limited to monitored API access become **locally runnable**—with different properties for rate limits, logging, kill switches, and misuse controls. Defenders should assume open-weight cyber skill **tracks the frontier with delay**, not that it stays stuck at Llama-3-era levels. Export and release debates should track **domain-specific lags** (cyber ≠ math ≠ coding); a narrow cyber lead or lag does not settle general open-model policy.

The same ECI machinery shows the broader frontier advancing quickly (about **14 ECI points per year** since reasoning-model introductions in related Epoch insights). Domain slices inherit that dynamism: today’s lag estimate is a moving target.

## How to teach the table without overclaiming

- Read accessibility columns carefully: API-only vs downloadable weights change the control story even at similar Cyber ECI.
- Demand enough **overlapping benchmarks** before ranking; IRT helps incomplete matrices but cannot invent signal.
- Separate “open weights exist” from “open weights match Mythos/GPT-class cyber today.”
- Pair Cyber ECI with patch-gap and verification-access debates: capability without defender tooling is only half the dual-use picture.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Takeaways

- Cyber ECI frames open-vs-closed risk as a **measured time lag**, not a binary.
- Local runnability changes monitoring assumptions even when scores trail.
- Wide intervals on sparsely evaluated models are first-class teaching content.
- Update lag estimates as new open and closed releases land—the gap is empirical.

**Sources**

- [Open-weight models trail closed models in cyber capabilities by 6–7 months](https://epoch.ai/data-insights/open-closed-cyber-eci-gap)
- [The ECI frontier has advanced by 14 points per year since the introduction of reasoning models](https://epoch.ai/data-insights/eci-frontier-trend)
