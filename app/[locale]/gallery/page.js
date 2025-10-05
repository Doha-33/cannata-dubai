import "./gallery.css";
import PageServerHeader from "@/components/PageHeaderServer";
import seoConfig from "@/config/seoConfig";
import ApiClient from "@/Services/APIs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const seo = seoConfig.gallery[locale] || seoConfig.gallery.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,

    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.gallery.en.url,
        ar: seoConfig.gallery.ar.url,
        "x-default": seoConfig.gallery.en.url,
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
            seo.openGraph?.image || "/og-images/cannata-shipping-gallery.jpg",
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
      images: [seo.twitterCard?.image || "/twitter-images/cannata-gallery.jpg"],
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

export default async function Gallery({ params }) {
  // جلب الصور من API
  const res = await ApiClient.get("gallery");
  const images = res?.data || [];
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
      <PageServerHeader titleKey="gallary" />
      <div className="gallery my-5">
        {images.map((item, index) => (
          <img key={index} loading="lazy" src={item.image} alt={`gallery-${index}`} />
        ))}
      </div>
    </>
  );
};

