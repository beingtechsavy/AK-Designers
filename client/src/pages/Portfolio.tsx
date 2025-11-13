import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { allProjects, getProjectsByCategory } from "@/data/projects";

const categories = [
  "All",
  "Hospitality",
  "Residential",
  "Private Residential",
  "Commercial",
  "Monuments",
  "Public Places",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = getProjectsByCategory(selectedCategory);

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
            <ProjectCard 
              key={project.id} 
              id={project.id}
              title={project.title}
              location={project.location}
              category={project.category}
              image={project.heroImage}
            />
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
