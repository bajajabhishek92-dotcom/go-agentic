# Open AI Factory Platforms: Run:ai, DSX, and Predictable Capacity

AI factories turn energy into intelligence—but before the first token, operators must bring compute, networking, storage, power, cooling, and software online as one productive unit. Conventional builds serialize site selection, power/cooling design, rack/cable install, network validation, and service bring-up; specialized labor and dependency delays push back the date infrastructure produces tokens. NVIDIA’s **DSX AI Factory Platform** story has two complementary teachables: **open orchestration software** (Run:ai) and **modular, factory-built capacity** (DSX POD), plus efficiency controls such as MaxLPS under power budgets.

## Run:ai open source as DSX foundation

NVIDIA made the full **Run:ai** platform available as open source, establishing it as an open foundation inside DSX so ecosystem partners and AI clouds can raise workload throughput and GPU utilization on shared Kubernetes infrastructure. Run:ai has historically dynamically allocated GPU resources across data processing, training, and inference lifecycles. The open release includes the integrated platform plus independently adoptable components: **KAI Scheduler**, **GPU Fractioning Operator**, **KAI Resource Management**, and **Workload Map (Karta)**, with additional platform code. Teams can adopt the whole, build products on top, or integrate individual components. Adoption paths include direct open-source install or DSX ecosystem partner offerings.

Teaching point: open orchestration is how factories avoid lock-in at the *scheduling* layer while still sharing operational patterns—fractional GPUs, fair-share, and lifecycle-aware placement—that determine realized utilization more than peak FLOPs marketing.

## DSX POD: move integration upstream

**DSX POD** is a standardized, factory-built implementation model among DSX options. Partners build standardized containers that pre-integrate AI infrastructure, complete critical validation before shipment, and connect to prepared site infrastructure after delivery—reducing onsite integration complexity so operators reach productive capacity faster and more predictably. Rack-scale AI systems combine high-density compute, scale-up/scale-out networking, liquid cooling, power delivery, telemetry, and management software as one system; mechanical, electrical, thermal, and network requirements must stay in spec through factory integration, transport, install, and operation.

NVIDIA’s investment spans rack layout, structural loading, power, cooling, cabling, service access, reliability, and validation—extending the progression from chips/boards to rack-scale systems and SuperPOD-class reference architectures into a factory-built AI factory path. Containerization is not mandatory for every AI factory; conventional and onsite-integrated designs remain options. DSX POD adds a path where schedule predictability and reduced onsite work are priorities, aligned with platforms such as Vera Rubin in the reference design narrative.

## Efficiency under power ceilings: MaxLPS

**DSX MaxLPS** addresses a different bottleneck: site power. Coordinated allocation adjusts participating GPU power limits so more productive work fits under the same managed power budget—validation and enforcement compare measured power against approved group budgets. An evaluation with Nscale on Blackwell Ultra (Kimi K2.5 FP4, Dynamo, TensorRT LLM, mixed high-throughput and low-latency instances) compared a static baseline (35 four-GPU nodes / 140 GPUs) to a MaxLPS configuration (48 nodes / 192 GPUs) that added another high-throughput instance while retaining low-latency capacity—measuring throughput, TTFT, latency, interactivity, and rack power so gains do not hide latency regressions. Teaching point: more GPUs under the same power envelope only help if software coordinates power and workload profiles.

## How to teach open factory platforms

- Separate **orchestration openness** (Run:ai/KAI) from **physical bring-up models** (POD vs onsite).
- Measure time-to-first-productive-token and sustained utilization, not only install day photos.
- Treat fractional GPU and scheduler policy as product features for multi-tenant factories.
- Under constrained power, teach coordinated power limits as a first-class capacity lever.
- Map which layer owns failures: scheduler vs node health vs workload recovery (see companion recovery article).

## Takeaways

- Open Run:ai + modular DSX POD + power-aware controls are the software/hardware bring-up story beyond chips.
- Adopt Run:ai whole or as KAI/fractioning components—match integration depth to your platform team.
- Factory-built PODs trade onsite work for schedule predictability; they do not obsolete all conventional builds.
- MaxLPS-style coordination stretches productive work under fixed power budgets—measure latency alongside throughput.
- Utilization is a systems property of schedulers, power, cooling, and recovery—not a GPU SKU alone.

## Sources

- [NVIDIA Run:ai Is Now Open Source as Part of NVIDIA DSX AI Factory Platform](https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform/)
- [Achieve Productive AI Capacity Faster and More Predictably with NVIDIA DSX POD](https://developer.nvidia.com/blog/achieve-productive-ai-capacity-faster-and-more-predictably-with-nvidia-dsx-pod/)
- [How NVIDIA DSX MaxLPS Maximizes AI Factory Throughput and Efficiency](https://developer.nvidia.com/blog/how-nvidia-dsx-maxlps-maximizes-ai-factory-throughput-and-efficiency/)
