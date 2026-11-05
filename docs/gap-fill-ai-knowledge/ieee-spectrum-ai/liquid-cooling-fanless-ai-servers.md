# Liquid Cooling and Fanless AI Racks

AI rack power density is outrunning hybrid liquid+air cooling. Spectrum’s CoolIT-sponsored engineering piece draws a hard line: beyond roughly **250 kW per rack**, a 70/30 liquid-air split still leaves ~**75 kW** of air load—cost and complexity few operators will accept. The path forward is **near-total heat capture**: liquid takes effectively all heat; air falls under ~1%; servers can run **fanless**. CoolIT describes modular coldplate building blocks proven across six generations of fanless designs, with modeling that treats full heat capture as the standard for flagship rack-scale products through 2028 as racks climb toward megawatt class.

## Heat escaped the chip

It used to be enough to cool the CPU/GPU and let air handle the rest. Rising thermal design power (TDP) now cascades heat into **memory, networking, storage, and power** parts that once lived comfortably on air. Those components have varied shapes, mountings, and temperature limits—so coldplates and transfer paths must be **part-specific**, not a single CPU-shaped solution stretched across the board. Some peripherals run cooler than processor case temperature, others hotter; a GPU-only thermal story leaves them stranded.

Toolkit pieces in the CoolIT narrative include conductive plates, vapor chambers, heat pipes, thermal transfer plates, and riding coldplates for pluggable components—each matched to the part it serves, then folded into **one server loop**.

## One loop is the hard part

Cooling each part is necessary; uniting them is what decides production readiness. Full heat capture means coolant distribution that is reliable to connect, sane to route, and fast enough to assemble at rack integration. Designs that look good on a bench but stall at integration never ship density. Modular blocks are pitched as a way to buy both performance and deployment speed. Facility plant design—CDUs, water quality, redundancy, leak detection—becomes as load-bearing as GPU selection. Acoustics and reliability shift too: fewer fans mean quieter halls and fewer moving-part failures, with new failure modes around pumps and fittings.

## Density forces the decision

A 70/30 liquid-air split can hold at lower density. Past ~250 kW, the residual air load becomes a parallel air plant inside the rack—footprint and cost operators reject. As rack power continues toward **1 MW**, the gap widens. Fanless, near-total liquid capture is framed as the simpler efficiency answer: fewer moving parts and facilities designed around liquid loops rather than heroic CRAC workarounds.

## Why this belongs in an AI curriculum

- Capability forecasts that ignore **thermal and facility limits** overstate deployable compute. Chip and agent-headroom stories meet watts and water here.
- Cooling strategy is a first-class input to **cluster TCO**, next to chips and power contracts—retrofits vs greenfield differ sharply.
- Thermal bottlenecks can idle purchased accelerators when power and heat rejection lag delivery.
- Teach operators to ask “kW/rack + heat capture fraction” alongside FLOPs/$ when reading AI factory roadmaps.

## Design questions for engineers

- Which board components still assume air, and what is their temperature envelope?
- Is the CDU plant sized for peak liquid load with N+1, or for yesterday’s hybrid mix?
- How are leaks, condensation, and maintenance windows handled without draining the fleet?
- Does the software stack expose thermal telemetry as a first-class scheduling signal?

## Facility literacy for AI builders

Model roadmaps that ignore CDU capacity, water loops, and rack heat capture fraction will schedule FLOPs that never turn on. CoolIT’s ~250 kW/rack threshold is a teaching number: below it hybrid cooling can limp along; above it residual air load becomes a parallel plant few operators want. Fanless is the symptom of near-100% liquid capture. Homework: given a planned 500 kW rack, estimate residual air kW under 70/30 vs 99/1 splits and list which board peripherals still assume air today.

Procurement tip: ask vendors for heat-capture fraction at target rack kW, not only coldplate photos on GPUs.

## Takeaways

- Treat ~250 kW/rack as a regime change for cooling architecture.
- Budget liquid paths for the whole board, not only accelerators.
- Judge designs on loop integration and serviceability, not coldplate gloss alone.
- Pair facility engineering with model-scaling plans—heat is a first-class AI constraint.
- Fanless is a consequence of near-total liquid capture, not a fashion choice.

**Sources**

- [The Future Is Fanless: 100% Heat Capture for Liquid Cooled AI Servers](https://spectrum.ieee.org/fanless-liquid-cooled-ai-servers-coolit)
