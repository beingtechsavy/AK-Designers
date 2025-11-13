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
        className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-500 hover:-translate-y-2 cursor-pointer group border-0 shadow-sm"
        data-testid={testId || `card-project-${id}`}
      >
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-testid={`img-project-${id}`}
          />
        </div>
        <div className="p-7">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-heading font-medium leading-tight" data-testid={`text-project-title-${id}`}>
              {title}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs" data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          </div>
          <p className="text-base text-muted-foreground" data-testid={`text-project-location-${id}`}>
            {location}
          </p>
        </div>
      </Card>
    </Link>
  );
}
