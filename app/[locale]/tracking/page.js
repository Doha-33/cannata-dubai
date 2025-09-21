import TrackingClient from "./TrackingClient";
import seoConfig from "@/config/seoConfig";

export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const seo = seoConfig.tracking[locale] || seoConfig.tracking.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,

    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.tracking.en.url,
        ar: seoConfig.tracking.ar.url,
        "x-default": seoConfig.tracking.en.url,
      },
    },

    openGraph: {
      title: seo.openGraph?.title || seo.title,
      description: seo.openGraph?.description || seo.description,
      url: seo.url,
      siteName: seo.openGraph?.siteName || "Cannata",
      locale: seo.openGraph?.locale || (locale === "ar" ? "ar_AE" : "en_US"),
      type: seo.openGraph?.type || "website",
      images: [
        {
          url:
            seo.openGraph?.image || "/og-images/cannata-shipping-tracking.jpg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },

    twitter: {
      card: seo.twitterCard?.card || "summary_large_image",
      title: seo.twitterCard?.title || seo.title,
      description: seo.twitterCard?.description || seo.description,
      images: [
        seo.twitterCard?.image || "/twitter-images/cannata-tracking.jpg",
      ],
    },

    other: {
      keywords: seo.keywords,

      alternates: {
        languages: {
          en: seoConfig.tracking.en.url,
          ar: seoConfig.tracking.ar.url,
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
  const seoData = seoConfig.tracking[locale] || seoConfig.tracking.en;

  const jsonLd = {
    ...seoData.schema,
    url: seoData.url,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <TrackingClient locale={locale} />
    </>
  );
}
