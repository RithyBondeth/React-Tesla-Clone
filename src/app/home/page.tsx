import AnnouncementBar from "../../components/home/announcement-bar";
import CybertruckSectionBox from "../../components/home/cybertruck-section-box";
import EnergyEcosystem from "../../components/home/energy-ecosystem";
import SectionBox from "../../components/home/section-box";
import SiteFooter from "../../components/home/site-footer";
import VehicleLineup from "../../components/home/vehicle-lineup";
import Navbar from "../../components/navbar";
import { cybertruckData, mainPageList } from "../../data/main-page-data";

const FEATURED_VEHICLES = [
  {
    highlights: [
      { label: "Range (EPA est.)", value: "321 mi" },
      { label: "Safety Rating", value: "5-Star" },
      { label: "Cargo Space", value: "74 cu ft" },
    ],
    promotion: "Lease From $459/mo",
    supportingText: "Electric midsize SUV",
    vehicle: mainPageList[1],
  },
  {
    highlights: [
      { label: "Range (EPA est.)", value: "321 mi" },
      { label: "0–60 mph", value: "5.8 s" },
      { label: "Cargo Space", value: "24 cu ft" },
    ],
    promotion: "0.99% APR Available",
    supportingText: "Sports electric sedan",
    vehicle: mainPageList[0],
  },
];

export default function HomePage() {
  return (
    <div id="top">
      <AnnouncementBar />
      <Navbar hasAnnouncement />

      <main>
        <div id="vehicles">
          {FEATURED_VEHICLES.map((content, index) => (
            <SectionBox
              highlights={content.highlights}
              key={content.vehicle.title}
              promotion={content.promotion}
              showScrollCue={index === 0}
              supportingText={content.supportingText}
              vehicle={content.vehicle}
            />
          ))}
          <CybertruckSectionBox cybertruck={cybertruckData} />
        </div>

        <VehicleLineup vehicles={mainPageList.slice(2)} />
        <EnergyEcosystem />
      </main>

      <SiteFooter />
    </div>
  );
}
