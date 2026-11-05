---

title: 'Enterprise AI Diffusion: Reinvention Beats Feature Packs'
slug: a-enterprise-diffusion
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Enterprise Adoption & Governance
cluster_id: enterprise-gov
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/enterprise-gov
keywords:
- enterprise-agent-platforms
- enterprise-ai-diffusion
- sequoia
- enterprise-gov
- cluster-enterprise-gov
- corpus-sequoia-ai-knowledge
- article
- enterprise
- diffusion
- reinvention
- packs
- not
- feature
- beats
summary: "Enterprises asked for AI, then rejected much of what they got. Sequoia’s enterprise conversations—Aaron Levie (Box), Elias Torres (Agency), Block’s Goose agent with CTO Dhanji Prasanna, and Crosby on legal contracting—explain why: diffusion is an org and workflow problem, not a model-demo problem. Coding tools spread quickly because developers live in tight loops with compilers and PRs. Most knowledge work does not."
related:
- Enterprise AI Diffusion
- Enterprise Agent Platforms
path: sequoia/enterprise-diffusion.md
---

# Enterprise AI Diffusion: Reinvention Beats Feature Packs

Enterprises asked for AI, then rejected much of what they got. Sequoia’s enterprise conversations—Aaron Levie (Box), Elias Torres (Agency), Block’s Goose agent with CTO Dhanji Prasanna, and Crosby on legal contracting—explain why: **diffusion is an org and workflow problem**, not a model-demo problem. Coding tools spread quickly because developers live in tight loops with compilers and PRs. Most knowledge work does not. The winners rebuild product assumptions around agents, systems of record, and business metrics—not chat widgets bolted onto yesterday’s UI.

## Define diffusion (vs. deployment)

**Deployment** is turning a model on behind a feature flag. **Diffusion** is changing how work actually moves: who initiates tasks, which systems get written, how exceptions are handled, and what gets measured. Levie’s prediction crystallizes the end-state: within roughly five years, a large majority of enterprise tokens may go to work **no human user ever initiated**—agents operating on content and workflows in the background. That only happens if identity, permissions, audit, and outcome metrics are first-class.

## Why enterprises reject the AI they asked for

Torres’s framing matches what practitioners see after the pilot honeymoon:

- **Workflow mismatch.** Copilots that summarize or draft without changing systems of record leave humans as the integration layer. Dashboards that still need a person to analyze and click are not AI-led operations.
- **Trust and permissions.** Agents without clear audit trails, least-privilege scopes, and rollback feel like liability, not leverage—especially on contracts, money movement, and customer data.
- **Unit economics.** Seat licenses plus opaque token burn without outcome pricing misalign incentives. Levie warns that lab token subsidies are temporary; buyers want model-agnostic routing rather than the fox guarding the henhouse.
- **Change management.** Managers buy tools; teams protect process. “AI transformation” slides do not retire the human bottlenecks in customer experience or contracting unless incentives move.

Coding diffused fast because the verifier (tests, CI) and the artifact (code) already lived in the same loop. Legal, sales ops, IT, and CX often do not.

## Reinvention patterns that work

**Content → agents (Box).** Levie describes sitting on enormous file estates—contracts, research, loan docs—where enterprises rarely know what is inside unless a human opens the document. The product reinvention is not a prettier file browser; it is agents that can retrieve, reason, and act on that corpus inside enterprise controls. Value sits in the *bridge* from raw model capability to bank/law/pharma workflow—not in owning the frontier weights.

**AI-led execution (Agency).** Torres pushes “deprogramming” business habits: stop designing flows that require human intervention at every step. Instruct AI to execute outreach and resolution paths; keep humans for exceptions and policy, not every ticket.

**Metric flip in verticals (Crosby).** Legal AI wins when it optimizes **deal velocity**, not billable hours. Incumbents priced on time under-serve speed and throughput; a product that shortens contracting cycles can reframe the buyer’s KPI and the seller’s packaging.

**Open agent platforms inside the enterprise (Block / Goose).** Prasanna’s Goose story is AI-first internal platform thinking: an open-source agent that developers and operators can extend, with the company owning the harness, tools, and governance. Diffusion accelerates when the agent is a programmable layer over real internal systems—not a sealed chatbot.

## Mechanisms behind successful diffusion

1. **Start from a workflow KPI** (cycle time, escape rate, recovery time, deal days)—not from “AI features shipped.”
2. **Narrow production scopes** with logs humans can correct; widen autonomy only after measured reliability.
3. **Rebuild internal platforms**—identity, IT, eval harnesses, tool registries—so agents have somewhere safe to act. “Rebuild IT for AI” is infrastructure work, not a slogan.
4. **Model-agnostic product surfaces** that route tokens and peel off specialized models where economics or quality demand it.
5. **Outcome-aligned pricing** where possible; pure token passthrough rarely matches buyer value.

## Failure modes

- Feature-pack theater: chat in the sidebar, unchanged system of record.
- Pilot islands that never connect to production identity or data residency.
- Measuring vanity metrics (messages sent) instead of business outcomes.
- Over-broad agents that trip security review and get banned org-wide.
- Pricing that rewards token waste or seat sprawl.
- Assuming coding-style diffusion timelines for domains without verifiers.

### Practice checklist

- Name one workflow KPI before writing the PRD
- Map systems of record the agent must read/write—and permission them explicitly
- Require audit logs and human correction paths in v1
- Prefer outcome or workflow pricing experiments over pure seat+token bundles
- Invest in internal agent platforms (tools, evals, identity) as shared infrastructure
- Pilot with a team whose incentives improve if the KPI moves
- Plan model routing so you are not locked to one lab’s meter
- Treat change management as part of the product: training, defaults, and retirement of old steps

### Sources

- [Box's Aaron Levie: On Reinventing Yourself in the AI Age and Enterprise Diffusion](https://www.youtube.com/watch?v=NE4CLThMPGU)
- [Why Businesses Are Rejecting the AI They’ve Asked For ft Agency CEO Elias Torres](https://www.youtube.com/watch?v=0cczp_HQPAQ)
- [Deal Velocity, Not Billable Hours: How Crosby Uses AI to Redefine Legal Contracting](https://www.youtube.com/watch?v=tBPnlHS2HUA)
- [Block CTO Dhanji Prasanna: Building the AI-First Enterprise with Goose](https://www.youtube.com/watch?v=64J2lHxP0ok)
