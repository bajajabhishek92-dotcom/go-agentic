# Defining “Agentic” for Law: Why Taxonomy Comes First

When statutes say “AI agent,” they may mean three different things. FPF’s taxonomy piece shows early US bills already splitting: the federal **AI AGENT Act** defines agents by **relationship to a user** (consumer-facing loyalty and interoperability), while **California SB 1106** defined them by **technical architecture and capabilities** (cybersecurity public infrastructure). Same word; different legal objects. Without a shared map, compliance cannot know if a product is in scope, and researchers cannot compare laws.

## Technical consensus vs legal polysemy

AI literature often treats “agentic” as advanced reasoning **plus** access to consequential tools/systems. OpenAI-style definitions stress pursuing goals over time without fully pre-specified behavior; WEF-style language emphasizes autonomy and authority (permissions to act). Public discourse mixes:

- Frontier **agent swarms** (safety/alignment headlines),
- Simple LLM automations (scrapers, macros—“three prompts in a trench coat”),
- Autonomy ladders (approval gates vs open-ended planning),
- Attribution/principal–agent responsibility (who owns the act).

The term also appears outside AI entirely—for example, “authorized agent” under the California Consumer Privacy Act. That polysemy is a governance bug: binary “in or out” statutes break when marketing, engineering, and counsel use incompatible senses of the same word.

Capabilities and access are the governance-relevant prongs because they create unpredictability and blast radius that deterministic automation rules do not cover. A scripted bot that only executes configured steps is not agentic; a system that decomposes open-ended goals, revises plans from intermediate results, and calls tools is. Legal scholar Noam Kolt’s shorthand—LLMs as copilots, agents as autopilots—captures the oversight shift. Most deployed systems sit in between—multi-step planners with confirmation gates, or narrow-domain “agents” that cannot adapt outside context.

Access depth matters as much as planning: RAG-style **read** context is not the same as agents that **write**, purchase, authenticate into accounts, or operate outside their host. An LLM with RAG might read an inbox for context; an agent might draft and send mail. An LLM might flag sales; an agent, via shared protocols, might buy. Governance should scale with action weight and privilege, not with marketing labels. Platforms have already litigated whether they can block unauthorized shopping agents—another signal that write/access privileges are where law meets product reality.

## Two early US definitional strategies

- **AI AGENT Act** — “Custodial user agents” authorized by and loyal to a user; scoped to transparent, documented, scope-limited, revocable interaction with online platforms. Purpose: consumer protection and competition (agents that work across platforms without capture). The definition focuses less on what the agent *can* do than on the loyalty and interoperability relationship.
- **California SB 1106** (did not pass; may return) — Granular definition: multistep/abstract goals pursued by independent task breakdown/delegation; behavior adjusted from results without waiting for instruction; real-world actions including code execution, tools, purchases, authenticated accounts, or operating externally. Explicit exclusion: systems that only respond to direct prompts and lack network egress or shell access. Purpose: state risk analysis for AI and critical infrastructure, cataloging high-risk uses.

Neither approach is “wrong”; each matches a different risk story. Trouble starts when a single binary “agent” trigger imports the wrong duties.

## Global frameworks converge on capabilities + access

FPF’s comparative table shows other frameworks largely emphasizing technical capabilities and access rather than pure user-relationship definitions:

- **NIST CAISI** RFI language: AI agent systems plan and take autonomous actions that impact real-world systems; at least one generative model plus scaffolding that equips tools for discretionary actions.
- **Singapore IMDA** Model AI Governance Framework for Agentic AI: no full consensus, but common features include independent planning, decision-making, and multi-step action-taking toward user-defined goals; systems may combine nondeterministic and deterministic components.
- **European Commission** Cloud and AI Development Act proposal: an AI agent perceives and acts upon its environment with a degree of autonomy, using tools as needed and adapting to changing inputs.
- **France CNIL / CIANum**: agent-based AI as programs that make autonomous decisions, orchestrate complex actions, and interact with third-party services, often via orchestrator plus specialized agents connected to external services.

The comparative lesson for counsel: when commenting on bills, map the draft’s definition to this capability×access plane—and say explicitly if the statute is actually regulating loyalty/interoperability instead.

## Cross-cutting governance issues once “agent” is defined

FPF lists recurring questions that privacy, legal, and governance teams must answer regardless of sector:

- **Identity** — Counterparties need to know which agent is acting, who operates it, and who delegated it. Existing IAM tools fit poorly; proposals include agent IDs, credentialing, and cryptographic signatures for agent commerce.
- **Accountability** — Traceability breaks across systems, time, and delegation chains; dedicated logging of what the agent observed, decided, and did is required.
- **Authorization and consent** — Static click-through consent assumes fixed purposes; agents need ongoing delegation whose specific actions cannot all be enumerated in advance.
- **Access and data minimization** — Broader access improves performance but tensions with least privilege and zero-trust; conveying agent intent under nondeterminism is hard.
- **Reliability and assurance** — Capability gains do not automatically yield reliability; measurement tools for consistency remain weak.

Finance and banking already invest heavily here because consequential write-actions meet regulated environments first.

## Teaching move for drafters and counsel

Before debating agent bans or duties, ask: is the statute regulating **user relationship**, **capability**, **autonomy level**, or **legal attribution**? Draft definitions that pick one primary axis, state exclusions explicitly, and acknowledge spectrum rather than pretending a bright line exists in products. Publish taxonomies engineers and lawyers can both use—capability × access matrices beat vibes. Inventory product features as companion chat, ADM (consequential decisions), or delegated transactional agents—different bills attach to each.


## Matrix over vibes

Build a two-axis grid: planning autonomy (scripted → open-ended) vs tool privilege (read-only → write/pay/authenticate/external). Place common products on the grid before reading any bill. Then overlay AI AGENT Act vs SB 1106 scope. Mismatches—high privilege with low autonomy marketing, or “agent” branding with confirmation gates—are where legal risk and product reality diverge.

## Takeaways

- Polysemy is a **governance bug**, not a branding issue.
- Align legal definitions with the statute’s purpose (consumer loyalty ≠ cyber infra).
- Score systems on **autonomy + tool privilege**, not on the word “agent” in a pitch deck.
- Spectrum thinking beats in-or-out binaries for real deployments.
- After definition, still solve identity, accountability, consent, least privilege, and reliability—taxonomy is necessary but not sufficient.

**Sources**

- [Defining “Agentic”: Why We Need a Shared Taxonomy for AI Agents](https://fpf.org/blog/defining-agentic-why-we-need-a-shared-taxonomy-for-ai-agents/)
