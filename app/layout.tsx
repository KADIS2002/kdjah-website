import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khadijah — Digital Marketer, Creative Strategist & AI Web Developer",
  description:
    "Khadijah helps brands grow, connect, and stand out through strategic marketing, creative design, and powerful digital experiences.",
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: {
    title: "Khadijah — Digital experiences with impact",
    description: "Digital marketing, creative strategy, and AI web development.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
