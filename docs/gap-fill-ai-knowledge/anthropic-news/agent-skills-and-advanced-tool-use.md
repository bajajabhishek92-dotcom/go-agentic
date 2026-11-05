# Agent Skills and Advanced Tool Use

General-purpose agents need specialized know-how without stuffing every procedure and API into the system prompt. Anthropic’s Agent Skills standard and advanced tool-use features teach a portable pattern: **progressive disclosure of expertise and tools**, then **code-shaped orchestration** when natural-language tool calling becomes the bottleneck.

## Skills: onboarding guides for agents

A skill is a folder with a `SKILL.md` (YAML frontmatter for `name`/`description`, then instructions) plus optional scripts and references. At startup the agent loads only names and descriptions—enough to know *when* to pull a skill. On relevance, it reads the full skill body; deeper assets load only as needed. That **progressive disclosure** keeps context lean while capturing procedural knowledge (e.g. PDF form-filling) that “the base model kinda knows” but cannot reliably execute.

Skills started in Claude Code, spread across many platforms, and were donated as an open, vendor-neutral standard to the Agentic AI Foundation (alongside MCP). The teaching point: **package domain procedure as installable artifacts**, not as forever-growing system prompts or one-off custom agents per workflow.

## When tool libraries outgrow context

Agents that must span git, files, package managers, Slack, Jira, and dozens of MCP servers cannot preload every tool schema. Anthropic’s advanced tool-use stack addresses three failure modes:

1. **Tool Search** — discover and load tools on demand instead of paying tens of thousands of tokens before the user request.
2. **Programmatic tool calling** — invoke tools from a code execution environment so loops, filters, and bulk edits (e.g. large spreadsheets) do not force a full inference pass per micro-call or dump every intermediate into context.
3. **Tool use examples** — schemas say what is valid; examples teach optional parameters, sensible combinations, and API conventions.

## Thinking mid-tool-chain

Separate from “extended thinking before the first token,” a dedicated think step (or modern extended-thinking equivalents) during a long tool chain lets the model integrate *new* tool results before the next action—useful for policy adherence and multi-step consistency when information arrives mid-trajectory.

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.

## Common misconceptions to correct early

Students often conflate adjacent ideas that this article carefully separates. Correct these early:

- **Capability ≠ deployment.** A strong score, demo, or RFP does not prove fielded systems, legal compliance, or safe operations.
- **Openness ≠ safety or soft power by itself.** Weights, licenses, orchestration, and compute access each change the influence and risk story differently.
- **Human-in-the-loop ≠ meaningful control** when volume, latency, or rubber-stamping hollow out review.
- **Security transforms ≠ category exits** in privacy law: a one-way template can still identify; a sandbox can still be misconfigured.
- **Foundation models ≠ finished products** in health, Earth, or science: adaptation, thresholds, escalation, and evidence chains remain the product.

Ask learners to spot which misconception a headline is exploiting, then rewrite the headline with the distinction restored.

## Takeaways

- Prefer composable skills over proliferating bespoke agents; keep metadata small and load depth on demand.
- Design for thousands of tools: search/load, code orchestration, and examples—not mega-prompts.
- Give agents a structured pause after tool results when chains get long or policy-sensitive.

**Sources**

- [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills)
- [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)
- [Introducing advanced tool use on the Claude Developer Platform](https://www.anthropic.com/research/advanced-tool-use)
- [Code execution with MCP](https://www.anthropic.com/research/code-execution-with-mcp)
- [The “think” tool](https://www.anthropic.com/research/claude-think-tool)
