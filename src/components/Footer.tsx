import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container grid12 footer__grid">
        <p className="label footer__colophon">
          Adrian Velazquez-Martinez, hardware engineer in Atlanta. Photographs
          are my own. © {new Date().getFullYear()}
        </p>
        <ul className="footer__links">
          <li><a href="#projects" className="link">Work</a></li>
          <li><a href="#badger" className="link">Badger</a></li>
          <li><a href="#experience" className="link">Experience</a></li>
          <li><a href="#about" className="link">About</a></li>
          <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link">LinkedIn</a></li>
          <li><a href={`mailto:${EMAIL_ADDRESS}`} className="link">Email</a></li>
        </ul>
      </div>
    </footer>
  )
}
