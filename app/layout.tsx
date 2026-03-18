import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const siteUrl = "https://legal.beeseek.site";
const siteName = "BeeSeek Legal";
const siteDescription =
  "Official legal policies, terms of service, and privacy documents for BeeSeek - Nigeria's trusted service marketplace.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#031745" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Legal | BeeSeek",
    template: "%s | BeeSeek Legal",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "BeeSeek Technologies", url: siteUrl }],
  creator: "BeeSeek Technologies",
  publisher: "BeeSeek Technologies",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title: "BeeSeek Legal Hub",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
