# Source-Aware Verification and Consistency for Tool Agents

MCP-style agents pull many tools—search, records, databases—then weave one answer. Two failure modes matter more than raw fluency: **wrong attribution** of a true fact, and **one-shot success that does not repeat**.

## Cross-source conflation

Faithfulness checkers (RAGAS-style, MiniCheck, AlignScore, SummaC) often pool evidence and ask “is this claim supported somewhere?” That misses **cross-source conflation**: the refund window is real in a policy doc, but the answer says “according to the account record.” In clinical or finance settings, wrong provenance can be as harmful as a wrong fact.

**ProvenanceGuard** is a post-generation layer that keeps source IDs through the pipeline: decompose claims → route to relevant tool outputs → NLI support check → compare named/implied source → allow/block (optional RARR-style repair). On a medical-agent study, it blocked nearly all expert-flagged bad claims (138/139) while emitting claim→source IDs baselines lack. Separating similar sources remains hard (~50% exact source ID in a stress slice); deliberate attribution swaps were caught 50/50.

Teach: for MCP agents, factuality includes **which tool output** grounded each claim. Prefer conservative block+repair over shipping unverifiable prose.

## Consistency is a first-class metric

IBM Research’s ALTK-Evolve work highlights the rehearsal/demo gap: agents succeed once, then take another path and fail. On AppWorld, a ReAct+GPT-4.1 agent hit ~77% average success across five reps but only ~53% of tasks succeeded on **all** five—a large **consistency gap**. Most leaderboards publish the average; production cares about the second number.

Consistency guidelines distilled from an agent’s own past trajectories (injected at inference) target that gap—the same spirit as ThinkingBox’s 20/20 metric for stateful backends. Measure both mean success and all-trials success before calling a workflow “ready.”

## Practice checklist

- Keep MCP traces with stable source IDs; do not collapse tools into one anonymous context for grading.
- Gate answers with source-aware checks when attribution is load-bearing; repair or fallback when blocked.
- Report consistency (k/k successes), not only pass@1.
- Use trajectory mining to stabilize paths for mission-critical flows; validate that guidelines do not merely memorize one brittle script.

**Sources**

- [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
- [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
