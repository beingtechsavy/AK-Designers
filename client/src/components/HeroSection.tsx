import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_landscape_architecture_129e00b1.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="font-heading font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000"
          data-testid="text-hero-title"
        >
          Designing Nature.<br />Crafting Experiences.
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
          data-testid="text-hero-subtitle"
        >
          Landscape & Architectural Design Studio
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground border border-primary-border min-w-[180px]"
              data-testid="button-view-portfolio"
            >
              View Portfolio
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 min-w-[180px]"
              data-testid="button-contact-studio"
            >
              Contact Studio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
