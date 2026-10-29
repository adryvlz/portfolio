import { EMAIL_ADDRESS, LINKEDIN_URL } from "@/lib/contact"

// The close: a calling card on cotton stock.
export function Contact() {
  return (
    <section id="contact" className="section section--l">
      <div className="container close">
        <div className="stock stock--framed calling">
          <h2 className="calling__name">Reach out anytime.</h2>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="link calling__email">
            {EMAIL_ADDRESS}
          </a>
          <div className="calling__meta">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link">
              LinkedIn
            </a>
            <span className="label">Atlanta, GA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
