# AI Factory Operations: Agents Across Compute, Network, and Hardware

When GPU clusters scale, failures span compute, fabric, storage, and schedulers. SREs otherwise bounce across dashboards to explain a training regression. An **AI Factory Operations Agent** pattern puts specialized domain agents behind one chat interface, correlating root causes and recommending actions with an audit trail—humans still own the blast radius.

## Architecture pattern

- A user-facing runtime (for example a NemoClaw-style blueprint) routes SRE questions.
- Domain sub-agents cover hardware, networking, scheduling, and workload health.
- Tools are exposed via MCP / approved plugins—agents only see allow-listed operations.
- Every investigation step is logged for later review.

NVIDIA’s internal deployment narrative describes a growing set of domain agents: **Job Recovery Agent** (detect training failures and goodput degradation; multi-layer RCA across scheduler/application/hardware/network; recommend recovery when root cause confirmed); **Hardware Agent** (PCIe/ECC/GPU/NVMe/thermal triage to the component); **Observability Agent** (Prometheus/telemetry/Grafana Loki queries, dynamic dashboards in the UI); **Research Agent** (Mission Control manuals, DGX SuperPOD guides, plus uploaded site runbooks); **Kubernetes Agent** (read-only awareness of pods, services, deployments, GPU resources, node status, scheduling); and **Cluster Management Agent** (Base Command Manager APIs via diagnostic MCP tools for advisory troubleshooting). Cross-cutting MCP tools include web search, code execution, and Grafana dashboards; sites can connect their own MCP servers/APIs for existing schedulers and observability stacks. Tooling examples emphasize pinned binaries and read-only credentials—e.g., server-side `run_kubectl` against registered credentials, with OpenShell receiving neither kubectl nor Kubernetes credentials; cluster RBAC defines what the tool can inspect (`get pods` yes, `get secrets`/`create pods` no, in the blog’s illustration).

Production learnings NVIDIA highlights: clear agent boundaries (overlapping ownership creates noise); **read-only first** to build SRE trust before automation; cross-layer correlation of workload/hardware/network signals; precise MCP tool definitions to improve routing; and continuous measurement of RCA accuracy and SRE agreement as the ecosystem expands.

## Factory Operations Blueprint and digital twins

**Factory Operations Blueprint (FOX)** generalizes the same idea to physical manufacturing: a manager agent coordinates inspection, rework, and planning agents over existing plant systems, with human review gates for consequential decisions. **Minerva**-style telemetry correlation turns messy signals into yield-oriented insight—operations software as a product, not a spreadsheet afterthought.

Digital-twin workflows let teams validate AI factory changes before touching production capacity—simulate first, then change live racks. Agent-assisted twin development combines DSX 3D models, architectural references, site plans, requirements documents, and geographic data into editable campus/site models with traceability from design choices to sources (dimensional accuracy still requires checking against drawings and specs). Validation posts emphasize governed loops: proposed changes enter CI/CD or change management; an agent configures a logical twin (topology, tenant policy, workload profile, constraints); runs tests; returns evidence-backed recommendations. Node-based simulation is a high-fidelity integration/validation layer—not a replacement for every capacity/power/performance model. Choose the simulation for the decision; save evidence in the delivery workflow.

## Why this is “beyond chips”

Gap-fill for hardware literacy is often only about accelerators. Factory ops teaching is about **operations software**: telemetry correlation, autonomous recovery hooks, and agent UX for humans who still own the blast radius. Pair with workload-recovery and Run:ai scheduling stories: agents that diagnose without the right to act are copilots; agents with unbounded SSH are liabilities.

## Operating principles

- Specialize agents by domain; centralize conversation and audit.
- Deny-by-default tools; expand privilege with human approval.
- Prefer twin-validated changes for capacity-affecting actions.
- Measure mean-time-to-insight and idle-GPU hours saved, not chat niceness.
- Keep credentials and powerful APIs outside the agent sandbox (OpenShell pattern).

## Takeaways

- Treat the AI factory as a multi-agent SRE system with MCP tool boundaries—not a single LLM with SSH.
- Telemetry correlation and digital twins are first-class ops products.
- Audit trails make agent-assisted ops reviewable after the fact.
- Human gates belong on consequential plant and cluster changes.
- Domain sub-agents (recovery, hardware, observability, research, Kubernetes) beat one generalist with every dashboard token dumped into context.

## Sources

- [How NVIDIA Uses AI Agents to Streamline AI Factory Operations](https://developer.nvidia.com/blog/how-nvidia-uses-ai-agents-to-streamline-ai-factory-operations/)
- [How NVIDIA Factory Operations Blueprint Coordinates AI Agents to Investigate Production Issues](https://developer.nvidia.com/blog/how-nvidia-factory-operations-blueprint-coordinates-ai-agents-to-investigate-production-issues/)
- [How NVIDIA Minerva Turns Telemetry Chaos Into Peak GPU Yield](https://developer.nvidia.com/blog/how-nvidia-minerva-turns-telemetry-chaos-into-peak-gpu-yield/)
- [Developing an AI Factory Digital Twin with an Agent-Assisted Workflow](https://developer.nvidia.com/blog/developing-an-ai-factory-digital-twin-with-an-agent-assisted-workflow/)
- [Validate AI Factory Changes with Digital Twins and AI Agents](https://developer.nvidia.com/blog/validate-ai-factory-changes-with-digital-twins-and-ai-agents/)
