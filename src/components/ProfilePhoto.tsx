import { motion } from "motion/react"
import { Skeleton } from "@/components/ui/skeleton"
import { useClientRandom } from "@/hooks/useClientRandom"
import { PHOTOS } from "@/lib/photos"

// Ported from Figma node 4:33 (hero-media). Portrait (4:5) photo slot with
// two alma mater "pins" that overhang the top corners. Pins are anchor
// links to each school's homepage, opening in a new tab. Pin wrapper lives
// on an outer relative container so pins escape the photo's overflow-clip.
export function ProfilePhoto() {
  const src = useClientRandom(PHOTOS)

  return (
    <div className="relative shrink-0">
      <div className="relative aspect-[4/5] w-60 overflow-clip rounded-3xl border border-border shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] md:w-80">
        <Skeleton className="absolute inset-0 size-full" />
        {src && (
          <motion.img
            src={src}
            alt="Portrait of Adrian Velazquez-Martinez"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 size-full object-cover"
          />
        )}
      </div>
      <AlmaPin
        position="left"
        delay={0.8}
        label="Georgia Tech"
        href="https://www.gatech.edu"
        src="/logos/gatech.png"
      />
      <AlmaPin
        position="right"
        delay={1.0}
        label="Brown"
        href="https://www.brown.edu"
        src="/logos/brown.png"
        imgPadding="p-0.5"
      />
    </div>
  )
}

interface AlmaPinProps {
  position: "left" | "right"
  delay: number
  label: string
  href: string
  src?: string
  imgPadding?: string
}

function AlmaPin({
  position,
  delay,
  label,
  href,
  src,
  imgPadding = "p-1.5",
}: AlmaPinProps) {
  const positionClass = position === "left" ? "-top-3 -left-3" : "-top-3 -right-3"

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`absolute ${positionClass} flex size-11 items-center justify-center overflow-clip rounded-full border border-border bg-card shadow-md transition-shadow hover:shadow-lg`}
    >
      {src ? (
        <img src={src} alt={label} className={`size-full object-contain ${imgPadding}`} />
      ) : (
        <span className="text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      )}
    </motion.a>
  )
}
