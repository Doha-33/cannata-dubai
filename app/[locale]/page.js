import Home1 from "../../components/Home1";
import Home2 from "@/components/Home2";
import "./page.module.css";
import Home3 from "@/components/Home3";
import Home6 from "@/components/Home6";
import Home7Wrapper from "@/components/Home7Wrapper";
import Home8 from "@/components/Home8";
import Home9 from "@/components/Home9";
import Home10 from "@/components/Home10";
import seoConfig from "@/config/seoConfig";

export async function generateMetadata({ params }) {
  const locale = params?.locale || 'en';
  const seo = seoConfig.home[locale] || seoConfig.home.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,
    
    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.home.en.url,
        ar: seoConfig.home.ar.url,
        'x-default': seoConfig.home.en.url,
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
          url: seo.openGraph?.image || '/og-images/cannata-shipping-home.jpg',
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
      images: [seo.twitterCard?.image || '/twitter-images/cannata-home.jpg'],
    },
    
    other: {
      keywords: seo.keywords,
    },
  };
}

export default function Page({ params }) {
  const locale = params?.locale || 'en';
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
      
      <div>
        <Home1 locale={locale} />
        <Home2 locale={locale} />
        <Home8 locale={locale} />
        <Home3 locale={locale} />
        <Home10 locale={locale} />
        <Home7Wrapper locale={locale} />
      </div>
    </>
  );
}
