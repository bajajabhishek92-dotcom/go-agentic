# Robot Safety When Inputs Lie

Classical robot safety asks whether the machine stays safe when something fails. Physical AI raises a sharper question: can it stay safe when an attacker **changes what it sees, hears, or decides**—while every safety function still “works”? IEEE Spectrum’s VicOne-sponsored coverage makes the distinction concrete: a robot can obey its rules and still act on a **lying world model**.

## Safety functions vs trusted perception

A mobile robot that slows for a person, a cobot that eases force near a worker, a humanoid that yields space—all depend on **distance readings, pose estimates, or stop signals**. If those inputs are wrong (fault or deliberate manipulation) and the controller obeys them faithfully, the robot can do the unsafe thing *by design*: hallway reads clear while someone is there; arm thinks the worker is farther away; stop never arrives.

Compliance with safety rules is not the same as **integrity of the sensory and model stack**. Independent protective systems still consume readings and messages; if those are poisoned, the “safety layer” may share the lie. VicOne’s framing maps accidental faults and deliberate cyber manipulation onto similar unsafe outcomes so safety and security teams share one threat model.

## Attack surface across the stack

Research and lab demos cited across the pieces span layers:

- **Perception / VLA models** — adversarial patches that cut task success (arXiv vision-language-action studies); FreezeVLA-style images that cause models to ignore later instructions; poster text treated as a command by a multimodal robot dog (Gemma 4 E4B test); crafted audio inaudible to people changing a hospital-service-robot simulation on Jetson AGX Orin.
- **Training-time backdoors** — BadNets-style triggers evolved into **BadVLA** trajectory hijacks that fire only when a trigger is present while clean performance holds; GoBA reporting high success (cited ~97%) with ordinary objects (e.g., a coffee mug) as triggers.
- **System / middleware** — ROS 2/DDS message injection moving a robot organizers expected to stay still under a safe-control setting; UniPwn-style wireless chains with hardcoded keys, auth bypass, command injection, and wormable fleet risk; gyroscope acoustic attacks as a reminder that balance controllers trust sensors (drone research as the classic demonstration).
- **Infrastructure** — vulnerabilities that yield root or command injection without “breaking” the safety FSM on paper.

Stealth matters: nothing looks broken while behavior shifts. A model may pass testing yet produce corrupted trajectories when a hidden trigger appears in operation.

## What a modern safety program adds

Beyond ISO-style functional safety:

- Model and vulnerability scanning for Physical AI stacks.
- **Simulation-based validation** of corrupted inputs (e.g., NVIDIA Isaac Sim plus adversarial visual tests / VicOne Radeis-style validators) before deployment.
- Continuous monitoring from development through operation.
- Test plans that ask “what if the LIDAR/camera/stop channel lies?” with evidence trails.
- Check whether protective stops depend on the **same** channels an attacker can spoof.

Fleet wormability turns one compromised unit into an ops crisis—patch cadence and network segmentation belong in the robot safety story, not only in IT ticketing.

## Teaching framing

- Separate **functional safety** (actuator limits, E-stops) from **input integrity**.
- Treat foundation/VLA models as safety-critical components, not app features.
- Prefer detectable, logged interventions over silent degraded modes.
- Score Physical AI releases on adversarial simulation results, not only clean-task success.

## Independent stops and shared lies

The deepest teaching cut is independence: an E-stop that trusts the same ROS topic an attacker can inject is not independent. BadVLA/GoBA-style triggers that preserve clean accuracy expose validation theater—pass the suite, fail only when the mug appears. Build adversarial sims into release gates; ask whether protective logic has a second sensor path. Homework: for a hallway robot, list every input to “slow for person,” mark which can be spoofed, and propose one cross-check that does not share that channel.

## Takeaways

- Treat perception and foundation models as **safety-critical inputs**.
- Validate against **malicious and faulty** sensor narratives, not only hardware faults.
- Safety layers that share poisoned channels are not independent.
- Prefer detectable, logged interventions over silent degraded modes.
- Backdoors that preserve clean accuracy are a validation blind spot—test triggers on purpose.

**Sources**

- [Your Robot’s Safety Functions Already Work. What If the Input Lies?](https://spectrum.ieee.org/ai-robot-safety-cybersecurity-vicone)
- [Rethinking Robot Safety in the Age of AI](https://spectrum.ieee.org/physical-ai-robot-cybersecurity-vicone)
