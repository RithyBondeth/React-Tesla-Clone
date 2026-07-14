import { useState } from "react";

import SiteFooter from "../../components/home/site-footer";
import ResponsiveVideo from "../../components/media/responsive-video";
import Navbar from "../../components/navbar";

const PRODUCT_FEATURES = [
  {
    description:
      "Each unit ships fully assembled with a built-in foundation and integrated wireways, reducing installation costs by 25%. Flexible configurations make installation faster, with more than 99% of deployments delivered on time.",
    metric: "25%",
    metricLabel: "Lower installation costs",
    title: "Easy to Install",
  },
  {
    description:
      "A single, vertically integrated system combines hardware and controls that reduce fire risk while meeting more than 40 global safety requirements.",
    metric: "40+",
    metricLabel: "Global safety requirements",
    title: "Safe to Operate",
  },
  {
    description:
      "A 20-year warranty, performance guarantees, automated diagnostics and around-the-clock support help maintain operational capacity in harsh environments.",
    metric: "20 yr",
    metricLabel: "Performance warranty",
    title: "Built for Performance",
  },
];

const USE_CASES = [
  {
    description:
      "Stabilizes grid voltage, frequency and capacity levels, replacing fossil-fuel peaker plants and keeping the grid running smoothly.",
    title: "Standalone Utilities",
  },
  {
    description:
      "Stores and discharges energy as solar and wind availability changes, maintaining a stable and reliable renewable-powered grid.",
    title: "Renewable Paired",
  },
  {
    description:
      "Provides reliable power for continuous computing, helping prevent costly downtime and data loss during grid outages.",
    title: "Data Centers",
  },
  {
    description:
      "Gives businesses more reliable energy access and the ability to share excess energy with the grid during peak demand.",
    title: "Commercial and Industrial",
  },
  {
    description:
      "Pools, distributes and manages electricity locally—even when a community or facility is operating without a grid connection.",
    title: "Microgrids",
  },
];

const SERVICE_OPTIONS = [
  {
    description:
      "Tesla handles corrective and preventative maintenance while technicians continuously monitor, diagnose and resolve issues remotely or on-site.",
    title: "Serviced by Tesla",
  },
  {
    description:
      "Tesla can certify your in-house or third-party team, giving them access to the same service documentation and tools used by Tesla technicians.",
    title: "Certified by Tesla",
  },
];

const RESOURCES = [
  {
    description: "Designed, tested and monitored to maximize safety.",
    title: "Safety",
  },
  {
    description:
      "Developing technology for a more stable, reliable and resilient grid.",
    title: "Grid Forming",
  },
  {
    description:
      "Powering cloud computing and artificial intelligence infrastructure.",
    title: "Data Centers",
  },
];

interface ResponsiveImageProps {
  alt: string;
  className: string;
  desktop: string;
  eager?: boolean;
  height: number;
  mobile: string;
}

function ResponsiveImage({
  alt,
  className,
  desktop,
  eager = false,
  height,
  mobile,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img
        alt={alt}
        className={className}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        height={height}
        loading={eager ? "eager" : "lazy"}
        src={desktop}
        width="1920"
      />
    </picture>
  );
}

export default function MegapackPage() {
  const [activeService, setActiveService] = useState(0);
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <div className="bg-white text-[#171a20]">
      <Navbar isBlurred isWhiteText />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
          <ResponsiveVideo
            className="absolute inset-0"
            desktopPoster="/assets/tesla-official/megapack-hero-desktop-poster.avif"
            desktopSrc="/assets/tesla-official/megapack-hero-desktop.mp4"
            eager
            label="Megapack installations operating at grid scale"
            mobilePoster="/assets/tesla-official/megapack-hero-mobile-poster.avif"
            mobileSrc="/assets/tesla-official/megapack-hero-mobile.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/65" />

          <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-between px-5 pb-12 pt-28 text-center sm:px-8 sm:pt-32">
            <header className="hero-copy max-w-3xl">
              <h1 className="text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
                Megapack
              </h1>
              <p className="mt-3 text-lg font-medium sm:text-xl">
                Large-Scale Energy Storage
              </p>
            </header>

            <div className="grid w-full max-w-[552px] gap-3 sm:grid-cols-2">
              <a
                className="rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                href="https://www.tesla.com/megapack#contact"
                rel="noreferrer"
                target="_blank"
              >
                Get Updates
              </a>
              <a
                className="rounded bg-[#171a20]/85 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black"
                href="#sustainable-grid"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section
          aria-label="Megapack operational performance"
          className="grid border-b border-black/10 bg-white sm:grid-cols-3"
        >
          <div className="border-b border-black/10 px-6 py-10 text-center sm:border-b-0 sm:border-r">
            <p className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              &gt;58 <span className="text-2xl sm:text-3xl">GWh</span>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#5c5e62]">
              Operational Globally
            </p>
          </div>
          <div className="border-b border-black/10 px-6 py-10 text-center sm:border-b-0 sm:border-r">
            <p className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              99.3<span className="text-2xl sm:text-3xl">%</span>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#5c5e62]">
              Average Uptime
            </p>
          </div>
          <div className="px-6 py-10 text-center">
            <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Real-World Tested
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#5c5e62]">
              Operating in 65+ Countries
            </p>
          </div>
        </section>

        <section
          className="content-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-12"
          id="sustainable-grid"
        >
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#e7dfd2]">
            <ResponsiveImage
              alt="A large Megapack installation paired with a desert solar farm"
              className="h-[54svh] min-h-[420px] w-full object-cover object-center sm:h-auto sm:min-h-0"
              desktop="/assets/tesla-official/megapack-sustainable-grid-desktop.avif"
              height={682}
              mobile="/assets/tesla-official/megapack-sustainable-grid-mobile.avif"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Building a Sustainable, More Resilient Grid
            </h2>
            <p className="max-w-2xl text-base leading-7 text-[#5c5e62] lg:justify-self-end">
              The future of renewable energy relies on large-scale industrial
              energy storage. Megapack provides clean, reliable and
              cost-effective storage that stabilizes the grid, helps prevent
              outages and makes sustainable energy more accessible.
            </p>
          </div>
        </section>

        <section className="content-auto bg-[#f4f4f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#d6d1c8]">
            <ResponsiveImage
              alt="Close-up view of rows of Tesla Megapacks"
              className="h-[54svh] min-h-[420px] w-full object-cover object-center sm:h-auto sm:min-h-0"
              desktop="/assets/tesla-official/megapack-industrial-desktop.avif"
              height={682}
              mobile="/assets/tesla-official/megapack-industrial-mobile.avif"
            />
          </div>

          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Transforming Industrial Energy Storage
              </h2>
              <p className="max-w-2xl text-base leading-7 text-[#5c5e62] lg:justify-self-end">
                Megapack is changing the way the grid is powered. Operating in
                more than 65 countries, it provides critical support globally
                and can scale to multi-GWh projects.
              </p>
            </div>

            <div className="mt-12 grid overflow-hidden rounded-2xl border border-black/10 bg-white lg:grid-cols-3">
              {PRODUCT_FEATURES.map((feature) => (
                <article
                  className="border-b border-black/10 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-8"
                  key={feature.title}
                >
                  <p className="text-3xl font-semibold tracking-[-0.035em]">
                    {feature.metric}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c5e62]">
                    {feature.metricLabel}
                  </p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c5e62]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-auto bg-white py-16 sm:py-24">
          <div className="relative min-h-[76svh] overflow-hidden bg-[#c7b399]">
            <ResponsiveImage
              alt="A multi-gigawatt-hour Megapack installation"
              className="absolute inset-0 h-full w-full object-cover object-center"
              desktop="/assets/tesla-official/megapack-power-more-desktop.avif"
              height={1080}
              mobile="/assets/tesla-official/megapack-power-more-mobile.avif"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/70" />
            <div className="relative mx-auto flex min-h-[76svh] max-w-7xl items-end px-6 pb-14 text-white lg:px-10">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Power More
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/80">
                  Fully customizable installations deploy at scale for a wide
                  range of project sizes, locations and applications.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:px-10">
            <div
              aria-label="Megapack applications"
              className="flex snap-x gap-7 overflow-x-auto border-b border-black/10"
              role="tablist"
            >
              {USE_CASES.map((useCase, index) => (
                <button
                  aria-selected={activeUseCase === index}
                  className={`relative shrink-0 snap-start pb-4 text-sm font-semibold transition ${
                    activeUseCase === index
                      ? "text-[#171a20]"
                      : "text-[#5c5e62] hover:text-[#171a20]"
                  }`}
                  key={useCase.title}
                  onClick={() => setActiveUseCase(index)}
                  role="tab"
                  type="button"
                >
                  {useCase.title}
                  {activeUseCase === index && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#171a20]" />
                  )}
                </button>
              ))}
            </div>
            <div className="grid gap-4 py-10 sm:grid-cols-[0.7fr_1.3fr] sm:gap-12">
              <p className="text-sm font-semibold text-[#5c5e62]">
                Application {String(activeUseCase + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  {USE_CASES[activeUseCase].title}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-[#5c5e62]">
                  {USE_CASES[activeUseCase].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-auto bg-[#f4f4f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="relative mx-auto aspect-[16/10] max-w-[1600px] overflow-hidden rounded-2xl bg-[#c9d0d4] sm:aspect-[2/1]">
            <ResponsiveVideo
              className="absolute inset-0"
              desktopPoster="/assets/tesla-official/megapack-factory-desktop-poster.avif"
              desktopSrc="/assets/tesla-official/megapack-factory-desktop.mp4"
              label="Tesla Megafactory production and Megapack manufacturing"
              mobilePoster="/assets/tesla-official/megapack-factory-mobile-poster.avif"
              mobileSrc="/assets/tesla-official/megapack-factory-mobile.mp4"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#5c5e62]">
                Tesla Megafactories
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                We Build Big Batteries
              </h2>
            </div>
            <div>
              <p className="leading-7 text-[#5c5e62]">
                Megafactories in Lathrop, California and Shanghai, China have a
                combined manufacturing capacity of 80 GWh—or 20,000 Megapack
                units—per year. That is enough storage to retire 400 fossil-fuel
                peaker plants every year.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
                <div>
                  <dt className="text-2xl font-semibold">80 GWh</dt>
                  <dd className="mt-1 text-xs text-[#5c5e62]">
                    Annual capacity
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold">20,000</dt>
                  <dd className="mt-1 text-xs text-[#5c5e62]">
                    Units per year
                  </dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold">400</dt>
                  <dd className="mt-1 text-xs text-[#5c5e62]">Peaker plants</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="content-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#c8cdd3]">
            <ResponsiveImage
              alt="Tesla Autobidder and Powerhub software interfaces"
              className="h-[54svh] min-h-[420px] w-full object-cover object-center sm:h-auto sm:min-h-0"
              desktop="/assets/tesla-official/megapack-software-desktop.avif"
              height={682}
              mobile="/assets/tesla-official/megapack-software-mobile.avif"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Fully Integrated Software
            </h2>
            <p className="max-w-2xl leading-7 text-[#5c5e62] lg:justify-self-end">
              From design and commissioning to long-term management, vertically
              integrated software controls, monitors and optimizes every
              Megapack system. Over-the-air updates continually improve storage
              performance while minimizing risk and increasing revenue
              potential.
            </p>
          </div>
        </section>

        <section className="content-auto bg-[#f4f4f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#d4d7da]">
            <ResponsiveImage
              alt="Tesla service technician working at a Megapack site"
              className="h-[54svh] min-h-[420px] w-full object-cover object-center sm:h-auto sm:min-h-0"
              desktop="/assets/tesla-official/megapack-service-desktop.avif"
              height={682}
              mobile="/assets/tesla-official/megapack-service-mobile.avif"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#5c5e62]">
                Lifetime Support
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Streamlined Service, Maximum Performance
              </h2>
            </div>
            <div>
              <p className="leading-7 text-[#5c5e62]">
                Tesla provides performance guarantees and lifetime support,
                whether you choose Tesla service or a team certified by Tesla.
              </p>
              <div
                className="mt-7 flex border-b border-black/10"
                role="tablist"
              >
                {SERVICE_OPTIONS.map((option, index) => (
                  <button
                    aria-selected={activeService === index}
                    className={`relative flex-1 pb-4 text-left text-sm font-semibold ${
                      activeService === index
                        ? "text-[#171a20]"
                        : "text-[#5c5e62]"
                    }`}
                    key={option.title}
                    onClick={() => setActiveService(index)}
                    role="tab"
                    type="button"
                  >
                    {option.title}
                    {activeService === index && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#171a20]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                  {SERVICE_OPTIONS[activeService].title}
                </h3>
                <p className="mt-3 leading-7 text-[#5c5e62]">
                  {SERVICE_OPTIONS[activeService].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl bg-[#d2d1cd]">
            <ResponsiveImage
              alt="Rows of Megapack units viewed from above"
              className="h-[54svh] min-h-[420px] w-full object-cover object-center sm:h-auto sm:min-h-0"
              desktop="/assets/tesla-official/megapack-resources-desktop.avif"
              height={682}
              mobile="/assets/tesla-official/megapack-resources-mobile.avif"
            />
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#5c5e62]">
                  Learn More
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Additional Resources
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-[#5c5e62] lg:justify-self-end">
                Discover how Megapack is powering the world&apos;s grids.
              </p>
            </div>
            <div className="mt-10 grid overflow-hidden rounded-2xl border border-black/10 sm:grid-cols-3">
              {RESOURCES.map((resource, index) => (
                <article
                  className="border-b border-black/10 p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  key={resource.title}
                >
                  <p className="text-xs font-semibold text-[#5c5e62]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c5e62]">
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>
            <a
              className="mt-7 inline-flex rounded border-2 border-[#171a20] px-7 py-2.5 text-sm font-semibold transition hover:bg-[#171a20] hover:text-white"
              href="https://www.tesla.com/support/energy/megapack/resources"
              rel="noreferrer"
              target="_blank"
            >
              Explore Resources
            </a>
          </div>
        </section>

        <section className="content-auto relative min-h-[82svh] overflow-hidden bg-[#536b47] text-white">
          <ResponsiveImage
            alt="Megapacks and solar panels supporting a renewable grid"
            className="absolute inset-0 h-full w-full object-cover object-center"
            desktop="/assets/tesla-official/megapack-delivers-desktop.avif"
            height={1080}
            mobile="/assets/tesla-official/megapack-delivers-mobile.avif"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
          <div className="relative mx-auto flex min-h-[82svh] max-w-7xl items-end px-6 py-14 lg:px-10">
            <div className="max-w-xl">
              <h2 className="text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Megapack Delivers
              </h2>
              <p className="mt-5 leading-7 text-white/80">
                Batteries balance renewable supply and grid demand, improving
                stability while preventing outages and reducing dependence on
                fossil-fuel peaker plants. Each Megapack 2 XL avoids 88,000 tons
                of CO₂e.
              </p>
              <a
                className="mt-7 inline-flex rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                href="https://www.tesla.com/impact"
                rel="noreferrer"
                target="_blank"
              >
                View Impact Report
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-10 text-xs leading-5 text-[#5c5e62] sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl space-y-2">
            <p>
              ¹ Average percentage of power available over the previous 12
              months, weighted by GWh for eligible projects with an Availability
              Guarantee.
            </p>
            <p>² Installation cost comparison is against competing systems.</p>
          </div>
        </section>

        <section className="relative min-h-[88svh] overflow-hidden bg-[#9d9b91] text-white">
          <ResponsiveImage
            alt="Megapacks being installed at a utility-scale project"
            className="absolute inset-0 h-full w-full object-cover object-center"
            desktop="/assets/tesla-official/megapack-end-desktop.avif"
            height={1118}
            mobile="/assets/tesla-official/megapack-end-mobile.avif"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />
          <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col items-center justify-end px-6 pb-14 text-center lg:px-10">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Help Build a Sustainable Grid
            </h2>
            <p className="mt-4 text-white/80">
              Order Megapack or contact Tesla Energy for more information.
            </p>
            <div className="mt-7 grid w-full max-w-[552px] gap-3 sm:grid-cols-2">
              <a
                className="rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                href="https://www.tesla.com/megapack/design"
                rel="noreferrer"
                target="_blank"
              >
                Order Now
              </a>
              <a
                className="rounded bg-[#171a20]/85 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black"
                href="https://www.tesla.com/contactus"
                rel="noreferrer"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
