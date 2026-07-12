# Realm — Product Demo Video (Remotion v4)

A polished, ~75-second product demo for **Realm**, an all-in-one platform for
Caribbean real estate (agents, developers, property managers). Everything is
typographic + simple shapes + mocked UI cards built in React — no stock photos,
no emojis, silent/caption-driven.

This repo now holds **two** deliverables:

1. **`RealmDemo` / `RealmSquare`** — the original fully-synthetic typographic
   demo (no external assets, always renders).
2. **`Master` / `MasterVertical`** — a high-production film that edits real
   AI live-action clips, screen recordings, voiceover and music from
   `./assets`. Any missing asset renders as a labeled placeholder slate, so the
   film previews and renders before the footage arrives.

## The production film (`Master`)

Drop media into `./assets` (see `assets/README.md`), then:

```bash
npm run dev                 # Studio (re-scans assets first)
npm run render:master       # -> out/realm-master.mp4  (1920×1080)
npm run render:master-vertical  # -> out/realm-master-vertical.mp4 (1080×1920)
```

- **Length** is voiceover-driven: `Master` = `vo/master.mp3` duration + 3s tail
  (falls back to the timeline's base length when the VO is absent).
- **`src/timeline.ts` is the single retiming surface** — every segment, shot,
  focus region, caption and type card is declared as data. Change timings there
  without touching a component.
- **Editing language** lives in `src/components/`: `KenBurns`, `FocusZoom`
  (push toward the UI region the VO names), `ColorWash` (warm "Realm look" /
  cool cold-open grade), `BrowserFrame` (floating chrome for screen
  recordings), `CursorRing`, `TypeCard` (per-word reveals + count-ups),
  `Caption`, `PlaceholderSlate`, and `SafeVideo` (footage-or-placeholder).
- **Transitions**: crossfades within a world, whip-cuts between worlds, a green
  wipe into the finale (`src/transitions/`).
- **Audio**: VO is the master; the music bed ducks ~12 dB under it, swells in
  the finale, and fades out (`src/audio/Soundtrack.tsx`).
- **Captions**: synced to `vo/master.json` word timestamps when present,
  otherwise the timeline's declared caption cues (`src/captions/`).
- **Assets** are resolved through `src/asset-manifest.ts`, regenerated from
  `./assets` by `scripts/scan-assets.mjs` on every `npm run` (pre-hooks).

Cut-downs (`Agents` / `Developers` / `Communities`, one world each) can be added
on top of the same segment components once the master is locked.

## The Apple-style film (`Apple`)

A separate, dark-void product film (`src/apple/`) in the visual language of an
Apple launch video: one seamless environment, floating UI, enormous quiet
typography, morphs instead of cuts.

```bash
npm run dev                       # Studio
npx remotion render Apple out/realm-apple.mp4          # 1920×1080
npx remotion render AppleVertical out/realm-apple-vertical.mp4  # 1080×1920
```

- **Length** = `vo/apple-cut.mp3` duration + 2s (falls back to the scene
  timeline when the VO is absent).
- **`src/apple/timeline.ts`** declares all 11 scenes (durations, kinetic lines,
  accent words, focus regions) — the single retiming surface.
- **Design system** in `src/apple/`: `Void` (the one persistent environment),
  `KineticLine` (word-stagger type, one green accent word per line, gold for
  the price/logo), `FloatPanel` (device-less UI frame with reflection +
  perspective), `Fragments` (the convergence open), and a `morph` transition.
- **Scenes** (`src/apple/scenes/`): fragments converge → snap into one glowing
  rectangle → bloom into the dashboard → forms/signature → nudge lifts out →
  seller report assembles → commission count-up → website templates fan →
  copilot writes → `$15` price → "Realm." close.
- **Captions** are off by default (`withCaptions`); `AppleVertical` turns them
  on for social. Missing screen recordings render as placeholder slates.

## Original demo compositions

| ID            | Size       | FPS | Length            |
| ------------- | ---------- | --- | ----------------- |
| `RealmDemo`   | 1920×1080  | 30  | 2250 frames (75s) |
| `RealmSquare` | 1080×1080  | 30  | 2250 frames (75s) |

`RealmSquare` reuses the exact same scenes: the 1920×1080 canvas is scaled to
fit the square's width and centered (an Instagram-friendly cut).

## Commands

```bash
npm install

# Preview in Remotion Studio (opens the interactive editor)
npm run dev            # alias for: npx remotion studio

# Render the landscape master
npx remotion render RealmDemo out/realm-demo.mp4

# Render the square (Instagram) cut
npx remotion render RealmSquare out/realm-square.mp4
```

## Project structure

```
src/
  index.ts            registerRoot entry
  Root.tsx            <Composition> definitions (RealmDemo, RealmSquare)
  RealmVideo.tsx      the full TransitionSeries of scenes
  theme.ts            design tokens (colors, radii, fonts, motion)
  fonts.ts            @remotion/google-fonts loaders (Instrument Serif/Sans)
  anim.ts             frame-driven helpers (fadeRise, slideIn, countUp, slowScale)
  format.ts           number/currency formatting (J$1,734,000)
  components/         reusable primitives
    Type.tsx          Kicker / Headline / Em / Body
    Card.tsx  Pill.tsx  StatTile.tsx  PhoneFrame.tsx  Check.tsx
    CursorClick.tsx   Wordmark.tsx (Monogram)
  transitions/
    greenWipe.tsx     custom full-bleed green wipe presentation
  scenes/
    Scene1Hook.tsx ... Scene8Close.tsx   one file per storyboard scene
```

All animation is derived from `useCurrentFrame` / `interpolate` / `spring`
(no CSS animations) so renders are deterministic.

## Brand system

- **Fonts:** Instrument Serif (display, italic for emphasis) + Instrument Sans
  (body/UI), loaded via `@remotion/google-fonts`.
- **Colors:** paper `#f7f6f1`, ink `#141814`, green `#14523c`, panel `#101711`,
  gold `#b98f3e`, muted `#79837b`, hairline `#e6e4dc`, white `#ffffff`.
- **Motion:** gentle springs (high damping, no overshoot), fade+rise entrances,
  ~4-frame staggers, subtle held-shot scale. Transitions are quick crossfades
  and a full-bleed green wipe.

## Audio

The video is intentionally silent and caption-driven. See the `TODO(music)`
comment in `src/RealmVideo.tsx` for where to add a music bed.

## Rendering notes (headless environments)

`remotion.config.ts` points Remotion at a system Chromium via
`Config.setBrowserExecutable(...)` and enables
`Config.setChromiumIgnoreCertificateErrors(true)`. This lets the project render
where Remotion's own headless-shell download host is blocked and where a proxy
MITMs TLS for Google Fonts. Override the browser path with the
`REMOTION_BROWSER_EXECUTABLE` env var, or delete those lines to let Remotion
download its own browser on a normal machine.
