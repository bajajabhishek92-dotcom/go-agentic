---
title: The Memory Wall and Scaling LLMs Beyond One GPU
slug: a-ai-memory-wall-multi-gpu
type: article
corpus: IBM
corpus_key: ibm
cluster: Inference, Efficiency & Infrastructure
cluster_id: inference-infra
tags:
- article
- corpus/ibm-ai-knowledge
- cluster/inference-infra
keywords:
- memory-wall
- llm-inference
- ibm
- inference-infra
- cluster-inference-infra
- corpus-ibm-ai-knowledge
- article
- intensity
- memory
- one
- gpu
- wall
- flops
- you
summary: Chip peak FLOPs have grown roughly six-thousand-fold over two decades. Workloads have not gotten
  six-thousand-fold faster. Accelerators often sit idle waiting on data. That gap between rising compute
  and
related:
- LLM Inference
- Memory Wall
path: ibm/ai-memory-wall-multi-gpu.md
---

# The Memory Wall and Scaling LLMs Beyond One GPU

Chip peak FLOPs have grown roughly six-thousand-fold over two decades. Workloads have not gotten six-thousand-fold faster. Accelerators often sit idle waiting on data. That gap between rising compute and slower-growing **memory bandwidth** is the **memory wall**—and it explains why “twice the FLOPs” rarely means twice the tokens per second.

## Arithmetic intensity and the roofline

**Arithmetic intensity** is FLOPs performed per byte moved from memory. High intensity → **compute-bound** (you can use the chip’s math). Low intensity → **memory-bound** (you starve for bandwidth).

The **roofline model** plots intensity against attainable performance. Hardware defines a **ridge point**: peak FLOPs divided by peak memory bandwidth. On a B200-class GPU, example specs (~2.25 PFLOP/s and ~8 TB/s) put the ridge near ~281 FLOPs/byte. Workloads left of the ridge are memory-bound; right of it, compute-bound. Extra FLOPs help only if you are on the compute side—or if you raise intensity enough to move toward the ridge.

## Prefill vs decode on the roofline

In LLM serving, **prefill** (processing the prompt, building KV cache) does large GEMMs and often sits in the compute-bound region (high intensity). **Decode** (one token at a time at small batch) repeatedly reads large weights for little math per byte—intensity can be ~1 FLOP/byte, deep in the memory-bound regime. Throwing more compute at decode without fixing data movement barely helps.

**Batching** (including continuous batching in engines like vLLM) raises intensity by reusing the same loaded weights across many concurrent generations—moving decode toward the ridge without changing the chip.

Before buying hardware, estimate intensity, read peak FLOPs and bandwidth from the spec sheet, and place the workload on a roofline. That tells you whether to chase compute, bandwidth, batching, or quantization.

## Why one GPU is not enough

Trillion-parameter-class models can need on the order of terabytes just for weights; top GPUs hold a few hundred GB. Production also needs room for the **KV cache** (growing with conversation) and **throughput** for many concurrent users. Distributed inference splits the load.

Common strategies:

- **Data parallelism** — full model replicas; route requests by load or warm cache. No cross-replica math coordination.
- **Pipeline parallelism** — shard *by layers* across GPUs (assembly line). Keep requests flowing so stages stay busy.
- **Tensor parallelism** — shard *within* each layer; GPUs compute partial results and combine via collectives every layer. Needs high-bandwidth, low-latency interconnect inside a server; slow networks become the bottleneck.
- **Expert parallelism (MoE)** — spread experts across GPUs; routers send tokens to a few experts per layer. Less compute per token, more network chatter for dispatch/combine.
- **Prefill/decode disaggregation** — separate GPU pools optimized for compute-bound prefill vs memory-bound decode, with a fast KV-cache handoff. Worth it only if the interconnect can move cache quickly; plain Ethernet often is not enough.

Real systems stack these (**multi-dimensional parallelism**) under an orchestration layer for routing, load balance, and failure handling. The memory wall tells you *why* decode hurts; parallelism tells you *how* production serving escapes a single device.

**Sources**

- [The AI Memory Wall: Why LLMs & AI Accelerators Hit a Bottleneck](https://www.youtube.com/watch?v=4b6KpFN7Rio)
- [How AI Models Scale Beyond a Single GPU Across LLM Workloads](https://www.youtube.com/watch?v=qZBibWYcKH4)
- [How GPUs Accelerate Data & Analytics with AI](https://www.youtube.com/watch?v=zqowMgMgSjA)
