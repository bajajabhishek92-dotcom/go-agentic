---

title: 'Voice AI Latency Budgets: Sub-100ms Speech and Measured Autoscaling'
slug: a-voice-ai-latency-budget
type: article
corpus: AWS ML Blog
corpus_key: aws-ml-blog
cluster: Physical AI, Voice & Autonomy
cluster_id: physical-ai
tags:
- article
- corpus/aws-ml-blog
- cluster/physical-ai
keywords:
- voice-as-primary-interface
- generative-ai-cost-operating-model
- aws-ml-blog
- physical-ai
- cluster-physical-ai
- corpus-aws-ml-blog
- article
- latency
- tts
- speech
- voice
- autoscaling
- sub-100ms
- measured
summary: "Natural conversation has a temporal window. If synthesized speech arrives outside human turn-taking expectations, users hear awkward pauses, trust drops, and contact-center or sales agents lose the floor. Voice AI is therefore an infrastructure latency problem as much as a model-quality problem."
related:
- Generative AI Cost Operating Model
- Voice as Primary Interface
path: extra/aws-ml-blog/voice-ai-latency-budget.md
---

# Voice AI Latency Budgets: Sub-100ms Speech and Measured Autoscaling

Natural conversation has a temporal window. If synthesized speech arrives outside human turn-taking expectations, users hear awkward pauses, trust drops, and contact-center or sales agents lose the floor. Voice AI is therefore an **infrastructure latency problem** as much as a model-quality problem.

## Why transformers struggle at the edge of perception

Many TTS stacks wait for a full text sequence before audio. Quality and latency trade off. Architectures that process audio as evolving state—**state space models (SSMs)** with fixed-size hidden state and token-by-token recurrence—are a better fit for streaming speech: constant memory, native streaming, long-range dependencies without quadratic attention cost. Production systems report ~90ms time-to-first-audio-byte as a realistic “feels human” target for TTS, with STT that emits partial transcripts and semantic end-of-turn detection so the LLM can start thinking before the user fully stops speaking.

## Close the “wait for the whole answer” gap

Even with a fast TTS model, a common agent bug remains: the LLM generates a multi-paragraph reply, and TTS only starts after the full string arrives. Users hear silence for seconds while the answer already exists in partial form.

**Fix:** stream **sentence by sentence** (or similar phrase boundaries) from the agent to TTS as soon as each unit is complete. Host a small TTS model on a real-time GPU endpoint if you need cost control; expose both unary streaming and bidirectional WebSocket-style routes when the transport requires it. First audio can start while later sentences are still being generated.

## Stop guessing autoscaling targets

TTS endpoints fail silently when scale targets are vibes:

- Too conservative → GPUs idle on every invoice.
- Too aggressive → concurrency exceeds what one instance can serve inside the SLO; queues explode exactly when call volume peaks.

Replace guesses with two measurements on the **live** endpoint:

- **Q_max** — highest concurrency one instance sustains before breaching the latency SLO.
- **T_total** — end-to-end scale-out time (including cold start).

Derive scale-out threshold, scale-in threshold, and cooldowns from those numbers by arithmetic. Re-measure when model, instance type, or SLO changes.

## Deployment constraints

Contact centers, telehealth, and regulated workloads often need inference **in-VPC** with data residency. Marketplace/SageMaker-style private endpoints and careful regional placement matter as much as model choice. Pair low-latency synthesis with accurate reading of numbers, currency, and addresses when the voice stack is order-confirmation critical.

## Takeaway

Budget latency like an SLO: architecture for streaming (SSM or equivalent), sentence-level handoff from LLM to TTS, and autoscaling constants measured from Q_max and T_total—not dashboard defaults.

**Sources**

- [Building ultra-low-latency voice AI applications on AWS](https://aws.amazon.com/blogs/machine-learning/building-ultra-low-latency-voice-ai-applications-on-aws/)
- [Stream low-latency speech from AI agents using Kokoro TTS on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/stream-low-latency-speech-from-ai-agents-using-kokoro-tts-on-amazon-sagemaker-ai/)
- [Stop guessing auto scaling targets for TTS on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/stop-guessing-auto-scaling-targets-for-tts-on-amazon-sagemaker-ai/)
