---

title: 'Agent Harnesses: The Operating System Around the Model Loop'
slug: a-agent-harnesses
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Agentic Systems & Engineering
cluster_id: agentic-systems
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/agentic-systems
keywords:
- loop-engineering
- long-horizon-agents
- agent-harness
- sequoia
- agentic-systems
- cluster-agentic-systems
- corpus-sequoia-ai-knowledge
- article
- loop
- model
- harness
- agent
- around
- system
summary: "Once models can run tool-calling loops reliably, the scarce skill is not “prompting an agent”—it is building the harness: the runtime that feeds context, tools, memory, sandboxes, and recovery around a deceptively simple loop."
related:
- Agent Harness
- Long-Horizon Agents
- Loop Engineering
path: sequoia/agent-harnesses.md
---

# Agent Harnesses: The Operating System Around the Model Loop

Once models can run tool-calling loops reliably, the scarce skill is not “prompting an agent”—it is building the **harness**: the runtime that feeds context, tools, memory, sandboxes, and recovery around a deceptively simple loop.

## The core loop is universal; the harness is the product

Harrison Chase’s definition is blunt: most agents are an LLM in a loop calling tools. A request arrives, the model generates, tools run, observations return, repeat. Every serious coding agent and enterprise agent is a variation of that loop.

What differentiates systems is what the harness inserts:

- Middleware before/after model calls (summarization, context offloading, policy checks)
- Tool wrappers (sandboxing, file systems, MCP/CLI/computer-use adapters)
- Hooks and plugins (skills, subagents, memory)
- Explicit cognitive architectures when the open loop is still too unreliable for a workflow

LangChain’s minimal harness and “Deep Agents” show the spectrum: start general, then specialize with middleware rather than rewriting a bespoke graph for every feature.

## When to build your own

Build or deeply customize a harness when:

- Domain tools emit huge, structured context that generic summarization mishandles
- You need durable memory, workspace state, or multi-agent fan-out
- Compliance requires deterministic checkpoints around tool use
- Long-horizon work needs recovery policies the base loop does not provide

Stay on a general harness when you are still discovering the workflow. Premature cognitive architectures (2023-style rigid graphs) often fight the model’s improving ability to plan inside the loop.

## Models that “eat the harness”

A recurring Sequoia theme: as base models improve, more of what lived in application scaffolding migrates into the model. Logan Kilpatrick’s “model eats the harness” tension is real—but so is the opposite pressure from enterprise tools, permissions, and proprietary systems. Expect a moving boundary: keep harness logic thin, measurable, and easy to delete when the model absorbs it.

### Practice checklist

- Implement agents as loop + middleware, not as one-off prompt trees
- Put evals on harness behaviors (recovery, tool failure, context overflow), not only final answers
- Prefer hooks you can turn off when a new model ships
- Treat file system, skills, and subagents as product surface area, not infra trivia

### Sources

- [When to Build Your Own Agent Harness | Harrison Chase, LangChain](https://www.youtube.com/watch?v=HI2q3ci3Iuc)
- [Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison Chase](https://www.youtube.com/watch?v=vtugjs2chdA)
- [Google DeepMind's Logan Kilpatrick: Why the Model Eats the Harness](https://www.youtube.com/watch?v=cMAs8z2dehs)
