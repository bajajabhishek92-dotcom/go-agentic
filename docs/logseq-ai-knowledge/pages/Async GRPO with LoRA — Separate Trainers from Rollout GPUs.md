title:: Async GRPO with LoRA — Separate Trainers from Rollout GPUs
type:: article
cluster:: training-data
cluster-name:: Training, Learning & Data
corpus:: extra-ai-knowledge/huggingface-blog
tags:: #article #corpus/extra-ai-knowledge/huggingface-blog #cluster/training-data
node-id:: a-async-grpo-lora-training
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/huggingface-blog/async-grpo-lora-training.md
original-label:: Async GRPO with LoRA: Separate Trainers from Rollout GPUs

- #cluster/training-data
- #corpus/extra-ai-knowledge/huggingface-blog
- blurb:: Group Relative Policy Optimization (GRPO) needs many rollouts per step. Full-weight sync between a trainer and vLLM is heavy. **LoRA changes the systems story**: a rank-1 adapter is a few megabytes, so training and…

## Relations

- example of:: [[LoRA - Parameter-Efficient Fine-Tuning]] — Discussed in article
- related to:: [[RL Environments]] — Discussed in article

## Article

# Async GRPO with LoRA: Separate Trainers from Rollout GPUs

- Group Relative Policy Optimization (GRPO) needs many rollouts per step. Full-weight sync between a trainer and vLLM is heavy. **LoRA changes the systems story**: a rank-1 adapter is a few megabytes, so training and inference can live on separate machines without NCCL—if you sync adapters carefully.

## Why LoRA fits RL

- Policy-gradient RL often yields ~O(1) bits of useful signal per episode. Thinking Machines’ “LoRA Without Regret” argument (cited in the HF recipe) is that even rank-1 LoRA can match full fine-tuning for that regime. TRL’s `AsyncGRPOTrainer` (v1.14+) can train a LoRA adapter and sync **only that adapter** to vLLM via `/v1/load_lora_adapter`, writing files to a shared path rather than shipping tensors.

## A Jobs + bucket architecture

- A practical Hugging Face Jobs pattern:

- **Trainer Job** — `AsyncGRPOTrainer` + a small local proxy
- **vLLM replica Jobs** — base model + runtime LoRA, read-only mount of the same Storage Bucket
- **Bucket** — adapters, checkpoints, versioned policy directories under a shared mount (for example `/lora`)
- The trainer publishes `trl-policy-v{N}` with an atomic rename; replicas load by path. Ephemeral Jobs can resume from the bucket after preemption.

### Versioned adapters and staleness

- `max_staleness` is how many policy versions a rollout may lag. If staleness is 4, vLLM must keep current + prior versions so in-flight generations finish under the correct weights. Budget **enough LoRA slots** (for example `--max-loras 6` when staleness is 4) so a sync can load the new adapter before unloading the oldest. **Versioned names matter**: reusing one adapter name poisons prefix/KV cache across weight versions and can make training ratios drift silently.

### Proxy duties

- A proxy in front of replicas:

- Adds Job auth headers so TRL stays unaware of HF Jobs URLs
- **Broadcasts** adapter load / pause / resume to every replica
- Routes completions so the G rollouts for one prompt share a replica’s **KV prefix cache** (block hashes chained and seeded with adapter name)
- Round-robin wastes prefill; affinity to the replica that already holds the prompt’s blocks recovers it.

## Curriculum for a sanity run

- Use problems with mid-band success rates (for example 20–80%) so early reward is informative. Pin vLLM versions; treat flags and runtime LoRA endpoints as part of the recipe. Start with adapter-only sync only for configs vLLM can serve as-is (plain LoRA at or below `--max-lora-rank`; DoRA / `modules_to_save` may fall back to merged-weight sync).

## Small-model GRPO for structured outputs

- Separately, a light GRPO recipe on LFM2.5-350M (~500 samples, ~100 steps on a free Colab/Kaggle GPU) raised IFStruct schema-compliance from ~22.6% to ~29.7%. Same idea at tiny scale: **verifiable format rewards** + short RL beats hoping a base SLM invents reliable JSON/YAML.

- **Sources**

- [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
- [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)

## Navigation

- Cluster:: [[Cluster - Training, Learning & Data]]
- Corpus:: [[Corpus - Hugging Face Blog]]
- [[Clusters]]
- [[Contents]]
