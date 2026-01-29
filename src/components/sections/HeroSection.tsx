"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Big Typography */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="
                  font-display 
                  font-bold 
                  text-[48px] 
                  sm:text-[40px] 
                  lg:text-[50px] 
                  xl:text-[53px]
                  leading-[0.95] 
                  tracking-tight
                  text-accent-navy
                ">
                  Explore the World's Largest
                </h1>
                <h1 className="
                  font-display 
                  font-bold 
                  text-[48px] 
                  sm:text-[40px] 
                  lg:text-[50px] 
                  xl:text-[53px]
                  leading-[0.95] 
                  tracking-tight
                  text-accent-navy
                ">
                  Small Merchant Market
                </h1>

              </div>

              {/* Decorative accent stars 
               <div className="flex items-center space-x-3 text-accent-orange text-[20px] lg:text-[22px] leading-[1.5] tracking-[0.01em] pt-2">
                 <span>★</span>
                 <span>★</span>
                 <span>★</span>
               </div>
               */}

              {/* Hero Image */}
              <div className="mt-8 lg:mt-10">
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                  <CldImage
                    src="IMG_2743_puu9k3"
                    alt="Yiwu Market"
                    fill
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    priority
                  />
                </div>
              </div>

              {/* Faculty Quote */}
              <div className="mt-8 lg:mt-10">
                <div className="relative pl-6 border-l-[3px] border-accent-orange/40">
                  <p className="
                    text-[16px]
                    lg:text-[18px]
                    leading-[1.7]
                    tracking-[0.01em]
                    text-accent-navy/85
                    font-light
                    italic
                    mb-4
                  ">
                    "This trip allows our students to witness firsthand how innovation in supply chain, logistics, and digital creativity come together to power the online economy."
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-accent-navy/20" />
                    <div>
                      <p className="text-[12px] font-bold text-accent-navy uppercase tracking-wider leading-none mb-1">
                        Prof. Nicole C. Wang
                      </p>
                      <p className="text-[11px] font-light text-accent-navy/50">
                        Interactive Media & Business
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Description & CTA */}
            <div className="space-y-8 lg:pl-8">
              <h2 className="
                font-display
                font-semibold
                text-[20px]
                lg:text-[21px]
                leading-[1.3]
                tracking-tight
                text-accent-navy
              ">
                Learn Entrepreneurship Where
                Small Businesses Are Actually Built
              </h2>
              <p className="
                text-[17px]
                lg:text-[19px]
                leading-[1.75]
                tracking-[0.015em]
                text-accent-navy/70
                font-light
              ">
                This immersive field experience brings students into Yiwu's Small Merchandise Market to <span className="font-semibold text-accent-orange">observe, negotiate</span>, and <span className="font-semibold text-accent-orange">test business ideas</span> in one of the world's most active small-scale commercial ecosystems.
                By combining <span className="font-semibold text-accent-orange">lean startup methods</span> with <span className="font-semibold text-accent-orange">firsthand exposure</span> to suppliers and market dynamics, students gain practical insight into how low-budget ventures move from <span className="font-semibold text-accent-orange">concept to market validation</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group px-6 py-2.5 bg-accent-orange text-white text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.01em] font-medium rounded-full hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center space-x-2.5">
                    <span>Watch the Video</span>
                    <span className="group-hover:scale-110 transition-transform">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="inline-block"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                </button>

                <a
                  href="https://www.nyu.sh.cn/news/yiwu-101-lessons-worlds-biggest-market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-2.5 bg-accent-navy text-white text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.01em] font-medium rounded-full hover:bg-accent-navy/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg inline-block"
                >
                  <span className="flex items-center space-x-2.5">
                    <span>Read the News</span>
                    <span className="group-hover:scale-110 transition-transform opacity-90">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                        <path d="M18 14H10" />
                        <path d="M18 18h-8" />
                        <path d="M18 10h-8" />
                        <path d="M18 6h-8" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>

              {/* Stats or Additional Info */}
              <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-accent-navy/10">
                <div className="text-center">
                  <div className="text-[30px] lg:text-[32px] leading-[1.2] tracking-tight font-display font-bold text-accent-navy">25</div>
                  <div className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60 mt-1">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-[30px] lg:text-[32px] leading-[1.2] tracking-tight font-display font-bold text-accent-navy">3</div>
                  <div className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60 mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-[30px] lg:text-[32px] leading-[1.2] tracking-tight font-display font-bold text-accent-navy">5</div>
                  <div className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60 mt-1">Districts Visited</div>
                </div>
                <div className="text-center">
                  <div className="text-[30px] lg:text-[32px] leading-[1.2] tracking-tight font-display font-bold text-accent-navy">4</div>
                  <div className="text-[14px] lg:text-[15px] leading-[1.6] tracking-[0.01em] text-accent-navy/60 mt-1">Companies Visited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-[9/16] md:aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white hover:bg-accent-orange rounded-full flex items-center justify-center text-accent-navy hover:text-white transition-all duration-200 shadow-lg z-10"
              aria-label="Close video"
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

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/jIVMGywKcSI?autoplay=1"
              title="Yiwu Business Study Trip Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

