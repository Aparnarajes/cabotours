import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabo Tours & Travels Kerala",
  description:
    "Kerala, India & International tour packages with Cabo Tours & Travels",
  verification: {
    google: "Zi8uzNpKsFcee8NPqGReCzk_ea59zVR8bPDlZNS9Wro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
