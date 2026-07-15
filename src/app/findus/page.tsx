import { useEffect, useMemo, useRef, useState } from "react";
import L, { type LayerGroup, type Map as LeafletMap } from "leaflet";

import {
  DESTINATION_CHARGER_SITES,
  SUPERCHARGER_SITES,
} from "../../components/home/tesla-homepage";
import Navbar from "../../components/navbar";
import "leaflet/dist/leaflet.css";

type NetworkCategory = "supercharger" | "destination" | "service" | "store";

type NetworkLocation = {
  category: NetworkCategory;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
};

const CATEGORY_DETAILS: Record<
  NetworkCategory,
  { color: string; label: string }
> = {
  destination: { color: "#73767b", label: "Destination Chargers" },
  service: { color: "#3e6ae1", label: "Service Centers" },
  store: { color: "#d09d19", label: "Stores and Galleries" },
  supercharger: { color: "#e82127", label: "Superchargers" },
};

const SUPERCHARGER_LOCATIONS: NetworkLocation[] = SUPERCHARGER_SITES.map(
  ([name, latitude, longitude], index) => ({
    category: "supercharger",
    id: `supercharger-${index}`,
    latitude,
    longitude,
    name: `${name} Supercharger`,
  }),
);

const DESTINATION_LOCATIONS: NetworkLocation[] = DESTINATION_CHARGER_SITES.map(
  ([name, latitude, longitude], index) => ({
    category: "destination",
    id: `destination-${index}`,
    latitude,
    longitude,
    name: `${name} Destination Charging`,
  }),
);

const SERVICE_LOCATIONS: NetworkLocation[] = SUPERCHARGER_SITES.filter(
  (_, index) => index % 4 === 0,
).map(([name, latitude, longitude], index) => ({
  category: "service",
  id: `service-${index}`,
  latitude: latitude + 0.08,
  longitude: longitude - 0.08,
  name: `${name} Service Center`,
}));

const STORE_LOCATIONS: NetworkLocation[] = SUPERCHARGER_SITES.filter(
  (_, index) => index % 5 === 1,
).map(([name, latitude, longitude], index) => ({
  category: "store",
  id: `store-${index}`,
  latitude: latitude - 0.06,
  longitude: longitude + 0.09,
  name: `${name} Tesla Store`,
}));

const SEARCH_LOCATIONS = [
  ...SUPERCHARGER_LOCATIONS,
  ...DESTINATION_LOCATIONS,
  ...SERVICE_LOCATIONS,
  ...STORE_LOCATIONS,
];

const MARKER_OFFSETS = [
  [0, 0],
  [0.18, 0.28],
  [-0.2, 0.22],
  [0.12, -0.31],
  [-0.17, -0.24],
] as const;

const MAP_LOCATIONS = SEARCH_LOCATIONS.flatMap((location) => {
  const markerCount =
    location.category === "supercharger"
      ? 5
      : location.category === "destination"
        ? 3
        : 1;

  return MARKER_OFFSETS.slice(0, markerCount).map(
    ([latitudeOffset, longitudeOffset], index) => ({
      ...location,
      id: `${location.id}-${index}`,
      latitude: location.latitude + latitudeOffset,
      longitude: location.longitude + longitudeOffset,
    }),
  );
});

function NetworkMap({
  activeCategories,
  selectedLocation,
}: {
  activeCategories: NetworkCategory[];
  selectedLocation: NetworkLocation | null;
}) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerLayerRef = useRef<LayerGroup | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const mobileQuery = window.matchMedia("(max-width: 599px)");
    const map = L.map(canvasRef.current, {
      center: [38.4, -97.2],
      maxBounds: [
        [5, -174],
        [76, -40],
      ],
      minZoom: 3,
      scrollWheelZoom: true,
      zoom: mobileQuery.matches ? 3 : 4,
      zoomControl: false,
    });
    const markerLayer = L.layerGroup().addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const resetView = () => {
      map.invalidateSize();
      map.setView([38.4, -97.2], mobileQuery.matches ? 3 : 4, {
        animate: false,
      });
    };
    const initialViewFrame = window.requestAnimationFrame(resetView);

    mapRef.current = map;
    markerLayerRef.current = markerLayer;
    mobileQuery.addEventListener("change", resetView);

    return () => {
      window.cancelAnimationFrame(initialViewFrame);
      mobileQuery.removeEventListener("change", resetView);
      map.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const markerLayer = markerLayerRef.current;
    if (!markerLayer || !L.Browser.svg) return;

    markerLayer.clearLayers();
    MAP_LOCATIONS.filter((location) =>
      activeCategories.includes(location.category),
    ).forEach((location) => {
      const category = CATEGORY_DETAILS[location.category];
      L.circleMarker([location.latitude, location.longitude], {
        color: "#fff",
        fillColor: category.color,
        fillOpacity: 0.92,
        radius: location.category === "supercharger" ? 2.5 : 2.25,
        weight: 0.6,
      })
        .bindTooltip(location.name, { direction: "top" })
        .addTo(markerLayer);
    });
  }, [activeCategories]);

  useEffect(() => {
    if (!selectedLocation || !mapRef.current) return;
    mapRef.current.flyTo(
      [selectedLocation.latitude, selectedLocation.longitude],
      10,
      { duration: 0.8 },
    );
  }, [selectedLocation]);

  return (
    <div
      aria-label="Interactive Tesla location map"
      className="tesla-findus-map"
      ref={canvasRef}
      role="region"
    />
  );
}

export default function FindUsPage() {
  const [activeCategories, setActiveCategories] = useState<NetworkCategory[]>([
    "supercharger",
    "destination",
    "service",
    "store",
  ]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] =
    useState<NetworkLocation | null>(null);

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return SEARCH_LOCATIONS.filter((location) =>
      location.name.toLowerCase().includes(normalizedQuery),
    ).slice(0, 6);
  }, [query]);

  const toggleCategory = (category: NetworkCategory) => {
    setActiveCategories((categories) =>
      categories.includes(category)
        ? categories.filter((item) => item !== category)
        : [...categories, category],
    );
  };

  const chooseLocation = (location: NetworkLocation) => {
    setQuery(location.name);
    setSelectedLocation(location);
  };

  return (
    <div className="tesla-findus-page">
      <Navbar />
      <main className="tesla-findus-main" id="main-content">
        <NetworkMap
          activeCategories={activeCategories}
          selectedLocation={selectedLocation}
        />

        <div className="tesla-findus-controls">
          <div className="tesla-findus-search-wrap">
            <span aria-hidden="true" className="tesla-findus-search-icon" />
            <label className="sr-only" htmlFor="findus-location">
              Enter Location
            </label>
            <input
              autoComplete="off"
              id="findus-location"
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedLocation(null);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && searchResults[0]) {
                  chooseLocation(searchResults[0]);
                }
              }}
              placeholder="Enter Location"
              type="search"
              value={query}
            />

            {searchResults.length > 0 && !selectedLocation && (
              <ul className="tesla-findus-results">
                {searchResults.map((location) => (
                  <li key={location.id}>
                    <button
                      onClick={() => chooseLocation(location)}
                      type="button"
                    >
                      <span>{location.name}</span>
                      <small>{CATEGORY_DETAILS[location.category].label}</small>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            aria-expanded={isFilterOpen}
            aria-label="Filter locations"
            className="tesla-findus-filter-button"
            onClick={() => setIsFilterOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true" className="tesla-findus-filter-icon">
              <i />
              <i />
              <i />
            </span>
          </button>

          {isFilterOpen && (
            <div className="tesla-findus-filter-panel">
              <div>
                <h2>Locations</h2>
                <button
                  aria-label="Close filters"
                  onClick={() => setIsFilterOpen(false)}
                  type="button"
                >
                  ×
                </button>
              </div>
              {(
                Object.entries(CATEGORY_DETAILS) as Array<
                  [NetworkCategory, (typeof CATEGORY_DETAILS)[NetworkCategory]]
                >
              ).map(([category, details]) => (
                <label key={category}>
                  <input
                    checked={activeCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    type="checkbox"
                  />
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: details.color }}
                  />
                  {details.label}
                </label>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
