# Energy, Goodput, and the Physics of Frontier AI

Model quality narratives often ignore the industrial reality underneath: AI is becoming an energy-and-systems problem as much as an algorithms problem.

## Stranded energy → intelligence

Crusoe’s Chase Lochmiller describes a vertically integrated path from power to AI factories—energy generation, data centers at multiple scales, and managed AI cloud services. The strategic insight is geographic and thermodynamic: put compute where energy is stranded or cheap, and treat electrons as the feedstock of intelligence.

Amin Vahdat (Google) sharpens the systems metric that matters: not peak FLOPS, but **goodput**—delivered useful work after slowdowns, failures, and restarts. At 1,000–100,000 tightly synchronized accelerators, one failed component can stall a synchronous training or serving job. Checkpointing, restart, and network design dominate real economics.

## Scaling beyond “more GPUs”

Jensen Huang’s Dynamo framing emphasizes that AI crossed from impressive capability into *paid useful work*—agents people hire by the hour. That monetization justifies infrastructure spend, but also intensifies competition for power, packaging, networking, and software that keeps fleets utilized.

More speculative bets push the boundary further: Starcloud argues the cheapest long-run compute may be in space (energy and cooling physics), while Unconventional AI argues digital von Neumann substrates are the wrong physics for intelligence-per-watt (see companion article on substrate compute).

### Practice checklist

- Budget reliability and restart cost into training TCO, not only GPU sticker price
- Track goodput and utilization alongside model quality
- Site selection is an AI strategy decision: power, latency to users, and cooling
- Assume energy constraints arrive in years, not decades

### Sources

- [Turning Stranded Energy Into Intelligence: Crusoe CEO Chase Lochmiller](https://www.youtube.com/watch?v=64vUl9k-IAQ)
- [Google's AI Infrastructure Chief, Amin Vahdat, on the Physics & Economics of Frontier AI](https://www.youtube.com/watch?v=bGph8GwB3Sk)
- [NVIDIA's Jensen Huang on Building the Dynamo of the Intelligence Age](https://www.youtube.com/watch?v=2UpQbeAZuqA)
- [Starcloud's Philip Johnston: Why the Cheapest Compute Will Be in Space](https://www.youtube.com/watch?v=94b6i5jI1nE)
