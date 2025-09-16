import ApiClient from "@/Services/APIs";
import BlogsClient from "./BlogsClient";
import seoConfig from "@/config/seoConfig";
import PageServerHeader from "@/components/PageHeaderServer";

export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const seo = seoConfig.blogs[locale] || seoConfig.blogs.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,

    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.blogs.en.url,
        ar: seoConfig.blogs.ar.url,
        "x-default": seoConfig.blogs.en.url,
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
          url: seo.openGraph?.image || "/og-images/cannata-shipping-blogs.jpg",
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
      images: [seo.twitterCard?.image || "/twitter-images/cannata-blogs.jpg"],
    },

    other: {
      keywords: seo.keywords,
    },
  };
}

export default async function BlogsPage({ params }) {
  const res = await ApiClient.get("article");
  let posts = [];
  const locale = params.locale;
  const seoData = seoConfig.blogs[locale] || seoConfig.blogs.en;

  const jsonLd = {
    ...seoData.schema,
    url: seoData.url,
  };

  if (res?.status && res?.data) {
    posts = res.data.filter((post) => post.is_published === true);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PageServerHeader titleKey="blog" />

      <BlogsClient posts={posts} locale={params.locale || "en"} />
    </>
  );
}
