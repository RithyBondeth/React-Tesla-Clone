import { Link } from "react-router-dom";

const ENERGY_PRODUCTS = [
  {
    description:
      "Generate solar energy, store it and use it to power your home and vehicle.",
    image: "/assets/tesla-official/power-everything.avif",
    link: "/energy",
    title: "Solar + Powerwall",
  },
  {
    description:
      "Keep essential appliances running and use stored energy whenever you need it.",
    image: "/assets/tesla-official/powerwall-hero.avif",
    link: "/powerwall",
    title: "Powerwall",
  },
  {
    description:
      "Support a cleaner, more resilient grid with utility-scale energy storage.",
    image: "/assets/tesla-official/megapack-hero.avif",
    link: "/megapack",
    title: "Megapack",
  },
];

const CHARGING_FEATURES = [
  ["At Home", "Wake up ready"],
  ["On the Road", "Fast charging stops"],
  ["In the App", "Automatic trip planning"],
];

export default function EnergyEcosystem() {
  return (
    <>
      <section
        className="content-auto bg-white px-4 py-20 sm:px-6 lg:px-10"
        id="energy"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5e62]">
              One connected ecosystem
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em] text-[#171a20] sm:text-5xl">
              Power everything
            </h2>
            <p className="mt-4 leading-7 text-[#5c5e62]">
              Generate, store and use clean energy across your home and vehicle
              from one connected experience.
            </p>
          </header>

          <div className="grid gap-5 lg:grid-cols-12">
            {ENERGY_PRODUCTS.map((product, index) => (
              <article
                className={`group relative min-h-[520px] overflow-hidden rounded-2xl bg-[#d9dde1] ${
                  index === 0
                    ? "lg:col-span-7 lg:row-span-2 lg:min-h-[1060px]"
                    : "lg:col-span-5"
                }`}
                key={product.title}
              >
                <img
                  alt={product.title}
                  className="card-media absolute inset-0 h-full w-full object-cover object-center"
                  decoding="async"
                  height={index === 0 ? 1200 : 885}
                  loading="lazy"
                  src={product.image}
                  width={index === 0 ? 1200 : 900}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/75" />
                <div
                  className={`relative flex min-h-[520px] flex-col justify-end p-6 text-white sm:p-8 ${
                    index === 0 ? "lg:min-h-[1060px]" : ""
                  }`}
                >
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                    {product.description}
                  </p>
                  <Link
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                    to={product.link}
                  >
                    Learn More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <article className="mt-5 grid overflow-hidden rounded-2xl bg-[#111214] text-white lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
              <img
                alt="A home protected by Powerwall during a storm"
                className="card-media absolute inset-0 h-full w-full object-cover object-center"
                decoding="async"
                height="1200"
                loading="lazy"
                src="/assets/tesla-official/powerwall-storm.avif"
                width="1200"
              />
            </div>
            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                Ready for the unexpected
              </p>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Storms happen. Outages don&apos;t have to.
              </h3>
              <p className="mt-5 max-w-lg leading-7 text-white/70">
                Powerwall can automatically prepare when severe weather is
                forecast, then transition your home to stored energy when the
                grid goes down.
              </p>
              <Link
                className="mt-8 inline-flex w-fit rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20]"
                to="/powerwall"
              >
                Explore Powerwall
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        className="content-auto relative min-h-[78svh] overflow-hidden bg-[#1d2428]"
        id="charging"
      >
        <img
          alt="Tesla vehicles at a Supercharger"
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          height="834"
          loading="lazy"
          src="/assets/tesla-official/vehicle-ecosystem.avif"
          width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Go anywhere
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              Charge everywhere
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
              Plug in at home, recharge during the day and let your Tesla plan
              charging stops automatically on longer trips.
            </p>

            <dl className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-3">
              {CHARGING_FEATURES.map(([title, detail]) => (
                <div
                  className="rounded-lg border border-white/15 bg-black/25 p-4 backdrop-blur-md"
                  key={title}
                >
                  <dt className="font-semibold">{title}</dt>
                  <dd className="mt-1 text-xs text-white/65">{detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded bg-white px-7 py-3 text-center text-sm font-semibold text-[#171a20]"
                to="/demo_drive"
              >
                Schedule a Demo Drive
              </Link>
              <a
                className="rounded border border-white/50 bg-black/20 px-7 py-3 text-center text-sm font-semibold text-white backdrop-blur-md"
                href="https://www.tesla.com/findus"
                rel="noreferrer"
                target="_blank"
              >
                Find Charging
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
