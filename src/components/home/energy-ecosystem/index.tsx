import { Link } from "react-router-dom";

const ENERGY_PRODUCTS = [
  {
    description: "Keep your home powered through outages with stored energy.",
    image: "/assets/tesla-official/homepage-powerwall-card.avif",
    link: "/powerwall",
    title: "Powerwall",
  },
  {
    description: "Massive energy storage for a cleaner, more resilient grid.",
    image: "/assets/tesla-official/homepage-megapack-card.avif",
    link: "/megapack",
    title: "Megapack",
  },
];

export default function EnergyEcosystem() {
  return (
    <>
      <section
        className="content-auto bg-white px-4 py-16 sm:px-6 lg:px-10"
        id="energy"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <p className="text-sm font-semibold text-[#5c5e62]">Tesla Energy</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em] text-[#171a20] sm:text-5xl">
              Power your world
            </h2>
          </header>

          <div className="grid gap-4 lg:grid-cols-2">
            {ENERGY_PRODUCTS.map((product) => (
              <article
                className="group relative min-h-[620px] overflow-hidden rounded-2xl bg-[#d9dde1]"
                key={product.title}
              >
                <img
                  alt={product.title}
                  className="card-media absolute inset-0 h-full w-full object-cover object-center"
                  decoding="async"
                  height="1088"
                  loading="lazy"
                  src={product.image}
                  width="1920"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
                <div className="relative flex min-h-[620px] flex-col justify-end p-7 text-white sm:p-9">
                  <h3 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-7 text-white/75">
                    {product.description}
                  </p>
                  <Link
                    className="mt-6 inline-flex w-fit rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                    to={product.link}
                  >
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link
              className="inline-flex px-5 py-3 text-sm font-semibold text-[#171a20] underline underline-offset-4"
              to="/energy"
            >
              Explore Tesla Energy
            </Link>
          </div>
        </div>
      </section>

      <section
        className="content-auto bg-[#f4f4f4] px-4 py-16 sm:px-6 lg:px-10"
        id="charging"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[460px] overflow-hidden">
            <img
              alt="Tesla vehicles charging at a Supercharger"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="834"
              loading="lazy"
              src="/assets/tesla-official/vehicle-ecosystem.avif"
              width="1920"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold text-[#5c5e62]">Charging</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em] text-[#171a20] sm:text-5xl">
              Go anywhere
            </h2>
            <p className="mt-4 max-w-lg leading-7 text-[#5c5e62]">
              Charge at home, on the road and at more than 75,000 global
              Superchargers.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded bg-[#171a20] px-7 py-3 text-center text-sm font-semibold text-white"
                to="/drive"
              >
                Demo Drive
              </Link>
              <a
                className="rounded bg-[#f4f4f4] px-7 py-3 text-center text-sm font-semibold text-[#171a20]"
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
