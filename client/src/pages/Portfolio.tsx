import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import resortImage from "@assets/generated_images/Resort_architecture_project_91c2f265.png";
import residentialImage from "@assets/generated_images/Residential_landscape_project_5ba675b9.png";
import commercialImage from "@assets/generated_images/Commercial_landscape_project_ae673c28.png";
import hospitalityImage from "@assets/generated_images/Hospitality_landscape_4237f49e.png";
import zooImage from "@assets/generated_images/Zoological_park_habitat_fcbe9b6a.png";
import monumentImage from "@assets/generated_images/Monument_landscape_cdfbbf9f.png";
import publicImage from "@assets/generated_images/Public_space_landscape_a7ee614e.png";

const categories = [
  "All",
  "Landscape",
  "Architecture",
  "Hospitality",
  "Residential",
  "Commercial",
  "Monument",
  "Public Spaces",
  "Zoological",
];

const allProjects = [
  { id: "1", title: "Coastal Resort Paradise", location: "Goa, India", category: "Hospitality", image: resortImage },
  { id: "2", title: "Urban Zen Garden", location: "Mumbai, India", category: "Residential", image: residentialImage },
  { id: "3", title: "Corporate Campus Landscape", location: "Pune, India", category: "Commercial", image: commercialImage },
  { id: "4", title: "Luxury Resort & Spa", location: "Kerala, India", category: "Hospitality", image: hospitalityImage },
  { id: "5", title: "Wildlife Conservation Park", location: "Bangalore, India", category: "Zoological", image: zooImage },
  { id: "6", title: "Heritage Monument Gardens", location: "Rajasthan, India", category: "Monument", image: monumentImage },
  { id: "7", title: "Urban Public Park", location: "Delhi, India", category: "Public Spaces", image: publicImage },
  { id: "8", title: "Modern Architecture Studio", location: "Hyderabad, India", category: "Architecture", image: commercialImage },
  { id: "9", title: "Tropical Landscape Design", location: "Chennai, India", category: "Landscape", image: hospitalityImage },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-light mb-4" data-testid="text-portfolio-title">
            Our Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-description">
            Explore our diverse collection of landscape architecture and design projects
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" data-testid="filter-categories">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
              data-testid={`button-filter-${category.toLowerCase().replace(' ', '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground" data-testid="text-no-projects">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
