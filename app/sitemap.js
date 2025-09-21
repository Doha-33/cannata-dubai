export default function sitemap() {
  const baseUrl = "https://cannata.ae";

  const routes = [
    "",
    "/services",
    "/about",
    "/custom",
    "/contact",
    "/blogs",
    "/order",
    "/tracking",
    "/editprofile",
    "/gallery",
    "/shipping",
    "/signUp",
    "/login",
  ];

  const locales = ["en", "ar"];

  const now = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
