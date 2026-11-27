import Script from "next/script";

type GoogleAnalyticsProps = { measurementId?: string };

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return null;

  const encodedId = JSON.stringify(measurementId);

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config',${encodedId});`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
    </>
  );
}
