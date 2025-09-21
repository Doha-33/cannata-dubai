import TrackingClient from "./order";
import seoConfig from "@/config/seoConfig";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const seo = seoConfig.orders[locale] || seoConfig.orders.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      languages: {
        en: seoConfig.orders.en.url,
        ar: seoConfig.orders.ar.url,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: "Cannata",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    robots: {
      index: true, 
      follow: true,
      nocache: false,
    },
  };
}

export default async function TrackingServer({ params }) {
  const locale = params.locale;
  return <TrackingClient locale={locale} />;
}
