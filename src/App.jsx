import CybertruckSectionBox from "./components/mainpage_component/CybertruckSectionBox";
import SectionBox from "./components/mainpage_component/SectionBox";
import Navbar from "./components/navbar_components/Navbar";
import { cyberTruckList, mainPageList } from "./data/mainpage_data";

function App() {
  return (
    <>
      <Navbar isDetail={false} isWhiteText={false}/>
      {mainPageList.map((e, index) => <SectionBox dataList={e} key={index}/>)}
      <CybertruckSectionBox dataList={cyberTruckList}/>
  </>
  );
}

export default App;