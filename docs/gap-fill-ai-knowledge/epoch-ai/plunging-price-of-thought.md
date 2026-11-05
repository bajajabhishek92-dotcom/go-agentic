# The Plunging Price of Thought—and Perf-per-Dollar Chips

AI demand bids up chips, power, and electricians. Epoch emphasizes the less-intuited flip side: the **price of a fixed level of model performance** is collapsing extraordinarily fast—while the **performance bought per dollar of new chips** also climbs. Holding both facts at once is the literacy test for AI economics.

## Inference: same score, radically lower cost

In *The plunging price of thought*, Epoch tracks cost to hit fixed scores on hard benchmarks (math, sciences, skill games), adjusting for guessing floors. One vivid comparison: achieving a guessing-adjusted **75% on GPQA Diamond** fell from roughly **$0.30 per question** (o3-era estimate) to about **$0.0004** with a later GPT-5.6-class model—on the order of a **~725×** drop in under 18 months. Framing: like a car sticker price falling from $50,000 to $69.

Across a multi-year, multi-benchmark dataset, the price for a given performance level trends steeply downward. That is the economic signature of a general-purpose technology whose **output** cheapens even as **inputs** get scarce. Token list prices alone mislead; what matters is **cost-to-threshold** on tasks people actually care about.

## Hardware: ~49% more performance per dollar per year

A related chip-market insight: since 2023, the spending-weighted average **performance per dollar** of AI chips purchased each quarter has grown about **49% per year**—doubling roughly every **1.7 years**. Gains arrive in spurts as spend rotates onto new generations (e.g. near-flat through mid-2024, then a jump as Blackwell-class chips dominate new spending).

Bubble charts weighted by quarterly spend make the point: price-performance is not a smooth Moore line; it is a **mix-shift story**. When buyers still purchase last-gen silicon, the average stalls; when spend flips, the average leaps.

## Why both numbers matter together

- Falling **inference $/capability** expands who can afford “PhD-hard” queries and agent loops.
- Rising **chip perf/$** stretches each capital dollar of training/serving capacity.
- Neither erases **power and interconnect bottlenecks**; they change how far each watt and dollar go.
- Macro narratives that only cite rising GPU sticker prices miss the **deflator for cognitive work**.
- Agent economics (many steps, tools, retries) inherit these curves—cheap thought multiplies along trajectories.

## Classroom drills

- Pick a fixed benchmark threshold; chart API cost over two years (guessing-adjusted if possible).
- Separate “GPU expensive” headlines from spend-weighted perf/$ of chips actually purchased.
- Debate: if thought keeps cheapening 100× again, which bottlenecks bind next—power, data, verification, or organization?

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.


## Two curves, one syllabus

Put cost-to-threshold and chip perf/$ on the same week of class as datacenter power constraints. Students should leave able to say: thought got ~725× cheaper on a hard science bar while spend-weighted silicon perf/$ roughly doubled every ~1.7 years—and neither fact cancels interconnect or megawatt limits. Macro takes that only shout “GPUs are expensive” fail the Epoch literacy test.

## Takeaways

- Always quote capability **at a fixed quality bar**, then ask what it costs.
- Separate **token list prices** from **cost-to-threshold** on real benchmarks.
- Read chip generations as discrete jumps in the spend-weighted average, not continuous curves.
- Scarce inputs and plunging output prices can coexist—that is the GPT-era paradox.
- Agent loops amplify cheap thought; budget forecasts should use threshold costs, not vibes.

**Sources**

- [The plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought)
- [The performance per dollar of AI chips purchased each quarter has grown by an average of 49% per year](https://epoch.ai/data-insights/chip-performance-per-dollar)
