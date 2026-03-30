import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Uniquely You! Raleigh Metro",
  description: "How Uniquely You! Raleigh Metro handles your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Back</Link>
      <h1 className="mt-4 font-display text-3xl text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: March 29, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">What We Collect</h2>
          <p>When you subscribe, nominate someone, or contact us, we may collect your name, email, phone number, and business details via Google Forms.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">How We Use It</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Deliver the free monthly magazine</li>
            <li>Follow up on story nominations and business inquiries</li>
            <li>Send community updates and resources</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Data Storage</h2>
          <p>Form submissions go to Google Sheets. We do not sell or share your information with third parties outside of N2 Company operations.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Your Rights</h2>
          <p>Request data access or deletion anytime: <a href="mailto:will.sigmon@n2co.com" className="underline text-primary">will.sigmon@n2co.com</a></p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p>Uniquely You! Raleigh Metro is a publication of <a href="https://n2co.com" target="_blank" rel="noopener noreferrer" className="underline text-primary">The N2 Company</a>.</p>
        </section>
      </div>
    </main>
  );
}
