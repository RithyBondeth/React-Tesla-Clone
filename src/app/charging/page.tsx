import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import SiteFooter from "../../components/home/site-footer";
import Navbar from "../../components/navbar";

const ASSET_ROOT = "/assets/tesla-official/charging-current";

type ChargingImageProps = {
  alt: string;
  className?: string;
  name: string;
};

const CHARGING_MOMENTS = [
  {
    description: "Plug in at home or at nearby public chargers.",
    image: "plug-sleep",
    linkLabel: "Plug in at home",
    title: "While You Sleep",
    to: "/energy",
  },
  {
    description: "Charge at a local Supercharger or at your workplace.",
    image: "plug-day",
    linkLabel: "local Supercharger",
    title: "During the Day",
    to: "/findus",
  },
  {
    description: "Recharge at Superchargers on the way or at your destination.",
    image: "plug-road",
    linkLabel: "your destination",
    title: "On Road Trips",
    to: "/findus",
  },
];

const ROUTE_FEATURES = [
  {
    description: "Finds the best route to avoid traffic and charge if needed.",
    image: "route-optimize",
    title: "Optimizes Route",
  },
  {
    description:
      "Gives real-time battery estimates based on your driving style.",
    image: "route-battery",
    title: "Measures Battery",
  },
  {
    description: "Offers charging location recommendations along your route.",
    image: "route-recommend",
    title: "Recommends Chargers",
  },
];

function ChargingImage({ alt, className = "", name }: ChargingImageProps) {
  return (
    <picture>
      <source
        media="(max-width: 599px)"
        srcSet={`${ASSET_ROOT}/${name}-mobile.jpg`}
      />
      <img
        alt={alt}
        className={className}
        decoding="async"
        loading="lazy"
        src={`${ASSET_ROOT}/${name}-desktop.jpg`}
      />
    </picture>
  );
}

function ChargingLink({
  children,
  className = "",
  to,
}: {
  children: string;
  className?: string;
  to: string;
}) {
  return (
    <Link className={`tesla-charging-button ${className}`} to={to}>
      {children}
    </Link>
  );
}

function ChargingHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="tesla-charging-hero">
      <picture className="tesla-charging-hero-poster">
        <source
          media="(max-width: 599px)"
          srcSet={`${ASSET_ROOT}/hero-mobile-poster.jpg`}
        />
        <img
          alt="Tesla vehicles charging at home"
          decoding="async"
          src={`${ASSET_ROOT}/hero-desktop-poster.jpg`}
        />
      </picture>
      <video
        aria-label="Tesla vehicles charging at home"
        autoPlay
        loop
        muted
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        preload="metadata"
        ref={videoRef}
      >
        <source
          media="(max-width: 599px)"
          src={`${ASSET_ROOT}/hero-mobile.mp4`}
          type="video/mp4"
        />
        <source src={`${ASSET_ROOT}/hero-desktop.mp4`} type="video/mp4" />
      </video>
      <div className="tesla-charging-hero-scrim" />
      <div className="tesla-charging-hero-copy">
        <h1>Charging</h1>
        <p>Go Anywhere, Charge Everywhere</p>
      </div>
      <button
        aria-label={isPlaying ? "Pause charging video" : "Play charging video"}
        className="tesla-charging-video-control"
        onClick={togglePlayback}
        type="button"
      >
        {isPlaying ? (
          <span aria-hidden="true" className="tesla-charging-pause-icon">
            <i />
            <i />
          </span>
        ) : (
          <span aria-hidden="true" className="tesla-charging-play-icon" />
        )}
      </button>
    </section>
  );
}

export default function ChargingPage() {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);
  const activeRoute = ROUTE_FEATURES[activeRouteIndex];

  return (
    <div className="tesla-charging-page">
      <Navbar isWhiteText />
      <main id="main-content">
        <ChargingHero />

        <section className="tesla-charging-intro" id="plug-in">
          <div className="tesla-charging-section-heading">
            <h2>Plug In, Charge and Go</h2>
            <p>
              With plenty of range for both daily drives and road trips, Tesla
              vehicles get you where you want to go. Charging is fast,
              convenient and available anywhere with electricity.
            </p>
            <a className="tesla-charging-button" href="#charging-moments">
              Help Me Charge
            </a>
          </div>

          <div className="tesla-charging-moment-grid" id="charging-moments">
            {CHARGING_MOMENTS.map((moment) => (
              <article className="tesla-charging-moment" key={moment.title}>
                <ChargingImage alt={moment.description} name={moment.image} />
                <h3>{moment.title}</h3>
                <p>
                  {moment.description.split(moment.linkLabel)[0]}
                  <Link to={moment.to}>{moment.linkLabel}</Link>
                  {moment.description.split(moment.linkLabel)[1]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="tesla-charging-feature tesla-charging-content-width">
          <ChargingImage
            alt="Ultra Red Model Y charging with a Wall Connector in front of a residential garage"
            className="tesla-charging-feature-image"
            name="start-day"
          />
          <div className="tesla-charging-feature-copy">
            <div>
              <h2>Start Your Day Fully Charged</h2>
              <ChargingLink to="/energy">Learn More</ChargingLink>
            </div>
            <p>
              Charge at home and wake up to a charged battery every day. Our
              charging options are designed for every property.
            </p>
          </div>
        </section>

        <section
          className="tesla-charging-feature tesla-charging-content-width"
          id="network"
        >
          <div className="tesla-charging-feature-copy tesla-charging-feature-copy--network">
            <div>
              <h2>Freedom to Go Anywhere</h2>
              <div className="tesla-charging-feature-actions">
                <ChargingLink to="/findus">Find Us</ChargingLink>
                <a
                  className="tesla-charging-button tesla-charging-button--soft"
                  href="#route-planning"
                >
                  Learn More
                </a>
              </div>
            </div>
            <p>
              Recharge with the world’s largest fast-charging network. Our
              Supercharger network is expansive, ultra-fast and reliable.
            </p>
          </div>
          <ChargingImage
            alt="Tesla Superchargers surrounded by mountains"
            className="tesla-charging-feature-image tesla-charging-feature-image--freedom"
            name="freedom"
          />
        </section>

        <section
          className="tesla-charging-route tesla-charging-content-width"
          id="route-planning"
        >
          <div className="tesla-charging-route-heading">
            <h2>Just Enter Your Destination</h2>
            <p>
              Your Tesla automatically finds the best route and suggests
              charging stations along the way.
            </p>
          </div>
          <ChargingImage
            alt={activeRoute.description}
            className="tesla-charging-route-image"
            name={activeRoute.image}
          />
          <div
            aria-label="Route planning features"
            className="tesla-charging-route-tabs"
            role="tablist"
          >
            {ROUTE_FEATURES.map((feature, index) => (
              <button
                aria-selected={activeRouteIndex === index}
                className={activeRouteIndex === index ? "is-active" : ""}
                key={feature.title}
                onClick={() => setActiveRouteIndex(index)}
                role="tab"
                type="button"
              >
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="tesla-charging-savings">
          <ChargingImage
            alt="Tesla Superchargers"
            className="tesla-charging-savings-image"
            name="skip-gas"
          />
          <div className="tesla-charging-savings-copy tesla-charging-content-width">
            <h2>Skip the Gas Station</h2>
            <p>
              Reduce your cost per mile and never pay for gas again. Charging
              with electricity typically costs less than paying for gas at your
              local station.
            </p>
            <a
              className="tesla-charging-button"
              href="https://www.tesla.com/charging-calculator"
              rel="noreferrer"
              target="_blank"
            >
              Calculate Savings
            </a>
          </div>
        </section>

        <section className="tesla-charging-battery tesla-charging-content-width">
          <div>
            <h2>No Required Battery Maintenance</h2>
            <p>
              Our batteries don’t require any regular maintenance and are
              designed to outlast your vehicle. Just in case, every new Tesla
              vehicle purchase includes an eight-year battery warranty.
              <sup>1</sup>
            </p>
          </div>
          <ChargingImage
            alt="Tesla battery cells"
            className="tesla-charging-battery-image"
            name="battery"
          />
        </section>

        <section className="tesla-charging-final">
          <ChargingImage
            alt="Quicksilver Model Y driving on a highway by the mountains"
            className="tesla-charging-final-image"
            name="footer"
          />
          <div className="tesla-charging-final-scrim" />
          <div className="tesla-charging-final-copy">
            <h2>Go Anywhere</h2>
            <p>
              Schedule a demo drive and learn how to charge at home or on the
              road.
            </p>
            <ChargingLink to="/drive">Demo Drive</ChargingLink>
          </div>
          <small>
            <sup>1</sup> Subject to a mileage cap.
          </small>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
