# AWS Machine Learning Blog — Teachable Notes

Standalone articles distilled from recent [AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/) posts. Focus: production agent platforms, RAG/knowledge access, latency/cost, model efficiency, and security/governance—framed as portable practices with AWS source citations.

## Articles

- [Enterprise Agent Platforms: Federate Ownership, Centralize Control](enterprise-agent-platform.md) — Workstream cells, paved-road gateways, eval-gated promotion, and federated vs centralized operating models.
- [Turning Private APIs into Agent Tools Without Flooding Context](private-apis-as-agent-tools.md) — OpenAPI→tools, authorize before `tools/list`, keep identity out of model parameters, search-first discovery.
- [Agent Identity: On-Behalf-Of Propagation and Cryptographic Proof](agent-identity-on-behalf-of.md) — OBO token exchange, per-agent identity, short-lived credentials, and why shared service accounts fail audit.
- [From Single-Shot RAG to Agentic Retrieval](agentic-retrieval-knowledge-bases.md) — Multi-corpus routing, iterative retrieve, citation/observability, and when to preprocess web content before ingest.
- [Semantic Layers: Let Agents Query Meaning, Not Schemas](semantic-layers-for-agents.md) — Business definitions, joins, and RLS outside the prompt; MCP-exposed live data for customer-360 style agents.
- [Voice AI Latency Budgets: Sub-100ms Speech and Measured Autoscaling](voice-ai-latency-budget.md) — Streaming TTS/STT expectations, sentence-level handoff, and deriving scale targets from Q_max and T_total.
- [Generative AI Cost: An Operating Model, Not a Cheaper Model](generative-ai-cost-operating-model.md) — Attribute → observe → enforce → optimize → review; prompt caching for agentic “Groundhog Day” context.
- [Distilling Efficient Agents: Teacher Trajectories, Not Just Shorter Answers](distill-efficient-agents.md) — SeqKD on graded multi-step trajectories, per-step encoding, and routing small vs frontier models.
- [Multi-Tenant Agents and RAG Access Control](multi-tenant-and-rag-access-control.md) — Runtime isolation foundations, untrusted ingest, and real-time ACL verification after cheap pre-filters.
- [Trust in Depth: Autonomy You Can Verify](trust-in-depth-for-agents.md) — Scope/know/bound/observe layers, policy outside the model, and fixing circular evaluation labels.
- [Five Production Challenges in Multi-Agent Systems](multi-agent-production-challenges.md) — Graph orchestration, HITL plans, sandboxed code, plus triage/exception/decision-engine customer patterns.

## Skipped / unused (rationale)

Product announcements, Gartner rankings, community meetup roundups, Quick Sight GeoJSON how-tos, GovCloud desktop wiring, and deep Trainium/NCCL kernel posts were deprioritized—thin teachable generalization or overlapping niche infra already covered better by distillation/hosting themes elsewhere. Repeated semantic-layer vendor variants were collapsed into one article. Frontier-model release PR and “ICYMI” roundups omitted as non-durable curriculum.
