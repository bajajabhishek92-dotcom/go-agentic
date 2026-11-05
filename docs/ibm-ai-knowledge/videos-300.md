# IBM Technology videos (300 inventory)

Expanded corpus listing for [IBM Technology on YouTube](https://www.youtube.com/@IBMTechnology/videos). Prior run capped at 100; this inventory targets **300** uploads.

## Where to browse

| What | Path |
|------|------|
| 300-video inventory (JSON) | `/cursor/stores/self/internal/ibm-videos-300.json` |
| Prior 100 inventory (preserved) | `/cursor/stores/self/internal/ibm-videos-100.json` |
| Transcript text files | `/cursor/stores/self/internal/transcripts/ibm/<videoId>.txt` |
| Theme articles (from earlier 100) | [`index.md`](./index.md) |

Open the JSON inventory, pick a video `id`, then open the matching `.txt` under `transcripts/ibm/` when `transcript_status` is `ok`.

## Counts (this expansion)

| Metric | Value |
|--------|------:|
| Previous cap / inventory | 100 |
| Target | 300 |
| Listed in 300 inventory | 300 |
| Full transcript text files on disk | 232 |
| Prior-100 ok (text not re-persisted) | 68 |
| Still pending full text | 0 |
| Confirmed no_captions | 0 |

`ok_prior_inventory` means the earlier AL-1 run already had a usable transcript marked ok; the spoken text was not re-copied into `transcripts/ibm/` in this pass. Prefer on-disk `.txt` files when present.

Pending ids file is empty: `/cursor/stores/self/internal/ibm-videos-300-pending-ids.txt` (0).

## Method / notes

- `youtube-transcript-api` and `yt-dlp` caption/download fail on this cloud IP (`LOGIN_REQUIRED` / bot check).
- YouTube timedtext API returns empty from cloud curl; channel RSS 404.
- Reliable path was **WebFetch** of the watch page (spoken captions), hand-persisted into `transcripts/ibm/`.
- Jina returns page chrome / 401 Unauthorized (not spoken captions).
- All 39 previously pending ids now have spoken captions on disk (including `TjvT9sI5mLE`, which was previously suspected promo-only).

Playlist listing itself succeeded at 300 via `yt-dlp --flat-playlist`.
