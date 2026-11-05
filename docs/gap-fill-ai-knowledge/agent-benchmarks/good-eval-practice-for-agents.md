# Good Eval Practice for Agents

Strong agent evaluation is less about chasing a viral benchmark and more about building a **measurement system** that matches product claims, resists gaming, and stays calibrated as models improve. Anthropic’s agent-eval playbook, independent-evaluator practice, Epoch’s design choices on MirrorCode, and FPF’s privacy-benchmarking argument converge on practical habits.

## Start from success criteria, not from a leaderboard

Write down what “good” means in user terms—Descript’s triad (don’t break things; do what I asked; do it well) is a template. Turn each clause into graders: state assertions for breakage, instruction-following checks for compliance, quality rubrics for polish. If two engineers disagree on edge cases, the eval suite is where you settle the product contract. Claims like “autonomous coding” or “safe for customer data” must map to concrete tasks or they are unfalsifiable marketing.

## Design tasks with trials, transcripts, and outcomes

Follow Anthropic’s structure:

1. Define tasks with clear inputs and environment setup.
2. Run multiple **trials** to handle stochasticity.
3. Record full **transcripts** for debugging and secondary grading.
4. Grade **outcomes** in the environment, not only message text.
5. Separate suites for **capability** (ambitious, low pass rate) and **regression** (near-passing, high sensitivity to breaks).

Seed tasks from real incidents and support tickets; synthetic-only suites drift from production pain.

## Choose graders deliberately

- Prefer **code/outcome graders** when ground truth is crisp (tests pass, row inserted, file matches schema).
- Use **LLM judges** for open-ended quality—but calibrate with periodic human review and known adversarial examples.
- Keep **humans** in the loop for safety judgments and for auditing judge drift.
- Combine graders; require critical checks to pass even if soft scores look fine.
- Version grader prompts/code like production dependencies.

## Make budgets and harnesses explicit

Report the agent harness version, tools available, timeout, retry policy, and inference spend. Epoch’s MirrorCode critique of tiny budgets on week-scale tasks applies internally: if production agents may run for hours, evals that cut off at thirty seconds measure a different product. Conversely, unbounded spend can buy leaderboard points that customers will not fund—track **cost per successful task** and latency percentiles beside pass rate.

## Defend against contamination and eval awareness

- Hold out private tasks; rotate or rewrite items.
- For web agents, prefer offline corpora or monitored tools; watch for answer-key hunting behaviors described in Anthropic’s BrowseComp work.
- Sandbox where possible (no internet, no hidden label access), as MirrorCode does.
- Log suspicious meta-reasoning about “this looks like a benchmark.”
- Separate public marketing numbers from private gate suites.

## Include non-capability axes

Ship at least thin suites for:

- **Privacy** (memorization probes, unnecessary data access)—FPF’s measurement agenda.
- **Safety / policy** (disallowed tool uses, escalation).
- **Robustness** (tool failure, partial observability, conflicting instructions).
- **Latency and cost** baselines on a fixed task bank.

Enterprise buyers increasingly ask for evidence packs; having them beats scrambling after an RFP.

## Use independent eyes when stakes are high

Anthropic’s independent-evaluator update stresses expertise, independence, deep access, and freedom to publish. For frontier or high-risk agents, external red teams and auditors catch eval blind spots internal dashboards normalize. CSET’s work on systematizing red-teaming reports points the same direction for the broader ecosystem. Even a lightweight internal “red team” that does not own the agent helps.

## Maintain the suite like production code

Version tasks, review new items, retire saturated ones, and monitor pass-rate drift after each model or prompt change. Weekly: regression on main. Per model candidate: capability + safety packs and cost curves. Per incident: add a catching task. Quarterly: recalibrate judges, review privacy probes. Maintain a short design doc: claims → tasks → graders → known blind spots—for auditors, buyers, and future you.


## Cost as a first-class metric

Pass rate without cost invites gold-plated agents nobody can afford. Report dollars and tokens per successful task, and maintain a “cheap good enough” tier beside a “max quality” tier. Epoch’s plunging price-of-thought work shows costs move fast; re-baseline quarterly so your gates track economics, not last year’s assumptions.



## Human calibration cadence

LLM judges drift as judge models change. Schedule calibration: sample transcripts, have humans score, measure agreement, and freeze judge versions for regression suites. Anthropic’s customer stories that moved from manual to LLM grading with periodic human calibration are the template—automation without calibration recreates leaderboard theater inside your company.



## Tie evals to monitoring

Offline suites miss distribution shift. Connect production traces to eval mining: sample failures, anonymize, and promote them into regression tasks. Anthropic’s point that evals compound over the agent lifecycle is strongest when production is a continuous source of new cases—not only a place where old suites go to feel green.

## Takeaways

- Encode the product contract in **tasks + graders + outcomes**.
- Split capability from regression; report harness and cost.
- Calibrate LLM judges; prefer environment checks when possible.
- Budget for privacy/safety metrics and periodic independent review.
- Treat the suite as living software with owners, versions, and incident-driven growth.

## Sources

- [SWE-bench](https://www.swebench.com/) (incl. Verified / live leaderboard variants as published)
- [Anthropic — Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents)
- [Anthropic — An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators)
- [Anthropic — Eval awareness in BrowseComp](https://www.anthropic.com/research/eval-awareness-browsecomp)
- [Epoch AI — MirrorCode](https://epoch.ai/benchmarks/mirrorcode)
- [Epoch AI — The plunging price of thought](https://epoch.ai/publications/the-plunging-price-of-thought)
- [FPF — Benchmarking privacy in frontier AI](https://fpf.org/blog/what-gets-measured-gets-governed-benchmarking-privacy-in-frontier-ai-development-and-deployment/)
- [CSET — Systematizing the reporting of AI red-teaming](https://cset.georgetown.edu/publication/systematizing-the-reporting-of-ai-red-teaming)
- Sibling teaching: [Anthropic News](../anthropic-news/index.md) · [FPF](../fpf/index.md) · [leaderboard limits](leaderboard-limits-and-failure-modes.md)
