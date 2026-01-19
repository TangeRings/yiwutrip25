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
}

export const itineraryData: ItineraryDay[] = [
  // ============================================
  // DAY 1
  // ============================================
  {
    dayNumber: 1,
    dayTitle: "Market Exploration",
    description: "Students begin their immersive journey into Yiwu's Small Merchandise Market, observing the scale and diversity of small-scale commerce. Through guided exploration, participants learn to identify market opportunities, understand supplier relationships, and witness real-time negotiation dynamics that define low-budget entrepreneurship.",
    
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
        caption: "Professor Nicole C. Wang introduces supply chain structures and negotiation strategies on site."
      },
      {
        cloudinaryId: "WX20260112-141018_2x_frlitm",
        caption: "Santing Road Night Market offers a contrasting view of small-scale retail practices."
      }
    ]
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
