import Home4 from "../../../components/Home4";
import Home9 from "../../../components/Home9";
import PageHeader from "@/components/PageHeader";
import ApiClient from "@/Services/APIs";
import Faqs from "@/components/Faqs";
import "./custom.css";
import seoConfig from "@/config/seoConfig";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const seo = seoConfig.customClearance[locale] || seoConfig.customClearance.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,

    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.customClearance.en.url,
        ar: seoConfig.customClearance.ar.url,
        "x-default": seoConfig.customClearance.en.url,
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
            seo.openGraph?.image ||
            "/og-images/cannata-shipping-customClearance.jpg",
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
        seo.twitterCard?.image || "/twitter-images/cannata-customClearance.jpg",
      ],
    },

    other: {
      keywords: seo.keywords,
    },
  };
}

export default async function Custom({ params }) {
  const res = await ApiClient.get("faqs");
  const faqs = res?.data || [];
  const isArabic = params.locale === "ar";
  const locale = params.locale;
  const seoData = seoConfig.home[locale] || seoConfig.home.en;

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
      <PageHeader titleKey={"Custom Clearnace"} />
      <Home4 locale={params.locale} />
      <Home9 locale={params.locale} />

      <Faqs faqs={faqs} isArabic={isArabic} />
    </>
  );
}
