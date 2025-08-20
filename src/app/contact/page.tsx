// src/app/(marketing)/contact/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact — Adrian Velazquez",
  description: "Email and phone for quick contact.",
};

const EMAIL = "adrian_velazquez-martinez@brown.edu";
const PHONE = "+1 (401) 346-6378";     

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        The fastest ways to reach me.
      </p>

      <div className="mt-8 space-y-4">
        {/* Email */}
        <div className="flex items-center justify-between rounded-xl border p-4">
          <div>
            <div className="text-sm text-muted-foreground">Email</div>
            <a href={`mailto:${EMAIL}`} className="text-lg font-medium">
              {EMAIL}
            </a>
          </div>
          <Button asChild variant="outline">
            <a href={`mailto:${EMAIL}`}>Email me</a>
          </Button>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between rounded-xl border p-4">
          <div>
            <div className="text-sm text-muted-foreground">Phone</div>
            <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="text-lg font-medium">
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Calendly link for later :D */}
      {/* <p className="mt-8 text-sm text-muted-foreground">
        Prefer scheduling? <a className="underline" href="https://calendly.com/your-handle/15min" target="_blank" rel="noreferrer">Book a 15-minute chat</a>.
      </p> */}
    </main>
  );
}
