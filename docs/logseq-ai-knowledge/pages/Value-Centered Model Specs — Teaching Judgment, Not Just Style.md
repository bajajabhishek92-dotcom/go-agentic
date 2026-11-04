title:: Value-Centered Model Specs — Teaching Judgment, Not Just Style
type:: article
cluster:: trust-evals
cluster-name:: Trust, Evaluation & Decision Quality
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/extra-ai-knowledge/openai-news #cluster/trust-evals
node-id:: a-model-spec-value-alignment
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/model-spec-value-alignment.md
original-label:: Value-Centered Model Specs: Teaching Judgment, Not Just Style

- #cluster/trust-evals
- #corpus/extra-ai-knowledge/openai-news
- blurb:: As models take consequential actions, literal instruction-following is not enough. They need a public, inspectable description of desired behavior—and that description works better when it is organized around…

## Relations

- example of:: [[Value-Centered Model Specs]] — Discussed in article
- related to:: [[Trusting AI Decisions]] — Discussed in article

## Article

# Value-Centered Model Specs: Teaching Judgment, Not Just Style

- As models take consequential actions, literal instruction-following is not enough. They need a public, inspectable description of desired behavior—and that description works better when it is organized around **values that explain trade-offs**, not a pile of stylistic rules.

## Five values as an organizing spine

- OpenAI’s updated Model Spec regroups guidance around:

- **Faithfulness to human intent** — understand what OpenAI, developers, and users are trying to achieve; go beyond literal wording when intent is clear; surface assumptions when it is not.
- **Harm minimization** — respect hard safety boundaries; account for foreseeable side effects.
- **Honesty and transparency** — be truthful about knowledge, actions, and uncertainty so people can evaluate the work.
- **Human agency** — strengthen people’s ability to understand, choose, and act for themselves (avoid quiet steering).
- **Care** — attend to circumstances of those affected; follow relevant social/professional norms; produce work others can rely on.
- Faithfulness is the foundation: the Spec’s authors set boundaries; developers direct apps within them; users direct the model subject to both. Values are not a complete moral encyclopedia—they organize *why* specific principles exist.

## Chain of command and context

- Practical alignment needs conflict resolution:

- A **chain of command** clarifies which instructions win when OpenAI policy, developer system prompts, and user requests disagree.
- **Consider context carefully** tells models how conversations, memories, and other evidence should inform intent without inventing preferences.
- Defaults for **supporting agency**, **following social norms**, and **controlling side effects** capture subtle failure modes: over-helping that deskills users, ignoring third parties, or optimizing the asked metric while creating hidden costs.

## Retire what should be personal preference

- Detailed style guides age poorly and fight user taste. Prefer adaptive style driven by feedback and context, while keeping stronger defaults such as approaching questions objectively—users can request a perspective, but the model should not infer one just to please.

## Train for reasons, not only rules

- The Spec describes target behavior; models do not fully embody it yet. Training research aims for models that do the *right things for the right reasons*—understanding why principles exist so they generalize to unfamiliar situations. Public Specs invite disagreement on balances and omissions; that feedback loop is part of the method.

- **For builders:** write your own agent policy as values → firm boundaries → overridable defaults → examples. If your “constitution” is mostly tone tips, you have not specified judgment.

- **Sources**

- [An updated Model Spec for more capable and beneficial AI](https://openai.com/index/updated-model-spec)
- [Model Spec (2026-10-29)](https://model-spec.openai.com/2026-10-29.html)

## Navigation

- Cluster:: [[Cluster - Trust, Evaluation & Decision Quality]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
