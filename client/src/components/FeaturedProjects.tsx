import ProjectCard from "./ProjectCard";
import resortImage from "@assets/generated_images/Resort_architecture_project_91c2f265.png";
import residentialImage from "@assets/generated_images/Residential_landscape_project_5ba675b9.png";
import commercialImage from "@assets/generated_images/Commercial_landscape_project_ae673c28.png";
import hospitalityImage from "@assets/generated_images/Hospitality_landscape_4237f49e.png";
import zooImage from "@assets/generated_images/Zoological_park_habitat_fcbe9b6a.png";
import monumentImage from "@assets/generated_images/Monument_landscape_cdfbbf9f.png";

const featuredProjects = [
  {
    id: "1",
    title: "Coastal Resort Paradise",
    location: "Goa, India",
    category: "Hospitality",
    image: resortImage,
  },
  {
    id: "2",
    title: "Urban Zen Garden",
    location: "Mumbai, India",
    category: "Residential",
    image: residentialImage,
  },
  {
    id: "3",
    title: "Corporate Campus Landscape",
    location: "Pune, India",
    category: "Commercial",
    image: commercialImage,
  },
  {
    id: "4",
    title: "Luxury Resort & Spa",
    location: "Kerala, India",
    category: "Hospitality",
    image: hospitalityImage,
  },
  {
    id: "5",
    title: "Wildlife Conservation Park",
    location: "Bangalore, India",
    category: "Zoological",
    image: zooImage,
  },
  {
    id: "6",
    title: "Heritage Monument Gardens",
    location: "Rajasthan, India",
    category: "Monument",
    image: monumentImage,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-featured-projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-light text-center mb-4" data-testid="text-featured-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of our most celebrated landscape and architectural works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
