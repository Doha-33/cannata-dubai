import ServiceDetails from "./ServiceDetails";
import { getAPI, getServiceById } from "@/Services/APIs";
import PageServerHeader from "@/components/PageHeaderServer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// 🟢 دالة بتولّد الميتا داتا من الـ service
export async function generateMetadata({ params }) {
  const { id, locale } = params;
  const isArabic = locale === "ar";

  try {
    const serviceRes = await getServiceById(id);
    const service = serviceRes.data.data;

    if (!service) {
      return {
        title: isArabic ? "الخدمة غير موجودة" : "Service not found",
      };
    }

    const seo = service.seo || {};
    return {
      title: seo.meta_title || service.title?.[isArabic ? "ar" : "en"],
      description:
        seo.meta_description ||
        service.description?.[isArabic ? "ar" : "en"]?.slice(0, 150),
      keywords: seo.meta_keywords || "",
      alternates: {
        canonical: seo.canonical_url || null,
      },
      robots: seo.meta_robots || "index, follow",
      openGraph: {
        title: seo.meta_title || service.title?.[isArabic ? "ar" : "en"],
        description: seo.meta_description || "",
        url: seo.canonical_url || null,
        images: [
          {
            url: seo.og_image || service.image,
            alt: service.image_alt || service.title?.[isArabic ? "ar" : "en"],
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: seo.meta_title || service.title?.[isArabic ? "ar" : "en"],
        description: seo.meta_description || "",
        images: [seo.og_image || service.image],
      },
      robots: {
      index: true, 
      follow: true,
      nocache: false,
    },
    };
  } catch (e) {
    console.error("Error generating metadata:", e);
    return {
      title: isArabic ? "الخدمة" : "Service",
    };
  }
}

// 🟢 صفحة التفاصيل
export default async function ServiceDetailsPage({ params }) {
  const { id, locale } = params;

  let service = null;
  let allServices = [];
  let faqs = [];
  let setting = null;

  try {
    const serviceRes = await getServiceById(id);
    service = serviceRes.data.data;

    const servicesRes = await getAPI("service");
    allServices = servicesRes.data.data;

    const faqsRes = await getAPI("faqs");
    faqs = faqsRes.data.data;

    const settingRes = await getAPI("setting");
    setting = settingRes.data.data;
  } catch (e) {
    console.error("Error fetching data:", e);
  }

  return (
    <>
      <PageServerHeader titleKey={"service"} />
      <ServiceDetails
        id={id}
        locale={locale}
        service={service}
        allServices={allServices}
        faqs={faqs}
        setting={setting}
      />
    </>
  );
}
