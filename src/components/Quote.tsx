import { motion } from "motion/react"
import { Skeleton } from "@/components/ui/skeleton"
import { useClientRandom } from "@/hooks/useClientRandom"
import { QUOTES } from "@/lib/quotes"

// Sits above the Footer as a parting sign-off. Reserves min-h up front
// (spec §14) so the skeleton→quote swap never shifts the page.
export function Quote() {
  const quote = useClientRandom(QUOTES)

  return (
    <section className="mx-auto flex max-w-3xl items-center justify-center px-6 py-16">
      <div className="relative flex min-h-24 w-full items-center justify-center">
        {!quote && <Skeleton className="h-6 w-3/4" />}
        {quote && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center text-base italic text-muted-foreground md:text-lg"
          >
            &ldquo;{quote.text}&rdquo;
            {quote.attribution && (
              <footer className="mt-2 text-xs not-italic text-muted-foreground/70">
                — {quote.attribution}
              </footer>
            )}
          </motion.blockquote>
        )}
      </div>
    </section>
  )
}
