"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

interface ItineraryDayProps {
  dayTitle: string;
  description: string;
  featuredImage: string;
  galleryImages: string[];
  showTitle?: boolean;
}

export default function ItineraryDay({
  dayTitle,
  description,
  featuredImage,
  galleryImages,
  showTitle = false,
}: ItineraryDayProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Navigate to previous image
  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  // Navigate to next image
  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex, galleryImages.length]);

  return (
    <>
      <div className="min-h-screen flex items-start pt-0 pb-6 lg:pb-8 border-b border-accent-navy/10 last:border-b-0" data-scroll-section>
        <div className="container mx-auto px-6 lg:px-12 w-full">
          {/* Itinerary Title - Only show on first day, positioned above grid */}
          {showTitle && (
            <h2 className="
              font-display
              font-bold
              text-[40px]
              lg:text-[48px]
              leading-[1.1]
              tracking-tight
              text-accent-navy
              mb-8 lg:mb-10
              pt-24 lg:pt-24
            ">
              Itinerary - Day 1
            </h2>
          )}
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Images */}
          <div className="space-y-6">
            {/* Featured Image - Hero, clear and prominent */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                <CldImage
                  src={featuredImage}
                  alt={dayTitle}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Gallery Row */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-3 relative">
                  {galleryImages.map((imageId, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className="relative w-full aspect-square rounded-xl overflow-visible group cursor-pointer"
                      style={{ zIndex: 1 }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.zIndex = '50';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.zIndex = '1';
                      }}
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.5] origin-center opacity-75 group-hover:opacity-100 shadow-md group-hover:shadow-2xl">
                        {/* Thumbnail - muted/desaturated for visual hierarchy */}
                        <CldImage
                          src={imageId}
                          alt={`${dayTitle} - Gallery ${index + 1}`}
                          fill
                          className="object-cover group-hover:hidden"
                          sizes="(max-width: 768px) 25vw, 12.5vw"
                          loading="lazy"
                          effects={[
                            {
                              saturation: -20,
                            },
                            {
                              contrast: -5,
                            },
                          ]}
                        />
                        {/* High-res version on hover - full color restored */}
                        <CldImage
                          src={imageId}
                          alt={`${dayTitle} - Gallery ${index + 1} - High res`}
                          fill
                          className="object-cover hidden group-hover:block"
                          sizes="(max-width: 768px) 75vw, 37.5vw"
                        />
                        {/* Subtle overlay - lighter on hover */}
                        <div className="absolute inset-0 bg-accent-navy/15 group-hover:bg-accent-navy/5 transition-colors duration-300" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

          {/* Right Side - Text */}
          <div className="lg:pl-8 flex flex-col">
            <h2 className="
              font-display
              font-bold
              text-[32px]
              lg:text-[36px]
              leading-[1.2]
              tracking-tight
              text-accent-navy
              mb-6
            ">
              {dayTitle}
            </h2>
            <p className="
              text-[17px]
              lg:text-[19px]
              leading-[1.75]
              tracking-[0.015em]
              text-accent-navy/70
              font-light
            ">
              {description}
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Popup Modal - High-res lightbox with navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop - click to close (positioned FIRST so it's behind) */}
          <div
            className="absolute inset-0 bg-black/70 z-0"
            onClick={() => setSelectedImageIndex(null)}
          />
          
          {/* Image container (positioned ABOVE backdrop) */}
          <div
            className="relative max-w-5xl w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <CldImage
                src={galleryImages[selectedImageIndex]}
                alt={`${dayTitle} - Gallery ${selectedImageIndex + 1}`}
                width={2000}
                height={3000}
                className="object-contain w-full h-auto max-h-[90vh] rounded-lg shadow-2xl bg-white"
                quality={95}
                priority
              />
            </div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-colors duration-200 shadow-lg z-10"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-all duration-200 shadow-lg hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {selectedImageIndex < galleryImages.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-all duration-200 shadow-lg hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 rounded-full text-accent-navy text-sm font-medium shadow-lg">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
