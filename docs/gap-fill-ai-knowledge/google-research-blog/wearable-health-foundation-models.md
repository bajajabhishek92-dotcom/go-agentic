# Wearable Health Foundation Models: SensorFM and GlucoFM

Billions of wearables stream heart rate, motion, SpO₂, temperature, and sleep for weeks. Labels are sparse; raw minutes are not. The foundation-model move for wearables is the same as for language: **pretrain on unlabeled longitudinal signals**, then specialize. SymptomAI’s Fitbit correlations hint at the payoff when conversations meet physiology.

## SensorFM: population-scale sensor representation

SensorFM is framed as a large sensor foundation model pretrained on on the order of **a trillion minutes** of multimodal aggregates from millions of consented users across devices and geographies. Inputs are minute-level features from PPG, accelerometry, EDA, skin temperature, and altimetry over 24-hour windows. Self-supervised reconstruction (building on LSM-2-style ideas) learns structure without clinical labels first. Downstream: a general interface over wearable health data rather than a pile of single-task classifiers.

## GlucoFM: continuous glucose as its own foundation problem

Continuous glucose monitoring (CGM) is dense, personal, and clinically consequential. A CGM foundation model targets zero-shot / few-shot forecasting and risk patterns without retraining a bespoke model per clinic. The lesson transfers: treat high-rate physiological streams as foundation modalities, not spreadsheet columns.

## Biomarker prioritization as a product layer

Wearable studies drown in candidate biomarkers. An AI prioritization tool that ranks candidates from sensor data is the *analysis* layer on top of representations—useful when scientists need triage, not when patients need a diagnosis button.

## Design cautions

- Consent, de-identification, and geographic coverage are part of model quality.
- Device heterogeneity is a feature of pretraining, not an afterthought.
- Clinical claims need clinical endpoints; wellness correlations are not diagnoses.
- Serving and on-device constraints differ from cloud LLM FMs—measure them explicitly.

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Takeaways

- Wearable FM work reframes personal health ML from labeled vignettes to self-supervised physiology at scale.
- Attach clinical tasks carefully after representation learning.
- CGM deserves its own foundation treatment.
- Biomarker prioritization is analysis UX on top of FMs—not a consumer diagnosis product.

**Sources**

- [SensorFM: Towards a general intelligence and interface for wearable health data](https://research.google/blog/sensorfm-towards-a-general-intelligence-and-interface-for-wearable-health-data/)
- [GlucoFM: Foundation model for continuous glucose monitoring](https://research.google/blog/glucofm-foundation-model-for-continuous-glucose-monitoring/)
- [An AI tool for prioritizing candidate biomarkers from wearable sensor data](https://research.google/blog/an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data/)
