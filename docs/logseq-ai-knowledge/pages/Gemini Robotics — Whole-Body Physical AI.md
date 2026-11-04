title:: Gemini Robotics — Whole-Body Physical AI
type:: article
cluster:: physical-ai
cluster-name:: Physical AI, Voice & Autonomy
corpus:: extra-ai-knowledge/deepmind-blog
tags:: #article #corpus/extra-ai-knowledge/deepmind-blog #cluster/physical-ai
node-id:: a-gemini-robotics-physical-ai
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/deepmind-blog/gemini-robotics-physical-ai.md
original-label:: Gemini Robotics: Whole-Body Physical AI

- #cluster/physical-ai
- #corpus/extra-ai-knowledge/deepmind-blog
- blurb:: Physical AI needs more than a chatbot that describes actions. Gemini Robotics 2 splits the stack into complementary models so robots can reason for minutes, control whole bodies, and run locally when the network is…

## Relations

- example of:: [[Physical AI - Robotics]] — Discussed in article
- related to:: [[World Models]] — Discussed in article

## Article

# Gemini Robotics: Whole-Body Physical AI

- Physical AI needs more than a chatbot that describes actions. Gemini Robotics 2 splits the stack into complementary models so robots can reason for minutes, control whole bodies, and run locally when the network is unavailable.

## Three roles in one stack

- Table:
  - `| Model | Role | Job |`
  - `| --- | --- | --- |`
  - `| **Gemini Robotics 2 (VLA)** | Vision–language–action | Map vision + language to motor control for humanoids and bi-arm robots; finer dexterity on hands and grippers. |`
  - `| **Gemini Robotics ER 2** | Embodied reasoning agent | Talk with humans, understand the scene, plan multi-step tasks lasting several minutes, coordinate the VLA, track progress, collaborate across robots. |`
  - `| **Gemini Robotics On-Device 2** | Efficient local VLA | Run without cloud latency; adapt to new embodiments in a few hours (often under 200 examples) via motion-transfer techniques. |`

- This separation mirrors software agents: a planner/agent layer plus an executor, with an edge option when connectivity or latency constraints bite.

## From tabletop to whole-body

- Earlier systems focused on upper-body tabletop work. Whole-body control matters because human environments demand walking, crouching, balancing, and reaching in clutter. Examples include humanoids fetching and shelving objects, five-fingered hands tying knots or sealing bags, and gripper platforms packing tightly.

## Agentic robotics behaviors

- ER 2 is positioned as the high-level brain: decompose instructions, self-correct when a step fails, know when tasks start/end, and detect key events. Multi-robot collaboration lets heterogeneous robots share a workflow one body could not finish alone.

- Safety advances include ASIMOV-Agentic-style benchmarks for refusing unsafe tool calls from the VLA, predicting task feasibility, and requesting human help under uncertainty—plus proximity-aware stops when people approach.

## Embodiment transfer

- A persistent robotics bottleneck is that skills learned on one body rarely transfer. On-Device 2’s few-hour adaptation across platforms with different shapes, sensors, and degrees of freedom is the teachable claim: treat embodiment shift as a **data-efficient adaptation** problem on a general VLA prior, not a full retrain per robot.

## Lessons for physical AI builders

- Separate **reasoning agent** from **motor policy**; keep a human-communication channel on the agent.
- Optimize an **on-device** path early if latency or offline operation matters.
- Evaluate **long-horizon progress tracking** and multi-robot protocols, not only single grasps.
- Add **agentic safety** tests (refuse unsafe acts, ask when uncertain) alongside classical collision safety.
- Pair simulation (e.g. Genie) with real robots for scenario breadth before physical deployment.
- **Sources**

- [Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)
- [Introducing Gemini Robotics ER 2](https://deepmind.google/blog/introducing-gemini-robotics-er-2/)
- [Gemini 4 Argon for Robotics](https://deepmind.google/blog/gemini-4-argon-for-robotics/)

## Navigation

- Cluster:: [[Cluster - Physical AI, Voice & Autonomy]]
- Corpus:: [[Corpus - DeepMind Blog]]
- [[Clusters]]
- [[Contents]]
