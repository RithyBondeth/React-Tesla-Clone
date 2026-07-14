import EnergyPageHero from "../../components/energy/page-hero";
import EnergyStatBand from "../../components/energy/stat-band";
import SiteFooter from "../../components/home/site-footer";
import Navbar from "../../components/navbar";

const MEGAPACK_FEATURES = [
  {
    description:
      "Each unit ships fully assembled with an integrated foundation and wireways for faster deployment.",
    title: "Easy to Install",
  },
  {
    description:
      "Vertically integrated hardware and controls are designed around global safety requirements.",
    title: "Safe to Operate",
  },
  {
    description:
      "Automated diagnostics, performance guarantees and around-the-clock support maximize uptime.",
    title: "Built for Performance",
  },
];

const USE_CASES = [
  "Standalone Utilities",
  "Renewable Paired",
  "Data Centers",
  "Commercial and Industrial",
  "Microgrids",
];

export default function MegapackPage() {
  return (
    <div className="bg-[#0b0c0e] text-white">
      <Navbar isBlurred isWhiteText />

      <main>
        <EnergyPageHero
          actions={[
            {
              external: true,
              href: "https://www.tesla.com/megapack/design",
              label: "Order Megapack",
            },
            {
              href: "#megapack-capabilities",
              label: "Learn More",
              variant: "secondary",
            },
          ]}
          description="A powerful, integrated battery system providing clean, reliable and cost-effective energy storage at grid scale."
          eyebrow="Large-Scale Energy Storage"
          image="/assets/tesla-official/megapack-resources.avif"
          imageAlt="Aerial view of a large Tesla Megapack installation"
          imageHeight={1920}
          title="Megapack"
        />

        <EnergyStatBand
          stats={[
            { detail: "Operational Globally", value: "58+ GWh" },
            { detail: "Average Uptime", value: "99.3%" },
            { detail: "Countries", value: "65+" },
            { detail: "Performance Warranty", value: "20 Years" },
          ]}
        />

        <section
          className="content-auto px-5 py-20 sm:px-8 lg:px-10"
          id="megapack-capabilities"
        >
          <div className="mx-auto max-w-7xl">
            <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                  A more resilient grid
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Transforming industrial energy storage
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-white/60 lg:justify-self-end">
                Megapack stores renewable energy and delivers it when the grid
                needs it, helping reduce outages and dependence on fossil-fuel
                peaker plants.
              </p>
            </header>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {MEGAPACK_FEATURES.map((feature, index) => (
                <article
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
                  key={feature.title}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/30">
                    0{index + 1}
                  </p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-auto relative min-h-[76svh] overflow-hidden">
          <img
            alt="Megapacks paired with a utility-scale solar installation"
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
            height="885"
            loading="lazy"
            src="/assets/tesla-official/megapack-hero.avif"
            width="1920"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
          <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-end px-6 py-14 lg:px-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                Power more
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Deploy at any scale
              </h2>
              <p className="mt-5 leading-7 text-white/70">
                Flexible configurations support projects from local microgrids
                to multi-gigawatt-hour renewable energy installations.
              </p>
            </div>
          </div>
        </section>

        <section className="content-auto px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                One system, many applications
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Built for the world&apos;s energy needs
              </h2>
            </header>

            <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {USE_CASES.map((useCase, index) => (
                <article
                  className="border-b border-white/10 p-6 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0"
                  key={useCase}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/30">
                    0{index + 1}
                  </p>
                  <h3 className="mt-10 text-lg font-semibold leading-6">
                    {useCase}
                  </h3>
                </article>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-8 text-[#171a20] sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  Help build a sustainable grid
                </h2>
                <p className="mt-2 text-sm text-[#5c5e62]">
                  Configure a project or contact Tesla Energy for more
                  information.
                </p>
              </div>
              <a
                className="w-full rounded bg-[#171a20] px-8 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                href="https://www.tesla.com/megapack/design"
                rel="noreferrer"
                target="_blank"
              >
                Order Megapack
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
