import AnnouncementBar from "../../components/home/announcement-bar";
import EnergyEcosystem from "../../components/home/energy-ecosystem";
import HeroCarousel from "../../components/home/hero-carousel";
import SiteFooter from "../../components/home/site-footer";
import VehicleLineup from "../../components/home/vehicle-lineup";
import Navbar from "../../components/navbar";
import { mainPageList } from "../../data/main-page-data";

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
        <HeroCarousel />
        <VehicleLineup vehicles={mainPageList.slice(0, 2)} />
        <EnergyEcosystem />
      </main>

      <SiteFooter />
    </div>
  );
}
