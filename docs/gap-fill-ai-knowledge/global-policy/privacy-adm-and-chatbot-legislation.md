# Privacy, ADM, and Chatbot Rules: Where AI Law Meets People

Horizontal “AI Acts” grab headlines; much of the law that actually hits product teams arrives through **privacy statutes, automated decision-making (ADM) rules, biometric definitions, and chatbot-specific bills**. Future of Privacy Forum (FPF) documentation is especially useful here because it tracks mechanisms and tradeoffs rather than only announcing that “AI was regulated.”

## ADM: consequential decisions with process rights

Colorado’s Automated Decision-Making Technology Act (SB 26-189), as explained in FPF’s rulemaking comments, replaces an earlier state AI Act experiment with duties keyed to **ADMT that materially influences consequential decisions**. Developers owe general statements of intended uses and known limitations; deployers owe consumer notices and explanations; individuals gain access/correction rights and can request meaningful human review after adverse decisions. Effect timelines and Attorney General rulemaking turn the statute into operational checklists—scope of “covered ADMT,” documentation alignment between developers and deployers, and how human review must work.

That pattern generalizes: ADM laws care less about model architecture than about **whether a person’s life chances were steered by automation** and what recourse they have.

## Chatbots: relational harm and youth safety

FPF’s report *Regulating the Conversation* and follow-on analysis describe why chatbots drew a legislative surge: high-profile litigation alleging harms, plus a desire to move faster than lawmakers did on social media. In 2026 alone, FPF counted well over a hundred chatbot-related bills across dozens of states, with a rapidly growing set of enacted chatbot-specific laws.

Second-wave statutes in California and New York illustrate divergent playbooks (FPF):

- **New York** — broader prohibitions on “unsafe AI companion features” for minors (content and emotionally manipulative interaction categories).
- **California** — governance-heavy approach: risk assessments, independent audits, default parental controls, limits on conversational memory and targeted ads.

Both emphasize age assurance and youth protection; they disagree on whether to **ban feature classes** or **mandate oversight systems**. That split will shape how other states and Congress copy.

## Privacy benchmarks for frontier systems

FPF’s “What Gets Measured Gets Governed” argument connects privacy law to eval science: frontier systems raise memorization, regurgitation, agentic data access, and minimization challenges that lack standardized benchmarks. Without metrics, engineering teams cannot regress privacy properties the way they regress coding ability. Limitations remain—some privacy harms are contextual and resist a single score—but the direction of travel is toward measurable privacy evals alongside capability suites.

## Biometrics and definitional fights

FPF’s biometric legislation commentary (“It’s Just Math”) highlights recurring contests: when is a mathematical representation of a face, voice, or behavior “biometric data,” and which consumer rights attach? Those definitions determine whether multimodal agents that watch or listen inherit heavy consent and retention duties.

## Agents complicate everything

FPF’s agent-taxonomy piece shows lawmakers already drafting “AI agent” bills with incompatible definitions—some relational (acting for a user), some architectural (tools + reasoning). Privacy and ADM regimes built for static models struggle when systems browse, purchase, or message third parties. Expect future rules to borrow from payment authorization, fiduciary duties, and computer-fraud law as much as from model cards.


## Interoperability problems across states

FPF’s Colorado ADM comments emphasize aligning developer disclosures with deployer obligations and promoting interoperability. When each state invents unique notice text, age-assurance thresholds, and audit cadences, users get noise and companies get brittle compliance matrices. That practical friction feeds federal preemption arguments even among people who support strong safeguards—an important political economy detail.

## Litigation as agenda-setter

FPF’s chatbot report ties legislative energy to lawsuits alleging companion-chatbot harms and to regret over slow social-media responses. Litigation narratives shape which duties appear first (crisis protocols, parental controls, memory limits) versus which wait (broader ADM fairness). Hallucination-related court issues FPF maps globally similarly push professional-responsibility rules for lawyers and experts—sectoral privacy/accuracy duties without waiting for AI Acts.

## Building toward measurable privacy

Engineering teams should prototype privacy evals now: memorization tests, minimization checks for agent tools, retention defaults, and access logs for personal data touched by agents. FPF’s thesis that “what gets measured gets governed” predicts that once benchmarks exist, regulators and buyers will demand them—similar to how cybersecurity questionnaires standardized.


## Agents vs chatbots in upcoming drafts

As FPF notes, early “AI agent” bills already disagree on definitions. Product teams should inventory which features look like companion chat, which look like ADM (consequential decisions), and which look like delegated transactional agents—because different bills attach to each. Logging tool actions and data stores touched is preparatory compliance work for whatever definition wins.

## Takeaways

- For many products, **ADM + chatbot + biometric/privacy rules** are the binding AI law today.
- Watch Colorado-style ADM process rights and CA/NY chatbot divergences as templates.
- Invest in **privacy evaluation** as seriously as capability evaluation (FPF).
- Define “agent” carefully in policy responses—taxonomy fights are load-bearing.

## Sources

- [FPF — Colorado ADM Act comments](https://fpf.org/blog/fpf-submits-comments-to-inform-colorado-automated-decision-making-adm-act-rulemaking/)
- [FPF — Chatbot legislation second wave](https://fpf.org/blog/back-in-the-chat-california-and-new-york-take-diverging-paths-in-second-wave-of-chatbot-regulations/)
- [FPF — Regulating the Conversation (chatbot report)](https://fpf.org/wp-content/uploads/2026/09/FPF-U.S.-Chatbot-Regulations-Report-R3.pdf)
- [FPF — Benchmarking privacy in frontier AI](https://fpf.org/blog/what-gets-measured-gets-governed-benchmarking-privacy-in-frontier-ai-development-and-deployment/)
- [FPF — Defining “Agentic”](https://fpf.org/blog/defining-agentic-why-we-need-a-shared-taxonomy-for-ai-agents/)
- [FPF — Biometric data definition fights](https://fpf.org/blog/its-just-math-recent-legislative-trend-reignites-debate-about-the-bounds-of-biometric-data/)
- Sibling teaching: [FPF folder](../fpf/index.md) · [US frameworks article](us-frameworks-nist-and-federal-preemption.md)
