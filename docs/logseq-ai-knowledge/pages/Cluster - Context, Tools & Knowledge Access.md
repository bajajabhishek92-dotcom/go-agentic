title:: Cluster - Context, Tools & Knowledge Access
type:: cluster
cluster:: knowledge-access
tags:: #cluster #knowledge-access #cluster/knowledge-access

- #cluster/knowledge-access
- summary:: Context engineering, RAG variants, MCP/skills/memory, semantic layers, and agent-ready APIs/web.

## Start here

- [[Context Engineering]] (concept) — Selecting what information enters the model window, when, and in what form—because huge context windows still fail via poisoning, distraction, confusion, and clash.
- [[MCP (Model Context Protocol)]] (technology) — A protocol pattern for exposing tools and resources to agents with progressive discovery, reducing ad-hoc API wiring.
- [[RAG (Retrieval-Augmented Generation)]] (concept) — Grounding model answers in retrieved documents or data; evolving from flat chunks toward structure-aware and agentic retrieval across corpora.

## Key concepts / techs / problems / practices

- [[Agent Memory]] (`concept`) — Experiential or sealed state that persists across sessions—distinct from RAG retrieval and skill procedures.
- [[Agent Skills]] (`concept`) — Packaged procedures and progressive disclosure (skill.md) that teach agents how to do recurring work without stuffing everything into the prompt.
- [[Agent Tooling & APIs]] (`concept`) — Patterns for connecting agents to private APIs—OpenAPI→tools, authorize-before-list, search-first discovery, short-lived credentials.
- [[Agent-Native Web]] (`concept`) — Web layers and growth surfaces designed for agents to browse and act—shifting from SEO-only assumptions.
- [[Agentic Retrieval]] (`practice`) — Iterative, multi-corpus retrieval with routing, citation, and observability—beyond single-shot top-k search.
- [[Semantic Layer for Agents]] (`technology`) — Business definitions, joins, and row-level security outside the prompt so agents query meaning rather than raw schemas.
- [[Structure-Aware - Chunkless RAG]] (`practice`) — Navigate document structure (Docling-style) instead of flat vector chunks so agents can join SQL 'what' with document 'why'.

## Articles

- [[Beyond Flat Chunks — Structure-Aware Retrieval and the Digital Librarian]] — Classic RAG cuts documents into chunks, embeds them, and at query time retrieves the most similar fragments for the model. It is cheap and effective for many “find anything about X” questions over large corpora. It…
- [[Building a Web That Agents Can Use]] — The public web was built for human eyes and ad clickers. Agents need machine-reliable retrieval, tools, and permissions. Parallel’s Parag Agrawal argues for a **new web layer for AI agents**—infrastructure that makes…
- [[Connecting Agents to Tools — From Direct APIs to MCP and Short-Lived Credentials]] — Agents are only useful when they can act: open tickets, read repos, post to chat, query databases. How that connection is wired determines whether you get a demo or a governable system. Five patterns appear in…
- [[Context Engineering — Giving Agents the Right Information]] — Prompt engineering asks how to phrase instructions. Context engineering asks a broader question: what entire information environment should the model see at each step? For agents that plan, call tools, retrieve…
- [[From Single-Shot RAG to Agentic Retrieval]] — Classic RAG embeds a question, fetches nearest chunks from one index, and generates once. That design is right for many FAQs. It fails in recognizable ways on enterprise questions: answers that span two corpora come…
- [[Semantic Layers — Let Agents Query Meaning, Not Schemas]] — Agents that answer business questions from live systems need more than a chat model and a SQL dialect. They need **joins, metric definitions, and row/column security to live outside the prompt**—in a governed…
- [[Skills, MCP, RAG, and Memory — Four Ways Agents Get Knowledge]] — An agent facing a production 500 error will flounder if you only dump runbooks, dashboards, and customer history into the context window. Four complementary mechanisms give agents knowledge beyond training data—each…
- [[Turning Private APIs into Agent Tools Without Flooding Context]] — When teams start building agents, the capabilities they need usually already exist as internal REST APIs. The hard part is not writing new product logic—it is making hundreds of private endpoints safely reachable by…

## See also

- [[Clusters]]
- [[Contents]]
