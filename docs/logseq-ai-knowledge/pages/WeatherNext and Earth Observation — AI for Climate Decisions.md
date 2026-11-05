title:: WeatherNext and Earth Observation — AI for Climate Decisions
type:: article
cluster:: science-frontier
cluster-name:: Science, Frontier & Interpretability
corpus:: extra-ai-knowledge/deepmind-blog
tags:: #article #corpus/deepmind-blog #cluster/science-frontier
node-id:: a-weathernext-climate-earth
source-path:: /cursor/stores/self/docs/extra-ai-knowledge/deepmind-blog/weathernext-climate-earth.md
original-label:: WeatherNext and Earth Observation: AI for Climate Decisions

- #cluster/science-frontier
- #corpus/deepmind-blog
- blurb:: Weather and land-cover AI convert research models into **decision infrastructure**—hourly forecasts in consumer products, energy and agriculture variables, and forest maps that distinguish what “green” actually is.

## Relations

- example of:: [[Climate & Earth Observation AI]] — Discussed in article
- related to:: [[Science Agent Workflows]] — Discussed in article

## Article

# WeatherNext and Earth Observation: AI for Climate Decisions

- Weather and land-cover AI convert research models into **decision infrastructure**—hourly forecasts in consumer products, energy and agriculture variables, and forest maps that distinguish what “green” actually is.

## WeatherNext 3: from physics grids to observation-driven forecasts

- Traditional numerical weather prediction leans on physics simulations. WeatherNext 3 emphasizes learning from **real-time observations**, including hourly geostationary satellite mosaics, to refresh forecasts more often and at sharper resolution.

- Teachable upgrades:

- **Resolution** — surface variables down to ~5 km (vs ~25 km / 6-hour steps in the prior generation), with coarser grids for some atmospheric fields—about 5× sharper overall.
- **Architecture sketch** — a Functional Generative Network (FGN) mesh transformer ingesting live satellite data plus historical analysis; outputs dense grids, cyclone tracks, and station-level points.
- **Productization** — integration across Search, Maps, Gemini, Maps Platform, and Cloud so accuracy gains reach users and developers.
- **Domain variables** — precipitation quality and clean-energy-relevant fields, tying forecasts to agriculture and renewables—not only umbrella decisions.
- Independent live evaluations (e.g. Brightband) are used as external validation—another instance of “don’t only trust in-house scores.”

## Beyond tree cover: forest typology

- From space, old-growth rainforest, eucalyptus plantation, and oil palm can look like the same green. Carbon and biodiversity differ radically. **ForTy 2020** (with WRI and IIASA) maps every 10×10 m patch into forest/land-use types and tracks yearly change (2017–2025 early series)—not just loss of tree cover, but **what replaced it**. That typology is a baseline for regulations such as the EU deforestation rules.

## Why this is teachable AI practice

- **Task definition beats model hype** — “tree cover” was the wrong label for conservation; typology fixed the question.
- **Operational cadence** — hourly refresh and product embedding matter as much as benchmark RMSE.
- **Multi-resolution outputs** — match spatial/temporal detail to the decision (local topography vs global wind).
- **Partnerships** — scientific institutes and agencies turn models into shared maps and forecasts others can rely on.
- Related cyclone-focused WeatherNext work and AlphaEarth-style planetary mapping extend the same theme: Earth systems as first-class AI application domains with public-good distribution.

- **Sources**

- [Introducing WeatherNext 3, our most advanced and accurate global weather AI model](https://deepmind.google/blog/introducing-weathernext-3-our-most-advanced-and-accurate-global-weather-ai-model/)
- [WeatherNext: AI model achieves breakthrough in forecasting cyclones](https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/)
- [Beyond tree cover: mapping the world’s forest types](https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/)

## Navigation

- Cluster:: [[Cluster - Science, Frontier & Interpretability]]
- Corpus:: [[Corpus - DeepMind Blog]]
- [[Clusters]]
- [[Contents]]
