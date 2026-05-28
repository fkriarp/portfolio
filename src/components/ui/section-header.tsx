import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", className)}>
      <p className="mb-1 text-sm font-medium text-secondary">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-primary/30" />
    </div>
  );
}