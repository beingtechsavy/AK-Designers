import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <FeaturedProjects />
      <NewsletterSection />
    </div>
  );
}
