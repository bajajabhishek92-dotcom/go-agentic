# Agentic Engineering Vocabulary: Prompt, Context, Harness, Loop, Graph, Factory

Teams shipping most of their code with AI assistants are not magically “prompting better.” They are practicing a stack of ideas that reuse classic computing patterns—feedback loops, orchestration, isolation—under new names. Five terms form a useful ladder from a single model call to an automated software factory.

## Prompt engineering

Prompt engineering is crafting instructions the model should follow: role, constraints, “answer only from this documentation,” few-shot examples, chain-of-thought scaffolds for smaller models. Frontier models often respond well to long, spoken dictation; smaller local models benefit more from explicit examples. Domain expertise still matters: communication quality often outweighs raw model ranking for a given task.

## Context engineering

The model sees more than your prompt. The context window holds the system prompt, tools and MCP servers, skills, retrieved documents, codebase slices, and conversation history. Quality can degrade before you hit the advertised window limit. Techniques include compacting history into a fresh summary, and spinning up **sub-agents** that research a library or doc without bloating the main window—then returning a short result.

## Harness engineering

Two products can wrap the same model and feel completely different. Alone, a model is a “brain in a jar”: it cannot open files, run code, or browse. The **agentic harness** is everything around the model that lets it act, verify, and continue: tools, memory, sandboxes, orchestration, and the runtime that executes commands and feeds results back.

An agent is model plus harness. Inside the harness:

- **Tools** — files, sandboxed code execution, web, computer use, shell, and MCP for external services.
- **Memory** — instruction files like `agents.md` loaded each session; compaction when the window fills; search (grep or semantic) instead of dumping the whole repo.
- **Agentic loop** — plan → act (via harness) → observe → repeat, often with continuous verification (tests, screenshots, a reviewer model).

Recent capability gains often come as much from better harnesses as from smarter weights. Asking “is AI good at X?” should become “which model *and which harness*?”

## Loop and graph engineering

An agent *is* a loop: goal → act with tools → observe → decide success or continue. **Loop engineering** attaches triggers (cron, pull request opened, alert) so a *system* orchestrates agents toward a goal with humans approving critical steps—rather than a person hand-prompting every turn.

**Graph engineering** fans that loop into parallel agents (research vs. repo mapping vs. implementation) that hand off work. Useful for complex jobs; expensive if every branch burns tokens without discipline.

## Software factory

A software factory automates the development lifecycle with task-specialized agents for implementation, testing, review, and operations—not one general agent doing everything. Each agent needs **isolation** (containers/sandboxes), **identity** (what it may access in Git or cloud), and **observability** (traces of overnight runs). Solo developers may never need a factory; prompt, context, and harness skills still apply to everyone.

## From software engineering to agentic engineering

Traditional software engineering is largely deterministic: explicit control flow, same input, same output. Agentic engineering shifts effort toward shaping probabilistic behavior—goals, environments, constraints, verification—while humans remain accountable. On a spectrum: traditional coding → AI-assisted snippets → vibe coding (intent in natural language) → agentic coding (plan, tool use, iterate) → agentic engineering (designing the environment where autonomous systems operate under constraints).

Vibe coding prototypes fast; without structure it accrues debt. Agentic engineering insists the engineering did not disappear—it moved to orchestration and verification.

**Sources**

- [Agentic Engineering: 5 Terms Every AI Developer Should Know](https://www.youtube.com/watch?v=SIZsFGvtClM)
- [AI Model vs Agentic Harness: What Actually Drives AI](https://www.youtube.com/watch?v=ZELPNFXJ4_o)
- [Agentic Engineering vs Software Engineering: Beyond Vibe Coding](https://www.youtube.com/watch?v=FgaBdwSvOGM)
