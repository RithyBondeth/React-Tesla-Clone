import { useRef } from "react";
import { Link } from "react-router-dom";

import type { VehicleLineupProps } from "./props";

const CURRENT_CARD_IMAGES: Record<string, { desktop: string; mobile: string }> =
  {
    "Model 3": {
      desktop: "/assets/tesla-official/homepage-card-model-3-desktop.avif",
      mobile: "/assets/tesla-official/homepage-card-model-3-mobile.avif",
    },
    "Model Y": {
      desktop: "/assets/tesla-official/homepage-card-model-y-desktop.avif",
      mobile: "/assets/tesla-official/homepage-card-model-y-mobile.avif",
    },
  };

export default function VehicleLineup({
  cybertruck,
  vehicles,
}: VehicleLineupProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cards = vehicles.map((vehicle) => {
    const primaryOption = vehicle.orderData.options[0];

    return {
      image: CURRENT_CARD_IMAGES[vehicle.title]?.desktop ?? vehicle.poster,
      mobileImage: CURRENT_CARD_IMAGES[vehicle.title]?.mobile ?? vehicle.poster,
      primaryLink: vehicle.buttons[0].link,
      secondaryLabel: "Learn More",
      secondaryLink: vehicle.buttons[1].link,
      subtitle: primaryOption.optionName,
      title: vehicle.title,
    };
  });

  if (cybertruck) {
    cards.push({
      image: cybertruck.poster,
      mobileImage: cybertruck.poster,
      primaryLink: cybertruck.buttons[0].link,
      secondaryLabel: cybertruck.buttons[1].label,
      secondaryLink: cybertruck.buttons[1].link,
      subtitle: "Durable utility for any road",
      title: cybertruck.title.text,
    });
  }

  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      behavior: "smooth",
      left: direction * carouselRef.current.clientWidth * 0.82,
    });
  };

  return (
    <section
      className="content-auto bg-[#f4f4f4] px-4 py-14 sm:px-6 sm:py-20 lg:px-10"
      id="compare"
    >
      <span className="sr-only" id="discover">
        Explore Tesla products
      </span>
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-[#5c5e62]">
              Tesla vehicles
            </p>
            <h2 className="mt-1 text-4xl font-semibold tracking-[-0.04em] text-[#171a20] sm:text-5xl">
              Explore the lineup
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Previous vehicle"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-[#171a20] shadow-sm transition hover:bg-[#e8e8e8]"
              onClick={() => scrollCarousel(-1)}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next vehicle"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-[#171a20] shadow-sm transition hover:bg-[#e8e8e8]"
              onClick={() => scrollCarousel(1)}
              type="button"
            >
              ›
            </button>
          </div>
        </header>

        <div
          aria-label="Tesla vehicle lineup"
          className="grid snap-x snap-mandatory grid-flow-col auto-cols-[90%] gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:auto-cols-[72%] lg:auto-cols-[calc(50%-0.5rem)]"
          ref={carouselRef}
          role="region"
          tabIndex={0}
        >
          {cards.map((card) => (
            <article
              className="group relative min-h-[540px] snap-start overflow-hidden rounded-2xl bg-[#d9dde1] sm:min-h-[580px]"
              key={card.title}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={card.mobileImage} />
                <img
                  alt={`${card.title} exterior`}
                  className="card-media absolute inset-0 h-full w-full object-cover object-center"
                  decoding="async"
                  height="1088"
                  loading="lazy"
                  src={card.image}
                  width="1920"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              <div className="relative flex min-h-[540px] flex-col justify-between p-6 text-white sm:min-h-[580px] sm:p-8">
                <header>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-white/85">
                    {card.subtitle}
                  </p>
                </header>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    className="rounded bg-[#171a20] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-black"
                    to={card.primaryLink}
                  >
                    Order Now
                  </Link>
                  <Link
                    className="rounded bg-white/90 px-6 py-3 text-center text-sm font-semibold text-[#171a20] backdrop-blur-md transition hover:bg-white"
                    to={card.secondaryLink}
                  >
                    {card.secondaryLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
