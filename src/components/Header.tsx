import { type ReactNode } from "react"
import { motion } from "motion/react"

interface HeaderProps {
  children?: ReactNode
}

// Persistent-once-docked. Fades + slides in from the top on mount so it
// arrives smoothly at the moment the hero unmounts. The scroll-hide-on-
// direction behavior from the spec's original snippet was removed based
// on user feedback: AVM should remain visible throughout post-hero scroll,
// only unmounting when the user scrolls back into the hero (handled by
// useHeroExit at the App level).
export function Header({ children }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 h-14"
    >
      {children}
    </motion.header>
  )
}
