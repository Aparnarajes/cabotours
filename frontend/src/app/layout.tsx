import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔍 GLOBAL SEO METADATA */
export const metadata: Metadata = {
  title: {
    default: "Cabo Tours & Travels | Kerala, India & International Packages",
    template: "%s | Cabo Tours & Travels",
  },
  description:
    "Cabo Tours & Travels offers trusted Kerala, India and International tour packages. Flight tickets, hotel booking, airport transfers and sightseeing with comfort & safety guaranteed.",
  keywords: [
    "Cabo Tours",
    "Cabo Tours Kerala",
    "Kerala tour packages",
    "India tour packages",
    "International tour packages",
    "Travel agency Kerala",
    "Holiday packages Kerala",
  ],
  authors: [{ name: "Cabo Tours & Travels" }],
  creator: "Cabo Tours & Travels",
  publisher: "Cabo Tours & Travels",

  /* 🌐 OPEN GRAPH (for WhatsApp / Facebook / Instagram) */
  openGraph: {
    title: "Cabo Tours & Travels",
    description:
      "Explore Kerala, India and International destinations with Cabo Tours & Travels. Comfort & safety guaranteed.",
    url: "https://YOUR-VERCEL-DOMAIN.vercel.app",
    siteName: "Cabo Tours & Travels",
    images: [
      {
        url: "/hero.jpg", // must exist in /public
        width: 1200,
        height: 630,
        alt: "Cabo Tours & Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* 🐦 TWITTER CARD */
  twitter: {
    card: "summary_large_image",
    title: "Cabo Tours & Travels",
    description:
      "Kerala, India & International Tour Packages with trusted travel services.",
    images: ["/hero.jpg"],
  },

  /* 🔎 GOOGLE SITE VERIFICATION */
  verification: {
    google: "Zi8uzNpKsFcee8NPqGReCzk_ea59zVR8bPDlZNS9Wro",
  },

  /* 🤖 SEARCH ENGINE BEHAVIOR */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
