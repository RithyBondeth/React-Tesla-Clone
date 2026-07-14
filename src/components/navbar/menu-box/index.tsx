import { Link } from "react-router-dom";

import type { MenuBoxProps } from "./props";

const DISCOVER_COLUMN_RANGES = [
  { title: "Resources", start: 0, end: 5 },
  { title: "Location Services", start: 5, end: 9 },
  { title: "Company", start: 9, end: 12 },
];

export default function MenuBox({
  hasAnnouncement = false,
  menuList,
  menuName,
}: MenuBoxProps) {
  const menu = menuList.find(
    ({ name }) => name.toLowerCase() === menuName.toLowerCase(),
  );

  if (!menu) {
    return null;
  }

  const isDiscoverMenu = menu.name === "Discover";
  const isShopMenu = menu.name === "Shop";

  return (
    <div
      className={`fixed inset-x-0 z-40 hidden max-h-[calc(100svh-4rem)] items-start justify-center overflow-y-auto border-t border-black/5 bg-white shadow-xl lg:flex ${
        hasAnnouncement ? "top-28" : "top-16"
      }`}
    >
      {!isDiscoverMenu && (
        <div
          className={`grid gap-2 p-6 ${isShopMenu ? "grid-cols-4" : "grid-cols-3"}`}
        >
          {menu.items.products.map((product) => (
            <Link
              className="flex min-w-[210px] flex-col items-center justify-center rounded-lg p-2 transition hover:bg-[#f4f4f4]"
              key={product.productName}
              to={product.productLink}
            >
              <img
                alt={product.productName}
                className="h-[110px] w-[210px] object-contain"
                decoding="async"
                height="110"
                loading="lazy"
                src={product.productImage}
                width="210"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-[#171a20]">
                  {product.productName}
                </p>
                <div className="flex w-fit items-center justify-center">
                  {product.productDescription.map((description) => (
                    <p
                      className="cursor-pointer px-1 text-xs text-[#5c5e62] underline underline-offset-2"
                      key={description}
                    >
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isDiscoverMenu ? (
        <div className="flex items-start justify-center p-8">
          {DISCOVER_COLUMN_RANGES.map(({ title, start, end }) => (
            <div className="mx-3 p-3" key={title}>
              <p className="my-2 whitespace-nowrap text-sm text-[#5c5e62]">
                {title}
              </p>
              <ul className="space-y-2 font-medium text-[#171a20]">
                {menu.items.links.slice(start, end).map((link) => (
                  <li key={link.listName}>{link.listName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        !isShopMenu && (
          <div className="border-l border-black/10 p-8">
            <ul className="min-w-[220px]">
              {menu.items.links.map((link) => (
                <li
                  className="my-1 cursor-pointer rounded px-2 py-1.5 text-sm font-medium text-[#171a20] hover:bg-[#f4f4f4]"
                  key={link.listName}
                >
                  {link.listName}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
