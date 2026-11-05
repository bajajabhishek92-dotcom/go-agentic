# Tracking AI Chips: Location Verification and Cost Reality

Export controls fail if chips are diverted after sale. CSET’s *Tracking AI Chips* report and companion cost analysis ask a practical question: can regulators **verify where controlled accelerators sit**, what would that cost, and what can such systems never do? Smuggling is real—globalized packaging and multi-hop reseller chains create diversion opportunities—but exact volumes remain iceberg-like: known indictments set a floor; statistical models (Epoch, CNAS, and others) estimate the submerged mass with wide uncertainty.

## Five method families

Proposed location-verification approaches fall into rough buckets:

1. **Physical inspections** — recurring on-site audits.
2. **Mail-in inspections** — ship sampled chips to investigators.
3. **Video inspections** — remote checks via tamper-resistant cameras.
4. **Inventory management** — lists of unique chip IDs present on site.
5. **Geolocation** — including **ping-based location verification (PLV)**: round-trip timing from a chip to multiple trusted landmark servers.

CSET scores methods on **verifiability, accuracy, security, and repeatability**. In their assessment, **PLV and physical inspections** clear all four bars; other geolocation (topology/GPS), inventory tools, mail-in, and video fall short on at least one criterion. Traditional BIS tools (trade/licensing data, intelligence, tips, end-use checks) still catch rings—but cannot be expected to eliminate diversion.

## Cost and scaling: PLV vs inspectors

Across **>10 million simulated scenarios**, physical inspections never beat PLV on detections-per-cost—even under parameters deliberately favorable to inspections. Rough annual PLV cost bands: about **$3.1–28.8M** if landmarks are owned, **$2.6–72.4M** if rented (on the order of **0.5–7.2%** or **0.3–25.7%** of BIS’s FY2026 budget depending on ownership vs rental). Policy design tips from CSET:

- Start **flexible** (firms pick methods for a test period), then mandate or keep pluralism.
- **Centralize** diversion reporting responsibility so chips that change hands still have one accountable watcher.
- Prefer **BIS-certified trusted third parties** to operate landmark/reporting servers to reduce conflicts of interest.
- Scope initially to data-center chips under the strictest licensing; firmware-based signing balances robustness and implementability.

Staffing matters: alerts without analysts are theater. Indictments show PLV-like awareness might have shortened schemes even when it could not prevent first diversion—especially if “slow to activate” chips also raise flags.

## Hard limits (teach these next to the sales pitch)

- PLV detects diversion **after** it happens.
- Silent chips are ambiguous (diversion vs offline legitimate storage/transit).
- Adversaries may **spoof** permitted locations.
- Best-case ~city-level accuracy still cannot separate neighboring datacenters or some border cases.
- Location ≠ authorized **end user** if the chip never moves.
- Hardware PLV cannot retrofit chips already in the wild; software/firmware needs end-user update compliance.

## Classroom and practice checklist

Use this piece as a concept explainer, not a news brief. When teaching or briefing:

- Restate the **core mechanism** in one sentence before citing any organization or product name.
- Separate **what is measured** from **what is claimed**—numbers, thresholds, and evaluation designs are the durable content.
- Map at least one **failure mode** (silent fallback, overclaim, approval fatigue, distribution shift, or missing evidence chain).
- Name the **operator decision** the idea changes: release gating, procurement, curriculum design, facility build, or legal scope.
- Leave students with a **verification habit**: which primary source, diagnostic, or audit would falsify the headline?

These habits travel across geopolitics, privacy law, compute economics, agent harnesses, and applied science stacks alike.


## Why smuggling is structural

Globalized packaging and multi-hop reseller chains mean designers often never sell directly to end users—each hop is a diversion opportunity. DOJ indictments and journalism set a **floor** on known schemes; Epoch/CNAS-style models estimate the iceberg with wide uncertainty. Tracking systems raise smuggler costs and generate leads; they do not claim zero diversion. Teach enforcement as **detections-per-dollar under honest limits**, not as a perfect seal narrative.

Homework: score PLV vs physical inspection on verifiability, accuracy, security, repeatability—and then on detections-per-dollar using CSET’s cost bands.

## Takeaways

- Chip tracking is an **enforcement engineering** problem with explicit cost curves.
- Prefer methods that survive all four evaluation criteria; then optimize detections-per-dollar.
- Budget for **people, process, and honest limits** alongside landmark servers.
- Location verification generates leads and raises smuggler costs—it is not a perfect seal.

**Sources**

- [Should We Track AI Chips?](https://cset.georgetown.edu/article/should-we-track-ai-chips)
- [Tracking AI Chips: What Does It Cost?](https://cset.georgetown.edu/article/tracking-ai-chips-what-does-it-cost)
- [Tracking AI Chips](https://cset.georgetown.edu/publication/tracking-ai-chips)
