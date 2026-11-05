# Coding Agents & Software Delivery

**Coding agents** are models plus harnesses that plan, edit, test, and recover across a repository—not autocomplete that finishes a line. **Software delivery** in the agent era is everything after generation becomes cheap: fit to architecture, security outcomes, review under volume, source-control systems that survive concurrent writers, and modernization that preserves behavior when languages and platforms change. IBM’s workflow and security framing intersects OpenAI’s systems work on Git scale and low-resource language migration: the scarce work moved upstream of syntax and downstream of the model.

## Definitions

**Code quality** still means readability, maintainability, reliability, and efficiency—but well-formed code is no longer scarce. The scarce question is whether a change delivers the intended business outcome and **fits** the system: shared utilities, contracts, permissions, logging, retries. An agent that only sees the open file can add a working endpoint that bypasses the service layer; tests pass; the system gets worse.

**AI code generators** continue a long line of translators—from compilers once accused of making programmers lazy through high-level languages and IDEs. Models trained on public code translate natural-language intent into patterns that look like Python or Java. The practical filter is not cultural debate; it is whether you would let a tool near production: grounding, tests, review, dependency hygiene.

**Rapid Application Development (RAD)** favored iteration and user feedback over waterfall: light requirements, prototypes kept and grown, short construction cycles. Agentic coding rhymes with RAD’s bet that users discover wants by reacting to working software. Keep RAD’s discipline—time boxes, continuous testing, user validation—or speed becomes unmanaged scope.

**Spec-driven development** means requirements and done criteria agents can execute, instead of arguing with free-form chat. **Conducting** is the developer’s shifted role: architecture, milestones, context and loop engineering, sandboxing against injection, and reading what agents produce.

**Legacy code** still runs, but maintenance is painful: outdated languages, thin tests, missing docs, critical domain logic that lives only in source and in heads of people who may have left. It is often mission-critical—money, patients, inventory—so fear of a “harmless” change that stops millions of transactions is rational.

**Shift-left security** for AI-generated code means embedding validation while code is shaped, not as a late checkbox: trust outcomes not generation, scrutinize dependencies as hard as source, nail intent before elegant code, and keep continuous validation plus agent guardrails.

**Agent-scale source control** is the recognition that many concurrent agent writers and readers break Git service assumptions that were fine for human cadence—without abandoning Git’s protocol for humans and agents alike.

**Low-resource languages** (COBOL, Fortran, Visual Basic, and similar) have thin training signal relative to Python/JavaScript yet power banking rails and safety-critical analysis. Progress is measured by build-from-scratch and behavior-preserving migration evals, not by whether generated code “looks idiomatic.”

## Quality, RAD, and review when volume explodes

IBM’s coding-workflow articles insist value is outcomes, not lines generated. Repo-aware agents, searchable maps, lock files (so APIs match real versions), runnable tests, and checked-in conventions (`agents.md`) are how fit happens without dumping the entire repo into the prompt. Ask what must be understood before what should be written.

IDEs already unified edit, build, debug, and VCS; AI now generates inside that loop, and agents go further into multi-step features and merges. Review history ran from heavy Fagan inspections to pair programming to PR-centric async review. AI increases patch volume and can assist review, but humans still own architectural fit, intent, and risk. **Comprehension debt**—code that exists faster than teams can understand it—grows when agents write more than humans read. Pair AI review suggestions with judgment on whether the change belongs.

Legacy modernization is the same quality story at decade scale. Discovery that once took months of reading can compress with models that summarize modules and data flows; translation can convert COBOL toward Java or C toward Python while aiming to preserve intent; agentic migration chains analyze → plan → translate → test → document. Success usually moves on three axes while the business keeps running: architecture (coupled monolith toward independently deployable pieces), technology (languages and platforms that still get security updates), and process (rare manual releases toward automated testing and smaller changes). AI is a force multiplier, not a magic rewrite button. Syntactically fine translations can be behaviorally wrong. Experienced engineers stay close to high-risk decisions.

## Security shift-left meets agent velocity

IBM’s five shift-left principles are the security counterpart to quality-as-fit. Generation that compiles is not a security verdict: ask least privilege, fail-safe defaults, and behavior when auth breaks. Embed static analysis, secret scanning, and policy checks *as* code appears—because generation takes seconds and late review takes days. Treat pulled packages with the same scrutiny as generated source; supply-chain risk often hides under the prompt. Many serious failures are intent failures—wrong access assumptions dressed in elegant code—so requirements for who may see what must precede polish. Continuous validation matters after deploy; agentic multi-step work needs identities, least privilege, monitoring, and human oversight on high-impact steps. Speed alone does not create value; **trust** does.

OpenAI’s computer-use and coding evals elsewhere in the corpus reinforce the same operating reality: static review under-covers behavioral bugs when shipping velocity rises. The intersection is clear—IBM names the principles; Extra sources show how measurement and tooling must keep pace with agents that act across repos and UIs.

## When agents break Git—and when languages leave the training distribution

OpenAI’s Pando work teaches that agent-scale engineering starts below the model. Coding agents multiply branches, CI clones, and fetches of the same commit. Classic Git services struggle when many writers and many readers spike together. Pando’s levers: **causal consistency** per branch instead of repository-wide point-in-time snapshots that serialize every push; **pack reuse** instead of unique packfiles per client; advertise a small base (often trunk) so feature-branch packs stay reusable. Measure push-to-fetch latency and concurrent branch updates—not only repo size. Keep protocol compatibility so humans and agents share tools while storage and consistency change. In production, median push latency fell nearly 5× while serving nearly a petabyte of Git data per day—evidence that delivery infrastructure is part of agentic capability.

Low-resource language coding closes the modernization loop. MultiLangBench-style evals ask models to build something hard (for example a SQLite-compatible engine) across many languages, grading via shared database-file interfaces so the same tests apply everywhere. Migration evals (COBOL → modern languages) use hidden tests requiring byte-for-byte observable parity—because COBOL fixed-point truncation versus silent rounding can “work” and still corrupt financial results. Practice: prefer behavior-preserving tests over idiomatic-looking rewrites; keep humans on rounding, error handling, and regulatory semantics; use cheaper models for scaffolding and frontier compute on parity failures. IBM’s legacy modernization narrative and OpenAI’s low-resource evals are the same problem from operations and measurement sides.

## Intersection

IBM supplies the delivery culture: quality as fit, RAD discipline, conductor role, shift-left security, incremental modernization. OpenAI supplies the systems and measurement pressure: Git backends that survive agent concurrency, and eval harnesses that prove low-resource build and migrate capability without trusting surface syntax. Together they say software delivery in the agent era is **verification infrastructure**—tests, parity suites, security outcomes, review bandwidth, and source control—wrapped around models that write faster than humans can casually trust.

## Sources woven in

- AI Coding Workflows: Quality, RAD, IDEs, and Review (IBM)
- Legacy Modernization with AI (IBM)
- Agent-Scale Source Control: When Concurrent Writers Break Git Assumptions (OpenAI News)
- Securing AI-Generated Code: Five Shift-Left Principles (IBM)
- Coding Agents for Low-Resource Languages: Build and Migrate Without Breaking Behavior (OpenAI News)
