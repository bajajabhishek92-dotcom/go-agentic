# NVIDIA Technical Blog — Teachable Notes

Standalone articles distilled from recent [NVIDIA Technical Blog](https://developer.nvidia.com/blog/) posts. Focus: AI factory operations beyond chips, agent reliability loops, Cosmos world models and sim-to-real robotics, OpenShell/Sentry governance, multimodal specialized agents, GPU protein design, GPUDirect and training recovery, open DSX/Run:ai platforms, and edge/visual agent economics—framed as portable practices with source citations.

## Articles

- [AI Factory Operations: Agents Across Compute, Network, and Hardware](ai-factory-ops-agents.md) — Domain SRE agents, FOX factory coordination, telemetry, and digital twins.
- [Turn Agent Failures into Tests and Harness Fixes](agent-failures-to-harness-fixes.md) — Trace→eval→harness CI; process vs task-completion scoring.
- [Cosmos World Models for Interactive Simulation](cosmos-world-models.md) — World-model train/serve skills beside physics sim.
- [Sim-to-Real Robotics: SimReady Assets, Agent Planning, and Policy Training](robotics-simready-to-real.md) — SimReady validation gates, Isaac training loops, ROS 2.
- [Secure Agent Runtimes: OpenShell Governance and Sentry Enforcement](sentry-openshell-secure-runtime.md) — Policy outside the agent; hardware-isolated monitoring.
- [Nemotron VL: Multimodal Specialized Agents on One Backbone](nemotron-vl-specialized-agents.md) — MoE VL reasoners, NeMo post-training, controllable stacks.
- [Protein Design on GPUs: Reward-Guided Inference-Time Search](protein-design-reward-guided-search.md) — Co-design sequence/structure; spend compute on rewards.
- [GPUDirect Storage: Shortening the Path from Disk to GPU](gpudirect-storage-data-path.md) — Direct I/O paths, diagnostics, Python GPU reads.
- [Automated Workload Recovery for Distributed Training](distributed-training-workload-recovery.md) — Detect, attribute, checkpoint-restart as a factory layer.
- [Open AI Factory Platforms: Run:ai, DSX, and Predictable Capacity](runai-dsx-open-platforms.md) — Open orchestration plus modular POD bring-up.
- [Edge AI: Few-Command Model Bring-Up for Physical Agents](edge-ai-tensorrt-edge-llm.md) — Spark prototyping and TensorRT Edge-LLM serving.
- [Visual AI Agents: Cut Build Time and Runtime Tokens](visual-ai-agents-cost-control.md) — VSS blueprints and adaptive video sampling economics.

## Skipped / unused (rationale)

CUDA/Vera Rubin GA notes, TensorRT multi-route builder deep dives, Mamba CUDA Tile kernels, ReplaySSM internals, DOCA GPUNetIO/BlueField skills how-tos, Spark UDF rewrites, recommender HSTU serving, game DLSS/ACE roundups, cluster topology schedulers, and duplicate TensorRT posts were deprioritized—narrow kernel/product release value versus gap-fill themes (factory ops, agent safety, robotics, storage/recovery, open platforms, edge). Closely related factory and OpenShell posts were collapsed into single teachables each.
