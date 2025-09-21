import ApiClient from "@/Services/APIs";
import ServicesClient from "./ServicesClient";
import seoConfig from "@/config/seoConfig";
import PageServerHeader from "@/components/PageHeaderServer";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }) {
  const locale = params?.locale || 'en';
  const seo = seoConfig.services[locale] || seoConfig.services.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,
    
    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.services.en.url,
        ar: seoConfig.services.ar.url,
        'x-default': seoConfig.services.en.url,
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
          url: seo.openGraph?.image || '/og-images/cannata-shipping-services.jpg',
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    
    twitter: {
      card: seo.twitterCard?.card || 'summary_large_image',
      title: seo.twitterCard?.title || seo.title,
      description: seo.twitterCard?.description || seo.description,
      images: [seo.twitterCard?.image || '/twitter-images/cannata-services.jpg'],
    },
    
    other: {
      keywords: seo.keywords,
    },
    robots: {
      index: true, 
      follow: true,
      nocache: false,
    },
  };
}

export default async function ServicesPage({ params }) {
  const res = await ApiClient.get("service");
  const services = res?.data || [];
  const locale = params.locale;
const seoData = seoConfig.services[locale] || seoConfig.services.en;

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
      <PageServerHeader titleKey={"service"} />

      <ServicesClient services={services} locale={params.locale || "en"} />
    </>
  );
}
