import TeslaHomepage from "../../components/home/tesla-homepage";
import Navbar from "../../components/navbar";

export default function HomePage() {
  return (
    <div className="tesla-home-page" id="top">
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-white px-4 py-2 text-sm font-semibold text-[#171a20] shadow transition focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar isWhiteText />
      <TeslaHomepage />
    </div>
  );
}
