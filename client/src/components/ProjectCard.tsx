import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  testId?: string;
}

export default function ProjectCard({ id, title, location, category, image, testId }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <Card
        className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
        data-testid={testId || `card-project-${id}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-project-${id}`}
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-heading font-medium" data-testid={`text-project-title-${id}`}>
              {title}
            </h3>
            <Badge variant="secondary" className="shrink-0" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground" data-testid={`text-project-location-${id}`}>
            {location}
          </p>
        </div>
      </Card>
    </Link>
  );
}
