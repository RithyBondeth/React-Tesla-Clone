import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { menuList } from "../../data/navbar-data";
import MenuBox from "./menu-box";
import type { NavbarProps } from "./props";

export default function Navbar({
  isDetail = false,
  isWhiteText = false,
  isBlurred = false,
}: NavbarProps) {
  const [activeMenuName, setActiveMenuName] = useState<string | null>(null);
  const [usesWhiteText, setUsesWhiteText] = useState(isWhiteText);

  useEffect(() => {
    setUsesWhiteText(isWhiteText);
  }, [isWhiteText]);

  useEffect(() => {
    document.body.style.overflow = activeMenuName ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenuName]);

  const closeMenu = () => {
    setActiveMenuName(null);
    setUsesWhiteText(isWhiteText);
  };

  return (
    <>
      <nav
        className={`absolute left-0 right-0 z-20 flex items-center justify-between bg-transparent ${
          usesWhiteText && isBlurred
            ? "backdrop-blur-xl backdrop-brightness-50"
            : ""
        }`}
      >
        <Link to="/">
          <img
            alt="Tesla"
            className={`h-[50px] w-[110px] ${usesWhiteText ? "invert" : "invert-0"}`}
            src="/assets/tesla-logo.png"
          />
        </Link>

        {isDetail ? (
          <div />
        ) : (
          <div className="flex items-center">
            {menuList.map((menu) => (
              <button
                className={`cursor-pointer rounded-lg px-3 py-1 hover:bg-[#F2F2F2] hover:duration-300 ${
                  usesWhiteText ? "text-white" : "text-black"
                }`}
                key={menu.name}
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

        <div className={`flex ${usesWhiteText ? "text-white" : "text-black"}`}>
          {!isDetail && (
            <span className="material-symbols-outlined mx-1 cursor-pointer rounded-lg p-1 hover:bg-[#F2F2F2] hover:duration-300">
              help
            </span>
          )}
          {isDetail ? (
            <div
              className={`mx-2 flex cursor-pointer items-center justify-center rounded-lg p-2 hover:duration-300 ${
                isBlurred ? "hover:bg-[#313131]" : "hover:bg-[#F2F2F2]"
              }`}
            >
              <span className="material-symbols-outlined">language</span>
              <span>US</span>
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined mx-1 cursor-pointer rounded-lg p-1 hover:bg-[#F2F2F2] hover:duration-300">
                language
              </span>
              <span className="material-symbols-outlined mx-1 cursor-pointer rounded-lg p-1 hover:bg-[#F2F2F2] hover:duration-300">
                account_circle
              </span>
            </>
          )}
        </div>
      </nav>

      {activeMenuName && (
        <>
          <MenuBox menuList={menuList} menuName={activeMenuName} />
          <div
            aria-hidden="true"
            className="fixed h-screen w-full bg-transparent backdrop-blur-sm"
            onMouseEnter={closeMenu}
          />
        </>
      )}
    </>
  );
}
