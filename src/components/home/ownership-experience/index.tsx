import { Link } from "react-router-dom";

const EXPERIENCES = [
  {
    description:
      "Set your destination and let the route planner include charging stops along the way.",
    index: "01",
    title: "Plan every trip",
  },
  {
    description:
      "Control climate, check charge status and manage your energy products from one place.",
    index: "02",
    title: "Connect in the app",
  },
  {
    description:
      "Receive new functionality and refinements through over-the-air software updates.",
    index: "03",
    title: "Improve over time",
  },
];

export default function OwnershipExperience() {
  return (
    <section
      className="content-auto overflow-hidden bg-[#0b0c0e] px-4 py-20 text-white sm:px-6 lg:px-10"
      id="discover"
    >
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Designed around your life
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              More than a car. One connected experience.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-white/65 lg:justify-self-end">
            Your vehicle, charging and home energy work together through
            software designed to make every day simpler.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl bg-[#17191c]">
          <div className="relative min-h-[54svh] overflow-hidden">
            <img
              alt="A Tesla charging from a home solar and Powerwall system"
              className="card-media absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="822"
              loading="lazy"
              src="/assets/tesla-official/charge-on-solar.avif"
              width="1920"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/15 to-transparent" />
            <div className="relative flex min-h-[54svh] max-w-xl flex-col justify-end p-7 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
                Charge on solar
              </p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Drive on sunshine
              </h3>
              <p className="mt-4 max-w-md leading-7 text-white/70">
                Use excess solar energy to charge your vehicle while Powerwall
                helps balance the energy needs of your home.
              </p>
            </div>
          </div>

          <div className="grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {EXPERIENCES.map((experience) => (
              <article className="p-7 sm:p-9" key={experience.title}>
                <p className="text-xs font-semibold tracking-[0.18em] text-white/35">
                  {experience.index}
                </p>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em]">
                  {experience.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white p-7 text-[#171a20] sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">
              Experience it from the driver&apos;s seat
            </h3>
            <p className="mt-2 text-sm text-[#5c5e62]">
              Schedule a demo drive and explore the lineup in person.
            </p>
          </div>
          <Link
            className="w-full rounded bg-[#171a20] px-8 py-3 text-center text-sm font-semibold text-white transition hover:bg-black sm:w-auto"
            to="/drive"
          >
            Schedule Demo Drive
          </Link>
        </div>
      </div>
    </section>
  );
}
