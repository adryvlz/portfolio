import { useEffect, useMemo, useReducer } from "react"

const COLS = 5

// Hardcoded 5x7 uppercase pixel font. Covers every character used in
// "Adrian Velazquez-Martinez" plus hyphen and space. Reliable across
// browsers — no canvas rasterisation quirks.
const FONT: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  I: ["01110", "00100", "00100", "00100", "00100", "00100", "01110"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  Q: ["01110", "10001", "10001", "10001", "10101", "10011", "01111"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
  Z: ["11111", "00001", "00010", "00100", "01000", "10000", "11111"],
  "-": ["00000", "00000", "00000", "11111", "00000", "00000", "00000"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
}

function getBitmap(char: string): boolean[][] {
  const rows = FONT[char.toUpperCase()] ?? FONT[" "]
  return rows.map((r) => r.split("").map((c) => c === "1"))
}

interface BinaryGlyphProps {
  char: string
  resolved: boolean
}

export function BinaryGlyph({ char, resolved }: BinaryGlyphProps) {
  const [, forceTick] = useReducer((n: number) => n + 1, 0)
  const bitmap = useMemo(() => getBitmap(char), [char])

  useEffect(() => {
    if (resolved) return
    const id = window.setInterval(forceTick, 65)
    return () => window.clearInterval(id)
  }, [resolved])

  return (
    <div
      aria-hidden="true"
      className="inline-grid font-mono leading-none tabular-nums"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1ch)`,
        gridAutoRows: "0.9em",
      }}
    >
      {bitmap.flat().map((on, i) => (
        <span key={i}>
          {resolved
            ? on
              ? "1"
              : ""
            : Math.random() < 0.5
              ? "0"
              : "1"}
        </span>
      ))}
    </div>
  )
}
