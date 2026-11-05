title:: torch.compile & Graph Breaks
type:: technology
cluster:: inference-infra
cluster-name:: Inference, Efficiency & Infrastructure
tags:: #technology #cluster/inference-infra
node-id:: c-torch-compile
start-here:: false
original-label:: torch.compile & Graph Breaks

- #cluster/inference-infra
- type:: technology

## Definition

- Dynamo/Inductor compilation speeds models until graph breaks and scalar syncs (e.g. `.item()`) shrink optimization regions.

## Aliases

- Dynamo
- Inductor

## Relations

- examples:: [[torch.compile — Dynamo, Inductor, Graph Breaks, and `.item()` Costs]] — Discussed in article

## Cluster

- [[Cluster - Inference, Efficiency & Infrastructure]]
- [[Clusters]]
