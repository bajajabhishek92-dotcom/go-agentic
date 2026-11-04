title:: Cluster - Training, Learning & Data
type:: cluster
cluster:: training-data
tags:: #cluster #training-data #cluster/training-data

- #cluster/training-data
- summary:: Continual learning, RL environments, data efficiency, collapse, LoRA/distillation, world models.

## Start here

- [[Continual Learning]] (concept) — Frozen deployed models stall; restarting learning from experience is the path past the age of static pretraining.
- [[RL Environments]] (concept) — Worlds, apps, and verifiers that let agents learn real jobs—the missing dataset after web text; best shared openly on hubs.

## Key concepts / techs / problems / practices

- [[Agent Distillation]] (`practice`) — Distill graded multi-step teacher trajectories (not just shorter answers) and route small vs frontier models per step.
- [[Data Efficiency Bottleneck]] (`problem`) — Most of the economy lacks coding-scale supervision; systems/algorithms co-design is needed for scarce-data domains.
- [[LoRA - Parameter-Efficient Fine-Tuning]] (`technology`) — Adapters and async GRPO-style training separate rollouts from trainers; still choose fine-tune vs RAG/skills by task economics.
- [[Model Collapse]] (`problem`) — Recursive training on synthetic AI output erodes rare knowledge into fluent wrongness; provenance and human data anchor models.
- [[World Models]] (`concept`) — Learned simulators (e.g. Genie) as training substrates for planning agents—powerful but limited by consistency.

## Articles

- [[Async GRPO with LoRA — Separate Trainers from Rollout GPUs]] — Group Relative Policy Optimization (GRPO) needs many rollouts per step. Full-weight sync between a trainer and vLLM is heavy. **LoRA changes the systems story**: a rank-1 adapter is a few megabytes, so training and…
- [[Continual Learning — Why Frozen Models Stall—and How Experience Restarts Progress]] — Pretraining and post-training create impressive snapshots. They do not, by themselves, create systems that keep learning from deployment. Sequoia’s recent talks with Rich Sutton, David Silver, and builders like…
- [[Data Efficiency — The Bottleneck After Search and Code]] — LLMs look magical at search and coding because those domains are drowning in data (and synthetic data). Most of the economy is not. Flapping Airplanes’ thesis is that **data efficiency**—getting coding-level…
- [[Distilling Efficient Agents — Teacher Trajectories, Not Just Shorter Answers]] — A shopping (or support, or triage) agent on a frontier model works—until you multiply **search → read → refine → verify → decide** by every user. One completed task is many billed calls. Smaller models are cheaper…
- [[Fine-Tuning, RAG, LoRA—and Choosing a Local Inference Engine]] — In 2023, a well-known legal AI effort fine-tuned a custom model that attorneys preferred over the then-leading frontier model in blind tests. Fine-tuning looked like the obvious path to specialization. By 2025, that…
- [[Genie World Models — Simulation as a Training Substrate]] — World models generate interactive environments you can steer—not just videos you watch. Genie 4 is DeepMind’s latest statement of that idea: real-time multimodal simulation (vision + native audio + dialogue) grounded…
- [[Model Collapse — When AI Learns Only from AI]] — Imagine each generation of students studying only the previous class’s notes, never the textbook. Errors compound until nobody remembers the original. Replace students with models, notes with synthetic content, and…
- [[RL Environments Belong on the Hub, Not Private Registries]] — Reinforcement learning for agents needs **environments**: tasks, observations, actions, and a reward/verifier. Historically every framework invents its own registry. Hugging Face’s answer: environments are **datasets…
- [[RL Environments — The Missing Dataset for Real Work]] — Reinforcement learning for agents is no longer only a lab technique. The bottleneck has shifted from “can we do RL?” to **can we build environments that look like the economy?**

## See also

- [[Clusters]]
- [[Contents]]
