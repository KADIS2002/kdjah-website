import type { Metadata, Viewport } from "next";
import GoogleAnalytics from "./components/google-analytics";
import "./globals.css";

const siteUrl = "https://kdjah-website.vercel.app";
const instagramUrl = "https://www.instagram.com/kdjah.vision/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Best Digital Marketer in Kerala | Khadijah - Digital Marketing Expert",
  description:
    "Looking for a digital marketer in Kerala? Khadijah helps businesses grow with Google Ads, Meta Ads, SEO, social media marketing, and AI-powered web development.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/images/Logo.png", apple: "/images/Logo.png" },
  openGraph: {
    title: "Best Digital Marketer in Kerala | Khadijah",
    description:
      "Digital marketing for businesses in Kerala: Google Ads, Meta Ads, SEO, social media, and AI-powered web development.",
    type: "website",
    url: siteUrl,
    siteName: "Khadijah - Digital Marketer",
    locale: "en_IN",
    images: [
      {
        url: "/images/khadijah-digital-marketer-kerala.jpg",
        width: 1086,
        height: 1448,
        alt: "Khadijah, digital marketer serving Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketer in Kerala | Khadijah",
    description:
      "Google Ads, Meta Ads, SEO, social media marketing, and AI-powered web development for businesses in Kerala.",
    images: ["/images/khadijah-digital-marketer-kerala.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#030407",
  colorScheme: "dark",
};

const services = [
  "Google Ads",
  "Meta Ads",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Content Strategy",
  "AI Web Development",
  "E-commerce Development",
  "Marketing Automation",
];

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#khadijah`,
        name: "Khadijah",
        jobTitle: "Digital Marketer",
        url: siteUrl,
        sameAs: [instagramUrl],
        description: "Digital marketer serving businesses in Kerala, India.",
        knowsAbout: services,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Khadijah - Digital Marketer in Kerala",
        inLanguage: "en-IN",
        publisher: { "@id": `${siteUrl}/#khadijah` },
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service,
        provider: { "@id": `${siteUrl}/#khadijah` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kerala" },
          { "@type": "Country", name: "India" },
        ],
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <StructuredData />
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
