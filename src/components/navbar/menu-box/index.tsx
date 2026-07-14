import type { MenuBoxProps } from "./props";

const DISCOVER_COLUMN_RANGES = [
  { title: "Resources", start: 0, end: 5 },
  { title: "Location Services", start: 5, end: 9 },
  { title: "Company", start: 9, end: 12 },
];

export default function MenuBox({ menuList, menuName }: MenuBoxProps) {
  const menu = menuList.find(
    ({ name }) => name.toLowerCase() === menuName.toLowerCase(),
  );

  if (!menu) {
    return null;
  }

  const isDiscoverMenu = menu.name === "Discover";
  const isShopMenu = menu.name === "Shop";

  return (
    <div className="fixed z-10 flex h-fit w-full items-center justify-center bg-white pt-16 duration-500">
      {!isDiscoverMenu && (
        <div
          className={`grid p-5 ${isShopMenu ? "grid-cols-4" : "grid-cols-3"}`}
        >
          {menu.items.products.map((product) => (
            <div
              className="my-2 flex w-fit flex-col items-center justify-center p-1"
              key={product.productName}
            >
              <img
                alt={product.productName}
                className="h-[120px] w-[220px] cursor-pointer"
                src={product.productImage}
              />
              <div className="flex flex-col items-center justify-center">
                <p>{product.productName}</p>
                <div className="flex w-fit items-center justify-center">
                  {product.productDescription.map((description) => (
                    <p
                      className="cursor-pointer px-1 text-sm text-gray-400 underline"
                      key={description}
                    >
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isDiscoverMenu ? (
        <div className="flex items-start justify-center p-5">
          {DISCOVER_COLUMN_RANGES.map(({ title, start, end }) => (
            <div className="mx-3 p-3" key={title}>
              <p className="my-2 whitespace-nowrap text-gray-400">{title}</p>
              <ul>
                {menu.items.links.slice(start, end).map((link) => (
                  <li key={link.listName}>{link.listName}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        !isShopMenu && (
          <div className="p-5">
            <ul>
              {menu.items.links.map((link) => (
                <li className="my-2 cursor-pointer p-1" key={link.listName}>
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
