import LoginClient from "./LoginClient";
import seoConfig from "../../../config/seoConfig";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const seo = seoConfig.login[locale] || seoConfig.login.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
      languages: seo.hreflang,
    },
    openGraph: {
      title: seo.openGraph?.title || seo.title,
      description: seo.openGraph?.description || seo.description,
      url: seo.url,
      images: seo.openGraph?.image ? [{ url: seo.openGraph.image }] : [],
    },
    robots: {
      index: true, 
      follow: true,
      nocache: false,
    },
  };
}

export default function Page({ params }) {
  return <LoginClient locale={params.locale} />;
}
