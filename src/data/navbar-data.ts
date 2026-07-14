import type { NavigationMenu } from "../utils/types/navigation";

export const menuList: NavigationMenu[] = [
  {
    name: "Vehicles",
    items: {
      products: [
        {
          productName: "Model S",
          productImage: "/assets/navbar-images/vehicles-images/model-s.avif",
          productLink: "/model-s",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Model 3",
          productImage: "/assets/navbar-images/vehicles-images/model-3.avif",
          productLink: "/model-3",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Model X",
          productImage: "/assets/navbar-images/vehicles-images/model-x.avif",
          productLink: "/model-x",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Model Y",
          productImage: "/assets/navbar-images/vehicles-images/model-y.avif",
          productLink: "/model-y",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Cybertruck",
          productImage: "/assets/navbar-images/vehicles-images/cybertruck.avif",
          productLink: "/cybertruck",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Help Me Choose",
          productImage:
            "/assets/navbar-images/vehicles-images/help-me-choose.avif",
          productLink: "/help_me_choose",
          productDescription: ["Get Started"],
        },
      ],
      links: [
        { listName: "Inventory", listLink: "/inventory" },
        { listName: "Used Cars", listLink: "/used_cars" },
        { listName: "Demo Drive", listLink: "/demo_drive" },
        { listName: "Tade-in", listLink: "/trade_in" },
        { listName: "Compare", listLink: "/compare" },
        { listName: "Help Me Charge", listLink: "/help_me_charge" },
        { listName: "Fleet", listLink: "/fleet" },
        { listName: "Semi", listLink: "/semi" },
        { listName: "Roadster", listLink: "/roadster" },
      ],
    },
  },
  {
    name: "Energy",
    items: {
      products: [
        {
          productName: "Solar Panels",
          productImage: "/assets/navbar-images/energy-images/solar-panel.avif",
          productLink: "/solar_panel",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Solar Roof",
          productImage: "/assets/navbar-images/energy-images/solar-roof.avif",
          productLink: "/solar_roof",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Powerwall",
          productImage: "/assets/navbar-images/energy-images/powerwall.avif",
          productLink: "powerwall",
          productDescription: ["Learn", "Order"],
        },
        {
          productName: "Megapack",
          productImage: "/assets/navbar-images/energy-images/megapack.avif",
          productLink: "/megapack",
          productDescription: ["Learn", "Order"],
        },
      ],
      links: [
        {
          listName: "Schedule a Consultation",
          listLink: "/schedule_a_consultation",
        },
        { listName: "Why Solar", listLink: "/why_solar" },
        { listName: "Incentives", listLink: "/incentives" },
        { listName: "Support", listLink: "/support" },
        { listName: "Partner with Tesla", listLink: "/partner_with_tesla" },
        { listName: "Commercial", listLink: "/commercial" },
        { listName: "Utilities", listLink: "/utilities" },
      ],
    },
  },
  {
    name: "Charging",
    items: {
      products: [
        {
          productName: "Charging",
          productImage: "/assets/navbar-images/charging-images/charging.avif",
          productLink: "/charging",
          productDescription: ["Learn"],
        },
        {
          productName: "Home Charging",
          productImage:
            "/assets/navbar-images/charging-images/home-charging.avif",
          productLink: "/home_charging",
          productDescription: ["Learn", "Shop"],
        },
        {
          productName: "Supercharging",
          productImage:
            "/assets/navbar-images/charging-images/supercharging.avif",
          productLink: "/supercharging",
          productDescription: ["Learn", "Find"],
        },
      ],
      links: [
        { listName: "Help Me Charge", listLink: "/help_me_charge" },
        { listName: "Charging Calculator", listLink: "/charging_calculator" },
        { listName: "Trip Planner", listLink: "/trip_planner" },
        { listName: "Supercharger Voting", listLink: "/supercharging_voting" },
        { listName: "Host a Supercharger", listLink: "/host_a_supercharger" },
        { listName: "Commercial Charging", listLink: "/commercial_charging" },
        { listName: "Host Wall Connectors", listLink: "/host_wall_connectors" },
      ],
    },
  },
  {
    name: "Discover",
    items: {
      products: [],
      links: [
        { listName: "Demo Drive", listLink: "/demo_drive" },
        { listName: "Insurance", listLink: "/insurance" },
        { listName: "Video Guides", listLink: "/video_guides" },
        { listName: "Customer Stories", listLink: "/customer_stories" },
        { listName: "Events", listLink: "/events" },
        { listName: "Find Us", listLink: "/find_us" },
        { listName: "Trip Planner", listLink: "/trip_planner" },
        {
          listName: "Find a Collision Center",
          listLink: "/find_a_collision_center",
        },
        {
          listName: "Find a Certified Installer",
          listLink: "/find_a_certified_installer",
        },
        { listName: "About", listLink: "/about" },
        { listName: "Careers", listLink: "/careers" },
        { listName: "Investor Relations", listLink: "/investor_relations" },
      ],
    },
  },
  {
    name: "Shop",
    items: {
      products: [
        {
          productName: "Charging",
          productImage: "/assets/navbar-images/shop-images/charging.avif",
          productLink: "/charging",
          productDescription: [],
        },
        {
          productName: "Vehicle Accessories",
          productImage:
            "/assets/navbar-images/shop-images/vehicle-accessories.avif",
          productLink: "/vehicle_accessories",
          productDescription: [],
        },
        {
          productName: "Apparel",
          productImage: "/assets/navbar-images/shop-images/apparel.avif",
          productLink: "/apparel",
          productDescription: [],
        },
        {
          productName: "Lifestyle",
          productImage: "/assets/navbar-images/shop-images/lifestyle.avif",
          productLink: "/lifestyle",
          productDescription: [],
        },
      ],
      links: [],
    },
  },
];
