import ItineraryDay from "./ItineraryDay";

const itineraryData = [
  {
    dayTitle: "Day 1 — Market Exploration",
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
    <section id="itinerary" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <h2 className="
            font-display
            font-bold
            text-[40px]
            lg:text-[48px]
            leading-[1.1]
            tracking-tight
            text-accent-navy
            mb-6
          ">
            Itinerary
          </h2>
          <p className="
            text-[17px]
            lg:text-[19px]
            leading-[1.75]
            tracking-[0.015em]
            text-accent-navy/70
            font-light
            max-w-2xl
            mx-auto
          ">
            A structured three-day field experience designed to immerse students in real-world entrepreneurship through direct market engagement.
          </p>
        </div>

        {/* Itinerary Days */}
        <div>
          {itineraryData.map((day, index) => (
            <ItineraryDay
              key={index}
              dayTitle={day.dayTitle}
              description={day.description}
              featuredImage={day.featuredImage}
              galleryImages={day.galleryImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
