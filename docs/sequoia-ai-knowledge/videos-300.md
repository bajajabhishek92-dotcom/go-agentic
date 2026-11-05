# Sequoia Capital videos (300 inventory)

Expanded corpus for [Sequoia Capital on YouTube](https://www.youtube.com/@sequoia/videos). Prior run capped at 100; this inventory targets **300** uploads.

## Where to browse

| What | Path |
|------|------|
| 300-target inventory (JSON) | `/cursor/stores/self/internal/sequoia-videos-300.json` |
| Prior 100 inventory (preserved) | `/cursor/stores/self/internal/sequoia-videos-100.json` |
| Transcript text files | `/cursor/stores/self/internal/transcripts/sequoia/<videoId>.txt` |
| Theme articles (from earlier 100) | [`index.md`](./index.md) |

Every listed video has a matching `.txt` under `transcripts/sequoia/`.

## Counts (this expansion)

| Metric | Value |
|--------|------:|
| Previous cap / inventory | 100 |
| Target | 300 |
| Listed (channel uploads available) | **192** |
| Full transcript text files | **192** |
| Pending | 0 |

## Channel hard cap

`yt-dlp` flat listing of the Sequoia uploads surface returns **192** videos—fewer than 300 exist on that link. Inventory target remains 300; listing stops at channel size.

Transcripts came from Sequoia podcast HTML (`sequoiacap.com/podcast`) where titles matched, plus WebFetch YouTube captions for the rest (same cloud IP blocks direct caption APIs as IBM).
