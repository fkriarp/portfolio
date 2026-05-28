import { DATA } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";
import { Marquee } from "@/components/ui/marquee";

export default function Tool() {
  return (
    <section id="tools" className="py-20">
      <SectionHeader label="My stack" title="Tools & Technologies" />

      <div className="flex flex-col gap-5">
        {DATA.tools.map((group, index) => (
          <div key={group.category} className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              {group.category}
            </p>
            <Marquee
              items={group.items}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={20 + index * 5}
            />
          </div>
        ))}
      </div>
    </section>
  );
}