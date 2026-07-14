import { Link } from "react-router-dom";

import EnergyPageHero from "../../components/energy/page-hero";
import EnergyStatBand from "../../components/energy/stat-band";
import SiteFooter from "../../components/home/site-footer";
import Navbar from "../../components/navbar";

const ENERGY_FLOW = [
  {
    detail: "Low-profile solar captures clean energy from your roof.",
    step: "01",
    title: "Generate",
  },
  {
    detail: "Powerwall stores extra energy for nighttime or an outage.",
    step: "02",
    title: "Store",
  },
  {
    detail: "Power your home, charge your vehicle and support the grid.",
    step: "03",
    title: "Use",
  },
];

export default function EnergyPage() {
  return (
    <div className="bg-white">
      <Navbar isBlurred isWhiteText />

      <main>
        <EnergyPageHero
          actions={[
            {
              external: true,
              href: "https://www.tesla.com/energy/design",
              label: "Get a Solar Quote",
            },
            {
              href: "#energy-products",
              label: "Explore Products",
              variant: "secondary",
            },
          ]}
          description="Generate, store and use clean energy across your home, vehicle and the electric grid."
          eyebrow="Tesla Energy"
          image="/assets/tesla-official/power-everything.avif"
          imageAlt="A solar-powered home with a Tesla vehicle and Powerwall"
          imageHeight={1200}
          title="Power Everything"
        />

        <EnergyStatBand
          stats={[
            { detail: "Clean Energy", value: "Solar" },
            { detail: "Home Storage", value: "13.5 kWh" },
            { detail: "Connected Control", value: "One App" },
            { detail: "Grid Storage", value: "58+ GWh" },
          ]}
        />

        <section className="content-auto px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5e62]">
                  A complete energy system
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#171a20] sm:text-6xl">
                  From sunlight to stored power
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-[#5c5e62] lg:justify-self-end">
                Tesla energy products work together to reduce reliance on the
                grid and keep clean energy available whenever it is needed.
              </p>
            </header>

            <div className="mt-12 grid overflow-hidden rounded-2xl border border-black/10 lg:grid-cols-3">
              {ENERGY_FLOW.map((item) => (
                <article
                  className="border-b border-black/10 p-8 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  key={item.title}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#a2a3a5]">
                    {item.step}
                  </p>
                  <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c5e62]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-auto bg-[#f4f4f4] px-5 py-20 sm:px-8 lg:px-10"
          id="energy-products"
        >
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-2xl bg-white">
              <div className="relative min-h-[520px] overflow-hidden">
                <img
                  alt="Tesla Powerwall installed against a concrete wall"
                  className="card-media absolute inset-0 h-full w-full object-cover"
                  decoding="async"
                  height="885"
                  loading="lazy"
                  src="/assets/tesla-official/powerwall-hero.avif"
                  width="1920"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5e62]">
                  Home energy storage
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em]">
                  Powerwall
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-[#5c5e62]">
                  Store solar or grid energy for use at night, during peak hours
                  and when the grid goes down.
                </p>
                <Link
                  className="mt-7 inline-flex rounded bg-[#171a20] px-7 py-3 text-sm font-semibold text-white"
                  to="/powerwall"
                >
                  Explore Powerwall
                </Link>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl bg-[#111214] text-white">
              <div className="relative min-h-[520px] overflow-hidden">
                <img
                  alt="Tesla Megapack installation paired with solar"
                  className="card-media absolute inset-0 h-full w-full object-cover"
                  decoding="async"
                  height="885"
                  loading="lazy"
                  src="/assets/tesla-official/megapack-hero.avif"
                  width="1920"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                  Large-scale storage
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em]">
                  Megapack
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/65">
                  Stabilize the grid, support renewable generation and prevent
                  outages with utility-scale battery storage.
                </p>
                <Link
                  className="mt-7 inline-flex rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20]"
                  to="/megapack"
                >
                  Explore Megapack
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="content-auto grid bg-[#0b0c0e] text-white lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[700px]">
            <img
              alt="A Tesla vehicle charging from solar and Powerwall"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              height="822"
              loading="lazy"
              src="/assets/tesla-official/charge-on-solar.avif"
              width="1920"
            />
          </div>
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              One connected ecosystem
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Drive on sunshine
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/65">
              Charge your Tesla using excess solar energy while Powerwall helps
              balance your home&apos;s energy throughout the day.
            </p>
            <Link
              className="mt-8 inline-flex w-fit rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20]"
              to="/powerwall"
            >
              Learn About Powerwall
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
