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

const title = "ZapForge — Migrate legacy code at scale, without losing control of it";
const description =
  "ZapForge is a migration and modernization workbench. Describe a change; it plans it, waits for a human to approve the plan, executes in an isolated worktree, and returns a reviewable diff, a test report and a security scan \u2014 all on your own machines.";

export const metadata: Metadata = {
  // Update when a custom domain is attached in Vercel.
  metadataBase: new URL("https://zapforge-web.vercel.app"),
  title,
  description,
  keywords: [
    "legacy migration",
    "code modernization",
    "application modernization",
    "AI code migration",
    "COBOL modernization",
    "Oracle Forms migration",
    "Spring Boot upgrade",
    "javax to jakarta",
    "governed AI coding",
    "open banking",
    "ISO 20022",
    "CBUAE",
    "SAMA",
    "Zapcom",
    "ZapForge",
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
