"use client";

import { CldImage } from "next-cloudinary";

const featuredWork = [
  {
    id: 1,
    title: "Red Shoe Chronicles",
    category: "Editorial Illustration",
    imageSrc: "cld-sample-5", // Replace with your Cloudinary image public_id
    color: "bg-gradient-to-br from-[#C8B299] via-[#FFD4D4] to-[#C8B299]",
  },
  {
    id: 2,
    title: "Dreamy Afternoon",
    category: "Magazine Cover",
    imageSrc: "cld-sample-5", // Replace with your Cloudinary image public_id
    color: "bg-gradient-to-br from-[#8B3A5A] to-[#D4A5C0]",
  },
  {
    id: 3,
    title: "Shopping Vibes",
    category: "Fashion Illustration",
    imageSrc: "cld-sample-5", // Replace with your Cloudinary image public_id
    color: "bg-gradient-to-br from-[#7B94C8] to-[#B8C8E8]",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-accent-orange text-2xl">★</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-accent-navy">
              Featured Work
            </h2>
          </div>
          <p className="
            text-[17px]
            lg:text-[19px]
            leading-[1.75]
            tracking-[0.015em]
            text-accent-navy/60
            max-w-2xl
          ">
            A curated selection of our most captivating projects, showcasing diverse styles
            and creative excellence.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredWork.map((work, index) => (
            <div
              key={work.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-4 transition-transform duration-500 hover:scale-[1.02]">
                {/* Cloudinary Image with auto-optimization */}
                <CldImage
                  src={work.imageSrc}
                  width={600}
                  height={800}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay for visual enhancement */}
                <div className={`absolute inset-0 ${work.color} mix-blend-overlay opacity-20 pointer-events-none`} />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[15px] lg:text-[16px] leading-[1.5] tracking-[0.01em] text-white font-medium">View Project →</span>
                </div>
              </div>

              {/* Work Info */}
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-xl text-accent-navy group-hover:text-accent-orange transition-colors">
                  {work.title}
                </h3>
                <p className="
                  text-[14px]
                  lg:text-[15px]
                  leading-[1.6]
                  tracking-[0.01em]
                  text-accent-navy/60
                ">{work.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 lg:mt-24 text-center">
          <button className="px-10 py-4 border-2 border-accent-navy/20 text-[16px] lg:text-[17px] leading-[1.5] tracking-[0.01em] text-accent-navy font-medium rounded-full hover:bg-accent-navy hover:text-white transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

