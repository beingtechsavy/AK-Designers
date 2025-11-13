import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-featured-projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-light text-center mb-6" data-testid="text-featured-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-3xl mx-auto">
          A showcase of our most celebrated landscape and architectural works
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
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
      </div>
    </section>
  );
}
