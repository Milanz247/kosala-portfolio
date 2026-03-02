import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Kosala Dananjaya",
  description: "Privacy Policy for Kosala Dananjaya — Meta Ads Strategist & Social Media Manager.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-20 sm:py-28">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-fg-subtle hover:text-[#FF7A00] transition-colors mb-10 group"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#FF7A00] font-black text-base">K</span>
          </div>
          <span className="text-sm text-fg-subtle">kosala-dananjaya.com</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-fg mb-2 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-fg-subtle text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-fg-muted leading-relaxed text-sm sm:text-base">

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">1. Who We Are</h2>
            <p>
              This website is operated by <strong className="text-fg">Kosala Dananjaya</strong>, a Meta Ads Strategist
              and Social Media Manager based in Al Ain, UAE. When we say &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our,&rdquo; we mean Kosala Dananjaya and this website.
            </p>
            <p className="mt-2">
              Contact:{" "}
              <a href="mailto:dananjayaherath077@gmail.com" className="text-[#FF7A00] hover:underline">
                dananjayaherath077@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>
                <strong className="text-fg">Contact information</strong> — your name, email address, phone number,
                or WhatsApp number if you reach out to us directly.
              </li>
              <li>
                <strong className="text-fg">Usage data</strong> — pages visited, time spent on the site, browser type,
                and device information, collected automatically through cookies and analytics tools.
              </li>
              <li>
                <strong className="text-fg">Meta Pixel data</strong> — this website uses the Meta Pixel to measure
                the effectiveness of advertising and understand how visitors interact with our pages. This may
                include information about your browsing behavior if you have visited Meta (Facebook/Instagram)
                platforms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>To respond to your inquiries and provide the services you request.</li>
              <li>To improve the website experience and content.</li>
              <li>
                To run and optimize advertising campaigns on Meta platforms (Facebook and Instagram) — including
                retargeting website visitors and building lookalike audiences.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">4. Meta Pixel &amp; Cookies</h2>
            <p className="mb-2">
              This website uses the <strong className="text-fg">Meta Pixel</strong> (a JavaScript code snippet
              provided by Meta Platforms, Inc.) to:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>Track page views and specific actions (e.g., clicking a WhatsApp button).</li>
              <li>Measure conversions from Meta ad campaigns.</li>
              <li>Build Custom Audiences for retargeting.</li>
            </ul>
            <p className="mt-3">
              The Meta Pixel stores cookies on your device. You can opt out of interest-based advertising from
              Meta by visiting{" "}
              <a
                href="https://www.facebook.com/ads/preferences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7A00] hover:underline"
              >
                facebook.com/ads/preferences
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">5. Sharing of Information</h2>
            <p>
              We do <strong className="text-fg">not</strong> sell, trade, or rent your personal information to
              third parties. We may share data with:
            </p>
            <ul className="list-disc list-outside ml-5 mt-2 space-y-1.5">
              <li>
                <strong className="text-fg">Meta Platforms, Inc.</strong> — via the Meta Pixel for advertising
                and measurement purposes, subject to Meta&apos;s own Privacy Policy.
              </li>
              <li>
                Service providers who assist us in operating the website, provided they agree to keep your
                information confidential.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">6. Data Retention</h2>
            <p>
              We retain personal contact information only as long as necessary to respond to your inquiry or
              fulfil a service relationship. Pixel and analytics data is retained as per the standard data
              retention policies of Meta and our analytics provider.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5">
              <li>Access, correct, or delete personal information we hold about you.</li>
              <li>Withdraw consent for data processing at any time.</li>
              <li>Object to the processing of your data for direct marketing.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:dananjayaherath077@gmail.com" className="text-[#FF7A00] hover:underline">
                dananjayaherath077@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">8. Third-Party Links</h2>
            <p>
              This website contains links to third-party platforms (LinkedIn, Instagram, WhatsApp,
              Calendly). We are not responsible for the privacy practices of these external sites. Please
              review their privacy policies individually.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">9. Security</h2>
            <p>
              We take reasonable precautions to protect your information. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with
              an updated date. Continued use of the website after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-fg mb-3">11. Contact</h2>
            <p>
              For any questions about this Privacy Policy, contact:{" "}
              <a href="mailto:dananjayaherath077@gmail.com" className="text-[#FF7A00] hover:underline">
                dananjayaherath077@gmail.com
              </a>
            </p>
          </section>

        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 border-t border-card-border flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-fg-subtle hover:text-[#FF7A00] transition-colors flex items-center gap-1.5"
          >
            ← Return to Homepage
          </Link>
          <span className="text-xs text-fg-subtle">© {new Date().getFullYear()} Kosala Dananjaya</span>
        </div>

      </div>
    </main>
  );
}
