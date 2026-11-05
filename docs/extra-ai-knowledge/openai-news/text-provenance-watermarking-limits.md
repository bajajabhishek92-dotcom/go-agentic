# Text Watermarking: What Provenance Can and Cannot Prove

Regulators increasingly require machine-readable signals that text was AI-generated. Statistical text watermarks (e.g. biasing token choices so a detector can recognize a signature) are one response—but they are **early technology with sharp limits**. Teaching those limits matters as much as shipping the feature.

## How statistical text watermarks work (intuitively)

A scheme like textGrain embeds an invisible signal in word choice. A detector estimates whether a passage carries that signal. Quality benchmarks can look unchanged with watermarking on, yet **detection reliability in the wild** is a different question.

## Failure modes you must design for

- **Length and constraint.** Short text and highly constrained domains (e.g. mathematics) leave little freedom to imprint a signal; detection rates fall sharply versus freer prose of equal length.
- **Editing.** Light synonym replacement can collapse detection (e.g. ~10% word swaps cutting detection from ~90% toward ~60%; ~25% swaps into the teens). Translation and aggressive rewrite are similar threats.
- **Error types.** False positives (flagging human text) and false negatives (missing watermarked text) both matter; operating points are trade-offs, not magic.

Because of this, detector access may reasonably start with researchers and expert organizations rather than a public “gotcha” button.

## What a positive (or negative) detection does *not* mean

A watermark is a narrow technical signal. It does **not**:

- Measure how much human judgment or creativity contributed.
- Establish ownership, legality, required disclosure, or responsibility.
- Identify the user, account, or prompt.
- Verify truthfulness or harmlessness.
- Prove human authorship when absent—text may be too short, edited, from another provider, or predate watermarking.

## Layered provenance beats a single trick

Pair text approaches with stronger modalities where possible: C2PA Content Credentials, image/audio watermarks (e.g. SynthID), and public verify tools. Credentials record history; watermarks survive some metadata stripping. Policy, abuse detection, and enforcement remain necessary—provenance alone does not police content.

## Deployment posture

Phased rollouts (opt-in API globally; regional defaults where law requires; open technical reports; eventual open-source schemes) reflect uncertainty. Treat watermarking as **one evidence channel** in a trust workflow, not a courtroom oracle.

**Sources**

- [Our approach to EU text provenance rules](https://openai.com/index/eu-text-provenance)
