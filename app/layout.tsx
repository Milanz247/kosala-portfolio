import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kosala Dananjaya | Social Media Manager & Meta Ads Specialist",
  description:
    "Helping service-based businesses generate inquiries and customers through social media and Meta advertising. Based in Al Ain, UAE.",
  keywords: [
    "Social Media Manager",
    "Meta Ads Specialist",
    "Performance Marketing",
    "UAE",
    "Sri Lanka",
    "Kosala Dananjaya",
  ],
  openGraph: {
    title: "Kosala Dananjaya | Social Media Manager & Meta Ads Specialist",
    description:
      "Helping service-based businesses generate inquiries through social media and Meta advertising.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

