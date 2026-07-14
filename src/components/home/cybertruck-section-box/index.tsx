import { Link } from "react-router-dom";

import type { CybertruckSectionBoxProps } from "./props";

export default function CybertruckSectionBox({
  cybertruck,
}: CybertruckSectionBoxProps) {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      id="cybertruck"
      style={{ backgroundImage: `url(${cybertruck.poster})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-5 pb-10 pt-32 text-center sm:px-8 sm:pt-36">
        <header className="flex flex-col items-center text-white">
          <p className="mb-4 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md sm:text-sm">
            Built for any planet
          </p>
          <img
            alt={cybertruck.title.text}
            className="h-auto w-[260px] invert sm:w-[360px]"
            src={cybertruck.title.image}
          />
          <p className="mt-5 max-w-lg text-sm text-white/80 sm:text-base">
            Durable utility, adaptive air suspension and power wherever the road
            ends.
          </p>
        </header>

        <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
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
    </section>
  );
}
