interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
  gpa: string | null;
  isLast?: boolean;
}

export function EducationItem({
  institution,
  degree,
  period,
  description,
  gpa,
  isLast = false,
}: EducationItemProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-background" />
        {!isLast && <div className="mt-1 w-px flex-1 bg-border" />}
      </div>

      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
            {period}
          </span>
          {gpa && (
            <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              GPA {gpa}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-primary">{institution}</h3>
        <p className="mb-2 text-sm font-medium text-secondary">{degree}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}