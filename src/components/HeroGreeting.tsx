import { motion } from "motion/react"

// Staggered fade + slide-down — "Hello!" leads, "Hola!" follows ~250ms
// later so the greeting reads left-to-right instead of arriving at once.
// Small motion budget so it stays out of the way of the name scramble
// that starts shortly after in NameLockup.
export function HeroGreeting() {
  return (
    <p className="text-sm font-medium text-brand md:text-base">
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="inline-block"
      >
        Hello!
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        className="inline-block"
      >
        Hola!
      </motion.span>
    </p>
  )
}
