import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  className?: string;
};

// define the section cards
function SectionCard({ title, description, href, cta, className }: CardProps) {
  return (
    <div
      className={[
        "group rounded-xl border p-6 shadow-sm",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl hover:border-foreground/15",
        "hover:bg-gray-50 dark:hover:bg-zinc-900/40",
        "focus-within:ring-2 focus-within:ring-primary/30",
        "motion-reduce:transition-none motion-reduce:hover:transform-none",
        className ?? "",
      ].join(" ")}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-4">
        <Button asChild>
          <Link href={href} className="inline-flex items-center">
            {cta}
            <span
              aria-hidden
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

// setup home with cards and re-routing
export default function Home() {
  return (
    <main>
      {/* Welcome / Hero */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome, I’m Adrian - EE × Applied Math @ Brown University
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Previously worked with HP & Honeywell Aerospace for topics in AI and circuit
          design and integration. Graduating Spring 2026.
        </p>
      </section>

      {/* Section Cards */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <SectionCard
      title="About"
      description="Quick background and focus areas."
      href="/about"
      cta="Read about me"
    />
    <SectionCard
      title="Resume"
      description="One-page HTML view plus a downloadable PDF. Click top right corner!"
      href="/resume"
      cta="Open resume"
    />
    <SectionCard
      title="Projects"
      description="Selected work with reports, GitHub links, and slides"
      href="/projects"
      cta="Explore projects"
    />
    <SectionCard
    title="LinkedIn"
    description="Let's connect!"
    href='https://www.linkedin.com/in/adrian-velazquez-martinez-24b1b8225/'
    cta="LinkedIn"
    />
  </div>
      </section>
    </main>
  );
}

// setup the individual webpages for About, Resume(?), and projects
