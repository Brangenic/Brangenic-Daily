# Assets

Drop production media here (see Parts A–C of the production pack). Filenames
must match exactly — the edit references them by these paths.

```
assets/
  live/    shot-01.mp4 … shot-10.mp4     # AI live-action, 16:9, no text/audio
  screen/  rec-01.mp4  … rec-12.mp4      # 1920×1080 screen recordings
  vo/      master.mp3  agents.mp3  developers.mp3  communities.mp3
           master.json                    # optional ElevenLabs word timestamps
  music/   bed.mp3                         # warm minimal music bed
```

Any file that is missing renders as a labeled placeholder slate instead of
crashing. Run a render/studio again after adding files — `npm run` hooks
re-scan this folder and regenerate `src/asset-manifest.ts`.
