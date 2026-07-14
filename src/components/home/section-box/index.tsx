import { Link } from "react-router-dom";

import type { SectionBoxProps } from "./props";

export default function SectionBox({
  vehicle,
  promotion,
  supportingText,
  highlights,
  showScrollCue = false,
}: SectionBoxProps) {
  const textColor = vehicle.hasDarkText ? "text-[#171a20]" : "text-white";

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      id={`vehicle-${vehicle.title.toLowerCase().replace(" ", "-")}`}
      style={{ backgroundImage: `url(${vehicle.poster})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/50" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-5 pb-8 pt-32 text-center sm:px-8 sm:pb-10 sm:pt-36">
        <header className={`max-w-2xl ${textColor}`}>
          <p className="mb-3 inline-flex rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#171a20] shadow-sm backdrop-blur-md sm:text-sm">
            {promotion}
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {vehicle.title}
          </h1>
          <p className="mt-3 text-lg font-medium sm:text-xl">
            {supportingText}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm opacity-80 sm:text-base">
            {vehicle.description}
          </p>
        </header>

        <div className="w-full max-w-3xl">
          <div className="mx-auto grid max-w-xl gap-3 sm:grid-cols-2">
            <Link
              className="rounded bg-[#171a20] px-8 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              to={vehicle.buttons[0].link}
            >
              Order Now
            </Link>
            <a
              className="rounded bg-white/90 px-8 py-3 text-sm font-semibold text-[#171a20] backdrop-blur-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="#compare"
            >
              Compare Models
            </a>
          </div>

          <dl className="mx-auto mt-5 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg bg-black/25 text-white backdrop-blur-md">
            {highlights.map((highlight) => (
              <div className="px-2 py-3" key={highlight.label}>
                <dt className="text-lg font-semibold sm:text-2xl">
                  {highlight.value}
                </dt>
                <dd className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-white/75 sm:text-xs">
                  {highlight.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {showScrollCue && (
          <a
            aria-label="Explore more Tesla products"
            className="absolute bottom-2 animate-bounce text-white"
            href="#vehicle-model-3"
          >
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
