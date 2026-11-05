---

title: 'Trust in Depth: Autonomy You Can Verify'
slug: a-trust-in-depth-for-agents
type: article
corpus: AWS ML Blog
corpus_key: aws-ml-blog
cluster: Security, Safety & Control
cluster_id: security-safety
tags:
- article
- corpus/aws-ml-blog
- cluster/security-safety
keywords:
- trusting-ai-decisions
- trust-in-depth
- agent-identity-on-behalf-of
- aws-ml-blog
- security-safety
- cluster-security-safety
- corpus-aws-ml-blog
- article
- can
- you
- trust
- autonomy
- depth
- verify
summary: "Leaders want agents to do more and do not trust them to do it unsupervised. Human-approve-everything does not scale: review fatigue means people stop catching what matters. The alternative is Trust in Depth—independent layers that expand what you can safely allow, analogous to defense-in-depth but aimed at autonomy rather than only breach containment."
related:
- Agent Identity & On-Behalf-Of
- Trust in Depth
- Trusting AI Decisions
path: extra/aws-ml-blog/trust-in-depth-for-agents.md
---

# Trust in Depth: Autonomy You Can Verify

Leaders want agents to do more and do not trust them to do it unsupervised. Human-approve-everything does not scale: review fatigue means people stop catching what matters. The alternative is **Trust in Depth**—independent layers that expand what you can safely allow, analogous to defense-in-depth but aimed at autonomy rather than only breach containment.

## Four lifecycle questions

1. **Scope (before run)** — What is this agent for? Which tools/data? What must it never do? Which decisions stay human?
2. **Know (at deploy)** — Who authorized it? What identity does it carry? Can you account for every agent acting on your behalf?
3. **Bound (while running)** — Do actions stay inside limits even if the agent is buggy or prompt-injected? Can it still finish the job?
4. **Observe (after)** — Can you reconstruct what happened and why, and improve from failures?

Precise rules (“block sign-in before sharing mailbox”) can be checked with **automated reasoning** / policy proofs across paths. Soft expectations (“friendly tone”) cannot—limit access, evaluate behavior, and escalate ambiguity to humans. Widen autonomy as evidence accumulates.

## Enforce limits outside the model

Never rely on the agent to police itself. Put policy on the tool gateway so checks hold when reasoning fails. Temporal policies can require prerequisite steps in a session before later tools unlock. Content guardrails filter what the agent says and is told; sandboxes limit filesystem/network reach from development through production.

Catalog agents and MCP servers in a registry with approval workflows so shadow agents do not appear. Issue per-agent identity on every request.

## Evaluation bias: your scoreboard may be lying

Trust also fails when **metrics are circular**. One team found 96.8% of “ground truth” labels were the incumbent model’s own predictions. Alternatives looked worse by construction. Labels also contained errors and out-of-spec categories.

### Repair pattern

- Fresh expert annotations with **no access** to incumbent outputs.
- Multi-label where reality is multi-label (penalizing reasonable secondary labels was fake ambiguity).
- Metrics that match the business (Micro F1 for overall correctness, Macro F1 for rare classes, per-label precision/recall).
- Prompt/model optimization only **after** unbiased ground truth exists—treat prompt versions like an RL loop with error analysis as the gradient.
- Report cost and quality together; unbiased eval unlocked both higher accuracy and large cost cuts in the published case.

Production agent eval frameworks should score faithfulness, tool choice, and regressions continuously—not only at launch.

## Takeaway

Scope tightly, identify every agent, bound actions outside the model, observe every path. Prove precise rules; human-gate the rest. And never crown a model winner on labels the loser wrote.

**Sources**

- [Trust in Depth: Giving agents more autonomy without losing control](https://aws.amazon.com/blogs/machine-learning/trust-in-depth-giving-agents-more-autonomy-without-losing-control/)
- [Building trust in AI agents: A production-ready evaluation framework with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/building-trust-in-ai-agents-a-production-ready-evaluation-framework-with-amazon-bedrock-agentcore/)
- [Fix evaluation bias to unlock better models on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/fix-evaluation-bias-to-unlock-better-models-on-amazon-bedrock/)
