---

title: From Single-Shot RAG to Agentic Retrieval
slug: a-agentic-retrieval-knowledge-bases
type: article
corpus: AWS ML Blog
corpus_key: aws-ml-blog
cluster: Context, Tools & Knowledge Access
cluster_id: knowledge-access
tags:
- article
- corpus/aws-ml-blog
- cluster/knowledge-access
keywords:
- rag-retrieval-augmented-generation
- agentic-retrieval
- aws-ml-blog
- knowledge-access
- cluster-knowledge-access
- corpus-aws-ml-blog
- article
- retrieval
- agentic
- single-shot
- rag
- you
- not
- agent
summary: "Classic RAG embeds a question, fetches nearest chunks from one index, and generates once. That design is right for many FAQs. It fails in recognizable ways on enterprise questions: answers that span two corpora come back fluent but incomplete; the right source depends on the question but a single index cannot choose; a second look after seeing first results has nowhere to happen."
related:
- Agentic Retrieval
- RAG (Retrieval-Augmented Generation)
path: extra/aws-ml-blog/agentic-retrieval-knowledge-bases.md
---

# From Single-Shot RAG to Agentic Retrieval

Classic RAG embeds a question, fetches nearest chunks from one index, and generates once. That design is right for many FAQs. It fails in recognizable ways on enterprise questions: answers that span two corpora come back fluent but incomplete; the right source depends on the question but a single index cannot choose; a second look after seeing first results has nowhere to happen.

## What agentic retrieval adds

Put a reasoning agent in the retrieval loop. The agent decides:

- Whether to retrieve at all.
- Which knowledge base (or corpus) to consult.
- Whether to retrieve again before composing an answer.

The output should stay **grounded and cited**—passages the reader can audit—not free recall dressed as facts. Managed knowledge-base products increasingly expose this as a first-class API (multi-turn planning, tool-driven retrieval, streaming cited answers) rather than a custom orchestration you maintain forever.

## Ingestion quality still dominates answer quality

Agentic loops cannot fix garbage chunks. For web content:

- Prefer a managed crawler for authorized public sites (robots.txt, rate limits, scheduled sync, JS wait) when it can reach what you need.
- Add a **preparation step** when you need main-content-only Markdown, boilerplate pruning, CSS-bounded extraction, or custom metadata attributes for filtered retrieval. Write Markdown plus a metadata sidecar to object storage, then ingest through an S3-backed data source.

Preparation is batch ingestion of known properties—not real-time web search at inference time. Different problem.

Corporate document assistants (multi-language SharePoint, policies across countries) often win by using a fully managed knowledge base so product teams do not operate vector clusters, embedding pipelines, and sync jobs themselves—while still tuning chunking, metadata filters, and citation behavior.

## Observability is mandatory once retrieval loops

A single-shot pipeline is a function you can read. An agent that retrieves in a loop takes a different path per question. By default you see neither the path nor whether the answer was good. Instrument:

- Which tools/KBs were called and in what order.
- Latency, tokens, and retrieval hit quality.
- Faithfulness / grounding scores (on-demand and continuous).
- Citations back to source passages.

Provision dashboards and evaluation with the same infrastructure-as-code that deploys the agent—do not bolt them on after the first production incident.

## Access control for RAG is its own topic

Semantic search without permission checks is a data leak. Prefer verifying ACLs with the **authoritative source at query time**, not only filtering on ACL snapshots copied at last sync. See the companion article on multi-tenant and RAG access control.

## Takeaway

Use single-shot RAG when one corpus and one fetch suffice. Graduate to agentic retrieval when questions need routing, multi-corpus joins, or iterative look-ups—and invest equally in clean ingestion, citations, and path-level observability.

**Sources**

- [Build agentic retrieval on a Managed Amazon Bedrock Knowledge Base with CDK](https://aws.amazon.com/blogs/machine-learning/build-agentic-retrieval-on-a-managed-amazon-bedrock-knowledge-base-with-cdk/)
- [Prepare web content for Amazon Bedrock Knowledge Bases with Crawl4AI](https://aws.amazon.com/blogs/machine-learning/prepare-web-content-for-amazon-bedrock-knowledge-bases-with-crawl4ai/)
- [How IskayPet unified corporate knowledge with Amazon Bedrock Managed Knowledge Bases](https://aws.amazon.com/blogs/machine-learning/how-iskaypet-unified-corporate-knowledge-with-amazon-bedrock-managed-knowledge-bases/)
