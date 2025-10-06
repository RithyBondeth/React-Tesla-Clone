import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { cyberTruckList, mainPageList } from './data/mainpage_data';
import ModelCarDetailPage from './pages/detail_pages/modelcar_page/ModelCarDetailPage';
import CybertruckDetailPage from './pages/detail_pages/cybertruck_page/CybertruckDetailPage';
import CybertruckLearnMorePage from './pages/detail_pages/cybertruck_page/CybertruckLearnMorePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        {/* Model Car Detail Page: Order Now */}
        <Route path="/order_now_model3" element={<ModelCarDetailPage dataList={mainPageList[0]} slideClickIndex={{forward: 1, back: 2}} />}/>
        <Route path="/order_now_modely" element={<ModelCarDetailPage dataList={mainPageList[1]} slideClickIndex={{forward: 1, back: 2}} />}/>
        <Route path="/order_now_modelx" element={<ModelCarDetailPage dataList={mainPageList[2]} slideClickIndex={{forward: 2, back: 3}} />}/>
        <Route path="/order_now_models" element={<ModelCarDetailPage dataList={mainPageList[3]} slideClickIndex={{forward: 2, back: 3}} />}/>
    
        {/* Model Car Detail Page: Demo Drive */}

        {/* Cybertruck Detail Page: Order Now */}
        <Route path="/order_now_cybertruck" element={<CybertruckDetailPage dataList={cyberTruckList}/>}/>
        <Route path="/learn_more_cybertruck" element={<CybertruckLearnMorePage dataList={cyberTruckList}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

