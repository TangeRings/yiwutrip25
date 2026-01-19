import ItineraryDay from "./ItineraryDay";

const itineraryData = [
  {
    dayTitle: "Yiwu Small Merchandise Market",
    description:
      "Students begin their immersion in Yiwu's Small Merchandise Market by stepping into the role of sellers rather than observers. During guided fieldwork, each student is required to approach suppliers as a potential buyer or distributor, initiating real conversations about pricing, minimum order quantities (MOQs), customization options, packaging, and delivery timelines.\n\nThis role-based interaction allows students to uncover operational details that are rarely visible in textbooks—how products are priced across different order scales, how negotiations unfold in practice, and how suppliers position themselves within dense competitive environments.\n\nSpanning over 6.4 million square meters, Yiwu's Small Merchandise Market comprises approximately 75,000 stalls and attracts more than 220,000 visitors daily.",
    featuredImage: "IMG_2745_ffysjx",
    galleryImages: [
      "WX20260112-141214_2x_vc1rk3",
      "WX20260112-141109_2x_nnhz9l",
      "WX20260112-140556_2x_wmpstq",
      "WX20260112-141018_2x_frlitm",
    ],
  },
  // Day 2 and Day 3 can be added here when you have the content
];

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="bg-background">
      {/* Itinerary Days */}
      <div>
        {itineraryData.map((day, index) => (
          <ItineraryDay
            key={index}
            dayTitle={day.dayTitle}
            description={day.description}
            featuredImage={day.featuredImage}
            galleryImages={day.galleryImages}
            showTitle={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
