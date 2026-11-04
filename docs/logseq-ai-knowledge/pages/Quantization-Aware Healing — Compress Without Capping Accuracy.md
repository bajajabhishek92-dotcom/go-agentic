title:: Quantization-Aware Healing — Compress Without Capping Accuracy
type:: article
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
corpus:: extra-ai-knowledge/huggingface-blog
tags:: #article #corpus/huggingface-blog #cluster/inference-infra
node-id:: a-quantization-aware-healing
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/huggingface-blog/quantization-aware-healing.md
original-label:: Quantization-Aware Healing: Compress Without Capping Accuracy

- #cluster/inference-infra
- #corpus/huggingface-blog
- blurb:: Structural compression (fewer layers/heads/params) plus aggressive quantization usually loses quality. The usual fix is **quantize then heal**. How you heal decides whether 4-bit stays a permanent tax—or becomes…

## Relations

- example of:: [[Quantization]] — Discussed in article
- related to:: [[Agent Distillation]] — Discussed in article

## Article

# Quantization-Aware Healing: Compress Without Capping Accuracy

- Structural compression (fewer layers/heads/params) plus aggressive quantization usually loses quality. The usual fix is **quantize then heal**. How you heal decides whether 4-bit stays a permanent tax—or becomes another teaching pass.

## Why QAT and QAD struggle after compression

- **Quantization-aware training (QAT)** — fake-quant in the forward pass + task loss. Expensive (re-runs SFT/RL-style post-training) and can **collapse** if training continues past the peak: one matched experiment peaked late then lost nearly 19 points by step 1,200.
- **Quantization-aware distillation (QAD)** — KL from a frozen full-precision teacher into the quantized student. Works when teacher and student share architecture. After structural compression, the only “full-precision twin” is often a **recovered** bfloat16 checkpoint that is itself a degraded distillate—so the student inherits that ceiling.

## QAH’s move: distill from the original teacher

- **Quantization-Aware Healing (QAH)** distills the quantized, structurally smaller student from the **original pre-compression model**, not from the recovered mid-checkpoint. Architectures need not match: the teacher’s output distribution is architecture-agnostic; the student only matches logits via KL. Quantization becomes a **second distillation pass** against the true teacher—supervision the recovered BF16 never fully absorbed—rather than mere damage control.

- Long-context healing (documents up to 32k) needs memory-efficient **chunked KL** so the full vocab×sequence grid never materializes (companion efficient-distillation work).

### Headline pattern on GPT-OSS 120B → 60B MXFP4

- Against the recovered 60B BF16, the QAH 4-bit student won **7 of 9** reported benchmarks, with large gains on long-context reasoning and math—exactly where compression often hurts most. Peak accuracy vs QAT was similar, but QAH peaked ~**7× sooner** (~100 vs ~700 steps) and stayed stable; QAT drifted after peaking.

## Local quants without leaving transformers

- Separately, transformers can load **GGUF** packs (llama.cpp-style quants) via `from_pretrained(..., gguf_file=...)` with Hub kernels keeping weights packed on Metal when available. Start with practical mid quants (for example `Q4_K_M`), then step up (`Q5_K_M`, `Q6_K`) if quality on *your* evals demands it. Without a compatible kernel, loaders may dequantize and erase the memory win.

## Practice checklist

- After prune+quantize, prefer healing that can still learn from the **pre-compression** teacher.
- Prefer KL-to-frozen-teacher for stability over unbounded CE task loss when shipping 4-bit.
- Keep an early-stopping signal for QAT; assume QAH still needs validation but drifts less once matched.
- For local serving, evaluate GGUF variants on task suites—not only on “fits in RAM.”
- **Sources**

- [Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)
- [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
- [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)

## Navigation

- Cluster:: [[Cluster - Inference, Efficiency & Infrastructure]]
- Corpus:: [[Corpus - Hugging Face Blog]]
- [[Clusters]]
- [[Contents]]
