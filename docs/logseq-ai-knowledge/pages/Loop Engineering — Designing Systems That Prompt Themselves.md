title:: Loop Engineering — Designing Systems That Prompt Themselves
type:: article
cluster:: agentic-systems
cluster-name:: Agentic Systems & Engineering
corpus:: ibm-ai-knowledge
tags:: #article #corpus/ibm-ai-knowledge #cluster/agentic-systems
node-id:: a-loop-engineering
source-path:: /cursor/stores/self/docs/ibm-ai-knowledge/loop-engineering.md
original-label:: Loop Engineering: Designing Systems That Prompt Themselves

- #cluster/agentic-systems
- #corpus/ibm-ai-knowledge
- blurb:: Prompt engineering is writing the next perfect instruction by hand. **Loop engineering** is designing a system that takes a goal, prompts an agent, checks the work, prompts again, and repeats until a stopping…

## Relations

- example of:: [[Loop Engineering]] — Discussed in article
- related to:: [[Agentic Engineering]] — Discussed in article

## Article

# Loop Engineering: Designing Systems That Prompt Themselves

- Prompt engineering is writing the next perfect instruction by hand. **Loop engineering** is designing a system that takes a goal, prompts an agent, checks the work, prompts again, and repeats until a stopping condition is met—with minimal manual prompting, but not zero human responsibility.

## The core loop

- A simple agent loop has four stages:

- **Goal** — what “done” means.
- **Act** — for a coding agent: open files, edit code, run commands.
- **Observe** — read test output, errors, diffs.
- **Adjust** — try another fix or move on when a check passes.
- The goal is evaluated every lap. Vague goals (“make checkout faster,” “be happier”) have no measurable end: the agent may loop forever or declare victory after one pass. A good goal is specific and verifiable—“stop when every unit test in the checkout suite passes.”

- That skeleton alone does not deserve a discipline name. Loop engineering is everything built *around* the loop.

## Triggers, context, spine, tools, sub-agents

- Something must start the loop: a **schedule** (nightly cron) or a **hook** (file change, pull request opened). Hooks often enforce security and quality policies at events.

- Every trip generates context—test output, file contents—that piles up and steals attention. Context engineering decides what the loop may see: compaction, progressive disclosure of **skills** (procedures for recurring jobs), and pruning of noise.

- A **spine** is persistent state outside the ephemeral window: markdown notes of what was tried and what worked, informing later iterations.

- **Tools** (MCP or direct APIs) let the agent execute: filesystem, terminal, databases. For observation, strong practice uses a **sub-agent**—a checker with its own instructions, context, and sometimes a different model—rather than asking the same writer to grade its own homework.

## “Minimal” human involvement is a specific amount

- Compared with hand-prompting, loops reduce human typing. They do not remove human duty. Four pitfalls show why:

- **Unverified code** — a checker agent is still an agent. Humans remain responsible for shipped code; someone must read it.
- **Comprehension debt** — the gap between how much code exists and how much humans understand. Agents write fast; unread code widens the gap and hurts incident response and migrations.
- **Intent debt** — agents can see *what* a system does more easily than *why*. Without intent written where agents look (for example `agents.md`), a “fix” may relax discount validation to make tests green while hurting the business.
- **Cognitive surrender** — blindly accepting loop output because “the AI did it,” which accelerates comprehension debt.
- Humans should write the goal and stopping condition, keep intent visible to the agent, and read the output. Loop engineering works best when a human remains *in* that loop—not as rubber-stamp theater, but as the owner of goals, intent, and verification.

## Specs and stopping conditions

- Teams moving from chatty prompting to agent loops often adopt **spec-driven** goals: requirements and acceptance checks the agent can evaluate (tests green, lint clean, schema valid). That is loop engineering’s cousin to classical CI. Without a machine-checkable stop, “minimal human intervention” becomes either infinite spend or premature victory declarations.

- **Sources**

- [What Is Loop Engineering? Building Better AI Agents](https://www.youtube.com/watch?v=DQBqh6gcx7U)
- [Agentic Engineering: 5 Terms Every AI Developer Should Know](https://www.youtube.com/watch?v=SIZsFGvtClM)
- [5 Concepts to Know for Coding with AI Agents](https://www.youtube.com/watch?v=hTAWHgQI4xg)

## Navigation

- Cluster:: [[Cluster - Agentic Systems & Engineering]]
- Corpus:: [[Corpus - IBM AI Knowledge]]
- [[Clusters]]
- [[Contents]]
