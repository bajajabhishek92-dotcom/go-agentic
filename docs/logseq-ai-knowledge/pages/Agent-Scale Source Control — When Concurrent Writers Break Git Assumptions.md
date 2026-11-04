title:: Agent-Scale Source Control — When Concurrent Writers Break Git Assumptions
type:: article
cluster:: coding-delivery
cluster-name:: Coding Agents & Software Delivery
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/extra-ai-knowledge/openai-news #cluster/coding-delivery
node-id:: a-agent-scale-source-control
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/agent-scale-source-control.md
original-label:: Agent-Scale Source Control: When Concurrent Writers Break Git Assumptions

- #cluster/coding-delivery
- #corpus/extra-ai-knowledge/openai-news
- blurb:: Coding agents multiply how much work one engineer can push at once: more branches, more CI clones, more fetches of the same commit. Source control that was “fine” for human cadence can collapse under agent…

## Relations

- example of:: [[Agent-Scale Source Control]] — Discussed in article
- constrains:: [[AI Coding Quality Workflows]] — Discussed in article

## Article

# Agent-Scale Source Control: When Concurrent Writers Break Git Assumptions

- Coding agents multiply how much work one engineer can push at once: more branches, more CI clones, more fetches of the same commit. Source control that was “fine” for human cadence can collapse under agent cadence—slow pushes, failed merges, reliability dips. The lesson from OpenAI’s Pando work is not “replace Git,” but **rebuild the backend so Git’s protocol survives agent-scale concurrency**.

## Two dimensions of scale

- Any distributed Git service must handle:

- **Many writers** pushing to different branches at the same time.
- **Many readers** fetching overlapping history as fast as the network allows.
- Classic designs struggle when both spike together. Coordinating every ref update across full replicas (e.g. three-phase commit) serializes pushes and puts disk/network latency on the critical path. Ordering all updates through a shared write-ahead log lets pack uploads run in parallel, but competing updates to one manifest still bottleneck publication, and replicas can fall behind indexing packs before they can serve them.

## Trade-offs that unlock throughput

- Pando deliberately drops two assumptions many Git services treat as requirements:

- **Repository-wide point-in-time consistency.** Forcing one global snapshot of every ref requires coordinating every push. Pando instead uses **causal consistency**: each branch is serializable on its own; a client reading several branches may see them at different moments. Humans and agents usually care about the order of updates to *one* ref, not a global clock across the whole monorepo.
- **Unique packfiles per client.** Generating a custom pack for every fetch burns CPU and I/O. Pando **reuses stored packfiles**: clients may download some objects they already have, but the server can serve the same bytes from caches and saturate bandwidth.
- Practically: pushes stream packfiles into blob storage, record a *ref version* (tip + pack + dependencies) in a scalable metadata store, and fetch becomes pack selection plus CDN/regional download—not unpack-and-repack on every server.

## Negotiation that makes packs reusable

- A conventional server advertises many refs so clients can omit shared objects—smaller uploads, but packs that are hard to reuse because another client may lack those omitted dependencies. Advertising *no* refs forces full-history packs—easy to reuse, ruinously large.

- Pando’s compromise: advertise a **small base** (often just trunk). Feature-branch packs depend on that known base, so a reader who has trunk can usually fetch the branch with one pack. Median pack sizes stayed tiny in their monorepo; the cost is that stacked or repeated branch pushes resend more objects.

## What to take away

- When agents become first-class developers:

- Measure **push-to-fetch latency** and concurrent branch updates—not only repo size.
- Prefer **protocol compatibility** so humans and agents keep the same tools, while you change storage and consistency.
- Treat **pack reuse + per-ref concurrency** as the scalability levers; treat global snapshot consistency as an optional luxury that may not survive agent load.
- In production, this pattern cut median push latency nearly 5× and served nearly a petabyte of Git data per day—evidence that agent-scale engineering starts below the model: in the systems that host the work.

- **Sources**

- [Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai)

## Navigation

- Cluster:: [[Cluster - Coding Agents & Software Delivery]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
