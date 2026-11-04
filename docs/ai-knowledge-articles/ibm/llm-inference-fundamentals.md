# LLM Inference: From Idle Weights to Live Answers

Training a frontier model can cost hundreds of millions of dollars and months of work. Afterward the model is a static pile of weights sitting in memory. It does nothing until **inference** runs those weights against new inputs to produce outputs. Chatbots, coding assistants, and agents are almost entirely inference products. Training happens once; inference happens on every request—and over time inference cost usually dominates.

## Inference engines

An **inference engine** turns weights into a reliable serving system: scheduling requests, managing accelerators, batching work. Examples include vLLM, Ollama, and llama.cpp. Many expose OpenAI-compatible endpoints so applications can swap models without rewriting clients.

Before the data center, text becomes **tokens**—words, subwords, punctuation mapped to IDs. The model never sees characters; it sees ID streams. Tokenization is cheap computationally but defines billable prompt size. Larger vocabularies can pack text into fewer tokens but add training overhead.

Inside the facility, requests are authenticated, then routed by prompt length and content to suitable hardware. Serving each request alone wastes GPU capacity—like firing an industrial oven for one pastry. **Batching** groups requests; **continuous batching** slots a new request in as soon as another finishes so utilization stays high.

## Prefill and decode

LLM inference has two phases with different bottlenecks.

**Prefill** reads the whole prompt at once and builds the **KV cache**—working memory of what has been processed so far. Without it, every new token would force reprocessing the entire conversation. Prefill is **compute-bound**: large parallel math, limited by peak FLOPs.

**Decode** generates the reply one token at a time. Each step runs a forward pass, produces a distribution over the vocabulary, samples or picks a token, appends it, and repeats—always consulting the growing KV cache. Decode is **memory-bandwidth-bound**: limited by how fast weights and cache move from memory, not by raw math throughput.

Two latency metrics map to these phases:

- **Time to first token (TTFT)** — mostly prefill cost (how long until the user sees the first piece of the answer).
- **Inter-token latency (ITL)** — time between subsequent tokens (decode step cost).

Together they largely define perceived LLM latency.

## Why this matters for products

Prefill wants compute; decode wants fast memory. Optimizations that help one phase may not help the other. Batching often raises arithmetic intensity in decode by reusing loaded weights across many users. Quantization shrinks what must be moved. Local vs. cluster engines differ in how far they push continuous batching, paged KV caches, and multi-GPU parallelism—but the prefill/decode split is the mental model underneath all of them.

Inference is the machinery between a trained model and something people can use in real time. Understanding its phases is how you know what to optimize next.


## Cost and product implications

Because decode is bandwidth-heavy, product latency budgets should track ITL under realistic concurrency, not only single-stream demos. Prefill-heavy apps (long documents) stress FLOPs and TTFT; chatty multi-turn agents stress KV-cache growth and memory. Quantization, batching, and cache-aware scheduling are levers on different sides of that split—pick them based on which phase your traffic actually pays for.

**Sources**

- [What Is LLM Inference? How AI Models Generate Responses](https://www.youtube.com/watch?v=615-yWyS1n0)
- [The AI Memory Wall: Why LLMs & AI Accelerators Hit a Bottleneck](https://www.youtube.com/watch?v=4b6KpFN7Rio)
