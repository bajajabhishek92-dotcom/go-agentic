# IBM Technology AI Knowledge

These articles synthesize ideas from IBM Technology’s YouTube videos. Each piece is written as a standalone explainer from video transcripts—not a watch-along summary—so you can learn the concepts without watching the source material. Related videos are grouped when they teach the same theme.

**Corpus start-here:** [`../README.md`](../README.md) · **Themes:** [`../ai-knowledge-by-theme/`](../ai-knowledge-by-theme/) · **Landscape / gap-fill:** [`../gap-fill-ai-knowledge/`](../gap-fill-ai-knowledge/)

**Video inventory (expanded):** see [videos-300.md](./videos-300.md) — target 300 listings; browse transcripts under `/cursor/stores/self/internal/transcripts/ibm/`. Prior 100 inventory preserved at `/cursor/stores/self/internal/ibm-videos-100.json`.
## Articles

- [Using Sensitive Data with AI: Visibility, Classification, and Control](sensitive-data-ai-controls.md) — Five machine-speed controls for PII and regulated data: see it, classify it, place it lawfully, govern access (the four As), and prove it with audit evidence.
  - [Can Your AI Use Sensitive Data Safely? 5 Capabilities You Need](https://www.youtube.com/watch?v=jnP9AgtX0qo)
  - [What Is Digital Sovereignty? AI, Data & Control Explained](https://www.youtube.com/watch?v=Gj13NR35WU4)

- [Context Engineering: Giving Agents the Right Information](context-engineering-for-agents.md) — Why huge context windows still fail; relevance, timing, and four failure modes (poisoning, distraction, confusion, clash); coding-agent inputs and `agents.md`.
  - [What Is Context Engineering? Why It Matters for AI Agents](https://www.youtube.com/watch?v=Qx0fCqpkBus)
  - [Context Engineering for AI Agents: 4 Failure Modes to Avoid](https://www.youtube.com/watch?v=BwXremQ-i6I)
  - [Context-Aware Coding: Give AI Agents the Right Context](https://www.youtube.com/watch?v=EkdIZXDnRK8)
  - [5 Concepts to Know for Coding with AI Agents](https://www.youtube.com/watch?v=hTAWHgQI4xg)

- [Agentic Engineering Vocabulary: Prompt, Context, Harness, Loop, Graph, Factory](agentic-engineering-vocabulary.md) — Shared language from prompt craft through harnesses, loops, multi-agent graphs, software factories, and the shift beyond vibe coding.
  - [Agentic Engineering: 5 Terms Every AI Developer Should Know](https://www.youtube.com/watch?v=SIZsFGvtClM)
  - [AI Model vs Agentic Harness: What Actually Drives AI](https://www.youtube.com/watch?v=ZELPNFXJ4_o)
  - [Agentic Engineering vs Software Engineering: Beyond Vibe Coding](https://www.youtube.com/watch?v=FgaBdwSvOGM)

- [Loop Engineering: Designing Systems That Prompt Themselves](loop-engineering.md) — Goal–act–observe–adjust loops with triggers, spines, tools, and sub-agents—and why “minimal” human involvement still means goals, intent, and reading the output.
  - [What Is Loop Engineering? Building Better AI Agents](https://www.youtube.com/watch?v=DQBqh6gcx7U)
  - [Agentic Engineering: 5 Terms Every AI Developer Should Know](https://www.youtube.com/watch?v=SIZsFGvtClM)
  - [5 Concepts to Know for Coding with AI Agents](https://www.youtube.com/watch?v=hTAWHgQI4xg)

- [Quantization: How Models Get Smaller Without Starting Over](quantization-llm-compression.md) — FP16 → int8/int4 trade-offs, PTQ vs QAT, and why precision choice dominates memory and serving cost.
  - [What Is Quantization? How AI Models Get Smaller & Faster](https://www.youtube.com/watch?v=mmns33BsBcY)
  - [Llama.cpp vs vLLM: Which Local LLM Engine Actually Scales?](https://www.youtube.com/watch?v=0ujh7hfutq0)

- [torch.compile: Dynamo, Inductor, Graph Breaks, and `.item()` Costs](torch-compile-graph-breaks.md) — What the three compile stages do, when graph breaks shrink optimization regions, and why scalar reads sync the accelerator.
  - [What Is torch.compile? Dynamo, PyTorch & Faster AI Models Explained](https://www.youtube.com/watch?v=QUZ4KEDxhCM)
  - [The One-Line Slowdown: Why AI Models Get Slower](https://www.youtube.com/watch?v=UgEA5ictENM)

- [LLM Inference: From Idle Weights to Live Answers](llm-inference-fundamentals.md) — Engines, tokenization, continuous batching, and the prefill (compute-bound) vs decode (memory-bound) split behind TTFT and ITL.
  - [What Is LLM Inference? How AI Models Generate Responses](https://www.youtube.com/watch?v=615-yWyS1n0)
  - [The AI Memory Wall: Why LLMs & AI Accelerators Hit a Bottleneck](https://www.youtube.com/watch?v=4b6KpFN7Rio)

- [The Memory Wall and Scaling LLMs Beyond One GPU](ai-memory-wall-multi-gpu.md) — Roofline arithmetic intensity, why decode starves for bandwidth, and data/pipeline/tensor/expert parallelism plus prefill–decode disaggregation.
  - [The AI Memory Wall: Why LLMs & AI Accelerators Hit a Bottleneck](https://www.youtube.com/watch?v=4b6KpFN7Rio)
  - [How AI Models Scale Beyond a Single GPU Across LLM Workloads](https://www.youtube.com/watch?v=qZBibWYcKH4)
  - [How GPUs Accelerate Data & Analytics with AI](https://www.youtube.com/watch?v=zqowMgMgSjA)

- [Skills, MCP, RAG, and Memory: Four Ways Agents Get Knowledge](skills-mcp-rag-memory.md) — When to use procedures, protocols, retrieval, or experiential memory—plus skill.md best practices and progressive disclosure.
  - [Skills vs MCP vs RAG vs Memory: What AI Agents Need to Know](https://www.youtube.com/watch?v=X4FVEEegCbk)
  - [5 Best Practices for Building AI Agent Skills](https://www.youtube.com/watch?v=qYNs80FKIVc)
  - [5 Ways to Connect AI Agents to Tools: From APIs to MCP](https://www.youtube.com/watch?v=BHGTA6ZEls4)

- [Connecting Agents to Tools: From Direct APIs to MCP and Short-Lived Credentials](connecting-agents-to-tools.md) — Five connection patterns from shared API keys through OAuth, MCP, on-behalf-of exchange, and vault-issued short-lived creds.
  - [5 Ways to Connect AI Agents to Tools: From APIs to MCP](https://www.youtube.com/watch?v=BHGTA6ZEls4)
  - [Skills vs MCP vs RAG vs Memory: What AI Agents Need to Know](https://www.youtube.com/watch?v=X4FVEEegCbk)

- [Beyond Flat Chunks: Structure-Aware Retrieval and the Digital Librarian](chunkless-rag-complex-documents.md) — Chunkless / Docling-style navigation, messy contradictory corpora, and agents that join SQL “what” with document “why.”
  - [What Is Chunkless RAG? How Docling & AI Agents Navigate Documents](https://www.youtube.com/watch?v=vRZNJWw78BQ)
  - [Why RAG Solutions Fail with Complex Documents & Vector Databases](https://www.youtube.com/watch?v=xc63tFIIfeA)
  - [What Is a Digital Librarian AI Agent? Connecting SQL & Vector Database](https://www.youtube.com/watch?v=eFf2OvkZxEM)

- [Trusting AI Decisions: Agents, Rules, Confidence, and Governance](trusting-ai-decisions.md) — Why probability ≠ proof; hybrid rules-then-agents; when not to use AI; HITL limits; risk-driven architecture and ISO 42001-style management.
  - [The Problem with Jev: Can You Trust AI Decisions?](https://www.youtube.com/watch?v=_yO_Q7qo0HQ)
  - [AI Agents vs Business Rules: Which Should Make Decisions?](https://www.youtube.com/watch?v=i1ZmNUbRGD4)
  - [Knowing When Not to Use AI: AI Agents vs Rules vs ML](https://www.youtube.com/watch?v=_ZqSFVi6UDY)
  - [Human in the Loop Is Not a Governance Strategy for Agentic AI](https://www.youtube.com/watch?v=zRMAvMSSSII)
  - [How to Manage Your AI Before It Makes the Wrong Decision](https://www.youtube.com/watch?v=SVAwzodyFUo)
  - [Why Risk Should Determine Your AI Architecture](https://www.youtube.com/watch?v=3G6AVkp4Rf0)

- [Jev and System-One Decision Models](jev-calibrated-decisions.md) — Calibrated probabilities vs generative LLMs; RLCD; thresholds for automate / escalate / ignore; hybrid with system-two LLMs—and why confidence still needs observability.
  - [What Is Jev? The AI Model That Doesn't Generate Text](https://www.youtube.com/watch?v=YGgNBcIgI4s)
  - [The Problem with Jev: Can You Trust AI Decisions?](https://www.youtube.com/watch?v=_yO_Q7qo0HQ)

- [The AI Security Trilemma—and Why Agents Raise the Stakes](ai-security-trilemma.md) — Smart vs fast vs secure; security proxies; OWASP LLM Top 10, excessive agency, and resilience when models are fooled.
  - [What Is the AI Security Trilemma? Smart, Fast, or Secure AI?](https://www.youtube.com/watch?v=OvjccOrr-iw)
  - [The OWASP LLM Top 10 has a few surprises for you](https://www.youtube.com/watch?v=auS34nm9VAc)
  - [Understanding AI Agent Hallucination in AI Systems](https://www.youtube.com/watch?v=bNRhppHct54)

- [Open-Source Security When AI Makes Discovery Cheap](open-source-security-ai-era.md) — AI-accelerated vuln discovery, the remediation bottleneck, upstream fixes, and coordinated discovery-to-deploy pipelines.
  - [Open Source Security in the Age of AI](https://www.youtube.com/watch?v=5WlmyncEcNM)
  - [The OWASP LLM Top 10 has a few surprises for you](https://www.youtube.com/watch?v=auS34nm9VAc)

- [Securing AI-Generated Code: Five Shift-Left Principles](securing-ai-generated-code.md) — Trust outcomes not generation; security during coding; dependency scrutiny; intent/requirements; continuous validation plus agent guardrails.
  - [How Developers Secure AI-Generated Code: 5 Security Best Practices](https://www.youtube.com/watch?v=X0UI0O8YzJM)

- [Digital Sovereignty in Agentic Systems](digital-sovereignty.md) — Control over data, operations, technology, and the intelligence layer when AI workloads span regions and providers.
  - [What Is Digital Sovereignty? AI, Data & Control Explained](https://www.youtube.com/watch?v=Gj13NR35WU4)
  - [Can Your AI Use Sensitive Data Safely? 5 Capabilities You Need](https://www.youtube.com/watch?v=jnP9AgtX0qo)

- [Model Collapse: When AI Learns Only from AI](model-collapse.md) — How recursive synthetic training erodes rare knowledge, why fluent wrongness is dangerous, and how provenance and human data anchor models.
  - [What Is AI Model Collapse? Why AI Could Forget Reality](https://www.youtube.com/watch?v=uhWFLmr7xao)
  - [Knowing When Not to Use AI: AI Agents vs Rules vs ML](https://www.youtube.com/watch?v=_ZqSFVi6UDY)

- [Fine-Tuning, RAG, LoRA—and Choosing a Local Inference Engine](fine-tuning-rag-local-engines.md) — When fine-tuning still pays, the prompt/RAG/skills-first stack, LoRA, and llama.cpp vs vLLM for local vs production scale.
  - [Is Fine-Tuning Still Needed? LLMs, RAG, & LoRA](https://www.youtube.com/watch?v=-W2JdSl1v48)
  - [Llama.cpp vs vLLM: Which Local LLM Engine Actually Scales?](https://www.youtube.com/watch?v=0ujh7hfutq0)
  - [What Is Quantization? How AI Models Get Smaller & Faster](https://www.youtube.com/watch?v=mmns33BsBcY)

- [AI Coding Workflows: Quality, RAD, IDEs, and Review](ai-coding-quality-workflows.md) — Outcome-based quality, repo-aware agents, RAD-style iteration, AI IDEs/generators, and reviews under high code volume.
  - [Code Quality in the Age of AI: Why Great Code Isn't Enough](https://www.youtube.com/watch?v=GRYZR2R20FI)
  - [What Is RAD? Why It Matters in the Age of AI Coding](https://www.youtube.com/watch?v=J0zbWsutyA8)
  - [What Is an AI IDE? How AI Is Changing Developer & Coding Tools](https://www.youtube.com/watch?v=fWZylhIHF9w)
  - [What is an AI Code Generator? LLM Coding, Productivity, & Risk](https://www.youtube.com/watch?v=oanQrXEiCy4)
  - [How AI Is Changing Code Reviews & Software Development](https://www.youtube.com/watch?v=c57vAe-mMLo)
  - [How AI Coding Agents Understand Your Codebase & Developer Tools](https://www.youtube.com/watch?v=zAe-sau06io)
  - [5 Concepts to Know for Coding with AI Agents](https://www.youtube.com/watch?v=hTAWHgQI4xg)

- [Legacy Modernization with AI](legacy-modernization-with-ai.md) — What legacy code is, why modernization stalled, AI for discovery/translation/agentic migration, three axes (architecture/tech/process), and human review limits.
  - [What Is Legacy Code? How AI Is Modernizing Legacy Systems](https://www.youtube.com/watch?v=CKC47S92wA4)
