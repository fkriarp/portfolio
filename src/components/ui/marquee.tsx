"use client";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({ items, direction = "left", speed = 30 }: MarqueeProps) {
  const duration = `${speed}s`;

  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex min-w-full shrink-0 gap-3 py-1"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="shrink-0 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <div
        aria-hidden
        className="flex min-w-full shrink-0 gap-3 py-1"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="shrink-0 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}