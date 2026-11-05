# Why Agent Evaluations Are Hard

Evaluating a chatbot answer is mostly: prompt in, text out, grade. Evaluating an **agent** is harder because the system acts across turns, tools, and mutable state. Anthropic’s *Demystifying evals for AI agents* is the clearest practitioner map of that difference—and why teams that skip evals eventually fly blind.

## From single-turn to agentic tests

Anthropic’s vocabulary is worth internalizing:

- **Task** — one test case with inputs and success criteria.
- **Trial** — one stochastic attempt; run many for stable estimates.
- **Grader** — logic (often multiple checks) scoring transcript or outcome.
- **Transcript / trace** — full trajectory of messages, tool calls, reasoning.
- **Outcome** — final environment state (e.g., whether a booking exists), which can diverge from what the agent *said*.
- **Evaluation harness** — infrastructure that runs tasks, records, grades, aggregates.
- **Agent harness** — the scaffold that makes a model agentic; you usually evaluate **model + harness together**.
- **Evaluation suite** — a collection of tasks sharing a broad goal (refunds, cancellations, and escalations in a support suite, for example).

Agent evals are complex because errors **compound**, environments are partially observable, and frontier models invent creative solutions that break static rubrics. Anthropic’s τ2-bench flight-booking example—where Opus found a policy loophole that “failed” the written eval while better serving the user—shows grading philosophy itself is contested. A score without a theory of “correct” is a false comfort.

## Why teams eventually need them

Early agent building can survive on dogfooding and intuition. Anthropic’s pattern match: once in production, users report “it feels worse,” and without evals the team cannot separate regressions from noise or test hundreds of scenarios before shipping. Claude Code’s history—manual feedback first, then narrow evals (conciseness, edits), then complex behaviors (over-engineering)—illustrates staged investment. Peer examples (Descript’s editing dimensions; Bolt’s static analysis + browser agents + LLM judges) show the same maturation curve across industries.

Evals also accelerate **model upgrades**: teams with suites adopt new models in days; teams without spend weeks rediscovering failure modes. They become a high-bandwidth interface between product and research—metrics someone can optimize—while latency, token use, cost per task, and error rates fall out of a fixed task bank as free baselines.

## Early versus late investment

Some teams write evals at the start to force clarity on success; others add them when scale makes flying blind unbearable. Earlier is cheaper. Two engineers reading the same spec will disagree on edge cases; a suite settles the product contract. Waiting until after a painful regression means you rebuild trust under pressure.

## Capability vs regression

Anthropic distinguishes:

- **Capability / quality evals** — “What can this agent do?” Should start with low pass rates on hard tasks that stretch the frontier.
- **Regression evals** — “Did we break something?” Should stay near-passing and catch silent quality drops.

Conflating them produces either permanently red dashboards (that people ignore) or permanently green ones (that hide decline). Maintain both; report them separately.

## Grader types and scoring

Effective suites mix:

- **Code-based graders** — unit tests, schema checks, SQL state assertions, static analysis, browser assertions.
- **Model-based graders** — LLM judges with rubrics, calibrated against humans.
- **Human graders** — taste, safety nuance, and judge calibration.

Scoring may be binary (all must pass), weighted, or hybrid. An agent that narrates “done” while leaving a broken environment needs outcome checks, not BLEU or vibe scores alone. Weight critical safety checks so they cannot be averaged away.

## Domain patterns worth stealing

- **Coding agents:** unit/integration tests, diff quality, over-engineering rubrics, sandbox escapes.
- **Research agents:** citation sufficiency, source quality, fabrication checks.
- **Computer-use agents:** GUI success, irreversible-action blockers, timing robustness.
- **Policy/support agents:** outcome state plus transcript compliance with written policy.

You rarely need a brand-new science of evaluation—extend these patterns to your domain.


## Stochasticity and sample size

Because agents are stochastic and long-running, single-trial demos mislead. Anthropic’s emphasis on multiple trials is not pedantry: variance on tool-using trajectories is large. Budget evaluation compute the way you budget load tests—enough runs to detect meaningful regressions, not just to paint a green chart for leadership.



## Partial observability

Agents often cannot see the full environment state; graders sometimes can. That asymmetry is useful (you can check the database) but dangerous if you assume the agent had the same information. Design tasks that test behavior under missing tools, stale docs, and conflicting API responses—the failure modes users actually hit.


## Takeaways

- Evaluate **trajectories and environment outcomes**, not only final text.
- Treat **agent harness + model** as the system under test.
- Separate **capability** suites from **regression** suites.
- Invest before you scale; eval debt compounds faster for agents than for chatbots.
- Use mixed graders; never let soft scores override hard state checks on critical paths.

## Sources

- [SWE-bench](https://www.swebench.com/) (incl. Verified / live leaderboard variants as published)
- [Anthropic — Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)
- [Anthropic — Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/research/infrastructure-noise)
- [Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)
- [Epoch AI — MirrorCode](https://epoch.ai/benchmarks/mirrorcode)
- [Epoch AI — 9 big questions benchmarks can help answer](https://epoch.ai/gradient-updates/9-big-questions-benchmarks-can-help-answer)
- Sibling teaching: [Anthropic News](../anthropic-news/index.md) · [good eval practice](good-eval-practice-for-agents.md)
