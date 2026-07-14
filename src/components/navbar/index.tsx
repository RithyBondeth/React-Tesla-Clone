import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { menuList } from "../../data/navbar-data";
import MenuBox from "./menu-box";
import type { NavbarProps } from "./props";

const DESKTOP_MENU_QUERY = "(min-width: 1200px)";

function SupportIcon() {
  return (
    <span
      aria-hidden="true"
      className="grid h-5 w-5 place-items-center rounded-full border-[1.5px] border-current text-[13px] font-medium leading-none"
    >
      ?
    </span>
  );
}

function GlobeIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-5 w-5 rounded-full border-[1.5px] border-current"
    >
      <span className="absolute inset-x-[2px] top-1/2 border-t border-current" />
      <span className="absolute -inset-y-px left-[5px] right-[5px] rounded-[50%] border-x border-current" />
    </span>
  );
}

function AccountIcon() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-5 w-5 rounded-full border-[1.5px] border-current"
    >
      <span className="absolute left-1/2 top-[3px] h-[5px] w-[5px] -translate-x-1/2 rounded-full border border-current" />
      <span className="absolute bottom-[2px] left-1/2 h-[6px] w-[11px] -translate-x-1/2 rounded-t-full border border-b-0 border-current" />
    </span>
  );
}

export default function Navbar({
  hasAnnouncement = false,
  isDetail = false,
  isWhiteText = false,
  isBlurred = false,
}: NavbarProps) {
  const [activeMenuName, setActiveMenuName] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuName, setMobileMenuName] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const cancelScheduledClose = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeDesktopMenu = useCallback(() => {
    cancelScheduledClose();
    setActiveMenuName(null);
  }, [cancelScheduledClose]);

  const scheduleDesktopClose = useCallback(() => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenuName(null);
      closeTimerRef.current = null;
    }, 120);
  }, [cancelScheduledClose]);

  const openDesktopMenu = useCallback(
    (menuName: string) => {
      cancelScheduledClose();
      setActiveMenuName(menuName);
    },
    [cancelScheduledClose],
  );

  useEffect(() => {
    let animationFrame = 0;

    const updateNavigation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 16);
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
    const desktopMenuQuery = window.matchMedia(DESKTOP_MENU_QUERY);
    const closeInactiveMenu = () => {
      if (desktopMenuQuery.matches) {
        setIsMobileMenuOpen(false);
        setMobileMenuName(null);
      } else {
        setActiveMenuName(null);
      }
    };

    desktopMenuQuery.addEventListener("change", closeInactiveMenu);
    return () =>
      desktopMenuQuery.removeEventListener("change", closeInactiveMenu);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDesktopMenu();
        setIsMobileMenuOpen(false);
        setMobileMenuName(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [closeDesktopMenu]);

  useEffect(
    () => () => {
      cancelScheduledClose();
    },
    [cancelScheduledClose],
  );

  const closeMenus = () => {
    closeDesktopMenu();
    setIsMobileMenuOpen(false);
    setMobileMenuName(null);
  };

  const isSolidNavigation = Boolean(
    activeMenuName || isMobileMenuOpen || isScrolled,
  );
  const usesLightForeground = isWhiteText && !isSolidNavigation;
  const foregroundClass = usesLightForeground ? "text-white" : "text-[#171a20]";
  const activeMobileMenu = menuList.find(
    (menu) => menu.name === mobileMenuName,
  );
  const headerTop = hasAnnouncement ? "top-12" : "top-0";

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 h-14 transition-[background-color,color,box-shadow] duration-300 ${headerTop} ${
          isSolidNavigation
            ? "bg-white"
            : isBlurred
              ? "bg-black/[0.08] backdrop-blur-[2px]"
              : "bg-transparent"
        } ${foregroundClass}`}
        onMouseLeave={scheduleDesktopClose}
      >
        <nav
          aria-label="Primary navigation"
          className="grid h-full grid-cols-[1fr_auto] items-center px-3 sm:px-5 min-[1200px]:grid-cols-[1fr_auto_1fr] min-[1200px]:px-8"
        >
          <Link
            aria-label="Tesla home"
            className="flex h-8 w-[120px] items-center justify-self-start rounded-sm focus-visible:outline-offset-4"
            onClick={closeMenus}
            onFocus={closeDesktopMenu}
            onMouseEnter={closeDesktopMenu}
            to="/"
          >
            <img
              alt="Tesla"
              className={`h-auto w-[120px] transition duration-300 ${
                usesLightForeground ? "invert" : ""
              }`}
              decoding="async"
              height="16"
              src="/assets/tesla-wordmark.png"
              width="120"
            />
          </Link>

          {!isDetail && (
            <div className="hidden h-full items-center justify-self-center min-[1200px]:flex">
              {menuList.map((menu) => (
                <button
                  aria-controls={`nav-panel-${menu.name.toLowerCase()}`}
                  aria-expanded={activeMenuName === menu.name}
                  className={`rounded px-3 py-1.5 text-sm font-medium tracking-[-0.01em] transition-colors duration-200 ${
                    activeMenuName === menu.name
                      ? "bg-[#f2f2f2] text-[#171a20]"
                      : usesLightForeground
                        ? "hover:bg-white/15"
                        : "hover:bg-black/5"
                  }`}
                  onClick={() =>
                    activeMenuName === menu.name
                      ? closeDesktopMenu()
                      : openDesktopMenu(menu.name)
                  }
                  onFocus={() => openDesktopMenu(menu.name)}
                  onMouseEnter={() => openDesktopMenu(menu.name)}
                  type="button"
                >
                  {menu.name}
                </button>
              ))}
            </div>
          )}

          <div
            className="flex items-center justify-self-end"
            onFocus={closeDesktopMenu}
            onMouseEnter={closeDesktopMenu}
          >
            {!isDetail && (
              <div className="hidden items-center min-[1200px]:flex">
                <a
                  aria-label="Tesla support"
                  className={`grid h-8 w-8 place-items-center rounded transition-colors ${
                    usesLightForeground
                      ? "hover:bg-white/15"
                      : "hover:bg-black/5"
                  }`}
                  href="https://www.tesla.com/support"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SupportIcon />
                </a>
                <a
                  aria-label="Choose region and language"
                  className={`grid h-8 w-8 place-items-center rounded transition-colors ${
                    usesLightForeground
                      ? "hover:bg-white/15"
                      : "hover:bg-black/5"
                  }`}
                  href="https://www.tesla.com/findus/list"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GlobeIcon />
                </a>
                <a
                  aria-label="Tesla account"
                  className={`grid h-8 w-8 place-items-center rounded transition-colors ${
                    usesLightForeground
                      ? "hover:bg-white/15"
                      : "hover:bg-black/5"
                  }`}
                  href="https://auth.tesla.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AccountIcon />
                </a>
              </div>
            )}

            {isDetail ? (
              <a
                className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm font-medium transition-colors ${
                  usesLightForeground ? "hover:bg-white/15" : "hover:bg-black/5"
                }`}
                href="https://www.tesla.com/findus/list"
                rel="noreferrer"
                target="_blank"
              >
                <GlobeIcon />
                US
              </a>
            ) : (
              <button
                aria-expanded={isMobileMenuOpen}
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                className={`relative grid h-8 min-w-12 place-items-center rounded px-3 text-sm font-medium backdrop-blur-md transition-colors min-[1200px]:hidden ${
                  usesLightForeground
                    ? "bg-white/15 hover:bg-white/25"
                    : "bg-black/5 hover:bg-black/10"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen((isOpen) => !isOpen);
                  setMobileMenuName(null);
                }}
                type="button"
              >
                {isMobileMenuOpen ? (
                  <span aria-hidden="true" className="relative block h-5 w-5">
                    <span className="absolute left-1/2 top-1/2 h-px w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-px w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                  </span>
                ) : (
                  "Menu"
                )}
              </button>
            )}
          </div>
        </nav>
      </header>

      {activeMenuName && (
        <>
          <MenuBox
            hasAnnouncement={hasAnnouncement}
            menuList={menuList}
            menuName={activeMenuName}
            onClose={closeMenus}
            onMouseEnter={cancelScheduledClose}
            onMouseLeave={scheduleDesktopClose}
          />
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 cursor-default bg-black/30 backdrop-blur-[1px]"
            onClick={closeMenus}
            onFocus={closeDesktopMenu}
            onMouseEnter={scheduleDesktopClose}
            type="button"
          />
        </>
      )}

      {isMobileMenuOpen && (
        <div
          aria-label="Mobile navigation"
          className={`tesla-mobile-menu fixed inset-0 z-40 overflow-y-auto bg-white px-6 pb-12 text-[#171a20] sm:px-8 ${
            hasAnnouncement ? "pt-[120px]" : "pt-[72px]"
          }`}
          role="dialog"
        >
          {activeMobileMenu ? (
            <div className="mx-auto max-w-2xl">
              <button
                className="mb-4 flex items-center gap-2 rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-[#f4f4f4]"
                onClick={() => setMobileMenuName(null)}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="text-2xl font-light leading-none"
                >
                  ‹
                </span>
                Back
              </button>
              <h2 className="px-2 text-2xl font-medium tracking-[-0.035em]">
                {activeMobileMenu.name}
              </h2>

              {activeMobileMenu.items.products.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7">
                  {activeMobileMenu.items.products.map((product) => {
                    const isExternal = product.productLink.startsWith("http");
                    const productClass =
                      "group block rounded-md focus-visible:outline-offset-4";
                    const productContent = (
                      <>
                        <div className="flex aspect-[1.55/1] items-center justify-center overflow-hidden rounded-md bg-[#f4f4f4] px-2">
                          <img
                            alt={product.productName}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
                            decoding="async"
                            height="132"
                            loading="lazy"
                            src={product.productImage}
                            width="210"
                          />
                        </div>
                        <p className="mt-2 text-center text-base font-medium">
                          {product.productName}
                        </p>
                      </>
                    );

                    return (
                      <article key={product.productName}>
                        {isExternal ? (
                          <a
                            className={productClass}
                            href={product.productLink}
                            onClick={closeMenus}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {productContent}
                          </a>
                        ) : (
                          <Link
                            className={productClass}
                            onClick={closeMenus}
                            to={product.productLink}
                          >
                            {productContent}
                          </Link>
                        )}
                        {product.productActions.length > 0 && (
                          <div className="mt-1 flex justify-center gap-3">
                            {product.productActions.map((action) =>
                              action.external ? (
                                <a
                                  className="text-xs text-[#5c5e62] underline decoration-[#9b9da1] underline-offset-4"
                                  href={action.link}
                                  key={action.label}
                                  onClick={closeMenus}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {action.label}
                                </a>
                              ) : (
                                <Link
                                  className="text-xs text-[#5c5e62] underline decoration-[#9b9da1] underline-offset-4"
                                  key={action.label}
                                  onClick={closeMenus}
                                  to={action.link}
                                >
                                  {action.label}
                                </Link>
                              ),
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}

              {activeMobileMenu.items.links.length > 0 && (
                <ul className="mt-8 space-y-0.5 border-t border-black/10 pt-5">
                  {activeMobileMenu.items.links.map((link) => (
                    <li key={link.listName}>
                      {link.external ? (
                        <a
                          className="flex items-center justify-between rounded px-3 py-3 text-base font-medium hover:bg-[#f4f4f4]"
                          href={link.listLink}
                          onClick={closeMenus}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.listName}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <Link
                          className="flex items-center justify-between rounded px-3 py-3 text-base font-medium hover:bg-[#f4f4f4]"
                          onClick={closeMenus}
                          to={link.listLink}
                        >
                          {link.listName}
                          <span aria-hidden="true">›</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl">
              <ul className="space-y-0.5">
                {menuList.map((menu) => (
                  <li key={menu.name}>
                    <button
                      className="flex w-full items-center justify-between rounded px-3 py-3.5 text-left text-xl font-medium tracking-[-0.02em] transition-colors hover:bg-[#f4f4f4]"
                      onClick={() => setMobileMenuName(menu.name)}
                      type="button"
                    >
                      {menu.name}
                      <span aria-hidden="true" className="text-2xl font-light">
                        ›
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-1 border-t border-black/10 pt-5 text-base font-medium">
                <a
                  className="flex items-center gap-4 rounded px-3 py-3 hover:bg-[#f4f4f4]"
                  href="https://www.tesla.com/support"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SupportIcon />
                  Support
                </a>
                <a
                  className="flex items-center gap-4 rounded px-3 py-3 hover:bg-[#f4f4f4]"
                  href="https://www.tesla.com/findus/list"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GlobeIcon />
                  <span>
                    United States
                    <small className="block text-sm font-normal text-[#5c5e62]">
                      English
                    </small>
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 rounded px-3 py-3 hover:bg-[#f4f4f4]"
                  href="https://auth.tesla.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AccountIcon />
                  Account
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
