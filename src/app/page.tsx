import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grain">
      <Navigation />
      <HeroSection />
      <FeaturedWork />
      <Footer />
    </main>
  );
}

