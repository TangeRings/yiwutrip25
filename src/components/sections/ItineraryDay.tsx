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
  
  // All images including featured image (featured is first, then gallery images)
  const allImages = [featuredImage, ...galleryImages];

  // Navigate to previous image (with loop)
  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      // Loop: if at first image (0), go to last image
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
    }
  };

  // Navigate to next image (with loop)
  const goToNext = () => {
    if (selectedImageIndex !== null) {
      // Loop: if at last image, go to first image (0)
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
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
  }, [selectedImageIndex, allImages.length]);

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
            {/* Featured Image - now clickable */}
            <button
              onClick={() => setSelectedImageIndex(0)}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = '20';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.zIndex = '10';
              }}
            >
              <div className="absolute inset-0 transition-all duration-300 group-hover:scale-[1.02]">
                <CldImage
                  src={featuredImage}
                  alt={`${dayTitle} - Featured`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-accent-navy/0 group-hover:bg-accent-navy/5 transition-colors duration-300" />
            </button>

              {/* Gallery Row */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-4 gap-3 relative">
                  {galleryImages.map((imageId, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index + 1)}
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
              text-[16px]
              lg:text-[17px]
              leading-[1.75]
              tracking-[0.015em]
              text-accent-navy/70
              font-light
              whitespace-pre-line
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
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
        >
          {/* Backdrop - click to close (positioned FIRST so it's behind) */}
          <div
            className="absolute inset-0 bg-black/70 z-0"
            onClick={() => setSelectedImageIndex(null)}
          />
          
          {/* Image container with content below (positioned ABOVE backdrop) */}
          <div
            className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* White container with image + counter + caption */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative flex items-center justify-center px-8 pt-8 pb-4">
                <CldImage
                  src={allImages[selectedImageIndex]}
                  alt={`${dayTitle} - Image ${selectedImageIndex + 1}`}
                  width={1800}
                  height={1800}
                  className="w-auto h-auto max-w-[75vw] max-h-[70vh]"
                  quality={95}
                  priority
                />
              </div>
              
              {/* Counter and Caption section */}
              <div className="px-8 pb-6 space-y-3">
                {/* Image counter */}
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 bg-accent-navy/5 rounded-full text-accent-navy text-sm font-medium">
                    {selectedImageIndex + 1} / {allImages.length}
                  </span>
                </div>
                
                {/* Caption */}
                <p className="text-center text-accent-navy/70 text-[15px] lg:text-[16px] font-light leading-relaxed">
                  Caption placeholder - Day visit to market
                </p>
              </div>
            </div>
            
            {/* Close button - outside white container */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white hover:bg-accent-orange rounded-full flex items-center justify-center text-accent-navy hover:text-white transition-all duration-200 shadow-lg z-20"
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

            {/* Previous button - always visible (loops) */}
            <button
              onClick={goToPrevious}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-all duration-200 shadow-lg hover:scale-110"
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

            {/* Next button - always visible (loops) */}
            <button
              onClick={goToNext}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-accent-navy transition-all duration-200 shadow-lg hover:scale-110"
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
          </div>
        </div>
      )}
    </>
  );
}
