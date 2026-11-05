# Science Agents: Skills, Tool Grounding, and Idea Tournaments

Scientific AI is moving from “answer a biology question” to **agents that run discovery workflows**—curating literature and structures, calling domain tools, proposing designs, and debating hypotheses. Two DeepMind lines illustrate complementary patterns: Antigravity Cheminformatics Skills and Co-Scientist.

## Pattern A: LLM orchestrates; deterministic tools calculate

Cheminformatics in Google Antigravity targets a classic bottleneck: molecules appear as IUPAC names, patent Markush drawings, SDF files, chart images—and a single atom error describes a different compound. The skills:

- let the language model handle orchestration, database navigation, and scientific reasoning;
- delegate molecular calculation to **RDKit** and curated sources (ChEMBL, PubChem);
- encode medicinal-chemistry best practices into the agent workflow.

A walkthrough rigidifying lung-cancer TKIs (crizotinib → lorlatinib-style macrocycles) shows an hour-scale loop: literature harvest → filtering → interactive visualization → matched molecular pair analysis → potency models with scaffold/chronological splits → novel designs with synthesis rationales and electron-pushing diagrams.

**Hard constraint taught explicitly:** sparse assays and lab noise limit predictive precision; computational designs are **hypotheses to synthesize**, not finished drugs.

## Pattern B: Multi-agent scientific debate

Co-Scientist (Gemini-based, reported in *Nature*) mirrors how scientists actually think: generate → critique → refine. Specialized agents:

- **Generate** — propose hypotheses; proximity clustering for diversity.
- **Debate** — reflection as virtual peer review; ranking via pairwise “idea tournament” (AlphaGo/AlphaStar-inspired Elo-style competition).
- **Evolve** — combine top ideas; meta-review synthesizes a research proposal.

A supervisor plans in freeform, parallelizing exploration. Most compute goes to **verification** against literature and databases (web search, ChEMBL, UniProt; specialized models like AlphaFold in collaborations)—so novelty stays grounded.

Field examples (liver fibrosis drug repurposing, ALS collaboration sparks, aging genetic leads) emphasize Co-Scientist as a **collaborator that has read widely**, not an autonomous lab.

## Shared lessons for science AI

1. **Division of labor** — fuzzy reasoning vs exact chemistry/physics tools.
2. **Interactive artifacts** — viewers, plots, proposals a human can challenge mid-loop.
3. **Verification-heavy compute** — debate and grounding beat one-shot brainstorming.
4. **Human-in-the-loop wet lab** — agents compress iteration time; experiment remains the judge.
5. **Domain skills packages** — reusable workflows (cheminformatics, hypothesis generation) beat generic chat with PDFs.

**Sources**

- [Agentic cheminformatics with Google Antigravity](https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/)
- [Google Antigravity: Accelerating Antimicrobial Peptide Search](https://deepmind.google/blog/accelerating-antimicrobial-discovery/)
- [Co-Scientist: A multi-agent AI partner to accelerate research](https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/)
- [Gemini for Science: AI experiments and tools for a new era of discovery](https://deepmind.google/blog/gemini-for-science-ai-experiments-and-tools-for-a-new-era-of-discovery/)
