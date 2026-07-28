import type { Metadata } from "next";
import { Zen_Old_Mincho, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const zenMincho = Zen_Old_Mincho({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-mincho",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sexting Her — Lukajú",
  description: "Official website for texting-her (sexting-her on Itch.io). Social simulation and interactive visual novel developed in Godot Engine.",
  keywords: ["texting-her", "sexting-her", "Lukajú", "Godot Engine", "Visual Novel", "Social Simulation", "Indie Game"],
  authors: [{ name: "Lukajú" }],
  openGraph: {
    title: "Sexting Her — Lukajú",
    description: "An interactive story told through messages, choices, and branching routes.",
    url: "https://lukaju.itch.io",
    siteName: "Lukajú Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sexting Her — Lukajú",
    description: "An interactive story told through messages, choices, and branching routes.",
    creator: "@lukajudev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zenMincho.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0A0B10] text-[#F3F4F6] antialiased selection:bg-[#9E0038] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
