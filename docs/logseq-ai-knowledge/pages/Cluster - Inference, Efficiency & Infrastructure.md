title:: Cluster - Inference, Efficiency & Infrastructure
type:: cluster
cluster:: inference-infra
tags:: #cluster #inference-infra #cluster/inference-infra

- #cluster/inference-infra
- summary:: Serving physics, memory wall, quantization, routing, cost ops, and accelerators.

## Start here

- [[LLM Inference]] (concept) — Serving live answers from weights: tokenization, continuous batching, and the prefill (compute-bound) vs decode (memory-bound) split behind latency metrics.
- [[Memory Wall]] (problem) — Decode-phase bandwidth starvation that limits LLM scaling; drives parallelism strategies and prefill–decode disaggregation.
- [[Model Routing]] (practice) — Choosing model tier, reasoning depth, caching, and harness design along the cost–intelligence frontier for affordable production agents.
- [[Quantization]] (technology) — Reducing numeric precision (FP16→int8/int4) via PTQ or QAT to cut memory and serving cost, with healing/distillation to protect accuracy.

## Key concepts / techs / problems / practices

- [[Energy & Goodput Constraints]] (`problem`) — Frontier AI is bounded by power, fleet reliability, and useful throughput—not just peak FLOPs—pushing substrate and ops co-design.
- [[Generative AI Cost Operating Model]] (`practice`) — Attribute → observe → enforce → optimize → review; treat cost as an operating system with caching for repetitive agent context.
- [[Local Inference Engines]] (`technology`) — llama.cpp-style local serving vs vLLM-scale production engines; choice depends on quantization, batching, and deployment surface.
- [[Native Accelerator Backends]] (`technology`) — First-class PyTorch devices (Neuron, TPU) so Hub models run without bespoke porting layers.
- [[Tokenizer - Vocabulary Specialization]] (`practice`) — Domain vocabulary tuning that cuts decode cost dramatically because inference cost lives in the decode path.
- [[torch.compile & Graph Breaks]] (`technology`) — Dynamo/Inductor compilation speeds models until graph breaks and scalar syncs (e.g. `.item()`) shrink optimization regions.

## Articles

- [[Energy, Goodput, and the Physics of Frontier AI]] — Model quality narratives often ignore the industrial reality underneath: AI is becoming an energy-and-systems problem as much as an algorithms problem.
- [[Generative AI Cost — An Operating Model, Not a Cheaper Model]] — Comparing token price lists and asking teams to “shorten prompts” does not answer finance’s real questions: which team spent this, on which workload, and was it inside budget? Agentic systems make the gap worse—one…
- [[Intelligence Per Watt — Rethinking the Computing Substrate]] — Most AI efficiency work optimizes algorithms or GPU kernels. Naveen Rao (Unconventional AI) argues the deeper limit is the **physical substrate** of computation—and that brains are an existence proof we are ignoring.
- [[LLM Inference — From Idle Weights to Live Answers]] — Training a frontier model can cost hundreds of millions of dollars and months of work. Afterward the model is a static pile of weights sitting in memory. It does nothing until **inference** runs those weights against…
- [[Model Routing on the Cost–Intelligence Frontier]] — Frontier labs now ship **families** of models (max-intelligence, strong mid-tier, fast/cheap) plus knobs for reasoning effort and speed. Treating “one model for everything” as a moral stance is how teams burn 10–100×…
- [[Native Accelerator Backends — When `device=-neuron-` or `-tpu-` Is Enough]] — For years, Hugging Face on AWS Trainium/Inferentia and Google TPUs meant XLA-shaped workflows: lazy tensors, static shapes, recompilation cliffs, and library forks (`optimum-neuron`, Optimum TPU) that hid the pain.…
- [[Quantization — How Models Get Smaller Without Starting Over]] — A trained model is a vast collection of weights and activations—dials tuned during training. Frontier and open models may have tens of billions to trillions of parameters. How many bits you store per parameter…
- [[Quantization-Aware Healing — Compress Without Capping Accuracy]] — Structural compression (fewer layers/heads/params) plus aggressive quantization usually loses quality. The usual fix is **quantize then heal**. How you heal decides whether 4-bit stays a permanent tax—or becomes…
- [[Specialize the Tokenizer — Inference Cost Lives in Decode]] — Fine-tuning for a domain usually leaves the **base tokenizer** untouched. For specialized small models, that inheritance can dominate serving cost. VocabX’s production result on a Portuguese essay grader (Qwen3-4B):…
- [[The Memory Wall and Scaling LLMs Beyond One GPU]] — Chip peak FLOPs have grown roughly six-thousand-fold over two decades. Workloads have not gotten six-thousand-fold faster. Accelerators often sit idle waiting on data. That gap between rising compute and…
- [[torch.compile — Dynamo, Inductor, Graph Breaks, and `.item()` Costs]] — You have a correct PyTorch model and you want it faster. One line—`model = torch.compile(model)`—wraps it. The first run may be slower while compilation happens; later runs may be faster. Compilation is an…

## See also

- [[Clusters]]
- [[Contents]]
