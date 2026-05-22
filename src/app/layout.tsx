import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Surface Solutions | Professional Pressure Washing",
  description:
    "Apex Surface Solutions delivers professional pressure washing services. Driveways, decks, roofs, commercial buildings — we restore every surface to its best.",
  openGraph: {
    title: "Apex Surface Solutions",
    description: "Professional pressure washing — residential & commercial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${barlow.variable}`}>
      <body className="bg-apex-blue font-sans antialiased">{children}</body>
    </html>
  );
}
