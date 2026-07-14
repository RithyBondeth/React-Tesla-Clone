import { Link } from "react-router-dom";

const ENERGY_PRODUCTS = [
  {
    description: "Generate clean energy with a low-profile, all-black system.",
    image: "/assets/mainpage-images/solar-panels.avif",
    link: "https://www.tesla.com/solarpanels",
    title: "Solar Panels",
  },
  {
    description: "Store energy for outages, peak hours and everyday use.",
    image: "/assets/mainpage-images/powerwall.avif",
    link: "https://www.tesla.com/powerwall",
    title: "Powerwall",
  },
  {
    description: "Recharge at home, around town or on your next road trip.",
    image: "/assets/navbar-images/charging-images/supercharging.avif",
    link: "https://www.tesla.com/charging",
    title: "Charging",
  },
];

export default function EnergyEcosystem() {
  return (
    <>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10" id="energy">
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
                className={`group relative min-h-[520px] overflow-hidden rounded-xl bg-cover bg-center ${
                  index === 0
                    ? "lg:col-span-7 lg:row-span-2 lg:min-h-[1060px]"
                    : "lg:col-span-5"
                }`}
                key={product.title}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/70" />
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
                  <a
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                    href={product.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-base">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[72svh] overflow-hidden bg-cover bg-center"
        id="charging"
        style={{
          backgroundImage:
            "url(/assets/navbar-images/charging-images/charging.avif)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-xl text-white">
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
