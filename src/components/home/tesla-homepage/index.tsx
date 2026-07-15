import { type ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      {type === "bolt" ? "ϟ" : "♜"}
    </span>
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
              fetchPriority={index === 0 ? "high" : "auto"}
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
    <section className="tesla-home-fsd-section">
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
    <section aria-label={sectionLabel} className="tesla-home-product-section">
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
  return (
    <section className="tesla-home-charging-section">
      <div className="tesla-home-charging-inner">
        <img
          alt="Map of Tesla Superchargers and Destination Chargers across North America"
          className="tesla-home-charging-map"
          decoding="async"
          loading="lazy"
          src={`${ASSET_ROOT}/charging-map-desktop.jpg`}
        />

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
  const prompts = [
    '"Compare Model 3 and Model Y"',
    '"What\u2019s Pet Mode?"',
    '"What does the Tesla app do?"',
    '"Where can I drive the Model 3?"',
  ];
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPromptIndex((index) => (index + 1) % prompts.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [prompts.length]);

  return (
    <aside aria-label="Quick actions" className="tesla-home-sticky-actions">
      <button
        aria-label="Ask a question"
        className="tesla-home-chat-button"
        type="button"
      >
        <ChatIcon />
        <span className="tesla-home-chat-label">Ask a Question</span>
        <span className="tesla-home-chat-prompt">{prompts[promptIndex]}</span>
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
