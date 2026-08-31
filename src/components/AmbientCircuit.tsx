import { useEffect, useState } from "react"
import { CircuitCanvas } from "@/components/CircuitCanvas"

// Full-viewport ambient layer. Sits behind everything (fixed inset-0 -z-10),
// pointer-events-none so it doesn't intercept clicks. Uses respawnMode
// "random" so lines respawn distributed across the viewport rather than
// emanating from one center — reads as sparse ambient rather than radial.
export function AmbientCircuit() {
  const [size, setSize] = useState<{ w: number; h: number } | null>(null)

  useEffect(() => {
    const measure = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight })
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  if (!size) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-40"
      aria-hidden="true"
    >
      <CircuitCanvas
        width={size.w}
        height={size.h}
        lineCount={20}
        respawnMode="random"
        trailAlpha={0.05}
        frameSkip={6}
        className="size-full"
      />
    </div>
  )
}
