# AI knowledge corpus — coverage gap audit

Baseline: IBM Technology, Sequoia Capital, Extra (OpenAI / Hugging Face / DeepMind / AWS), plus theme essays and the knowledge graph (10 clusters, ~86 article hubs). AL-8’s 100→300 video expansion is treated as in-flight; this audit uses the current store.

## Executive verdict

The corpus is **substantial on agent engineering, inference/infra, coding agents, enterprise adoption, and lab/cloud product framing**. It is **thin or missing** on geography and institutions (Asia/China; binding regulation), **clinical/education applications**, **privacy law**, **open-weight governance**, **hardware beyond accelerator chips**, and—critically—four **orientation themes** readers need before diving into techniques: **timeline**, **market roles**, **global policy**, and **agent benchmarking**.

## Strong coverage (do not prioritize for gap-fill)

| Theme / cluster | Why it feels strong |
|-----------------|---------------------|
| Agentic systems & engineering | IBM + Sequoia hubs; harnesses, loops, long-horizon agents |
| Context, tools, RAG, MCP | Multiple teachable articles; graph start-here nodes |
| Inference efficiency & serving | Memory wall, quantization, routing, cost ops |
| Coding agents & delivery | Quality workflows, secure generated code, legacy modernization |
| Enterprise adoption / platforms | Diffusion, own-your-weights, sovereignty (vendor/lab angle) |
| Security & frontier control | Trilemma, AI control, misalignment monitors (lab-centric) |
| Training / RL environments | Continual learning, RL envs, data efficiency (partial) |

## Thin but present (secondary priority)

| Area | Signal in baseline | What’s missing |
|------|--------------------|----------------|
| Robotics / physical AI | Sequoia robot-data factories; DeepMind Gemini Robotics; voice | Fleet ops, manipulation stacks, data factories beyond venture framing |
| Multimodal | Scattered HF/DeepMind/OpenAI mentions | Dedicated teachables on VLM/video/audio systems design |
| Climate / Earth AI | One DeepMind WeatherNext-style article | Decision infrastructure, energy/agriculture ops depth |
| Biology / biosecurity | DeepMind SynthID Bio; science agents | **Clinical** health AI workflows (not only generative bio security) |
| Evals / trust | LifeVal, factuality, JEV, ISO-ish governance | **Agent** benchmark science and leaderboard hygiene as a first-class topic |
| Policy language | “Governance” as enterprise practice | Binding **law/regulation** and contested global regimes |

## Missing or near-missing (primary gap-fill)

Keyword scan across IBM / Sequoia / Extra / theme essays (match counts are rough intensity, not quality):

| Gap | Approx. intensity | Notes |
|-----|-------------------|-------|
| Asia / China AI ecosystem | ~3 | Almost absent as a teachable topic |
| Open-source / open-weight **governance** | ~0 | Licenses, release norms, community governance missing |
| Privacy **law** (GDPR/CCPA/ADM acts, biometric rules) | ~12 | Mostly “sensitive data controls,” not legal regimes |
| Hardware **beyond chips** (power, cooling, interconnect, imports) | ~9 | Chip co-design exists; datacenter/geopolitics of compute thin |
| Education / learning science with AI | ~21 | Mostly incidental wording |
| Clinical / health AI (care delivery) | low teens | Biosecurity ≠ clinical AI |
| **AI development timeline** | absent as corpus product | No readable chronology of eras/inflection points |
| **Market players & roles** | absent as corpus product | Players appear as publishers, not mapped ecosystem roles |
| **Global AI policy** | absent as corpus product | No US/EU/UK/China comparative regime teaching |
| **Benchmarking agents** | partial | Some eval articles; no dedicated agent-benchmark curriculum |

## Orientation themes (explicit expansion)

These are not “another lab blog.” They are **reader infrastructure** the baseline never produced:

1. **AI development timeline** — eras and inflection points (pre-deep learning → deep learning → transformers/LLMs → assistants → agents / multimodal / physical AI), what changed for builders and users.
2. **Market players and roles** — labs, hyperscalers, open-weight ecosystems, startups, chip/infra, enterprises, governments; what each *does* in the stack.
3. **Global AI policy** — US / EU / UK / China (and related) bills, frameworks, safety debates, contested issues.
4. **Benchmarking agents** — major agent benchmarks, what they measure, leaderboard failure modes, good eval practice.

## Gap → source strategy (summary)

Full rationale in [`sources.md`](sources.md). Mapping:

| Gap cluster | Primary new sources |
|-------------|---------------------|
| Evals science / agent benchmarks / alignment practice | Anthropic News & Research |
| Health, education, multimodal research applications | Google Research Blog |
| Hardware beyond chips, robotics systems, multimodal serving | NVIDIA Technical Blog; Epoch AI |
| Compute economics, scaling facts, chip geography | Epoch AI |
| Asia/China, export controls, AI governance geopolitics | CSET (Georgetown) |
| Broader tech/society + robotics/systems journalism | IEEE Spectrum AI |
| Privacy law & ADM regulation (supporting) | Future of Privacy Forum |
| Timeline + market map + policy anchors | Stanford HAI AI Index; NIST AI RMF; EU AI Act materials; UK AI regulation; CSET/Epoch |

## What this gap-fill will *not* re-do

- Re-fetch of already-processed IBM / Sequoia / OpenAI / Hugging Face / DeepMind / AWS items (except light citation for gap checks).
- Blocking on AL-8’s video expansion.

## Success criteria for this workstream

- Audit + source rationale published (`coverage-gaps.md`, `sources.md`).
- Technical gap-fill folders with teaching articles + per-source `index.md` from ~50–100 processed items each where listings allow.
- Dedicated theme folders: `ai-timeline/`, `market-players/`, `global-policy/`, `agent-benchmarks/` with indexes.
- Machine inventory at `/cursor/stores/self/internal/gap-fill-inventory.json`.
