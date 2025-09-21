import SignUp from "./SignUp";
import seoConfig from "../../../config/seoConfig"; 

// ⬅️ SEO
export async function generateMetadata({ params }) {
  const { locale } = params;
  const seo = seoConfig.signUp?.[locale] || seoConfig.signUp?.en;

  return {
    title: seo?.title || "Sign Up | Cannata",
    description: seo?.description || "Create an account on Cannata Dubai",
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      images: seo?.image ? [seo.image] : [],
    },
    alternates: {
      canonical: `https://cannata.ae/${locale}/signUp`,
    },
    robots: {
      index: true, 
      follow: true,
      nocache: false,
    },
  };
}

export default function SignUpPage({ params }) {
  return <SignUp params={params} />;
}
