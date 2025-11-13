import { useRoute, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getProjectById } from "@/data/projects";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = getProjectById(params?.id || "");

  if (!project) {
    return (
      <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.heroImage})` }}
        data-testid="hero-project-detail"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="absolute top-8 left-4 sm:left-8 z-10">
          <Link href="/portfolio">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Badge className="mb-4" data-testid="badge-project-category">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-4" data-testid="text-project-title">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Client</h3>
            <p className="text-lg" data-testid="text-project-client">{project.client}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
            <p className="text-lg" data-testid="text-project-location">{project.location}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
            <p className="text-lg" data-testid="text-project-category">{project.category}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
            <p className="text-lg" data-testid="text-project-year">{project.year}</p>
          </div>
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="text-2xl font-heading font-medium mb-6" data-testid="text-case-description-title">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-project-description">
            {project.description}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-medium mb-8" data-testid="text-gallery-title">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="gallery-grid">
            {project.images.map((image: string, index: number) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="aspect-[4/3] overflow-hidden rounded-md cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1" data-testid={`gallery-image-${index}`}>
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
