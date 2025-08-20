import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adrian Velazquez – Portfolio',
  description: 'EE × Applied Math senior building reliable hardware for AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/linkedin', label: 'LinkedIn'}
  ];

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          AV
        </Link>

        <ul className="flex gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* your resume button here */}

          {/* Brown logo (hidden on very small screens if you want) */}
          <Link
            href="https://www.brown.edu/"
            aria-label="Brown University"
            className="hidden md:inline-flex items-center group"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Brown University</span>
            {/* Light mode asset */}
            <Image
              src="/brown-dark.png"
              alt=""
              width={110}
              height={28}
              className="h-6 w-auto dark:hidden opacity-80 transition group-hover:opacity-100"
              priority
            />
            </Link>
          </div>

        <Button asChild size="sm">
          <Link href="/Adrian Velazquez-Martinez DSP (Starlink).pdf" download>
            PDF Resume
          </Link>
        </Button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Adrian Velazquez
    </footer>
  );
}
