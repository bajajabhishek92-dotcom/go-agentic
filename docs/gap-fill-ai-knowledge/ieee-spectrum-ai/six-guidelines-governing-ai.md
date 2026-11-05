# Six Guidelines for Governing Enterprise AI

Building models is no longer the scarce skill. **Governing** them—setting intent, principles, and boundaries for systems that act—is. An IEEE Spectrum essay by enterprise AI leader Sravan Vadigepalli (Lowe’s; coauthor of *The Enterprise Brain*) frames a “governor shift”: operators who never write code still decide which pricing exceptions an agent may approve.

Despite an estimated **$30–40B** in enterprise generative-AI spend, MIT Media Lab Project NANDA-style findings that only about **5%** of integrated pilots show substantial P&L impact (“GenAI Divide”) underscore the bottleneck: not model access, but people who can **direct systems and stand behind results**. Winners and laggards often use the same frontier models. The scarce resource is judgment encoded as operating policy.

## The six guidelines

1. **Spot “human middleware.”** Middleware is the code between systems that shuttles data. Many operators have become its human version—pulling from one tool, reformatting, routing to another. Vadigepalli calls this the **administrator trap**, set by architecture rather than by lazy people. Relaying is what agents now do well. Humans must judge which numbers deserve attention, which risks are real, and which compromises are worth making.

2. **Trade rules for principles.** Classic controls (refunds above $X need a VP signature; code needs two reviewers) work at human speed. They break when a system makes thousands of decisions per hour and meets cases no rulebook anticipated—a complaint covered by three policies at once. A rule says do exactly this; a **principle** says achieve the outcome without crossing listed lines. Write principles in **priority order** so the system settles conflicts the way a well-led team does when the manager is away: never harm the customer; tell the truth even if a sale is lost; protect economics; then move fast. Decision rights—who or what may make a given call—become core leadership work.

3. **Write culture into code.** Posters on walls do not bind agents. Encode governance as machine-readable instructions in three layers: a **constitution** (never-break rules—e.g., never state unsupported facts), **doctrine** (how the business competes and acceptable trade-offs, such as long-term relationship over short-term sale), and a **playbook** (tactics for one task). Culture that cannot execute is decoration.

4. **Install a trust thermostat, not a switch.** The question that stalls deployments—“What if it tells our biggest customer something wrong?”—forces a false binary if trust is a switch: unsupervised autonomy or humans reviewing every transaction (which can cost more than the automation saves). A thermostat scores each decision’s confidence against principles: above threshold, act; below, escalate—and feed the human answer back so similar cases clear next time. Every decision stays transparent and auditable—a “glass box.”

5. **Fix context before you govern.** You cannot govern a system that cannot see the whole picture. The CCRAG loop is Connections → Context graph → Reasoning → Actions → Governance. Connections feed transactions and service records; context weaves a single connected picture of the business (agent memory); reasoning decides; actions write back; governance keeps alignment with intent. Most firms obsess over reasoning models and under-invest in context and governance—exactly where humans still dominate. Context compounds: every interaction makes the graph richer and harder to reproduce.

6. **Lead by exception.** The habit change is to attend to ambiguous, unfamiliar, high-stakes cases the system flags—not every routine report. Governors scale by **exception queues**, not by reading every transcript. Exception review is also how principles and thresholds improve.

## Why this is product work

Retail examples in the essay—assistants that help fix a faucet while steering to the right SKU—only work if autonomy boundaries are product decisions. That is the same skill as writing a good PRD, aimed at **machine executors**. The GenAI Divide is therefore a management and design gap: buying another model API does not create governors. Training operators to set principles, context, and exception policy does. The guidelines rhyme with agent sandboxing and auto-mode design (blast radius, intent classifiers, escalation) but speak the language of P&L owners.

## Teaching sequence

- Diagnose human middleware before buying more agents.
- Draft a one-page constitution / doctrine / playbook for one real workflow.
- Define confidence thresholds and escalation SLAs.
- Inventory the context graph: which systems must connect before autonomy expands.
- Review exception logs weekly as the governance backlog.

## Takeaways

- Governance is **product work**, not a compliance appendix.
- Principles + confidence thresholds beat brittle rulebooks and all-or-nothing human review.
- Context graphs are a prerequisite for accountable agents.
- The scarce resource is people who can direct systems and own outcomes.
- Lead by exception or drown in rubber-stamp oversight.

**Sources**

- [6 Guidelines for Governing AI](https://spectrum.ieee.org/6-guidelines-governing-ai)
