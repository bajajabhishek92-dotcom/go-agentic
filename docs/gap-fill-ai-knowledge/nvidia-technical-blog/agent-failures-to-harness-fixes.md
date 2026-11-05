# Turn Agent Failures into Tests and Harness Fixes

Generic benchmarks rarely explain why *your* agent failed: wrong tool, wrong branch, missing context, expensive model, or a domain rule it never saw. NVIDIA’s NeMo Compass / Eval Author tutorials start from **production traces**, not leaderboard chasing. The Hermes enterprise-assistant example is concrete: asked to “draft a message with project updates,” the agent drafted—and then called `send_message` without confirmation. Fixing that requires harness and tool policy changes, not a bigger base model.

## The harness is the optimization surface

One bad tool call can derail a task because of an unclear tool description, routing rule, or missing memory. The improvement loop:

1. Find a failure in recorded traces (**NeMo Compass**–style inspection against an `ETHOS.md` of expected behavior).
2. Author a focused evaluation from that failure (**NeMo Eval Author** → Harbor or NeMo Gym formats).
3. Change instructions, tools, routing, memory, or harness code.
4. Compare on development vs held-out tasks before shipping.

NeMo Compass returns findings from multiple signals: unusual behavior, tool-use patterns, and divergence from intended behavior, with trace IDs linking signals to agent runs. In the send-without-confirm example, Compass flagged the error by comparing actions to rules in `ETHOS.md`. NVIDIA reports that running the full Compass signal set against thousands of traces found anomalies a coding agent assigned a similar task missed.

Eval Author provides coding-agent skills/workflows to create tests from Compass findings, raw traces, ETHOS.md, and the agent repo. Review and tune generated evaluations so they measure behaviors your requirements actually care about. In the example, the coding agent created four Harbor evaluations with tasks similar to “draft a response,” plus verifiers that fail a run if `send_message` fires without human confirmation. Eval Author can also bootstrap custom evaluations from ETHOS.md and tool definitions **before** production traces exist, then expand the suite as real failures arrive.

After tests exist, change **one** harness surface and remeasure. In the Hermes example, NVIDIA updated `SOUL.md` (Hermes’s system-prompt analogue) to state that draft/compose requests authorize *preparation only*—provide the draft for review and stop before sending; a token from a preparation tool is a technical capability, not user consent. Harness changes range from that prompt-level gate to middleware, plugins, and richer harness patterns—always paired with the new evals so the fix cannot regress silently.

**NeMo Relay**–style tracing makes harness behavior inspectable across steps. Evaluation must score **task completion in an environment**, not only whether a single function call looked plausible (BFCL-style call scoring is necessary but insufficient)—see NVIDIA’s tool-call-to-task-completion evaluation guidance. Chip-design **NeMo Gym** work shows the same loop in a high-stakes domain: tool efficiency and reliability are measured together for RTL/design agents.

## Process vs outcome scoring

- **Step-level**: was this call valid and useful given state?
- **End-to-end**: did the environment end in the desired state after recovery from errors?

Ship both. Tool-call accuracy without task success is theater; task success without step audits hides fragile luck. Treat the harness as CI: every recurring Compass finding becomes a regression test that blocks deploy. Separate model upgrades from harness diffs in experiments so you know what moved the needle.

## Teaching the practice

- Prefer trace corpora + ethos docs over vibes when prioritizing fixes.
- Keep held-out tasks sacred; overfitting eval authoring to the failing trace recreates the bug tomorrow.
- Pair with sandbox/permission design—many “model failures” are missing confirmation gates (OpenShell/NemoClaw).
- Use Gym/Harbor formats so evals are executable environments, not static prompt grading.
- Build a backlog from Compass findings the way SRE builds a backlog from incidents.

## Takeaways

- Agent quality is a harness CI problem: failures → tests → harness diffs → gated deploy.
- Optimize prompts *and* tools/control flow with the same evidence.
- Domain rules belong in ethos + evals, not only in system prompts.
- Trace-backed backlogs beat generic benchmark chasing for production agents.
- Compass finds; Eval Author encodes; Relay observes; Gym/Harbor execute—use the whole loop.

## Sources

- [Use NVIDIA NeMo to Turn Agent Failures into Tests and Harness Fixes](https://developer.nvidia.com/blog/use-nvidia-nemo-to-turn-agent-failures-into-tests-and-harness-fixes/)
- [Tracing Agent Harness Behavior with NVIDIA NeMo Relay](https://developer.nvidia.com/blog/tracing-agent-harness-behavior-with-nvidia-nemo-relay/)
- [How to Evaluate AI Agents From Tool Calls to Task Completion](https://developer.nvidia.com/blog/how-to-evaluate-ai-agents-from-tool-calls-to-task-completion/)
- [Optimizing Agent Reliability and Tool Calling Efficiency for Chip Design Using NVIDIA NeMo Gym](https://developer.nvidia.com/blog/optimizing-agent-reliability-and-tool-calling-efficiency-for-chip-design-using-nvidia-nemo-gym/)
