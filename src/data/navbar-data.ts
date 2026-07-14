import type { NavigationMenu } from "../utils/types/navigation";

export const menuList: NavigationMenu[] = [
  {
    name: "Vehicles",
    items: {
      products: [
        {
          productActions: [
            { label: "Learn", link: "/#compare" },
            { label: "Order", link: "/order_now_model3" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-3.avif",
          productLink: "/#compare",
          productName: "Model 3",
        },
        {
          productActions: [
            { label: "Learn", link: "/#compare" },
            { label: "Order", link: "/order_now_modely" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-y.avif",
          productLink: "/#compare",
          productName: "Model Y",
        },
        {
          productActions: [
            { label: "Learn", link: "/learn_more_cybertruck" },
            { label: "Order", link: "/order_now_cybertruck" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/cybertruck.avif",
          productLink: "/learn_more_cybertruck",
          productName: "Cybertruck",
        },
      ],
      links: [
        { listLink: "/fsd", listName: "Full Self-Driving" },
        {
          external: true,
          listLink: "https://www.tesla.com/inventory/new/m3",
          listName: "Inventory",
        },
        { listLink: "/demo_drive", listName: "Test Drive" },
        {
          external: true,
          listLink: "https://www.tesla.com/tradein",
          listName: "Trade-in",
        },
        { listLink: "/fsd#safety", listName: "Vehicle Safety Report" },
        {
          external: true,
          listLink: "https://www.tesla.com/roadster",
          listName: "Roadster",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/we-robot",
          listName: "We, Robot",
        },
      ],
    },
  },
  {
    name: "Energy",
    items: {
      products: [
        {
          productActions: [
            { label: "Learn", link: "/powerwall" },
            {
              external: true,
              label: "Order",
              link: "https://www.tesla.com/powerwall/design",
            },
          ],
          productImage: "/assets/navbar-images/energy-images/powerwall.avif",
          productLink: "/powerwall",
          productName: "Powerwall",
        },
        {
          productActions: [
            { label: "Learn", link: "/megapack" },
            {
              external: true,
              label: "Order",
              link: "https://www.tesla.com/megapack/design",
            },
          ],
          productImage: "/assets/navbar-images/energy-images/megapack.avif",
          productLink: "/megapack",
          productName: "Megapack",
        },
      ],
      links: [
        {
          external: true,
          listLink: "https://www.tesla.com/utilities",
          listName: "Utilities",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/commercial",
          listName: "Commercial",
        },
      ],
    },
  },
  {
    name: "Charging",
    items: {
      products: [
        {
          productActions: [{ label: "Learn", link: "/#charging" }],
          productImage: "/assets/navbar-images/charging-images/charging.avif",
          productLink: "/#charging",
          productName: "Charging",
        },
        {
          productActions: [
            { label: "Learn", link: "/#charging" },
            {
              external: true,
              label: "Shop",
              link: "https://shop.tesla.com/category/charging",
            },
          ],
          productImage:
            "/assets/navbar-images/charging-images/home-charging.avif",
          productLink: "/#charging",
          productName: "Home Charging",
        },
        {
          productActions: [
            { label: "Learn", link: "/#charging" },
            {
              external: true,
              label: "Find",
              link: "https://www.tesla.com/findus",
            },
          ],
          productImage:
            "/assets/navbar-images/charging-images/supercharging.avif",
          productLink: "/#charging",
          productName: "Supercharging",
        },
      ],
      links: [
        {
          external: true,
          listLink: "https://www.tesla.com/supercharger-voting/overview",
          listName: "Supercharger Voting",
        },
      ],
    },
  },
  {
    name: "Discover",
    items: {
      products: [],
      links: [
        { listLink: "/demo_drive", listName: "Test Drive" },
        {
          external: true,
          listLink: "https://www.tesla.com/events",
          listName: "Events",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/findus",
          listName: "Find Us",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/about",
          listName: "About",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/careers",
          listName: "Careers",
        },
        {
          external: true,
          listLink: "https://ir.tesla.com/",
          listName: "Investor Relations",
        },
      ],
    },
  },
  {
    name: "Shop",
    items: {
      products: [
        {
          productActions: [],
          productImage:
            "/assets/navbar-images/shop-images/vehicle-accessories.avif",
          productLink: "https://shop.tesla.com/category/vehicle-accessories",
          productName: "Vehicle Accessories",
        },
        {
          productActions: [],
          productImage: "/assets/navbar-images/shop-images/apparel.avif",
          productLink: "https://shop.tesla.com/category/apparel",
          productName: "Apparel",
        },
        {
          productActions: [],
          productImage: "/assets/navbar-images/shop-images/lifestyle.avif",
          productLink: "https://shop.tesla.com/category/lifestyle",
          productName: "Lifestyle",
        },
      ],
      links: [],
    },
  },
];
