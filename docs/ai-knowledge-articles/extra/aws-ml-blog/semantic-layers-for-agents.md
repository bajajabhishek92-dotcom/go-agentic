---

title: 'Semantic Layers: Let Agents Query Meaning, Not Schemas'
slug: a-semantic-layers-for-agents
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
- semantic-layer-for-agents
- multi-tenant-rag-access-control
- agent-tooling-apis
- aws-ml-blog
- knowledge-access
- cluster-knowledge-access
- corpus-aws-ml-blog
- article
- semantic
- meaning
- agents
- not
- query
- agent
summary: "Agents that answer business questions from live systems need more than a chat model and a SQL dialect. They need joins, metric definitions, and row/column security to live outside the prompt—in a governed semantic layer the model plans against but does not invent."
related:
- Agent Tooling & APIs
- Multi-Tenant RAG Access Control
- Semantic Layer for Agents
path: extra/aws-ml-blog/semantic-layers-for-agents.md
---

# Semantic Layers: Let Agents Query Meaning, Not Schemas

Agents that answer business questions from live systems need more than a chat model and a SQL dialect. They need **joins, metric definitions, and row/column security to live outside the prompt**—in a governed semantic layer the model plans against but does not invent.

## Three layers an agent needs

1. **Planning model** — chooses tools and writes queries (or structured tool calls).
2. **Semantic / knowledge layer** — business meaning, join graphs, metrics, and access rules.
3. **Operational systems** — warehouses, OLTP, SaaS, even on-prem databases, often federated.

When meaning lives only in the prompt, every agent reimplements “what is active customer?” and every change is a prompt deploy. When meaning lives in a semantic layer, BI tools and agents share the same definitions.

## Authoring surfaces that travel beyond AWS product names

Production patterns seen across implementations:

- **Comments and aliases next to operational data** — business meaning in database comments; foreign keys crawl into join paths; grants and row-level security apply per caller while the prompt and agent code stay the same.
- **Data virtualization** — derived views over Aurora, Redshift, on-prem Postgres, and beyond; agent speaks a SQL dialect against governed views, not raw tables.
- **Dimensional models** — attributes, hierarchies, facts, metrics in a modeling language (often Git-versioned YAML), exposed simultaneously over SQL, BI protocols, and MCP for agents.
- **Knowledge graphs** — ontology-based concepts and relationships with a graph query language as the federation unit.

The common architecture: foundation model plans; MCP (or similar) exposes the semantic tool catalog; an agent runtime hosts the agent and manages outbound credentials to the semantic layer; **filters for the caller stay in the layer**, not in free-text instructions.

## Governance that changes answers without changing prompts

The same agent code and tool catalog should return different rows for different roles because Postgres GRANT / RLS, virtualization policies, or dimensional security already constrain the caller. That is the point: identity of the human (or OBO token) flows to the layer; the model never receives another tenant’s schema.

Capture query traces (OpenTelemetry → queryable rows) so you can audit which SQL/VQL ran for which question—required when agents touch regulated customer-360 data.

## When to use this vs document RAG

- **RAG / knowledge bases** — unstructured policies, PDFs, tickets, manuals.
- **Semantic layers** — live metrics, entities, and joins that must stay consistent with operational truth.

Many enterprise assistants need both: documents for “why,” semantic queries for “what is the number right now.”

## Takeaway

Do not teach every agent your warehouse schema. Put business meaning, joins, and security in a semantic layer; expose it as tools; keep the model as a planner that never owns the definitions.

**Sources**

- [Build a semantic layer for agentic AI with EDB Postgres AI and Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-with-edb-postgres-ai-and-amazon-bedrock-agentcore/)
- [Build a semantic layer for agentic AI on AWS with Denodo and Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-denodo-and-amazon-bedrock-agentcore/)
- [Build a semantic layer for agentic AI on AWS with AtScale and Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-atscale-and-amazon-bedrock-agentcore/)
- [Build a semantic layer for agentic AI on AWS with Strategy Mosaic and Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/build-a-semantic-layer-for-agentic-ai-on-aws-with-strategy-mosaic-and-amazon-bedrock-agentcore/)
