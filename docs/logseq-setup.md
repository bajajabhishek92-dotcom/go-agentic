# Open the AI knowledge corpus in Logseq

The packaged graph lives in this repository at **[`docs/logseq-ai-knowledge/`](logseq-ai-knowledge/)**.

## Logseq DB (current desktop app)

1. Clone this repo and check out the branch that contains `docs/logseq-ai-knowledge/`.
2. In Logseq: **⋯ → Import → File to DB graph**.
3. Select the folder `docs/logseq-ai-knowledge` (must contain `pages/` and `logseq/`).
4. When import finishes, open **[[Contents]]** (`Cmd/Ctrl + K` → `Contents`).

If you see `Nothing found for entity id [:block/uuid …]`, discard the empty failed graph and import again after pulling the latest branch (3-level tags like `#a/b/c` break DB import; this graph uses at most `#a/b`).

## Classic file-based Logseq (optional)

If you still have file-graph Logseq: **open a local folder** pointing at `docs/logseq-ai-knowledge` (no import step).

Full layout notes: [`logseq-ai-knowledge/README.md`](logseq-ai-knowledge/README.md).

This build has **178** pages under `pages/`.
