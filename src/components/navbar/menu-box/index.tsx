import { Link } from "react-router-dom";

import type {
  NavigationAction,
  NavigationLink,
} from "../../../utils/types/navigation";
import type { MenuBoxProps } from "./props";

const DISCOVER_COLUMN_RANGES = [
  { end: 2, start: 0, title: "Resources" },
  { end: 3, start: 2, title: "Location Services" },
  { end: 6, start: 3, title: "Company" },
];

function ActionLink({
  action,
  className,
  onClose,
}: {
  action: NavigationAction;
  className: string;
  onClose: () => void;
}) {
  if (action.external) {
    return (
      <a
        className={className}
        href={action.link}
        onClick={onClose}
        rel="noreferrer"
        target="_blank"
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} onClick={onClose} to={action.link}>
      {action.label}
    </Link>
  );
}

function MenuLink({
  className,
  link,
  onClose,
}: {
  className: string;
  link: NavigationLink;
  onClose: () => void;
}) {
  if (link.external) {
    return (
      <a
        className={className}
        href={link.listLink}
        onClick={onClose}
        rel="noreferrer"
        target="_blank"
      >
        {link.listName}
      </a>
    );
  }

  return (
    <Link className={className} onClick={onClose} to={link.listLink}>
      {link.listName}
    </Link>
  );
}

export default function MenuBox({
  hasAnnouncement = false,
  menuList,
  menuName,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MenuBoxProps) {
  const menu = menuList.find(
    ({ name }) => name.toLowerCase() === menuName.toLowerCase(),
  );

  if (!menu) {
    return null;
  }

  const isDiscoverMenu = menu.name === "Discover";
  const isVehiclesMenu = menu.name === "Vehicles";
  const panelId = `nav-panel-${menu.name.toLowerCase()}`;

  return (
    <div
      aria-label={`${menu.name} menu`}
      className={`tesla-nav-panel fixed inset-x-0 z-40 hidden max-h-[calc(100svh-3.5rem)] overflow-y-auto bg-white min-[1200px]:block ${
        hasAnnouncement ? "top-[104px]" : "top-14"
      }`}
      id={panelId}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`mx-auto flex items-start justify-center px-8 pb-10 ${
          isVehiclesMenu
            ? "max-w-[1280px] gap-8 pt-16 min-[1360px]:gap-12"
            : "max-w-[1200px] gap-10 pt-7 min-[1320px]:gap-14"
        }`}
      >
        {!isDiscoverMenu && menu.items.products.length > 0 && (
          <div
            className={`grid gap-y-7 ${
              isVehiclesMenu
                ? "grid-cols-4 gap-x-3"
                : menu.items.products.length === 2
                  ? "grid-cols-2 gap-x-4"
                  : "grid-cols-3 gap-x-4"
            }`}
          >
            {menu.items.products.map((product) => {
              const isExternalProduct = product.productLink.startsWith("http");
              const productContent = (
                <>
                  <div
                    className={`flex h-[126px] items-center justify-center overflow-hidden px-2 ${
                      isVehiclesMenu
                        ? "w-[180px] min-[1360px]:w-[200px]"
                        : "w-[220px]"
                    }`}
                  >
                    <img
                      alt={product.productName}
                      className="h-[118px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
                      decoding="async"
                      height="118"
                      loading="lazy"
                      src={product.productImage}
                      width="220"
                    />
                  </div>
                  <p
                    className={`mt-1.5 text-center text-base font-medium text-[#171a20] ${
                      isVehiclesMenu ? "min-h-6 leading-5" : ""
                    }`}
                  >
                    {product.productName}
                  </p>
                </>
              );

              return (
                <article
                  className={
                    isVehiclesMenu
                      ? "w-[180px] min-[1360px]:w-[200px]"
                      : "w-[220px]"
                  }
                  key={product.productName}
                >
                  {isExternalProduct ? (
                    <a
                      className="group block rounded-lg focus-visible:outline-offset-4"
                      href={product.productLink}
                      onClick={onClose}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {productContent}
                    </a>
                  ) : (
                    <Link
                      className="group block rounded-lg focus-visible:outline-offset-4"
                      onClick={onClose}
                      to={product.productLink}
                    >
                      {productContent}
                    </Link>
                  )}

                  {product.productActions.length > 0 && (
                    <div className="mt-1 flex justify-center gap-3">
                      {product.productActions.map((action) => (
                        <ActionLink
                          action={action}
                          className="text-xs text-[#5c5e62] underline decoration-[#9b9da1] underline-offset-4 transition-colors hover:text-[#171a20]"
                          key={`${product.productName}-${action.label}`}
                          onClose={onClose}
                        />
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {isDiscoverMenu ? (
          <div className="grid grid-cols-3 gap-24 py-2">
            {DISCOVER_COLUMN_RANGES.map(({ title, start, end }) => (
              <div key={title}>
                <p className="mb-5 whitespace-nowrap text-sm text-[#5c5e62]">
                  {title}
                </p>
                <ul className="space-y-3.5">
                  {menu.items.links.slice(start, end).map((link) => (
                    <li key={link.listName}>
                      <MenuLink
                        className="text-sm font-medium text-[#171a20] transition hover:text-black hover:underline hover:underline-offset-4"
                        link={link}
                        onClose={onClose}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          menu.items.links.length > 0 && (
            <div
              className={`min-w-[230px] border-l border-black/10 py-1 ${
                isVehiclesMenu ? "pl-8 min-[1360px]:pl-10" : "pl-10"
              }`}
            >
              <ul className="space-y-2.5">
                {menu.items.links.map((link) => (
                  <li key={link.listName}>
                    <MenuLink
                      className="block py-0.5 text-sm font-medium text-[#171a20] transition hover:underline hover:underline-offset-4"
                      link={link}
                      onClose={onClose}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
