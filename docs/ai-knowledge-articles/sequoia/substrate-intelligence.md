# Intelligence Per Watt: Rethinking the Computing Substrate

Most AI efficiency work optimizes algorithms or GPU kernels. Naveen Rao (Unconventional AI) argues the deeper limit is the **physical substrate** of computation—and that brains are an existence proof we are ignoring.

## The energy wall

Humanity’s brains use ~20W each (~160GW total). Global electrical capacity is thousands of gigawatts, but AI training/inference is racing toward a world where energy—not ideas—is the binding constraint within a few years. Digital accelerators improved cost and packaging faster than true energy-per-useful-operation with memory traffic.

Brains (and even small animals) achieve complex behavior at milliwatts. That gap is not a rounding error; Rao estimates orders of magnitude between current digital practice, lithography limits, biology, and thermodynamic bounds (Landauer).

## Non-von Neumann dynamics

The proposed direction: trainable coupled oscillators / nonlinear dynamical systems where physics *is* the compute—state and function overlap, rather than endlessly shuttling tensors between memory and ALU. Training becomes steering trajectories in state space. The claim is not that GPUs stop mattering tomorrow, but that ASI-level abundance requires a different computing abstraction than 1940s digital floating-point machines designed for other workloads.

Startup advantage, in his telling, is lack of baggage: months-to-tapeout cycles versus incumbent chip roadmaps.

### Why builders should care now

Even if you never fabricate oscillators, the framing changes product and infra planning: energy per task becomes a first-class KPI; “just buy more GPUs” eventually collides with grid reality; co-design between models and machines will intensify.

### Sources

- [Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao](https://www.youtube.com/watch?v=Zw1J5pJJMGw)
