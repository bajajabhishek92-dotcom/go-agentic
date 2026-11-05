title:: Skills, MCP, RAG, and Memory — Four Ways Agents Get Knowledge
type:: article
cluster:: knowledge-access
cluster-name:: Context, Tools & Knowledge Access
corpus:: ibm-ai-knowledge
tags:: #article #corpus/ibm-ai-knowledge #cluster/knowledge-access
node-id:: a-skills-mcp-rag-memory
source-path:: /cursor/stores/self/docs/ibm-ai-knowledge/skills-mcp-rag-memory.md
original-label:: Skills, MCP, RAG, and Memory: Four Ways Agents Get Knowledge

- #cluster/knowledge-access
- #corpus/ibm-ai-knowledge
- blurb:: An agent facing a production 500 error will flounder if you only dump runbooks, dashboards, and customer history into the context window. Four complementary mechanisms give agents knowledge beyond training data—each…

## Relations

- example of:: [[Agent Skills]] — Discussed in article
- related to:: [[MCP (Model Context Protocol)]] — Discussed in article
- related to:: [[RAG (Retrieval-Augmented Generation)]] — Discussed in article
- related to:: [[Agent Memory]] — Discussed in article

## Article

# Skills, MCP, RAG, and Memory: Four Ways Agents Get Knowledge

- An agent facing a production 500 error will flounder if you only dump runbooks, dashboards, and customer history into the context window. Four complementary mechanisms give agents knowledge beyond training data—each for a different kind of knowing.

## A working rule of thumb

- Table:
  - `| Need | Mechanism |`
  - `|------|-----------|`
  - `| Written-down knowledge (docs, manuals) | **RAG** |`
  - `| Lessons the agent learned from prior runs | **Memory** |`
  - `| Repeatable procedure and judgment (“how we triage”) | **Skill** |`
  - `| Live reach into systems without custom glue per tool | **MCP** |`

## Skills: procedural knowledge on demand

- A **skill** is instructions—and sometimes code—for doing a particular job the model was never trained on: steps, when to escalate, stopping rules. Formats are often a folder with a `skill.md` (YAML name/description plus markdown body). **Progressive disclosure** matters: at startup the agent may see only names and descriptions; it loads the full body when the task matches.

- Best practices from production skill building:

- **Description is the trigger** — say what the skill does *and when* to use it; models under-trigger, so slight overselling beats vagueness.
- **Build from real expertise** — walk the task yourself or mine runbooks/PR feedback; put **gotchas** in the body (environment facts that defy reasonable assumptions).
- **Spend context wisely** — keep bodies lean (~500 lines / ~5k tokens guidance); put deep material in `references/` opened only when needed.
- **Deterministic scripts for fragile steps** — math, exact transforms: `scripts/` the agent *runs*, not improvises.
- **Vet before running** — skills can execute code and touch files/keys; treat third-party skills like dependencies (audits have found high rates of flaws in public skill corpora).
- A triage skill can say “check error rate, then recent deploys”—but cannot by itself read the dashboard.

## MCP: reach into the world

- **Model Context Protocol** sits between the agent (MCP host) and systems behind **MCP servers**. The model need not know a proprietary logging API; the server exposes callable capabilities. With MCP, “check error rate” becomes a real metrics/logs call. Skills tell *what* to do; MCP enables *doing* it through a shared protocol instead of one-off integrations per agent.

## RAG vs memory

- **RAG** retrieves from documents people deliberately indexed (often a vector store) via semantic search, injecting matching chunks when needed. **Memory** is what the agent itself stored from experience—last time this 500 was caused by X, not the runbook’s Y—and can write the fix back after resolution. Same “pull when needed” shape; different provenance.

## Putting them together

- For the checkout outage: skill structures triage; MCP fetches live signals; RAG supplies dependency maps and manuals; memory recalls last week’s ugly root cause. Stuffing everything into the window is not a substitute for choosing the right mechanism for each kind of knowledge.

- **Sources**

- [Skills vs MCP vs RAG vs Memory: What AI Agents Need to Know](https://www.youtube.com/watch?v=X4FVEEegCbk)
- [5 Best Practices for Building AI Agent Skills](https://www.youtube.com/watch?v=qYNs80FKIVc)
- [5 Ways to Connect AI Agents to Tools: From APIs to MCP](https://www.youtube.com/watch?v=BHGTA6ZEls4)

## Navigation

- Cluster:: [[Cluster - Context, Tools & Knowledge Access]]
- Corpus:: [[Corpus - IBM AI Knowledge]]
- [[Clusters]]
- [[Contents]]
