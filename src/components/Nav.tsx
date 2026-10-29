import { useEffect, useState } from "react"
import { EMAIL_ADDRESS } from "@/lib/contact"

const NAV_ITEMS = [
  { label: "Badger", target: "badger" },
  { label: "Experience", target: "experience" },
  { label: "About", target: "about" },
  { label: "Work", target: "projects" },
] as const

// Floating pill. Under 60rem the links fold behind a menu button; under
// 40rem the email action moves into that menu too.
export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="nav">
      <nav className="nav__bar" aria-label="Main">
        <a href="#top" className="nav__mark">
          Adrian Velazquez-Martinez
        </a>
        <ul className="nav__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <a href={`#${item.target}`}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav__menu-btn"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <a href={`mailto:${EMAIL_ADDRESS}`} className="btn nav__email">
          Email
        </a>
        {open && (
          <ul id="nav-panel" className="nav__panel">
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <a href={`#${item.target}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL_ADDRESS}`}>Email</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
