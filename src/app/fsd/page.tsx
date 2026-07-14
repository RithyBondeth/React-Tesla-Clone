import { Link } from "react-router-dom";

import SiteFooter from "../../components/home/site-footer";
import ResponsiveVideo from "../../components/media/responsive-video";
import Navbar from "../../components/navbar";

const DRIVE_FEATURES = [
  {
    description:
      "Activate Actually Smart Summon in the Tesla app and your vehicle can navigate through parking lots and tight spaces to find you.",
    eyebrow: "Actually Smart Summon",
    title: "Drives to You",
  },
  {
    description:
      "Exterior cameras provide 360-degree visibility while FSD (Supervised) navigates routes, steers, changes lanes and avoids surrounding road users.",
    eyebrow: "FSD (Supervised)",
    title: "Drives for You",
  },
  {
    description:
      "Autopark detects available spaces and automatically maneuvers into perpendicular and parallel parking spots under your supervision.",
    eyebrow: "Autopark",
    title: "Parks for You",
  },
];

export default function FsdPage() {
  return (
    <div className="bg-white text-[#171a20]">
      <Navbar isBlurred isWhiteText />

      <main>
        <section className="relative min-h-[100svh] overflow-hidden bg-[#202326] text-white">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/tesla-official/fsd-hero-mobile.avif"
            />
            <img
              alt="Interior view of a Tesla driving with Full Self-Driving supervised"
              className="hero-media absolute inset-0 h-full w-full object-cover object-center"
              decoding="async"
              fetchPriority="high"
              height="1200"
              loading="eager"
              src="/assets/tesla-official/fsd-hero-desktop.avif"
              width="1920"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/70" />
          <div className="relative flex min-h-[100svh] flex-col items-center justify-between px-5 pb-12 pt-28 text-center sm:px-8 sm:pt-32">
            <header className="hero-copy max-w-4xl">
              <p className="text-sm font-semibold text-white/75">
                Active driver supervision required
              </p>
              <h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                Full Self-Driving
              </h1>
              <p className="mt-2 text-2xl font-medium sm:text-3xl">
                (Supervised)
              </p>
            </header>
            <div className="grid w-full max-w-[552px] gap-3 sm:grid-cols-2">
              <a
                className="rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-white/90"
                href="https://www.tesla.com/updates?source=fsd"
                rel="noreferrer"
                target="_blank"
              >
                Stay Updated
              </a>
              <Link
                className="rounded bg-[#171a20]/85 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black"
                to="/demo_drive"
              >
                Demo FSD
              </Link>
            </div>
          </div>
        </section>

        <section className="content-auto px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-semibold text-[#5c5e62]">
                The Future of Transport
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Trained on the Real World
              </h2>
            </div>
            <div className="space-y-5 leading-7 text-[#5c5e62]">
              <p>
                Tesla uses billions of miles of anonymous real-world driving
                data to train Full Self-Driving (Supervised) to handle the most
                stressful parts of daily driving while helping make roads safer.
              </p>
              <p>
                When enabled, your vehicle can drive you almost anywhere with
                your active supervision and minimal intervention. Availability
                depends on region, vehicle configuration and regulatory
                approval.
              </p>
              <a
                className="inline-flex rounded border-2 border-[#171a20] px-7 py-2.5 text-sm font-semibold text-[#171a20] transition hover:bg-[#171a20] hover:text-white"
                href="https://www.tesla.com/fsd/safety"
                rel="noreferrer"
                target="_blank"
              >
                View Safety Report
              </a>
            </div>
          </div>
        </section>

        <section className="content-auto bg-[#f4f4f4] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <header className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Designed for Every Drive
              </h2>
              <p className="max-w-xl leading-7 text-[#5c5e62] lg:justify-self-end">
                Route navigation, steering, lane changes, parking and more are
                completed under your active supervision—from quick errands to
                daily commutes and road trips.
              </p>
            </header>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {DRIVE_FEATURES.map((feature, index) => (
                <article
                  className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-[#171a20] p-7 text-white sm:p-8"
                  key={feature.title}
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    <span>{feature.eyebrow}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.035em]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-[#5c5e62]">
              Currently enabled features require active driver supervision and
              do not make the vehicle autonomous.
            </p>
          </div>
        </section>

        <section className="content-auto bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="relative mx-auto aspect-[9/10] max-w-[1600px] overflow-hidden rounded-2xl bg-[#25282a] sm:aspect-[16/10]">
            <ResponsiveVideo
              className="absolute inset-0"
              desktopPoster="/assets/tesla-official/fsd-scenarios-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-scenarios-desktop.mp4"
              label="Full Self-Driving responding to complex real-world driving scenarios"
              mobilePoster="/assets/tesla-official/fsd-scenarios-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-scenarios-mobile.mp4"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Trained on Once-In-A-Lifetime Scenarios
            </h2>
            <p className="max-w-2xl leading-7 text-[#5c5e62] lg:justify-self-end">
              Crashes are complex. FSD (Supervised) is trained on what amounts
              to more than 100 years of anonymous real-world scenarios from a
              fleet of over six million vehicles. The fleet collectively
              experiences a lifetime of driving scenarios in about 10 minutes.
            </p>
          </div>
        </section>

        <section className="content-auto bg-[#f4f4f4] px-4 py-16 sm:px-6 sm:py-24 lg:px-12">
          <div className="relative mx-auto aspect-[9/10] max-w-[1600px] overflow-hidden rounded-2xl bg-[#222629] sm:aspect-video">
            <ResponsiveVideo
              className="absolute inset-0"
              desktopPoster="/assets/tesla-official/fsd-attentive-desktop-poster.jpg"
              desktopSrc="/assets/tesla-official/fsd-attentive-desktop.mp4"
              label="Tesla cameras maintaining a full view of surrounding traffic"
              mobilePoster="/assets/tesla-official/fsd-attentive-mobile-poster.jpg"
              mobileSrc="/assets/tesla-official/fsd-attentive-mobile.mp4"
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Always Attentive,
              <br />
              Never Distracted
            </h2>
            <p className="max-w-2xl leading-7 text-[#5c5e62] lg:justify-self-end">
              Cameras do not blink, feel tired or become distracted. Exterior
              cameras enable 360-degree visibility, while over-the-air updates
              deliver the latest safety improvements to each compatible Tesla.
            </p>
          </div>
        </section>

        <section
          className="content-auto bg-[#171a20] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
          id="safety"
        >
          <div className="mx-auto max-w-7xl">
            <header className="max-w-3xl">
              <p className="text-sm font-semibold text-white/50">
                Fleet Intelligence
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Learning With Every Mile
              </h2>
            </header>
            <dl className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
              <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-9">
                <dt className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  11.9B+
                </dt>
                <dd className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                  Miles Driven
                </dd>
              </div>
              <div className="border-b border-white/10 p-7 sm:border-b-0 sm:border-r sm:p-9">
                <dt className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  7x
                </dt>
                <dd className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                  Safer With FSD Engaged
                </dd>
              </div>
              <div className="p-7 sm:p-9">
                <dt className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  12
                </dt>
                <dd className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                  Countries and Counting
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="content-auto px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              The Future Is Autonomous
            </h2>
            <div>
              <p className="leading-7 text-[#5c5e62]">
                As the technology advances, Tesla moves closer to a fully
                autonomous future. Full Self-Driving (Unsupervised) is intended
                to unlock a fleet of robotaxis and make Cybercab possible.
              </p>
              <a
                className="mt-7 inline-flex rounded border-2 border-[#171a20] px-7 py-2.5 text-sm font-semibold transition hover:bg-[#171a20] hover:text-white"
                href="https://www.tesla.com/we-robot"
                rel="noreferrer"
                target="_blank"
              >
                Explore What&apos;s Next
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f4f4] px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Experience It for Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#5c5e62]">
              Schedule a demo or get updates when Full Self-Driving (Supervised)
              becomes available in your area.
            </p>
            <div className="mx-auto mt-8 grid max-w-[552px] gap-3 sm:grid-cols-2">
              <Link
                className="rounded bg-[#171a20] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
                to="/demo_drive"
              >
                Demo FSD
              </Link>
              <a
                className="rounded bg-white px-7 py-3 text-sm font-semibold text-[#171a20] transition hover:bg-[#ececec]"
                href="https://www.tesla.com/updates?source=fsd"
                rel="noreferrer"
                target="_blank"
              >
                Stay Updated
              </a>
            </div>
            <p className="mt-8 text-xs leading-5 text-[#5c5e62]">
              Full Self-Driving (Supervised) requires active driver supervision
              and does not make the vehicle autonomous. Feature availability is
              subject to vehicle configuration, market and regulatory approval.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
