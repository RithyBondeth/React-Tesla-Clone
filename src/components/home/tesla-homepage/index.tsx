import { type ReactNode, useEffect, useRef, useState } from "react";
import L, { type Map as LeafletMap } from "leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const ASSET_ROOT = "/assets/tesla-official/homepage-current";

type HeroSlide = {
  desktopImage: string;
  mobileImage: string;
  title: string;
  subtitle: string;
  orderLink: string;
  learnLink: string;
};

type ProductCard = {
  category: string;
  desktopImage: string;
  mobileImage: string;
  title: string;
  detail: string;
  orderLink?: string;
  learnLink: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    desktopImage: `${ASSET_ROOT}/hero-model-y-l-seats-desktop.jpg`,
    mobileImage: `${ASSET_ROOT}/hero-model-y-l-seats-mobile.jpg`,
    learnLink: "/model-y",
    orderLink: "/order_now_modely",
    subtitle: "Three Rows, Six Seats",
    title: "Introducing Model Y L Premium",
  },
  {
    desktopImage: `${ASSET_ROOT}/hero-model-3-desktop.jpg`,
    mobileImage: `${ASSET_ROOT}/hero-model-3-mobile.jpg`,
    learnLink: "/model-3",
    orderLink: "/order_now_model3",
    subtitle: "0.99% APR Available",
    title: "Model 3",
  },
  {
    desktopImage: `${ASSET_ROOT}/hero-model-y-family-desktop.jpg`,
    mobileImage: `${ASSET_ROOT}/hero-model-y-family-mobile.jpg`,
    learnLink: "/model-y",
    orderLink: "/order_now_modely",
    subtitle: "0% APR Available",
    title: "Model Y",
  },
];

const VEHICLES: ProductCard[] = [
  {
    category: "Long Wheelbase Midsize SUV",
    desktopImage: `${ASSET_ROOT}/vehicle-model-y-l-desktop.jpg`,
    detail: "Starting at $61,990",
    learnLink: "/model-y",
    mobileImage: `${ASSET_ROOT}/vehicle-model-y-l-mobile.jpg`,
    orderLink: "/order_now_modely",
    title: "Model Y L Premium",
  },
  {
    category: "Sport Sedan",
    desktopImage: `${ASSET_ROOT}/vehicle-model-3-desktop.jpg`,
    detail: "Lease From $329/mo",
    learnLink: "/model-3",
    mobileImage: `${ASSET_ROOT}/vehicle-model-3-mobile.jpg`,
    orderLink: "/order_now_model3",
    title: "Model 3",
  },
  {
    category: "Midsize SUV",
    desktopImage: `${ASSET_ROOT}/vehicle-model-y-desktop.jpg`,
    detail: "Lease From $459/mo",
    learnLink: "/model-y",
    mobileImage: `${ASSET_ROOT}/vehicle-model-y-mobile.jpg`,
    orderLink: "/order_now_modely",
    title: "Model Y",
  },
  {
    category: "Utility Truck",
    desktopImage: `${ASSET_ROOT}/vehicle-cybertruck-desktop.jpg`,
    detail: "Lease From $949/mo",
    learnLink: "/learn_more_cybertruck",
    mobileImage: `${ASSET_ROOT}/vehicle-cybertruck-mobile.jpg`,
    orderLink: "/order_now_cybertruck",
    title: "Cybertruck",
  },
];

const ENERGY_PRODUCTS: ProductCard[] = [
  {
    category: "",
    desktopImage: `${ASSET_ROOT}/energy-solar-panels-desktop.jpg`,
    detail: "Power Your Home and Reduce Your Electricity Bill",
    learnLink: "/energy",
    mobileImage: `${ASSET_ROOT}/energy-solar-panels-mobile.jpg`,
    orderLink: "/energy",
    title: "Solar Panels",
  },
  {
    category: "",
    desktopImage: `${ASSET_ROOT}/energy-powerwall-desktop.png`,
    detail: "Keep Your Lights On During Outages",
    learnLink: "/powerwall",
    mobileImage: `${ASSET_ROOT}/energy-powerwall-mobile.png`,
    orderLink: "/powerwall",
    title: "Powerwall",
  },
  {
    category: "",
    desktopImage: `${ASSET_ROOT}/energy-megapack-desktop.jpg`,
    detail: "Massive Batteries for Massive Energy Support",
    learnLink: "/megapack",
    mobileImage: `${ASSET_ROOT}/energy-megapack-mobile.jpg`,
    title: "Megapack",
  },
  {
    category: "",
    desktopImage: `${ASSET_ROOT}/energy-solar-roof-desktop.jpg`,
    detail: "Generate Clean Energy With Your Roof",
    learnLink: "/energy",
    mobileImage: `${ASSET_ROOT}/energy-solar-roof-mobile.jpg`,
    orderLink: "/energy",
    title: "Solar Roof",
  },
];

const CHAT_PROMPTS = [
  '"Compare Model 3 and Model Y"',
  '"What\u2019s Pet Mode?"',
  '"What does the Tesla app do?"',
  '"Where can I drive the Model 3?"',
];

type ChargingSite = [name: string, latitude: number, longitude: number];

const SUPERCHARGER_SITES: ChargingSite[] = [
  ["Seattle", 47.61, -122.33],
  ["Tacoma", 47.25, -122.44],
  ["Portland", 45.52, -122.68],
  ["Eugene", 44.05, -123.09],
  ["Medford", 42.33, -122.88],
  ["Sacramento", 38.58, -121.49],
  ["San Francisco", 37.77, -122.42],
  ["San Jose", 37.34, -121.89],
  ["Monterey", 36.6, -121.89],
  ["Fresno", 36.74, -119.79],
  ["Bakersfield", 35.37, -119.02],
  ["Los Angeles", 34.05, -118.24],
  ["Palm Springs", 33.83, -116.55],
  ["San Diego", 32.72, -117.16],
  ["Las Vegas", 36.17, -115.14],
  ["Reno", 39.53, -119.81],
  ["Boise", 43.62, -116.2],
  ["Salt Lake City", 40.76, -111.89],
  ["Phoenix", 33.45, -112.07],
  ["Tucson", 32.22, -110.97],
  ["Flagstaff", 35.2, -111.65],
  ["Albuquerque", 35.08, -106.65],
  ["Santa Fe", 35.69, -105.94],
  ["Denver", 39.74, -104.99],
  ["Colorado Springs", 38.83, -104.82],
  ["Cheyenne", 41.14, -104.82],
  ["Billings", 45.78, -108.5],
  ["Rapid City", 44.08, -103.23],
  ["Fargo", 46.88, -96.79],
  ["Omaha", 41.26, -95.94],
  ["Kansas City", 39.1, -94.58],
  ["Wichita", 37.69, -97.34],
  ["Oklahoma City", 35.47, -97.52],
  ["Tulsa", 36.15, -95.99],
  ["Dallas", 32.78, -96.8],
  ["Fort Worth", 32.76, -97.33],
  ["Austin", 30.27, -97.74],
  ["San Antonio", 29.42, -98.49],
  ["Houston", 29.76, -95.37],
  ["El Paso", 31.76, -106.49],
  ["Minneapolis", 44.98, -93.27],
  ["Des Moines", 41.59, -93.62],
  ["St. Louis", 38.63, -90.2],
  ["Little Rock", 34.75, -92.29],
  ["New Orleans", 29.95, -90.07],
  ["Milwaukee", 43.04, -87.91],
  ["Chicago", 41.88, -87.63],
  ["Indianapolis", 39.77, -86.16],
  ["Detroit", 42.33, -83.05],
  ["Cleveland", 41.5, -81.69],
  ["Columbus", 39.96, -83.0],
  ["Cincinnati", 39.1, -84.51],
  ["Louisville", 38.25, -85.76],
  ["Nashville", 36.16, -86.78],
  ["Memphis", 35.15, -90.05],
  ["Birmingham", 33.52, -86.81],
  ["Atlanta", 33.75, -84.39],
  ["Savannah", 32.08, -81.09],
  ["Jacksonville", 30.33, -81.66],
  ["Orlando", 28.54, -81.38],
  ["Tampa", 27.95, -82.46],
  ["Miami", 25.76, -80.19],
  ["Charlotte", 35.23, -80.84],
  ["Raleigh", 35.78, -78.64],
  ["Richmond", 37.54, -77.44],
  ["Washington, D.C.", 38.91, -77.04],
  ["Baltimore", 39.29, -76.61],
  ["Pittsburgh", 40.44, -80.0],
  ["Philadelphia", 39.95, -75.17],
  ["New York", 40.71, -74.01],
  ["Hartford", 41.76, -72.67],
  ["Boston", 42.36, -71.06],
  ["Portland, Maine", 43.66, -70.26],
  ["Buffalo", 42.89, -78.88],
  ["Albany", 42.65, -73.76],
  ["Burlington", 44.48, -73.21],
  ["Toronto", 43.65, -79.38],
  ["Montreal", 45.5, -73.57],
  ["Vancouver", 49.28, -123.12],
];

const DESTINATION_CHARGER_SITES: ChargingSite[] = [
  ["Olympic Peninsula", 47.81, -123.42],
  ["Willamette Valley", 44.94, -123.03],
  ["Napa Valley", 38.3, -122.29],
  ["Lake Tahoe", 39.1, -120.03],
  ["Santa Barbara", 34.42, -119.7],
  ["Joshua Tree", 34.13, -116.32],
  ["Scottsdale", 33.49, -111.93],
  ["Santa Fe", 35.67, -105.96],
  ["Aspen", 39.19, -106.82],
  ["Jackson Hole", 43.48, -110.76],
  ["Black Hills", 43.88, -103.46],
  ["Hill Country", 30.1, -98.42],
  ["Galveston", 29.3, -94.8],
  ["Lake of the Ozarks", 38.2, -92.64],
  ["Door County", 45.0, -87.1],
  ["Traverse City", 44.76, -85.62],
  ["Smoky Mountains", 35.61, -83.49],
  ["Charleston", 32.78, -79.93],
  ["Hilton Head", 32.22, -80.75],
  ["Florida Keys", 24.56, -81.78],
  ["Outer Banks", 35.56, -75.47],
  ["Shenandoah", 38.3, -78.47],
  ["Finger Lakes", 42.68, -76.84],
  ["Cape Cod", 41.67, -70.3],
  ["Bar Harbor", 44.39, -68.2],
  ["Niagara-on-the-Lake", 43.25, -79.08],
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "m15 4-8 8 8 8" : "m9 4 8 8-8 8"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SteeringWheelIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="none" r="8.5" stroke="currentColor" />
      <path
        d="M4.2 10.4h15.6M12 11v9M7.2 11.2c.8 1.5 2.5 2.4 4.8 2.4s4-.9 4.8-2.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M4 4.5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8.2L7 21v-3.5H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
      <path
        d="M7 10.9h.1m4.9 0h.1m4.9 0h.1"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ChargeIcon({ type }: { type: "bolt" | "plug" }) {
  return (
    <span
      aria-hidden="true"
      className={`tesla-home-charge-icon tesla-home-charge-icon--${type}`}
    >
      <svg viewBox="0 0 24 24">
        {type === "bolt" ? (
          <path
            d="m13.6 1-8 13h5.2l-1.1 9 8.7-14h-5.3l.5-8Z"
            fill="currentColor"
          />
        ) : (
          <path
            d="M8 2v5m8-5v5M6 7h12v2a6 6 0 0 1-5 5.9V22h-2v-7.1A6 6 0 0 1 6 9V7Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        )}
      </svg>
    </span>
  );
}

function LocateIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" />
      <path
        d="M12 2v3m0 14v3M2 12h3m14 0h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TeslaButton({
  children,
  className = "",
  to,
}: {
  children: ReactNode;
  className?: string;
  to: string;
}) {
  if (to.startsWith("http")) {
    return (
      <a
        className={`tesla-home-button ${className}`}
        href={to}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`tesla-home-button ${className}`} to={to}>
      {children}
    </Link>
  );
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section aria-label="Featured Tesla products" className="tesla-home-hero">
      {HERO_SLIDES.map((slide, index) => (
        <article
          aria-hidden={activeIndex !== index}
          className={`tesla-home-hero-slide ${
            activeIndex === index ? "is-active" : ""
          }`}
          key={slide.desktopImage}
        >
          <picture>
            <source media="(max-width: 599px)" srcSet={slide.mobileImage} />
            <img
              alt=""
              className="tesla-home-hero-media"
              decoding={index === 0 ? "sync" : "async"}
              src={slide.desktopImage}
            />
          </picture>
          <div className="tesla-home-hero-scrim" />
          <div className="tesla-home-hero-copy">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="tesla-home-hero-actions">
              <TeslaButton
                className="tesla-home-button--blue"
                to={slide.orderLink}
              >
                Order Now
              </TeslaButton>
              <TeslaButton
                className="tesla-home-button--white"
                to={slide.learnLink}
              >
                Learn More
              </TeslaButton>
            </div>
          </div>
        </article>
      ))}

      <button
        aria-label="Previous featured product"
        className="tesla-home-hero-arrow tesla-home-hero-arrow--left"
        onClick={() => goToSlide(activeIndex - 1)}
        type="button"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        aria-label="Next featured product"
        className="tesla-home-hero-arrow tesla-home-hero-arrow--right"
        onClick={() => goToSlide(activeIndex + 1)}
        type="button"
      >
        <ChevronIcon direction="right" />
      </button>

      <div
        aria-label="Choose featured product"
        className="tesla-home-dots"
        role="tablist"
      >
        {HERO_SLIDES.map((slide, index) => (
          <button
            aria-label={`Show ${slide.title}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            key={slide.title}
            onClick={() => goToSlide(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

function FullSelfDrivingCard() {
  const [miles, setMiles] = useState(11_948_197_783);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 599px)");
    const updateMedia = () => setIsMobile(query.matches);
    updateMedia();
    query.addEventListener("change", updateMedia);
    return () => query.removeEventListener("change", updateMedia);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMiles((value) => value + 2475);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="tesla-home-fsd-section" id="full-self-driving">
      <div className="tesla-home-fsd-card">
        <div className="tesla-home-fsd-copy">
          <header>
            <h2>
              Full Self-Driving
              <br />
              (Supervised)
            </h2>
            <p>
              Makes every drive easier. Subscribe for $99/mo.<sup>1</sup>
            </p>
          </header>

          <dl className="tesla-home-fsd-stats">
            <div>
              <dt>7x</dt>
              <dd>Fewer Collisions</dd>
            </div>
            <div>
              <dt>{miles.toLocaleString("en-US")}</dt>
              <dd>Miles Driven</dd>
            </div>
          </dl>

          <div className="tesla-home-fsd-actions">
            <TeslaButton className="tesla-home-button--dark" to="/demo_drive">
              Schedule Demo
            </TeslaButton>
            <TeslaButton className="tesla-home-button--white" to="/fsd">
              Learn More
            </TeslaButton>
          </div>
        </div>

        <video
          autoPlay
          className="tesla-home-fsd-video"
          key={isMobile ? "mobile" : "desktop"}
          loop
          muted
          playsInline
          poster={`${ASSET_ROOT}/fsd-card-${isMobile ? "mobile" : "desktop"}-poster.jpg`}
          preload="metadata"
        >
          <source
            src={`${ASSET_ROOT}/fsd-card-${isMobile ? "mobile" : "desktop"}.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

function ProductCarousel({
  products,
  sectionLabel,
}: {
  products: ProductCard[];
  sectionLabel: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children.item(index) as HTMLElement | null;
    if (!rail || !card) return;
    rail.scrollTo({
      behavior: "smooth",
      left: card.offsetLeft - rail.offsetLeft,
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    const cards = Array.from(rail.children) as HTMLElement[];
    const nextIndex = cards.reduce((closest, card, index) => {
      const distance = Math.abs(
        card.offsetLeft - rail.offsetLeft - rail.scrollLeft,
      );
      const closestDistance = Math.abs(
        cards[closest].offsetLeft - rail.offsetLeft - rail.scrollLeft,
      );
      return distance < closestDistance ? index : closest;
    }, 0);
    setActiveIndex(nextIndex);
  };

  return (
    <section
      aria-label={sectionLabel}
      className="tesla-home-product-section"
      id={sectionLabel === "Vehicles" ? "vehicles" : "energy"}
    >
      <div
        className="tesla-home-product-rail"
        onScroll={handleScroll}
        ref={railRef}
      >
        {products.map((product) => (
          <article className="tesla-home-product-card" key={product.title}>
            <picture>
              <source media="(max-width: 599px)" srcSet={product.mobileImage} />
              <img
                alt=""
                className="tesla-home-product-media"
                decoding="async"
                loading="lazy"
                src={product.desktopImage}
              />
            </picture>
            <div className="tesla-home-product-scrim" />
            {product.category && (
              <p className="tesla-home-product-category">{product.category}</p>
            )}
            <div className="tesla-home-product-copy">
              <h2>{product.title}</h2>
              <p>{product.detail}</p>
              <div className="tesla-home-product-actions">
                {product.orderLink && (
                  <TeslaButton
                    className="tesla-home-button--blue"
                    to={product.orderLink}
                  >
                    Order Now
                  </TeslaButton>
                )}
                <TeslaButton
                  className="tesla-home-button--white"
                  to={product.learnLink}
                >
                  Learn More
                </TeslaButton>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeIndex < products.length - 1 && (
        <button
          aria-label={`Show next ${sectionLabel.toLowerCase()} card`}
          className="tesla-home-product-arrow"
          onClick={() => scrollToCard(activeIndex + 1)}
          type="button"
        >
          <ChevronIcon direction="right" />
        </button>
      )}

      <div aria-hidden="true" className="tesla-home-product-dots">
        {products.map((product, index) => (
          <span
            className={index === activeIndex ? "is-active" : ""}
            key={product.title}
          />
        ))}
      </div>
    </section>
  );
}

function OffersGrid() {
  return (
    <section
      aria-label="Offers and inventory"
      className="tesla-home-offers-section"
      id="offers"
    >
      <article className="tesla-home-offer-card">
        <img
          alt="Tesla vehicles for current offers"
          decoding="async"
          loading="lazy"
          src={`${ASSET_ROOT}/grid-current-offers.png`}
        />
        <div className="tesla-home-offer-copy">
          <h2>Current Offers</h2>
          <p>Explore limited-time offers on Tesla vehicles.</p>
          <TeslaButton className="tesla-home-button--white" to="/inventory">
            Learn More
          </TeslaButton>
        </div>
      </article>

      <article className="tesla-home-offer-card">
        <img
          alt="Tesla vehicle available for immediate delivery"
          decoding="async"
          loading="lazy"
          src={`${ASSET_ROOT}/grid-inventory.jpg`}
        />
        <div className="tesla-home-offer-copy">
          <h2>Inventory</h2>
          <p>Find nearby vehicles available for immediate delivery.</p>
          <div className="tesla-home-offer-actions">
            <TeslaButton
              className="tesla-home-button--white"
              to="/inventory/new"
            >
              New
            </TeslaButton>
            <TeslaButton
              className="tesla-home-button--white"
              to="/inventory/used"
            >
              Pre-Owned
            </TeslaButton>
          </div>
        </div>
      </article>
    </section>
  );
}

function ChargingMap() {
  const mapCanvasRef = useRef<HTMLDivElement>(null);
  const mapFrameRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [locationStatus, setLocationStatus] = useState("");

  useEffect(() => {
    if (!mapCanvasRef.current) return;

    const mediaQuery = window.matchMedia("(max-width: 599px)");
    const map = L.map(mapCanvasRef.current, {
      center: [37.8, -96.5],
      maxBounds: [
        [7, -168],
        [73, -48],
      ],
      minZoom: 3,
      scrollWheelZoom: false,
      zoom: mediaQuery.matches ? 3 : 5,
      zoomControl: false,
      zoomSnap: 0.25,
    });
    let locationMarker: L.CircleMarker | null = null;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    SUPERCHARGER_SITES.forEach(([name, latitude, longitude]) => {
      L.circleMarker([latitude, longitude], {
        color: "#fff",
        fillColor: "#e82127",
        fillOpacity: 0.9,
        radius: 4,
        weight: 1,
      })
        .bindTooltip(`${name} Supercharger area`, { direction: "top" })
        .addTo(map);
    });

    DESTINATION_CHARGER_SITES.forEach(([name, latitude, longitude]) => {
      L.circleMarker([latitude, longitude], {
        color: "#fff",
        fillColor: "#8e9196",
        fillOpacity: 0.9,
        radius: 4,
        weight: 1,
      })
        .bindTooltip(`${name} destination charging area`, {
          direction: "top",
        })
        .addTo(map);
    });

    const setHomeView = () => {
      map.invalidateSize();
      map.setView([37.8, -96.5], mediaQuery.matches ? 3 : 5, {
        animate: false,
      });
    };

    map.on("locationfound", (event) => {
      locationMarker?.removeFrom(map);
      locationMarker = L.circleMarker(event.latlng, {
        color: "#fff",
        fillColor: "#3e6ae1",
        fillOpacity: 1,
        radius: 7,
        weight: 2,
      })
        .bindTooltip("Your location", { direction: "top" })
        .addTo(map);
      setLocationStatus("The map is centered on your current location.");
    });
    map.on("locationerror", () => {
      setLocationStatus(
        "We could not access your location. Check your browser permissions and try again.",
      );
    });

    mapRef.current = map;
    const homeViewFrame = window.requestAnimationFrame(setHomeView);
    mediaQuery.addEventListener("change", setHomeView);

    return () => {
      window.cancelAnimationFrame(homeViewFrame);
      mediaQuery.removeEventListener("change", setHomeView);
      map.stopLocate();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === mapFrameRef.current);
      window.requestAnimationFrame(() => mapRef.current?.invalidateSize());
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const findCurrentLocation = () => {
    setLocationStatus("Finding your current location.");
    mapRef.current?.locate({
      enableHighAccuracy: true,
      maxZoom: 12,
      setView: true,
    });
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement === mapFrameRef.current) {
        await document.exitFullscreen();
      } else {
        await mapFrameRef.current?.requestFullscreen();
      }
    } catch {
      setLocationStatus("Fullscreen view is not available in this browser.");
    }
  };

  return (
    <section className="tesla-home-charging-section" id="charging">
      <div className="tesla-home-charging-inner">
        <div
          aria-label="Interactive map of Tesla charging locations across North America"
          className="tesla-home-charging-map"
          ref={mapFrameRef}
          role="region"
        >
          <div className="tesla-home-charging-map-canvas" ref={mapCanvasRef} />

          <button
            aria-label="Center the charging map on my location"
            className="tesla-home-map-locate"
            onClick={findCurrentLocation}
            type="button"
          >
            <LocateIcon />
            <span>Find Me</span>
          </button>

          <button
            aria-label={
              isFullscreen ? "Exit fullscreen map" : "View map fullscreen"
            }
            className="tesla-home-map-fullscreen"
            onClick={toggleFullscreen}
            type="button"
          >
            <FullscreenIcon />
          </button>

          <span aria-live="polite" className="sr-only">
            {locationStatus}
          </span>
        </div>

        <div className="tesla-home-charging-copy">
          <div>
            <h2>Find Your Charge</h2>
            <p>
              View the network of Tesla Superchargers and Destination Chargers
              available near you.
            </p>
          </div>

          <dl className="tesla-home-charging-stats">
            <div>
              <dt>
                <span className="tesla-home-count-desktop">38,027</span>
                <span className="tesla-home-count-mobile">6,186</span>
                <ChargeIcon type="bolt" />
              </dt>
              <dd>Superchargers</dd>
            </div>
            <div>
              <dt>
                <span className="tesla-home-count-desktop">6,158</span>
                <span className="tesla-home-count-mobile">843</span>
                <ChargeIcon type="plug" />
              </dt>
              <dd>Destination Chargers</dd>
            </div>
          </dl>

          <div className="tesla-home-charging-actions">
            <TeslaButton
              className="tesla-home-button--dark"
              to="https://www.tesla.com/findus"
            >
              View Network
            </TeslaButton>
            <TeslaButton className="tesla-home-button--white" to="/energy">
              Learn More
            </TeslaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalNote() {
  return (
    <section className="tesla-home-legal">
      <p>
        <sup>1</sup> Price reflects monthly subscription, subject to terms and
        conditions. Price and feature availability subject to change.
      </p>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Tesla © 2026", to: "/", mobile: true },
  { label: "Privacy & Legal", to: "https://www.tesla.com/legal", mobile: true },
  {
    label: "Vehicle Recalls",
    to: "https://www.tesla.com/vin-recall-search",
    mobile: true,
  },
  { label: "Contact", to: "https://www.tesla.com/contact", mobile: false },
  { label: "News", to: "https://www.tesla.com/blog", mobile: true },
  { label: "Get Updates", to: "https://www.tesla.com/updates", mobile: false },
  { label: "Locations", to: "https://www.tesla.com/findus", mobile: false },
  { label: "Learn", to: "https://www.tesla.com/learn", mobile: true },
];

function HomeFooter() {
  return (
    <footer className="tesla-home-footer">
      <nav aria-label="Footer menu">
        {FOOTER_LINKS.map((link) =>
          link.to.startsWith("http") ? (
            <a
              className={link.mobile ? "" : "tesla-home-footer-desktop-only"}
              href={link.to}
              key={link.label}
              rel="noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ),
        )}
      </nav>
    </footer>
  );
}

function StickyActions() {
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPromptIndex((index) => (index + 1) % CHAT_PROMPTS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Quick actions" className="tesla-home-sticky-actions">
      <button
        aria-label="Ask a question"
        className="tesla-home-chat-button"
        type="button"
      >
        <ChatIcon />
        <span className="tesla-home-chat-label">Ask a Question</span>
        <span className="tesla-home-chat-prompt">
          {CHAT_PROMPTS[promptIndex]}
        </span>
        <span aria-hidden="true" className="tesla-home-chat-submit">
          ↑
        </span>
      </button>
      <Link className="tesla-home-drive-button" to="/demo_drive">
        <SteeringWheelIcon />
        Schedule a Drive Today
      </Link>
    </aside>
  );
}

export default function TeslaHomepage() {
  return (
    <>
      <main id="main-content">
        <HeroCarousel />
        <FullSelfDrivingCard />
        <ProductCarousel products={VEHICLES} sectionLabel="Vehicles" />
        <OffersGrid />
        <ChargingMap />
        <ProductCarousel
          products={ENERGY_PRODUCTS}
          sectionLabel="Energy products"
        />
        <LegalNote />
      </main>
      <HomeFooter />
      <StickyActions />
    </>
  );
}
