import type { NavigationMenu } from "../utils/types/navigation";

export const menuList: NavigationMenu[] = [
  {
    name: "Vehicles",
    items: {
      products: [
        {
          productActions: [
            { label: "Learn", link: "/model-s" },
            { label: "Order", link: "/order_now_models" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-s.avif",
          productLink: "/model-s",
          productName: "Model S",
        },
        {
          productActions: [
            { label: "Learn", link: "/model-3" },
            { label: "Order", link: "/order_now_model3" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-3.avif",
          productLink: "/model-3",
          productName: "Model 3",
        },
        {
          productActions: [
            { label: "Learn", link: "/model-y" },
            { label: "Order", link: "/order_now_modely" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-y.avif",
          productLink: "/model-y",
          productName: "Model Y",
        },
        {
          productActions: [
            { label: "Learn", link: "/model-x" },
            { label: "Order", link: "/order_now_modelx" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/model-x.avif",
          productLink: "/model-x",
          productName: "Model X",
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
        {
          productActions: [
            { label: "New", link: "/inventory/new" },
            { label: "Pre-Owned", link: "/inventory/used" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/inventory.avif",
          productLink: "/inventory/new",
          productName: "Inventory",
        },
        {
          productActions: [
            { label: "Learn", link: "/fsd" },
            { label: "Experience", link: "/drive" },
          ],
          productImage: "/assets/navbar-images/vehicles-images/fsd.avif",
          productLink: "/fsd",
          productName: "Full Self-Driving (Supervised)",
        },
      ],
      links: [
        {
          external: true,
          listLink: "https://www.tesla.com/current-offers",
          listName: "Current Offers",
        },
        { listLink: "/drive", listName: "Demo Drive" },
        {
          external: true,
          listLink: "https://www.tesla.com/tradein",
          listName: "Trade-in",
        },
        { listLink: "/fsd#safety", listName: "Vehicle Safety Report" },
        { listLink: "/inventory/used", listName: "Pre-Owned" },
        {
          external: true,
          listLink: "https://www.tesla.com/trips",
          listName: "Trip Planner",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/features",
          listName: "Features",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/choose",
          listName: "Help Me Choose",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/compare",
          listName: "Compare",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/safety",
          listName: "Safety",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/fleet",
          listName: "Fleet",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/semi",
          listName: "Semi",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/roadster",
          listName: "Roadster",
        },
        {
          external: true,
          listLink: "https://www.tesla.com/robotaxi",
          listName: "Robotaxi",
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
        { listLink: "/drive", listName: "Test Drive" },
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
