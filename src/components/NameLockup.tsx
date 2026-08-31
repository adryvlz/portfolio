import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { BinaryGlyph } from "@/components/BinaryGlyph"

const LINE_1 = "Adrian"
const LINE_2 = "Velazquez-Martinez"
const INITIAL_HOLD_MS = 1000 // pure-scramble hold before anything resolves
const STAGGER_MS = 45

interface NameLockupProps {
  mode: "full" | "docked"
}

export function NameLockup({ mode }: NameLockupProps) {
  if (mode === "docked") {
    return (
      <motion.button
        type="button"
        layoutId="name-lockup"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="cursor-pointer text-lg font-semibold tracking-wide leading-none"
      >
        AVM
      </motion.button>
    )
  }
  return <FullName />
}

function FullName() {
  const totalChars = LINE_1.length + LINE_2.length
  const [resolvedCount, setResolvedCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const tick = () => {
      const elapsed = performance.now() - start
      if (elapsed < INITIAL_HOLD_MS) {
        setResolvedCount(0)
        return false
      }
      const idx = Math.floor((elapsed - INITIAL_HOLD_MS) / STAGGER_MS)
      const clamped = Math.max(0, Math.min(totalChars, idx))
      setResolvedCount(clamped)
      return clamped >= totalChars
    }
    if (tick()) return
    const id = window.setInterval(() => {
      if (tick()) window.clearInterval(id)
    }, 60)
    return () => window.clearInterval(id)
  }, [totalChars])

  let cursor = 0
  const renderChar = (ch: string) => {
    const idx = cursor++
    return <BinaryGlyph key={idx} char={ch} resolved={idx < resolvedCount} />
  }

  return (
    <motion.div
      layoutId="name-lockup"
      className="flex flex-col gap-4 text-[10px] md:text-[14px] lg:text-[18px]"
    >
      <div className="flex gap-2">{LINE_1.split("").map(renderChar)}</div>
      <div className="flex gap-2">{LINE_2.split("").map(renderChar)}</div>
      <span className="sr-only">
        {LINE_1} {LINE_2}
      </span>
    </motion.div>
  )
}
