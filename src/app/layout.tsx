import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "SERVANA — Creative Studio | We Build What's Next",
  description:
    "Designing digital experiences that redefine what's possible. Creative studio founded and directed by Pranav Shinde.",
  keywords: [
    "SERVANA",
    "Creative Studio",
    "Pranav Shinde",
    "Digital Experiences",
    "Spatial Interfaces",
    "Editorial Futurism",
  ],
  authors: [{ name: "Pranav Shinde" }],
  creator: "Pranav Shinde",
  openGraph: {
    title: "SERVANA — Creative Studio",
    description: "Designing digital experiences that redefine what's possible.",
    siteName: "SERVANA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SERVANA — Creative Studio",
    description: "Designing digital experiences that redefine what's possible.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}
