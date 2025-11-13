import { Card } from "@/components/ui/card";
import { Trees, Building2, Hotel, Fish } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Landscape Design",
    description: "Natural environments crafted with precision and artistic vision.",
  },
  {
    icon: Building2,
    title: "Architecture",
    description: "Contemporary structures harmonizing with their surroundings.",
  },
  {
    icon: Hotel,
    title: "Resorts & Hospitality",
    description: "Immersive experiences for luxury hospitality destinations.",
  },
  {
    icon: Fish,
    title: "Zoological Parks & Aquariums",
    description: "Naturalistic habitats for wildlife conservation and education.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-light text-center mb-16" data-testid="text-services-title">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              data-testid={`card-service-${index}`}
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-heading font-medium mb-3" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
