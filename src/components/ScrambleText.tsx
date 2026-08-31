import {
  type ScrambleOptions,
  useScrambleText,
} from "@/hooks/useScrambleText"

interface ScrambleTextProps
  extends Omit<ScrambleOptions, "autoStart"> {
  children: string
}

// Hover-triggered scramble wrapper. Reuses the exact useScrambleText hook
// from the hero name reveal (spec §4 — do NOT reimplement).
// Defaults are tuned to the spec's ~400-600ms window: for an 8-char label
// like "About Me", 300 + 7*25 = ~475ms; for a 12-char label like
// "Contact Info", ~575ms.
export function ScrambleText({
  children,
  resolveMs = 300,
  staggerMs = 25,
  ...rest
}: ScrambleTextProps) {
  const { display, restart } = useScrambleText(children, {
    ...rest,
    resolveMs,
    staggerMs,
    autoStart: false,
  })

  return (
    <span
      onMouseEnter={restart}
      onFocus={restart}
      className="inline-block tabular-nums"
    >
      {display}
    </span>
  )
}
