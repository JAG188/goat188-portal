import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { PAGE_DESCRIPTION, PAGE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    template: "%s",
  },
  description: PAGE_DESCRIPTION,
  applicationName: "GOAT188",
  verification: {
    google: "xMK9DGdCfgm_4J0n5d12YKbwejxhY4qUKkKpfmTFQb4",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-void font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
