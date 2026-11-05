title:: LLM Inference
type:: concept
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
tags:: #concept #cluster/inference-infra #start-here
node-id:: c-llm-inference
start-here:: true
original-label:: LLM Inference

- #cluster/inference-infra
- type:: concept

## Definition

- Serving live answers from weights: tokenization, continuous batching, and the prefill (compute-bound) vs decode (memory-bound) split behind latency metrics.

## Aliases

- serving
- TTFT
- ITL

## Relations

- enabled by:: [[Quantization]] — Lower precision reduces memory pressure
- enabled by:: [[Tokenizer - Vocabulary Specialization]] — Shorter token sequences cut decode cost
- enabled by:: [[Quantization — How Models Get Smaller Without Starting Over]] — Discussed in article
- enabled by:: [[Specialize the Tokenizer — Inference Cost Lives in Decode]] — Discussed in article
- enabled by:: [[Native Accelerator Backends — When `device=-neuron-` or `-tpu-` Is Enough]] — Discussed in article
- examples:: [[LLM Inference — From Idle Weights to Live Answers]] — Discussed in article
- constrains:: [[Memory Wall]] — Decode is memory-bandwidth bound
- constrained by:: [[Voice as Primary Interface]] — Voice UX imposes hard latency budgets on serving
- constrained by:: [[The Memory Wall and Scaling LLMs Beyond One GPU]] — Discussed in article
- related to:: [[Memory Wall]] — Suggested reading path
- related to:: [[torch.compile — Dynamo, Inductor, Graph Breaks, and `.item()` Costs]] — Discussed in article

## Cluster

- [[Cluster - Inference, Efficiency & Infrastructure]]
- [[Clusters]]
