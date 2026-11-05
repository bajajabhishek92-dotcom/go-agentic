# Computer Use for Professional Software: Train on Real Vendor Workflows

Generic “use a browser” demos understate the hard problem: agents must operate **specialized business software** under company rules—approvals, templates, jurisdiction clauses, CAD constraints, QA viewports—and verify that the finished process works, not just that individual clicks succeeded.

## Partner-defined tasks beat synthetic toy UIs

A productive research pattern:

1. Pick a software vendor whose product embeds real enterprise rules (e.g. contracting platforms).
2. Have practitioners enumerate high-value tasks (NDA setup, procurement approvals, clause updates)—often 30–40 minutes of expert work each.
3. Score each attempt against **dozens of criteria**, not a single pass/fail, so you see which requirements the agent drops mid-flow.
4. Provide hosted practice environments; generate synthetic variants; train with RL.
5. Measure both accuracy and time per attempt.

In Ironclad-style contracting evals, a frontier computer-use model improved average score substantially while cutting estimated time nearly in half versus the prior generation—still far from perfect, which is the point: **oversight and the full platform remain necessary** when one forgotten rule breaks the process.

## Physical and multimodal engineering follows the same logic

Computer use extends past SaaS into CAD, PCB tools, and manufacturing prep. Early experiments show agents can draft enclosures, boards, firmware, and UI for a device—and still miss manufacturer tolerances and assembly realities. Progress metrics (e.g. BenchCAD-style reconstruct/assembly scores) and industry review loops (motorsports reverse-CAD, automotive aero/crash simulation) are how you learn which steps are assistive today versus unsafe to leave unsupervised.

## Runtime computer use in product QA

Beyond training, computer use lets review agents **run the app**: spin a PR’s server, resize to a phone viewport, visually spot a missing button that code review would miss. When shipping velocity rises with coding agents, static review alone under-covers behavioral bugs; UI-capable agents become part of the quality loop.

## How to collaborate usefully with model labs

Bring: a concrete failing task, success criteria, people who know the work, a secure test environment, and data that can be used for research. Vague “make our product agentic” requests do not create training signal.

**Sources**

- [Advancing computer use with Ironclad](https://openai.com/index/advancing-computer-use-with-ironclad)
- [Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world)
- [Greptile takes bug detection beyond code review with GPT-6 Astra](https://openai.com/index/greptile-code-review-codex-astra)
- [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)
