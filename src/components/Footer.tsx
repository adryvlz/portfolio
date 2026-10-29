import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="footer proof proof--rise">
      <div className="container">
        <p className="footer__mark">Adrian Velazquez-Martinez</p>
        <ul className="footer__links">
          <li><a href="#badger" className="link">Badger</a></li>
          <li><a href="#experience" className="link">Experience</a></li>
          <li><a href="#about" className="link">About</a></li>
          <li><a href="#projects" className="link">Work</a></li>
          <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link">LinkedIn</a></li>
          <li><a href={`mailto:${EMAIL_ADDRESS}`} className="link">Email</a></li>
        </ul>
        <p className="label footer__legal">© {new Date().getFullYear()} Adrian Velazquez-Martinez</p>
      </div>
    </footer>
  )
}
