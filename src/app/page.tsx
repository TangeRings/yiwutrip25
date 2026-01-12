import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grain">
      <Navigation />
      <HeroSection />
      <ItinerarySection />
      <FeaturedWork />
      <Footer />
    </main>
  );
}

