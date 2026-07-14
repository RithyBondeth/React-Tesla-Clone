import { useState } from "react";

const TIMELINE_SLIDES = [
  {
    description: "The first Powerwall was installed in May 2015.",
    image: "/assets/tesla-official/powerwall-history-2015.avif",
    label: "The Beginning",
    year: "2015",
  },
  {
    description:
      "Mass production began at Giga Nevada with a Tesla-designed inverter.",
    image: "/assets/tesla-official/powerwall-history-2017.avif",
    label: "Mass Production",
    year: "2017",
  },
  {
    description:
      "Powerwall 3 launched with an integrated solar inverter and more power.",
    image: "/assets/tesla-official/powerwall-history-2023.avif",
    label: "Next Generation",
    year: "2023",
  },
  {
    description:
      "The one millionth Powerwall was installed at a customer home.",
    image: "/assets/tesla-official/powerwall-history-2025.avif",
    label: "One Million Powerwalls",
    year: "2025",
  },
];

export default function PowerwallTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = TIMELINE_SLIDES[activeIndex];

  const moveSlide = (direction: number) => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + direction + TIMELINE_SLIDES.length) %
        TIMELINE_SLIDES.length,
    );
  };

  return (
    <section className="content-auto overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
              Powerwall fleet
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              A decade of home energy
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous Powerwall milestone"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20"
              onClick={() => moveSlide(-1)}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Next Powerwall milestone"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl transition hover:bg-white/20"
              onClick={() => moveSlide(1)}
              type="button"
            >
              ›
            </button>
          </div>
        </header>

        <div className="relative mt-10 aspect-[1920/886] overflow-hidden rounded-2xl bg-[#050505]">
          {TIMELINE_SLIDES.map((slide, index) => (
            <img
              alt={`Powerwall fleet growth milestone for ${slide.year}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              decoding="async"
              height="886"
              key={slide.year}
              loading="lazy"
              src={slide.image}
              width="1920"
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div aria-live="polite">
            <p className="text-3xl font-semibold">{activeSlide.year}</p>
            <h3 className="mt-2 text-xl font-semibold">{activeSlide.label}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              {activeSlide.description}
            </p>
          </div>
          <div
            aria-label="Powerwall milestones"
            className="grid grid-cols-4 gap-2 self-start"
            role="tablist"
          >
            {TIMELINE_SLIDES.map((slide, index) => (
              <button
                aria-selected={activeIndex === index}
                className={`border-t pt-3 text-left text-sm font-semibold transition ${
                  activeIndex === index
                    ? "border-white text-white"
                    : "border-white/20 text-white/40 hover:border-white/50 hover:text-white/70"
                }`}
                key={slide.year}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                {slide.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
