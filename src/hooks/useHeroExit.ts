import { useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"

// Returns `docked = true` once the user has scrolled past `threshold * viewport height`.
// Single source of truth: gates the Header mount AND drives NameLockup mode switching.
export function useHeroExit(threshold = 0.6): boolean {
  const { scrollY } = useScroll()
  const [docked, setDocked] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    setDocked(y > window.innerHeight * threshold)
  })

  return docked
}
