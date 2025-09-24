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
  const { locale } = await params; // ✅ لازم await
  const lang = locale || "en";
  const seo = seoConfig.home[lang] || seoConfig.home.en;

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
        "x-default": seoConfig.home.en.url,
      },
    },

    openGraph: {
      title: seo.openGraph?.title || seo.title,
      description: seo.openGraph?.description || seo.description,
      url: seo.url,
      siteName: seo.openGraph?.siteName || "Cannata",
      locale: seo.openGraph?.locale || (lang === "ar" ? "ar_AE" : "en_US"),
      type: seo.openGraph?.type || "website",
      images: [
        {
          url: seo.openGraph?.image || "/og-images/cannata-shipping-home.jpg",
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
      images: [seo.twitterCard?.image || "/twitter-images/cannata-home.jpg"],
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

export default async function Page({ params }) {
  const { locale } = await params; // ✅ لازم await
  const lang = locale || "en";
  const seoData = seoConfig.home[lang] || seoConfig.home.en;

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
        <Home1 locale={lang} />
        <Home2 locale={lang} />
        <Home8 locale={lang} />
        <Home3 locale={lang} />
        <Home10 locale={lang} />
        <Home7Wrapper locale={lang} />
      </div>
    </>
  );
}
