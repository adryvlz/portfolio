import { motion, useScroll, useTransform } from "motion/react"
import { HeroGreeting } from "@/components/HeroGreeting"
import { HeroTagline } from "@/components/HeroTagline"
import { NameLockup } from "@/components/NameLockup"
import { ProfilePhoto } from "@/components/ProfilePhoto"

interface HeroProps {
  docked: boolean
}

export function Hero({ docked }: HeroProps) {
  const { scrollY } = useScroll()

  // Fade + gentle upward drift as the user scrolls into the first ~40vh.
  // Reaches opacity 0 before useHeroExit unmounts the hero at 60vh, so
  // the unmount happens while content is already invisible — no pop.
  const opacity = useTransform(scrollY, (y) => {
    const vh = typeof window !== "undefined" ? window.innerHeight : 800
    return Math.max(0, 1 - y / (vh * 0.4))
  })
  const yShift = useTransform(scrollY, (y) => -Math.min(y * 0.15, 80))

  return (
    <section className="flex min-h-screen items-center px-8 md:px-16">
      {!docked && (
        <motion.div
          style={{ opacity, y: yShift }}
          className="flex w-full flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12"
        >
          <div className="flex flex-col gap-6">
            <HeroGreeting />
            <NameLockup mode="full" />
            <HeroTagline />
          </div>
          <div className="md:mr-16 lg:mr-24">
            <ProfilePhoto />
          </div>
        </motion.div>
      )}
    </section>
  )
}
