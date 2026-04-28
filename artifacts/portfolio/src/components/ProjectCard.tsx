import { Link } from "wouter";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface ProjectCardProps {
  slug: string;
  title: string;
}

export function ProjectCard({ slug, title }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block cursor-pointer" data-testid={`link-project-${slug}`}>
      <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="overflow-hidden rounded-sm">
          <MediaPlaceholder label="[ Image ]" aspectRatio="aspect-[4/3]" />
        </div>
        <h3 className="font-display text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
      </div>
    </Link>
  );
}
