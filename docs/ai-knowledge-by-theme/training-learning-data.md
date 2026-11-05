# Training, Learning & Data

Pretraining on the public web got the industry astonishingly far. The next constraints are **data efficiency**, **experience** (learning from interaction), and **avoiding collapse** when models train on their own outputs. **Training** here means the full customization stack—fine-tunes, LoRA, RL, distillation—not only foundation pretraining. **Learning** includes continual and reinforcement learning from environments. **Data** includes human corpora, synthetic trajectories, world-model rollouts, and curated RL tasksets. IBM’s fine-tune/RAG/collapse framing intersects Sequoia’s continual learning and RL-environment economics, Hugging Face’s Hub environments and async GRPO, DeepMind’s Genie world models, and AWS’s agent distillation: after search and code, the bottleneck is high-quality experience you can learn from safely.

## Definitions

**Fine-tuning** updates weights on task data so the model internalizes style, format, or domain. **RAG** keeps weights fixed and supplies evidence at inference—often enough when knowledge changes fast or must stay attributable to documents. **LoRA** (and friends) adapt a small set of parameters for cheaper specialization without a full retrain. Local **inference engines** (llama.cpp vs vLLM-class) trade ease and hardware reach against throughput features such as continuous batching—choose the engine for the deployment shape, not the blog headline.

**Model collapse** is progressive degradation when successive generations train mostly on AI-generated data: diversity shrinks, rare modes vanish, and eventually quality caves. Early collapse is subtle (loss of tails); late collapse is obvious garbage.

**Continual learning** is improving from ongoing experience without catastrophic forgetting—or without freezing the model forever after a single pretrain. Sequoia’s “age of experience” vs “age of data” restates the bitter lesson for builders: algorithms that learn from interaction scale when environments and verifiers exist.

An **RL environment** packages state, actions, and rewards (or preferences) for a task—the missing dataset for real work when static logs are not enough. **Tasksets vs runtimes** (Hugging Face Hub pattern): publish the tasks and interfaces openly; allow multiple trainer runtimes via tags rather than exclusive lock-in.

**World models** (Genie-class) learn to simulate environments so agents can train in imagination—cheap rollouts before expensive real interaction. **Sequence-level distillation (SeqKD)** for agents trains students on teacher *trajectories* (tool traces, plans), not only shorter final answers. **Async GRPO with LoRA** separates rollout GPUs from trainer GPUs so RL can scale without coupling sampling and optimizing on the same devices.

**Data efficiency** is extracting more learning signal per example—systems (better infra for RL, synthetic data pipelines) unlock algorithms that were previously too expensive.

## Customize without starting over—and avoid training on yourself

The customization ladder should be climbed only as far as evals justify. Many teams fine-tune because it feels like ownership, then discover RAG plus a better harness would have delivered attributable answers with less drift. Others refuse to touch weights when domain format and tool habits clearly need to live in the model. The corpus’s consistent advice is empirical: measure the failure mode, then pick the cheapest lever that fixes it.

IBM’s fine-tuning vs RAG vs LoRA guidance remains the enterprise default path: prefer RAG when facts churn; fine-tune or LoRA when format, tool habits, or domain language must live in weights; choose serving engines for the deployment shape (edge/CPU vs high-QPS GPU). General models caught up on many tasks that once required fine-tunes—so customization should be justified by evals, not habit.

Model collapse is the quiet risk as synthetic text floods the web and internal corpora. Mixing real and synthetic carefully, tracking provenance, and keeping human or grounded tails in the data diet are operational controls, not research trivia. The intersection with Sequoia’s data-efficiency talk is direct: when public unique data saturates, quality and experience beat naive scale-up on recycled AI text.

## Experience, environments, and simulation

Sequoia’s continual-learning essays restate the bitter lesson for builders: frozen models stall relative to systems that learn from ongoing experience. The “age of experience” vs “age of data” framing says algorithms that learn from interaction scale when environments and verifiers exist. Constraints that make this hard include catastrophic forgetting, unsafe exploration, sparse rewards, and the cost of human preference data. Application companies should care because *their* workflows are the scarce environments: ticket systems, CAD rules, contracting platforms, robotics cells. An RL environment packages state, actions, and rewards (or preferences) for a task—the missing dataset for real work when static logs are not enough. Why application companies should invest: proprietary environments encode competitive process knowledge that public pretraining will not gift them. Constraints: reward design that matches true business objectives (echoing the chip-design reward lesson), safety of exploration in production-adjacent systems, and evals that catch reward hacking.

Hugging Face’s push to put RL environments on the Hub is the open counterpart. Distinguish **tasksets** (what to solve, interfaces, grading) from **runtimes** (which trainer executes). Publish framework tags rather than exclusive lock-in so research and vendors can compose. Teaching points: environments are datasets; reproducibility requires versioned tasks; private registries fragment the field the way closed benchmark silos once did.

DeepMind’s Genie world models supply the simulation substrate: train policies in learned environments when real rollouts are costly or dangerous. What a world model buys you is cheap imagined experience—coherent rollouts, controllable scenes, agents that practice before touching production. Hybrid world models combine learned dynamics with classical physics where known. Limitations to teach: distribution shift from sim to real, hallucinated dynamics, and the temptation to treat beautiful rollouts as proof of deployment readiness. Builder lessons: use world models to multiply experience, keep real-world verifiers in the loop, and treat sim success as a hypothesis.

AWS’s distilling efficient agents pattern and Hugging Face’s async GRPO with LoRA show how to productize experience cheaply. Sequence-level distillation trains students on teacher *trajectories*—tool traces and plans—not only shorter final answers. When SeqKD is the right first move: you have a strong teacher, clear trajectories, and a cost target for serving. Related pattern: route easy traffic instead of always distilling. Async GRPO separates rollout GPUs from trainer GPUs; LoRA fits RL when full-weight updates are too heavy; Jobs-plus-bucket architectures keep pipelines sane. Curriculum for a sanity run and small-model GRPO for structured outputs keep RL practical for product teams. Sequoia’s data-efficiency talk closes the loop: after search and code, the bottleneck is high-quality experience per example—systems unlock algorithms that were previously too expensive.

## Intersection

IBM covers customization choices (fine-tune vs RAG vs LoRA vs local engines) and collapse risk when AI trains on AI. Sequoia frames the economic shift to experience, RL environments as the new dataset, and data efficiency after search/code. Hugging Face and DeepMind operationalize open environments, scalable RL training, and world-model substrates. AWS shows distillation of agent behavior for cost. Across sources: choose RAG/LoRA/FT deliberately; preserve real data against collapse; invest in environments and verifiers; simulate when real interaction is scarce; distill trajectories—not only answers—to serve efficiently; measure learning by task outcomes in environments, not by how much synthetic text you generated.

## Sources woven in

- [RL Environments Belong on the Hub, Not Private Registries (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/rl-environments-on-hub.md)
- [Continual Learning: Why Frozen Models Stall—and How Experience Restarts Progress (Sequoia)](../sequoia-ai-knowledge/continual-learning.md)
- [Fine-Tuning, RAG, LoRA—and Choosing a Local Inference Engine (IBM)](../ibm-ai-knowledge/fine-tuning-rag-local-engines.md)
- [Genie World Models: Simulation as a Training Substrate (DeepMind Blog)](../extra-ai-knowledge/deepmind-blog/genie-world-models.md)
- [Async GRPO with LoRA: Separate Trainers from Rollout GPUs (Hugging Face Blog)](../extra-ai-knowledge/huggingface-blog/async-grpo-lora-training.md)
- [RL Environments: The Missing Dataset for Real Work (Sequoia)](../sequoia-ai-knowledge/rl-environments.md)
- [Distilling Efficient Agents: Teacher Trajectories, Not Just Shorter Answers (AWS ML Blog)](../extra-ai-knowledge/aws-ml-blog/distill-efficient-agents.md)
- [Data Efficiency: The Bottleneck After Search and Code (Sequoia)](../sequoia-ai-knowledge/data-efficiency.md)
- [Model Collapse: When AI Learns Only from AI (IBM)](../ibm-ai-knowledge/model-collapse.md)

## See also (landscape)

- [Google: Sleep Framework Continual Learning](../gap-fill-ai-knowledge/google-research-blog/sleep-framework-continual-learning.md)
- [NVIDIA: Cosmos World Models](../gap-fill-ai-knowledge/nvidia-technical-blog/cosmos-world-models.md)
