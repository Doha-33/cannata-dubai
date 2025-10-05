import Navbar from "@/components/Navbar";
import { dir } from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

export const languages = ["en", "ar"];

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/cannata21.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/cannata21.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/cannata21.png"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NBGFC7Q47"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8NBGFC7Q47');
            `,
          }}
        />
         <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cannata Worldwide Cargo Services",
              "image": "https://cannata.ae/images/cannata21.png",
              "@id": "https://cannata.ae",
              "url": "https://cannata.ae",
              "telephone": "+971-42-397-107",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jebel Ali Free Zone",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.0104",
                "longitude": "55.0617"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }],
              "sameAs": [
                "https://www.facebook.com/cannataworldwidecargoservices",
                "https://www.instagram.com/cannata_cargo_services/",
                "https://x.com/CannataCargoUAE",
                "https://www.youtube.com/@CANNATAWORLWIDECARGOSERVICES"
              ]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <div>
          {children}

          <ChatWidget />

          <WhatsAppButton />
        </div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
