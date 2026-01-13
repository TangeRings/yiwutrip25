import ItineraryDay from "./ItineraryDay";

const itineraryData = [
  {
    dayTitle: "Market Exploration",
    description:
      "Students begin their immersive journey into Yiwu's Small Merchandise Market, observing the scale and diversity of small-scale commerce. Through guided exploration, participants learn to identify market opportunities, understand supplier relationships, and witness real-time negotiation dynamics that define low-budget entrepreneurship.",
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
