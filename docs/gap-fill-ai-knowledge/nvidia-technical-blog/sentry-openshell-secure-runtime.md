# Secure Agent Runtimes: OpenShell Governance and Sentry Enforcement

Capable agents with tool access are useful *because* they can touch files, networks, credentials, and APIs—and dangerous for the same reason. NVIDIA’s teachable pattern: put **policy outside the agent**. **OpenShell** is the open reference architecture / runtime for governing agent workloads; **Sentry** extends enforcement into the infrastructure data path (BlueField) so agents cannot route around software-only sandboxes.

## OpenShell: controls around the workload

OpenShell’s reference architecture separates concerns so evolving agents still face infrastructure controls:

- **Gateway / control plane** — operators manage agent sessions and policies.
- **Credential protection** — real secrets stay outside the agent workload and bind to authorized requests.
- **Sandbox** — isolates the agent; restricts filesystem and process access.
- **Policy prover** — formal verification that requested permissions stay within an organization-defined ceiling.

Supervisor middleware can inspect, block, or modify content agents send/receive on the network. Gateway interceptors add deployment-specific governance without modifying the gateway. Identity, authorization, data protection, and auditing integrate at these enforcement points. The reference architecture narrative places OpenShell on NVIDIA Vera CPUs for the control/compute layer beneath the policy story—OpenShell defines what agents can do; the CPU layer affects how fast agent loops of reason→tool→code→query complete.

OpenShell 0.1.0 capabilities called out in the runtime-controls post: multi-tenant workspaces/permissions on shared infra; formal policy verification for human and AI reviewers; extensible hooks to third-party security/governance; credential-protected service access; CPU and GPU execution across containers, VMs, and Kubernetes. Example adopters cited: Cadence (ChipStack RTL design agent), Slack (on-demand agent platform), Gecko Robotics (agents deciding on physical robots).

## Sentry: hardware-isolated monitoring on the only path out

**NVIDIA Sentry** places enforcement on BlueField-4 so agent network communications are governed on the path to the model and the outside world—bypassing host OS/hypervisor packet processing. DOCA Flow implements a silicon-accelerated layer-4 firewall per agent (block unauthorized destinations; forward permitted traffic). **DOCA Tower** acts as a transparent proxy with in-silicon TLS acceleration, terminating TLS to inspect/control application-layer traffic. **Open Policy Agent (OPA)** with Rego evaluates access requests locally in memory (sub-millisecond typical, depending on policy). DOCA Tower is described as compatible with OpenShell policies—extending network access policies and runtime controls into BlueField. DOCA Argus real-time memory introspection can enrich authorization requests; telemetry can flow to partner XDR platforms.

Teaching point: software sandboxes the agent *thinks* in; Sentry constrains what packets and destinations are possible even if the agent or host software is compromised or confused.

## How the pieces compose with NemoClaw

NemoClaw blueprints assemble model + harness + NeMo optimization + OpenShell runtime. Sentry is the in-silicon monitoring/enforcement companion for high-assurance deployments. Deny-by-default tools, human gates on consequential actions, and audit logs remain mandatory product practices—hardware enforcement does not replace ethos docs and eval harnesses.

## Teaching secure agent runtimes

- Draw trust boundaries: model weights ≠ harness ≠ sandbox ≠ network path ≠ credential vault.
- Prefer policies that are machine-checkable (OPA/Rego, policy prover) over prompt-only “be careful.”
- Demo silent failure modes: agent with SSH vs agent with OpenShell allow-lists.
- For physical AI (robots), treat runtime governance as safety infrastructure, not optional IT.
- Measure policy decision latency and false-block rates—security that breaks agents gets disabled.

## Takeaways

- Put authorization outside the agent; never rely on the model to police itself.
- OpenShell = sandbox + credentials + policy proof + extensible gateways; Sentry = BlueField path enforcement with DOCA Flow/Tower + OPA.
- Multi-tenant agent platforms need workspace isolation and formal permission ceilings.
- Compose with NemoClaw/NeMo Relay for build-time optimization and runtime observability.
- Hardware isolation raises the floor against escape; product discipline (evals, human gates) raises the ceiling.

## Sources

- [How NVIDIA OpenShell Reference Architecture Secures and Governs AI Agent Workloads at Scale](https://developer.nvidia.com/blog/how-nvidia-openshell-reference-architecture-secures-and-governs-ai-agent-workloads-at-scale/)
- [Add Runtime Controls to AI Agents with NVIDIA OpenShell](https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/)
- [Inside NVIDIA Sentry: Secure AI Agents at Runtime](https://developer.nvidia.com/blog/inside-nvidia-sentry-secure-ai-agents-at-runtime/)
- [NVIDIA Open Agent Safety Platform: A Reference for Continuous In-Silicon Agent Monitoring](https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/)
