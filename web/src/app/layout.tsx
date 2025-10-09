import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Modern Marketing Associates",
  description:
    "Modern Marketing Associates – Hyderabad based distributor for AAC blocks, cement, tiles, plumbing materials, and construction supplies.",
  metadataBase: new URL("https://modernmarketingassociates.co.in"),
  openGraph: {
    title: "Modern Marketing Associates",
    description:
      "Modern Marketing Associates – Hyderabad based distributor for AAC blocks, cement, tiles, plumbing materials, and construction supplies.",
    url: "https://modernmarketingassociates.co.in",
    siteName: "Modern Marketing Associates",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-zinc-900`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
