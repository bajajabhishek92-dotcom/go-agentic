# Protein Design on GPUs: Reward-Guided Inference-Time Search

Protein design is a search problem. An eight-residue sequence already has more than 25 billion amino-acid combinations; at 100 residues the space exceeds the number of atoms in the observable universe. Exhaustive search is impossible—progress depends on knowing where to look. **RFD4-Proteina**, an NVIDIA BioNeMo open model co-developed with the Institute for Protein Design at the University of Washington’s School of Medicine, navigates that space using patterns learned from nature. It **co-designs protein sequences and all-atom structures** and uses **reward-guided inference-time search** to focus compute on the most promising candidates.

## Co-design instead of inverse-folding handoffs

Building on Proteina-Complexa’s partially latent approach, RFD4-Proteina combines explicit backbone coordinates with latent representation and learned sequence/atomistic variables. Its autoencoder decoder produces sequence and all-atom structure **together**, removing a separate inverse-folding handoff to a model such as ProteinMPNN. Inputs include molecular context, design constraints, and design regions; optional reward-guided search then steers generation.

Access paths:

- **Open model** — training, inference, method development, and direct control over sampling code (Linux GPU host, Python 3.12; Hugging Face bundle via install guide).
- **NIM microservice** — rapid inference deployment with an HTTP interface (self-host with Docker/driver/container toolkit/NGC key, or a build.nvidia.com API endpoint for non-production trials).

## Inference-time search as the compute knob

During inference-time reasoning search, the model denoises generation trajectories to obtain structures, scores designs, retains and branches promising partial states, and continues until generation criteria are reached. Rewards can measure geometry, interactions, or independent prediction confidence—extra search that optimizes designs against task-relevant criteria without necessarily retraining the backbone. That is the central teaching move: **spend GPU time at inference to climb reward landscapes**, analogous to test-time compute in language models, but for molecular design.

NVIDIA’s tutorial walks through designing protein binder candidates against **PD-L1** (an oncology target) with reward-guided search and discusses experimental validation results across design tasks. Treat published wet-lab outcomes as the ground truth layer; computational scores are filters, not substitutes for assay.

## From objective to wet lab

A reference workflow links molecular design, computational evaluation, and experimental testing in an iterative cycle. Agents (e.g., BioNeMo agent toolkit patterns) can coordinate tools and track results while scientists define objectives and use experimental evidence to guide the next round. Practically, users define what may change, what must remain fixed, and computational/experimental success criteria. **AtomWorks** prepares structures and design annotations—fixed atoms, designable residues, hotspots, and molecular context—via Python/PyMOL workflows, preserving ligand or motif chemistry when designing surrounding protein. Both the open model and NIM accept annotated CIFs or a condition specification plus source structure (e.g., fix the target, define the new binder). Teaching should make students write those constraints *before* burning search GPU hours.

## How this fits AI-for-science literacy

- Sequence/structure co-design reduces pipeline fragility from multi-model handoffs.
- Reward design is a scientific choice: geometry vs interaction vs confidence proxies encode different inductive biases.
- Open weights enable method research; NIM enables productized inference—pick based on whether you need sampling-code control.
- Pair with efficient MoE training for biological foundation models when the bottleneck is pretraining scale rather than inference search (companion BioNeMo posts).
- Always separate *in silico* ranking from experimental validation gates in teaching and in pipelines.

## Teaching practice

- Frame protein design as search under physics/chemistry constraints, not as “one-shot generation.”
- Make students/engineers write down the reward before running search—garbage rewards burn GPUs.
- Compare fixed-sample generation vs reward-guided branching on the same compute budget.
- Document which designs advanced to wet lab and why; close the loop like any agent eval.

## Takeaways

- Combinatorial sequence space forces learned priors plus smart search—not brute force.
- Co-designing sequence and all-atom structure removes a common inverse-folding seam.
- Reward-guided inference-time search is how you spend GPU budget on the best candidates.
- Open model vs NIM is a control-vs-convenience choice; experimental validation remains mandatory.
- Reward functions are scientific hypotheses—treat them as such in governance and papers.

Do not ship the first generative sample: close the loop with assays or held-out metrics before claiming a design program.

## Sources

- [Design Proteins with RFD4-Proteina Using Reward-Guided Inference-Time Search](https://developer.nvidia.com/blog/design-proteins-with-rfd4-proteina-using-reward-guided-inference-time-search/)
- [Efficient MoE Training for Biological Foundation Models](https://developer.nvidia.com/blog/efficient-moe-training-for-biological-foundation-models/)
