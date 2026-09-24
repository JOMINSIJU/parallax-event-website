import type { Metadata } from "next";
import { EVENT_CONFIG } from "@/data/event-config";
import "./globals.css";

export const metadata: Metadata = {
  title: EVENT_CONFIG.meta.title,
  description: EVENT_CONFIG.meta.description,
  keywords: EVENT_CONFIG.meta.keywords,
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a12] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
