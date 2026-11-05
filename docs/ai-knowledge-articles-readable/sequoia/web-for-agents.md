---
title: Building a Web That Agents Can Use
slug: a-web-for-agents
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Context, Tools & Knowledge Access
cluster_id: knowledge-access
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/knowledge-access
keywords:
- agent-native-web
- agent-tooling-apis
- sequoia
- knowledge-access
- cluster-knowledge-access
- corpus-sequoia-ai-knowledge
- article
- web
- agents
- building
- use
- can
- agent
- need
summary: 'The public web was built for human eyes, browsers, and ad clickers. Agents need machine-reliable retrieval, tools, and permissions. Parallel’s Parag Agrawal argues for a new web layer for AI agents—infrastructure that makes the internet legible and actionable for non-human…'
related:
- Agent Tooling & APIs
- Agent-Native Web
path: sequoia/web-for-agents.md
---

# Building a Web That Agents Can Use

The public web was built for human eyes, browsers, and ad clickers. Agents need machine-reliable retrieval, tools, and permissions. Parallel’s Parag Agrawal argues for a **new web layer for AI agents**—infrastructure that makes the internet legible and actionable for non-human browsers. Profound’s James Cadwallader covers the mirror problem on the growth side: when the visitor is an agent, SEO instincts misfire.

## Definition: agent web vs human web

Humans tolerate ambiguity: messy DOM, CAPTCHAs, popovers, and ten blue links they mentally filter. Agents operating at volume need structured access patterns, freshness guarantees, and APIs that do not silently change. Parallel’s founding bet is extreme: agents will query and use the web on the order of **1,000×** more than humans ever have. If that is even directionally true, crawlers, indexes, and ranking built around human click behavior are the wrong substrate.

Agrawal’s sharp formulation: **human click data is a bug** for agent search. An agent doing work with search should rely on **agent feedback**—did this page actually help complete the task?—not on whether a human would have clicked a blue link. Models compress information well; that research can be applied to indexing and ranking optimized for agent success, not ad sessions.

## Why the old web breaks

Classic search and scraping assume a human in the loop to disambiguate layout and junk. At agent scale, every company reinventing brittle scrapers is pure tax. Publishers face an economic break too: the ad-supported internet collapses when agents show up instead of people who see ads. Parallel’s proposed fix direction is to pay content owners for the value their pages provide to agents—matchmaking between agent demand and publisher supply—rather than pretending the 2005 web business model survives unchanged.

On the growth side, Cadwallader’s line sticks: it is not that the front door of the internet changed; **the person walking through the door changed**. Gemini, ChatGPT, and Claude recommend brands differently. Mapping “AI visibility” onto traditional SEO is the wrong instinct. Agents consume the long tail at unprecedented scale; the durable move is to equip agents with **original insight** they cannot find elsewhere—not to spam keyword variants into a world where the reader is a compressor.

## Mechanism: indexes, APIs, and agent-led growth

Parallel’s agentic search path is familiar in outline—enrich the query, hit indexes, rank, return—but tuned for latency/cost tiers and agent task success. Different API versions throw different amounts of compute at the journey under constraints. The hard infrastructure is web-scale crawl and index (historically a giants-only club) plus continuous evaluation from agent outcomes.

For SaaS builders, the mechanism on *your* surface is simpler and urgent: treat **agent traffic as a first-class persona**. Stable APIs, clear auth, machine-readable docs, predictable schemas, and permission models beat “we have a nice HTML dashboard.” Separately, agent platforms need retrieval substrates beyond ten blue links—corpora, browsers, tool marketplaces—so agents do not reinvent scraping.

Agent-led growth means measuring whether models cite, recommend, or fetch you—and feeding agents facts only you own (evals, datasets, primary research, product truth). Visibility tooling that runs continuously matters because the answer surface moves daily, not quarterly.

## Failure modes

- **Scraper arms races.** Layout changes and anti-bot walls silently break production agents.
- **Optimizing for human SERP while users ask agents.** Ranking for blue links when decisions happen in chat.
- **Closed gardens that pretend to be the open web.** Useful short-term; fragile if agents need the whole internet.
- **No publisher economics.** If agent retrieval extracts value without a deal, supply withers or walls rise.
- **SEO cosplay for LLMs.** Keyword stuffing content that models ignore in favor of clearer primary sources.
- **Unstable tool APIs.** Agents amplify breakage; undocumented breaking changes become outages.

## Product implications for builders

Ship machine contracts: OpenAPI/MCP-style tools, idempotent actions, and auth that agents can hold. Prefer structured export over “read our blog.” On the retrieval side, evaluate indexes with task success, not click-through. On the growth side, publish unique evidence; monitor multi-model recommendations without assuming one SEO playbook ports.

### Practice checklist

- Add an “agent persona” to product specs: auth, rate limits, schemas, changelog discipline.
- Prefer stable APIs and machine-readable docs over scrape-only access for critical workflows.
- Evaluate retrieval with agent task success / agent feedback, not only human CTR proxies.
- Design publisher or data-licensing paths if you redistribute web value to agents.
- Track brand/recommendation presence across major answer engines—without forcing classic SEO metrics as the only KPI.
- Publish original, citable insight (benchmarks, primary data) agents cannot infer from commodity pages.
- Version tools; never silently change action semantics agents depend on.
- Separate human UX experiments from agent contracts so A/B tests do not break machines.

### Sources

- [Parallel’s Parag Agrawal: Building a New Web for AI Agents](https://www.youtube.com/watch?v=fUcnE6pjq5w)
- [From SEO to Agent-Led Growth: Profound's James Cadwallader](https://www.youtube.com/watch?v=RyTwRCKeDo4)
