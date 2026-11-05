# Context, Tools & Knowledge Access

Agents fail less often from “dumb models” than from **wrong information environments**. **Context** is everything present at inference—system prompt, task, tools, retrieved documents, history, results. **Tools** are how agents reach the world—APIs, MCP servers, browsers, query layers. **Knowledge access** is how private and public corpora enter that environment: RAG, structure-aware navigation, memory, skills, and semantic layers. IBM’s context and retrieval vocabulary intersects AWS’s enterprise tool and RAG patterns and Sequoia’s call for a web agents can use: the shared problem is giving agents the *right* information with the *right* identity—not more tokens.

## Definitions

**Context engineering** asks what the model should see at each step. Models do not look up rows like a database; every token competes for attention. Material in the middle of a long window is often used less reliably than material at the edges. Good context is relevant, structured, timed, and compressed.

**Context rot** is reliability falling as context grows—more tokens competing for a finite attention budget before the advertised window limit is hit.

Four failure modes dominate long agent runs: **context poisoning** (a false conclusion enters the window and is treated as ground truth), **context distraction** (long history becomes the strongest pattern; the agent continues doing more of what it already did), **context confusion** (too many tool definitions make selection harder—one benchmark failed with 46 tools and passed with 19), and **context clash** (superseded and corrected facts both remain). Remedies throw information away on purpose: validate before writing into context, compact history, curate tools, prune outdated claims or start a fresh window.

**Skills** are procedural knowledge loaded on demand—how to run a recurring job—distinct from dumping every procedure into the system prompt. **MCP (Model Context Protocol)** sits between agents and tools so agents speak one protocol while servers know each backend. **RAG (retrieval-augmented generation)** fetches documents into context at query time. **Memory** persists facts across sessions; it is not the same as RAG’s one-shot retrieval. IBM’s rule of thumb: skills for procedures, MCP for reach, RAG for documents, memory for durable state—compose them; do not pick one slogan.

**Chunkless / structure-aware retrieval** keeps document trees (sections, tables, reading order) instead of flattening everything into similarity chunks. **Digital librarian** agents decide which parts of a question need SQL versus semantic search, run both, and compile grounded answers. **Agentic retrieval** loops: reformulate queries, inspect results, fetch more, rather than a single vector lookup. **Semantic layers** let agents query business meaning (metrics, entities, definitions) instead of raw warehouse schemas. **Agent-usable web** means sites and apps expose structured affordances agents can operate—not only human HTML meant for eyes and clicks.

## Right context beats more context

IBM’s context-engineering essay is the spine. For coding agents, useful inputs include searchable code and a compact repo map, dependency lock files, runnable tests, conventions in `agents.md`, and **developer intent**—what done looks like and what not to touch—which the repo alone cannot reveal. Sub-agents research without bloating the main window, then return short results. Progressive disclosure of skills beats pasting every runbook.

AWS’s private-API tooling pattern is the enterprise twin of context confusion: the anti-pattern is one MCP server per team flooding the agent with hundreds of low-level operations. Constraints that must hold together include least privilege, discoverability without dumping OpenAPI oceans into the prompt, stable tool schemas, and short descriptions that help selection. A durable pattern is OpenAPI in → curated tools out: generate candidate tools, then filter and compose so the agent sees a small, high-leverage surface. The intersection with IBM is explicit—tool count is a context-engineering problem, not only an integration problem.

## Four ways to get knowledge—and how retrieval grows up

Skills, MCP, RAG, and memory answer different questions. Skills encode *how*. MCP encodes *where to act*. RAG encodes *what is written*. Memory encodes *what we already established*. Putting them together means loading skills when a procedure starts, calling MCP when action is needed, retrieving when evidence is external, and writing memory when a fact should survive compaction.

Classic RAG chunks, embeds, and retrieves similar fragments. It is cheap for “find anything about X” over large corpora and breaks when answers depend on document structure—or when structured facts and unstructured policy live in different systems. Chunking throws away trees: headings detach from paragraphs; tables split from explanations. Structure-aware pipelines (Docling-style document objects) let agents start from an outline, open a section, follow references, and keep path context. Cost is more round-trips; parsing quality is most of the engineering. Vector search still wins for fuzzy search over millions of docs; many systems combine both—similarity to find the document, structure to navigate inside it.

When the corpus itself is contradictory—policies from different decades, federal vs state rules—the AI must be ≤ the data. Hygiene, clarification loops, and honesty about multiplicity beat fake certainty. The digital librarian pattern stitches SQL *what* with PDF *why*.

AWS’s move from single-shot RAG to **agentic retrieval** adds reformulation, multi-hop fetch, and mandatory observability once retrieval loops. Ingestion quality still dominates answer quality: garbage embeddings, bad chunking, and missing ACL metadata cannot be prompt-engineered away. Access control for RAG is its own topic—replicate-and-filter is not enough when tenants share indices; filter at retrieval with cryptographic or policy-backed proofs of what the caller may see. That claim intersects the enterprise-governance theme; here the point is knowledge access without leaking neighbors’ chunks.

Semantic layers sit beside document RAG. Agents need metrics definitions, entity relationships, and governed calculations—not only prose. Authoring surfaces that travel beyond one cloud product’s names, and governance that can change answers without rewriting prompts, are how analytics agents stay trustworthy when finance redefines “active customer.” Use semantic layers for meaning over tables; use document RAG for policies and narratives; use librarians when both are required.

## Tools, identity, and a web agents can use

IBM’s five connection patterns climb from shared credentials through OAuth impersonation, MCP abstraction, on-behalf-of token exchange, to vault-issued short-lived credentials. MCP alone is not security—it is the right seam at which to enforce policy, vaulting, and exchange once agents proliferate. Security practitioners treat agents like privileged identities because they authenticate, hold broad tool access, and act faster than human sessions. Climb the ladder as sensitivity and blast radius grow.

Sequoia’s “building a web that agents can use” is the public-internet complement. The old web breaks for agents when meaning lives only in visual layout, multi-step flows lack machine-checkable success criteria, and sites assume a human who can interpret CAPTCHAs and inconsistent DOM. Product implications: expose stable APIs or MCP servers, structured success signals, and permissions models that distinguish user intent from page content (injection surface). The intersection with IBM/AWS is sharp—whether the tool is a private OpenAPI or a public SaaS page, agents need curated affordances, not infinite HTML dumped into context.

## Intersection

IBM defines context failure modes and the skills/MCP/RAG/memory split; AWS shows how enterprise APIs, semantic layers, and agentic retrieval operationalize those definitions under tenancy and cost; Sequoia extends the same requirement to the open web. Across all three: **curate what enters the window**, **separate procedural from documentary from durable knowledge**, **retrieve with structure and loops when flat chunks fail**, and **attach identity and short-lived credentials at the tool seam**. Knowledge access is not a vector database purchase. It is context engineering with teeth.

## Sources woven in

- Context Engineering: Giving Agents the Right Information (IBM)
- Semantic Layers: Let Agents Query Meaning, Not Schemas (AWS ML Blog)
- Skills, MCP, RAG, and Memory: Four Ways Agents Get Knowledge (IBM)
- Turning Private APIs into Agent Tools Without Flooding Context (AWS ML Blog)
- Connecting Agents to Tools: From Direct APIs to MCP and Short-Lived Credentials (IBM)
- From Single-Shot RAG to Agentic Retrieval (AWS ML Blog)
- Building a Web That Agents Can Use (Sequoia)
- Beyond Flat Chunks: Structure-Aware Retrieval and the Digital Librarian (IBM)
