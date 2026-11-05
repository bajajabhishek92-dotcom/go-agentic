# Hugging Face Blog — Extra AI Knowledge

Standalone teachable articles distilled from recent [Hugging Face Blog](https://huggingface.co/blog) posts (open models, training/inference tooling, evaluation, speech, agents, and security). Each article cites source title(s) and URL(s).

## Articles

- [Long-Context State Tracking: What Benchmarks Must Separate](long-context-state-tracking.md) — StateBench’s four difficulty levels and why transformers fail hard dependency chains that hybrids can learn.
- [Executable Agent Grading: Outcomes Beat Tool-Call Theater](executable-agent-grading.md) — ThinkingBox: grade database state, measure 20/20 consistency, and turn executable checks into GRPO rewards.
- [Async GRPO with LoRA: Separate Trainers from Rollout GPUs](async-grpo-lora-training.md) — TRL AsyncGRPO + rank-1 LoRA over Jobs/buckets, versioned adapters, KV-aware proxies, and tiny structured-output GRPO.
- [Specialize the Tokenizer: Inference Cost Lives in Decode](vocabulary-specialization-cost.md) — VocabX: cost-weighted vocabulary specialization cut measured serving cost ~77% on a domain SLM.
- [Quantization-Aware Healing: Compress Without Capping Accuracy](quantization-aware-healing.md) — Distill 4-bit students from the pre-compression teacher; plus GGUF in transformers for local quants.
- [Native Accelerator Backends: When `device="neuron"` or `"tpu"` Is Enough](native-accelerator-backends.md) — TorchNeuron and TorchTPU as first-class PyTorch devices for Hub models.
- [RL Environments Belong on the Hub, Not Private Registries](rl-environments-on-hub.md) — `rl-environment` dataset tags, multi-framework discovery, oracle-then-agent workflows.
- [Speech Evaluation Beyond Aggregate WER](speech-evaluation-beyond-averages.md) — Open TTS objective metrics at scale; Monsoon ASR sets that vary speaker, device, and geography.
- [Agentic Intrusions: Treat Data Pipelines as Attack Surface](agent-security-ai-intrusions.md) — July 2026 agent-driven HF incident, dataset injection paths, and open-weight forensics.
- [What Benchmarks Actually Measure: Disentangle the Signals](benchmark-signal-disentanglement.md) — BenchMIRT multidimensional IRT plus EvalEval-style reproducible reporting.
- [Source-Aware Verification and Consistency for Tool Agents](source-aware-agent-verification.md) — ProvenanceGuard against cross-source conflation; consistency gaps beyond average pass rates.
