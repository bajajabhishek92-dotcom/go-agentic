# Fine-Tuning, RAG, LoRA—and Choosing a Local Inference Engine

In 2023, a well-known legal AI effort fine-tuned a custom model that attorneys preferred over the then-leading frontier model in blind tests. Fine-tuning looked like the obvious path to specialization. By 2025, that same organization’s legal benchmark showed multiple *general* frontier models beating their custom system—without legal fine-tuning. Bloomberg-style from-scratch domain models saw similar leapfrogging. So is fine-tuning dead?

## What fine-tuning does

Start from a base LLM (frontier API or open weights) trained on broad data. Fine-tuning continues training on a narrow corpus—contracts, support tickets, house style—adjusting weights into a specialized model. It can help on narrow tasks, but it is not free: data collection, training, evaluation, regression control, and chasing a moving frontier that may obsolete your custom weights before you ship.

## Why general models caught up

Three shifts reduced the need to bake knowledge into weights:

1. **Huge context windows** — from a few thousand tokens toward a million-plus; large document sets can ride in the prompt.
2. **Reasoning at inference time** — extended thinking can outperform stale specialized weights for many tasks.
3. **Cheaper, stronger frontier inference** — the customization target moves under you.

## Customization without touching weights

A practical stack:

1. Start with a strong **base model**.
2. Apply **prompt and context engineering**.
3. Add **RAG** when knowledge is fresh or proprietary (retrieve at query time instead of training it in).
4. Add **agent skills** when what is missing is *procedure* (how to hit *this* SQL schema), loadable on demand by any capable model.
5. Reach for **fine-tuning** only when that stack cannot clear a specific bottleneck.

When fine-tuning still wins: **tight latency** (voice agents that cannot wait on heavy reasoning models), **distillation** (teacher traces into a smaller student), and **reinforcement fine-tuning** when outputs can be programmatically graded. Much production “fine-tuning” is **LoRA** or related parameter-efficient adapters: small trainable modules atop frozen base weights.

## llama.cpp vs vLLM for local serving

Running locally cuts API cost, outages/rate limits, and—often most important—keeps data on your machine. Two engines dominate different niches.

**llama.cpp** optimized for accessibility on consumer hardware: aggressive **quantization**, packing weights/tokenizer/config into portable **GGUF** files, and CPU as well as GPU paths—enabling laptops, Pis, offline factories/IoT. Ecosystems like Ollama and LM Studio grew on these ideas.

**vLLM** targets efficient serving at scale on accelerators (NVIDIA, and broader stacks): **continuous batching**, careful **KV-cache** management (paged attention), speculation, and patterns like prefill/decode disaggregation. Same OpenAI-compatible APIs many apps already use—so teams often prototype on a hosted API, then move to vLLM (or llama.cpp) when bills and privacy demand it.

Rule of thumb: llama.cpp-class tools for personal/edge and constrained hardware; vLLM-class engines for multi-user production throughput. Both can host agents and RAG; pick for *hardware and concurrency*, not for “which logo runs Llama.”

**Sources**

- [Is Fine-Tuning Still Needed? LLMs, RAG, & LoRA](https://www.youtube.com/watch?v=-W2JdSl1v48)
- [Llama.cpp vs vLLM: Which Local LLM Engine Actually Scales?](https://www.youtube.com/watch?v=0ujh7hfutq0)
- [What Is Quantization? How AI Models Get Smaller & Faster](https://www.youtube.com/watch?v=mmns33BsBcY)
