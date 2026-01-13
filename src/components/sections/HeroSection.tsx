"use client";

import { CldImage } from "next-cloudinary";

export default function HeroSection() {
  return (
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

            {/* Participant Quote */}
            <div className="mt-8 lg:mt-10">
              <blockquote className="relative pl-6 border-l-2 border-accent-orange/30">
                <p className="
                  text-[16px]
                  lg:text-[17px]
                  leading-[1.7]
                  tracking-[0.01em]
                  text-accent-navy/80
                  font-light
                  italic
                ">
                  "This experience transformed how I understand entrepreneurship. Being in Yiwu's market and seeing real suppliers negotiate changed everything."
                </p>
              </blockquote>
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

            <div>
              <button className="group px-10 py-4 bg-accent-orange text-white text-[16px] lg:text-[17px] leading-[1.5] tracking-[0.01em] font-medium rounded-full hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>Explore More</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
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
  );
}

