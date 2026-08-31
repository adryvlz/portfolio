import { useCallback, useEffect, useState } from "react"

export interface ScrambleOptions {
  charset?: string
  staggerMs?: number
  resolveMs?: number
  flickerMs?: number
  // When false, the hook stays idle until restart() is called.
  // Useful for hover-triggered scrambles (nav items) that shouldn't
  // animate on initial mount.
  autoStart?: boolean
}

export interface ScrambleResult {
  display: string
  restart: () => void
}

export function useScrambleText(
  text: string,
  {
    charset = "01",
    staggerMs = 30,
    resolveMs = 500,
    flickerMs = 55,
    autoStart = true,
  }: ScrambleOptions = {},
): ScrambleResult {
  const [cycle, setCycle] = useState(0)
  const [display, setDisplay] = useState(text)

  const restart = useCallback(() => setCycle((c) => c + 1), [])

  useEffect(() => {
    if (cycle === 0 && !autoStart) {
      setDisplay(text)
      return
    }
    if (!text) {
      setDisplay("")
      return
    }

    const chars = text.split("")
    const start = performance.now()
    const resolveAt = chars.map((_, i) => start + i * staggerMs + resolveMs)

    const paint = () => {
      const now = performance.now()
      let allResolved = true
      const next = chars.map((ch, i) => {
        if (ch === " ") return " "
        if (now >= resolveAt[i]) return ch
        allResolved = false
        return charset[Math.floor(Math.random() * charset.length)]
      })
      setDisplay(next.join(""))
      return allResolved
    }

    if (paint()) return
    const id = window.setInterval(() => {
      if (paint()) window.clearInterval(id)
    }, flickerMs)

    return () => window.clearInterval(id)
  }, [text, charset, staggerMs, resolveMs, flickerMs, autoStart, cycle])

  return { display, restart }
}
