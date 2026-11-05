---
title: 'Connecting Agents to Tools: From Direct APIs to MCP and Short-Lived Credentials'
slug: a-connecting-agents-to-tools
type: article
corpus: IBM
corpus_key: ibm
cluster: Context, Tools & Knowledge Access
cluster_id: knowledge-access
tags:
- article
- corpus/ibm-ai-knowledge
- cluster/knowledge-access
keywords:
- mcp-model-context-protocol
- agent-tooling-apis
- agent-identity-on-behalf-of
- ibm
- knowledge-access
- cluster-knowledge-access
- corpus-ibm-ai-knowledge
- article
- agent
- user
- mcp
- credentials
- tools
- short-lived
summary: 'Agents are only useful when they can act: open tickets, read repos, post to chat, query databases.
  How that connection is wired determines whether you get a demo or a governable system. Five patterns
  appear in'
related:
- Agent Identity & On-Behalf-Of
- Agent Tooling & APIs
- MCP (Model Context Protocol)
path: ibm/connecting-agents-to-tools.md
---

# Connecting Agents to Tools: From Direct APIs to MCP and Short-Lived Credentials

Agents are only useful when they can act: open tickets, read repos, post to chat, query databases. How that connection is wired determines whether you get a demo or a governable system. Five patterns appear in practice, each adding more identity and less credential sprawl than the last.

## 5 — Direct connection with shared credentials

The agent calls a tool with an API key or service identity. Simple, reuses existing integrations, and was common in early RAG and agent demos. The tool never sees the end user—only the agent’s credentials—so teams often restricted access to broadly public or company-wide data. Fine for low-sensitivity prototypes; weak for user-specific authorization.

## 4 — Direct connection with OAuth to the tool

The agent talks to tools (GitHub, Jira, Slack, and similar) that speak OAuth. The tool challenges for user auth, issues an access token, and the agent stores it (as many coding assistants do locally). Pros: established OAuth, real user authentication. Cons: the agent **impersonates** the user—the tool may not distinguish agent vs human—and tokens can be long-lived (weeks), increasing replay risk if stolen.

## 3 — Insert MCP as an abstraction layer

**Model Context Protocol** sits between agents and tools. Agents speak MCP; MCP servers know how to talk to each backend. OAuth to the application can remain, but every agent no longer needs bespoke knowledge of every tool’s API. The win is portability and thinner agent code—not automatic security maturity.

## 2 — On-behalf-of with token exchange

Drop naive OAuth-only flows in favor of **delegation**: authenticate the *agent* as well as the user; the user delegates work to the agent; token exchange propagates access securely. Systems see both identities—what the user may do and what the agent is allowed to do—improving observability and ending pure impersonation. Visibility of user *and* agent is the point.

## 1 — Vault-issued short-lived credentials

Long-lived user tokens stored beside the agent remain a liability. Pattern one stores durable secrets in a **vault** and issues **short-lived** credentials to MCP for each flow. Intercepted tokens expire quickly; blast radius shrinks. Combined with MCP and on-behalf-of semantics, this is the strongest of the common patterns: authenticated user, authenticated agent, abstracted tools, short-lived creds.

## How to choose

Climb the ladder as sensitivity and blast radius grow. Public FAQ retrieval can live at pattern five. Customer data and write actions need user visibility, agent identity, and short-lived credentials. MCP alone does not equal security—but it is the right seam at which to enforce policy, vaulting, and exchange once agents proliferate across the enterprise.


## Why identity crisis language keeps appearing

Security practitioners increasingly treat agents like privileged identities: they authenticate, hold broad tool access, and act faster than a human session. Cost-of-breach style findings that most AI-related incidents lacked proper access controls reflect the rush to connect tools before climbing this pattern ladder. Pair MCP adoption with vaulting and exchange; otherwise you only standardized the attack surface.

**Sources**

- [5 Ways to Connect AI Agents to Tools: From APIs to MCP](https://www.youtube.com/watch?v=BHGTA6ZEls4)
- [Skills vs MCP vs RAG vs Memory: What AI Agents Need to Know](https://www.youtube.com/watch?v=X4FVEEegCbk)
