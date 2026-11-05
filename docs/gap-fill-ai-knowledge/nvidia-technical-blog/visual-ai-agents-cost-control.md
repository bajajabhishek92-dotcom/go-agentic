# Visual AI Agents: Cut Build Time and Runtime Tokens

Visual AI agents that watch warehouses, factories, or cities fail economically in two places: **composition time** (weeks of microservice wiring) and **runtime tokens** (VLMs scoring every patch of every frame). NVIDIA VSS Blueprint 3.3 attacks both: a Build Vision Agent skill that composes validated deployments from intent, and **adaptive EVS** (Efficient Video Sampling) that prunes unchanged visual tokens and batches VLM work around moments when something happens.

## Development cost: compose, don’t rebuild

Earlier VSS skills handled individual operations—deployment, camera setup, summarization, search, alerts, analytics. VSS 3.3 organizes them as deployment skills, operation skills, tools, and benchmarks, with **vss-build-vision-ai** composing the rest. Developers describe the application they want; the Build Vision Agent skill translates intent into a deployment plan spanning profiles, microservices, configuration, and runtime operations. Rather than generating a stack from scratch, the skill starts from the closest of **four validated developer profiles**, then extends a running deployment without rebuilding the whole stack—traffic management and incremental change included.

The teaching metaphor in the blog animation: one prompt becomes a composed, validated, running visual AI agent (e.g., warehouse) that returns confirmed/rejected search clips and a reasoned answer to questions like “Is this a safety violation?” Composition blueprints and coding-agent skills that emit deploy plans cut build time the way EVS cuts runtime.

The four Foundation profiles are concrete capability stacks, not vague templates: **`base`** (VLM dense captioning and Q&A on clips), **`alerts`** (real-time VLM alerting, or RT-CV detection with behavior analytics and VLM alert verification), **`lvs`** (long video summarization), and **`search`** (object/video embeddings with agentic search). The skill picks the closest Foundation by delta size, then adds or removes only exact service keys, keeps services a requested capability actually reaches, and converges shared roles onto one instance—two capabilities that need a detector share one detector; Kafka/Elasticsearch are shared with separate indices. When rules cannot settle a choice, the skill asks one structured question instead of guessing. That delta discipline is the anti-pattern to “generate a whole Compose file from a vibe.”

## Runtime cost: adaptive EVS

EVS already ships in vLLM and Cosmos NIM microservices at a fixed pruning rate. The **adaptive** version in VSS 3.3 integrates into the real-time VLM microservice and decides which tokens to keep **per patch and per frame**, pruning parts of a frame that did not change versus the previous one and batching VLM work around change events. Static scenes flatten EVS gains; realistic change rates and concurrent streams per GPU are the right benchmarks.

Separate composition time from runtime tokens in TCO models. A team can win on build time with the Build Vision Agent skill and still lose in production if every camera stream pays full VLM tokens on empty corridors. Conversely, aggressive pruning without recall SLOs on held-out incident clips creates silent safety debt. Keep detection→retrieval→summary as a pipeline with evals at each stage so cheaper sampling does not silently drop safety-critical frames. Extend running deployments rather than rebuilding—traffic management and incremental capability adds are first-class in the 3.3 skill model.

## Why visual agents are different from chat agents

Chat agents mostly pay for text tokens; visual agents pay for **pixels × streams × time**. That changes architecture: you need shared infrastructure (message buses, indexes, detectors) amortized across capabilities, and you need sampling policies that track scene dynamics. Teaching should therefore include both a composition lab (start from `search` vs `alerts` Foundations and measure delta size) and a runtime lab (fixed EVS vs adaptive EVS under scripted motion). Pair with edge bring-up when cameras sit far from the data center—token economics and device constraints interact.

## Teaching visual-agent economics

- Instrument tokens/frame, GPU-seconds/stream, and false-negative rate on held-out incident clips together.
- Prefer extending validated profiles over greenfield YAML archaeology.
- Treat adaptive sampling as a product feature with safety SLOs—not only a cost knob.
- Benchmark concurrent streams under realistic motion; idle corridors overstate savings.
- Pair with edge bring-up literacy when cameras sit far from the data center.

## Takeaways

- Visual agents are systems-cost problems, not only model-quality problems.
- Invest in composition blueprints and adaptive sampling.
- Raw VLM quality without token economics will not survive multi-stream production.
- Coding-agent skills that emit deploy plans cut build time the way EVS cuts runtime.
- Measure safety recall alongside $/stream—cost wins that miss incidents are not wins.

## Sources

- [Lower the Cost of Building and Running Visual AI Agents with NVIDIA VSS Blueprint 3.3](https://developer.nvidia.com/blog/lower-the-cost-of-building-and-running-visual-ai-agents-with-nvidia-vss-blueprint-3-3/)
