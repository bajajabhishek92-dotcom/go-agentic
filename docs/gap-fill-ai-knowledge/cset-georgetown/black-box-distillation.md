# Black-Box Distillation: How Capability Crosses API Boundaries

**Distillation** trains a student model on a teacher’s outputs. When the teacher is a proprietary API, the process is **black-box**: attackers or competitors never see weights—only prompts and completions. White-box distillation, by contrast, uses logits, activations, or other internals that closed APIs withhold. CSET’s October 2026 explainer (Miller & Shea-Blymyer) walks the pipeline end-to-end so legislation and export debates can distinguish technique from rumor—especially claims that Chinese labs adversarially distilled from US proprietary models.

## Benign compression vs adversarial transfer

For years, distillation mostly meant **compressing** a large teacher into a cheaper student. The same machinery now transfers capability **regardless of student size**: synthetic teacher answers become post-training fuel. Controversy spiked in early 2025 when OpenAI accused DeepSeek of terms-of-service-breaking distillation from ChatGPT; similar allegations followed against other Chinese labs. CSET’s analyst-facing findings:

1. Campaigns can aim to **transfer capability while obfuscating origin**, often via third-party access rather than obvious domestic accounts.
2. Without public detail on **seeds and steering strategies**, many proposed detectors remain hard to validate.
3. Synthetic volumes can be a **sizable fraction** of some students’ post-training mixes—yet absolute token counts stay ambiguous because teacher labs rarely disclose campaign accounting.
4. The last mile—**how much the student actually gains**—is opaque without teacher-lab transparency on distillation-impact research.

## Five practical steps (and where policy can bite)

CSET’s process map is the teaching spine:

1. **Define the objective** and pick student/teacher(s)—compress vs transfer changes which students look attractive.
2. **Collect seed data** that represents the target skill (tool use, coding, math). Published work ranges from ~175 curated pairs to ~210k math examples; seed quality drives elicitation quality.
3. **Steer** the teacher toward desired formats and difficulty.
4. **Elicit** synthetic completions at scale through APIs.
5. **Train** the student (SFT, preference methods, continued pretraining mixes).

Detection hinges on seeds: reused public datasets make classifiers more feasible; custom or student-as-seed loops make them harder. Steering and multi-hop prompting further blur stylistic fingerprints. API abuse monitoring, canaries, rate anomalies, and output watermarks are the available levers—and each has honest limits when inputs are unknown.

## Open questions that should stay open

CSET does not pretend the evidence settles geopolitics. Is adversarial distillation free-riding that substitutes for indigenous talent, or only **marginal uplift** for labs that could train capable models anyway? Can detection work at scale, or is distillation inherent whenever frontier APIs are online? Is the right frame **theft / industrial espionage** (government intervention) or **ToS violation** (company enforcement)? Policymakers need the process literacy first; those judgments come second.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.

## Takeaways

- Black-box distillation is a **capability diffusion channel** through APIs, not a exotic exotic exploit.
- Analysts should demand **token accounting**, seed/steering detail, and eval evidence—not accusation headlines alone.
- Defenses need measurable signals **and** published limits; teacher-lab transparency is a defense public good.
- Separate **compression** (efficiency) from **adversarial transfer** (competitive/geopolitical diffusion) when drafting statute.

**Sources**

- [How Black-Box Distillation Works](https://cset.georgetown.edu/article/how-black-box-distillation-works)
