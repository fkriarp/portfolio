import { DATA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { EducationItem } from "@/components/ui/education-item";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <SectionHeader label="My background" title="Education" />

      <div>
        {DATA.education.map((item, index) => (
          <EducationItem
            key={item.institution}
            institution={item.institution}
            degree={item.degree}
            period={item.period}
            description={item.description}
            gpa={item.gpa}
            isLast={index === DATA.education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}