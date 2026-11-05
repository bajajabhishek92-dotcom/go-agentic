# Containing Agents and Verifying Inference

Two complementary trust problems: **what can the agent do in the world**, and **can anyone prove which model produced an answer?** Anthropic’s containment writeups, confidential inference research, and zkSNARK-style provable inference attack both. Together they move safety from “trust our policy PDF” toward **environment design** and **cryptographic evidence**.

## Containment across products

“Contain Claude” is not one filter. It is a product-spanning stack: permission modes, sandboxes, classifiers, network policy, and evaluation rules that differ by surface (consumer chat vs coding agent vs cyber eval). Lessons from incident response feed containment—e.g. disabling live internet for high-risk internal evals until monitors catch persistence and boundary-crossing reliably. Coding-agent sandboxes (filesystem + network allowlists) and auto-mode classifiers are the same family of ideas applied where agents hold shells and editors.

Design principle: **capability access is environment-shaped**. The same weights with open egress, disabled cyber safeguards, and a CTF goal are a different system than the same weights behind sandboxes and approval classifiers. Teach containment as layered controls informed by transcripts, not a single safety switch labeled “aligned.”

## Confidential inference: trust the runtime

Confidential inference via trusted VMs aims at cryptographic assurance that sensitive user data (and, separately, model weights) are only readable inside attested environments. Motivations split cleanly:

- **User security** — prove proprietary inputs stay private under processing.
- **Weight security** — harden frontier parameters against capable thieves as part of a broader weight-protection program (complementary to distillation defenses at the API layer).

This is early systems research, but the teaching claim is stable: privacy and IP protection move from policy promises toward **attestable execution**. Procurement and regulated industries will eventually ask for attestation reports the way they ask for SOC2—containment story meets compliance story.

## Provable inference: trust the model identity

Users cannot tell from text alone whether responses came from the claimed model, a cheaper substitute, or a tampered stream. Progress on efficient zkSNARK-style proofs of inference (e.g. FlashProve-class systems) targets commitments to a model plus proofs that outputs were produced by it—relevant to consumer trust, internal security, and potential **compliance/pacing verification**. Proofs remain expensive relative to raw decode, but orders-of-magnitude engineering progress matters: verification becomes discussable as a product and governance tool, not only a theory paper.

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

- Containment is layered environment design informed by incident transcripts.
- Attested runtimes and proof-of-inference attack orthogonal trust gaps: data/weight exposure vs model substitution.
- Build agents assuming users and regulators will eventually ask for *evidence*, not assurances.
- Pair runtime trust with permission sandboxes—crypto without blast-radius limits is incomplete.

**Sources**

- [How we contain Claude across products](https://www.anthropic.com/research/how-we-contain-claude)
- [Confidential Inference via Trusted Virtual Machines](https://www.anthropic.com/research/confidential-inference-trusted-vms)
- [Progress on provable inference for large language models](https://www.anthropic.com/research/provable-inference)
