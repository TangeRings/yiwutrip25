"use client";

import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

interface ItineraryDayProps {
  dayNumber: number;
  dayTitle: string;
  description: string;
  featuredImage: string;
  galleryImages: string[];
  imageCaptions?: string[]; // Array of captions: [featuredCaption, gallery1, gallery2, ...]
  studentQuote?: string;
  studentName?: string;
  companiesVisited?: Array<{
    name: string;
    description: string;
  }>;
  showTitle?: boolean;
}

export default function ItineraryDay({
  dayNumber,
  dayTitle,
  description,
  featuredImage,
  galleryImages,
  imageCaptions,
  studentQuote,
  studentName,
  companiesVisited,
  showTitle = false,
}: ItineraryDayProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imgWidth, setImgWidth] = useState<number | null>(null);

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
    } else {
      // Clear image width when modal closes
      setImgWidth(null);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex, allImages.length]);

  return (
    <>
      <div className="min-h-screen flex items-start pt-0 pb-6 lg:pb-8 border-b border-accent-navy/10 last:border-b-0" data-scroll-section>
        <div className="container mx-auto px-6 lg:px-16 max-w-[1400px] w-full">
          {/* Itinerary Title - Only show on first day, positioned above grid */}
          {showTitle && (
            <h2 className="
              font-display
              font-bold
              text-[30px]
              lg:text-[34px]
              leading-[1.1]
              tracking-tight
              text-accent-navy
              mb-6 lg:mb-8
              pt-12 lg:pt-16
            ">
              Itinerary - Day {dayNumber}
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
            <div className="flex flex-col">
              <h2 className="
                font-display
                font-bold
                text-[24px]
                lg:text-[26px]
                leading-tight
                tracking-tight
                text-accent-navy
                mb-4
                mt-0
              ">
                {dayTitle}
              </h2>

              <div className="space-y-4">
                {description.split('\n\n').map((para, idx) => (
                  <p
                    key={idx}
                    className="
                      text-[14px]
                      lg:text-[14.5px]
                      leading-[1.6]
                      tracking-[0.01em]
                      text-accent-navy/70
                      font-light
                    "
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>

              {/* Companies Visited Section */}
              {companiesVisited && companiesVisited.length > 0 && (
                <div className="mt-6 mb-6">
                  <h3 className="
                    text-[12px]
                    lg:text-[13px]
                    font-semibold
                    tracking-[0.1em]
                    uppercase
                    text-accent-navy/60
                    mb-3
                    letter-spacing-wide
                  ">
                    Companies Visited
                  </h3>

                  <div className="bg-accent-navy/[0.02] border border-accent-navy/[0.08] rounded-xl px-4 py-2.5 lg:px-4 lg:py-3">
                    <ul className="space-y-2.5">
                      {companiesVisited.map((company, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          {/* Custom bullet point */}
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                          </div>

                          {/* Company info */}
                          <div className="flex-1">
                            <div className="
                              text-[13px]
                              lg:text-[14px]
                              font-medium
                              text-accent-navy
                              leading-tight
                              mb-0.5
                            ">
                              {company.name}
                            </div>
                            <div className="
                              text-[12px]
                              lg:text-[13px]
                              text-accent-navy/60
                              font-light
                              leading-relaxed
                            ">
                              {company.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Student Quote - Dark Card Style */}
              {studentQuote && (
                <div className="mt-8 mb-4 relative w-full">
                  <div className="relative bg-accent-navy rounded-xl p-5 lg:px-7 lg:py-6 overflow-hidden">
                    {/* Decorative Quote Marks - Top Left */}
                    <div className="absolute top-3 left-3 opacity-20">
                      <svg width="28" height="24" viewBox="0 0 48 40" fill="none">
                        <path d="M0 19.95V0h19.11v19.37c0 8.91-4.59 13.74-13.79 15.99l-2.43-3.91c5.45-1.67 7.53-4.68 7.53-8.67H0v-2.83zm28.89 0V0H48v19.37c0 8.91-4.59 13.74-13.79 15.99l-2.43-3.91c5.45-1.67 7.53-4.68 7.53-8.67h-10.42v-2.83z" fill="#D4A574" />
                      </svg>
                    </div>

                    {/* Decorative Quote Marks - Bottom Right */}
                    <div className="absolute bottom-3 right-3 opacity-20 rotate-180">
                      <svg width="28" height="24" viewBox="0 0 48 40" fill="none">
                        <path d="M0 19.95V0h19.11v19.37c0 8.91-4.59 13.74-13.79 15.99l-2.43-3.91c5.45-1.67 7.53-4.68 7.53-8.67H0v-2.83zm28.89 0V0H48v19.37c0 8.91-4.59 13.74-13.79 15.99l-2.43-3.91c5.45-1.67 7.53-4.68 7.53-8.67h-10.42v-2.83z" fill="#D4A574" />
                      </svg>
                    </div>

                    {/* Quote Content */}
                    <div className="relative z-10">
                      <p className="
                        text-[13px]
                        lg:text-[14px]
                        leading-[1.6]
                        tracking-[0.01em]
                        text-white/90
                        font-light
                        italic
                        mb-4
                        pr-6
                      ">
                        {studentQuote}
                      </p>

                      {/* Attribution Line */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-[1px] bg-white/10" />
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[11px] lg:text-[12px] font-medium text-white/80 tracking-wide whitespace-nowrap">
                            {studentName?.split(',')[0] || "Student"}
                          </span>
                          {studentName?.includes(',') && (
                            <>
                              <span className="w-1 h-1 bg-white/20 rounded-full" />
                              <span className="text-[10px] lg:text-[11px] font-light text-white/50 whitespace-nowrap">
                                {studentName.split(',').slice(1).join(',').trim()}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col">
              {/* Image */}
              <div className="px-8 pt-8 pb-4 flex justify-center">
                <CldImage
                  src={allImages[selectedImageIndex]}
                  alt={`${dayTitle} - Image ${selectedImageIndex + 1}`}
                  width={1600}
                  height={1600}
                  className="block w-auto h-auto max-h-[70vh] max-w-[75vw] rounded-lg"
                  quality={80}
                  onLoad={(e) => {
                    const width = (e.currentTarget as HTMLImageElement).clientWidth;
                    setImgWidth(width);
                  }}
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

                {/* Caption - width locked to image width */}
                <p
                  className="mx-auto text-center text-accent-navy/70 text-[13px] lg:text-[14px] font-light leading-relaxed whitespace-normal break-words"
                  style={{ width: imgWidth ? `${imgWidth}px` : "auto" }}
                  dangerouslySetInnerHTML={{ __html: imageCaptions && imageCaptions[selectedImageIndex] ? imageCaptions[selectedImageIndex] : "No caption available" }}
                />
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
