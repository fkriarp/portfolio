import { DATA } from "@/lib/constants";
import { Avatar } from "@/components/ui/avatar";
import { PiArrowDown } from "react-icons/pi";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-5rem)] flex-col justify-center"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-medium tracking-widest text-secondary uppercase">
            Hello, I&apos;m
          </p>

          <h1 className="mb-3 text-5xl font-bold tracking-tight text-primary md:text-6xl">
            {DATA.fullName}
          </h1>

          <h2 className="text-xl font-semibold text-secondary md:text-2xl">
            {DATA.role}
          </h2>

          <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
            {DATA.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </div>

            {Object.entries(DATA.socials).map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs capitalize text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {key}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:justify-start">
            {DATA.about.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Avatar />
      </div>

      <div className="mt-16 flex justify-center md:justify-start">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <span>Scroll down</span>
          <PiArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}