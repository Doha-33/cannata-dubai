import ShippingClient from "./ShippingClient";
import seoConfig from "@/config/seoConfig";
import ApiClient from "@/Services/APIs";

export async function generateMetadata({ params }) {
  const locale = params?.locale || 'en';
  const seo = seoConfig.shippingRequest[locale] || seoConfig.shippingRequest.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    canonical: seo.canonical,
    
    alternates: {
      canonical: seo.canonical,
      languages: {
        en: seoConfig.shippingRequest.en.url,
        ar: seoConfig.shippingRequest.ar.url,
        'x-default': seoConfig.shippingRequest.en.url,
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
          url: seo.openGraph?.image || '/og-images/cannata-shipping-shippingRequest.jpg',
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
      images: [seo.twitterCard?.image || '/twitter-images/cannata-shippingRequest.jpg'],
    },
    
    other: {
      keywords: seo.keywords,
    },
  };
}

export default async function ShippingServer({ params }) {
  const locale = params.locale;
  const seoData = seoConfig.home[locale] || seoConfig.home.en;

  const jsonLd = {
    ...seoData.schema,
    url: seoData.url,
  };
  const data = [
    {
      id: 1,
      from: {
        country: "Afghanistan",
        state: "Andaman and Nicobar Islands",
        city: "Bombuflat",
      },
      to: {
        country: "Albania",
        state: "Andhra Pradesh",
        city: "Garacharma",
      },
      shipping_methods: [
        {
          id: 1,
          type: "air",
          price: "14.00",
        },
        {
          id: 4,
          type: "sea",
          price: "12.00",
        },
        {
          id: 5,
          type: "land",
          price: "23.00",
        },
      ],
    },
    {
      id: 2,
      from: {
        country: "Afghanistan",
        state: "Andaman and Nicobar Islands",
        city: "Bombuflat",
      },
      to: {
        country: "Albania",
        state: "Andhra Pradesh",
        city: "Garacharma",
      },
      shipping_methods: [
        {
          id: 2,
          type: "air",
          price: "9.00",
        },
      ],
    },
    {
      id: 3,
      from: {
        country: "Afghanistan",
        state: "Andaman and Nicobar Islands",
        city: "Bombuflat",
      },
      to: {
        country: "Albania",
        state: "Andhra Pradesh",
        city: "Garacharma",
      },
      shipping_methods: [
        {
          id: 3,
          type: "air",
          price: "15.00",
        },
      ],
    },
  ];
  const res = await ApiClient.get("tracks");
  // const tracks = res?.data || data;
  const tracks =  data;
  const trackOptions = tracks.map((track) => ({
    value: track.id,
    label: `${track.from.city} ➝ ${track.to.city}`,
    methods: track.shipping_methods,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ShippingClient locale={params.locale || "en"} trackOptions={trackOptions} />
    </>
  );
}
