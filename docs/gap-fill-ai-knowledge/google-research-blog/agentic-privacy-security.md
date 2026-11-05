# Agentic Privacy and Security: Context Is the Hard Part

Useful agents need personal data *and* the ability to act. That combination breaks privacy models built for static apps. A Google Research workshop report—*Open and Emergent Problems in Agentic Privacy and Security*—from the CAPS workshop (>50 academic and industry leaders) argues for a **contextual** framing: appropriateness of data flows given actors, attributes, and transmission principles, rooted in Contextual Integrity (CI), not only threat checklists.

## Why agents are a new failure class

Agents differ from deterministic software along three axes the report stresses: unstructured interfaces (NL/images make expected behavior hard to specify; prompt injection hides in plain sight), probabilistic control flows (generative plans defeat path enumeration), and autonomy/delegation (long tasks and sub-agents weaken oversight). Concrete failure modes:

- **Contextual integrity breaks**: data fine in one tool call leaks into another context (ticket → public channel).
- **Memory persistence**: sensitive facts outlive the task.
- **Multi-agent collusion** against norms when agents collaborate without shared policy.

Training-time PETs (federated learning, DP, zero-trust aggregation) remain necessary for analytics—but they do not govern runtime tool use. LLMs finally offer a chance to bridge high-level CI norms (“protect my data while organizing conference travel”) and low-level permissions via a **contextual policy engine** in a supervisor layer—with dynamic policy generation loops that static notice-and-choice cannot scale.

## Multi-layer control stack from the report’s spirit

- **System sandboxing**: limit blast radius outside the model.
- **Model-level contextual reasoning**: judge appropriateness of sharing; disambiguate underspecified prompts.
- **User-centric controls** beyond notice-and-choice for unforeseeable agent trajectories.
- **Multi-agent guardrails** and ecosystem norms that can be shared across agents.
- **New evals**: multi-agent, dynamic benchmarks for privacy/security—not only single-turn refusal tests (FPF’s privacy-benchmark agenda rhymes here).

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Takeaways

- Agentic privacy is contextual integrity plus enforceable infrastructure.
- Model refusals are not a program; pair PETs for learning with runtime purpose limitation, scoped credentials, and audit of data flows.
- Policy engines must speak CI, not only binary allow/deny lists.
- Measure multi-agent dynamic privacy leakage; static refusal suites underfit agents.

**Sources**

- [Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle](https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/)
- [Toward provably private learning from federated data](https://research.google/blog/toward-provably-private-learning-from-federated-data/)
- [Private analytics via zero-trust aggregation](https://research.google/blog/private-analytics-via-zero-trust-aggregation/)
