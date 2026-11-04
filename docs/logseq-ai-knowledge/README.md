# Project AI Knowledge — Logseq graph

Open this folder as a **local graph** in Logseq to browse the Project AI knowledge corpus (concepts, practices, problems, technologies, and teachable articles) with wiki links.

## Open in Logseq

1. Copy or download this entire folder (`logseq-ai-knowledge/`) to your machine (keep `pages/`, `journals/`, `logseq/`, and this `README.md` together).
2. Install / open [Logseq](https://logseq.com/) (desktop app).
3. **Logseq DB (current app):** **⋯ → Import → File to DB graph**, then choose **this folder** (`logseq-ai-knowledge` — the directory that contains `pages/` and `logseq/`, not a parent folder).
4. **Classic file-based Logseq:** **Open a local folder** and select the same folder (no import).
5. When the graph loads, open **[[Contents]]** (home is set to Contents in `logseq/config.edn`). If it does not open automatically, use the search bar (`Cmd/Ctrl + K`) and type `Contents`.

**Note:** DB import fails on 3-level tags (`#a/b/c`). This graph uses at most 2-level tags (`#corpus/aws-ml-blog`, `#cluster/…`).

## What’s inside

| Path | Purpose |
|------|---------|
| `pages/` | One page per concept/tech/problem/practice and per article, plus Contents, Clusters, cluster pages, corpus pages |
| `journals/` | Welcome journal entry pointing at start-here pages |
| `logseq/config.edn` | Minimal defaults (`Contents` as home, markdown) |
| `README.md` | These instructions |

**Page counts (this build):** 178 pages under `pages/` · 73 graph concepts/techs/problems/practices · 86 article pages.

## How to browse

- Start at **[[Contents]]** → start-here concepts → follow `[[wiki links]]` and relation properties (`enables::`, `related to::`, `example of::`, …).
- Open **[[Clusters]]** or any `Cluster — …` page for a thematic cut.
- Filter with tags such as `#start-here`, `#cluster/agentic-systems`, `#corpus/ibm-ai-knowledge`, `#article`.

## Source corpora (Project store)

- `docs/ibm-ai-knowledge/`
- `docs/sequoia-ai-knowledge/`
- `docs/extra-ai-knowledge/`
- Graph map: `docs/ai-knowledge-graph/`

See also: [`../logseq-setup.md`](../logseq-setup.md).
