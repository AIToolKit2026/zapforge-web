import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "ZapForge — Modernise the layer around the core";
const description =
  "Governed migration and modernisation for Gulf banks. Runs on your own infrastructure, inside your own jurisdiction. CRM, cards, data platforms, customer forms and the API layer.";

export const metadata: Metadata = {
  // Update when a custom domain is attached in Vercel.
  metadataBase: new URL("https://zapforge-web.vercel.app"),
  title,
  description,
  keywords: [
    "open banking",
    "ISO 20022",
    "Open Finance",
    "core banking modernisation",
    "legacy migration",
    "CBUAE",
    "SAMA",
    "Gulf banking",
    "Zapcom",
  ],
  authors: [{ name: "Zapcom" }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "ZapForge",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
