# Compute Capacity Doubling and Datacenter Power Records

AI progress is constrained by two physical clocks that Epoch AI tracks carefully: how fast **new chips enter the global stock**, and how fast **single facilities** can grow their power envelopes. Together they turn “scaling laws” into a concrete infrastructure story.

## New compute is still doubling—but slower than the post-GPT-4 surge

Epoch’s AI Chip Sales estimates show quarterly additions of AI computing capacity (in H100-equivalents) growing about **2.5× per year since 2024**. That is still fast—**new global capacity roughly doubles every nine months**—but down from roughly **6× per year in 2023**, when H100-era buildout followed ChatGPT and GPT-4.

The designer mix matters: Nvidia still dominates new H100e shipments, while Google TPUs, AMD, Amazon Trainium, and Chinese designers (Huawei, Cambricon) contribute growing shares. Apparent mid-generation lulls can look like deceleration without being a structural break; Epoch notes that some slowdown signals are **not statistically decisive** and may reflect timing between chip generations (e.g. Rubin sales not yet recognized).

## Facility power records are a second exponential

Chip counts alone miss local physics. Epoch’s Frontier Data Centers dataset tracks **IT power capacity**—power available to chips and servers, excluding cooling overhead—estimated from disclosures, permitting, and satellite imagery.

Since mid-2024, the **record for the largest AI data center by IT power has doubled about every ten months**. xAI’s Colossus 2 is cited around **950 MW**. Planned expansions through 2028 sometimes track that trend and sometimes land at roughly half the extrapolated prediction—small samples and estimate uncertainty leave open whether the power frontier will keep that pace.

A related insight: the record for **compute capacity in a single data center** has been doubling even faster (on the order of every seven months in Epoch’s companion analysis). Power and FLOPs can diverge when packing density and chip efficiency change.

## What to teach from this

- Separate **global addition rates** (chips sold) from **facility records** (local power ceilings).
- Treat post-2023 growth as **still exponential, not collapsed**—but expect generation-to-generation noise.
- Read power trends as evidence of **which physical constraints** (grid interconnects, land, cooling) the industry is currently overcoming.
- Use H100-equivalents as a **comparability unit**, not a claim that every chip is an H100.

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.



## Facility lead times as AI timeline facts

Power procurement, water, and grid interconnect are first-class AI timeline constraints alongside model releases. Teach facility lead times next to parameter counts: announced megawatts are not the same as energized, cooled, networked capacity delivering tokens. Pair this article with Epoch agent-headroom estimates and NVIDIA DSX/cooling pieces so students refuse FLOPs-without-facilities narratives.

**Sources**

- [New global AI computing capacity is doubling every 9 months](https://epoch.ai/data-insights/ai-computing-capacity-additions-doubling)
- [The record for power capacity in a single data center has doubled every 10 months](https://epoch.ai/data-insights/frontier-data-center-power)
- [Broadcom TPU compute shipments doubled from Q2 to Q3 2026](https://epoch.ai/data-insights/tpu-production-doubling)
- [We're scaling our AI Data Centers research](https://epoch.ai/latest/scaling-ai-data-centers-research)
