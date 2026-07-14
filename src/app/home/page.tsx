import AnnouncementBar from "../../components/home/announcement-bar";
import CybertruckSectionBox from "../../components/home/cybertruck-section-box";
import EnergyEcosystem from "../../components/home/energy-ecosystem";
import OwnershipExperience from "../../components/home/ownership-experience";
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
    imageHeight: 1045,
    promotion: "0% APR Available",
    supportingText: "Electric midsize SUV",
    vehicle: mainPageList[1],
  },
  {
    highlights: [
      { label: "Range (EPA est.)", value: "321 mi" },
      { label: "0–60 mph", value: "5.8 s" },
      { label: "Cargo Space", value: "24 cu ft" },
    ],
    imageHeight: 815,
    promotion: "Lease From $329/mo",
    supportingText: "Sports electric sedan",
    vehicle: mainPageList[0],
  },
];

export default function HomePage() {
  return (
    <div id="top">
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-white px-4 py-2 text-sm font-semibold text-[#171a20] shadow transition focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar hasAnnouncement />

      <main id="main-content">
        <div id="vehicles">
          {FEATURED_VEHICLES.map((content, index) => (
            <SectionBox
              highlights={content.highlights}
              imageHeight={content.imageHeight}
              isPriority={index === 0}
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
        <OwnershipExperience />
        <EnergyEcosystem />
      </main>

      <SiteFooter />
    </div>
  );
}
