import { DATA, TypeExperience } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { PiMapPin } from "react-icons/pi";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionHeader label="Where I've worked" title="Experience" />

      <div>
        {DATA.experiences.map((item, index) => (
          <div key={index} className="relative flex gap-5">
            <div className="flex flex-col items-center">
              <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-accent-orange bg-background" />
              {index !== DATA.experiences.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-border" />
              )}
            </div>

            <div className={`pb-10 ${index === DATA.experiences.length - 1 ? "pb-0" : ""}`}>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                  {item.period}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    item.type === TypeExperience.internship
                      ? "border-accent-lime/30 bg-accent-lime/10 text-accent-lime"
                      : "border-accent-orange/30 bg-accent-orange/10 text-accent-orange"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground">
                {item.role}
              </h3>

              <div className="mb-2 flex items-center gap-1.5 text-sm font-medium text-accent-orange">
                <PiMapPin className="h-3.5 w-3.5" />
                {item.company}
              </div>

              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}