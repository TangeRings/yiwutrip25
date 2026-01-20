import ItineraryDay from "./ItineraryDay";
import { itineraryData } from "@/config/itineraryData";

export default function ItinerarySection() {
  // Transform data from config into component props format
  const days = itineraryData.map(day => ({
    dayNumber: day.dayNumber,
    dayTitle: day.dayTitle,
    description: day.description,
    featuredImage: day.featuredImage.cloudinaryId,
    galleryImages: day.galleryImages.map(img => img.cloudinaryId),
    imageCaptions: [
      day.featuredImage.caption,
      ...day.galleryImages.map(img => img.caption)
    ],
    studentQuote: day.studentQuote || "",
  }));

  return (
    <section id="itinerary" className="bg-background">
      {/* Itinerary Days */}
      <div>
        {days.map((day, index) => (
          <ItineraryDay
            key={index}
            dayNumber={day.dayNumber}
            dayTitle={day.dayTitle}
            description={day.description}
            featuredImage={day.featuredImage}
            galleryImages={day.galleryImages}
            imageCaptions={day.imageCaptions}
            studentQuote={day.studentQuote}
            showTitle={true}
          />
        ))}
      </div>
    </section>
  );
}
