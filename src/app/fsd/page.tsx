import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";

type FsdVideoProps = {
  className?: string;
  desktopPoster: string;
  desktopSrc: string;
  eager?: boolean;
  label: string;
  mediaClassName?: string;
  mobilePoster: string;
  mobileSrc: string;
};

const DRIVE_FEATURES = [
  {
    description:
      "Activate it in the Tesla app and your vehicle will navigate through parking lots and tight spaces to reach you.",
    eyebrow: "Actually Smart Summon²",
    title: "Drives to You",
  },
  {
    description:
      "On-board cameras watch surrounding lanes, road users and blind spots while your Tesla navigates and changes lanes under your supervision.",
    eyebrow: "FSD (Supervised)",
    title: "Drives for You³",
  },
  {
    description:
      "Your Tesla will detect available perpendicular and parallel parking spaces and automatically maneuver into the selected spot.",
    eyebrow: "Autopark",
    title: "Parks for You",
  },
];

const FOOTNOTES = [
  "Price reflects the monthly subscription and is subject to terms and conditions. Price and feature availability may change.",
  "Feature availability depends on regulatory approval and other factors, which may take longer in some jurisdictions.",
  "Currently enabled features require active driver supervision and do not make the vehicle autonomous.",
  "The mileage counter advances at an estimated average Tesla fleet rate and may not include every mile or free trial.",
  "Compared with the estimated U.S. average.",
  "Includes current supported markets across North America, Europe and Asia Pacific.",
];

const FOOTER_LINKS = [
  { label: "Privacy & Legal", url: "https://www.tesla.com/legal" },
  { label: "Vehicle Recalls", url: "https://www.tesla.com/vin-recall-search" },
  { label: "Contact", url: "https://www.tesla.com/contact" },
  { label: "News", url: "https://www.tesla.com/blog" },
  { label: "Get Updates", url: "https://www.tesla.com/updates" },
  { label: "Locations", url: "https://www.tesla.com/findus" },
];

function FsdAmbientVideo({
  className = "",
  desktopPoster,
  desktopSrc,
  eager = false,
  label,
  mediaClassName = "object-cover object-center",
  mobilePoster,
  mobileSrc,
}: FsdVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || eager || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "320px 0px", threshold: 0.05 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (shouldLoad) {
      videoRef.current?.load();
    }
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!video || !shouldLoad) return;

    if (isVisible && !isUserPaused && !reducedMotion) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isUserPaused, isVisible, shouldLoad]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      setIsUserPaused(true);
      video.pause();
      return;
    }

    setShouldLoad(true);
    setIsUserPaused(false);
    void video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  return (
    <div className={`relative overflow-hidden bg-[#171a20] ${className}`}>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobilePoster} />
        <img
          alt=""
          className={`absolute inset-0 h-full w-full ${mediaClassName}`}
          decoding="async"
          height="1080"
          loading={eager ? "eager" : "lazy"}
          src={desktopPoster}
          width="1920"
        />
      </picture>
      <video
        aria-label={label}
        autoPlay={eager}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${mediaClassName} ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
        loop
        muted
        onLoadedData={() => setHasLoaded(true)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        preload={shouldLoad ? "auto" : "none"}
        ref={videoRef}
      >
        {shouldLoad && (
          <>
            <source media="(max-width: 767px)" src={mobileSrc} />
            <source src={desktopSrc} />
          </>
        )}
      </video>
      <button
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-5 left-5 z-20 grid h-8 w-8 place-items-center rounded bg-black/20 text-white transition hover:bg-black/40 sm:bottom-7 sm:left-8"
        onClick={togglePlayback}
        type="button"
      >
        {isPlaying ? (
          <span aria-hidden="true" className="flex gap-1">
            <span className="h-3.5 w-0.5 rounded bg-current" />
            <span className="h-3.5 w-0.5 rounded bg-current" />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current"
          />
        )}
      </button>
    </div>
  );
}

function LiveMileage() {
  const [miles, setMiles] = useState(11_946_084_885);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMiles((currentMiles) => currentMiles + 36);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return <>{miles.toLocaleString("en-US")}</>;
}

export default function FsdPage() {
  return (
    <div className="fsd-page bg-white text-[#171a20]">
      <Navbar isBlurred isWhiteText />

      <main>
        <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-black text-white">
          <FsdAmbientVideo
            className="!absolute inset-0 h-full w-full"
            desktopPoster="/assets/tesla-official/fsd-hero-current-desktop-poster.jpg"
            desktopSrc="/assets/tesla-official/fsd-hero-current-desktop.mp4"
            eager
            label="Interior view of a Tesla driving with Full Self-Driving supervised"
            mobilePoster="/assets/tesla-official/fsd-hero-current-mobile-poster.jpg"
            mobileSrc="/assets/tesla-official/fsd-hero-current-mobile.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/45" />
          <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pb-11 pt-[104px] text-center sm:pb-12 sm:pt-[108px]">
            <header>
              <h1 className="fsd-display text-[32px] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
                Full Self-Driving (Supervised)
              </h1>
              <p className="mt-3 text-[14px] font-medium leading-5">
                Available for $99/mo<sup className="ml-0.5 text-[9px]">1</sup>
              </p>
            </header>
            <Link
              className="min-w-[220px] rounded bg-[#3e6ae1] px-7 py-3 text-[14px] font-medium leading-5 text-white transition hover:bg-[#3457b1]"
              to="/demo_drive"
            >
              Demo FSD (Supervised)
            </Link>
          </div>
        </section>

        <section className="px-6 py-20 text-center sm:py-24 lg:py-[104px]">
          <div className="mx-auto max-w-[680px]">
            <h2 className="fsd-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
              The Future of Transport
            </h2>
            <p className="mt-4 text-[14px] leading-5 text-[#393c41]">
              Tesla trains Full Self-Driving (Supervised) with billions of miles
              of anonymous, real-world data. It is designed to handle stressful
              everyday driving tasks and take you almost anywhere with minimal
              intervention while you remain actively attentive.
            </p>
            <a
              className="mt-9 inline-flex min-w-[200px] justify-center rounded bg-[#171a20] px-7 py-3 text-[14px] font-medium leading-5 text-white transition hover:bg-[#393c41]"
              href="https://www.tesla.com/fsd/safety"
              rel="noreferrer"
              target="_blank"
            >
              View Safety Report
            </a>
            <p className="mx-auto mt-10 max-w-[660px] text-[13px] leading-5 text-[#5c5e62]">
              Full Self-Driving (Supervised) is currently available in select
              markets across North America, Europe and Asia Pacific, with more
              regions expected through future updates.<sup>2</sup>
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28 lg:px-12">
          <h2 className="fsd-display text-center text-[24px] font-medium leading-tight tracking-[-0.015em] sm:text-[28px]">
            Watch the World&apos;s First Autonomous Car Delivery
          </h2>
          <div className="mx-auto mt-8 max-w-[1110px] overflow-hidden rounded-md bg-black">
            <video
              aria-label="The world's first autonomous car delivery"
              className="aspect-video w-full bg-black object-cover"
              controls
              playsInline
              poster="/assets/tesla-official/fsd-delivery-poster.png"
              preload="metadata"
              src="/assets/tesla-official/fsd-delivery.mp4"
            />
          </div>
        </section>

        <section className="pt-4 sm:pt-10" id="designed-for-every-drive">
          <header className="mx-auto max-w-[760px] px-6 text-center">
            <h2 className="fsd-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
              Designed for Every Drive
            </h2>
            <p className="mt-4 text-[14px] leading-5 text-[#393c41]">
              Full Self-Driving (Supervised) can navigate routes, steer, change
              lanes and park for quick errands, commutes and road trips while
              you remain actively attentive. Enabled features do not make the
              vehicle autonomous.
            </p>
          </header>

          <div className="relative mt-10 h-[300svh] min-h-[1900px] sm:mt-14">
            <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden bg-[#eef0f1]">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/assets/tesla-official/fsd-every-drive-mobile.jpg"
                />
                <img
                  alt="Tesla vehicle driving through a mountain road"
                  className="h-full w-full object-cover object-center"
                  decoding="async"
                  height="1152"
                  loading="lazy"
                  src="/assets/tesla-official/fsd-every-drive-desktop.jpg"
                  width="2048"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/90 md:bg-gradient-to-r md:from-transparent md:via-white/5 md:to-white/95" />
            </div>
            <div className="absolute inset-0 z-10">
              {DRIVE_FEATURES.map((feature) => (
                <article
                  className="flex h-[100svh] min-h-[620px] items-end px-7 pb-16 md:items-center md:justify-end md:px-[9vw] md:pb-0"
                  key={feature.title}
                >
                  <div className="w-full max-w-[360px] rounded-sm bg-white/85 p-5 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
                    <p className="text-[14px] font-medium leading-5">
                      {feature.eyebrow}
                    </p>
                    <h3 className="fsd-display mt-1 text-[28px] font-medium leading-tight tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-[14px] leading-5 text-[#393c41]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
          id="training-scenarios"
        >
          <div className="mx-auto max-w-[1110px]">
            <h2 className="fsd-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
              Trained on Once-In-A-Lifetime Scenarios
            </h2>
            <p className="mt-6 text-[14px] leading-5 text-[#393c41]">
              Complex incidents are rare. FSD (Supervised) learns from more than
              a century&apos;s worth of anonymous driving scenarios gathered by
              a fleet of over six million vehicles, which collectively
              encounters a lifetime of driving situations in about ten minutes.
            </p>
            <FsdAmbientVideo
              className="mt-10 aspect-[16/10] w-full rounded-md sm:mt-12"
              desktopPoster="/assets/tesla-official/fsd-scenarios-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-scenarios-desktop.mp4"
              label="Tesla responding to complex real-world driving scenarios"
              mobilePoster="/assets/tesla-official/fsd-scenarios-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-scenarios-mobile.mp4"
            />
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-[1110px] gap-10 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-28">
            <div>
              <h2 className="fsd-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
                Always Attentive,
                <br />
                Never Distracted
              </h2>
              <p className="mt-6 text-[14px] leading-5 text-[#393c41]">
                Cameras do not blink, tire or become distracted. Exterior
                cameras offer a complete view around the vehicle, and the same
                software helps reduce the severity of accidents or prevent them.
                Over-the-air updates continuously deliver safety improvements.{" "}
                <a
                  className="border-b border-[#171a20]"
                  href="https://www.tesla.com/safety"
                  rel="noreferrer"
                  target="_blank"
                >
                  Learn More
                </a>
              </p>
            </div>
            <FsdAmbientVideo
              className="aspect-video w-full rounded-md"
              desktopPoster="/assets/tesla-official/fsd-attentive-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-attentive-desktop.mp4"
              label="Tesla exterior cameras observing surrounding traffic"
              mobilePoster="/assets/tesla-official/fsd-attentive-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-attentive-mobile.mp4"
            />
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <dl className="mx-auto grid max-w-[1110px] gap-10 sm:grid-cols-3 sm:gap-0">
            <div className="sm:border-r sm:border-[#d0d1d2] sm:px-10 lg:px-14">
              <dt className="fsd-display text-[38px] font-medium leading-none tracking-[-0.03em]">
                <LiveMileage />
              </dt>
              <dd className="mt-3 text-[14px] leading-5 text-[#393c41]">
                Miles Driven<sup>4</sup>
              </dd>
            </div>
            <div className="sm:border-r sm:border-[#d0d1d2] sm:px-10 lg:px-14">
              <dt className="fsd-display text-[38px] font-medium leading-none tracking-[-0.03em]">
                7x <span className="text-[24px]">Safer</span>
              </dt>
              <dd className="mt-3 max-w-[230px] text-[14px] leading-5 text-[#393c41]">
                Than a Human Driver When FSD (Supervised) Is Engaged<sup>5</sup>
              </dd>
            </div>
            <div className="sm:px-10 lg:px-14">
              <dt className="fsd-display text-[38px] font-medium leading-none tracking-[-0.03em]">
                12 <span className="text-[24px]">Countries</span>
              </dt>
              <dd className="mt-3 text-[14px] leading-5 text-[#393c41]">
                And Counting<sup>6</sup>
              </dd>
            </div>
          </dl>
        </section>

        <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-black text-white">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/tesla-official/fsd-autonomous-mobile.jpg"
            />
            <img
              alt="Cybercab and Robovan driving through a city"
              className="h-full w-full object-cover object-center"
              decoding="async"
              height="1152"
              loading="lazy"
              src="/assets/tesla-official/fsd-autonomous-desktop.jpg"
              width="2048"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/15" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-[8vw] lg:pb-24">
            <div className="max-w-[700px]">
              <h2 className="fsd-display text-[30px] font-medium leading-tight tracking-[-0.02em] sm:text-[36px]">
                The Future Is Autonomous
              </h2>
              <p className="mt-5 text-[14px] leading-5 text-white/90">
                As the technology advances, Tesla moves closer to a fully
                autonomous future. Full Self-Driving (Unsupervised) is intended
                to unlock a robotaxi fleet and make Cybercab a reality.{" "}
                <a
                  className="border-b border-white"
                  href="https://x.com/Tesla_AI"
                  rel="noreferrer"
                  target="_blank"
                >
                  Find Out What&apos;s Coming Next
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/tesla-official/fsd-eop-mobile.jpg"
            />
            <img
              alt="View from inside a Tesla driving along the coast"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="1152"
              loading="lazy"
              src="/assets/tesla-official/fsd-eop-desktop.jpg"
              width="2048"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black" />
          <div className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-10 pt-28 text-center sm:px-8 sm:pb-12">
            <div className="mx-auto max-w-[720px]">
              <h2 className="fsd-display text-[28px] font-medium leading-tight tracking-[-0.02em]">
                Experience It for Yourself
              </h2>
              <p className="mx-auto mt-4 max-w-[660px] text-[14px] leading-5 text-white/90">
                Schedule a demo drive to try Full Self-Driving (Supervised) from
                the driver&apos;s seat or{" "}
                <a
                  className="border-b border-white"
                  href="https://www.tesla.com/support/fsd"
                  rel="noreferrer"
                  target="_blank"
                >
                  find additional information
                </a>
                .
              </p>
              <Link
                className="mt-8 inline-flex min-w-[220px] justify-center rounded bg-[#3e6ae1] px-7 py-3 text-[14px] font-medium leading-5 text-white transition hover:bg-[#3457b1]"
                to="/demo_drive"
              >
                Demo FSD (Supervised)
              </Link>
            </div>

            <div className="mx-auto mt-16 max-w-[760px] space-y-4 text-[11px] leading-4 text-white/65">
              {FOOTNOTES.map((footnote, index) => (
                <p key={footnote}>
                  <sup>{index + 1}</sup> {footnote}
                </p>
              ))}
            </div>

            <footer className="mx-auto mt-14 flex max-w-[900px] flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-white/65">
              <Link to="/">Tesla Clone © 2026</Link>
              {FOOTER_LINKS.map((link) => (
                <a
                  href={link.url}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
