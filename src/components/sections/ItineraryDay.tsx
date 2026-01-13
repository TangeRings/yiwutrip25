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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
              Itinerary
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
                  quality="auto"
                  format="auto"
                />
              </div>

              {/* Gallery Row */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-3 relative">
                  {galleryImages.map((imageId, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(imageId)}
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

      {/* Popup Modal - Less intrusive */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="relative max-w-4xl w-full bg-background rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <CldImage
                src={selectedImage}
                alt={`${dayTitle} - Full size`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 56rem"
                priority
              />
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-colors duration-200 shadow-lg"
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
          </div>
          {/* Backdrop - click to close */}
          <div
            className="absolute inset-0 bg-accent-navy/40 backdrop-blur-sm pointer-events-auto"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </>
  );
}
