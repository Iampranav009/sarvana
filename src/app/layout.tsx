import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import { SiteHeader } from "@/components/SiteHeader";
import { StudioFooter } from "@/components/StudioFooter";
import "./footer.css";
import "./contact.css";
import "./business.css";
import { site } from "@/lib/site";
import "./creative-folders.css";
import "./volumetric-hero.css";
import "./orbit-capabilities.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
 metadataBase: new URL(site.url), title: "Sarvana | Website, App and CRM Development in Yavatmal", description: site.description,
 openGraph: { title: site.tagline, description: site.description, siteName: site.name, type: "website", locale: "en_IN" },
 twitter: { card: "summary_large_image", title: site.tagline, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full bg-[#050608] text-[#f4f6fa] antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050608] selection:bg-cyan-400 selection:text-black">
        <SiteHeader/>{children}<StudioFooter/><div className="mobile-contact-bar"><a href={site.whatsapp}>WhatsApp ↗</a><a href="tel:+919156332109">Call Pranav ↗</a></div>
      </body>
    </html>
  );
}
