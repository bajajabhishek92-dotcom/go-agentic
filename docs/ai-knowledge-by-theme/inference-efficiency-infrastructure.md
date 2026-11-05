# Inference, Efficiency & Infrastructure

**Inference** is turning idle weights into live answers: load parameters, process a prompt (**prefill**), then generate tokens one by one (**decode**). **Efficiency** is useful work per watt, per dollar, and per millisecond of latency—not peak FLOPs on a datasheet. **Infrastructure** is the serving stack: engines, parallelism, quantization, compilers, routers, tokenizers, and accelerator backends. IBM’s physics of the memory wall intersects Sequoia’s energy and goodput framing and Extra posts (AWS FinOps, Hugging Face quantization and backends, OpenAI routing): the bottleneck moved from “can we train it?” to “can we serve it economically while staying accurate?”

## Definitions

The **memory wall** is the gap between rising chip FLOPs and slower-growing memory bandwidth. Accelerators sit idle waiting on data. **Arithmetic intensity** is FLOPs per byte moved from memory. High intensity → compute-bound; low → memory-bound. The **roofline model** plots intensity against attainable performance; the **ridge point** is peak FLOPs divided by peak bandwidth. Prefill (building KV cache with large GEMMs) often sits compute-bound; decode at small batch repeatedly reads large weights for little math—intensity can be ~1 FLOP/byte. **Batching** (including continuous batching) raises intensity by reusing loaded weights across concurrent generations.

**Quantization** reduces numeric precision of weights/activations (FP16 → INT8 → INT4 and friends) to shrink memory footprint and move more parameters per byte of bandwidth—without training from scratch. **PTQ** (post-training quantization) compresses a finished model; **QAT** (quantization-aware training) simulates low precision during training. Hugging Face’s **quantization-aware healing (QAH)** distills from the original teacher after compression to recover accuracy when naive QAT/QAD struggles.

**Intelligence per watt** reframes the goal: useful model capability delivered per unit energy, not only per GPU-hour of rental. **Goodput** is successfully completed useful work—not raw tokens that include retries, speculative waste, or idle allocated capacity. **Model routing** sends each request to a model (or tier) on the cost–intelligence frontier matched to the job. **Tokenizer waste** is paying decode cost for suboptimal tokenizations—domain text that fragments into many tokens burns latency and money even when the model is “small.”

Distributed serving strategies include **data parallelism** (replicas), **pipeline parallelism** (shard by layers), **tensor parallelism** (shard within layers; needs fast interconnect), **expert parallelism** for MoE, and **prefill/decode disaggregation** (separate pools with fast KV handoff). Real systems stack these under orchestration.

## Physics first: walls, roofs, and energy

IBM’s memory-wall teaching is the right entry point. Before buying hardware, estimate intensity, read peak FLOPs and bandwidth, place the workload on a roofline, and decide whether to chase compute, bandwidth, batching, or quantization. Trillion-parameter-class models need more than one GPU for weights, KV cache, and multi-user throughput; multi-dimensional parallelism is how production escapes a single device. Prefill/decode disaggregation only pays if the interconnect can move cache quickly—plain Ethernet often cannot.

Sequoia’s energy and intelligence-per-watt conversations extend the same physics into facility design and substrate choice. The energy wall—power delivery, cooling, and grid access—constrains frontier fleets as much as chip SKUs. Non-von Neumann and alternative dynamics enter the conversation when moving data dominates; the teachable point for builders is to measure **useful tokens per joule** and goodput under realistic traffic, not demo tokens per second on a quiet box. Energy, goodput, and the memory wall are one story: data movement and wasted work dominate cost.

IBM’s inference essay names the product implications: engines (vLLM-class continuous batching, speculative decoding, paged KV) matter as much as model choice; prefill vs decode have different latency profiles; streaming UX hides decode cost from users even when it dominates the bill. Cost and product design meet when you decide which features deserve frontier decode versus cached or smaller-model paths.

## Compress, compile, specialize, route

Quantization is the most portable lever. Precision dominates footprint; moving from FP16/BF16 toward INT8 or INT4 can cut weight memory dramatically and raise effective intensity by shrinking bytes moved per parameter. Accuracy trade-offs are real—especially at aggressive INT4—and must be measured on *your* tasks, not only perplexity. PTQ is fast for many deployments; QAT simulates low precision during training when PTQ leaves too much accuracy on the table. Hugging Face’s quantization-aware healing targets the post-compression ceiling by distilling from the original teacher when naive QAT/QAD struggle after compression—local quants without leaving the transformers ecosystem. Practice: pick precision from memory budget and latency SLO; evaluate task metrics; keep a healing/distillation recovery path before declaring the quantized model done; read precision claims in the wild carefully (mixed schemes and calibration details matter).

Tokenizer specialization is easy to underestimate. Two kinds of waste appear: general tokenizers that over-fragment domain text, and vocabularies that ignore frequent product strings. Both show up in **decode**, where cost lives. Do not compress the decision token that carries the answer class. Specialize or adapt tokenizers when domain traffic is hot; measure tokens per request and dollars per successful task, not only model parameter count.

`torch.compile` (Dynamo capture, Inductor codegen) and native accelerator backends (TorchNeuron for Trainium, TorchTPU) are how software captures hardware. Graph breaks stop capture and silently destroy speedups; `.item()` forces host sync and can serialize what should be overlapped work—two separate costs teams often misattribute to “PyTorch being slow.” Measure honestly with warm compiles and realistic batch shapes. Native `device="neuron"` or `"tpu"` paths matter when CUDA assumptions hide in libraries. Beyond marketing: portable recipes that do not hard-code one vendor’s stack survive procurement and multi-cloud reality.

OpenAI’s model routing sits on the cost–intelligence frontier: match capability to the job, use cache policy aggressively (stable system prompts and schemas first so prompt caches hit), and treat long-running control planes as systems that decide *which* model and *whether* to call at all. Case studies often find cache policy beats model shopping alone. AWS’s generative AI cost operating model agrees: a five-stage loop—measure, attribute, optimize, govern, iterate—beats hoping a cheaper SKU fixes spend. Agent-specific caching (stable role prompts, shared tool schemas, compacted histories) is FinOps with agent shape. Routing, caching, quantization, batching, and compile/backends are one portfolio.

Sequoia’s energy and goodput framing widens the aperture. Brains as existence proofs (~20W) vs racing AI power draw make energy—not ideas—the binding constraint on some horizons. Non-von Neumann substrates (coupled oscillators / dynamical systems where physics *is* compute) may matter eventually; even if you never fabricate them, energy per task becomes a first-class KPI and “just buy more GPUs” collides with grid reality. Stranded energy → intelligence and scaling beyond more GPUs are planning languages for facilities and co-design. Goodput—successfully completed useful work—exposes retries, speculative waste, and idle allocated capacity that tokens-per-second dashboards hide.

## Intersection

IBM teaches why decode hurts (roofline, prefill vs decode, multi-GPU strategies, inference engines, torch.compile pitfalls) and how quantization shrinks the footprint. Sequoia reframes success as intelligence per watt and goodput under energy constraints. Extra sources fill the operator’s toolkit: AWS cost operating models and agent caching; Hugging Face quantization healing, tokenizers, and native backends; OpenAI routing and cache-first control planes. Across corpora: place workloads on a roofline; shrink bytes moved; route and cache before you buy another model; compile and specialize for the device you actually run; measure goodput and task accuracy—not peak FLOPs.

## Sources woven in

- [Intelligence Per Watt: Rethinking the Computing Substrate (Sequoia)](../sequoia-ai-knowledge/substrate-intelligence.md)
- [The Memory Wall and Scaling LLMs Beyond One GPU (IBM)](../ibm-ai-knowledge/ai-memory-wall-multi-gpu.md)
- [Generative AI Cost: An Operating Model, Not a Cheaper Model (AWS ML Blog)](../extra-ai-knowledge/aws-ml-blog/generative-ai-cost-operating-model.md)
- [Quantization: How Models Get Smaller Without Starting Over (IBM)](../ibm-ai-knowledge/quantization-llm-compression.md)
- [Quantization-Aware Healing: Compress Without Capping Accuracy (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/quantization-aware-healing.md)
- [LLM Inference: From Idle Weights to Live Answers (IBM)](../ibm-ai-knowledge/llm-inference-fundamentals.md)
- [Model Routing on the Cost–Intelligence Frontier (OpenAI News)](../extra-ai-knowledge/openai-news/model-routing-cost-intelligence.md)
- [Native Accelerator Backends: When device="neuron" or "tpu" Is Enough (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/native-accelerator-backends.md)
- [Specialize the Tokenizer: Inference Cost Lives in Decode (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/vocabulary-specialization-cost.md)
- [torch.compile: Dynamo, Inductor, Graph Breaks, and `.item()` Costs (IBM)](../ibm-ai-knowledge/torch-compile-graph-breaks.md)
- [Energy, Goodput, and the Physics of Frontier AI (Sequoia)](../sequoia-ai-knowledge/energy-and-goodput.md)

## See also (landscape)

- [Compute as the Timeline Spine](../gap-fill-ai-knowledge/ai-timeline/compute-as-timeline-spine.md)
- [Epoch: Plunging Price of Thought](../gap-fill-ai-knowledge/epoch-ai/plunging-price-of-thought.md)
- [Epoch: Compute Capacity and Datacenter Power](../gap-fill-ai-knowledge/epoch-ai/compute-capacity-and-datacenter-power.md)
- [NVIDIA Technical Blog folder](../gap-fill-ai-knowledge/nvidia-technical-blog/)
