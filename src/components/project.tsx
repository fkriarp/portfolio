import { DATA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";

export default function Project() {
  return (
    <section id="projects" className="py-20">
      <SectionHeader label="What I've built" title="Projects" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            featured={project.featured}
          />
        ))}
      </div>
    </section>
  );
}