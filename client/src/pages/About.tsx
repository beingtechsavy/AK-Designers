import { Card } from "@/components/ui/card";
import founderImage from "@assets/generated_images/Founder_portrait_98fb6167.png";
import teamImage from "@assets/generated_images/Studio_team_workspace_74249782.png";

const timeline = [
  { year: "1985", event: "Studio Founded" },
  { year: "1995", event: "First Major Resort Project" },
  { year: "2005", event: "International Recognition" },
  { year: "2015", event: "Sustainability Award" },
  { year: "2025", event: "40 Years of Excellence" },
];

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-4" data-testid="text-about-title">
            About Our Studio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Four decades of creating timeless landscapes and architectural experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-[3/4] overflow-hidden rounded-md">
            <img
              src={founderImage}
              alt="Arun Kumar - Founder"
              className="w-full h-full object-cover"
              data-testid="img-founder"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-light mb-6" data-testid="text-founder-title">
              Meet Our Founder
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-founder-description">
              Arun Kumar established the studio in 1985 with a vision to create harmonious spaces 
              that celebrate the relationship between nature and human experience. With over 40 years 
              of expertise, he has led projects across India and internationally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His philosophy centers on sustainable design, cultural sensitivity, and the creation 
              of spaces that inspire and endure. Under his leadership, the studio has become 
              synonymous with excellence in landscape architecture and design.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-heading font-light text-center mb-12" data-testid="text-philosophy-title">
            Our Philosophy
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-philosophy-content">
                We believe that great design emerges from a deep understanding of place, culture, and context. 
                Our approach combines rigorous research, creative innovation, and sustainable practices to 
                create spaces that are not only beautiful but also meaningful and enduring.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each project is an opportunity to craft experiences that connect people with nature, 
                celebrate local heritage, and contribute positively to the environment and community.
              </p>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-heading font-light text-center mb-12" data-testid="text-timeline-title">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative mb-12 last:mb-0"
                  data-testid={`timeline-item-${index}`}
                >
                  <div className="flex items-center gap-8 md:gap-0">
                    <div className="flex-1 md:text-right md:pr-12">
                      <div className={index % 2 === 0 ? "md:block" : "md:hidden"}>
                        <p className="text-2xl font-heading font-semibold text-primary mb-2" data-testid={`text-timeline-year-${index}`}>
                          {item.year}
                        </p>
                        <p className="text-muted-foreground" data-testid={`text-timeline-event-${index}`}>
                          {item.event}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2" />
                    <div className="flex-1 md:pl-12">
                      <div className={index % 2 === 0 ? "md:hidden" : "md:block"}>
                        <p className="text-2xl font-heading font-semibold text-primary mb-2">
                          {item.year}
                        </p>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-light text-center mb-12" data-testid="text-team-title">
            Our Team
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-md mb-8">
              <img
                src={teamImage}
                alt="Studio Team"
                className="w-full h-full object-cover"
                data-testid="img-team"
              />
            </div>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-team-description">
              Our multidisciplinary team brings together landscape architects, designers, 
              horticulturists, and project managers who share a passion for creating 
              exceptional spaces. Together, we transform visions into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
