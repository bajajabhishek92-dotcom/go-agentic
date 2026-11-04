title:: Cluster - Security, Safety & Control
type:: cluster
cluster:: security-safety
tags:: #cluster #security-safety #cluster/security-safety

- #cluster/security-safety
- summary:: Trilemma, frontier safety, AI control, identity, intrusions, and provenance limits.

## Start here

- [[AI Security Trilemma]] (problem) — Tension among smart, fast, and secure—agents raise stakes via excessive agency; OWASP LLM risks and resilience when models are fooled.
- [[Agent Identity & On-Behalf-Of]] (practice) — Cryptographic per-agent identity and OBO token exchange so actions are attributable; shared service accounts fail audit.
- [[Frontier Safety Stack]] (practice) — Capability-triggered safeguards spanning misuse, misalignment, and injection—with input, activation, and monitor layers.

## Key concepts / techs / problems / practices

- [[AI Control]] (`practice`) — Security architecture assuming imperfect alignment: insider-threat modeling, supervisor monitors, and detection/response that scales with capability.
- [[Adversarial Distillation]] (`problem`) — Stealing protected reasoning via scaled interaction without a classic database breach—needs layered defenses beyond access control.
- [[Agentic Intrusions - Data Pipeline Attacks]] (`problem`) — Treat ingest pipelines and datasets as attack surface—agents can be steered via poisoned content and cross-source conflation.
- [[Defender's Window]] (`problem`) — AI makes vulnerability discovery cheap; value accrues only if coordinated fix-and-disclose pipelines keep pace with attackers.
- [[Provenance & Watermarking]] (`technology`) — Statistical text or biosecurity watermarks that signal origin within limits—must not be asked to prove authorship or intent alone.
- [[Trust in Depth]] (`practice`) — Scope/know/bound/observe layers with policy outside the model so autonomy is verifiable, not circularly self-evaluated.

## Articles

- [[AI Control — Security When Alignment Is Imperfect]] — Model alignment—training systems to be helpful and safe—is necessary but not sufficient for capable agents. DeepMind’s AI Control Roadmap adds a **system-level** layer: assume internal agents may act unexpectedly,…
- [[Adversarial Distillation — Stealing Reasoning Without Breaking In]] — Not every model-theft path looks like a database breach. **Adversarial distillation** is the systematic, unauthorized use of a model’s outputs—or especially its *protected reasoning*—to train or improve another…
- [[Agent Identity — On-Behalf-Of Propagation and Cryptographic Proof]] — Agents that call enterprise APIs as a shared application identity break three things at once: audit trails (who did this?), user-level authorization (what may *this* user do?), and least privilege. Production agents…
- [[Agentic Intrusions — Treat Data Pipelines as Attack Surface]] — In July 2026, Hugging Face disclosed a security incident driven by an **autonomous AI agent** operating at machine speed across sandboxes—not a classic human APT playbook. The teachable core: evaluation agents that…
- [[Cybersecurity Capabilities and Staged Rollout]] — AI that can find, validate, and patch vulnerabilities is dual-use by nature. DeepMind’s recent cyber posts teach a clear deployment pattern: **give defenders an adaptation window first**, then broaden access as…
- [[Frontier Safety Stack — Misuse, Misalignment, and Injection]] — When a model can help defenders find complex bugs or scientists design experiments, the same strengths raise two questions DeepMind puts front and center for Gemini 4 Argon (and extends for Carbon): **How do we stop…
- [[Misalignment Monitoring and Defense in Depth for Frontier Agents]] — Capable agents do not only “answer wrong”—they can take unauthorized actions: escape sandboxes, reach the internet, or communicate across isolation boundaries. Alignment training reduces propensity; security limits…
- [[Open-Source Security When AI Makes Discovery Cheap]] — Roughly ninety percent of a modern enterprise codebase is open source—banks, hospitals, grids, telecom, cloud, and AI services alike. Much of that critical layer was written by small teams and volunteers. Innovation…
- [[Text Watermarking — What Provenance Can and Cannot Prove]] — Regulators increasingly require machine-readable signals that text was AI-generated. Statistical text watermarks (e.g. biasing token choices so a detector can recognize a signature) are one response—but they are…
- [[The AI Security Trilemma—and Why Agents Raise the Stakes]] — Enterprises want AI that is **smart**, **fast**, and **secure**. Like musical chairs with too few seats, you often get only two. That three-way tension is the **AI security trilemma**.
- [[The Defender’s Window — AI Vulnerability Discovery That Finishes With Fixes]] — Frontier models can discover critical flaws in widely used software before attackers do. That advantage is temporary. The same capabilities will spread. The scarce resource is not another scanner—it is a **pipeline…
- [[Trust in Depth — Autonomy You Can Verify]] — Leaders want agents to do more and do not trust them to do it unsupervised. Human-approve-everything does not scale: review fatigue means people stop catching what matters. The alternative is **Trust in…

## See also

- [[Clusters]]
- [[Contents]]
