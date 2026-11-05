# Multi-Tenant Agents and RAG Access Control

When AI reads complaint records, HR files, or strategy docs, a single cross-tenant or cross-ACL leak can outweigh any product benefit. Two related problems show up in production: **SaaS tenant isolation** for agent platforms, and **document ACL fidelity** for RAG.

## Build a foundation, not a one-off feature

Regulated SaaS teams that skip straight to “one assistant” rebuild isolation for every subsequent feature. Invert the plan: ship a horizontal foundation first (embeddings, per-tenant indexes, execution isolation, guardrails), then cut vertical use cases into it. Teams report large cuts in per-use-case deployment time once the foundation exists.

### Four tensions that cannot be traded away

1. **Data available without inadvertent disclosure** — vectors, retrieval, and generation context scoped to one tenant.
2. **Agents execute in isolation** — permissions scoped to the requesting user, available only during the session, respectful of that user’s rights. Shared agent pools with static credentials fail all three.
3. **Ingested content is untrusted** — attachments can carry prompt injection; treat them as data (tagged), screen before embed and before context, sandbox extraction with no network egress.
4. **Throughput without quality sacrifice** — large corpora (billions of docs) still need accurate multilingual/multimodal retrieval under onboarding SLAs.

Push isolation into the **runtime** (per-session microVMs, per-user token vaults, tool authorization at gateway) so every future feature team does not reimplement checks in application code. Apply guardrails at input, retrieved context, and output—not only inside the prompt.

## RAG ACL: why replicate-and-filter is not enough

Common pattern: sync ACLs into the vector index on a schedule; filter at query time by stored attributes. Three failure modes:

1. The AI system is not the source of truth for complex, source-specific permission models (inheritance, groups, denies).
2. **Stale ACLs** — access revoked between syncs; user still sees answers from forbidden docs. Some sources never emit membership-change events.
3. Upstream permission features evolve; connectors lag and create gaps.

### Hybrid that balances scale and correctness

- **Stage 1 — Pre-filter** with cached ACL attributes so you do not call the source API for every document in the corpus.
- **Stage 2 — Real-time verify** candidate docs against the authoritative API (SharePoint, Google Drive, Confluence, …) with the user’s identity before passages enter the LLM context.

Always-current permissions, confidence to scale coverage, less dependence on sync frequency. Pair with grounding checks and content filters for responsible generation.

## Evidence for auditors

“The model decided” does not survive compliance review. Keep OpenTelemetry traces of retrievals and tool calls, per-tenant invocation logs, and cached briefs with TTLs. Attribute cost and access to the initiating tenant/user.

## Takeaway

Isolate tenants below the application layer; treat uploads as hostile; verify document permissions with the system of record at query time after a cheap pre-filter. Security is part of the AI foundation, not a feature flag on the chatbot.

**Sources**

- [How Octave built a secure multi-tenant AI foundation on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/how-octave-built-a-secure-multi-tenant-ai-foundation-on-amazon-bedrock/)
- [Rethinking access control for RAG with Amazon Quick and Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/rethinking-access-control-for-rag-with-amazon-quick-and-amazon-bedrock/)
- [Deploy AI in a HIPAA-eligible environment with Amazon Quick](https://aws.amazon.com/blogs/machine-learning/deploy-ai-in-a-hipaa-eligible-environment-with-amazon-quick/)
