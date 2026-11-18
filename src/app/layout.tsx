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
  title: "Apex Surface Solutions | Pressure Washing, Carpet Cleaning & Snow Removal",
  description:
    "Apex Surface Solutions - professional pressure washing, carpet cleaning, and snow removal for homes and businesses. Call for a free estimate.",
  openGraph: {
    title: "Apex Surface Solutions",
    description: "Pressure washing, carpet cleaning & snow removal - residential & commercial.",
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
