title:: Speech Evaluation Beyond Aggregate WER
type:: article
cluster:: trust-evals
cluster-name:: Trust, Evaluation & Decision Quality
corpus:: extra-ai-knowledge/huggingface-blog
tags:: #article #corpus/huggingface-blog #cluster/trust-evals
node-id:: a-speech-evaluation-beyond-averages
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/huggingface-blog/speech-evaluation-beyond-averages.md
original-label:: Speech Evaluation Beyond Aggregate WER

- #cluster/trust-evals
- #corpus/huggingface-blog
- blurb:: Speech models ship faster than evaluations keep up. Two Hugging Face Audio themes matter for teaching: **scalable objective TTS metrics**, and **ASR tests that expose who fails**—not just a single average word error…

## Relations

- example of:: [[Benchmark Signal Disentanglement]] — Discussed in article
- related to:: [[Voice as Primary Interface]] — Discussed in article

## Article

- Speech models ship faster than evaluations keep up. Two Hugging Face Audio themes matter for teaching: **scalable objective TTS metrics**, and **ASR tests that expose who fails**—not just a single average word error rate.

## TTS: arenas don’t scale; objective proxies do

- Human preference (MOS/MUSHRA, arena Elo) remains the gold standard, but vote collection takes weeks while thousands of open TTS models appear on the Hub. Open-source models are underrepresented on commercial arenas partly because hosting them is operationally harder than adding an API key.

- The **Open TTS Leaderboard** scores open models in hours with complementary metrics:

- Table:
  - `| Axis | Proxy |`
  - `|------|--------|`
  - `| Intelligibility | WER/CER via a strong ASR (for example Qwen3 ASR) on generated audio |`
  - `| Speed | Batched RTFx; streaming **TTFA** (time-to-first-audio) at batch 1 |`
  - `| Voice cloning | Speaker embedding cosine similarity (SIM) to a reference |`

- English leadership does not imply multilingual leadership—toggle languages and cloning modes. Objective metrics do **not** replace naturalness/expressiveness preference; they triage which models deserve human listening. Pair leaderboard numbers with a Listen tab for human votes.

## ASR: design the axes you care about

- Aggregate WER can look fine while failing whole populations. Racial, gender, age, and accent disparities are well documented; classic leaderboard sets rarely carry speaker metadata. Voice Arena’s **Monsoon** sets for Indian English and Hindi join the Open ASR Leaderboard with deliberate variance:

- Geography (hundreds of districts), age, gender, devices, acoustics, speech rate/style
- Many speakers, short clips—**no voice or handset owns the score**
- Hindi **lattices** of accepted orthographic variants instead of punishing valid spellings
- Private held-out splits and anti-gaming hygiene (no evaluated system writes the references)
- Related work on **benchmark optimization** in ASR asks how much models reproduce reference quirks versus truly hearing audio—another reason not to trust a lone WER.

## Practice checklist

- For TTS shipping decisions: report intelligibility + latency (+ SIM if cloning), then human preference on shortlists.
- For ASR: demand demographic and device metadata; disaggregate WER; prefer speaker-diverse hours over few long talkers.
- Keep private eval splits; watch for models overfitting public leaderboard text.
- Treat “Global South” coverage as an engineering requirement, not a press release—otherwise products only improve where data already exists.
- **Sources**

- [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
- [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
- [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)

## Navigation

- Cluster:: [[Cluster - Trust, Evaluation & Decision Quality]]
- Corpus:: [[Corpus - Hugging Face Blog]]
- [[Clusters]]
- [[Contents]]
