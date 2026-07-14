import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type HeroSlide =
  | {
      buttons: Array<{ label: string; to: string }>;
      desktopImage: string;
      eyebrow?: string;
      id: string;
      mobileImage?: string;
      subtitle: string;
      textColor: "dark" | "light";
      title: string;
      type: "image";
    }
  | {
      buttons: Array<{ label: string; to: string }>;
      desktopPoster: string;
      desktopVideo: string;
      eyebrow?: string;
      id: string;
      mobilePoster: string;
      mobileVideo: string;
      subtitle: string;
      textColor: "dark" | "light";
      title: string;
      type: "video";
    };

const HERO_SLIDES: HeroSlide[] = [
  {
    buttons: [
      { label: "Order Model 3", to: "/order_now_model3" },
      { label: "Order Model Y", to: "/order_now_modely" },
    ],
    desktopImage:
      "/assets/tesla-official/homepage-promo-model-3-y-desktop.avif",
    eyebrow: "Electric for everyone",
    id: "model-3-model-y",
    mobileImage: "/assets/tesla-official/homepage-promo-model-3-y-mobile.avif",
    subtitle: "Choose your electric future",
    textColor: "dark",
    title: "Model 3, Model Y",
    type: "image",
  },
  {
    buttons: [
      { label: "Order Now", to: "/order_now_modely" },
      { label: "Explore Model Y", to: "#compare" },
    ],
    desktopPoster: "/assets/tesla-official/model-y-comfort-desktop-poster.avif",
    desktopVideo: "/assets/tesla-official/model-y-comfort-desktop.mp4",
    eyebrow: "Now playing",
    id: "model-y-comfort",
    mobilePoster: "/assets/tesla-official/model-y-comfort-mobile-poster.avif",
    mobileVideo: "/assets/tesla-official/model-y-comfort-mobile.mp4",
    subtitle: "Reimagined for comfort",
    textColor: "light",
    title: "Model Y",
    type: "video",
  },
  {
    buttons: [
      { label: "Explore Powerwall", to: "/powerwall" },
      { label: "Explore Energy", to: "/energy" },
    ],
    desktopImage: "/assets/tesla-official/power-everything.avif",
    eyebrow: "Tesla Energy",
    id: "power-everything",
    subtitle: "Store energy. Power everything.",
    textColor: "light",
    title: "Powerwall",
    type: "image",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isRotationPaused, setIsRotationPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || activeSlide.type !== "video") {
      setIsVideoPlaying(false);
      return;
    }

    video.muted = true;

    if (isReducedMotion) {
      video.pause();
      setIsVideoPlaying(false);
      return;
    }

    void video
      .play()
      .then(() => setIsVideoPlaying(true))
      .catch(() => setIsVideoPlaying(false));
  }, [activeSlide, isReducedMotion]);

  useEffect(() => {
    if (isRotationPaused || isReducedMotion) {
      return;
    }

    const delay = activeSlide.type === "video" ? 9000 : 6000;
    const rotation = window.setTimeout(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === HERO_SLIDES.length - 1 ? 0 : currentIndex + 1,
      );
    }, delay);

    return () => window.clearTimeout(rotation);
  }, [activeSlide, isReducedMotion, isRotationPaused]);

  const changeSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video
        .play()
        .then(() => setIsVideoPlaying(true))
        .catch(() => setIsVideoPlaying(false));
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section
      aria-label="Tesla highlights"
      aria-roledescription="carousel"
      className="relative h-[90svh] min-h-[620px] overflow-hidden bg-[#dfe3e7] lg:h-[80svh] lg:min-h-[680px]"
      id="vehicles"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        const textColor =
          slide.textColor === "light" ? "text-white" : "text-[#171a20]";

        return (
          <article
            aria-hidden={!isActive}
            aria-roledescription="slide"
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            }`}
            key={slide.id}
          >
            {slide.type === "video" ? (
              isActive ? (
                <video
                  aria-label="Model Y premium interior film"
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loop
                  muted
                  onPause={() => setIsVideoPlaying(false)}
                  onPlay={() => setIsVideoPlaying(true)}
                  playsInline
                  poster={slide.desktopPoster}
                  preload="auto"
                  ref={videoRef}
                >
                  <source media="(max-width: 767px)" src={slide.mobileVideo} />
                  <source src={slide.desktopVideo} />
                </video>
              ) : (
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={slide.mobilePoster}
                  />
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    height="1100"
                    loading="lazy"
                    src={slide.desktopPoster}
                    width="2200"
                  />
                </picture>
              )
            ) : (
              <picture>
                {slide.mobileImage && (
                  <source
                    media="(max-width: 767px)"
                    srcSet={slide.mobileImage}
                  />
                )}
                <img
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  height="1188"
                  loading={index === 0 ? "eager" : "lazy"}
                  src={slide.desktopImage}
                  width="2800"
                />
              </picture>
            )}

            <div
              className={`absolute inset-0 ${
                slide.textColor === "light"
                  ? "bg-gradient-to-b from-black/40 via-transparent to-black/45"
                  : "bg-gradient-to-b from-white/15 via-transparent to-black/15"
              }`}
            />

            <div
              className={`relative flex h-full flex-col items-center justify-between px-5 pb-24 pt-32 text-center sm:px-8 sm:pb-24 sm:pt-36 ${textColor}`}
            >
              <header className="hero-copy max-w-3xl">
                {slide.eyebrow && (
                  <p className="mb-2 text-sm font-semibold tracking-[-0.01em] opacity-85">
                    {slide.eyebrow}
                  </p>
                )}
                <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                  {slide.title}
                </h1>
                <p className="mt-2 text-lg font-medium sm:text-xl">
                  {slide.subtitle}
                </p>
              </header>

              <div className="grid w-full max-w-[552px] gap-3 sm:grid-cols-2">
                {slide.buttons.map((button, buttonIndex) => (
                  <Link
                    className={`rounded px-7 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      buttonIndex === 0
                        ? "bg-[#171a20] text-white hover:bg-black focus-visible:outline-white"
                        : "bg-white/90 text-[#171a20] backdrop-blur-md hover:bg-white focus-visible:outline-[#171a20]"
                    }`}
                    key={button.label}
                    tabIndex={isActive ? 0 : -1}
                    to={button.to}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        );
      })}

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center px-5">
        <div className="flex items-center gap-2 rounded-full bg-black/35 p-1.5 text-white shadow-lg backdrop-blur-xl">
          <button
            aria-label={
              isRotationPaused ? "Resume highlights" : "Pause highlights"
            }
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15"
            onClick={() => setIsRotationPaused((isPaused) => !isPaused)}
            type="button"
          >
            {isRotationPaused ? (
              <svg
                aria-hidden="true"
                className="ml-0.5 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4 2.75v10.5L13 8 4 2.75Z" />
              </svg>
            ) : (
              <span aria-hidden="true" className="flex gap-1">
                <span className="h-3.5 w-0.5 rounded bg-current" />
                <span className="h-3.5 w-0.5 rounded bg-current" />
              </span>
            )}
          </button>

          <button
            aria-label="Previous highlight"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15"
            onClick={() => changeSlide(activeIndex - 1)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="m10 3-5 5 5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div className="flex gap-1" role="tablist">
            {HERO_SLIDES.map((slide, index) => (
              <button
                aria-label={`Show ${slide.title}`}
                aria-selected={index === activeIndex}
                className="grid h-9 w-7 place-items-center"
                key={slide.id}
                onClick={() => changeSlide(index)}
                role="tab"
                type="button"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/45"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            aria-label="Next highlight"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15"
            onClick={() => changeSlide(activeIndex + 1)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="m6 3 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          {activeSlide.type === "video" && (
            <button
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
              className="grid h-9 w-9 place-items-center rounded-full border-l border-white/20 transition hover:bg-white/15"
              onClick={toggleVideo}
              type="button"
            >
              {isVideoPlaying ? (
                <span aria-hidden="true" className="flex gap-1">
                  <span className="h-3.5 w-0.5 rounded bg-current" />
                  <span className="h-3.5 w-0.5 rounded bg-current" />
                </span>
              ) : (
                <svg
                  aria-hidden="true"
                  className="ml-0.5 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2.75v10.5L13 8 4 2.75Z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {activeSlide.title}: {activeSlide.subtitle}
      </p>
    </section>
  );
}
