title:: Contents
type:: home
tags:: #home #contents

- Welcome to the **Project AI Knowledge** Logseq graph.
- Concepts first; articles are hubs. Prefer start-here pages, then follow wiki-style Page Name links (double-bracket links in Logseq).

## Start here

- ### Agentic Systems & Engineering
  - [[Agent Era Market Frame]] — Commercial definition of the agent era: computation revolutions, long-horizon agents, and customer-back moats—cars, not faster horses.
  - [[Agent Harness]] — The operating system around the model loop—tools, middleware, recovery, and policies—where most product differentiation lives once the LLM-in-a-loop is commodity.
  - [[Agentic Engineering]] — A discipline beyond vibe coding: designing prompts, context, harnesses, loops, and multi-agent graphs so agents produce reliable software and workflows at scale.
  - [[Long-Horizon Agents]] — Agents that persist across multi-day or multi-step work with harness support and honest scope fidelity, not just clever single-shot answers.
- ### Context, Tools & Knowledge Access
  - [[Context Engineering]] — Selecting what information enters the model window, when, and in what form—because huge context windows still fail via poisoning, distraction, confusion, and clash.
  - [[MCP (Model Context Protocol)]] — A protocol pattern for exposing tools and resources to agents with progressive discovery, reducing ad-hoc API wiring.
  - [[RAG (Retrieval-Augmented Generation)]] — Grounding model answers in retrieved documents or data; evolving from flat chunks toward structure-aware and agentic retrieval across corpora.
- ### Inference, Efficiency & Infrastructure
  - [[LLM Inference]] — Serving live answers from weights: tokenization, continuous batching, and the prefill (compute-bound) vs decode (memory-bound) split behind latency metrics.
  - [[Memory Wall]] — Decode-phase bandwidth starvation that limits LLM scaling; drives parallelism strategies and prefill–decode disaggregation.
  - [[Model Routing]] — Choosing model tier, reasoning depth, caching, and harness design along the cost–intelligence frontier for affordable production agents.
  - [[Quantization]] — Reducing numeric precision (FP16→int8/int4) via PTQ or QAT to cut memory and serving cost, with healing/distillation to protect accuracy.
- ### Security, Safety & Control
  - [[AI Security Trilemma]] — Tension among smart, fast, and secure—agents raise stakes via excessive agency; OWASP LLM risks and resilience when models are fooled.
  - [[Agent Identity & On-Behalf-Of]] — Cryptographic per-agent identity and OBO token exchange so actions are attributable; shared service accounts fail audit.
  - [[Frontier Safety Stack]] — Capability-triggered safeguards spanning misuse, misalignment, and injection—with input, activation, and monitor layers.
- ### Trust, Evaluation & Decision Quality
  - [[Agent Evaluation]] — Measure outcomes on real tasks (LifeVal, executable grading, factuality slices)—not only exam scores or tool-call theater.
  - [[Trusting AI Decisions]] — Probability is not proof; hybrid rules-then-agents, risk-driven architecture, and governance (e.g. ISO 42001-style) decide when AI may act.
- ### Enterprise Adoption & Governance
  - [[Enterprise AI Diffusion]] — Enterprises often reject the AI they requested; reinvention via workflow KPIs and agents beats bolted-on feature packs.
  - [[Enterprise Agent Platforms]] — Federate ownership in workstream cells while centralizing paved-road gateways, eval-gated promotion, and control planes.
  - [[Own Your Weights]] — Private post-training encodes company taste and control when renting frontier APIs collides with cost, speed, and sovereignty.
- ### Training, Learning & Data
  - [[Continual Learning]] — Frozen deployed models stall; restarting learning from experience is the path past the age of static pretraining.
  - [[RL Environments]] — Worlds, apps, and verifiers that let agents learn real jobs—the missing dataset after web text; best shared openly on hubs.
- ### Coding Agents & Software Delivery
  - [[AI Coding Quality Workflows]] — Outcome-based quality, repo-aware agents, RAD-style iteration, and review under high code volume—great syntax is not enough.
  - [[Securing AI-Generated Code]] — Shift-left: trust outcomes not generation; security during coding; dependency scrutiny; intent clarity; continuous validation and guardrails.
- ### Physical AI, Voice & Autonomy
  - [[Physical AI - Robotics]] — Embodied agents combining VLA, on-device adaptation, and robot data factories that sensorize human experience to replace missing internet corpora.
  - [[Voice as Primary Interface]] — Speech as a default agent channel; production voice needs sub-100ms budgets, streaming STT/TTS, and measured autoscaling.
- ### Science, Frontier & Interpretability
  - [[Path to AGI (Last Mile)]] — Capability optimism tempered by remaining gaps in world models, experience learning, and scientific AI.
  - [[Science Agent Workflows]] — Skills/tool grounding and multi-agent hypothesis tournaments (Co-Scientist style) that scale interpretation then shepherd understanding.

## Clusters

- [[Cluster - Agentic Systems & Engineering]] — Harnesses, loops, long-horizon agents, and the market shift from copilots to autonomous workflows.
- [[Cluster - Context, Tools & Knowledge Access]] — Context engineering, RAG variants, MCP/skills/memory, semantic layers, and agent-ready APIs/web.
- [[Cluster - Inference, Efficiency & Infrastructure]] — Serving physics, memory wall, quantization, routing, cost ops, and accelerators.
- [[Cluster - Security, Safety & Control]] — Trilemma, frontier safety, AI control, identity, intrusions, and provenance limits.
- [[Cluster - Trust, Evaluation & Decision Quality]] — When to trust AI, calibrated decisions, agent evals, benchmark hygiene, specs, and interpretability.
- [[Cluster - Enterprise Adoption & Governance]] — Diffusion, platforms, owning weights, sovereignty, sensitive data, and deployment gap closure.
- [[Cluster - Training, Learning & Data]] — Continual learning, RL environments, data efficiency, collapse, LoRA/distillation, world models.
- [[Cluster - Coding Agents & Software Delivery]] — Quality workflows, secure generated code, legacy modernization, and agent-scale source control.
- [[Cluster - Physical AI, Voice & Autonomy]] — Robotics, fleet reliability, voice interfaces, and AI↔chip co-design.
- [[Cluster - Science, Frontier & Interpretability]] — AGI last mile, science agents, applied labs, climate/earth AI, and biosecurity.

- Full overview:: [[Clusters]]

## Corpora

- [[Corpus - IBM AI Knowledge]]
- [[Corpus - Sequoia AI Knowledge]]
- [[Corpus - Extra AI Knowledge]]
  - [[Corpus - AWS ML Blog]]
  - [[Corpus - DeepMind Blog]]
  - [[Corpus - Hugging Face Blog]]
  - [[Corpus - OpenAI News]]

## How to browse

- Follow relation properties on each page (`enables::`, `related to::`, `example of::`, …).
- Filter by tag `#start-here`, `#cluster/…`, `#corpus/…`, or `type`.
- Graph size (source): 159 nodes · 259 edges · 73 concepts/techs/problems/practices · 86 articles.
