# Context Engineering: Giving Agents the Right Information

Prompt engineering asks how to phrase instructions. Context engineering asks a broader question: what entire information environment should the model see at each step? For agents that plan, call tools, retrieve documents, and run for hours, that distinction is decisive.

Context is everything present at inference time: system prompt, user task, project instructions, tool definitions, retrieved documents, message history, tool results, and memory. Context windows have grown into the hundreds of thousands or millions of tokens—but bigger windows do not automatically mean better agents. Studies of frontier models show reliability can fall as context grows. Researchers call this **context rot**: more tokens competing for a finite attention budget.

## Right context beats more context

Models do not retrieve from context the way a database looks up a row. Every token competes for attention; material in the middle of a long window is often used less reliably than material at the edges. Dumping an entire repository, weeks of logs, or dozens of unused tools into the window therefore hurts.

Good context has four qualities:

- **Relevance** — each piece helps the current task.
- **Structure** — labels and formatting help the model separate instruction from data from tool output.
- **Timing** — introduce information when needed, not all at once.
- **Compression** — summarize or filter instead of pasting raw dumps.

Context *processing* turns raw material into usable form. Context *management* decides what to keep, discard, prioritize, and refresh across turns so the window stays coherent as the world changes.

## Four failure modes of long agent runs

When agents migrate codebases or chase long goals, the window fills with system prompts, `agents.md`-style project files, tool schemas, step history, and large tool results. Four failure modes appear repeatedly:

1. **Context poisoning** — a false conclusion (for example, a misread note that “retries are automatic”) enters the window and is treated as ground truth. The agent then deletes good code based on its own mistake.
2. **Context distraction** — long history becomes the strongest pattern. The model continues doing more of what it already did instead of asking what the goal needs next.
3. **Context confusion** — too many tool definitions make selection harder. In one benchmark, a model failed with 46 tools and passed the same task with 19.
4. **Context clash** — superseded and corrected facts both remain, so the window disagrees with itself.

The remedies deliberately throw information away: **validate** conclusions before writing them into context; **compact** long history into summaries (and prefer durable files over endless window growth); **curate** tools to the job; **prune** outdated claims or start a fresh window with the corrected state.

## Context for coding agents

A one-line request—“add a login endpoint”—cannot encode years of repo decisions. The same ask should yield FastAPI-and-Pydantic code in one repository and a Go handler in another. Useful agent inputs include:

- searchable existing code and a compact repo map (files and symbols);
- dependency lock files so APIs match real versions (many “hallucinated” functions are version mismatches);
- tests the agent can run as a feedback loop;
- conventions and constraints in a checked-in instructions file such as `agents.md`;
- **developer intent**—what done looks like and what not to touch—which the repo alone cannot reveal.

If you do not yet know what to ask, have the agent interview you, explore and explain the repo, and list its assumptions before coding—then write what it learned back into the instructions file. Start fresh sessions per task; point at specific files; clear noise when a session grows long.

The goal is not maximum context. It is the minimum information that keeps the agent accurate while leaving humans in charge of decisions.

**Sources**

- [What Is Context Engineering? Why It Matters for AI Agents](https://www.youtube.com/watch?v=Qx0fCqpkBus)
- [Context Engineering for AI Agents: 4 Failure Modes to Avoid](https://www.youtube.com/watch?v=BwXremQ-i6I)
- [Context-Aware Coding: Give AI Agents the Right Context](https://www.youtube.com/watch?v=EkdIZXDnRK8)
- [5 Concepts to Know for Coding with AI Agents](https://www.youtube.com/watch?v=hTAWHgQI4xg)
