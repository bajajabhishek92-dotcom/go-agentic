title:: Cluster - Trust, Evaluation & Decision Quality
type:: cluster
cluster:: trust-evals
tags:: #cluster #trust-evals #cluster/trust-evals

- #cluster/trust-evals
- summary:: When to trust AI, calibrated decisions, agent evals, benchmark hygiene, specs, and interpretability.

## Start here

- [[Agent Evaluation]] (practice) — Measure outcomes on real tasks (LifeVal, executable grading, factuality slices)—not only exam scores or tool-call theater.
- [[Trusting AI Decisions]] (concept) — Probability is not proof; hybrid rules-then-agents, risk-driven architecture, and governance (e.g. ISO 42001-style) decide when AI may act.

## Key concepts / techs / problems / practices

- [[Benchmark Signal Disentanglement]] (`practice`) — Separate what benchmarks measure (multidimensional IRT, state-tracking levels, speech beyond WER) so scores don't conflate capabilities.
- [[Calibrated Decision Models (Jev)]] (`technology`) — System-one models that output calibrated probabilities for automate/escalate/ignore thresholds—complementary to generative LLMs.
- [[Open Interpretability (SAEs)]] (`technology`) — Sparse autoencoders and transcoders (e.g. Gemma Scope) for auditing jailbreaks, hallucinations, and agent internals at model scale.
- [[Source-Aware Verification]] (`practice`) — Prevent cross-source conflation and demand consistency beyond average pass rates for tool-using agents.
- [[Value-Centered Model Specs]] (`practice`) — Organize model behavior around faithfulness, harm, honesty, agency, and care—teaching judgment, not just style.

## Articles

- [[Executable Agent Grading — Outcomes Beat Tool-Call Theater]] — Agents can look competent while leaving the wrong record behind. Nine clean tool calls, a polite “resolved” reply, and a ticket closed when policy required **on hold**—that is the failure mode ThinkingBox was built…
- [[Factuality Benchmarks and Double-Blind Evaluations]] — As models become default information sources, two evaluation problems dominate: **measuring factuality across modes**, and **preventing contamination** so scores stay trustworthy.
- [[Gemma Scope — Open Interpretability at Model Scale]] — Frontier safety needs more than black-box evals. Gemma Scope 2 is DeepMind’s open “microscope” for the Gemma 3 family: sparse autoencoders (SAEs), transcoders, and chat-oriented tools so researchers can see **what…
- [[Jev and System-One Decision Models]] — Most AI you use today is a text generator: a large language model (LLM) emits tokens one at a time—sometimes with a visible chain of thought that feels like slow, deliberate “system two” reasoning. Many software…
- [[LifeVal — Evaluating Agents on What Everyday People Need Done]] — Benchmarks that measure exam knowledge miss a large part of AI’s value: helping people complete practical life tasks—childcare logistics, government services, budgets, school prep, health-related meal planning,…
- [[Long-Context State Tracking — What Benchmarks Must Separate]] — Long-context benchmarks often ask whether a model “remembers” something far back in a document. That question hides several different skills. **State tracking**—following how entities change as a document unfolds—has…
- [[Source-Aware Verification and Consistency for Tool Agents]] — MCP-style agents pull many tools—search, records, databases—then weave one answer. Two failure modes matter more than raw fluency: **wrong attribution** of a true fact, and **one-shot success that does not repeat**.
- [[Speech Evaluation Beyond Aggregate WER]] — Speech models ship faster than evaluations keep up. Two Hugging Face Audio themes matter for teaching: **scalable objective TTS metrics**, and **ASR tests that expose who fails**—not just a single average word error…
- [[Trusting AI Decisions — Agents, Rules, Confidence, and Governance]] — When AI generates a paragraph, a bad answer is embarrassing. When AI denies a loan, contains a host, or pays an invoice, a bad answer is an incident. The hard question is not only “can AI decide?” but “how do we know…
- [[Value-Centered Model Specs — Teaching Judgment, Not Just Style]] — As models take consequential actions, literal instruction-following is not enough. They need a public, inspectable description of desired behavior—and that description works better when it is organized around…
- [[What Benchmarks Actually Measure — Disentangle the Signals]] — A leaderboard number is a blend. BBQ may be filed under “safety” while many items lean on **general reasoning**. HarmBench mixes phishing-style compliance with copyright prompts that track reasoning more than…

## See also

- [[Clusters]]
- [[Contents]]
