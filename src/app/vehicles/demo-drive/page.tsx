import { FormEvent, useMemo, useRef, useState } from "react";

import Navbar from "../../../components/navbar";

type ModelId = "model-y" | "model-3" | "cybertruck";

type DriveModel = {
  description: string;
  formImage: string;
  id: ModelId;
  imageDesktop: string;
  imageMobile: string;
  name: string;
};

type DriveLocation = {
  address: string;
  distance: string;
  id: string;
  name: string;
  type: string;
};

type DriveMarket = {
  address: string;
  locations: DriveLocation[];
  searchTerms: string[];
};

const DRIVE_MODELS: DriveModel[] = [
  {
    description: "Midsize SUV for families, road trips and extra cargo space",
    formImage: "/assets/tesla-official/drive-current/form-model-y.avif",
    id: "model-y",
    imageDesktop:
      "/assets/tesla-official/drive-current/selector-model-y-desktop.avif",
    imageMobile:
      "/assets/tesla-official/drive-current/selector-model-y-mobile.avif",
    name: "Model Y",
  },
  {
    description: "Sports sedan for families, commuting and road trips",
    formImage: "/assets/tesla-official/drive-current/form-model-3.avif",
    id: "model-3",
    imageDesktop:
      "/assets/tesla-official/drive-current/selector-model-3-desktop.avif",
    imageMobile:
      "/assets/tesla-official/drive-current/selector-model-3-mobile.avif",
    name: "Model 3",
  },
  {
    description:
      "More utility than a truck with more performance than a sports car",
    formImage: "/assets/tesla-official/drive-current/form-cybertruck.avif",
    id: "cybertruck",
    imageDesktop:
      "/assets/tesla-official/drive-current/selector-cybertruck-desktop.avif",
    imageMobile:
      "/assets/tesla-official/drive-current/selector-cybertruck-mobile.avif",
    name: "Cybertruck",
  },
];

const DRIVE_MARKETS: DriveMarket[] = [
  {
    address: "Beverly Hills, CA 90210",
    locations: [
      {
        address: "7001 Santa Monica Blvd, West Hollywood, CA 90038",
        distance: "6.4 mi",
        id: "west-hollywood",
        name: "Tesla West Hollywood",
        type: "Tesla Advisor",
      },
      {
        address: "4724 Lincoln Blvd, Marina del Rey, CA 90292",
        distance: "9.8 mi",
        id: "marina-del-rey",
        name: "Tesla Marina del Rey",
        type: "Self-Serve Drive",
      },
    ],
    searchTerms: ["90210", "beverly", "los angeles", "west hollywood"],
  },
  {
    address: "San Francisco, CA 94105",
    locations: [
      {
        address: "999 Van Ness Ave, San Francisco, CA 94109",
        distance: "2.1 mi",
        id: "san-francisco",
        name: "Tesla San Francisco",
        type: "Tesla Advisor",
      },
      {
        address: "5000 Shoreline Ct, South San Francisco, CA 94080",
        distance: "8.7 mi",
        id: "south-san-francisco",
        name: "Tesla South San Francisco",
        type: "Self-Serve Drive",
      },
    ],
    searchTerms: ["94105", "san francisco", "bay area", "sfo"],
  },
  {
    address: "Austin, TX 78701",
    locations: [
      {
        address: "12845 Research Blvd, Austin, TX 78750",
        distance: "13.2 mi",
        id: "austin-pond-springs",
        name: "Tesla Austin-Pond Springs",
        type: "Tesla Advisor",
      },
      {
        address: "500 E St Elmo Rd, Austin, TX 78745",
        distance: "7.4 mi",
        id: "austin-st-elmo",
        name: "Tesla Austin-St. Elmo",
        type: "Self-Serve Drive",
      },
    ],
    searchTerms: ["78701", "austin", "texas", "tx"],
  },
  {
    address: "New York, NY 10001",
    locations: [
      {
        address: "860 Washington St, New York, NY 10014",
        distance: "1.6 mi",
        id: "meatpacking",
        name: "Tesla Meatpacking District",
        type: "Tesla Advisor",
      },
      {
        address: "160 Van Brunt St, Brooklyn, NY 11231",
        distance: "5.9 mi",
        id: "brooklyn-red-hook",
        name: "Tesla Brooklyn-Red Hook",
        type: "Self-Serve Drive",
      },
    ],
    searchTerms: ["10001", "new york", "nyc", "manhattan", "brooklyn"],
  },
];

const DRIVE_TIMES = [
  "9:30 AM",
  "10:30 AM",
  "11:30 AM",
  "1:30 PM",
  "2:30 PM",
  "3:30 PM",
  "4:30 PM",
];

function SteeringIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="10.5" />
      <circle cx="16" cy="16" r="2.4" />
      <path d="M6.2 14.8h7.5l2.3 2.4 2.3-2.4h7.5M16 18v8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <rect height="21" rx="2" width="12" x="10" y="5.5" />
      <path d="M14 8h4M14 23.5h4" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M18.3 3.5 8.8 17h6.5l-1.6 11.5L23.4 14h-6.6l1.5-10.5Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.25" />
      <path d="m15.2 15.2 4.3 4.3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect height="16" rx="2" width="18" x="3" y="5" />
      <path d="M7 3v4M17 3v4M3 10h18" />
    </svg>
  );
}

const getUpcomingDates = () => {
  const dates: { day: string; full: string; key: string; weekday: string }[] =
    [];
  const date = new Date();
  date.setHours(12, 0, 0, 0);

  while (dates.length < 5) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() === 0) continue;

    dates.push({
      day: date.toLocaleDateString("en-US", { day: "numeric" }),
      full: date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
        year: "numeric",
      }),
      key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(date.getDate()).padStart(2, "0")}`,
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    });
  }

  return dates;
};

export default function ModelCarDemoDrivePage() {
  const [selectedModelId, setSelectedModelId] = useState<ModelId>("model-y");
  const [addressQuery, setAddressQuery] = useState("");
  const [selectedMarket, setSelectedMarket] = useState<DriveMarket | null>(
    null,
  );
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isAddressFocused, setIsAddressFocused] = useState(false);
  const [isModelGuideOpen, setIsModelGuideOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const locationSectionRef = useRef<HTMLElement>(null);
  const appointmentDates = useMemo(getUpcomingDates, []);
  const selectedModel =
    DRIVE_MODELS.find(({ id }) => id === selectedModelId) ?? DRIVE_MODELS[0];
  const selectedLocation = selectedMarket?.locations.find(
    ({ id }) => id === selectedLocationId,
  );
  const selectedDateLabel = appointmentDates.find(
    ({ key }) => key === selectedDate,
  )?.full;
  const normalizedAddressQuery = addressQuery.toLowerCase().trim();
  const addressSuggestions =
    normalizedAddressQuery.length < 2
      ? []
      : DRIVE_MARKETS.filter(
          ({ address, searchTerms }) =>
            address.toLowerCase().includes(normalizedAddressQuery) ||
            searchTerms.some((term) => term.includes(normalizedAddressQuery)),
        );
  const showAddressSuggestions =
    isAddressFocused && !selectedMarket && normalizedAddressQuery.length >= 2;

  const selectMarket = (market: DriveMarket) => {
    setAddressQuery(market.address);
    setSelectedMarket(market);
    setSelectedLocationId(market.locations[0]?.id ?? "");
    setSelectedDate("");
    setSelectedTime("");
    setIsAddressFocused(false);
    setFormError("");
  };

  const updateField = (field: keyof typeof formValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!formValues.firstName.trim()) nextErrors.firstName = "Required";
    if (!formValues.lastName.trim()) nextErrors.lastName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (formValues.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Enter a valid phone number";
    }

    setFieldErrors(nextErrors);

    if (
      !selectedMarket ||
      !selectedLocation ||
      !selectedDate ||
      !selectedTime
    ) {
      setFormError(
        "Choose an address, drive location, date and time before submitting.",
      );
      locationSectionRef.current?.scrollIntoView?.({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    if (Object.keys(nextErrors).length > 0) {
      setFormError("Review the highlighted driver's details.");
      return;
    }

    setFormError("");
    setIsConfirmationOpen(true);
  };

  const resetDrive = () => {
    setAddressQuery("");
    setSelectedMarket(null);
    setSelectedLocationId("");
    setSelectedDate("");
    setSelectedTime("");
    setFormValues({ email: "", firstName: "", lastName: "", phone: "" });
    setFieldErrors({});
    setIsConfirmationOpen(false);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="tesla-drive-page">
      <Navbar />

      <main id="main-content">
        <div className="tesla-drive-shell">
          <h1>Schedule a Drive</h1>

          <section
            aria-label="What to expect from your drive"
            className="tesla-drive-benefits"
          >
            <article>
              <span className="tesla-drive-benefit-icon">
                <SteeringIcon />
              </span>
              <div>
                <h2>
                  Experience Full Self-Driving (Supervised)<sup>1</sup>
                </h2>
                <p>
                  Let your vehicle drive you almost anywhere under your active
                  supervision.
                </p>
              </div>
            </article>
            <article>
              <span className="tesla-drive-benefit-icon">
                <PhoneIcon />
              </span>
              <div>
                <h2>Do It All Through the App</h2>
                <p>Download the Tesla app to locate and unlock your vehicle.</p>
              </div>
            </article>
            <article>
              <span className="tesla-drive-benefit-icon">
                <BoltIcon />
              </span>
              <div>
                <h2>Easy Check-In</h2>
                <p>
                  Whether you do a self-serve drive or schedule one with a Tesla
                  Advisor, you'll start your drive in minutes.
                </p>
              </div>
            </article>
          </section>

          <section className="tesla-drive-model-section">
            <h2>Select a Model</h2>
            <div className="tesla-drive-model-layout">
              <div className="tesla-drive-model-options">
                {DRIVE_MODELS.map((model) => (
                  <label
                    className={`tesla-drive-model-option ${
                      selectedModelId === model.id
                        ? "tesla-drive-model-option--selected"
                        : ""
                    }`}
                    key={model.id}
                  >
                    <input
                      checked={selectedModelId === model.id}
                      name="drive-model"
                      onChange={() => setSelectedModelId(model.id)}
                      type="radio"
                      value={model.id}
                    />
                    <span>
                      <strong>{model.name}</strong>
                      <small>{model.description}</small>
                    </span>
                  </label>
                ))}
                <button
                  className="tesla-drive-help-button"
                  onClick={() => setIsModelGuideOpen(true)}
                  type="button"
                >
                  <span>Help Me Choose</span>
                  <span aria-hidden="true">ⓘ</span>
                </button>
              </div>

              <picture className="tesla-drive-model-visual">
                <source
                  media="(max-width: 767px)"
                  srcSet={selectedModel.imageMobile}
                />
                <img
                  alt={`${selectedModel.name} driving on the road`}
                  decoding="async"
                  key={selectedModel.id}
                  src={selectedModel.imageDesktop}
                />
              </picture>
            </div>
          </section>

          <section
            className="tesla-drive-location-section"
            id="schedule-location"
            ref={locationSectionRef}
          >
            <h2>Select Location and Time</h2>
            <p>
              Enter or edit your address as needed to find a demo drive location
              nearby and choose a time
            </p>

            <div className="tesla-drive-address-control">
              <SearchIcon />
              <input
                aria-autocomplete="list"
                aria-controls="drive-address-suggestions"
                aria-expanded={showAddressSuggestions}
                aria-label="Search"
                autoComplete="off"
                onBlur={() =>
                  window.setTimeout(() => setIsAddressFocused(false), 120)
                }
                onChange={(event) => {
                  setAddressQuery(event.target.value);
                  setSelectedMarket(null);
                  setSelectedLocationId("");
                  setSelectedDate("");
                  setSelectedTime("");
                }}
                onFocus={() => setIsAddressFocused(true)}
                placeholder="Enter Address"
                role="combobox"
                type="search"
                value={addressQuery}
              />
              {addressQuery && (
                <button
                  aria-label="Clear address"
                  onClick={() => {
                    setAddressQuery("");
                    setSelectedMarket(null);
                    setSelectedLocationId("");
                    setSelectedDate("");
                    setSelectedTime("");
                  }}
                  type="button"
                >
                  ×
                </button>
              )}
              {showAddressSuggestions && (
                <ul
                  aria-label="Select an option"
                  className="tesla-drive-address-suggestions"
                  id="drive-address-suggestions"
                  role="listbox"
                >
                  {addressSuggestions.length > 0 ? (
                    addressSuggestions.map((market) => (
                      <li
                        aria-selected="false"
                        key={market.address}
                        role="option"
                      >
                        <button
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => selectMarket(market)}
                          type="button"
                        >
                          <SearchIcon />
                          {market.address}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li
                      aria-selected="false"
                      className="tesla-drive-address-empty"
                      role="option"
                    >
                      Try a city or ZIP such as 90210, Austin or New York
                    </li>
                  )}
                </ul>
              )}
            </div>

            {selectedMarket && (
              <div className="tesla-drive-appointment-panel">
                <div className="tesla-drive-appointment-heading">
                  <CalendarIcon />
                  <div>
                    <h3>Choose a Location and Time</h3>
                    <p>Drive appointments are approximately 30 minutes.</p>
                  </div>
                </div>

                <fieldset className="tesla-drive-location-options">
                  <legend>Nearby locations</legend>
                  {selectedMarket.locations.map((location) => (
                    <label
                      className={`tesla-drive-location-option ${
                        selectedLocationId === location.id
                          ? "tesla-drive-location-option--selected"
                          : ""
                      }`}
                      key={location.id}
                    >
                      <input
                        checked={selectedLocationId === location.id}
                        name="drive-location"
                        onChange={() => {
                          setSelectedLocationId(location.id);
                          setSelectedDate("");
                          setSelectedTime("");
                        }}
                        type="radio"
                        value={location.id}
                      />
                      <span>
                        <strong>{location.name}</strong>
                        <small>{location.address}</small>
                        <em>
                          {location.distance} · {location.type}
                        </em>
                      </span>
                    </label>
                  ))}
                </fieldset>

                <fieldset className="tesla-drive-date-picker">
                  <legend>Select a date</legend>
                  <div>
                    {appointmentDates.map((date) => (
                      <button
                        aria-pressed={selectedDate === date.key}
                        aria-label={date.full}
                        className={
                          selectedDate === date.key
                            ? "tesla-drive-date--selected"
                            : ""
                        }
                        key={date.key}
                        onClick={() => {
                          setSelectedDate(date.key);
                          setSelectedTime("");
                        }}
                        type="button"
                      >
                        <small>{date.weekday}</small>
                        <strong>{date.day}</strong>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {selectedDate && (
                  <fieldset className="tesla-drive-time-picker">
                    <legend>Available times</legend>
                    <div>
                      {DRIVE_TIMES.map((time) => (
                        <button
                          aria-pressed={selectedTime === time}
                          className={
                            selectedTime === time
                              ? "tesla-drive-time--selected"
                              : ""
                          }
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          type="button"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}
              </div>
            )}
          </section>

          <section className="tesla-drive-details-section">
            <div>
              <h2>Driver's Details</h2>
              <form aria-label="Schedule a drive" onSubmit={handleSubmit}>
                <div className="tesla-drive-fields">
                  <label>
                    <span>First Name</span>
                    <input
                      aria-invalid={Boolean(fieldErrors.firstName)}
                      autoComplete="given-name"
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      type="text"
                      value={formValues.firstName}
                    />
                    {fieldErrors.firstName && (
                      <small>{fieldErrors.firstName}</small>
                    )}
                  </label>
                  <label>
                    <span>Last Name</span>
                    <input
                      aria-invalid={Boolean(fieldErrors.lastName)}
                      autoComplete="family-name"
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      type="text"
                      value={formValues.lastName}
                    />
                    {fieldErrors.lastName && (
                      <small>{fieldErrors.lastName}</small>
                    )}
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input
                      aria-invalid={Boolean(fieldErrors.email)}
                      autoComplete="email"
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      type="email"
                      value={formValues.email}
                    />
                    {fieldErrors.email && <small>{fieldErrors.email}</small>}
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <div className="tesla-drive-phone-field">
                      <select
                        aria-label="Country calling code"
                        defaultValue="US +1"
                      >
                        <option>US +1</option>
                        <option>CA +1</option>
                        <option>GB +44</option>
                        <option>AU +61</option>
                      </select>
                      <input
                        aria-invalid={Boolean(fieldErrors.phone)}
                        aria-label="Phone Number"
                        autoComplete="tel"
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        placeholder="(201) 555-0123"
                        type="tel"
                        value={formValues.phone}
                      />
                    </div>
                    {fieldErrors.phone && <small>{fieldErrors.phone}</small>}
                  </label>
                </div>

                <label className="tesla-drive-energy-checkbox">
                  <input type="checkbox" />
                  <span>Learn about Energy Products</span>
                </label>

                <p className="tesla-drive-terms">
                  By selecting “Submit” I agree to the{" "}
                  <a
                    href="https://www.tesla.com/about/legal"
                    rel="noreferrer"
                    target="_blank"
                  >
                    terms and conditions
                  </a>{" "}
                  and allow Tesla to contact me.
                </p>

                {formError && (
                  <p className="tesla-drive-form-error" role="alert">
                    {formError}
                  </p>
                )}

                <button className="tesla-drive-submit" type="submit">
                  Submit
                </button>
              </form>
            </div>

            <img
              alt={`${selectedModel.name} side profile`}
              className="tesla-drive-form-vehicle"
              decoding="async"
              key={`form-${selectedModel.id}`}
              src={selectedModel.formImage}
            />
          </section>

          <p className="tesla-drive-footnote">
            <sup>1</sup>Full Self-Driving (Supervised) requires the driver to
            remain attentive and does not make the vehicle autonomous.
          </p>
        </div>
      </main>

      <footer className="tesla-drive-footer">
        <nav aria-label="Footer navigation">
          <a href="https://www.tesla.com/about">Tesla © 2026</a>
          <a href="https://www.tesla.com/about/legal">Privacy &amp; Legal</a>
          <a href="https://www.tesla.com/contact">Contact</a>
          <a href="https://www.tesla.com/careers">Careers</a>
          <a href="https://www.tesla.com/updates">Get Newsletter</a>
          <a href="/findus">Locations</a>
        </nav>
      </footer>

      <div className="tesla-drive-mobile-schedule">
        <span>
          <small>Model</small>
          <strong>{selectedModel.name.replace("Model ", "")}</strong>
        </span>
        <button
          onClick={() =>
            locationSectionRef.current?.scrollIntoView?.({
              behavior: "smooth",
              block: "start",
            })
          }
          type="button"
        >
          Schedule
        </button>
      </div>

      <button
        aria-expanded={isChatOpen}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        className="tesla-drive-chat-button"
        onClick={() => setIsChatOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span aria-hidden="true">◌◌◌</span>
      </button>

      {isChatOpen && (
        <aside
          aria-label="Tesla support chat"
          className="tesla-drive-chat-panel"
        >
          <button
            aria-label="Close chat"
            onClick={() => setIsChatOpen(false)}
            type="button"
          >
            ×
          </button>
          <strong>Chat with us</strong>
          <p>How can we help with your drive?</p>
          <a href="#schedule-location">Find a location</a>
          <a
            href="https://www.tesla.com/support"
            rel="noreferrer"
            target="_blank"
          >
            Visit Support
          </a>
        </aside>
      )}

      {isModelGuideOpen && (
        <div className="tesla-drive-modal-backdrop">
          <section
            aria-labelledby="drive-model-guide-title"
            aria-modal="true"
            className="tesla-drive-model-guide"
            role="dialog"
          >
            <button
              aria-label="Close model guide"
              className="tesla-drive-modal-close"
              onClick={() => setIsModelGuideOpen(false)}
              type="button"
            >
              ×
            </button>
            <h2 id="drive-model-guide-title">Find Your Tesla</h2>
            <p>Choose the vehicle that best fits how you drive.</p>
            <div>
              {DRIVE_MODELS.map((model, index) => (
                <article key={model.id}>
                  <small>{index === 0 ? "Most versatile" : "Explore"}</small>
                  <h3>{model.name}</h3>
                  <p>{model.description}</p>
                  <button
                    onClick={() => {
                      setSelectedModelId(model.id);
                      setIsModelGuideOpen(false);
                    }}
                    type="button"
                  >
                    Select {model.name}
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      {isConfirmationOpen && selectedLocation && selectedDateLabel && (
        <div className="tesla-drive-modal-backdrop">
          <section
            aria-labelledby="drive-confirmation-title"
            aria-modal="true"
            className="tesla-drive-confirmation"
            role="dialog"
          >
            <span aria-hidden="true" className="tesla-drive-confirmation-mark">
              ✓
            </span>
            <h2 id="drive-confirmation-title">Your Drive Is Scheduled</h2>
            <p>
              Thanks, {formValues.firstName}. Your {selectedModel.name} drive
              details are ready.
            </p>
            <dl>
              <div>
                <dt>When</dt>
                <dd>
                  {selectedDateLabel} at {selectedTime}
                </dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>
                  {selectedLocation.name}
                  <small>{selectedLocation.address}</small>
                </dd>
              </div>
            </dl>
            <p className="tesla-drive-demo-note">
              This is a local demo confirmation. No appointment or personal
              information was sent to Tesla.
            </p>
            <button onClick={resetDrive} type="button">
              Schedule Another Drive
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
