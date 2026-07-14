import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { cybertruckData, mainPageList } from "../data/main-page-data";
import HomePage from "./home/page";
import NotFoundPage from "./not-found/page";

const CybertruckLearnPage = lazy(() => import("./cybertruck/learn/page"));
const CybertruckOrderPage = lazy(() => import("./cybertruck/order/page"));
const EnergyPage = lazy(() => import("./energy/page"));
const FsdPage = lazy(() => import("./fsd/page"));
const MegapackPage = lazy(() => import("./megapack/page"));
const PowerwallPage = lazy(() => import("./powerwall/page"));
const ModelCarDemoDrivePage = lazy(() => import("./vehicles/demo-drive/page"));
const ModelCarOrderPage = lazy(() => import("./vehicles/order/page"));

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
                vehicle={mainPageList[1]}
              />
            }
            path="/order_now_modely"
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
                vehicle={mainPageList[3]}
              />
            }
            path="/order_now_models"
          />
          <Route element={<ModelCarDemoDrivePage />} path="/demo_drive" />
          <Route
            element={<CybertruckOrderPage cybertruck={cybertruckData} />}
            path="/order_now_cybertruck"
          />
          <Route
            element={<CybertruckLearnPage cybertruck={cybertruckData} />}
            path="/learn_more_cybertruck"
          />
          <Route element={<EnergyPage />} path="/energy" />
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
