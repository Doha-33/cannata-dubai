const seoConfig = {
  // Global site configuration
  global: {
    siteName: "Cannata",
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    domain: "https://admin.cannata.ae",
    businessType: "LogisticsService",
    serviceAreas: ["UAE", "Dubai", "Abu Dhabi", "Middle East", "Global"],
    companyInfo: {
      name: "Cannata Global Logistics",
      phone: "+971-423-97107",
      email: ["Info@cannata.ae","sales@cannata.ae"],
      address: "Dubai, United Arab Emirates",
    },
  },

  // Home Page
  home: {
    en: {
      title:
        "Global Shipping & Logistics Services UAE | Cannata - Fast Worldwide Delivery",
      description:
        "Leading shipping company in UAE offering global logistics, customs clearance & cargo services. 24/7 tracking, competitive rates. Get your free quote today!",
      keywords:
        "shipping company UAE, global logistics Dubai, cargo services Middle East, customs clearance UAE, international shipping Dubai, freight forwarding UAE, logistics company Dubai, shipping services UAE",
      url: "https://admin.cannata.ae/en",
      canonical: "https://admin.cannata.ae/en",
      hreflang: {
        en: "https://admin.cannata.ae/en",
        ar: "https://admin.cannata.ae/ar",
        "x-default": "https://admin.cannata.ae/en",
      },
      openGraph: {
        title: "Cannata - UAE's Premier Global Shipping Partner",
        description:
          "Fast, reliable worldwide shipping from the heart of the Middle East. 24/7 tracking and expert logistics support.",
        image: "/og-images/cannata-shipping-home.jpg",
        type: "website",
        locale: "en_US",
        siteName: "Cannata",
      },
      twitterCard: {
        card: "summary_large_image",
        title: "Cannata - Global Shipping & Logistics UAE",
        description:
          "Fast worldwide shipping from UAE with 24/7 tracking and expert support.",
        image: "/twitter-images/cannata-home.jpg",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": ["Organization", "LogisticsService"],
        name: "Cannata Global Logistics",
        alternateName: "Cannata",
        description:
          "Leading global shipping and logistics company based in UAE",
        url: "https://admin.cannata.ae",
        logo: "https://admin.cannata.ae/images/cannata-logo.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AE",
          addressRegion: "Dubai",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971-xxx-xxxx",
          contactType: "customer service",
          availableLanguage: ["en", "ar"],
        },
        serviceArea: {
          "@type": "Place",
          name: "Worldwide",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shipping and Logistics Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Global Shipping",
                description: "International cargo and freight services",
              },
            },
          ],
        },
      },
    },
    ar: {
      title:
        "خدمات الشحن والخدمات اللوجستية العالمية الإمارات | كاناتا - توصيل سريع عالمياً",
      description:
        "شركة شحن رائدة في الإمارات تقدم خدمات لوجستية عالمية وتخليص جمركي وخدمات شحن البضائع. تتبع على مدار الساعة وأسعار تنافسية. احصل على عرض أسعار مجاني اليوم!",
      keywords:
        "شركة شحن الإمارات, لوجستيات عالمية دبي, خدمات شحن الشرق الأوسط, تخليص جمركي الإمارات, شحن دولي دبي, وسيط شحن الإمارات, شركة لوجستيات دبي, خدمات شحن الإمارات",
      url: "https://admin.cannata.ae/ar",
      canonical: "https://admin.cannata.ae/ar",
      hreflang: {
        en: "https://admin.cannata.ae/en",
        ar: "https://admin.cannata.ae/ar",
        "x-default": "https://admin.cannata.ae/en",
      },
      openGraph: {
        title: "كاناتا - شريك الشحن العالمي الرائد في الإمارات",
        description:
          "شحن سريع وموثوق عالمياً من قلب الشرق الأوسط. تتبع على مدار الساعة ودعم لوجستي خبير.",
        image: "/og-images/cannata-shipping-home-ar.jpg",
        type: "website",
        locale: "ar_AE",
        siteName: "كاناتا",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": ["Organization", "LogisticsService"],
        name: "كاناتا للخدمات اللوجستية العالمية",
        alternateName: "كاناتا",
        description:
          "شركة رائدة في الشحن والخدمات اللوجستية العالمية مقرها الإمارات",
        inLanguage: "ar",
      },
    },
  },

  // Services Page
  services: {
    en: {
      title:
        "Complete Shipping & Logistics Solutions | Air, Sea & Land Cargo | Cannata UAE",
      description:
        "Comprehensive shipping services: air freight, sea cargo, land transport & customs clearance across 180+ countries. Expert logistics solutions with 24/7 support.",
      keywords:
        "air freight UAE, sea cargo Dubai, land transport Middle East, logistics solutions UAE, freight forwarding services, cargo shipping Dubai, international freight UAE, express shipping Dubai, bulk cargo UAE",
      url: "https://admin.cannata.ae/en/services",
      canonical: "https://admin.cannata.ae/en/services",
      hreflang: {
        en: "https://admin.cannata.ae/en/services",
        ar: "https://admin.cannata.ae/ar/services",
      },
      openGraph: {
        title: "Complete Shipping & Logistics Solutions - Cannata UAE",
        description:
          "Air freight, sea cargo, land transport & customs clearance across 180+ countries.",
        image: "/og-images/cannata-services.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Shipping and Logistics Services",
        provider: {
          "@type": "Organization",
          name: "Cannata",
        },
        serviceType: "Logistics and Transportation",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shipping Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Air Freight",
                description: "Fast international air cargo services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sea Freight",
                description: "Cost-effective ocean shipping solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Land Transport",
                description: "Reliable ground transportation services",
              },
            },
          ],
        },
      },
    },
    ar: {
      title:
        "حلول الشحن والخدمات اللوجستية الشاملة | شحن جوي وبحري وبري | كاناتا الإمارات",
      description:
        "خدمات شحن شاملة: شحن جوي، شحن بحري، نقل بري وتخليص جمركي عبر أكثر من 180 دولة. حلول لوجستية احترافية مع دعم على مدار الساعة.",
      keywords:
        "شحن جوي الإمارات, شحن بحري دبي, نقل بري الشرق الأوسط, حلول لوجستية الإمارات, خدمات وسيط شحن, شحن بضائع دبي, شحن دولي الإمارات, شحن سريع دبي, شحن بضائع كبيرة الإمارات",
      url: "https://admin.cannata.ae/ar/services",
      canonical: "https://admin.cannata.ae/ar/services",
      hreflang: {
        en: "https://admin.cannata.ae/en/services",
        ar: "https://admin.cannata.ae/ar/services",
      },
    },
  },

  // About Page
  about: {
    en: {
      title:
        "About Cannata | Leading UAE Shipping Company | Global Logistics Experts Since [Year]",
      description:
        "Discover Cannata's journey as UAE's trusted shipping partner. Expert team, cutting-edge technology, and commitment to excellence in global logistics solutions.",
      keywords:
        "about Cannata UAE, shipping company history, logistics experts Dubai, freight forwarding company UAE, international shipping specialists, cargo company Middle East, logistics company profile",
      url: "https://admin.cannata.ae/en/about",
      canonical: "https://admin.cannata.ae/en/about",
      hreflang: {
        en: "https://admin.cannata.ae/en/about",
        ar: "https://admin.cannata.ae/ar/about",
      },
      openGraph: {
        title: "About Cannata - UAE's Trusted Shipping Partner",
        description:
          "Expert team, cutting-edge technology, and commitment to excellence in global logistics.",
        image: "/og-images/cannata-about.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
          "@type": "Organization",
          name: "Cannata",
          description: "Leading shipping and logistics company in UAE",
        },
      },
    },
    ar: {
      title:
        "عن كاناتا | شركة الشحن الرائدة في الإمارات | خبراء الخدمات اللوجستية العالمية منذ [السنة]",
      description:
        "اكتشف رحلة كاناتا كشريك الشحن الموثوق في الإمارات. فريق خبير، تكنولوجيا متطورة، والتزام بالتميز في حلول الخدمات اللوجستية العالمية.",
      keywords:
        "عن كاناتا الإمارات, تاريخ شركة الشحن, خبراء لوجستيات دبي, شركة وسيط شحن الإمارات, متخصصو الشحن الدولي, شركة شحن بضائع الشرق الأوسط, ملف شركة لوجستيات",
      url: "https://admin.cannata.ae/ar/about",
      canonical: "https://admin.cannata.ae/ar/about",
    },
  },

  // Contact Page
  contact: {
    en: {
      title:
        "Contact Cannata UAE | Get Free Shipping Quote | 24/7 Logistics Support",
      description:
        "Contact Cannata for shipping quotes and logistics support. Dubai office, 24/7 customer service, and expert consultation. Call now for immediate assistance!",
      keywords:
        "contact Cannata UAE, shipping quote Dubai, logistics consultation UAE, freight forwarding contact, cargo shipping inquiry, Dubai shipping office, 24/7 shipping support",
      url: "https://admin.cannata.ae/en/contact",
      canonical: "https://admin.cannata.ae/en/contact",
      hreflang: {
        en: "https://admin.cannata.ae/en/contact",
        ar: "https://admin.cannata.ae/ar/contact",
      },
      openGraph: {
        title: "Contact Cannata - Get Your Free Shipping Quote",
        description:
          "Dubai office, 24/7 customer service, and expert consultation. Call now!",
        image: "/og-images/cannata-contact.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        mainEntity: {
          "@type": "Organization",
          name: "Cannata",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971-xxx-xxxx",
            contactType: "customer service",
            hoursAvailable: "Mo-Su 00:00-23:59",
          },
        },
      },
    },
    ar: {
      title:
        "اتصل بكاناتا الإمارات | احصل على عرض أسعار شحن مجاني | دعم لوجستي على مدار الساعة",
      description:
        "اتصل بكاناتا للحصول على عروض أسعار الشحن والدعم اللوجستي. مكتب دبي، خدمة عملاء على مدار الساعة، واستشارة خبير. اتصل الآن للحصول على مساعدة فورية!",
      keywords:
        "اتصل بكاناتا الإمارات, عرض أسعار شحن دبي, استشارة لوجستية الإمارات, اتصال وسيط شحن, استفسار شحن بضائع, مكتب شحن دبي, دعم شحن على مدار الساعة",
      url: "https://admin.cannata.ae/ar/contact",
      canonical: "https://admin.cannata.ae/ar/contact",
    },
  },

  // Blogs Page
  blogs: {
    en: {
      title:
        "Shipping & Logistics Blog | Industry News & Tips | Cannata UAE Insights",
      description:
        "Stay updated with latest shipping trends, logistics insights, and industry news. Expert tips on customs, freight, and global trade from Cannata's blog.",
      keywords:
        "shipping blog UAE, logistics news Dubai, freight industry insights, customs clearance tips, global trade news, shipping trends Middle East, logistics updates UAE",
      url: "https://admin.cannata.ae/en/blogs",
      canonical: "https://admin.cannata.ae/en/blogs",
      hreflang: {
        en: "https://admin.cannata.ae/en/blogs",
        ar: "https://admin.cannata.ae/ar/blogs",
      },
      openGraph: {
        title: "Cannata Blog - Shipping & Logistics Insights",
        description:
          "Latest shipping trends, logistics insights, and industry news from experts.",
        image: "/og-images/cannata-blog.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Cannata Shipping & Logistics Blog",
        description: "Expert insights on shipping, logistics, and global trade",
      },
    },
    ar: {
      title:
        "مدونة الشحن والخدمات اللوجستية | أخبار الصناعة والنصائح | رؤى كاناتا الإمارات",
      description:
        "ابق محدثاً مع أحدث اتجاهات الشحن، ورؤى الخدمات اللوجستية، وأخبار الصناعة. نصائح خبير حول الجمارك والشحن والتجارة العالمية من مدونة كاناتا.",
      keywords:
        "مدونة شحن الإمارات, أخبار لوجستيات دبي, رؤى صناعة الشحن, نصائح التخليص الجمركي, أخبار التجارة العالمية, اتجاهات الشحن الشرق الأوسط, تحديثات لوجستية الإمارات",
      url: "https://admin.cannata.ae/ar/blogs",
      canonical: "https://admin.cannata.ae/ar/blogs",
    },
  },

  // Gallery Page
  gallery: {
    en: {
      title:
        "Cannata Gallery | Shipping Operations & Logistics Facilities | UAE Cargo Photos",
      description:
        "Explore Cannata's state-of-the-art facilities, shipping operations, and cargo handling capabilities. See our fleet, warehouses, and logistics infrastructure in UAE.",
      keywords:
        "Cannata gallery UAE, shipping facilities Dubai, cargo operations photos, logistics infrastructure UAE, freight handling images, warehouse facilities Dubai, shipping fleet photos",
      url: "https://admin.cannata.ae/en/gallery",
      canonical: "https://admin.cannata.ae/en/gallery",
      hreflang: {
        en: "https://admin.cannata.ae/en/gallery",
        ar: "https://admin.cannata.ae/ar/gallery",
      },
      openGraph: {
        title: "Cannata Gallery - Our Facilities & Operations",
        description:
          "State-of-the-art facilities, shipping operations, and cargo handling capabilities.",
        image: "/og-images/cannata-gallery.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Cannata Facilities Gallery",
        description: "Photos of shipping operations and logistics facilities",
      },
    },
    ar: {
      title:
        "معرض كاناتا | عمليات الشحن والمرافق اللوجستية | صور شحن البضائع الإمارات",
      description:
        "استكشف مرافق كاناتا الحديثة، وعمليات الشحن، وقدرات التعامل مع البضائع. شاهد أسطولنا والمستودعات والبنية التحتية اللوجستية في الإمارات.",
      keywords:
        "معرض كاناتا الإمارات, مرافق الشحن دبي, صور عمليات الشحن, البنية التحتية اللوجستية الإمارات, صور التعامل مع البضائع, مرافق المستودعات دبي, صور أسطول الشحن",
      url: "https://admin.cannata.ae/ar/gallery",
      canonical: "https://admin.cannata.ae/ar/gallery",
    },
  },

  // Shipping Request Page
  shippingRequest: {
    en: {
      title:
        "Request Shipping Quote UAE | Book Cargo Online | Fast Quote in 30 Minutes",
      description:
        "Get instant shipping quotes from UAE to worldwide destinations. Book cargo online, compare rates, and schedule pickup. Professional logistics service guaranteed.",
      keywords:
        "shipping quote UAE, book cargo online, instant freight quote, shipping rates Dubai, cargo booking UAE, online shipping calculator, freight quote UAE, logistics booking Dubai",
      url: "https://admin.cannata.ae/en/shipping-request",
      canonical: "https://admin.cannata.ae/en/shipping-request",
      hreflang: {
        en: "https://admin.cannata.ae/en/shipping-request",
        ar: "https://admin.cannata.ae/ar/shipping-request",
      },
      openGraph: {
        title: "Request Shipping Quote - Fast & Easy Booking",
        description:
          "Get instant quotes and book cargo online. Professional service guaranteed.",
        image: "/og-images/cannata-quote.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Shipping Quote Service",
        provider: {
          "@type": "Organization",
          name: "Cannata",
        },
        offers: {
          "@type": "Offer",
          description: "Free shipping quotes within 30 minutes",
        },
      },
    },
    ar: {
      title:
        "طلب عرض أسعار شحن الإمارات | حجز شحن البضائع أونلاين | عرض سعر سريع خلال 30 دقيقة",
      description:
        "احصل على عروض أسعار شحن فورية من الإمارات إلى وجهات عالمية. احجز الشحن أونلاين، وقارن الأسعار، وحدد موعد الاستلام. خدمة لوجستية احترافية مضمونة.",
      keywords:
        "عرض أسعار شحن الإمارات, حجز شحن بضائع أونلاين, عرض أسعار شحن فوري, أسعار الشحن دبي, حجز شحن بضائع الإمارات, حاسبة الشحن أونلاين, عرض أسعار شحن الإمارات, حجز لوجستي دبي",
      url: "https://admin.cannata.ae/ar/shipping-request",
      canonical: "https://admin.cannata.ae/ar/shipping-request",
    },
  },

  // Tracking Page
  tracking: {
    en: {
      title:
        "Real-Time Shipment Tracking UAE | Track Your Cargo Live | Cannata Tracking System",
      description:
        "Track your shipment anywhere, anytime with Cannata's advanced tracking system. Real-time updates, delivery notifications, GPS tracking & 24/7 support.",
      keywords:
        "shipment tracking UAE, cargo tracking Dubai, package tracking Middle East, live tracking system, delivery tracking UAE, GPS cargo tracking, real-time shipment updates, online tracking UAE",
      url: "https://admin.cannata.ae/en/tracking",
      canonical: "https://admin.cannata.ae/en/tracking",
      hreflang: {
        en: "https://admin.cannata.ae/en/tracking",
        ar: "https://admin.cannata.ae/ar/tracking",
      },
      openGraph: {
        title: "Track Your Shipment - Real-Time Updates",
        description:
          "Advanced tracking system with GPS updates and 24/7 support.",
        image: "/og-images/cannata-tracking.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Shipment Tracking Service",
        provider: {
          "@type": "Organization",
          name: "Cannata",
        },
        serviceType: "Package Tracking",
      },
    },
    ar: {
      title:
        "تتبع الشحنات في الوقت الفعلي الإمارات | تتبع البضائع مباشرة | نظام تتبع كاناتا",
      description:
        "تتبع شحنتك في أي مكان وفي أي وقت مع نظام التتبع المتطور من كاناتا. تحديثات فورية، إشعارات التسليم، تتبع GPS ودعم على مدار الساعة.",
      keywords:
        "تتبع الشحنات الإمارات, تتبع البضائع دبي, تتبع الطرود الشرق الأوسط, نظام التتبع المباشر, تتبع التسليم الإمارات, تتبع البضائع GPS, تحديثات الشحن الفورية, التتبع أونلاين الإمارات",
      url: "https://admin.cannata.ae/ar/tracking",
      canonical: "https://admin.cannata.ae/ar/tracking",
    },
  },

  // Custom Clearance Page
  customClearance: {
    en: {
      title:
        "Expert Customs Clearance UAE | Import Export Services | Licensed Customs Broker",
      description:
        "Professional customs clearance services in UAE. Licensed customs brokers, fast clearance, documentation support & compliance expertise. Hassle-free import/export.",
      keywords:
        "customs clearance UAE, customs broker Dubai, import export services UAE, customs documentation Dubai, trade compliance UAE, customs agent Middle East, duty calculation UAE, customs procedures Dubai",
      url: "https://admin.cannata.ae/en/custom-clearance",
      canonical: "https://admin.cannata.ae/en/custom-clearance",
      hreflang: {
        en: "https://admin.cannata.ae/en/custom-clearance",
        ar: "https://admin.cannata.ae/ar/custom-clearance",
      },
      openGraph: {
        title: "Expert Customs Clearance Services UAE",
        description:
          "Licensed customs brokers, fast clearance, and compliance expertise.",
        image: "/og-images/cannata-customs.jpg",
        type: "website",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Customs Clearance Services",
        provider: {
          "@type": "Organization",
          name: "Cannata",
        },
        serviceType: "Customs Brokerage",
        areaServed: {
          "@type": "Place",
          name: "United Arab Emirates",
        },
      },
    },
    ar: {
      title:
        "خدمات التخليص الجمركي المتخصصة الإمارات | خدمات الاستيراد والتصدير | وسيط جمركي مرخص",
      description:
        "خدمات تخليص جمركي احترافية في الإمارات. وسطاء جمركيون مرخصون، تخليص سريع، دعم في التوثيق وخبرة في الامتثال. استيراد/تصدير بدون متاعب.",
      keywords:
        "التخليص الجمركي الإمارات, وسيط جمركي دبي, خدمات الاستيراد والتصدير الإمارات, توثيق جمركي دبي, امتثال التجارة الإمارات, وكيل جمركي الشرق الأوسط, حساب الرسوم الإمارات, إجراءات الجمارك دبي",
      url: "https://admin.cannata.ae/ar/custom-clearance",
      canonical: "https://admin.cannata.ae/ar/custom-clearance",
    },
  },

  // Additional utility functions
  utils: {
    // Generate complete metadata for Next.js generateMetadata
    generateMetadata: (pageKey, locale = "en") => {
      const seo = seoConfig[pageKey]?.[locale] || seoConfig[pageKey]?.en;

      if (!seo) {
        console.warn(`SEO config not found for ${pageKey} in locale ${locale}`);
        return {};
      }

      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        canonical: seo.canonical,

        alternates: {
          canonical: seo.canonical,
          languages: seo.hreflang || {},
        },

        openGraph: {
          title: seo.openGraph?.title || seo.title,
          description: seo.openGraph?.description || seo.description,
          url: seo.url,
          siteName: seo.openGraph?.siteName || "Cannata",
          locale:
            seo.openGraph?.locale || (locale === "ar" ? "ar_AE" : "en_US"),
          type: seo.openGraph?.type || "website",
          images: [
            {
              url: seo.openGraph?.image || "/og-images/cannata-default.jpg",
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
          images: [
            seo.twitterCard?.image || "/twitter-images/cannata-default.jpg",
          ],
        },

        other: {
          keywords: seo.keywords,
        },
      };
    },

    // Generate JSON-LD structured data
    generateJsonLd: (pageKey, locale = "en") => {
      const seo = seoConfig[pageKey]?.[locale] || seoConfig[pageKey]?.en;
      return seo?.schema || {};
    },

    // Validate SEO configuration
    validateSEO: (pageKey, locale = "en") => {
      const seo = seoConfig[pageKey]?.[locale];
      const warnings = [];

      if (!seo) {
        warnings.push(`Missing SEO config for ${pageKey}:${locale}`);
        return warnings;
      }

      if (seo.title && seo.title.length > 60) {
        warnings.push(
          `Title too long (${seo.title.length} chars): ${pageKey}:${locale}`
        );
      }

      if (seo.description && seo.description.length > 160) {
        warnings.push(
          `Description too long (${seo.description.length} chars): ${pageKey}:${locale}`
        );
      }

      if (!seo.canonical) {
        warnings.push(`Missing canonical URL: ${pageKey}:${locale}`);
      }

      if (!seo.openGraph?.image) {
        warnings.push(`Missing Open Graph image: ${pageKey}:${locale}`);
      }

      return warnings;
    },

    // Get all available locales for a page
    getAvailableLocales: (pageKey) => {
      return Object.keys(seoConfig[pageKey] || {});
    },

    // Generate sitemap data
    generateSitemapData: () => {
      const pages = [];

      Object.keys(seoConfig).forEach((pageKey) => {
        if (pageKey === "global" || pageKey === "utils") return;

        Object.keys(seoConfig[pageKey]).forEach((locale) => {
          const seo = seoConfig[pageKey][locale];
          pages.push({
            url: seo.url,
            locale: locale,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: pageKey === "home" ? 1.0 : 0.8,
          });
        });
      });

      return pages;
    },
  },
};

export default seoConfig;
