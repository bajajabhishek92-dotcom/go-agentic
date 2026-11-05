# Nemotron VL: Multimodal Specialized Agents on One Backbone

Always-on enterprise agents mix document reading, screenshots, policy checks, and tool calls. A single request can involve reading a document, checking information across sources, following company policy, and calling several tools. A text LLM plus a separate VLM forces awkward handoffs and lost context. **Nemotron 3.5 Super VL** targets that job: an open multimodal mixture-of-experts model (120B total parameters, **12B activated per token**) that combines reasoning, instruction following, tool use, and text/image/document/video understanding. NVIDIA reports up to ~5× higher throughput for agentic tasks versus other open models in its size category on a single-GPU endpoint (Artificial Analysis Intelligence Index agentic tasks; >600 TPS cited on a Baseten endpoint in the technical blog).

## Why one multimodal backbone

By combining capabilities into one model, teams handle text and visual tasks without deploying separate text and vision-language models or passing task context between them. Example workflow classes called out in the post: coding (test/validate, analyze errors), web research, document intelligence (tables, charts, layouts), cybersecurity triage, and video understanding for search/review/incident analysis. Within a broader model system, Super VL handles specialized multistep work that needs reasoning + tools + multimodal understanding together; smaller models such as Nemotron 3.5 Lightning handle high-volume text tasks; frontier Nemotron 3 Ultra can tackle complex planning and orchestration.

## Specialize the stack you control

Post-train with **NeMo** on proprietary tools, SOPs, and policies. Specialized agents must learn how an organization works—domain terminology, tool interfaces, operating procedures, and policies. **NemoClaw** open blueprints emphasize specialized agents on infrastructure you operate—model, harness, eval, runtime—rather than renting an opaque assistant. NemoClaw is not a competing harness: it assembles a stack around harnesses you may already use (OpenClaw, Hermes Agent, LangChain Deep Agents), combining a tuned open harness, Nemotron open models, NeMo optimization/observability (including NeMo Relay), and **OpenShell** as the secure runtime for files, networks, credentials, and tools.

Fine-tunes that teach **local rules** (not only local languages) are often the real product moat: compliance regimes, internal ticket schemas, and plant SOPs do not live in public pretraining. Companion posts show adapting Nemotron for application-specific terminology, formality, response structure, and escalation rules—e.g., French/Belgian administrative support behaviors via persona-guided synthetic data when real conversations are scarce or restricted.

Customization tooling called out with Super VL includes **NeMo AutoModel** for SFT/LoRA, RL in agentic environments that mirror organizational workflows, and open Hugging Face datasets spanning agentic tool-use, finance reasoning/tool-calling, instruction/chat, long-context transduction/translation, fairness, and dozens of vision-language sets to supplement proprietary data. For multimodal data prep, NeMo Data Designer recipes cover chart QA and long-document understanding; NeMo RL and NeMo Gym support RL and environment-based evaluation. Open weights can deploy in local, data-center, or cloud environments per infrastructure and data-residency needs—see the Super VL usage cookbook.

## Systems implications

- One multimodal context beats fragile multi-model relays on long workflows.
- MoE activation economics matter more for always-on agents than raw parameter count marketing.
- Own the harness + runtime: capability without policy enforcement is a liability in enterprise systems.
- Route by job class: Lightning for volume text, Super VL for multimodal specialized work, Ultra for hard planning—measure cost and reliability per route.
- Treat post-training data (tools, policies, SOPs) as the product differentiator; the backbone is the substrate.

## Teaching specialized multimodal agents

- Inventory which steps need vision vs text-only; avoid paying VL cost for pure text turns when a router can help.
- Build evals on *your* documents, screenshots, and tool schemas—not only public VQA sets.
- Pair model specialization with OpenShell/NemoClaw runtime controls so tool access stays outside the model’s goodwill.
- Document the model-system map (which model owns which job) so ops can scale and debug.

## Takeaways

- Multimodal specialized agents need one context that can see and act—not a relay of partial models.
- MoE activation (12B of 120B) is the efficiency story behind high agentic throughput claims.
- NemoClaw + NeMo + OpenShell is the controllable stack pattern; Super VL is the multimodal reasoner in that stack.
- Local rules and SOPs are the moat; language adaptation alone is insufficient.
- Evaluate on domain trajectories with tools, not only offline multimodal quizzes.

## Sources

- [NVIDIA Nemotron 3.5 Super VL Powers Specialized Agents with Multimodal Reasoning](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)
- [Build Specialized Agents on a Stack You Control with NVIDIA NemoClaw](https://developer.nvidia.com/blog/build-specialized-agents-on-a-stack-you-control-with-nvidia-nemoclaw/)
- [Fine-Tuning NVIDIA Nemotron to Know Local Rules, Not Just Local Languages](https://developer.nvidia.com/blog/fine-tuning-nvidia-nemotron-to-know-local-rules-not-just-local-languages/)
