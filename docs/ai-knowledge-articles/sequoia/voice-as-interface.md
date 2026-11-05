---

title: Voice as a Primary Interface for AI
slug: a-voice-as-interface
type: article
corpus: Sequoia
corpus_key: sequoia
cluster: Physical AI, Voice & Autonomy
cluster_id: physical-ai
tags:
- article
- corpus/sequoia-ai-knowledge
- cluster/physical-ai
keywords:
- voice-as-primary-interface
- sequoia
- physical-ai
- cluster-physical-ai
- corpus-sequoia-ai-knowledge
- article
- voice
- interface
- primary
- staniszewski
- mati
- elevenlabs
- www.youtube.com/watch
- https
summary: "ElevenLabs’ Mati Staniszewski argues that voice is becoming a fundamental interface layer—not a niche accessibility feature bolted onto chat. As generative speech crosses the uncanny valley across languages, products can meet users where emotion, speed, and hands-free work already live: calls, games, cars, clinics, warehouses, and creative media."
related:
- Voice as Primary Interface
path: sequoia/voice-as-interface.md
---

# Voice as a Primary Interface for AI

ElevenLabs’ Mati Staniszewski argues that voice is becoming a **fundamental interface layer**—not a niche accessibility feature bolted onto chat. As generative speech crosses the uncanny valley across languages, products can meet users where emotion, speed, and hands-free work already live: calls, games, cars, clinics, warehouses, and creative media. The strategic bet is infrastructure for voice agents and real-time translation, not another one-off demo voice.

## Definition: voice as interface, not feature

An interface is the primary way humans and systems exchange intent. Keyboards and touchscreens dominate knowledge work; voice has always dominated human-to-human work. “Voice as interface” means the product’s main loop is listen → reason/tool → speak (and interrupt), with text as a secondary channel—not TTS sprinkled on a form.

ElevenLabs stayed laser-focused on audio while foundation-model labs chased broad multimodal. That specialization—transformers and diffusion applied to speech, with scarce audio talent hired globally remote—produced usable narration, dubbing, agents, and consumer virality (from creators to Fortnite’s Darth Vader). Focus is part of the definition: voice quality, latency, and reliability are hard enough that treating speech as a side quest usually loses.

## Why voice works now

Three product thresholds matter. **Quality** must clear different bars for audiobook narration, dubbing, and agent delivery. **Latency** must be low enough for conversation; without it, you do not have an agent—you have a voicemail. **Reliability** must hold at scale (millions of concurrent players in a game title, not a conference-room demo).

Prosumer-first distribution accelerated learning: releasing models to creators surfaced unexpected use cases (viral videos, “no face” channels, authors pasting whole manuscripts) and created bottom-up demand that later pulled enterprise. Media peers normalizing AI-native audio and video (music, generative video) further reduce user stigma. Real-time translation—keeping speaker identity while changing language—points at a world where language barriers shrink inside the same voice channel.

## Mechanism: full stack around the model

Breakthrough weights are not a product. Staniszewski’s stack story is the teaching mechanism: voice coaching and emotional labeling, proprietary data pipelines (how something should be said, not only what was said), speech-to-text paired with TTS, developer tooling, and integrations into telephony (e.g. Twilio) and CRMs so agents live inside existing workflows. Researchers sit close to deployment for tight feedback loops.

Conversational agents need interruption and turn-taking: users barge in, correct, or abandon. Quality-versus-latency tradeoffs are explicit product knobs. Voice without tools is theater; voice plus an agent harness (retrieval, CRM actions, payments, ticketing) is a product. Creative workflows (dubbing, localization) and agent workflows share infrastructure but not the same SLOs—do not ship one latency budget for both.

In the rocketship conversation with Lovable’s Anton Osika, the shared pattern is rapid product iteration under foundation-model churn: stay nimble when a new model drops, integrate within hours, and keep depth in the domain (voice or software generation) rather than becoming a thin wrapper. Scale is research *and* deployment ops.

## Failure modes

- **Latency theater.** Beautiful samples in a studio; multi-second gaps on a live call. Conversational UX dies first.
- **Voice without agency.** Reading FAQ scripts aloud does not justify the interface; users expect actions.
- **Consent and clone risk.** Cloned voices are brand and regulatory hazards. Safety mechanisms that help good actors and limit misuse are part of the product, not a policy PDF after launch.
- **One-size quality.** Narration thresholds ≠ agent thresholds ≠ dubbing thresholds. Mixing them burns trust.
- **Model-only competition.** Hyperscalers can ship speech models; switching costs come from data pipelines, coaching, integrations, and reliability at scale.
- **Ignoring interruption.** Systems that cannot handle barge-in feel broken even when WER/MOS scores look fine.

## Builder practices

Treat voice as a systems problem: capture, VAD, streaming ASR, LLM/tools, streaming TTS, telephony, observability. Instrument time-to-first-audio and time-to-interrupt as primary KPIs. Ship consent flows and watermarking/abuse tooling where cloning is offered. Use prosumer or internal dogfood to find weird use cases before enterprise RFPs freeze the wrong roadmap. Pair every voice surface with a tool policy: what the agent may say *and* do.

### Practice checklist

- Pick one primary mode (agent call, narration, dubbing) and set explicit quality/latency/reliability targets for it.
- Measure time-to-first-byte/audio and barge-in success; gate launches on those, not only MOS.
- Wire tools (CRM, calendar, payments) before polishing persona; refuse “talking brochure” scope.
- Ship consent, auth, and misuse controls with any clone or custom-voice feature.
- Build data loops for emotion/prosody labeling—not only transcripts.
- Integrate into the channels users already inhabit (phone, game, browser), not only a web widget.
- Separate creative vs conversational SLOs and model variants.
- Plan for foundation-model shocks: swap path within days without rewriting the harness.

### Sources

- [ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for AI](https://www.youtube.com/watch?v=ZNzYN2jyVTU)
- [Why Voice Will Be the Fundamental Interface for Tech ft ElevenLabs’ Mati Staniszewski](https://www.youtube.com/watch?v=EWXTZZzL1vg)
- [Scaling AI Rocketships: ElevenLabs’ Mati Staniszewski & Lovable’s Anton Osika](https://www.youtube.com/watch?v=TqAgejIX7uU)
