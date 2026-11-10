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
      "Activate in the Tesla app and your Tesla vehicle will navigate through parking lots and tight spaces to get to you.",
    desktopPoster: "/assets/tesla-official/fsd-summon-desktop-poster.jpg",
    desktopSrc: "/assets/tesla-official/fsd-summon-desktop.mp4",
    eyebrow: "Actually Smart Summon²",
    mobilePoster: "/assets/tesla-official/fsd-summon-mobile-poster.jpg",
    mobileSrc: "/assets/tesla-official/fsd-summon-mobile.mp4",
    title: "Drives to You",
  },
  {
    description:
      "On-board cameras with 360-degree visibility will check your blind spots and move your Tesla vehicle into a neighboring lane while maintaining your speed and avoiding bikes, motorcycles and other cars.",
    desktopPoster: "/assets/tesla-official/fsd-fsd-desktop-poster.jpg",
    desktopSrc: "/assets/tesla-official/fsd-fsd-desktop.mp4",
    eyebrow: "FSD (Supervised)",
    mobilePoster: "/assets/tesla-official/fsd-fsd-mobile-poster.jpg",
    mobileSrc: "/assets/tesla-official/fsd-fsd-mobile.mp4",
    title: "Drives for You³",
  },
  {
    description:
      "Your Tesla vehicle will automatically detect and maneuver into perpendicular and parallel parking spots for you.",
    desktopPoster: "/assets/tesla-official/fsd-autopark-desktop-poster.jpg",
    desktopSrc: "/assets/tesla-official/fsd-autopark-desktop.mp4",
    eyebrow: "Autopark",
    mobilePoster: "/assets/tesla-official/fsd-autopark-mobile-poster.jpg",
    mobileSrc: "/assets/tesla-official/fsd-autopark-mobile.mp4",
    title: "Parks for You",
  },
];

const FOOTNOTES = [
  "Price reflects monthly subscription, subject to terms and conditions. Price and feature availability subject to change.",
  "Availability of all features depends on regulatory approval and other factors, which may take longer in some jurisdictions.",
  "Currently enabled features require active driver supervision and do not make the vehicle autonomous.",
  "Counters increment at the average rate of Tesla fleet mileage per second. This number may not include mileage increases for the growing fleet and free trials offered.",
  "Compared to the estimated U.S. average",
  "Including the U.S., Canada, China, Mexico, Puerto Rico, Australia, New Zealand, South Korea, the Netherlands, Lithuania, Estonia, Denmark and Belgium",
];

const FOOTER_LINKS = [
  { label: "Privacy & Legal", url: "https://www.tesla.com/legal" },
  { label: "Vehicle Recalls", url: "https://www.tesla.com/vin-recall-search" },
  { label: "Contact", url: "https://www.tesla.com/contact" },
  { label: "News", url: "https://www.tesla.com/blog" },
  { label: "Get Updates", url: "https://www.tesla.com/updates" },
  { label: "Locations", url: "https://www.tesla.com/findus" },
  { label: "Learn", url: "https://www.tesla.com/about" },
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
        className="fsd-video-control absolute z-20 grid place-items-center rounded bg-black/20 text-white transition hover:bg-black/40"
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
      <Navbar isWhiteText />

      <main>
        <section className="fsd-hero relative overflow-hidden bg-black text-white">
          <FsdAmbientVideo
            className="!absolute inset-0 h-full w-full"
            desktopPoster="/assets/tesla-official/fsd-hero-current-desktop-poster.jpg"
            desktopSrc="/assets/tesla-official/fsd-hero-current-desktop.mp4"
            eager
            label="Interior view of a Tesla driving with Full Self-Driving supervised"
            mobilePoster="/assets/tesla-official/fsd-hero-current-mobile-poster.jpg"
            mobileSrc="/assets/tesla-official/fsd-hero-current-mobile.mp4"
          />
          <div className="fsd-hero-scrim absolute inset-0" />
          <header className="fsd-hero-copy absolute inset-x-0 z-10 px-6 text-center">
            <h1 className="fsd-display font-medium">
              Full Self-Driving (Supervised)
            </h1>
            <p className="fsd-hero-price text-[14px] font-medium leading-5">
              Available for $99/mo<sup className="ml-0.5 text-[9px]">1</sup>
            </p>
          </header>
          <Link
            className="fsd-primary-button fsd-hero-cta absolute z-10"
            to="/drive"
          >
            Demo FSD (Supervised)
          </Link>
        </section>

        <section className="fsd-future text-center">
          <div className="fsd-standard-width fsd-future-inner">
            <div className="fsd-future-core">
              <h2 className="fsd-display fsd-section-heading font-medium">
                The Future of Transport
              </h2>
              <p className="fsd-future-description">
                Tesla uses billions of miles of anonymous real-world driving
                data to train Full Self-Driving (Supervised) to take care of the
                most stressful parts of daily driving while helping make the
                roads safer for you and others. When enabled, your vehicle will
                drive you almost anywhere with your active supervision,
                requiring minimal intervention.
              </p>
              <a
                className="fsd-dark-button"
                href="https://www.tesla.com/fsd/safety"
                rel="noreferrer"
                target="_blank"
              >
                View Safety Report
              </a>
            </div>
            <p className="fsd-availability">
              Full Self-Driving (Supervised) is currently available in select
              markets across North America, Europe and Asia Pacific with
              expansion to additional regions expected with future updates.
              <sup>2</sup>
            </p>
          </div>
        </section>

        <section className="fsd-delivery">
          <h2 className="fsd-display fsd-section-heading text-center font-medium">
            Watch the World&apos;s First Autonomous Car Delivery
          </h2>
          <div className="fsd-delivery-media mx-auto overflow-hidden bg-black">
            <video
              aria-label="The world's first autonomous car delivery"
              className="h-full w-full bg-black object-cover"
              controls
              playsInline
              poster="/assets/tesla-official/fsd-delivery-poster.png"
              preload="metadata"
              src="/assets/tesla-official/fsd-delivery.mp4"
            />
          </div>
        </section>

        <section
          className="fsd-drive-intro relative overflow-hidden text-white"
          id="designed-for-every-drive"
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/tesla-official/fsd-every-drive-mobile.jpg"
            />
            <img
              alt="Model Y driving on road"
              className="absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              height="1267"
              loading="lazy"
              src="/assets/tesla-official/fsd-every-drive-desktop.jpg"
              width="2200"
            />
          </picture>
          <div className="fsd-drive-intro-scrim absolute inset-0" />
          <div className="fsd-drive-intro-copy absolute">
            <h2 className="fsd-display fsd-section-heading font-medium">
              Designed for Every Drive
            </h2>
            <p>
              Full Self-Driving (Supervised) intelligently and accurately
              completes driving maneuvers for you, including route navigation,
              steering, lane changes, parking and more under your active
              supervision. Use it for quick errands, daily commutes and road
              trips. Currently enabled features require active driver
              supervision and do not make the vehicle autonomous.
            </p>
          </div>
        </section>

        <section className="fsd-drive-features">
          <div className="fsd-feature-width">
            {DRIVE_FEATURES.map((feature) => (
              <article className="fsd-drive-feature" key={feature.title}>
                <FsdAmbientVideo
                  className="fsd-drive-feature-media"
                  desktopPoster={feature.desktopPoster}
                  desktopSrc={feature.desktopSrc}
                  label={`${feature.title} demonstration`}
                  mobilePoster={feature.mobilePoster}
                  mobileSrc={feature.mobileSrc}
                />
                <div className="fsd-drive-feature-copy">
                  <h5>{feature.eyebrow}</h5>
                  <h3 className="fsd-display font-medium">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fsd-scenarios" id="training-scenarios">
          <div className="fsd-standard-width">
            <h2 className="fsd-display fsd-section-heading font-medium">
              Trained on Once-In-A-Lifetime Scenarios
            </h2>
            <p className="fsd-scenarios-copy">
              Crashes are complex. Full Self-Driving (Supervised) is trained on
              what amounts to over 100 years of anonymous real-world driving
              scenarios from our fleet of over six million vehicles. Our fleet
              collectively experiences a lifetime of driving scenarios in 10
              minutes.
            </p>
            <FsdAmbientVideo
              className="fsd-scenarios-media"
              desktopPoster="/assets/tesla-official/fsd-scenarios-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-scenarios-desktop.mp4"
              label="Tesla responding to complex real-world driving scenarios"
              mobilePoster="/assets/tesla-official/fsd-scenarios-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-scenarios-mobile.mp4"
            />
          </div>
        </section>

        <section className="fsd-attentive">
          <div className="fsd-feature-width fsd-attentive-inner">
            <div className="fsd-attentive-copy">
              <h2 className="fsd-display fsd-section-heading font-medium">
                Always Attentive,
                <br />
                Never Distracted
              </h2>
              <p>
                Cameras don’t blink, feel tired or get distracted. Full
                Self-Driving (Supervised) helps you drive better by taking care
                of the most common and error-prone driving tasks. Tesla vehicles
                are equipped with exterior cameras that enable 360-degree
                visibility, plus safety features powered by the same technology
                as our FSD software to help reduce the severity of accidents or
                prevent them altogether. Over-the-air software updates ensure
                each Tesla vehicle has access to the latest safety improvements.{" "}
                <a
                  className="fsd-inline-link"
                  href="https://www.tesla.com/safety"
                  rel="noreferrer"
                  target="_blank"
                >
                  Learn More
                </a>
              </p>
            </div>
            <FsdAmbientVideo
              className="fsd-attentive-media"
              desktopPoster="/assets/tesla-official/fsd-attentive-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-attentive-desktop.mp4"
              label="Tesla exterior cameras observing surrounding traffic"
              mobilePoster="/assets/tesla-official/fsd-attentive-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-attentive-mobile.mp4"
            />
          </div>
        </section>

        <section className="fsd-stats">
          <dl className="fsd-standard-width fsd-stats-inner">
            <div>
              <dt className="fsd-display font-medium">
                <LiveMileage />
              </dt>
              <dd>
                Miles Driven<sup>4</sup>
              </dd>
            </div>
            <div>
              <dt className="fsd-display font-medium">
                7x <span>Safer</span>
              </dt>
              <dd>
                Than a Human Driver When FSD (Supervised) Is Engaged<sup>5</sup>
              </dd>
            </div>
            <div>
              <dt className="fsd-display font-medium">
                12 <span>Countries</span>
              </dt>
              <dd>
                And Counting<sup>6</sup>
              </dd>
            </div>
          </dl>
        </section>

        <section className="fsd-autonomous">
          <div className="fsd-standard-width">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/assets/tesla-official/fsd-autonomous-mobile.jpg"
              />
              <img
                alt="Robotaxi and Cybercab"
                className="fsd-autonomous-media w-full object-cover object-center"
                decoding="async"
                height="1254"
                loading="lazy"
                src="/assets/tesla-official/fsd-autonomous-desktop.jpg"
                width="2236"
              />
            </picture>
            <div className="fsd-autonomous-copy">
              <h2 className="fsd-display fsd-section-heading font-medium">
                The Future Is Autonomous
              </h2>
              <p>
                As our technology continues to advance, we get closer to making
                a fully autonomous future possible. With Full Self-Driving
                (Unsupervised), autonomous driving will be made possible,
                unlocking our fleet of robotaxis and making Cybercab a reality.{" "}
                <a
                  className="fsd-inline-link"
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

        <section className="fsd-experience overflow-hidden bg-black text-white">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/tesla-official/fsd-eop-mobile.jpg"
            />
            <img
              alt="View from inside a Tesla driving along the coast"
              className="fsd-experience-media w-full object-cover object-center"
              decoding="async"
              height="1234"
              loading="lazy"
              src="/assets/tesla-official/fsd-eop-desktop.jpg"
              width="2880"
            />
          </picture>
          <div className="fsd-experience-scrim absolute inset-x-0 top-0" />
          <div className="fsd-experience-copy mx-auto text-center">
            <h2 className="fsd-display font-medium">
              Experience It for Yourself
            </h2>
            <p>
              Schedule a demo drive to try Full Self-Driving (Supervised) from
              the driver’s seat or{" "}
              <a
                className="fsd-inline-link"
                href="https://www.tesla.com/support/fsd"
                rel="noreferrer"
                target="_blank"
              >
                find additional information
              </a>
              .
            </p>
            <Link className="fsd-primary-button fsd-experience-cta" to="/drive">
              Demo FSD (Supervised)
            </Link>
          </div>
        </section>

        <section className="fsd-legal bg-black text-white">
          <div className="fsd-legal-inner mx-auto text-center">
            {FOOTNOTES.map((footnote, index) => (
              <p key={footnote}>
                <sup>{index + 1}</sup> {footnote}
              </p>
            ))}
          </div>

          <footer className="fsd-footer flex flex-wrap items-center justify-center">
            <Link to="/">Tesla © 2026</Link>
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
        </section>
      </main>
    </div>
  );
}
