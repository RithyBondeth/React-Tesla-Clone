import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { cybertruckData, mainPageList } from "../data/main-page-data";
import HomePage from "./home/page";
import NotFoundPage from "./not-found/page";

const CybertruckLearnPage = lazy(() => import("./cybertruck/learn/page"));
const CybertruckOrderPage = lazy(() => import("./cybertruck/order/page"));
const ChargingPage = lazy(() => import("./charging/page"));
const EnergyPage = lazy(() => import("./energy/page"));
const FindUsPage = lazy(() => import("./findus/page"));
const FsdPage = lazy(() => import("./fsd/page"));
const MegapackPage = lazy(() => import("./megapack/page"));
const PowerwallPage = lazy(() => import("./powerwall/page"));
const ModelCarDemoDrivePage = lazy(() => import("./vehicles/demo-drive/page"));
const InventoryPage = lazy(() => import("./vehicles/inventory/page"));
const InventoryVehicleDetailPage = lazy(
  () => import("./vehicles/inventory/detail-page"),
);
const ModelCarOrderPage = lazy(() => import("./vehicles/order/page"));

const DEFAULT_DESCRIPTION =
  "Explore new and pre-owned electric vehicles, charging and clean energy in this independent Tesla-inspired frontend experience.";
const SOCIAL_IMAGE_PATH = "/assets/tesla-official/social-preview.jpg";

const pageMetadata = [
  {
    description:
      "Find Tesla Superchargers, Destination Chargers, service centers and stores near you.",
    paths: ["/findus"],
    title: "Find Us | Tesla Clone",
  },
  {
    description:
      "Learn how to charge a Tesla at home, on the road and across the Supercharger network.",
    paths: ["/charging"],
    title: "Charging | Tesla Clone",
  },
  {
    description:
      "Browse new and pre-owned electric vehicles by model, trim, price, range and configuration.",
    paths: ["/inventory"],
    title: "Tesla Inventory | New & Pre-Owned Electric Vehicles",
  },
  {
    description:
      "Explore Model 3 design, range, performance and available configurations.",
    paths: ["/model-3", "/order_now_model3"],
    title: "Model 3 | Tesla Clone",
  },
  {
    description:
      "Explore Model Y design, range, performance and available configurations.",
    paths: ["/model-y", "/order_now_modely"],
    title: "Model Y | Tesla Clone",
  },
  {
    description:
      "Explore Model S design, range, performance and available configurations.",
    paths: ["/model-s", "/order_now_models"],
    title: "Model S | Tesla Clone",
  },
  {
    description:
      "Explore Model X design, range, performance and available configurations.",
    paths: ["/model-x", "/order_now_modelx"],
    title: "Model X | Tesla Clone",
  },
  {
    description:
      "Explore Cybertruck utility, performance and available configurations.",
    paths: ["/learn_more_cybertruck", "/order_now_cybertruck"],
    title: "Cybertruck | Tesla Clone",
  },
  {
    description:
      "Discover solar, battery storage and clean-energy products for your home.",
    paths: ["/energy", "/powerwall", "/megapack"],
    title: "Energy Products | Tesla Clone",
  },
  {
    description:
      "Learn about Full Self-Driving (Supervised) and Tesla driver-assistance features.",
    paths: ["/fsd", "/self-driving"],
    title: "Full Self-Driving | Tesla Clone",
  },
  {
    description: "Schedule a demo drive and experience a Tesla vehicle.",
    paths: ["/drive", "/demo_drive"],
    title: "Schedule a Drive | Tesla Clone",
  },
];

function DocumentMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata.find(({ paths }) =>
      paths.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`),
      ),
    ) ?? {
      description: DEFAULT_DESCRIPTION,
      title: "Tesla Clone | Electric Vehicles & Clean Energy",
    };
    const canonicalUrl = `${window.location.origin}${pathname}`;
    const socialImageUrl = `${window.location.origin}${SOCIAL_IMAGE_PATH}`;
    const setMetaContent = (
      attribute: "name" | "property",
      value: string,
      content: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${value}"]`,
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.append(element);
      }

      element.setAttribute("content", content);
    };

    document.title = metadata.title;
    setMetaContent("name", "description", metadata.description);
    setMetaContent("property", "og:title", metadata.title);
    setMetaContent("property", "og:description", metadata.description);
    setMetaContent("property", "og:url", canonicalUrl);
    setMetaContent("property", "og:image", socialImageUrl);
    setMetaContent("name", "twitter:title", metadata.title);
    setMetaContent("name", "twitter:description", metadata.description);
    setMetaContent("name", "twitter:image", socialImageUrl);

    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.append(canonicalLink);
    }

    canonicalLink.href = canonicalUrl;
  }, [pathname]);

  return null;
}

function RouteFallback() {
  return (
    <div
      aria-label="Loading page"
      className="flex min-h-screen items-center justify-center bg-[#f4f4f4]"
      role="status"
    >
      <div className="h-1 w-28 overflow-hidden rounded-full bg-black/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#171a20]" />
      </div>
    </div>
  );
}

export default function TeslaApp() {
  return (
    <BrowserRouter>
      <DocumentMetadata />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 2, forward: 1 }}
                vehicle={mainPageList[0]}
              />
            }
            path="/order_now_model3"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 2, forward: 1 }}
                vehicle={mainPageList[0]}
              />
            }
            path="/model-3"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 2, forward: 1 }}
                vehicle={mainPageList[1]}
              />
            }
            path="/order_now_modely"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 2, forward: 1 }}
                vehicle={mainPageList[1]}
              />
            }
            path="/model-y"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 3, forward: 2 }}
                vehicle={mainPageList[2]}
              />
            }
            path="/order_now_modelx"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 3, forward: 2 }}
                vehicle={mainPageList[2]}
              />
            }
            path="/model-x"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 3, forward: 2 }}
                vehicle={mainPageList[3]}
              />
            }
            path="/order_now_models"
          />
          <Route
            element={
              <ModelCarOrderPage
                slideClickIndex={{ back: 3, forward: 2 }}
                vehicle={mainPageList[3]}
              />
            }
            path="/model-s"
          />
          <Route element={<ModelCarDemoDrivePage />} path="/drive" />
          <Route element={<ModelCarDemoDrivePage />} path="/demo_drive" />
          <Route element={<InventoryPage />} path="/inventory" />
          <Route element={<InventoryPage />} path="/inventory/:condition" />
          <Route
            element={<InventoryVehicleDetailPage />}
            path="/inventory/vehicle/:vehicleId"
          />
          <Route
            element={<CybertruckOrderPage cybertruck={cybertruckData} />}
            path="/order_now_cybertruck"
          />
          <Route
            element={<CybertruckLearnPage cybertruck={cybertruckData} />}
            path="/learn_more_cybertruck"
          />
          <Route element={<EnergyPage />} path="/energy" />
          <Route element={<FindUsPage />} path="/findus" />
          <Route element={<ChargingPage />} path="/charging" />
          <Route element={<FsdPage />} path="/fsd" />
          <Route element={<FsdPage />} path="/self-driving" />
          <Route element={<PowerwallPage />} path="/powerwall" />
          <Route element={<MegapackPage />} path="/megapack" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
