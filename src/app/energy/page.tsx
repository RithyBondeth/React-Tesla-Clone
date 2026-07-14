import { Link } from "react-router-dom";

import EnergyPageHero from "../../components/energy/page-hero";
import SiteFooter from "../../components/home/site-footer";
import Navbar from "../../components/navbar";

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
              external: true,
              href: "https://www.tesla.com/solar-virtual-consultations",
              label: "Speak With an Advisor",
              variant: "secondary",
            },
          ]}
          description="Generate, store and use clean energy across your home, vehicle and the electric grid."
          eyebrow="Tesla Energy"
          image="/assets/tesla-official/power-everything.avif"
          imageAlt="A Tesla home powered by solar energy and Powerwall"
          imageHeight={1200}
          title="Power Everything"
        />

        <section className="content-auto grid min-h-[82svh] bg-white lg:grid-cols-2">
          <div className="relative min-h-[56svh] overflow-hidden lg:min-h-[82svh]">
            <img
              alt="A home powered by solar and Tesla Powerwall"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="1200"
              loading="lazy"
              src="/assets/tesla-official/powerwall-home.avif"
              width="1920"
            />
          </div>
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <p className="text-sm font-semibold text-[#5c5e62]">Powerwall</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#171a20] sm:text-6xl">
              Store your energy
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#5c5e62]">
              Powerwall pairs with solar to store clean energy, so it is
              available at night or during an outage. Control the system and
              monitor energy flow from the Tesla app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded bg-[#171a20] px-7 py-3 text-center text-sm font-semibold text-white"
                href="https://www.tesla.com/powerwall/design"
                rel="noreferrer"
                target="_blank"
              >
                Order Powerwall 3
              </a>
              <Link
                className="rounded bg-[#f4f4f4] px-7 py-3 text-center text-sm font-semibold text-[#171a20]"
                to="/powerwall"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="content-auto grid min-h-[82svh] bg-black text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-16">
            <p className="text-sm font-semibold text-white/55">Megapack</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Massive energy storage
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-white/65">
              A giant battery designed to change how the world is powered—with
              clean energy at an enormous scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded bg-white px-7 py-3 text-center text-sm font-semibold text-[#171a20]"
                href="https://www.tesla.com/commercial"
                rel="noreferrer"
                target="_blank"
              >
                Commercial
              </a>
              <Link
                className="rounded border border-white/30 bg-white/10 px-7 py-3 text-center text-sm font-semibold text-white"
                to="/megapack"
              >
                Utility
              </Link>
            </div>
          </div>
          <div className="relative min-h-[56svh] overflow-hidden lg:min-h-[82svh]">
            <img
              alt="A large Tesla Megapack energy storage installation"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="1088"
              loading="lazy"
              src="/assets/tesla-official/homepage-megapack-card.avif"
              width="1920"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
