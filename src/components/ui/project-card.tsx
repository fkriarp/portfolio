import { PiArrowUpRight, PiGithubLogo, PiStar } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  featured,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
      {featured && (
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-amber-200/60 bg-amber-50/80 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:border-amber-800/40 dark:bg-amber-950/40 dark:text-amber-400">
          <PiStar className="h-3 w-3" />
          Featured
        </div>
      )}

      <h3 className="mb-2 text-base font-semibold text-primary">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-border pt-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <PiGithubLogo className="h-3.5 w-3.5" />
            Source
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <PiArrowUpRight className="h-3.5 w-3.5" />
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}