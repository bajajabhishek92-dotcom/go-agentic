title:: Quantization
type:: technology
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
tags:: #technology #cluster/inference-infra #start-here
node-id:: c-quantization
start-here:: true
original-label:: Quantization

- #cluster/inference-infra
- type:: technology

## Definition

- Reducing numeric precision (FP16→int8/int4) via PTQ or QAT to cut memory and serving cost, with healing/distillation to protect accuracy.

## Aliases

- PTQ
- QAT
- int4

## Relations

- enables:: [[LLM Inference]] — Lower precision reduces memory pressure
- enables:: [[Local Inference Engines]] — Local engines rely on quantized weights
- examples:: [[Quantization — How Models Get Smaller Without Starting Over]] — Discussed in article
- examples:: [[Quantization-Aware Healing — Compress Without Capping Accuracy]] — Discussed in article
- related to:: [[Fine-Tuning, RAG, LoRA—and Choosing a Local Inference Engine]] — Discussed in article
- related to:: [[Memory Wall]] — Suggested reading path

## Cluster

- [[Cluster - Inference, Efficiency & Infrastructure]]
- [[Clusters]]
