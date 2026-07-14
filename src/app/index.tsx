import { BrowserRouter, Route, Routes } from "react-router-dom";

import { cybertruckData, mainPageList } from "../data/main-page-data";
import CybertruckLearnPage from "./cybertruck/learn/page";
import CybertruckOrderPage from "./cybertruck/order/page";
import HomePage from "./home/page";
import ModelCarDemoDrivePage from "./vehicles/demo-drive/page";
import ModelCarOrderPage from "./vehicles/order/page";

export default function TeslaApp() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
