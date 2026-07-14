import { Link } from "react-router-dom";

import type { CybertruckSectionBoxProps } from "./props";

export default function CybertruckSectionBox({
  cybertruck,
}: CybertruckSectionBoxProps) {
  return (
    <section
      aria-labelledby="cybertruck-heading"
      className="content-auto relative min-h-[100svh] w-full overflow-hidden bg-[#111214]"
      id="cybertruck"
    >
      <img
        alt="Cybertruck on rugged terrain"
        className="absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        height="1080"
        loading="lazy"
        src={cybertruck.poster}
        width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-5 pb-10 pt-32 text-center sm:px-8 sm:pt-36">
        <header className="flex flex-col items-center text-white">
          <p className="mb-4 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-md sm:text-sm">
            Lease From $949/mo
          </p>
          <h2 className="sr-only" id="cybertruck-heading">
            Cybertruck
          </h2>
          <img
            alt={cybertruck.title.text}
            className="h-auto w-[260px] invert sm:w-[360px]"
            decoding="async"
            height="72"
            loading="lazy"
            src={cybertruck.title.image}
            width="360"
          />
          <p className="mt-5 max-w-lg text-sm text-white/80 sm:text-base">
            Durable utility, adaptive air suspension and power wherever the road
            ends.
          </p>
        </header>

        <div className="w-full max-w-2xl">
          <dl className="mb-5 grid grid-cols-3 overflow-hidden rounded-lg bg-black/30 py-3 text-center text-white backdrop-blur-md">
            <div>
              <dt className="text-xl font-semibold sm:text-2xl">325 mi</dt>
              <dd className="text-[10px] uppercase tracking-[0.12em] text-white/70 sm:text-xs">
                EPA Range
              </dd>
            </div>
            <div>
              <dt className="text-xl font-semibold sm:text-2xl">5-Star</dt>
              <dd className="text-[10px] uppercase tracking-[0.12em] text-white/70 sm:text-xs">
                Safety
              </dd>
            </div>
            <div>
              <dt className="text-xl font-semibold sm:text-2xl">6' × 4'</dt>
              <dd className="text-[10px] uppercase tracking-[0.12em] text-white/70 sm:text-xs">
                Bed
              </dd>
            </div>
          </dl>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              className="rounded bg-white px-8 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
              to={cybertruck.buttons[0].link}
            >
              {cybertruck.buttons[0].label}
            </Link>
            <Link
              className="rounded border border-white/50 bg-black/50 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/70"
              to={cybertruck.buttons[1].link}
            >
              {cybertruck.buttons[1].label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
