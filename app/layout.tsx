import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-bg text-fg`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

