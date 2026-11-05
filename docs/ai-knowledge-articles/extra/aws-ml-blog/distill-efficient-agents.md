---

title: 'Distilling Efficient Agents: Teacher Trajectories, Not Just Shorter Answers'
slug: a-distill-efficient-agents
type: article
corpus: AWS ML Blog
corpus_key: aws-ml-blog
cluster: Training, Learning & Data
cluster_id: training-data
tags:
- article
- corpus/aws-ml-blog
- cluster/training-data
keywords:
- model-routing
- agent-distillation
- aws-ml-blog
- training-data
- cluster-training-data
- corpus-aws-ml-blog
- article
- teacher
- not
- trajectories
- agents
- you
- shorter
- just
summary: "A shopping (or support, or triage) agent on a frontier model works—until you multiply search → read → refine → verify → decide by every user. One completed task is many billed calls. Smaller models are cheaper and faster, but usually worse at the task. Knowledge distillation transfers teacher behavior into a student so you keep much of the quality at student economics."
related:
- Agent Distillation
- Model Routing
path: extra/aws-ml-blog/distill-efficient-agents.md
---

# Distilling Efficient Agents: Teacher Trajectories, Not Just Shorter Answers

A shopping (or support, or triage) agent on a frontier model works—until you multiply **search → read → refine → verify → decide** by every user. One completed task is many billed calls. Smaller models are cheaper and faster, but usually worse at the task. **Knowledge distillation** transfers teacher behavior into a student so you keep much of the quality at student economics.

## Sequence-level distillation (SeqKD) for agents

SeqKD is the portable end of the spectrum: the teacher generates text; the student trains with ordinary supervised fine-tuning. You need no teacher logits, weights, or RL infrastructure—so it works with API-only frontier models.

For agents, the sequence is not a paragraph. It is a **trajectory**: ordered reasoning, tool calls, and observations. Training on whole successful trajectories teaches multi-step behavior, not a single final answer.

### Pipeline

1. **Generate** — Teacher acts as the agent on training problems (sample with temperature > 0 for diversity).
2. **Reject** — Keep only trajectories that a programmatic grader marks solved. A capable-but-imperfect teacher becomes a clean dataset.
3. **Encode per step** — Each step is a training row: conversation so far → next reasoning + tool call. Loss on the assistant turn only; do not train the model to invent environment observations.
4. **Compress observations** — Tool results dominate tokens; keep fields the next decision needs; cap results and steps so rows fit `max_len`.
5. **Split by problem, not by row** — Otherwise near-identical steps leak across train/val.
6. **Fine-tune** — LoRA or full SFT on serverless/customization infra; version the model package.
7. **Evaluate cheap then expensive** — First score tool-name selection against teacher steps; then run full held-out agent loops.

Keeping teacher **reasoning traces** beside actions is often what carries the student most of the way toward teacher quality.

## When SeqKD is the right first move

- You have inputs but no high-quality labels (especially multi-turn tool use).
- The teacher is closed/API-only.
- You want a strong, cost-effective baseline before heavier RL (GRPO, multi-turn RL).

Narrow, high-value tasks (alarm triage, catalog recommend, document fields) repeatedly show specialized students beating frontier models on accuracy **and** cost when the pipeline from raw ops data → certified set → fine-tune → eval artifact is repeatable.

## Related efficiency pattern: route, don’t always distill

Not every request needs the student or the frontier model. An adaptive stack can use a tiny local model to classify difficulty, handle routine work offline, and escalate hard work to cloud frontier models—cutting cost and latency for the common case without a distillation project.

## Takeaway

Agent cost is loop cost. Distill *behavior* via graded teacher trajectories into a smaller student; evaluate tool selection and end-task success separately; reuse the dataset across student candidates.

**Sources**

- [Build efficient agents with knowledge distillation on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/build-efficient-agents-with-knowledge-distillation-on-amazon-sagemaker-ai/)
- [Exowatt beats frontier models on accuracy with SageMaker serverless model customization](https://aws.amazon.com/blogs/machine-learning/exowatt-beats-frontier-models-on-accuracy-with-sagemaker-serverless-model-customization/)
- [Adaptive agentic intelligence framework using Strands Agents](https://aws.amazon.com/blogs/machine-learning/adaptive-agentic-intelligence-framework-using-strands-agents/)
- [Multi-Turn Reinforcement Learning on Amazon SageMaker AI: A hands-on guide](https://aws.amazon.com/blogs/machine-learning/multi-turn-reinforcement-learning-on-amazon-sagemaker-ai-a-hands-on-guide/)
