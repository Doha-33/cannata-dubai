import EditProfile from "./editprofile";
import seoConfig from "@/config/seoConfig";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const seo = seoConfig.editprofile[locale] || seoConfig.editprofile.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      languages: {
        en: seoConfig.editprofile.en.url,
        ar: seoConfig.editprofile.ar.url,
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

export default async function EditProfilePage({ params }) {
  const locale = params.locale;
  return <EditProfile locale={locale} />;
}
