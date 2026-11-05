# Intelligence Per Watt: Rethinking the Computing Substrate

Most AI efficiency work optimizes algorithms or GPU kernels. Naveen Rao (Unconventional AI) argues the deeper limit is the **physical substrate** of computation—and that brains are an existence proof the industry underweights. The teaching frame is **intelligence per watt**: useful cognition delivered per unit energy, not FLOPS marketed on a slide. Digital accelerators improved cost and packaging faster than true energy per useful operation once memory traffic is counted. If AGI-scale ambition collides with the grid, substrate becomes strategy.

## The energy wall

Human brains run on roughly **20W** each. Aggregate that across humanity and you get on the order of **~160GW** of biological compute—set against global electrical capacity measured in thousands of gigawatts, with AI training and inference racing to claim an alarming share. Rao’s point is not a precise forecast of blackouts; it is that **energy, not ideas**, becomes the binding constraint within a few years if trajectories continue.

Biology’s gap versus machines is not a rounding error. A macaque brain is probably under a watt; complex mammalian and insect behaviors run on **milliwatts**. A phone is about a watt; a squirrel leaping branch to branch may run on less than **10mW**—on the order of 1/100 of that phone—while solving perception and control problems we still struggle to match with much larger computers. Tokens-per-second favor machines; discovery-grade intelligence still looks expensive in joules.

## Thermodynamic and lithographic bounds

There is a physical asymptote: the **Landauer principle** bounds how much irreversible computation you can buy per unit energy. Biology sits high on the efficiency curve after billions of years of evolution, yet Rao places it still perhaps **~100×** (an order or two of magnitude) short of that thermodynamic limit. Modern digital practice sits far lower. Limits of **2D lithography** define another ceiling for conventional chips. Focused effort might push toward lithography’s edge—still, in his sketch, something like **three orders of magnitude** better than where we are today on energy efficiency—and still short of biology’s neighborhood, let alone Landauer.

Crucially, advertised FP8 flop efficiency has not moved like sticker prices: manufacturing and packaging got cheaper; **energy per flop with memory access** improved only incrementally. That is why “buy more GPUs” is a cost story that eventually becomes a physics story.

## Mechanism: non-von Neumann dynamics

Brains do not primarily compute by matrix math on a von Neumann shuttle between memory and ALU. They use **nonlinear dynamics**: time-varying interactions among neurons *are* the compute. The systems are stochastic; they are not brittle one-and-zero machines where a single bit flip voids the program.

Rao’s engineering direction: **trainable coupled oscillators** and related dynamical circuits. Classic Kuramoto synchronization shows rigidly coupled oscillators converging regardless of start state. Generalize to a **trainable coupling fabric** and the system can traverse rich state-space trajectories. Training becomes **steering** those trajectories—not endlessly writing tensors out, operating, and writing back. In his demo framing, physics runs after an initial condition (and optional early error signal); state is implicit in the evolving system. Energy burns less on memory traffic because **state and function overlap**.

This is truly **non-von Neumann** relative to CPUs (fast single-thread memory loops), GPUs (wide operand batches still crossing memory), and even compute-in-memory designs that still largely linearize time. Unconventional’s claim is not that GPUs stop mattering tomorrow, but that ASI-level abundance likely needs a different abstraction than 1940s digital floating-point machines adapted to other workloads.

Startup advantage, in his telling, is lack of baggage: months from no team to prototype tapeout cycles versus incumbent roadmaps—accelerated by using AI in the design loop itself.

## Why builders should care now

Even if you never fabricate oscillators:

- Make **energy per task** a first-class KPI alongside latency and quality.
- Expect co-design between models and machines to intensify; architectures that assume infinite HBM movement will age poorly.
- Plan products and margins for a world where “just scale the cluster” collides with power delivery, not only chip supply.
- Watch substrate research as option value: the winners of the next decade may own different primitives than CUDA comfort suggests.

## Failure modes

- Confusing cheaper tokens with thermodynamic progress.
- Ignoring memory movement when quoting efficiency.
- Betting entire roadmaps on unbounded digital scale without power, cooling, and siting plans.
- Dismissing biology as metaphor only—then being surprised when efficiency gaps dominate unit economics.
- Overclaiming near-term replacement of GPUs; the honest stance is parallel research, not instant substitution.

### Practice checklist

- Report joules (or watts × time) per successful task in internal dashboards
- Separate algorithmic wins from packaging/cost wins in efficiency reviews
- Include power and interconnect constraints in capacity planning, not only GPU counts
- Prefer model/serving designs that reduce memory traffic for the same quality
- Track substrate and unconventional-compute research as strategic awareness, not only vendor roadmaps
- Avoid demo metrics that hide energy (e.g., quality at unlimited batching power)
- When evaluating infra vendors, ask about energy per useful operation with memory, not peak FLOPS alone

### Sources

- [Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao](https://www.youtube.com/watch?v=Zw1J5pJJMGw)
