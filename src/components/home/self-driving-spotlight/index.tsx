import { Link } from "react-router-dom";

export default function SelfDrivingSpotlight() {
  return (
    <section className="content-auto bg-[#171a20] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10">
      <div className="relative mx-auto min-h-[720px] max-w-7xl overflow-hidden rounded-2xl bg-[#34383b]">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/tesla-official/fsd-hero-mobile.avif"
          />
          <img
            alt="Tesla interior with Full Self-Driving supervised active"
            className="card-media absolute inset-0 h-full w-full object-cover object-center"
            decoding="async"
            height="1200"
            loading="lazy"
            src="/assets/tesla-official/fsd-hero-desktop.avif"
            width="1920"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75" />
        <div className="relative flex min-h-[720px] flex-col items-center justify-between px-6 pb-10 pt-10 text-center sm:px-10 sm:pt-12">
          <header>
            <p className="text-sm font-semibold text-white/70">
              Active supervision required
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Full Self-Driving
            </h2>
            <p className="mt-1 text-xl font-medium">(Supervised)</p>
          </header>

          <div className="w-full max-w-3xl">
            <dl className="mb-6 grid grid-cols-2 divide-x divide-white/20 rounded-xl bg-black/30 py-4 backdrop-blur-md">
              <div>
                <dt className="text-2xl font-semibold sm:text-3xl">7x</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/60 sm:text-xs">
                  Safer With FSD Engaged
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold sm:text-3xl">11.9B+</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/60 sm:text-xs">
                  Miles Driven
                </dd>
              </div>
            </dl>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                className="rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                to="/fsd"
              >
                Learn More
              </Link>
              <Link
                className="rounded bg-[#171a20]/85 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black"
                to="/demo_drive"
              >
                Demo FSD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
