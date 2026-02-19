import AwarenessSection from "@/components/Home/AwarenesSection";
import GrowthGuideSection from "@/components/Home/GrowthGuideSection";
import HeroSection from "@/components/Home/HeroSection";
import HowWeWork from "@/components/Home/HowWeWork";
import IndustriesSection from "@/components/Home/IndustriesSection";
import InvestorsSection from "@/components/Home/InvestorsSection";
import ReviewsCarousel from "@/components/Home/ReviewsSection";
import SuccessStories from "@/components/Home/SuccesStories";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InvestorsSection />
      <HowWeWork />
      <AwarenessSection />
      <SuccessStories />
      <ReviewsCarousel />
      <IndustriesSection />
      <GrowthGuideSection />
    </main>
  );
}