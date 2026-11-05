title:: Quantization — How Models Get Smaller Without Starting Over
type:: article
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
corpus:: ibm-ai-knowledge
tags:: #article #corpus/ibm-ai-knowledge #cluster/inference-infra
node-id:: a-quantization-llm-compression
source-path:: /cursor/stores/self/docs/ibm-ai-knowledge/quantization-llm-compression.md
original-label:: Quantization: How Models Get Smaller Without Starting Over

- #cluster/inference-infra
- #corpus/ibm-ai-knowledge
- blurb:: A trained model is a vast collection of weights and activations—dials tuned during training. Frontier and open models may have tens of billions to trillions of parameters. How many bits you store per parameter…

## Relations

- enables:: [[LLM Inference]] — Discussed in article
- example of:: [[Quantization]] — Discussed in article

## Article

# Quantization: How Models Get Smaller Without Starting Over

- A trained model is a vast collection of weights and activations—dials tuned during training. Frontier and open models may have tens of billions to trillions of parameters. How many bits you store per parameter decides memory, bandwidth, and often speed. **Quantization** stores those numbers at lower precision so the same model fits smaller devices and cheaper GPUs with limited accuracy loss.

## Why precision dominates footprint

- Many models ship in FP16 or BF16: 16 bits (two bytes) per parameter. A 70-billion-parameter model at FP16 needs on the order of 140 GB—more than many single accelerators hold. Cutting bits is not as simple as deleting digits: floating-point layouts encode sign, magnitude, and fraction separately. Chopping the wrong bits destroys the value. Quantization maps a layer’s value range onto a smaller discrete set (for example int8 or int4), scaling and rounding consistently so values can be restored approximately at use time.

- Rough storage for that 70B example:

- Table:
  - `| Format | Bits | Approx. weight storage |`
  - `|--------|------|-------------------------|`
  - `| FP16 / BF16 | 16 | ~140 GB |`
  - `| FP8 / int8 | 8 | ~70 GB |`
  - `| int4 | 4 | ~35 GB |`

- Model cards often encode this in names (for example 8B parameters at FP8, or weights at 8-bit with activations still at 16-bit).

## The accuracy trade-off

- Lower precision is like increasing pixelation in a photo: eventually meaning blurs. Int8 commonly preserves most accuracy while improving latency and fit. Int4 is a steeper cut; accuracy risk rises (often on the order of tenths of a percent to about a percent in well-done mappings, with models typically staying above ~90% of original accuracy—but “well-done” matters). Aggressive quantization needs careful calibration of scales and rounding per layer.

## PTQ vs QAT

- Quantization can enter at two points:

- **Post-training quantization (PTQ)** — compress a fully trained model afterward. Fast and common in production.
- **Quantization-aware training (QAT)** — simulate lower precision *during* training so the model adapts to quantization noise. Costlier in time and compute, but often holds up better at aggressive levels such as int4, where PTQ is more likely to lose accuracy.

## Where it shows up

- Quantization is one of the simplest, most widely used compression levers: phones, edge devices, and large inference clusters all rely on it. Local engines such as llama.cpp lean heavily on quantized GGUF packs so consumer hardware can run models that would otherwise demand data-center GPUs. Serving stacks still benefit when weights and KV-cache pressure shrink.

- The practical question is not whether to quantize, but how far: choose the precision your task can afford, verify on your evals, and prefer QAT when int4-class compression must stay close to full-precision quality.

## Reading precision in the wild

- Production cards often mix precisions: weights at int8 or int4 while activations stay wider, or FP8 for both. Naming conventions encode that split. For local GGUF packs, choose a quant level your eval suite can tolerate on *your* tasks—coding and extraction can be more sensitive to aggressive quants than casual chat. Always separate “fits in VRAM” from “passes quality gates.”

- **Sources**

- [What Is Quantization? How AI Models Get Smaller & Faster](https://www.youtube.com/watch?v=mmns33BsBcY)
- [Llama.cpp vs vLLM: Which Local LLM Engine Actually Scales?](https://www.youtube.com/watch?v=0ujh7hfutq0)

## Navigation

- Cluster:: [[Cluster - Inference, Efficiency & Infrastructure]]
- Corpus:: [[Corpus - IBM AI Knowledge]]
- [[Clusters]]
- [[Contents]]
