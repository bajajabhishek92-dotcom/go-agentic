# Agentic Systems & Engineering

An **agent** is not a chatbot with a longer prompt. It is a **model plus a harness**: weights that propose the next step, wrapped in tools, memory, sandboxes, and a runtime that feeds observations back until a stopping condition is met. **Agentic engineering** is the discipline of designing that environment—goals, constraints, verification, identity, and recovery—so probabilistic systems do useful work under human accountability. This essay synthesizes how IBM’s operational vocabulary, Sequoia’s market framing of the agent era, and Extra sources (OpenAI, DeepMind, AWS) converge on the same architecture from different angles.

## Definitions that hold the rest of the stack

**Prompt engineering** is crafting the instructions a model should follow: role, constraints, few-shot examples, “answer only from this documentation.” It still matters—especially for smaller local models that need explicit scaffolds—but it is the bottom rung of a longer ladder.

**Context engineering** asks what *entire information environment* the model sees at each step: system prompt, tools, skills, retrieved documents, history, and tool results. Bigger windows do not automatically mean better agents; attention is finite, and “context rot” appears when volume outruns usefulness.

**Harness engineering** is everything around the model that lets it act. Alone, a model is a brain in a jar. The harness supplies tools (filesystem, shell, browser, MCP), memory (instruction files, compaction, search instead of dumping the repo), sandboxes, middleware (policy checks, summarization), and the loop that turns proposals into observations.

**Loop engineering** designs systems that take a goal, prompt an agent, check the work, and repeat—with triggers (cron, PR opened, alert), a spine of durable state outside the window, and often a separate checker rather than asking the writer to grade its own homework. A good goal is specific and verifiable: “stop when the checkout suite is green,” not “make checkout faster.”

**Graph engineering** fans one loop into parallel specialists—research, repo mapping, implementation—that hand off compressed results. Useful for complex jobs; expensive without discipline about tokens and handoffs.

**Software factory** names the end state: task-specialized agents for implement, test, review, and ops, each with isolation, identity, and observability. Solo developers may never need a factory; prompt, context, and harness skills still apply to everyone.

Sequoia’s product language maps cleanly onto this stack. Harrison Chase’s blunt definition—most agents are an LLM in a loop calling tools—is the same loop IBM names. What differentiates products is what the harness inserts: middleware, tool wrappers, skills, subagents, recovery policies. LangChain’s spectrum from a minimal harness to “Deep Agents” is IBM’s ladder told as product architecture. Logan Kilpatrick’s “model eats the harness” tension is the moving boundary: keep harness logic thin and measurable so you can delete it when the model absorbs it—and keep enterprise tools, permissions, and proprietary systems where the model still cannot.

## From vibe coding to cars, not faster horses

Coding is the canary domain: rich public data, fast verifiers, and developers willing to change tools. Sequoia conversations with Karpathy and Anthropic’s Boris Cherny describe the shift from autocomplete novelty to systems that plan, edit, test, and recover across a codebase. Cherny’s claim that “coding is solved” is best read economically: the marginal cost of generating working code collapsed for many tasks, so value moves to orchestration, verification, and problem selection. Karpathy’s arc from “vibe coding” to disciplined agentic engineering insists taste, architecture, and eval loops remain human-owned.

IBM’s spectrum makes the same point without the podcast framing: traditional coding → AI-assisted snippets → vibe coding → agentic coding (plan, tools, iterate) → agentic engineering (design the environment). Vibe coding prototypes fast; without structure it accrues debt. The engineering did not disappear—it moved.

Sequoia’s AI Ascent keynote pushes the commercial definition further: stop arguing AGI checklists and notice the shape of work changed. Communication revolutions (internet, cloud, mobile) distributed information; AI is a computation revolution that continuously moves the floor under products. Inflection points—ChatGPT, reasoning models, long-horizon coding agents—mean that if you can dispatch an agent that recovers from failure and persists until a job is done, you are functionally in an AGI-like regime for *work*, even without technical AGI consensus. Earlier AI apps made people ~10–40% more productive without changing the job. The new generation aims for ~10–40× and reorganizes the work itself—cars, not faster horses. Greg Brockman’s generalization fits here: as agents accelerate production, **human attention**—review, prioritization, responsibility—becomes the scarce resource. Design products that allocate attention, not only tokens.

## Long horizons, bounded decisions, and production graphs

DeepMind’s frontier framing for Gemini 4–class models (Argon, Carbon) centers **deep work**: multi-day engineering, multi-step professional workflows, agentic runs that survive dead ends. A long-horizon task is one where a single brilliant response is not enough. The agent must hold a goal across many tool calls and hours, recover when a path fails, and keep producing useful artifacts without drifting off scope. Capability rises with the harness: skills and rulebooks, multi-agent loops, tools that ground work in real code. Overnight autonomous optimization only works if tests, metrics, and constraints are machine-checkable. Alignment shows up as workmanship—fewer shortcuts on coding benches, clearer caveats when evidence is missing, asking when sources disagree—because a long-running agent that fabricates completion is worse than a weaker model that reports blockers honestly.

OpenAI’s **bounded decisions** pattern is the complementary micro-architecture inside those loops. Agent workflows are full of tiny judgments: classify, route, score severity. Calling a full generative endpoint for each one burns latency and money. When the answer space is closed—predicate, choice, or score—specialize the API and model around decision outputs. Batch many questions per request; cache stable instructions; put volatile evidence last. Let large models plan and use tools; let a Decisions-style path handle high-QPS gating. Agent cost curves are often dominated by *many small open-ended calls*. Closing the answer set is an architectural lever, not a prompt trick.

AWS production write-ups turn the same ideas into multi-agent failure modes that prompts cannot fix. Demos are easy; production fails when agents improvise paths, skip validation, and mishandle edges. The design responses match IBM’s graph vocabulary: a planner decomposes into checklist steps, a plan reviewer gets human approval before a supervisor runs specialists, each specialist returns compressed results, and model cost matches cognitive load (cheap routing, stronger planning, mid-tier execution). Cross-industry patterns recur—automated triage, exception workflows, domain decision engines, evidence assemblers—always with humans on irreversible decisions. Sandbox interpreters, cite sources, stream progress so long runs are not black boxes.

OpenAI’s computer-use research closes the loop from coding agents to **professional software**: specialized business apps under company rules—approvals, jurisdiction clauses, CAD constraints—where success means the finished process works, not that individual clicks succeeded. Partner-defined tasks, dozens of scoring criteria, hosted practice environments, and RL on synthetic variants beat toy UIs. Even large score gains leave oversight necessary: one forgotten rule breaks the process. The same logic extends to CAD/PCB manufacturing prep and to QA agents that run a PR’s UI and spot missing buttons static review would miss. Bring labs a concrete failing task, success criteria, experts, and a secure environment—not a vague “make us agentic” request.

## Where the corpora intersect—and what builders should do

Read across sources and one system appears:

1. **IBM** names the stack (prompt → context → harness → loop → graph → factory) and insists humans own goals, intent (`agents.md`), and reading the output—against unverified code, comprehension debt, intent debt, and cognitive surrender.
2. **Sequoia** names the market shift (cars not horses; attention bottleneck; harness as OS; model–harness boundary) and the builder advice: moats from workflows and data, architecture that absorbs new model releases.
3. **Extra** supplies the operating detail: long-horizon persistence and honest workmanship (DeepMind), bounded micro-decisions and computer-use evals (OpenAI), production graphs, role-appropriate models, and sandboxed tools (AWS).

Practice that survives all three framings: write machine-checkable stopping conditions; invest in tests and types as agent fuel; eval harness behaviors (recovery, tool failure, context overflow), not only final answers; stage autonomy from short trusted loops to overnight runs; measure scope fidelity alongside success; keep HITL on plans and high-stakes actions; track escaped defects from agent work as a core quality metric. Agentic systems are not magic autonomy. They are engineered loops—and the engineering is the product.

## Sources woven in

- [Computer Use for Professional Software: Train on Real Vendor Workflows (OpenAI News)](../extra-ai-knowledge/openai-news/computer-use-professional-workflows.md)
- [From Vibe Coding to Agentic Engineering (Sequoia)](../sequoia-ai-knowledge/agentic-engineering.md)
- [Loop Engineering: Designing Systems That Prompt Themselves (IBM)](../ibm-ai-knowledge/loop-engineering.md)
- [Cars, Not Faster Horses: A Commercial Definition of the Agent Era (Sequoia)](../sequoia-ai-knowledge/cars-not-horses.md)
- [Bounded Decisions: Fast Structured Choices Inside Agent Loops (OpenAI News)](../extra-ai-knowledge/openai-news/bounded-decisions-for-agents.md)
- [Five Production Challenges in Multi-Agent Systems (AWS ML Blog)](../extra-ai-knowledge/aws-ml-blog/multi-agent-production-challenges.md)
- [Long-Horizon Frontier Agents: Persistence Over Clever One-Shots (DeepMind Blog)](../extra-ai-knowledge/deepmind-blog/long-horizon-frontier-agents.md)
- [Agentic Engineering Vocabulary: Prompt, Context, Harness, Loop, Graph, Factory (IBM)](../ibm-ai-knowledge/agentic-engineering-vocabulary.md)
- [Agent Harnesses: The Operating System Around the Model Loop (Sequoia)](../sequoia-ai-knowledge/agent-harnesses.md)

## See also (landscape)

- [From Chatbots to Agents](../gap-fill-ai-knowledge/ai-timeline/from-chatbots-to-agents.md)
- [AI Timeline theme](../gap-fill-ai-knowledge/ai-timeline/)
- [Anthropic: Parallel Agent Teams and Coding Harnesses](../gap-fill-ai-knowledge/anthropic-news/parallel-agent-teams-and-coding-harnesses.md)
- [NVIDIA: Agent Failures → Harness Fixes](../gap-fill-ai-knowledge/nvidia-technical-blog/agent-failures-to-harness-fixes.md)
