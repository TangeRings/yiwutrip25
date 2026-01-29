import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
// import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grain">
      <div className="min-h-screen" data-scroll-section>
        <Navigation />
        <HeroSection />
      </div>
      <ItinerarySection />
      {/* 
      <div className="min-h-screen" data-scroll-section>
        <FeaturedWork />
      </div>
      */}
      <div className="min-h-screen" data-scroll-section>
        <Footer />
      </div>
    </main>
  );
}

