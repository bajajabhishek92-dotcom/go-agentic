# Extra AI knowledge sources

Four reputable sources chosen to complement IBM Technology and Sequoia Capital YouTube coverage already handled by other workers. Mix: frontier lab news, open-source ML ecosystem, research-lab science, and cloud applied ML engineering.

**Corpus start-here:** [`../README.md`](../README.md) · **Themes:** [`../ai-knowledge-by-theme/`](../ai-knowledge-by-theme/) · **Further sources / landscape:** [`../gap-fill-ai-knowledge/`](../gap-fill-ai-knowledge/) (Anthropic, Epoch, CSET, NVIDIA, Google Research, IEEE Spectrum, FPF — not part of this Extra pack).
## 1. OpenAI News (`openai-news`)

- **URL:** https://openai.com/news
- **Type:** Company news / research / product blog
- **Why:** Primary public channel for frontier model releases, safety/preparedness practices, enterprise adoption patterns, and platform engineering at foundation-model scale.
- **Complement:** Industry frontier perspective (models, safety, go-to-market) distinct from general tech-explainer YouTube.

## 2. Hugging Face Blog (`huggingface-blog`)

- **URL:** https://huggingface.co/blog
- **Type:** Open-source ML community + company blog
- **Why:** Strong applied coverage of training/inference tooling, evaluation leaderboards, open models, multimodal stacks, and reproducible recipes practitioners can teach from.
- **Complement:** Open ecosystem and hands-on methods vs. closed frontier announcements.

## 3. Google DeepMind Blog (`deepmind-blog`)

- **URL:** https://deepmind.google/blog/
- **Type:** Research lab blog
- **Why:** Deep research narrative across models, science applications (biology, climate, robotics), safety, and long-horizon agentic systems from a top AI lab.
- **Complement:** Research-lab science and capability reports beyond product marketing blogs.

## 4. AWS Machine Learning Blog (`aws-ml-blog`)

- **URL:** https://aws.amazon.com/blogs/machine-learning/
- **Type:** Cloud vendor applied ML engineering blog
- **Why:** Production patterns for agents, RAG/knowledge bases, Bedrock/SageMaker deployment, latency/cost constraints, and customer case studies—what it takes to ship AI systems.
- **Complement:** Infrastructure and production constraints rarely covered in research or venture YouTube.

## Processing notes

- Target: ~100 latest items per source.
- Content fetched via RSS/HTML where available; Jina reader used when direct fetch returned 403 or thin client-rendered HTML.
- Skips recorded in `/cursor/stores/self/internal/extra-sources-inventory.json`.
