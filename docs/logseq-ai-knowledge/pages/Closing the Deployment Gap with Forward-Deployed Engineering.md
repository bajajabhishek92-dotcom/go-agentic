title:: Closing the Deployment Gap with Forward-Deployed Engineering
type:: article
cluster:: enterprise-gov
cluster-name:: Enterprise Adoption & Governance
corpus:: extra-ai-knowledge/openai-news
tags:: #article #corpus/openai-news #cluster/enterprise-gov
node-id:: a-closing-the-deployment-gap
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/openai-news/closing-the-deployment-gap.md
original-label:: Closing the Deployment Gap with Forward-Deployed Engineering

- #cluster/enterprise-gov
- #corpus/openai-news
- blurb:: Model demos move faster than production systems. The **deployment gap** is the distance between what a model appears capable of on a benchmark or slide and what people can reliably use amid real constraints,…

## Relations

- example of:: [[Forward-Deployed Engineering]] — Discussed in article
- solves:: [[Enterprise AI Diffusion]] — Discussed in article

## Article

- Model demos move faster than production systems. The **deployment gap** is the distance between what a model appears capable of on a benchmark or slide and what people can reliably use amid real constraints, permissions, and messy data. Forward-deployed engineering (FDE) is one organizational pattern for closing that gap—and intentionally making itself obsolete.

## What FDE is for

- FDEs embed with customers on the hardest problems:

- Where models *can* do the job today → make the solution **repeatable** with Product.
- Where they fall short → define the gap crisply for Research.
- Success metric: the *next* customer inherits a higher floor and needs less custom heroics.
- The internal slogan: if Codex can one-shot the use cases you spent months building, that is progress—your job was to discover what mattered and fold it into the product.

## Order of operations: outcome → reliability → scale

- A durable sequence:

- **Start with the outcome** — solve to a production standard you can stand behind, not a demo that evaporates under scrutiny.
- **Learn the domain** — generalists can arrive cold, but they must study the customer’s world (chip verification, farm equipment setup, pre-clinical workflows) until judgment is sound.
- **Instrument success** — co-build evals with domain experts (e.g. directed tests, failure diagnosis) before declaring victory.
- **Collapse custom code into shared primitives** — as the platform improves (skills, plugins, MCP, shared agent harness), delete glue. One semiconductor story: ~90% of custom code removed; second-team onboard went from months to a day.
- LLMs make building cheap; spend that speed on learning what holds up in production, then scale *that*.

## Patterns that emerge from deployments

- **Personalized operational guidance** at industrial scale (e.g. helping farmers configure precision equipment) needs domain context and journey design, not a generic chatbot.
- **Voice/agent platforms** (Presence-style products) grow from repeated regulated deployments that reveal reusable building blocks.
- **Self-improving domain agents** (tax, diligence, underwriting) need human standards encoded as evals and review—not unbounded autonomy.

## Anti-pattern

- Hiring “AI engineers” who only ship isolated PoCs without evals, without collapsing into platform primitives, and without a plan to raise the floor for everyone else. That widens the deployment gap while looking busy.

- **Sources**

- [What FDE means at OpenAI](https://openai.com/index/forward-deployed-engineering-means)

## Navigation

- Cluster:: [[Cluster - Enterprise Adoption & Governance]]
- Corpus:: [[Corpus - OpenAI News]]
- [[Clusters]]
- [[Contents]]
