---
title: The AI Security Trilemma—and Why Agents Raise the Stakes
slug: a-ai-security-trilemma
type: article
corpus: IBM
corpus_key: ibm
cluster: Security, Safety & Control
cluster_id: security-safety
tags:
- article
- corpus/ibm-ai-knowledge
- cluster/security-safety
keywords:
- frontier-safety-stack
- ai-security-trilemma
- ibm
- security-safety
- cluster-security-safety
- corpus-ibm-ai-knowledge
- article
- security
- trilemma
- stakes
- smart
- raise
- model
- agents
summary: Enterprises want AI that is **smart**, **fast**, and **secure**. Like musical chairs with too
  few seats, you often get only two. That three-way tension is the **AI security trilemma**.
related:
- AI Security Trilemma
- Frontier Safety Stack
path: ibm/ai-security-trilemma.md
---

# The AI Security Trilemma—and Why Agents Raise the Stakes

Enterprises want AI that is **smart**, **fast**, and **secure**. Like musical chairs with too few seats, you often get only two. That three-way tension is the **AI security trilemma**.

## Why only two chairs?

**Smart** means stronger reasoning, larger context, tools, autonomy, and permissions—the same ingredients that expand attack surface. **Speed** means low latency and autonomous action—less time to scan inputs, catch prompt injection, inspect outputs, or enforce policy. **Security** means injection defenses, output validation, DLP, access control, sandboxing, logging, and human oversight—each adding friction that slows the system.

Capability increases attack surface: memory, internet, tools, databases, APIs, sensors, and actuators are each a pathway. Perfect security everywhere tends to make the system dramatically slower. Perfect speed and autonomy tend to skip inspection.

## Picking two on purpose

- **Smart + secure (accept slow)** — deep research, careful medical image analysis: twenty minutes of thoroughness beats twenty seconds of risk.
- **Smart + speedy (accept risk)** — public data, low-impact PoCs, outputs that do not trigger high-stakes actions.
- **Secure + speedy (accept “dumb”)** — narrow tasks (home automation that toggles lights): small models, tight permissions, fast responses.

The mistake is pretending you got all three without an architecture that pays for the third somewhere else.

## A security proxy as an “extra chair”

One balancing pattern is an **AI security proxy**: a policy layer outside the model that inspects inputs, sanitizes outputs, gates tool permissions, and applies uniform controls. The model can stay relatively smart and fast while enforcement lives in the wrapping—similar in spirit to harness-level guardrails. It does not erase the trilemma, but it stops forcing every control into the model’s critical path.

## OWASP LLM risks in the agent era

The OWASP Top 10 for LLM applications remains a shared language for AI risk—not a compliance checkbox. Prompt injection and sensitive information disclosure stay near the top; **excessive agency** has climbed as systems move from generating text to taking actions. The defender’s question shifts from “can someone change what the model *says*?” to “can someone change what the model *does*?”—and how large is the blast radius?

Use the list as a tabletop: if this attack hit tomorrow, could you detect it, contain it, and reconstruct what the agent accessed and did? Practitioner fear of prompt injection can outrun incident databases (defenses at the obvious surface), while **misinformation** may be under-worried relative to how badly wrong knowledge drives agent actions over time.

The project’s blunt summary is the right posture: stop trying to build a model that cannot be fooled; build the system so that when it is fooled—and it will be—nothing important breaks. Resilience, least privilege, and hard boundaries matter more than hoping the model always resists manipulation. Research on agentic browsers has shown how mundane content (for example a malicious calendar invite) can steer an already-authenticated agent toward theft or execution—**intent collusion**, where the agent believes it is helping the user while serving the attacker. Controls where the AI never gets the deciding vote—privilege, segmentation, identity—still do the heavy lifting.

**Sources**

- [What Is the AI Security Trilemma? Smart, Fast, or Secure AI?](https://www.youtube.com/watch?v=OvjccOrr-iw)
- [The OWASP LLM Top 10 has a few surprises for you](https://www.youtube.com/watch?v=auS34nm9VAc)
- [Understanding AI Agent Hallucination in AI Systems](https://www.youtube.com/watch?v=bNRhppHct54)
