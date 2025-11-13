import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import founderImage from "@assets/generated_images/Founder_portrait_98fb6167.png";
import teamImage from "@assets/generated_images/Studio_team_workspace_74249782.png";

const values = [
  { letter: "A", title: "Accountability", description: "We strive to do things right, the first time" },
  { letter: "D", title: "Development", description: "We learn, train and develop our people" },
  { letter: "C", title: "Collaborations", description: "We believe in teamwork" },
  { letter: "P", title: "Planning", description: "We believe in proper planning" },
  { letter: "L", title: "Leadership", description: "We prepare for tomorrow" },
];

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4" data-testid="text-about-tagline">
            An Experience Like No Other
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-6" data-testid="text-about-title">
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-about-subtitle">
            35 years of excellence in Design Consultancy Services
          </p>
        </div>

        {/* Company Introduction */}
        <div className="mb-20">
          <Card className="p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-company-intro">
              We take this opportunity to introduce ourselves, <span className="font-semibold text-foreground">Arunkumar Designers & Consultants Pvt Ltd (ADCPL)</span>, a 35 years old company in the business of Design Consultancy Services specialized in Master Planning, Landscape Architecture & environment management for various types of Projects including Designing & Execution of Various Tourism Infrastructure Projects governing Public Aquariums, Zoos and Museum-Cum-Interpretation Centres across India & also in several International Geographies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              During the several years it has worked in the field, it has developed an ability to transform the land, to skillfully merge the natural with the manmade. It will not be satisfactory to just change the land mass from its original form, it is much more important to bring into being a piece of work that not only enhances the quality of space, but brings about a greater change in functionality and aesthetic value, satisfying the owner and user alike.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a leading company in Zoological Parks, public aquariums, Museum-cum-Interpretation Centres and with our International Associates like expertise and past experience can take up Complete Projects from Concept designing to Execution and AMC of the entire project. We have the required in-house capabilities as required from Concept Designers, Architects & 3D Designers, Engineering team for Acrylic expertise, Lighting and Filtration system, to Fish Curators and Animal Healthcare experts in our team to successfully execute projects of Various scales as a one-stop solution.
            </p>
            <div className="mt-8 text-center">
              <Link href="/portfolio">
                <Button size="lg" className="hover-elevate">
                  View Projects
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Philosophy, Mission, Vision Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 hover-elevate transition-all duration-300">
            <h3 className="text-2xl font-heading font-light mb-4 text-primary" data-testid="text-philosophy-title">
              Our Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-philosophy-content">
              To create, develop and enhance Client's satisfaction by providing Integrated Design Solution, with our past experience & expertise.
            </p>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300">
            <h3 className="text-2xl font-heading font-light mb-4 text-primary" data-testid="text-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-mission-content">
              ADCPL aims to be an integrated Design Consultant providing tailor made design solutions in diversified sectors.
            </p>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300">
            <h3 className="text-2xl font-heading font-light mb-4 text-primary" data-testid="text-vision-title">
              Our Vision
            </h3>
            <div className="space-y-2 text-muted-foreground leading-relaxed" data-testid="text-vision-content">
              {values.map((value) => (
                <p key={value.letter}>
                  <span className="font-semibold text-primary">{value.letter}</span> - {value.title} - {value.description}
                </p>
              ))}
            </div>
          </Card>
        </div>

        {/* Our Values - Expanded */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-light text-center mb-12" data-testid="text-values-title">
            Our Values
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={value.letter} className="p-6 text-center hover-elevate transition-all duration-300" data-testid={`value-card-${index}`}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-heading font-bold text-primary">{value.letter}</span>
                </div>
                <h4 className="font-heading font-semibold mb-2 text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="p-8 hover-elevate transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden rounded-md mb-6">
              <img
                src={founderImage}
                alt="Core Team"
                className="w-full h-full object-cover"
                data-testid="img-core-team"
              />
            </div>
            <h3 className="text-2xl font-heading font-light mb-4 text-center" data-testid="text-core-team-title">
              Our Core Team
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed" data-testid="text-core-team-description">
              Our leadership team brings decades of experience in landscape architecture, master planning, and environmental design. They guide every project with vision and expertise.
            </p>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden rounded-md mb-6">
              <img
                src={teamImage}
                alt="Skill Team"
                className="w-full h-full object-cover"
                data-testid="img-skill-team"
              />
            </div>
            <h3 className="text-2xl font-heading font-light mb-4 text-center" data-testid="text-skill-team-title">
              Our Skill Team
            </h3>
            <p className="text-center text-muted-foreground leading-relaxed" data-testid="text-skill-team-description">
              Our multidisciplinary team includes Concept Designers, Architects, 3D Designers, Engineers specializing in Acrylic, Lighting and Filtration systems, Fish Curators, and Animal Healthcare experts.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 bg-primary/5">
            <h2 className="text-3xl font-heading font-light mb-6">Ready to Transform Your Vision?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to create exceptional spaces that inspire and endure. Our team is ready to bring your project to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="hover-elevate">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="hover-elevate">
                  Explore Our Work
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
