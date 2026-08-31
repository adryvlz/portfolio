import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

interface Line {
  x: number
  y: number
  width: number
}

interface CircuitCanvasProps {
  width: number
  height: number
  lineCount?: number
  stepSize?: number
  respawnMode?: "center" | "random"
  color?: string
  trailAlpha?: number
  frameSkip?: number
  className?: string
}

// Port of thomaskrakow's Signalz technique (CodePen zYWqezM). Adapted to
// erase trails via `destination-out` instead of the source's black overlay
// so the canvas surface stays transparent and doesn't dim the page behind
// it. `frameSkip` controls how often the simulation advances — higher =
// slower motion, calmer ambient feel.
export function CircuitCanvas({
  width,
  height,
  lineCount = 50,
  stepSize = 20,
  respawnMode = "center",
  color = "#8395c1",
  trailAlpha = 0.1,
  frameSkip = 2,
  className,
}: CircuitCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    const center = { x: Math.round(width / 2), y: Math.round(height / 2) }

    const spawn = (): Line => {
      const origin =
        respawnMode === "random"
          ? { x: Math.random() * width, y: Math.random() * height }
          : center
      return { x: origin.x, y: origin.y, width: Math.random() * 1 + 0.25 }
    }

    const lines: Line[] = Array.from({ length: lineCount }, spawn)

    const advance = () => {
      // Trail decay: erase alpha proportional to trailAlpha so old strokes
      // fade to transparent (background shows through).
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`
      ctx.fillRect(0, 0, width, height)
      ctx.globalCompositeOperation = "source-over"

      ctx.strokeStyle = color
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        ctx.lineWidth = line.width
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)

        let dir = Math.floor(Math.random() * 3) * 90
        if (i % 4 === dir / 90) dir = 270

        if (dir === 0) line.y -= stepSize
        else if (dir === 90) line.x += stepSize
        else if (dir === 180) line.y += stepSize
        else if (dir === 270) line.x -= stepSize

        ctx.lineTo(line.x, line.y)

        if (line.x < 0 || line.x > width || line.y < 0 || line.y > height) {
          const respawned = spawn()
          line.x = respawned.x
          line.y = respawned.y
        }

        ctx.stroke()
      }
    }

    if (reducedMotion) {
      for (let n = 0; n < 20; n++) advance()
      return
    }

    let drawNo = 0
    let rafId = 0
    const tick = () => {
      rafId = requestAnimationFrame(tick)
      drawNo++
      if (drawNo % frameSkip !== 0) return
      advance()
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [
    width,
    height,
    lineCount,
    stepSize,
    respawnMode,
    color,
    trailAlpha,
    frameSkip,
    reducedMotion,
  ])

  return <canvas ref={canvasRef} className={className} />
}
