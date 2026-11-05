---
title: Energy, Goodput, and the Physics of Frontier AI
slug: a-energy-and-goodput
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Inference, Efficiency & Infrastructure
cluster_id: inference-infra
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/inference-infra
keywords:
- memory-wall
- energy-goodput-constraints
- sequoia
- inference-infra
- cluster-inference-infra
- corpus-sequoia-ai-knowledge
- article
- energy
- physics
- goodput
- frontier
- www.youtube.com/watch
- intelligence
- https
summary: 'Model-quality narratives often ignore the industrial reality underneath: frontier AI is becoming an energy-and-systems problem as much as an algorithms problem. Sequoia conversations with Crusoe’s Chase Lochmiller, Google’s Amin Vahdat, NVIDIA’s Jensen Huang, and Starcloud’s…'
related:
- Energy & Goodput Constraints
- Memory Wall
path: sequoia/energy-and-goodput.md
---

# Energy, Goodput, and the Physics of Frontier AI

Model-quality narratives often ignore the industrial reality underneath: frontier AI is becoming an **energy-and-systems** problem as much as an algorithms problem. Sequoia conversations with Crusoe’s Chase Lochmiller, Google’s Amin Vahdat, NVIDIA’s Jensen Huang, and Starcloud’s Philip Johnston push the same lesson from different altitudes—electrons, failure physics, paid useful work, and even whether Earth remains the cheapest place to put compute.

## Definition: feedstock, factories, and goodput

Treat three terms as load-bearing.

**AI factory.** Huang’s framing: not a metaphor for “a big GPU pile,” but an industrial stack that turns power and capital into generated intelligence—chips and networking, land/power/shell/ops, models, and finally agentic systems that do paid work. The layers below the model (power, packaging, fabrics, cooling) are no longer background; they are the scarce inputs.

**Stranded (or underpriced) energy → intelligence.** Lochmiller’s Crusoe thesis, signaled in Sequoia’s “turning stranded energy into intelligence” framing, is geographic and thermodynamic: site compute where electrons are abundant or underutilized, and treat power as the feedstock of training and inference. Even without a complete transcript of that interview in the local corpus, the strategic claim is the one builders keep rediscovering—**site selection is model strategy**.

**Goodput.** Vahdat’s corrective to vanity metrics: not peak FLOPS on a slide, but the **useful work a workload actually delivers** after slowdowns, failures, restarts, and recovery. Throughput says you are busy; goodput asks whether you finished the job you cared about, on the wall-clock that finance feels.

## Mechanism: why physics shows up in the P&L

At small scale, a failed accelerator is an annoyance. At **1,000–100,000** tightly synchronized accelerators—Vahdat’s concrete range—components must coordinate at microsecond-to-millisecond granularity. One stop can stall the synchronous job. Then you ask: which unit failed, what checkpoint exists, how do we restore, or must we restart from the beginning? He notes that at ~100,000-accelerator scale, something fails **multiple times an hour**. Detection, telemetry, and near-real-time recovery become first-class systems work; optical tricks (e.g., rerouting light to a spare rack in milliseconds) exist because waiting on human ops is too slow.

That is why “buy more GPUs” is an incomplete scaling plan. Networking, checkpoint discipline, storage bandwidth, and CPU/host capacity matter—especially as **long-horizon agents** drive demand for CPUs and storage alongside accelerators. The economics follow: theoretical teraflops that die in recovery tax are not what you bought.

Huang’s commercial mechanism closes the loop. Early generative systems could impress without being *valuable* in the labor sense. Once systems become **agentic**—able to use tools and produce useful work—you can pay for them by the hour (he cites everyday paid usage on the order of tens of dollars per hour of work). Monetized useful work justifies infrastructure spend; it also intensifies competition for every scarce layer of the cake: silicon, networking, land, power, and operators.

Starcloud pushes the boundary further. Johnston argues declining launch costs plus rising terrestrial energy and land constraints could make **space-based data centers** competitive: continuous high-intensity solar without atmosphere, and a cost curve that may fall while Earth sites get harder. The hard problems, in his telling, are **heat and radiation**—vacuum makes heat rejection difficult despite the “space is cold” intuition—not a sci-fi cold-room fantasy. Whether or not you buy the timeline, the teaching point stands: long-run compute location is a physics-and-capex question, not only a cloud SKU question.

## Practice implications for builders

- **Price reliability into TCO.** GPU list price ignores restart tax, idle during recovery, and engineer time spent on failed runs.
- **Instrument goodput.** Track delivered useful work for *your* training and serving jobs under real failure conditions—not brochure FLOPS.
- **Design for partial failure.** Checkpoint cadence, restart granularity, and fabric redundancy are product features of the training system.
- **Site for power and latency.** Energy availability, interconnection queues, cooling water/air, and distance to users are roadmap inputs.
- **Expect agentic load shapes.** Agents stretch host CPU, storage, and network differently than pure dense matmuls; capacity plan accordingly.
- **Treat energy timing as near-term.** Constraint arrival is measured in years of interconnection and generation buildout—not abstract decades.

## Failure modes

- **FLOPS vanity.** Celebrating cluster size while goodput collapses under correlated failures.
- **Synchronous fragility.** Architectures that assume perfect uptime at 100k-scale coordination.
- **Power-last planning.** Choosing regions for talent branding while interconnection queues make GPUs orphaned assets.
- **Ignoring the stack below the model.** Underinvesting in networking, checkpoint storage, and ops telemetry.
- **Paying for intelligence, not work.** Deploying chat novelty without a path to billable useful work that funds the factory (Huang’s value distinction).
- **Earth-only dogma—or space hype without thermal math.** Either dismissing location physics or hand-waving heat/radiation.

### Practice checklist

- Budget reliability, checkpoint, and restart cost into training TCO—not only accelerator sticker price
- Track goodput and utilization beside model quality metrics on every major run
- Make site selection an explicit AI strategy decision: power, cooling, latency, and expansion headroom
- Capacity-plan CPUs, storage, and network for agentic workloads, not only dense training
- Prefer designs that degrade and recover locally over all-or-nothing synchronous failure
- Assume energy and interconnection constraints arrive on business-planning horizons, not “someday”
- Revisit whether incremental demand should buy more chips, more reliability software, or a different site

### Sources

- [Turning Stranded Energy Into Intelligence: Crusoe CEO Chase Lochmiller](https://www.youtube.com/watch?v=64vUl9k-IAQ)
- [Google's AI Infrastructure Chief, Amin Vahdat, on the Physics & Economics of Frontier AI](https://www.youtube.com/watch?v=bGph8GwB3Sk)
- [NVIDIA's Jensen Huang on Building the Dynamo of the Intelligence Age](https://www.youtube.com/watch?v=2UpQbeAZuqA)
- [Starcloud's Philip Johnston: Why the Cheapest Compute Will Be in Space](https://www.youtube.com/watch?v=94b6i5jI1nE)
