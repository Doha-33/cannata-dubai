const seoConfig = {
  // Global site configuration
  global: {
    siteName: "Cannata",
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    domain: "https://cannata.ae",
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
      url: "https://cannata.ae/en",
      canonical: "https://cannata.ae/en",
      hreflang: {
        en: "https://cannata.ae/en",
        ar: "https://cannata.ae/ar",
        "x-default": "https://cannata.ae/en",
      },
      openGraph: {
        title: "Cannata - UAE's Premier Global Shipping Partner",
        description:
          "Fast, reliable worldwide shipping from the heart of the Middle East. 24/7 tracking and expert logistics support.",
        image: "https://cannata.ae/images/history3.png",
        type: "website",
        locale: "en_US",
        siteName: "Cannata",
      },
      twitterCard: {
        card: "summary_large_image",
        title: "Cannata - Global Shipping & Logistics UAE",
        url:"https://x.com/CannataCargoUAE",
        description:
          "Fast worldwide shipping from UAE with 24/7 tracking and expert support.",
        image: "https://cannata.ae/images/twitter.jpg",
        site:"@CannataCargoUAE"
      },
      schema: {
        "@context": "https://schema.org",
        "@type": ["Organization", "LogisticsService"],
        name: "Cannata Global Logistics",
        alternateName: "Cannata",
        description:
          "Leading global shipping and logistics company based in UAE",
        url: "https://cannata.ae",
        logo: "https://cannata.ae/images/cannata-logo.png",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AE",
          addressRegion: "Dubai",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971-423-97107",
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
      url: "https://cannata.ae/ar",
      canonical: "https://cannata.ae/ar",
      hreflang: {
        en: "https://cannata.ae/en",
        ar: "https://cannata.ae/ar",
        "x-default": "https://cannata.ae/en",
      },
      openGraph: {
        title: "كاناتا - شريك الشحن العالمي الرائد في الإمارات",
        description:
          "شحن سريع وموثوق عالمياً من قلب الشرق الأوسط. تتبع على مدار الساعة ودعم لوجستي خبير.",
        image: "https://cannata.ae/images/history3.png",
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
      url: "https://cannata.ae/en/services",
      canonical: "https://cannata.ae/en/services",
      hreflang: {
        en: "https://cannata.ae/en/services",
        ar: "https://cannata.ae/ar/services",
      },
      openGraph: {
        title: "Complete Shipping & Logistics Solutions - Cannata UAE",
        description:
          "Air freight, sea cargo, land transport & customs clearance across 180+ countries.",
        image: "https://cannata.ae/images/history2.png",
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
      url: "https://cannata.ae/ar/services",
      canonical: "https://cannata.ae/ar/services",
      hreflang: {
        en: "https://cannata.ae/en/services",
        ar: "https://cannata.ae/ar/services",
      },
    },
  },

  // About Page
  about: {
    en: {
      title:
        "About Cannata | Leading UAE Shipping Company | Global Logistics Experts Since 2010",
      description:
        "Discover Cannata's journey as UAE's trusted shipping partner. Expert team, cutting-edge technology, and commitment to excellence in global logistics solutions.",
      keywords:
        "about Cannata UAE, shipping company history, logistics experts Dubai, freight forwarding company UAE, international shipping specialists, cargo company Middle East, logistics company profile",
      url: "https://cannata.ae/en/about",
      canonical: "https://cannata.ae/en/about",
      hreflang: {
        en: "https://cannata.ae/en/about",
        ar: "https://cannata.ae/ar/about",
      },
      openGraph: {
        title: "About Cannata - UAE's Trusted Shipping Partner",
        description:
          "Expert team, cutting-edge technology, and commitment to excellence in global logistics.",
        image: "https://cannata.ae/images/history1.png",
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
      url: "https://cannata.ae/ar/about",
      canonical: "https://cannata.ae/ar/about",
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
      url: "https://cannata.ae/en/contact",
      canonical: "https://cannata.ae/en/contact",
      hreflang: {
        en: "https://cannata.ae/en/contact",
        ar: "https://cannata.ae/ar/contact",
      },
      openGraph: {
        title: "Contact Cannata - Get Your Free Shipping Quote",
        description:
          "Dubai office, 24/7 customer service, and expert consultation. Call now!",
        image: "https://cannata.ae/images/image33.png",
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
            telephone: "+971-423-97107",
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
      url: "https://cannata.ae/ar/contact",
      canonical: "https://cannata.ae/ar/contact",
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
      url: "https://cannata.ae/en/blogs",
      canonical: "https://cannata.ae/en/blogs",
      hreflang: {
        en: "https://cannata.ae/en/blogs",
        ar: "https://cannata.ae/ar/blogs",
      },
      openGraph: {
        title: "Cannata Blog - Shipping & Logistics Insights",
        description:
          "Latest shipping trends, logistics insights, and industry news from experts.",
        image: "https://cannata.ae/images/image11.png",
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
      url: "https://cannata.ae/ar/blogs",
      canonical: "https://cannata.ae/ar/blogs",
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
      url: "https://cannata.ae/en/gallery",
      canonical: "https://cannata.ae/en/gallery",
      hreflang: {
        en: "https://cannata.ae/en/gallery",
        ar: "https://cannata.ae/ar/gallery",
      },
      openGraph: {
        title: "Cannata Gallery - Our Facilities & Operations",
        description:
          "State-of-the-art facilities, shipping operations, and cargo handling capabilities.",
        image: "https://cannata.ae/images/image13.png",
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
      url: "https://cannata.ae/ar/gallery",
      canonical: "https://cannata.ae/ar/gallery",
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
      url: "https://cannata.ae/en/shipping",
      canonical: "https://cannata.ae/en/shipping",
      hreflang: {
        en: "https://cannata.ae/en/shipping",
        ar: "https://cannata.ae/ar/shipping",
      },
      openGraph: {
        title: "Request Shipping Quote - Fast & Easy Booking",
        description:
          "Get instant quotes and book cargo online. Professional service guaranteed.",
        image: "https://cannata.ae/images/image10.png",
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
      url: "https://cannata.ae/ar/shipping",
      canonical: "https://cannata.ae/ar/shipping",
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
      url: "https://cannata.ae/en/tracking",
      canonical: "https://cannata.ae/en/tracking",
      hreflang: {
        en: "https://cannata.ae/en/tracking",
        ar: "https://cannata.ae/ar/tracking",
      },
      openGraph: {
        title: "Track Your Shipment - Real-Time Updates",
        description:
          "Advanced tracking system with GPS updates and 24/7 support.",
        image: "https://cannata.ae/images/image44.png",
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
      url: "https://cannata.ae/ar/tracking",
      canonical: "https://cannata.ae/ar/tracking",
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
      url: "https://cannata.ae/en/custom",
      canonical: "https://cannata.ae/en/custom",
      hreflang: {
        en: "https://cannata.ae/en/custom",
        ar: "https://cannata.ae/ar/custom",
      },
      openGraph: {
        title: "Expert Customs Clearance Services UAE",
        description:
          "Licensed customs brokers, fast clearance, and compliance expertise.",
        image: "https://cannata.ae/images/image16.png",
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
      url: "https://cannata.ae/ar/custom",
      canonical: "https://cannata.ae/ar/custom",
    },
  },

    // Orders Page
  orders: {
    en: {
      title: "My Orders | Cannata UAE | Track & Manage Your Shipments",
      description:
        "View and manage your shipping orders with Cannata. Track shipment status, check order history, and manage your logistics easily online.",
      keywords:
        "my orders Cannata, shipment orders UAE, manage shipping orders Dubai, logistics orders tracking, cargo orders UAE",
      url: "https://cannata.ae/en/order",
      canonical: "https://cannata.ae/en/order",
      hreflang: {
        en: "https://cannata.ae/en/order",
        ar: "https://cannata.ae/ar/order",
      },
      openGraph: {
        title: "My Orders - Track & Manage Shipments | Cannata",
        description:
          "Track and manage all your Cannata shipment orders in one place.",
        image: "https://cannata.ae/images/image13.png",
        type: "website",
      },
    },
    ar: {
      title: "طلباتي | كاناتا الإمارات | تتبع وإدارة شحناتك",
      description:
        "اعرض وأدر طلبات الشحن الخاصة بك مع كاناتا. تتبع حالة الشحنات، تحقق من سجل الطلبات، وأدر لوجستياتك بسهولة عبر الإنترنت.",
      keywords:
        "طلباتي كاناتا, طلبات الشحن الإمارات, إدارة طلبات الشحن دبي, تتبع الطلبات اللوجستية, شحن البضائع الإمارات",
      url: "https://cannata.ae/ar/order",
      canonical: "https://cannata.ae/ar/order",
    },
  },

  // Sign Up Page
  signUp: {
    en: {
      title: "Sign Up | Cannata UAE | Create Your Account",
      description:
        "Create your free Cannata account and start managing your shipping orders online. Access tracking, support, and fast logistics services.",
      keywords:
        "sign up Cannata, create account Cannata UAE, register shipping account, logistics signup Dubai",
      url: "https://cannata.ae/en/signUp",
      canonical: "https://cannata.ae/en/signUp",
      openGraph: {
        title: "Sign Up - Create Your Cannata Account",
        description: "Join Cannata and manage your shipments online.",
        image: "https://cannata.ae/images/history5.png",
        type: "website",
      },
    },
    ar: {
      title: "تسجيل حساب | كاناتا الإمارات | أنشئ حسابك الآن",
      description:
        "أنشئ حسابك المجاني مع كاناتا وابدأ في إدارة طلبات الشحن الخاصة بك عبر الإنترنت. وصول إلى التتبع والدعم وخدمات لوجستية سريعة.",
      keywords:
        "تسجيل كاناتا, إنشاء حساب كاناتا الإمارات, تسجيل حساب شحن, تسجيل لوجستي دبي",
      url: "https://cannata.ae/ar/signUp",
      canonical: "https://cannata.ae/ar/signUp",
    },
  },

  // Login Page
  login: {
    en: {
      title: "Login | Cannata UAE | Access Your Account",
      description:
        "Login to your Cannata account to manage orders, track shipments, and access logistics services anytime, anywhere.",
      keywords:
        "login Cannata, Cannata account login, shipping login UAE, logistics account login",
      url: "https://cannata.ae/en/login",
      canonical: "https://cannata.ae/en/login",
      openGraph: {
        title: "Login - Cannata Account Access",
        description:
          "Access your Cannata account to track and manage shipments.",
        image: "https://cannata.ae/images/history4.png",
        type: "website",
      },
    },
    ar: {
      title: "تسجيل الدخول | كاناتا الإمارات | الوصول إلى حسابك",
      description:
        "قم بتسجيل الدخول إلى حسابك في كاناتا لإدارة الطلبات، تتبع الشحنات، والوصول إلى خدمات لوجستية في أي وقت ومن أي مكان.",
      keywords:
        "تسجيل الدخول كاناتا, دخول حساب كاناتا الإمارات, تسجيل دخول شحن, تسجيل دخول لوجستي دبي",
      url: "https://cannata.ae/ar/login",
      canonical: "https://cannata.ae/ar/login",
    },
  },

  // Profile Page
  editprofile: {
    en: {
      title: "My Profile | Cannata UAE | Manage Your Account",
      description:
        "Manage your Cannata profile, update account details, and access personalized shipping services in UAE.",
      keywords:
        "my profile Cannata, account settings Cannata UAE, manage profile shipping, logistics account management Dubai",
      url: "https://cannata.ae/en/editprofile",
      canonical: "https://cannata.ae/en/editprofile",
      openGraph: {
        title: "My Profile - Manage Your Cannata Account",
        description:
          "Update your profile and manage your Cannata account online.",
        image: "https://cannata.ae/images/image33.png",
        type: "website",
      },
    },
    ar: {
      title: "ملفي الشخصي | كاناتا الإمارات | إدارة حسابك",
      description:
        "أدر ملفك الشخصي في كاناتا، حدّث تفاصيل حسابك، واحصل على خدمات شحن مخصصة في الإمارات.",
      keywords:
        "ملفي الشخصي كاناتا, إعدادات الحساب كاناتا الإمارات, إدارة ملف الشحن, إدارة حساب لوجستي دبي",
      url: "https://cannata.ae/ar/editprofile",
      canonical: "https://cannata.ae/ar/editprofile",
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
              url: seo.openGraph?.image || "https://cannata.ae/images/image16.png",
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
            seo.twitterCard?.image || "https://x.com/CannataCargoUAE/photo",
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
