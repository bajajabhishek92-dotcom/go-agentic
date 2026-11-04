title:: Jev and System-One Decision Models
type:: article
cluster:: trust-evals
cluster-name:: Trust, Evaluation & Decision Quality
corpus:: ibm-ai-knowledge
tags:: #article #corpus/ibm-ai-knowledge #cluster/trust-evals
node-id:: a-jev-calibrated-decisions
source-path:: /cursor/stores/self/docs/ibm-ai-knowledge/jev-calibrated-decisions.md
original-label:: Jev and System-One Decision Models

- #cluster/trust-evals
- #corpus/ibm-ai-knowledge
- blurb:: Most AI you use today is a text generator: a large language model (LLM) emits tokens one at a time—sometimes with a visible chain of thought that feels like slow, deliberate “system two” reasoning. Many software…

## Relations

- example of:: [[Calibrated Decision Models (Jev)]] — Discussed in article
- related to:: [[Trusting AI Decisions]] — Discussed in article
- related to:: [[Bounded Decisions]] — Discussed in article

## Article

- Most AI you use today is a text generator: a large language model (LLM) emits tokens one at a time—sometimes with a visible chain of thought that feels like slow, deliberate “system two” reasoning. Many software decisions are not that. They are fast judgment calls: Is this email a refund request? Which team owns it? How urgent is it? That is closer to Kahneman’s **system one**—quick, automatic classification—than to writing a carefully argued reply.

- **Jev** (from TypeSafe) is an example of a system-one style model: it does not write prose. It answers by selecting among options you supply and returning **calibrated probabilities** for each answer. That design fits structured workflows where speed, cost, and a usable confidence signal matter more than fluent text.

## What the model takes and returns

- You give Jev two kinds of input: **state** (the data the decision is about—for example a support email plus recent charges) and **questions** typed for discrete outcomes. Questions can be yes/no (boolean), a choice from a fixed list (team = billing | technical | sales), or a score on a scale (urgency from low to critical). Multiple questions can go in one request; answers come back together as probabilities, not as generated JSON tokens.

- Because the model never has to sample a long token sequence, these calls can be faster and cheaper than asking an LLM the same structured questions. The output is also software-friendly: `refund: 0.9`, `team.billing: 0.85`, and so on. Choices are constrained to the options you provided—the model cannot invent a fourth team.

## Why LLM “confidence” is a weak substitute

- A common automation pattern is: send the email to an LLM, ask for structured JSON, parse the fields. That often works for *labels*, but the model’s self-reported confidence rarely matches true likelihoods. RLHF (reinforcement learning from human feedback) trains chat models to produce answers people prefer—and people prefer answers that *sound* sure. Models can therefore learn confident tone even when wrong.

- Other post-training paths help differently. RLVR (reinforcement learning with verifiable rewards) scores whether math is correct or tests pass; it rewards right finals, not well-calibrated uncertainty, and reasoning traces still cost latency and money. Jev is described as trained with **RLCD**—reinforcement learning for calibrated decisions: the model emits probabilities and is rewarded when those probabilities match outcomes. Calibration means that when the model says “80%,” it is right about 80% of the time over a large set of comparable cases—not that any single call is proven correct.

## Thresholds: automate, escalate, or ignore

- Calibrated scores become operational when you attach **thresholds** in code. Example for a refund boolean:

- Above ~0.9 → treat as refund; enqueue for processing.
- Between roughly 0.1 and 0.9 → escalate to a human.
- Below ~0.1 → not a refund; continue without that path.
- The threshold encodes risk: the more a false automatic action costs, the higher you set the bar. Because scores are calibrated, the threshold also implies roughly how often the automatic path will be wrong. The same pattern can guardrail chatbots (for example scoring jailbreak likelihood on inbound/outbound messages) or sit on high-volume paths where an LLM would be too slow or expensive—every log line, every database row—echoing Jevons’ paradox: when judgment becomes cheap, it can show up in more places.

## Limits and the hybrid with system-two LLMs

- System-one models are not a wholesale replacement for LLMs. Current Jev-class tools take text only, struggle with math and counting, and—like any model reading untrusted content—can be steered by instructions hidden in the data. They also output confidence without an explanation: probability is not a chain of evidence.

- A practical architecture pairs the two modes the way humans often do. Use system one for fast sorting and gating (is this a refund? which queue?). Use a system-two LLM for generative work that needs deliberation (draft the customer reply). Feed later customer messages back through the decision model for the next quick classification. Break big decisions into smaller audited questions so each probability lands in an observable workflow step rather than one opaque “contain this host at 97%” leap.

- Treat the decision component as powerful automation with known failure modes: wrap it with input validation, independent signals, logging, drift detection, and human escalation for high-stakes outcomes. Use calibrated probabilities to *route* work—not as proof that the route is correct.

- **Sources**

- [What Is Jev? The AI Model That Doesn't Generate Text](https://www.youtube.com/watch?v=YGgNBcIgI4s)
- [The Problem with Jev: Can You Trust AI Decisions?](https://www.youtube.com/watch?v=_yO_Q7qo0HQ)

## Navigation

- Cluster:: [[Cluster - Trust, Evaluation & Decision Quality]]
- Corpus:: [[Corpus - IBM AI Knowledge]]
- [[Clusters]]
- [[Contents]]
