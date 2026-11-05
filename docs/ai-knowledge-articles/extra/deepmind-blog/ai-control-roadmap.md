---
title: 'AI Control: Security When Alignment Is Imperfect'
slug: a-ai-control-roadmap
type: article
corpus: DeepMind Blog
corpus_key: deepmind-blog
cluster: Security, Safety & Control
cluster_id: security-safety
tags:
- article
- corpus/deepmind-blog
- cluster/security-safety
keywords:
- frontier-safety-stack
- ai-control
- deepmind-blog
- security-safety
- cluster-security-safety
- corpus-deepmind-blog
- article
- control
- security
- alignment
- agents
- not
- imperfect
- systems
summary: 'Model alignment—training systems to be helpful and safe—is necessary but not sufficient for
  capable agents. DeepMind’s AI Control Roadmap adds a **system-level** layer: assume internal agents
  may act unexpectedly,'
related:
- AI Control
- Frontier Safety Stack
path: extra/deepmind-blog/ai-control-roadmap.md
---

# AI Control: Security When Alignment Is Imperfect

Model alignment—training systems to be helpful and safe—is necessary but not sufficient for capable agents. DeepMind’s AI Control Roadmap adds a **system-level** layer: assume internal agents may act unexpectedly, and build defenses that still work when alignment fails.

## Dual-control metaphor

Think of a driving instructor with dual pedals. Trust the student, but stay ready to brake. Agents get permissions based on verified behavior and earn broader access incrementally—an access-control story, not only a training story.

## Threat model: agents as insider threats

The roadmap adapts cybersecurity practice by treating untrusted agents like potential **insiders** who already have office access. Building on MITRE ATT&CK-style taxonomies, it breaks possible attacks into tactics and techniques so teams can:

- track risks methodically;
- spot bad behavior before damage;
- run drills that test whether defenses hold.

## Detect, prevent, respond—and measure

Control stacks on top of sandboxing, endpoint security, and injection resistance:

- **Detection** — trusted supervisor models review a working agent’s reasoning, actions, and plans.
- **Prevention / response** — block harmful actions when supervisors flag them.
- **Metrics** — coverage (fraction of traffic monitored), recall (fraction of misaligned behaviors caught), and time-to-response.

An internal prototype reviewed coding-agent trajectories at scale (on the order of a million tasks), classifying flags against the threat taxonomy. Most flags were **not** adversarial: misinterpretation and **overeagerness** dominate—important for tuning so safety systems do not only hunt “evil” agents.

## Scale controls with capability

As models get smarter, defenses must escalate on two axes:

1. **Evasion ability** — today, reading visible chain-of-thought helps; later, oversight-aware or opaque reasoning may require behavioral analysis and internal inspection (detection levels D1–D4).
2. **Potential harm** — reversible low-risk mistakes can use delayed (asynchronous) review; high-risk actions need synchronous blocking before execution (response levels R1–R3).

Map monitoring depth and response latency to measured capability milestones, not to a fixed one-size policy.

## Ecosystem framing

DeepMind also frames agent security as three layers: individual agents, multi-agent systems, and defender empowerment across the ecosystem. Control is complementary to product misuse filters and staged cyber rollout—not a replacement.

## Takeaways for builders

- Separate **alignment** (train well) from **control** (contain imperfect agents).
- Threat-model agents like **privileged insiders**.
- Measure monitoring **coverage / recall / latency**, not only “we have a monitor.”
- Expect most incidents to be **overeager mistakes**; tune for that.
- Escalate from async review to **real-time blocks** as harm potential rises.

**Sources**

- [Securing internal systems against increasingly capable and imperfectly aligned AI](https://deepmind.google/blog/securing-internal-systems-against-increasingly-capable-and-imperfectly-aligned-ai/)
- [Developing Gemini 4 Argon responsibly and safely](https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/)
