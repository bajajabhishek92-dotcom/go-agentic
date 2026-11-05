# Executable Agent Grading: Outcomes Beat Tool-Call Theater

Agents can look competent while leaving the wrong record behind. Nine clean tool calls, a polite “resolved” reply, and a ticket closed when policy required **on hold**—that is the failure mode ThinkingBox was built to catch. The lesson for evaluation and training: **grade terminal backend state**, not fluency or tool-call shape.

## A tool call is not an outcome

ThinkingBox-Bench (507 stateful business workflows across retail, insurance, travel, neobank, consulting) gives an agent real backends and MCP tools, then runs **executable checks** on what the database contains. In a large ablation, most failed attempts still terminated cleanly and invoked a state-changing tool; executable checks still found wrong fields, extra side effects, or missing required effects. Trajectory text is a claim; database state is evidence.

## One success is not reliability

Every task runs **20 independent times** from a clean backend. Three metrics answer different questions:

| Metric | Question |
|--------|----------|
| **pass@1** | How does it usually do? |
| **pass@20** | Can it ever solve this? (breadth) |
| **Observed 20/20** | Does it succeed every time? (dependability) |

Breadth and consistency pull apart. In reported results, Kimi-K3 solved ~94% of tasks at least once but only ~13% on all 20 attempts; Claude Opus 5 solved fewer tasks at least once but far more consistently. A newer model can raise pass@1 without raising the 20/20 count at all—headline accuracy is not dependability. Domain gaps are large (strong retail, weak auto insurance for the same model).

## Turning graders into rewards

The same executable 0/1 signal can train. Microsoft/Hugging Face post-trained Qwen3.8-27B with **GRPO** on ThinkingBox-format tasks **outside** the sealed benchmark, selecting a fixed training pool by **offline policy-relative difficulty** (tasks neither always-solved nor hopeless for the base policy). After 50 steps:

- Observed 20/20 rose from 38 → 107 tasks (~7.5% → ~21%)
- pass@1 rose ~9 points
- pass@20 dipped slightly (sharpening: more repeatable, not broader)

Cost per dependable task dropped sharply because more tasks passed every attempt. Select practice tasks relative to the **current** policy; difficulty is not absolute.

## Practice checklist

- Prefer verifiers on **records and side effects**, not string matches to a golden tool trace.
- Report pass@1 **and** multi-trial consistency for any agent that writes production state.
- Use executable rewards for RL only on tasks in the learnable band for your base model.
- Price consistency separately from single-success cost when choosing models for high-stakes workflows.

**Sources**

- [The Agent Said It Was Done. The Database Disagreed.](https://huggingface.co/blog/microsoft/thinkingbox)
- [Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox](https://huggingface.co/blog/microsoft/thinkingbox-training)
