# Sim-to-Real Robotics: SimReady Assets, Agent Planning, and Policy Training

Preparing CAD assets for robotics simulation requires more than converting geometry to OpenUSD: developers must configure and validate materials, collision geometry, joints, and other physics properties before testing robot behavior. A robot model can look correct but still fail in simulation if collision geometry is missing (objects pass through grippers) or joints are wrong (coordinated motion fails). Mass and friction directly affect whether a grasp remains stable. **SimReady** is the teaching name for that validation gate.

## What SimReady means

SimReady defines requirements for preparing OpenUSD assets for specific simulation use cases. Developers select a SimReady profile for their intended use and validate the asset against its requirements. Profile-specific checks validate structure, materials, and physics properties, then flag issues to fix and recheck. NVIDIA Omniverse libraries, guided by SimReady Foundation specifications and agentic NVIDIA skills, provide a structured conversion/validation workflow. Frontier AI models can assist by interpreting reference materials and calling Omniverse tools on the developer’s behalf—reducing manual preparation without removing the need for physics-correct assets.

## Five-step asset workflow (YuMi example)

NVIDIA’s walkthrough prepares an ABB Robotics YuMi for simulation with SimReady Foundation and Omniverse tools (GPT-6 Astra cited as one example frontier assistant):

1. **STEP-file conversion** into OpenUSD structure.
2. **Appearance validation** (materials/looks that matter for perception sims).
3. **Physics configuration** — collision geometry, joints, mass, friction, and related properties.
4. **SimReady validation** against the chosen profile’s checks.
5. **Task smoke test** — e.g., dual-arm pick-and-place with grippers in Isaac Sim.

OpenUSD represents geometry, assembly structure, materials, and simulation properties in a common scene description. The teachable discipline: **do not train policies on assets that failed SimReady checks**. Pretty renders are not simulation readiness.

Sample inputs for the YuMi walkthrough make the discipline concrete: ABB STEP files as source geometry; reference images/videos to guide appearance and materials; the SimReady Foundation specification repository (also packaged with Isaac Sim 6.1 tier-core) for requirements and validation guidance; and the CAD-to-SimReady skill for conversion, material/physics assignment, and validation. Agents operate Isaac Sim via its remote Python server (windowed mode) so a frontier model can call live simulation APIs—confirm the connection before trusting tool calls. At each step, adapt prompts to the task, then review simulation results and validation feedback; the human still owns physics-correctness sign-off.

## From assets to policies and ROS 2

SimReady assets feed Isaac Sim training loops for locomotion and manipulation. Companion posts show AI agents teaching robots (e.g., Microduck-style walk training in simulation) and accelerating ROS 2 nodes with Isaac ROS—bridging planning/perception stacks into the robot software ecosystem. The full sim-to-real literacy stack:

- **World models / generative observation** (Cosmos) for sensor diversity.
- **Physics-correct assets** (SimReady + Omniverse) for contact fidelity.
- **Policy training in Isaac Sim** with held-out eval episodes.
- **Runtime integration** via ROS 2 / Isaac ROS for on-robot software.
- **Agent assistants** that call tools—not agents that invent physics.

## Teaching sim-to-real without magical thinking

- Separate visual fidelity from physical fidelity; both matter, for different failure modes.
- Treat SimReady validation as CI for assets—failed checks block policy training jobs.
- Use agents to *operate* Omniverse/Isaac tools under profiles; do not let agents skip validation.
- Measure transfer with systematic domain randomization and real-robot evaluation, not demo videos alone.
- Keep human review on safety-critical joint limits, collision meshes, and gripper force assumptions.

## Takeaways

- Sim-to-real fails when assets look right but lack collision, joints, mass, or friction—SimReady exists to catch that.
- Profile-based validation beats ad-hoc “export to USD and hope.”
- Frontier models help *drive* Omniverse tools; they do not replace physics specs.
- Connect SimReady → Isaac training → ROS 2 deployment as one pipeline with gates.
- Pair with Cosmos world models for observation diversity while keeping physics sim for contact truth.

Do not ship the first generative mesh: SimReady gates and real-robot evals close the loop before claiming sim-to-real success.

## Sources

- [5 Steps to Create SimReady Assets for Robotics with Frontier AI Models](https://developer.nvidia.com/blog/5-steps-to-create-simready-assets-for-robotics-with-frontier-ai-models/)
- [Using AI Agents to Teach Robots Like Microduck to Walk in Simulation](https://developer.nvidia.com/blog/using-ai-agents-to-teach-robots-like-microduck-to-walk-in-simulation/)
- [Accelerating a ROS 2 Node with an AI Agent and NVIDIA Isaac ROS](https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/)
