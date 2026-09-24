import type { Metadata } from "next";
import { EB_Garamond, Sorts_Mill_Goudy, JetBrains_Mono } from "next/font/google";
import { EVENT_CONFIG } from "@/data/event-config";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parallax-event.vercel.app"),
  title: EVENT_CONFIG.meta.title,
  description: EVENT_CONFIG.meta.description,
  keywords: [...EVENT_CONFIG.meta.keywords],
  authors: [{ name: EVENT_CONFIG.institution.name }],
  openGraph: {
    title: EVENT_CONFIG.meta.title,
    description: EVENT_CONFIG.meta.description,
    type: "website",
    locale: "en_IN",
    siteName: EVENT_CONFIG.name,
    images: [
      {
        url: EVENT_CONFIG.meta.ogImage,
        width: 1200,
        height: 630,
        alt: `${EVENT_CONFIG.name} — ${EVENT_CONFIG.type}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EVENT_CONFIG.meta.title,
    description: EVENT_CONFIG.meta.description,
    images: [EVENT_CONFIG.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${ebGaramond.variable} ${sortsMillGoudy.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#050505] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
