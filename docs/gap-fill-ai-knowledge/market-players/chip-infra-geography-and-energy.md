# Chip and Infra Players: Geography, Power, and Bottlenecks

Accelerator designers, foundries, memory vendors, networking firms, and data-center operators sit upstream of every lab demo. Their role is to **turn capital and physics into usable training and serving capacity**—and, increasingly, to determine which countries and companies can participate at the frontier. A market map that stops at “OpenAI vs Anthropic vs Google” misses the binding constraints.

## The supply chain in one page

Epoch’s chips primer highlights concentration points that structure the entire industry:

- **Designers.** Nvidia still dominates shipped AI compute capacity; AMD and custom silicon from Google, Amazon, and others compete in niches or captive clouds. Epoch’s sales data put Nvidia at roughly half of units and over two-thirds of AI computing capacity in use in recent tallies.
- **Fabrication.** Leading-edge AI chips are overwhelmingly fabricated by TSMC, largely in Taiwan—a geopolitical single point of failure that every national strategy document quietly orbits.
- **Memory and equipment.** High-bandwidth memory (SK Hynix, Samsung, Micron) and ASML’s EUV lithography machines are choke points as real as GPU allocation lists.
- **Packaging and logistics.** Advanced packaging and cross-border shipment create the customs trail Epoch’s AI Chip Imports explorer mines.

Flagship GPU sticker prices rose dramatically from mid-2010s parts to H100-class cards, yet Epoch’s hardware database shows large gains in computation per dollar—buyers care about **cost of computation**, not souvenir pricing. Performance per dollar of purchased AI chips has grown on the order of ~49% per year in Epoch’s quarterly series.

## Beyond the chip: networking, campuses, HBM

NVIDIA’s technical ecosystem (NVLink/InfiniBand-class networking, CUDA software, reference architectures), colocation providers, liquid-cooling vendors, and EPC contractors for campuses complete the stack. Epoch’s scaling of AI data-center research and power-capacity records treats **facilities and megawatts** as first-class objects. Cooling, interconnect, and grid interconnection queues now delay capability as often as algorithms do. Agent-population estimates further tie HBM shipments through 2027 to how many concurrent frontier agents the world could even run—memory, not only FLOPs, gates the agent era.

## Geography as market structure

Epoch’s imports explorer estimates that of roughly 27.4 million H100-equivalents of AI compute arriving from 2022 through mid-2026, about **19.8 million (72%) went to the United States**, with China including domestic production around 10%, the EU about 5%, and no other country above 2% in their initial findings. Because nearly every advanced chip crosses borders after packaging in Taiwan, customs data become a market-intelligence instrument.

Gulf states, India, and others compete to host campuses for influence and economic development. CSET’s chip-tracking research asks whether policymakers can follow accelerators for export-control enforcement—and at what cost—while Epoch documents Malaysia-linked trade flows consistent with more than $3 billion of chips diverted toward China. China’s greater exposure to semiconductor supply-chain disruption (Epoch) and long-horizon Huawei-vs-Nvidia roadmap questions are not side dramas; they structure which market players can train what, when.

## Energy players enter the AI market

A single AI chip may draw on the order of a kilowatt at full load; by late 2025 Epoch described total AI data-center power capacity in the tens of gigawatts—comparable to peak demand of a large U.S. state. Utilities, gas-turbine suppliers, nuclear operators (IEEE Spectrum’s coverage of nuclear fleets leaning into AI), and public utility commissions become AI-market actors when campuses need gigawatts and interconnection agreements.

Epoch’s energy FAQ separates myths from magnitudes: individual chatbot messages are small, but aggregate data-center load grows fast (power requirements roughly doubling yearly in their telling) even while AI remains a few percent of U.S. electricity and under 1% of global CO₂ in IEA-linked figures they cite. Local pollution spikes and rate fights are already political. Infra competition is increasingly **who can energize racks**, not only who can buy them.


## What builders can do despite concentration

Most application teams cannot redesign lithography, but they can: choose efficient models and batching; measure joules and dollars per successful task; avoid architectures that require rare interconnect without need; and plan capacity with lead times measured in quarters, not sprints. Understanding infra players’ constraints prevents roadmap fantasy.


## Imports explorers as market intelligence

Epoch’s Chip Imports, Chip Users, and related explorers turn customs and sales estimates into public market maps: who owns chips, who uses them, which countries receive them. Policymakers, investors, and researchers use the same data for different decisions—export-control design, campus siting, and competitive forecasting. Infra literacy increasingly means reading those explorers alongside vendor roadmaps.


## Takeaways

- Chip/infra firms **gate the frontier**; treat them as core market players, not footnote vendors.
- Map **designer → foundry → HBM → campus → grid** when forecasting capacity or geopolitical risk.
- Compute geography (Epoch imports; CSET tracking debates) is market structure and security policy at once.
- Power and interconnection are binding constraints on the same timeline as model releases.
- Diversification talk (custom silicon, new regions, new generation sources) is strategy, not trivia.

## Sources

- [Epoch AI — AI Chip Imports explorer](https://epoch.ai/latest/introducing-the-ai-chip-imports-explorer)
- [Epoch AI — Chip performance per dollar](https://epoch.ai/data-insights/chip-performance-per-dollar)
- [Epoch AI — China semiconductor supply-chain exposure](https://epoch.ai/publications/china-us-semiconductor-supply-chain-exposure)
- [Epoch AI — Chip smuggling estimates](https://epoch.ai/publications/chip-smuggling)
- [Epoch AI — Estimating the agent population](https://epoch.ai/publications/estimating-the-agent-population)
- [CSET — publications hub](https://cset.georgetown.edu/publications/)
- [IEEE Spectrum — Fanless liquid-cooled AI servers](https://spectrum.ieee.org/fanless-liquid-cooled-ai-servers-coolit)
- Sibling teaching: [Epoch AI folder](../epoch-ai/index.md) · [CSET Georgetown](../cset-georgetown/index.md) · [NVIDIA Technical Blog](../nvidia-technical-blog/index.md)
