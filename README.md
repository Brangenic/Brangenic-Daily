# Realm — Product Demo Video (Remotion v4)

A polished, ~75-second product demo for **Realm**, an all-in-one platform for
Caribbean real estate (agents, developers, property managers). Everything is
typographic + simple shapes + mocked UI cards built in React — no stock photos,
no emojis, silent/caption-driven.

## Compositions

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
