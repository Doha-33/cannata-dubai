import ApiClient from "../../../Services/APIs";
import ContactClient from "./ContactClient";
import seoConfig from "@/config/seoConfig";
import PageServerHeader from "@/components/PageHeaderServer";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const seo = seoConfig.contact[locale] || seoConfig.contact.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,

    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.contact.en.url,
        ar: seoConfig.contact.ar.url,
        "x-default": seoConfig.contact.en.url,
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
          url: seo.openGraph?.image || "/og-images/cannata-shipping-contact.jpg",
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
      images: [seo.twitterCard?.image || "/twitter-images/cannata-contact.jpg"],
    },

    other: {
      keywords: seo.keywords,
    },
  };
}

export default async function ContactServer({ locale }) {
  let setting = null;
  const seoData = seoConfig.contact[locale] || seoConfig.contact.en;

  const jsonLd = {
    ...seoData.schema,
    url: seoData.url,
  };
  try {
    const res = await ApiClient.get("setting");
    setting = res?.data;
    console.log("Settings data:", setting);
  } catch (error) {
    console.error("Error fetching settings:", error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PageServerHeader titleKey="contact" />
      <ContactClient setting={setting} locale={locale} />
    </>
  );
}
