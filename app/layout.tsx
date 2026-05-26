import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASSAïS — Heritage felt. Not preserved.",
  description:
    "ASSAïS — a contemporary North African menswear house rooted in Moroccan/Amazigh heritage and Mediterranean culture, reinterpreted through minimalist restraint.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,300,700,701&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
