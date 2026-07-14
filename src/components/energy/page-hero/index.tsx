import { Link } from "react-router-dom";

import type { EnergyPageHeroProps } from "./props";

export default function EnergyPageHero({
  actions,
  description,
  eyebrow,
  image,
  imageAlt,
  imageHeight,
  title,
}: EnergyPageHeroProps) {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-[#111214] text-white">
      <img
        alt={imageAlt}
        className="hero-media absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
        height={imageHeight}
        loading="eager"
        src={image}
        width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/70" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col items-center justify-between px-6 pb-10 pt-28 text-center sm:pt-32 lg:px-10">
        <header className="hero-copy max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {description}
          </p>
        </header>

        <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
          {actions.map((action) => {
            const className = `rounded px-8 py-3 text-sm font-semibold transition ${
              action.variant === "secondary"
                ? "border border-white/45 bg-black/25 text-white backdrop-blur-md hover:bg-black/45"
                : "bg-white text-[#171a20] hover:bg-white/90"
            }`;

            if (action.external) {
              return (
                <a
                  className={className}
                  href={action.href}
                  key={action.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {action.label}
                </a>
              );
            }

            return (
              <Link className={className} key={action.label} to={action.href}>
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
