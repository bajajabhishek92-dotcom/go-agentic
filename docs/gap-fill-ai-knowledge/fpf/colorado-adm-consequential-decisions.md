# Colorado’s ADM Act: Consequential Decisions and Human Involvement

In May 2026 Colorado enacted SB 26-189—the **Automated Decision-Making Technology (ADMT) Act**—repealing and replacing the earlier Colorado AI Act (SB 24-205). Effective **1 January 2027**, it sets duties for developers and deployers when ADMT **materially influences consequential decisions**, plus consumer rights to notice, explanation, data access/correction, and meaningful human review after adverse outcomes. FPF’s October 2026 comments on the Department of Law’s interim draft rules show where implementation will make or break the statute: **scope** (what counts as covered ADMT) and **developer→deployer information flow**.

## What the statute tries to do

Developers must provide a general statement on covered ADMT—intended uses and known limitations. Deployers must notify and explain uses in consequential decisions and honor post-adverse-decision human review. The Attorney General’s Department of Law opened formal rulemaking in August 2026 to clarify and implement SB 26-189 alongside the Colorado Chatbot Safety Act (HB 26-1263). After an initial comment round, the Department released an updated interim draft on October 6, 2026 covering covered technologies, developer documentation, deployer transparency, and consumer rights.

That pairing matters pedagogically: consumers experience one product stack (chat, scoring, recommendations), while statutes split “chatbot safety” from “ADM for consequential decisions.” Rulemaking is where the split becomes operable checklists—or a paper maze that protects neither consumers nor firms. FPF frames its comments as promoting interoperability, clarifying compliance obligations, and supporting meaningful transparency and human oversight—building on FPF’s *Updated Best Practices for AI and Workplace Assessment Technologies*.

## FPF’s first fix: keep the human-involvement test clean

The October 6 interim draft floated **six factors** for whether an ADMT output was only a *de minimis* factor in a consequential decision (the gateway to “material influence” and thus coverage). FPF urges keeping the first four—centered on **actual human involvement**:

1. Did a decision-maker **review** the ADMT output?
2. Did they **independently analyze** other relevant information?
3. Did they have necessary **subject-matter understanding**?
4. Did they have **authority** to make or change the decision?

Those align with California ADMT regulations and Colorado’s existing Privacy Act regs. FPF recommends dropping the last two factors—organizational policies and the volume/type/complexity of personal data processing—because they describe context around involvement rather than involvement itself. Policies can be **supporting evidence** (as elsewhere in the draft, e.g., proposed Rule 6.1(B)); data-complexity tests risk duplicating the statute’s personal-data element and shifting focus from whether a human actually judged.

The teaching point is structural: “material influence” without a clean human-involvement test becomes either everything or nothing. If paperwork proxies (policy manuals, data-volume metrics) decide coverage, sophisticated firms can paper-train systems into *de minimis* status while still steering outcomes; if every ADMT touch is covered regardless of real review, the statute becomes unadministrable. The four retained factors ask a factual question product and compliance teams can evidence: was there genuine human judgment with power to change the outcome?

## FPF’s second fix: close the developer–deployer gap

Draft rules require developer documentation on intended uses, known limitations, and known risks—but deployers must explain systems to consumers. Gaps leave deployers accountable for what they cannot independently assess. That is a classic AI-supply-chain failure mode: the party facing the individual lacks the facts, while the party with the facts faces no consumer.

Drawing on FPF’s best-practices work, the comments recommend:

- Tie developer docs to **what deployers need** to meet statutory duties (to the extent known to the developer).
- Clarify “known limitations/risks” to include performance limits, intended user populations, and reasonably foreseeable risks from testing.
- Specify **ongoing disclosure** when material updates, intended-use changes, or new material risks appear.
- Encourage standardized formats (model/system cards) so technical facts travel consistently.

Without those links, deployer notices become marketing paraphrases; human-review rights become theater when reviewers lack performance envelopes or known failure modes. Standardized cards are not bureaucracy for its own sake—they are the interoperability layer between vendors and operators across states that will copy Colorado’s pattern.

## Why consequential-decision framing matters

Colorado’s rewrite away from the earlier AI Act experiment is itself a teachable move: governance keyed to **whether a person’s life chances were steered by automation** and what recourse they have, rather than to model architecture or a general “AI ethics” pledge. That pattern generalizes across ADM regimes. Product teams should inventory which features materially influence hiring, credit, housing, education, insurance, healthcare access, or similar consequential outcomes—and which are merely assistive with real human override authority.

Effect timelines and AG rulemaking turn the statute into operational checklists: scope of covered ADMT, documentation alignment between developers and deployers, and how human review must work after adverse decisions. Interoperability with California and Colorado privacy ADMT concepts reduces dual-compliance tax when the same system ships nationwide.

## Teaching ADM rulemaking

- “Material influence” without a clean human-involvement test becomes either everything or nothing.
- Transparency duties fail if the party facing the consumer lacks the facts.
- Interoperability with California/Colorado privacy ADMT concepts reduces dual-compliance tax.
- Pair ADM rules with chatbot rules when both move in the same docket—consumers experience one stack.
- Prefer evidence of real review authority over organizational-policy proxies for *de minimis* claims.
- Treat model/system cards and update notices as compliance infrastructure, not optional vendor polish.


## Why repeal-and-replace matters

SB 26-189’s replacement of the prior Colorado AI Act shows state AI law as a live draft, not a finished constitution. Counsel and engineers should version-pin which duties apply on which date, and treat rulemaking comments (like FPF’s) as the real battlefield for operability. Consequential-decision statutes live or die on whether “human involvement” means a person who can change the outcome—or a signature line under a model score.

## Takeaways

- Colorado’s ADMT Act is a **consequential-decision governance** statute, not a general AI ethics pledge.
- Scope should turn on **real human judgment**, not organizational paperwork proxies.
- Developer documentation must be **deployer-operable** or consumer explanations become fiction.
- Standardized cards and update duties are practical transparency infrastructure.
- Watch AG interim drafts as closely as the statute text—implementation defines the product duties.

**Sources**

- [FPF Submits Comments to Inform Colorado Automated Decision-Making (ADM) Act Rulemaking](https://fpf.org/blog/fpf-submits-comments-to-inform-colorado-automated-decision-making-adm-act-rulemaking/)
