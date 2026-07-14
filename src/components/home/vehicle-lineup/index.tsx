import { Link } from "react-router-dom";

import type { VehicleLineupProps } from "./props";

export default function VehicleLineup({ vehicles }: VehicleLineupProps) {
  return (
    <section className="bg-[#f4f4f4] px-4 py-20 sm:px-6 lg:px-10" id="compare">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5c5e62]">
              Explore the lineup
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.035em] text-[#171a20] sm:text-5xl">
              Find your Tesla
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#5c5e62] sm:text-right">
            Compare range, acceleration and top speed, then configure the model
            that fits your drive.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {vehicles.map((vehicle) => {
            const primaryOption = vehicle.orderData.options[0];

            return (
              <article
                className="group relative min-h-[560px] overflow-hidden rounded-xl bg-cover bg-center shadow-sm"
                key={vehicle.title}
                style={{ backgroundImage: `url(${vehicle.poster})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/75" />
                <div className="relative flex min-h-[560px] flex-col justify-between p-6 sm:p-8">
                  <div className="text-center text-[#171a20]">
                    <h3 className="text-4xl font-semibold tracking-[-0.035em]">
                      {vehicle.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium">
                      {primaryOption.optionName}
                    </p>
                  </div>

                  <div>
                    <dl className="grid grid-cols-3 rounded-lg bg-black/35 px-3 py-4 text-center text-white backdrop-blur-md">
                      {primaryOption.optionMachine.map((value, index) => (
                        <div key={value}>
                          <dt className="text-lg font-semibold sm:text-xl">
                            {value}
                          </dt>
                          <dd className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/70">
                            {index === 0
                              ? "Range"
                              : index === 1
                                ? "Top Speed"
                                : "0–60 mph"}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <Link
                        className="rounded bg-white px-6 py-3 text-center text-sm font-semibold text-[#171a20] transition group-hover:bg-white/95"
                        to={vehicle.buttons[0].link}
                      >
                        Order Now
                      </Link>
                      <Link
                        className="rounded bg-[#171a20]/90 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black"
                        to="/demo_drive"
                      >
                        Demo Drive
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
