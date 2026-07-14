import CybertruckSectionBox from "../../components/home/cybertruck-section-box";
import SectionBox from "../../components/home/section-box";
import Navbar from "../../components/navbar";
import { cybertruckData, mainPageList } from "../../data/main-page-data";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {mainPageList.map((vehicle) => (
        <SectionBox key={vehicle.title} vehicle={vehicle} />
      ))}
      <CybertruckSectionBox cybertruck={cybertruckData} />
    </>
  );
}
