# The EU AI Act: Risk Tiers in Practice

The EU AI Act (Regulation 2024/1689) is the first comprehensive, binding horizontal AI law. The European Commission’s digital-strategy materials describe it as a **risk-based** framework: most systems face few or no new rules; a defined set of practices is banned; high-risk uses face strict duties; transparency rules cover chatbots and synthetic media; and general-purpose AI (GPAI) models get layered obligations, with extra duties for systemic-risk models.

## Why the EU chose risk tiers

The Commission’s rationale is familiar: AI can solve problems at scale, but opacity and automated decisions can unfairly deny loans, jobs, or benefits in ways existing law only partly covers. Rather than license every model, the Act concentrates legal energy where **health, safety, and fundamental rights** are most exposed.

Supporting initiatives—the AI Pact (voluntary early compliance), AI Factories, innovation packages, and an AI Act Service Desk—aim to ease transition without abandoning the binding core.

## The four risk levels

**Unacceptable risk (prohibited practices).** The Act bans a list of practices the Commission summarizes as nine categories, including harmful manipulation, exploitation of vulnerabilities, social scoring, certain predictive policing uses, untargeted scraping to build facial-recognition databases, emotion recognition in workplaces and schools, some biometric categorisation, real-time remote biometric ID for law enforcement in public spaces (with narrow exceptions context in the wider regime), and specified non-consensual intimate/CSAM generative uses. Several prohibitions applied from February 2025; Commission guidelines clarify definitions and scope.

**High risk.** Use cases that can seriously affect rights or safety—critical-infrastructure safety components, education access decisions, employment tools, credit scoring, certain biometric systems, law enforcement and migration tools, justice administration, and more—trigger heavy obligations before market placement (phased, with major high-risk duties described as applying from December 2027 in Commission explainers): risk management, data governance, logging, documentation, deployer information, human oversight, robustness, accuracy, and cybersecurity. Providers and deployers share a lifecycle of conformity, monitoring, and incident reporting under market surveillance.

**Transparency risk.** Users must know when they interact with AI (e.g., chatbots); generative providers face AI-content identifiability rules; deepfakes and some public-interest text need clear labeling. Transparency provisions are timed separately (Commission materials cite August 2026 for key transparency rules).

**Minimal or no risk.** Spam filters, AI in games, and most current applications stay lightly touched by the Act itself.

## GPAI: regulating the foundation layer

Because general-purpose models underpin many downstream systems, the Act adds provider duties on transparency and copyright-related documentation, with **systemic-risk** GPAI facing assessment and mitigation expectations. Commission guidelines and codes of practice (including safety-related codes discussed in CSET/EU coverage) are meant to make those duties operational. GPAI rules’ effectiveness dates (Commission: August 2025 for core GPAI rules) matter for global providers who serve EU users.

## Contested edges

- **Definition of an AI system** and of high-risk annex categories—guidance documents exist precisely because borderline products fight classification.
- **Innovation vs compliance cost** for startups and open-source providers.
- **Extraterritorial reach**—non-EU providers placing systems on the EU market.
- **Overlap with GDPR** and product-safety law—multiple regimes can apply to one stack.
- **Enforcement capacity** of national authorities and the AI Office.


## Provider vs deployer duties

The Act’s practical bite often appears in the split between **providers** (who place systems on the market) and **deployers** (who use them). High-risk deployers still owe human oversight and monitoring; providers owe conformity evidence, documentation, and quality management. Foundation-model providers face GPAI transparency and, where systemic risk applies, assessment duties even when they do not control the final high-risk use case. Contractual flow-downs—who supplies the technical file?—become a major enterprise negotiation topic.

## Codes of practice and the AI Pact

Because legislation is sparse on engineering detail, Commission guidelines and GPAI codes of practice do real work. The AI Pact invites early voluntary alignment. CSET’s attention to EU AI safety codes reflects how much “the Act” in practice equals “the Act + soft instruments.” Firms that only read the regulation text miss the operational layer.

## Overlap with GDPR and product safety

A hiring model can be high-risk under the AI Act *and* engage GDPR automated-decision and special-category rules *and* product-safety duties if embedded in machinery. Compliance programs need crosswalks, not parallel silos—NIST-style crosswalk thinking helps even for EU stacks.


## Timeline discipline for engineering

EU obligations phase in. Teams should map engineering milestones to legal dates: prohibited-practice reviews, GPAI documentation, transparency/labeling for synthetic media and chatbots, then high-risk conformity evidence. Waiting until the high-risk date to start logging and oversight design is a common failure. Treat the Act’s calendar as a project plan input beside model launches.

## Takeaways

- Learn the Act as **prohibitions + high-risk duties + transparency + GPAI**, not as “Europe banned AI.”
- Classification drives cost; invest early in use-case mapping and logging/oversight design.
- GPAI rules mean **model providers**, not only app makers, are in scope.
- Watch Commission guidelines and codes—they operationalize the statute’s ambiguous edges.

## Sources

- [EUR-Lex — Regulation (EU) 2024/1689 (AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [European Commission — Regulatory framework for AI (AI Act)](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [CSET — AI Safety under the EU AI Code of Practice](https://cset.georgetown.edu/article/eu-ai-code-safety)
- [CSET — AI Governance at the Frontier](https://cset.georgetown.edu/publication/ai-governance-at-the-frontier)
- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) (crosswalk thinking for GDPR/product-safety overlaps)
- [Stanford HAI — 2025 AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report) (governance chapter context)
- Sibling teaching: [CSET Georgetown](../cset-georgetown/index.md) · [comparing regimes](comparing-ai-governance-regimes.md)
