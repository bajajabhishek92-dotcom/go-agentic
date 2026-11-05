# Context Engineering for Agents

Prompt engineering optimized the words in a system message. **Context engineering** asks a broader question: *which tokens should be present at sampling time so the model reliably does the right thing?* For agents—tools, retrieved files, transcripts, skills, MCP results—that set changes every turn.

## From prompts to holistics state

Context is the full token set: instructions, history, tool schemas, tool results, retrieved docs, memory artifacts. Constraints are hard: finite windows, attention dilution, and the fact that irrelevant or contradictory tokens steer behavior as much as clever phrasing. Effective practice **thinks in context**—what state is available, and what behaviors that state makes likely.

Prompt writing still matters; it is one slice. As products move from one-shot classification to multi-day agents, most failures are **wrong or bloated context**, not a missing magic sentence.

## Tactics that show up in production agents

Patterns distilled from Anthropic’s agent engineering:

- **Just-in-time loading** — skills metadata, tool search, and file reads on demand instead of preloading the world.
- **Compaction and summarization** — preserve decisions and open questions; drop raw noise.
- **Separation of orchestration from deliberation** — use code execution for loops/filters so intermediate junk never enters the LLM context.
- **Artifact handoff** — write durable notes for the next session rather than hoping the window remembers.
- **Multi-agent research** — lead agents delegate sub-queries so each worker’s context stays on a narrow slice; the lead synthesizes (with care about conflicting sub-results).

Managed-agent designs that “decouple the brain from the hands” push the same idea: keep high-level reasoning context clean while execution environments hold bulky state.

## Judgment and context risk

When agents lean one way on ambiguous analytical choices, humans often follow—even after stating a prior preference. Context that includes a confident agent argument is not neutral. Design review UIs and evals that surface **where the agent steered the call**, and keep authoritative data outside persuasive prose when stakes are high.

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

- Optimize the *token set over time*, not only the system prompt.
- Prefer progressive disclosure, code-side orchestration, and session artifacts over stuffing.
- Treat persuasive agent context as an influence channel on human judgment—measure it.

**Sources**

- [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)
- [How we built our multi-agent research system](https://www.anthropic.com/research/multi-agent-research-system)
- [Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/research/managed-agents)
- [How AI agents shape experts’ judgment calls](https://www.anthropic.com/research/agents-judgment-calls)

**See also:** IBM Technology angle on the same concept — [`../../ibm-ai-knowledge/context-engineering-for-agents.md`](../../ibm-ai-knowledge/context-engineering-for-agents.md).