import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container grid12 contact__grid">
        <h2>Reach out anytime.</h2>
        <div className="contact__body">
          <a href={`mailto:${EMAIL_ADDRESS}`} className="contact__email">
            {EMAIL_ADDRESS}
          </a>
          <div className="contact__meta">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link">
              LinkedIn
            </a>
            <span>Atlanta, GA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
