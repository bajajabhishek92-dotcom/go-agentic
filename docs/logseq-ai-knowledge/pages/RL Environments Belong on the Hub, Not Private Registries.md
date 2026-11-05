title:: RL Environments Belong on the Hub, Not Private Registries
type:: article
cluster:: training-data
cluster-name:: Training, Learning & Data
corpus:: extra-ai-knowledge/huggingface-blog
tags:: #article #corpus/huggingface-blog #cluster/training-data
node-id:: a-rl-environments-on-hub
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/huggingface-blog/rl-environments-on-hub.md
original-label:: RL Environments Belong on the Hub, Not Private Registries

- #cluster/training-data
- #corpus/huggingface-blog
- blurb:: Reinforcement learning for agents needs **environments**: tasks, observations, actions, and a reward/verifier. Historically every framework invents its own registry. Hugging Face’s answer: environments are **datasets…

## Relations

- enables:: [[Continual Learning]] — Discussed in article
- example of:: [[RL Environments]] — Discussed in article

## Article

- Reinforcement learning for agents needs **environments**: tasks, observations, actions, and a reward/verifier. Historically every framework invents its own registry. Hugging Face’s answer: environments are **datasets with tags**, discovered like any other Hub artifact.

## Tasksets vs runtimes

- An environment splits into:

- **Tasksets** — prompts, files, expected outcomes, verifier logic (data + tests)
- **Runtimes** — containers/sandboxes that execute the agent loop
- The Hub release focuses on tasksets as dataset repos tagged `rl-environment`. Frameworks keep owning execution; the Hub owns hosting, versioning, gating, and discovery. No second catalogue system.

## Framework tags, not exclusive lock-in

- Registered library tags include Harbor, Verifiers, OpenEnv, and NeMo Gym. A dataset can carry **multiple** tags when the same files are compatible with more than one runner. The dataset page’s “Use this dataset” snippet generates the right load command per framework. Tags describe compatibility; they do not start Jobs or convert formats.

## How to use them

- Typical flows:

- **Oracle / reference solution** (Harbor) — run the known-good agent to validate the verifier before blaming the model.
- **Model agent** (Verifiers / OpenEnv) — same task directories, Docker (or other) sandbox, inspect reward + traces.
- **Training-oriented envs** (NeMo Gym) — trajectories and rewards feed a training loop; some verifiers check schema only, not factual truth—read what the reward actually measures.
- Hugging Face Jobs and Sandboxes can host cloud execution; the Hub filter remains the catalogue.

## Teaching points

- Stop maintaining one-off GitHub lists as the primary discovery path; publish tasksets with `rl-environment` (+ framework tags).
- Always run an **oracle** path once: broken verifiers poison both eval and RL.
- Treat rewards as product requirements: schema adherence ≠ correct business outcome (pair with executable state graders when records matter).
- Version tasksets like datasets so training and eval pin the same environment revision.
- **Sources**

- [Welcome RL Environments to the hub](https://huggingface.co/blog/rl-environments)

## Navigation

- Cluster:: [[Cluster - Training, Learning & Data]]
- Corpus:: [[Corpus - Hugging Face Blog]]
- [[Clusters]]
- [[Contents]]
