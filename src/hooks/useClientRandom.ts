import { useEffect, useState } from "react"

// Picks one item from `items` at random, but only after the component mounts
// on the client. Returns `null` on first render (so callers can show a
// skeleton) and swaps to the picked value once useEffect runs. If `items`
// is empty, stays `null` forever — callers keep showing the skeleton until
// real data arrives.
//
// Client-side pick is required for randomized content that would otherwise
// cause hydration mismatches in SSR frameworks. Even under Vite (CSR-only),
// keeping the picked value out of the initial render matches spec §14's
// intent: reserve dimensions up front, then swap in the real content.
export function useClientRandom<T>(items: readonly T[]): T | null {
  const [picked, setPicked] = useState<T | null>(null)

  useEffect(() => {
    if (items.length === 0) return
    const index = Math.floor(Math.random() * items.length)
    setPicked(items[index])
  }, [items])

  return picked
}
