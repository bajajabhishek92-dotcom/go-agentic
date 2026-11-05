# AI-Resistant Evals and Independent Evaluators

As models improve, the same tests that once separated strong humans (or strong models) stop discriminating. Anthropic’s recent work on hiring take-homes, third-party risk assessment, and “embedded” evaluators shares one lesson: **evaluation is an adversarial, institutional problem**, not a static benchmark list.

## When capable models defeat your test

A technical take-home that once ranked performance-engineering candidates became useless once Claude matched top applicants under the same time limits. Redesigns that merely add difficulty often fail for predictable reasons:

- Models excel at **searchable, decomposable** optimization problems.
- Giving humans “unlimited time” still works sometimes—but that is a different exam than a timed screen.
- Each model generation forces a redesign; signal decays on a capability curve, not a calendar.

Design moves that restore discrimination tend to be unusual: private or non-public artifacts, interactive constraints models cannot freely explore, scoring that rewards *process under uncertainty*, and problems where the best humans still beat models given enough time. The durable idea is **AI-resistance as a first-class eval property**—assume the examinee (human or model) has frontier assistance and design accordingly.

## Independent evaluators need access, not press releases

Frontier risk assessment requires information that cannot all be public (training details, safeguard internals, compute). The bank-supervision analogy Anthropic uses is instructive: outsiders know less than the institution, so **resident examiners** get deep access and publish reasoned conclusions.

Useful independent evaluators need four traits:

1. **Expertise** — including failure modes like alignment faking and eval gaming.
2. **Independence** — no equity stake or operational dependence that warps incentives.
3. **Access** — models *and* training/safeguard process visibility, not API demos alone.
4. **Freedom to publish** — evidence and conclusions the company cannot quietly bury.

METR-style employee-comparable access, SecureBio-style domain evaluators, and similar arrangements are attempts to close the gap between what the lab knows and what outsiders can verify.

## Embedded evaluation: inside without replacing accountability

“Embedded” evaluators go further than periodic external audits: they sit inside the company with employee-like access, watch models take shape, talk to staff, and report blind spots. Funding is unsettled—labs may pay directly today while arguing for pooled or government funding later—but the governance claim is clear: **external presence makes lab accountability more verifiable; it does not transfer responsibility**.

Multiple evaluator organizations at once (nonprofit + commercial + domain specialist) reduce single-point capture and create cross-checks.

## Connecting the dots across the gap-fill corpus

This article sits in a multi-source teaching set. Cross-link it when you teach:

- **Compute and factories** (Epoch chip geography, NVIDIA DSX/recovery/cooling) when the bottleneck is physical capacity, power, or utilization rather than model cleverness.
- **Agents and harnesses** (Anthropic sandboxes, NVIDIA NeMo failure loops, OpenShell/Sentry) when the bottleneck is tool privilege, traces, or runtime policy.
- **Governance and privacy** (CSET actor maps, FPF ADM/chatbot/biometric drafts, Google contextual agent privacy) when the bottleneck is legal scope, preemption, or appropriate information flow.
- **Science and integrity** (Epoch acknowledgment trends, Spectrum AI-slop, Google Chain-of-Evidence, wet-lab grounding) when the bottleneck is evidence, disclosure, or physical verification.

Assign one cross-folder compare-and-contrast: same concept, two source cultures (lab blog vs policy center vs engineering journalism). Students should leave able to explain *why* the framings differ—not only recite facts from one page.

## Takeaways

- Treat eval obsolescence as expected; redesign for AI-resistance, not nostalgia for last year’s hard problem.
- Independent assessment without deep access is theater; deep access without publish rights is capture risk.
- Embedded evaluators are a supervision pattern—standards for access and reporting are still being invented.

**Sources**

- [Designing AI-resistant technical evaluations](https://www.anthropic.com/research/AI-resistant-technical-evaluations)
- [An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators)
- [Partnering with Accenture on embedded evaluation](https://www.anthropic.com/news/accenture-embedded-evaluation)
