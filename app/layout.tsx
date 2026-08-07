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
  metadataBase: new URL("https://lukaju.itch.io"),
  title: "Sexting Her — Lukajú",
  description: "Official website for texting-her (sexting-her on Itch.io). Social simulation and interactive visual novel developed in Godot Engine.",
  keywords: ["texting-her", "sexting-her", "Lukajú", "Godot Engine", "Visual Novel", "Social Simulation", "Indie Game"],
  authors: [{ name: "Lukajú" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/ui/logo_lukaju.png", type: "image/png", sizes: "32x32" },
      { url: "/ui/logo_lukaju.png", type: "image/png", sizes: "192x192" },
      { url: "/ui/logo_lukaju.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/ui/logo_lukaju.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sexting Her — Lukajú",
    description: "Official website for texting-her (sexting-her on Itch.io). Social simulation and interactive visual novel developed in Godot Engine.",
    url: "https://lukaju.itch.io",
    siteName: "Lukajú Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/game/banner_sexting_her.png",
        width: 1200,
        height: 630,
        alt: "Sexting Her — Visual Novel & Social Simulation by Lukajú",
      },
      {
        url: "/ui/logo_lukaju.png",
        width: 512,
        height: 512,
        alt: "Lukajú Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sexting Her — Lukajú",
    description: "Official website for texting-her (sexting-her on Itch.io). Social simulation and interactive visual novel developed in Godot Engine.",
    images: ["/game/banner_sexting_her.png"],
    creator: "@lukajudev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lukaju.itch.io/#organization",
      "name": "Lukajú Studio",
      "url": "https://lukaju.itch.io",
      "logo": "https://lukaju.itch.io/ui/logo_lukaju.png",
      "sameAs": [
        "https://lukaju.itch.io",
        "https://x.com/lukajudev",
        "https://www.patreon.com/c/lukaju"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://lukaju.itch.io/#website",
      "url": "https://lukaju.itch.io",
      "name": "Lukajú Studio",
      "publisher": {
        "@id": "https://lukaju.itch.io/#organization"
      }
    },
    {
      "@type": "VideoGame",
      "name": "Sexting Her",
      "alternateName": "texting-her",
      "description": "Social simulation and interactive visual novel developed in Godot Engine.",
      "image": "https://lukaju.itch.io/game/banner_sexting_her.png",
      "genre": ["Visual Novel", "Simulation", "Interactive Story"],
      "author": {
        "@id": "https://lukaju.itch.io/#organization"
      },
      "gamePlatform": ["PC", "Windows", "Linux", "Android"],
      "url": "https://lukaju.itch.io"
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0B10] text-[#F3F4F6] antialiased selection:bg-[#9E0038] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
