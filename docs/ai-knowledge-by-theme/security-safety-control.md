# Security, Safety & Control

Enterprises want AI that is **smart**, **fast**, and **secure**—and often get only two. Agents raise the stakes because the question shifts from “what did the model say?” to “what did the model *do*?” This essay intersects IBM’s security trilemma and open-source remediation framing with DeepMind’s frontier safety and cyber staged rollout, OpenAI’s defender’s window and misalignment monitoring, AWS’s trust-in-depth and agent identity, and Hugging Face’s agentic intrusion warning: **control lives outside the model**, in identity, staged access, verifiable limits, and pipelines that finish with fixes.

## Definitions

The **AI security trilemma** is the three-way tension among capability (tools, autonomy, permissions), latency/autonomy (less time to inspect), and security controls (injection defenses, DLP, sandboxing, oversight)—each control adds friction. An **AI security proxy** is a policy layer outside the model that inspects inputs, sanitizes outputs, and gates tools so the model can stay relatively smart and fast while enforcement lives in the wrapping.

**Excessive agency** (OWASP LLM Top 10 language) is the risk that climbs as systems take actions: blast radius, not only toxic text. **Intent collusion** describes agents that believe they are helping the user while serving an attacker (for example via malicious content the agent is authorized to read).

**AI control** (DeepMind usage) is security when alignment is imperfect: assume the model can be wrong or adversarial and design monitoring, nested oversight, and tripwires so harm is contained. The **frontier safety stack** covers misuse (capability for attackers), misalignment (pursuing the wrong objective), and injection (untrusted content steering tools).

**Trust in depth** means autonomy you can verify across a lifecycle—not a single guardrail. **On-behalf-of (OBO)** token exchange propagates user *and* agent identity so systems see both principals. **Agent identity** treats the agent as a first-class principal with cryptographic proof of who acted, not a shared service account for everything.

The **defender’s window** is the period after AI makes vulnerability discovery cheap but before attackers and remediations equilibrate—defenders should use AI to find, validate, and *fix* faster. **Staged rollout** for cyber capabilities gives defenders an adaptation window before broadening access. **Text watermarking** embeds statistical signals for provenance; it is not a proof of authorship alone and fails under paraphrase and adaptive attacks unless layered with other provenance.

**Agentic intrusions** treat data pipelines—scrapers, labelers, RAG ingest—as attack surface, not only chat endpoints.

## Trilemma, OWASP, and control when alignment is imperfect

IBM’s trilemma teaching forces explicit trade-offs: smart+secure (accept slow) for careful analysis; smart+speedy (accept risk) for low-impact public data; secure+speedy (accept “dumb”) for narrow high-assurance tasks. Pretending you got all three without paying elsewhere is the mistake. The security proxy pattern is IBM’s “extra chair”—harness-level enforcement.

OWASP remains shared language, not a checkbox. Prompt injection and sensitive disclosure stay near the top; excessive agency climbs. Practitioner fear of injection can outrun incident databases at the obvious surface while **misinformation** under-worries relative to how wrong knowledge drives agent actions over time. The blunt posture: stop trying to build a model that cannot be fooled; build so that when it is fooled—and it will be—nothing important breaks. Least privilege and hard boundaries still do the heavy lifting.

DeepMind’s AI control research and frontier safety stack meet IBM here from the lab side. When alignment is imperfect, security design—monitoring for misaligned behavior, defense in depth, staged capability access—matters more than hoping the next fine-tune removes all failure modes. Injection is treated as a first-class frontier risk alongside misuse and misalignment, which matches IBM’s agentic-browser examples of mundane content steering authenticated agents.

OpenAI’s misalignment monitoring and defense-in-depth posts operationalize the same idea for frontier agents: detect, contain, and escalate—do not rely on a single refusal layer. Adversarial distillation (stealing reasoning without “breaking in” via classic exploits) reminds teams that capability leakage can be statistical and API-shaped, not only intrusion-shaped. Text watermarking essays clarify what provenance can and cannot prove: positive detection is evidence of a signal, not courtroom-ready authorship; negative detection proves little; layered provenance beats a single trick.

## Cyber dual-use, the defender’s window, and open-source scoreboards

DeepMind’s cyber staged-rollout pattern is teachable: specialize a fast cyber model, fan out cheap calls across huge search spaces of code paths, and evaluate the full lifecycle—find → validate/exploitability → patch → secure generation—preferring unique confirmed issues over repeated hits on the same bug. Give defenders an adaptation window first; broaden access as guardrails mature. Pair specialized models with harnesses that produce deployment-ready patches inside the customer’s secure environment.

OpenAI’s defender’s window rhymes exactly: AI vulnerability discovery that finishes with fixes. A five-stage response pattern (detect, prioritize, patch, verify, harden foundations) puts AI on defense, not only discovery. Strengthen inventories and patch pipelines—not only CVE theater. IBM’s open-source security article names the same scoreboard: discovery outran remediation when AI made finding cheap; fix the pipeline, not only the scanner; inventories without action are vanity metrics. Across DeepMind, OpenAI, and IBM: **the metric is remediated risk**, not raw finding count.

## Identity, trust in depth, and pipeline attack surface

AWS’s agent-identity guidance kills the “service account for everything” pattern. Shared long-lived credentials erase accountability when an agent acts for many users and leave stolen secrets with broad blast radius. On-behalf-of token exchange propagates user *and* agent identity so downstream systems see both principals. Stronger still: treat the agent as a first-class principal with cryptographic proof of who acted. Practical rules: short-lived credentials, least privilege per tool, no ambient authority that survives task end, and audit trails that reconstruct overnight runs. Trust in depth asks four lifecycle questions—authorize, constrain, observe, review—and enforces limits *outside* the model so a jailbroken prompt cannot widen IAM scopes the gateway never granted. Evaluation bias warning: your scoreboard may be lying if evals omit tool abuse, tenancy escapes, and denial-of-capability probes (unapproved models, unsubscribed tools).

Hugging Face’s agentic-intrusions piece widens the perimeter: untrusted documents entering RAG or training pipelines are injection and poisoning surfaces. Scrapers, labelers, and embedders are part of the attack surface. Treat ingest like an exposed API—screen, sandbox extraction without network egress, tag untrusted content, and apply guardrails at input, retrieved context, and output. That intersects IBM’s sensitive-data and RAG ACL concerns and DeepMind’s injection pillar: the attack often arrives as data, not as a jailbreak typed in chat.

DeepMind’s cyber staged rollout and OpenAI’s defender’s window both specialize the model and fan out cheap calls across huge search spaces, then insist on find → validate → patch → secure-generation metrics. Give defenders an adaptation window before broadening dual-use access. IBM’s open-source security scoreboard agrees: discovery without remediation is vanity; inventories without action do not reduce risk. Watermarking and adversarial distillation essays remind teams that provenance and capability leakage are layered problems—statistical signals fail under paraphrase; reasoning can be stolen through APIs without classic break-ins—so defense in depth and monitoring remain mandatory even when alignment improves.

## Intersection

IBM frames the product trade-off (trilemma, OWASP in the agent era, open-source remediation) and enterprise posture: resilience over unfoolable models. DeepMind and OpenAI frame frontier dual-use, control under imperfect alignment, staged cyber access, misalignment monitoring, and provenance limits. AWS and Hugging Face frame identity, verifiable autonomy, and data-pipeline attack surface. One control program emerges: proxy and sandbox outside the model; identity for user and agent; staged capability; find→fix metrics; layered provenance; ingest as hardened surface. Smart, fast, and secure still do not come free—but you can choose where to pay, and you can refuse to pretend the third chair appeared by magic.

## Sources woven in

- [Cybersecurity Capabilities and Staged Rollout (DeepMind Blog)](../extra-ai-knowledge/deepmind-blog/cyber-staged-rollout.md)
- [Text Watermarking: What Provenance Can and Cannot Prove (OpenAI News)](../extra-ai-knowledge/openai-news/text-provenance-watermarking-limits.md)
- [Trust in Depth: Autonomy You Can Verify (AWS ML Blog)](../extra-ai-knowledge/aws-ml-blog/trust-in-depth-for-agents.md)
- [The Defender’s Window: AI Vulnerability Discovery That Finishes With Fixes (OpenAI News)](../extra-ai-knowledge/openai-news/defenders-window-coordinated-disclosure.md)
- [Agent Identity: On-Behalf-Of Propagation and Cryptographic Proof (AWS ML Blog)](../extra-ai-knowledge/aws-ml-blog/agent-identity-on-behalf-of.md)
- [The AI Security Trilemma—and Why Agents Raise the Stakes (IBM)](../ibm-ai-knowledge/ai-security-trilemma.md)
- [Open-Source Security When AI Makes Discovery Cheap (IBM)](../ibm-ai-knowledge/open-source-security-ai-era.md)
- [Frontier Safety Stack: Misuse, Misalignment, and Injection (DeepMind Blog)](../extra-ai-knowledge/deepmind-blog/frontier-safety-stack.md)
- [AI Control: Security When Alignment Is Imperfect (DeepMind Blog)](../extra-ai-knowledge/deepmind-blog/ai-control-roadmap.md)
- [Agentic Intrusions: Treat Data Pipelines as Attack Surface (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/agent-security-ai-intrusions.md)
- [Adversarial Distillation: Stealing Reasoning Without Breaking In (OpenAI News)](../extra-ai-knowledge/openai-news/adversarial-distillation-defenses.md)
- [Misalignment Monitoring and Defense in Depth for Frontier Agents (OpenAI News)](../extra-ai-knowledge/openai-news/misalignment-monitoring-defense-in-depth.md)

## See also (landscape)

- [Anthropic: Safer Agent Permissions](../gap-fill-ai-knowledge/anthropic-news/safer-agent-permissions-sandbox-auto-mode.md)
- [Anthropic: Distillation Defenses](../gap-fill-ai-knowledge/anthropic-news/distillation-defenses.md)
- [NVIDIA: Secure Agent Runtimes](../gap-fill-ai-knowledge/nvidia-technical-blog/sentry-openshell-secure-runtime.md)
- [IEEE: Agent Collusion Risks](../gap-fill-ai-knowledge/ieee-spectrum-ai/agent-collusion-risks.md)
