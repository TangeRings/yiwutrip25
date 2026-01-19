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
}

export const itineraryData: ItineraryDay[] = [
  // ============================================
  // DAY 1
  // ============================================
  {
    dayNumber: 1,
    dayTitle: "Yiwu Small Merchandise Market",
    description: "Students begin their immersion in Yiwu's Small Merchandise Market by stepping into the role of sellers rather than observers. During guided fieldwork, each student is required to approach suppliers as a potential buyer or distributor, initiating real conversations about pricing, minimum order quantities (MOQs), customization options, packaging, and delivery timelines.\n\nThis role-based interaction allows students to uncover operational details that are rarely visible in textbooks—how products are priced across different order scales, how negotiations unfold in practice, and how suppliers position themselves within dense competitive environments.\n\nSpanning over 6.4 million square meters, Yiwu's Small Merchandise Market comprises 75,000 stalls and attracts around 220,000 visitors daily.",
    
    // Featured Image (the big one)
    featuredImage: {
      cloudinaryId: "IMG_2745_ffysjx",
      caption: "Factory-store owners repack products on-site to meet various customer needs."
    },
    
    // Gallery Images (the 4 small ones)
    galleryImages: [
      {
        cloudinaryId: "WX20260112-141214_2x_vc1rk3",
        caption: "District 1 concentrates toy suppliers whose products are distributed globally."
      },
      {
        cloudinaryId: "WX20260112-141109_2x_nnhz9l",
        caption: "Students examine the wide range of products in the toy category."
      },
      {
        cloudinaryId: "WX20260112-140556_2x_wmpstq",
        caption: "Prof. Nicole C. Wang introduces supply chain structures and negotiation strategies on site."
      },
      {
        cloudinaryId: "WX20260112-141018_2x_frlitm",
        caption: "Santing Road Night Market offers a contrasting view of small-scale retail practices."
      }
    ],
    
    studentQuote: "This experience completely changed my understanding of global supply chains. Talking directly with suppliers gave me insights I never could have learned from a textbook."
  },

  // ============================================
  // DAY 2
  // ============================================
  {
    dayNumber: 2,
    dayTitle: "Supplier Engagement",
    description: "Dive deeper into supplier relationships. Students engage directly with merchants, learning negotiation tactics, MOQ requirements, and quality assessment. Site visits to manufacturing facilities provide insight into production processes and cost structures.",
    
    featuredImage: {
      cloudinaryId: "yiwutrip/placeholder_day2_featured", // Replace with actual Cloudinary ID
      caption: "Day 2 - Caption for featured image"
    },
    
    galleryImages: [
      {
        cloudinaryId: "yiwutrip/placeholder_day2_1", // Replace with actual Cloudinary ID
        caption: "Day 2 - Gallery image 1 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day2_2",
        caption: "Day 2 - Gallery image 2 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day2_3",
        caption: "Day 2 - Gallery image 3 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day2_4",
        caption: "Day 2 - Gallery image 4 caption"
      }
    ]
  },

  // ============================================
  // DAY 3
  // ============================================
  {
    dayNumber: 3,
    dayTitle: "Business Validation",
    description: "Apply lean startup methods in real-time. Students test their business hypotheses, conduct customer interviews, and refine product ideas based on market feedback. Final presentations showcase validated learning and actionable next steps.",
    
    featuredImage: {
      cloudinaryId: "yiwutrip/placeholder_day3_featured", // Replace with actual Cloudinary ID
      caption: "Day 3 - Caption for featured image"
    },
    
    galleryImages: [
      {
        cloudinaryId: "yiwutrip/placeholder_day3_1", // Replace with actual Cloudinary ID
        caption: "Day 3 - Gallery image 1 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day3_2",
        caption: "Day 3 - Gallery image 2 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day3_3",
        caption: "Day 3 - Gallery image 3 caption"
      },
      {
        cloudinaryId: "yiwutrip/placeholder_day3_4",
        caption: "Day 3 - Gallery image 4 caption"
      }
    ]
  }
];
