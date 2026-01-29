/**
 * Itinerary Data Configuration
 * 
 * Edit this file to manage all itinerary content, images, and captions.
 * No need to touch the component files!
 */

export interface ItineraryDay {
  dayNumber: number;
  dayTitle: string;
  description: string;
  featuredImage: {
    cloudinaryId: string;
    caption: string;
  };
  galleryImages: Array<{
    cloudinaryId: string;
    caption: string;
  }>;
  studentQuote?: string;
  studentName?: string;
  companiesVisited?: Array<{
    name: string;
    description: string;
  }>;
}

export const itineraryData: ItineraryDay[] = [
  // ============================================
  // DAY 1
  // ============================================
  {
    dayNumber: 1,
    dayTitle: "Yiwu Small Merchandise Market",
    description: "Students begin their immersion in Yiwu's Small Merchandise Market by stepping into the role of sellers rather than observers. Guided by Prof. <a href='https://tangerings.github.io/' target='_blank' rel='noopener noreferrer' class='text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2'>Nicole C. Wang</a>, <span class='text-accent-orange font-bold'>each student is required to approach suppliers as a potential buyer or distributor</span>, initiating real conversations about pricing, minimum order quantities (MOQs), customization options, packaging, and delivery timelines.\n\nThis role-based interaction allows students to uncover operational details that are rarely visible in textbooks—how products are priced across different order scales, how negotiations unfold in practice, and how suppliers position themselves within dense competitive environments.\n\nSpanning over 6.4 million square meters, Yiwu's Small Merchandise Market comprises 75,000 stalls and attracts around 220,000 visitors daily.",

    // Featured Image (the big one)
    featuredImage: {
      cloudinaryId: "IMG_2745_ffysjx",
      caption: "Factory-store owners repack products on-site to meet various customer needs."
    },

    // Gallery Images (the 4 small ones)
    galleryImages: [
      {
        cloudinaryId: "WX20260112-141214_2x_vc1rk3",
        caption: "District 1 houses toy, flower and jewelry suppliers whose products are distributed globally."
      },
      {
        cloudinaryId: "WX20260112-141109_2x_nnhz9l",
        caption: "Students examine the wide range of products in the toy section in District 1."
      },
      {
        cloudinaryId: "WX20260112-140556_2x_wmpstq",
        caption: "Prof. <a href='https://tangerings.github.io/' target='_blank' rel='noopener noreferrer' class='text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2'>Nicole C. Wang</a> introduces supply chain structures and negotiation strategies on site."
      },
      {
        cloudinaryId: "WX20260112-141018_2x_frlitm",
        caption: "Santing Road Night Market offers a contrasting view of small-scale retail practices."
      }
    ],

    studentQuote: "In Yiwu, I saw how real businesses happen in many forms. I learned how to dive into unfamiliar fields quickly—not only through the internet and AI tools, but through first-hand information and real negotiations.",
    studentName: "Luyi Yang, '26, Business and Finance"
  },

  // ============================================
  // DAY 2
  // ============================================
  {
    dayNumber: 2,
    dayTitle: "Company Visits",
    description: "Day 2 focuses on understanding Yiwu not only as a manufacturing hub, but as a full global supply chain ecosystem that connects production, global distribution, platform-driven e-commerce and brands.\n\nRather than viewing supply chains as a linear process, students explore how <span class='text-accent-orange font-bold'>value is created across multiple layers</span> — from factory-floor operations and semi-automated assembly, to cross-border e-commerce infrastructure, livestream service platforms, and creator-enabled retail models. These visits highlight how modern entrepreneurship in China often <span class='text-accent-orange font-bold'>emerges through networks of suppliers, data systems, incubators, and commerce services, not isolated firms</span>.",

    companiesVisited: [
      {
        name: "Livestream Commerce Support Services",
        description: "data analytics, conversion tools, and platform infrastructure"
      },
      {
        name: "Jewelry Factory Showroom & Supply Models",
        description: "wholesale networks and creator-driven 'walk-and-sell' commerce"
      },
      {
        name: "Southeast Asia Cross-Border E-Commerce Operator",
        description: "demand-driven sourcing and warehouse fulfillment"
      },
      {
        name: "Cosmetics OEM Manufacturer",
        description: "large-scale formulation, production, and semi-automated assembly"
      }
    ],


    featuredImage: {
      cloudinaryId: "IMG_20250927_113548_nr7tx6",
      caption: "Students observe warehouse operations at a Southeast Asia–focused cross-border e-commerce company, where data-driven demand analysis informs supplier matching, sourcing, and end-to-end fulfillment before shipment."
    },

    galleryImages: [
      {
        cloudinaryId: "IMG_2865_phpyjx",
        caption: "Students visit a major cosmetics supplier serving Western markets, learning about core formulation and manufacturing processes in the company’s product showroom."
      },
      {
        cloudinaryId: "IMG_2902_qiy6h7",
        caption: "Students observe workers assembling pressed powder products for Western beauty brands. Certain production steps remain semi-automated, requiring human–machine collaboration to ensure precision, consistency, and brand-specific standards."
      },
      {
        cloudinaryId: "IMG_2803_cit9uz",
        caption: "Students visit a live-commerce office complex that brings together technology, data, training, and incubation services to support brands and manufacturers entering livestream e-commerce."
      },
      {
        cloudinaryId: "IMG_2824_nmpjtn",
        caption: "The manager of a jewelry supplier explains emerging supply and distribution models, from small-batch wholesale to livestream “walk-and-sell” formats. These models enable individual creators to operate lean, one-person businesses while remaining connected to larger supply chains."
      }
    ]
  }
];
