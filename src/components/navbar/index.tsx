import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { menuList } from "../../data/navbar-data";
import MenuBox from "./menu-box";
import type { NavbarProps } from "./props";

const MOBILE_MENU_PATHS: Record<string, string> = {
  Charging: "/#charging",
  Discover: "/#discover",
  Energy: "/energy",
  Shop: "/#energy",
  Vehicles: "/#vehicles",
};

export default function Navbar({
  hasAnnouncement = false,
  isDetail = false,
  isWhiteText = false,
  isBlurred = false,
}: NavbarProps) {
  const [activeMenuName, setActiveMenuName] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [usesWhiteText, setUsesWhiteText] = useState(isWhiteText);

  useEffect(() => {
    let animationFrame = 0;

    const updateNavigation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 32);
      });
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateNavigation);
    };
  }, []);

  useEffect(() => {
    setUsesWhiteText(isWhiteText);
  }, [isWhiteText]);

  useEffect(() => {
    const shouldLockScroll = Boolean(activeMenuName || isMobileMenuOpen);
    const previousOverflow = document.body.style.overflow;

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMenuName, isMobileMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenuName(null);
        setIsMobileMenuOpen(false);
        setUsesWhiteText(isWhiteText);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isWhiteText]);

  const closeMenus = () => {
    setActiveMenuName(null);
    setIsMobileMenuOpen(false);
    setUsesWhiteText(isWhiteText);
  };

  const navTextColor = usesWhiteText ? "text-white" : "text-[#171a20]";

  return (
    <>
      <nav
        className={`fixed inset-x-0 z-50 flex h-16 items-center justify-between px-3 transition sm:px-5 ${
          hasAnnouncement ? "top-12" : "top-0"
        } ${
          activeMenuName || isMobileMenuOpen || isScrolled
            ? "bg-white/90 shadow-sm backdrop-blur-xl"
            : isBlurred
              ? usesWhiteText
                ? "bg-black/35 backdrop-blur-xl"
                : "bg-white/90 shadow-sm backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <Link aria-label="Tesla clone home" onClick={closeMenus} to="/">
          <img
            alt="Tesla"
            className={`h-12 w-[112px] object-contain ${usesWhiteText && !activeMenuName && !isMobileMenuOpen && !isScrolled ? "invert" : ""}`}
            decoding="async"
            height="48"
            src="/assets/tesla-logo.png"
            width="112"
          />
        </Link>

        {!isDetail && (
          <div className="hidden items-center lg:flex">
            {menuList.map((menu) => (
              <button
                className={`rounded px-3 py-1.5 text-sm font-semibold transition hover:bg-black/5 ${
                  activeMenuName || isScrolled ? "text-[#171a20]" : navTextColor
                }`}
                key={menu.name}
                onFocus={() => {
                  setActiveMenuName(menu.name);
                  setUsesWhiteText(false);
                }}
                onMouseEnter={() => {
                  setActiveMenuName(menu.name);
                  setUsesWhiteText(false);
                }}
                type="button"
              >
                {menu.name}
              </button>
            ))}
          </div>
        )}

        <div
          className={`flex items-center ${activeMenuName || isMobileMenuOpen || isScrolled ? "text-[#171a20]" : navTextColor}`}
        >
          {!isDetail && (
            <>
              <a
                aria-label="Tesla support"
                className="hidden rounded p-1.5 transition hover:bg-black/5 lg:inline-flex"
                href="https://www.tesla.com/support"
                rel="noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="text-lg font-semibold">
                  ?
                </span>
              </a>
              <button
                aria-label="Choose region"
                className="hidden rounded p-1.5 transition hover:bg-black/5 lg:inline-flex"
                type="button"
              >
                <span aria-hidden="true" className="text-xl">
                  ◎
                </span>
              </button>
              <button
                aria-label="Tesla account"
                className="hidden rounded p-1.5 transition hover:bg-black/5 lg:inline-flex"
                type="button"
              >
                <span aria-hidden="true" className="text-xl">
                  ◯
                </span>
              </button>
            </>
          )}

          {isDetail ? (
            <button
              className="flex items-center gap-1 rounded px-2 py-1.5 text-sm font-semibold transition hover:bg-black/5"
              type="button"
            >
              <span aria-hidden="true" className="text-xl">
                ◎
              </span>
              <span>US</span>
            </button>
          ) : (
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="rounded bg-black/5 px-3 py-1.5 text-sm font-semibold backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              type="button"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          )}
        </div>
      </nav>

      {activeMenuName && (
        <>
          <MenuBox
            hasAnnouncement={hasAnnouncement}
            menuList={menuList}
            menuName={activeMenuName}
          />
          <div
            aria-hidden="true"
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onMouseEnter={closeMenus}
          />
        </>
      )}

      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 overflow-y-auto bg-white px-6 pb-10 ${
            hasAnnouncement ? "pt-28" : "pt-20"
          }`}
        >
          <ul className="space-y-1">
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  className="flex items-center justify-between rounded-lg px-4 py-4 text-xl font-semibold text-[#171a20] transition hover:bg-[#f4f4f4]"
                  onClick={closeMenus}
                  to={MOBILE_MENU_PATHS[menu.name]}
                >
                  {menu.name}
                  <span aria-hidden="true" className="text-2xl">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-2 border-t border-black/10 pt-6 text-sm font-semibold text-[#171a20]">
            <a
              className="rounded-lg px-4 py-3 hover:bg-[#f4f4f4]"
              href="https://www.tesla.com/support"
              rel="noreferrer"
              target="_blank"
            >
              Support
            </a>
            <button
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-[#f4f4f4]"
              type="button"
            >
              <span aria-hidden="true" className="text-xl">
                ◎
              </span>
              United States · English
            </button>
          </div>
        </div>
      )}
    </>
  );
}
