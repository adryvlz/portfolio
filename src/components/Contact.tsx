import { SocialLinks } from "@/components/SocialLinks"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-8 px-6 py-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Contact
      </h2>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
        <SocialLinks />
        <p className="text-sm text-muted-foreground md:text-base">
          reach out anytime! :D
        </p>
      </div>
    </section>
  )
}
