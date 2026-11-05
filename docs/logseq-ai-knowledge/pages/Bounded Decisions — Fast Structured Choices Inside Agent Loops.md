title:: Bounded Decisions — Fast Structured Choices Inside Agent Loops
type:: article
cluster:: agentic-systems
cluster-name:: Agentic Systems & Engineering
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/openai-news #cluster/agentic-systems
node-id:: a-bounded-decisions-for-agents
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/bounded-decisions-for-agents.md
original-label:: Bounded Decisions: Fast Structured Choices Inside Agent Loops

- #cluster/agentic-systems
- #corpus/openai-news
- blurb:: Agent workflows are full of tiny judgments: classify this input, route that ticket, pick a next action, score severity. Calling a full generative responses endpoint for each one burns latency and money. When the…

## Relations

- enables:: [[Loop Engineering]] — Discussed in article
- example of:: [[Bounded Decisions]] — Discussed in article
- related to:: [[Model Routing]] — Discussed in article

## Article

# Bounded Decisions: Fast Structured Choices Inside Agent Loops

- Agent workflows are full of tiny judgments: classify this input, route that ticket, pick a next action, score severity. Calling a full generative responses endpoint for each one burns latency and money. When the answer space is **bounded**, specialize the API—and the model—around decision outputs.

## Three answer shapes cover most micro-decisions

- A Decisions-style interface asks a question with allowed answers and returns one of:

- Table:
  - `| Type | Meaning | Typical use |`
  - `| --- | --- | --- |`
  - `| **Predicate** | Probability a condition is true | “Is there visible damage?” |`
  - `| **Choice** | One of predefined options (+ probs/confidence) | continue / retry / ask user |`
  - `| **Score** | Weighted level on an ordered rubric | severity 0–n |`

- Context can be text, images, or native JSON. Batching many questions per request (hundreds) amortizes overhead for fan-out classification.

## Why a dedicated path is faster

- Focusing a smaller, efficient model (e.g. Luna-class) on bounded answers can be an order of magnitude faster than the same model through a general Responses API—because generation length, decoding, and product path are optimized for closed-form results. Pricing can charge for **input only** (no output tokens), with aggressive prompt caching for reused instructions and schemas.

## Where it fits in the stack

- **Inside voice agents:** on each transcript update, decide expression, escalation, or clarifying question without stalling the live conversation.
- **Inside product loops:** categorize transactions, theme news coverage, attribute costs, gate interactive UI.
- **Beside heavy agents:** let Astra/Sol-class models plan and use tools; let Decisions handle high-QPS gating and routing.

## Design practice

- Start with one recurring decision your system already makes implicitly.
- Write the question, the exact option set, and the context features that distinguish options.
- Evaluate on real traffic slices for calibration (especially predicates and scores).
- Cache stable instructions/schemas; put volatile evidence last so cache hits stay high.
- Keep generative endpoints for open-ended work; do not force essays through a decision API or force classifiers through a chat API.
- **Teaching takeaway:** agent cost curves are often dominated by *many small open-ended calls*. Closing the answer set is an architectural lever, not just a prompt trick.

- **Sources**

- [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api)

## Navigation

- Cluster:: [[Cluster - Agentic Systems & Engineering]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
