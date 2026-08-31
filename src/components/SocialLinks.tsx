import { Mail } from "lucide-react"
import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

// lucide-react v1.34 dropped brand icons; inline the LinkedIn glyph rather
// than add a whole new icon-pack dependency for a single mark.
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.53C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

interface SocialLinksProps {
  size?: "sm" | "md"
}

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "size-9" : "size-11"
  const icon = size === "sm" ? "size-4" : "size-5"

  return (
    <div className="flex items-center gap-3">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={`flex ${box} items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground`}
      >
        <LinkedInIcon className={icon} />
      </a>
      <a
        href={`mailto:${EMAIL_ADDRESS}`}
        aria-label="Email"
        className={`flex ${box} items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground`}
      >
        <Mail className={icon} />
      </a>
    </div>
  )
}
