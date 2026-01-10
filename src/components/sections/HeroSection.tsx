export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Big Typography */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-accent-navy tracking-tight">
                Diverse
              </h1>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-accent-navy tracking-tight">
                Illustration
              </h1>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-accent-navy tracking-tight">
                Styles
              </h1>
            </div>

            {/* Decorative accent stars */}
            <div className="flex items-center space-x-3 text-accent-orange text-xl pt-2">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          {/* Right Side - Description & CTA */}
          <div className="space-y-8 lg:pl-8">
            <p className="text-lg lg:text-xl text-accent-navy/70 leading-relaxed font-light">
              Step into the world of M. Sato, where visual stories come to life through
              captivating illustrations. Discover the perfect blend of realism and stylized
              elements that define M. Sato's unique approach to magazine artwork.
            </p>

            <div>
              <button className="group px-10 py-4 bg-accent-orange text-white text-base font-medium rounded-full hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>Explore More</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Stats or Additional Info */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-accent-navy/10">
              <div>
                <div className="text-3xl font-display font-bold text-accent-navy">50+</div>
                <div className="text-sm text-accent-navy/60 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent-navy">15+</div>
                <div className="text-sm text-accent-navy/60 mt-1">Awards</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent-navy">8+</div>
                <div className="text-sm text-accent-navy/60 mt-1">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

