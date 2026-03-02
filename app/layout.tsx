import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Kosala Dananjaya | Meta Ads Strategist — Scale With Ads That Deliver",
  description:
    "I help service-based businesses generate loyal customers through data-driven Meta advertising. Partner, not an agency. Based in Al Ain, UAE.",
  keywords: [
    "Meta Ads Specialist",
    "Meta Ads Strategist",
    "Social Media Manager",
    "Performance Marketing",
    "Lead Generation",
    "UAE",
    "Sri Lanka",
    "Kosala Dananjaya",
    "Facebook Ads",
    "Instagram Ads",
  ],
  openGraph: {
    title: "Kosala Dananjaya | Meta Ads Strategist",
    description:
      "Your Business, Scaled With Meta Ads That Deliver Loyal Customers.",
    type: "website",
    images: [
      {
        url: "/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Kosala Dananjaya — Meta Ads Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosala Dananjaya | Meta Ads Strategist",
    description:
      "Your Business, Scaled With Meta Ads That Deliver Loyal Customers.",
    images: ["/photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-bg text-fg`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <PageLoader />
          {children}
        </ThemeProvider>

        {/* ── Meta Pixel ─────────────────────────────────────────────────────
             IMPORTANT: Replace PASTE_YOUR_PIXEL_ID_HERE with your real
             Meta Pixel ID from Events Manager → Data Sources.
        ─────────────────────────────────────────────────────────────────── */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'PASTE_YOUR_PIXEL_ID_HERE');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PASTE_YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

