# Chip Geography, Imports, and China Supply-Chain Exposure

Where AI chips **land** shapes who can train and serve frontier models inside their borders. Epoch’s chip-supply work turns customs records, sales estimates, and input–output tables into a public map of that geography—and into careful estimates of **diversion** and **shock exposure**.

## Mapping imports: who receives advanced compute

The **AI Chip Imports explorer** estimates how much AI compute has arrived in different countries, quarter by quarter, since 2022. It sits beside Epoch’s datasets on chip components, sales, owners, users, and data centers.

Method sketch:

1. Collect customs records from major destinations; most advanced chips cross at least one border after Taiwan packaging.
2. Net out pure hub transit (e.g. Singapore, Hong Kong).
3. Estimate the AI-related share of server/parts trade; split global sales estimates by destination.
4. Add **China’s domestic production** separately—those chips never appear in import stats.

Outputs are reported in H100-equivalents, units, and trade value. The point for policymakers: **cloud and designer disclosures rarely name deployment countries**, so trade data is one of the few public levers.

## Exposure is not the same as “who has more chips”

A companion study disaggregates semiconductors from coarse electronics categories in international input–output tables. Key comparative finding: **China is more exposed than the US to semiconductor supply disruptions** because chips are a larger share of the cost structure of Chinese final demand. In 2022 figures Epoch cites, every $1,000 of Chinese final demand generated about **$15.2** in semiconductor-producer revenue versus about **$5.7** for the US (~2.7×).

In a modeled **Taiwan disruption plus China–West decoupling**, Chinese advanced-processor prices rise dramatically (on the order of 17× in the central scenario) with ~3% hit to real national expenditure, versus ~20% price rise and ~0.6% expenditure fall for the US. Exact magnitudes move under robustness checks; the **directional gap** does not.

## Diversion and smuggling as a measurement problem

Export controls raise incentives for diversion. Epoch’s chip-smuggling work combines investigative reporting, indictments, and statistical bounds: evidence of diverted/missing chips pointed to nearly **300k H100-equivalents** into China by end-2025 via known channels—already a large share of China’s legal/domestic compute—while a median estimate of **~660k H100e** (wide 90% interval) treats undetected flows as first-class uncertainty. Separate trade-pattern work finds Malaysia→China flows **consistent with multi-billion-dollar** chip diversion.

Teach this carefully: estimates are **ranges with large uncertainty**, not courtroom counts.

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.

## Takeaways

- Geography of compute is a **policy object**, not only a market share chart.
- **Imports ≠ domestic stock**: add local production; subtract hubs.
- **Exposure** (cost share in production networks) differs from **possession**.
- Diversion estimates belong in any serious reading of export-control effectiveness.

**Sources**

- [Introducing the AI Chip Imports explorer](https://epoch.ai/latest/introducing-the-ai-chip-imports-explorer)
- [China is more exposed to semiconductor supply-chain disruptions than the US](https://epoch.ai/publications/china-us-semiconductor-supply-chain-exposure)
- [Diversion and resale: estimating compute smuggling to China](https://epoch.ai/publications/chip-smuggling)
- [Trade data is consistent with more than $3 billion of chips smuggled into China via Malaysia](https://epoch.ai/data-insights/malaysia-china-chip-smuggling)
