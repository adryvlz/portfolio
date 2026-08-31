import { ScrambleText } from "@/components/ScrambleText"

const NAV_ITEMS = [
  { label: "About Me", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Contact Info", target: "contact" },
] as const

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={item.target ? () => scrollToSection(item.target) : undefined}
              className="cursor-pointer"
            >
              <ScrambleText>{item.label}</ScrambleText>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
