export type InventoryCondition = "new" | "used";
export type InventoryModel = "Model 3" | "Model S" | "Model X" | "Model Y";
export type InventoryHistory =
  "No Reported Accidents/Damage" | "Previously Repaired";

export interface InventoryVehicle {
  additionalOptions: string[];
  condition: InventoryCondition;
  conditionHistory: InventoryHistory | null;
  demoDriveAvailable: boolean;
  distance: number;
  drive: string;
  id: string;
  image: string;
  interior: string;
  interiorImage: string;
  location: string;
  mileage: number;
  model: InventoryModel;
  orderLink: string;
  paint: string;
  price: number;
  range: number;
  seatLayout: string;
  selfDriving: string;
  steeringControl: string;
  trim: string;
  wheels: string;
  year: number;
}

export const inventoryVehicles: InventoryVehicle[] = [
  {
    additionalOptions: ["All-Season Tires"],
    condition: "new",
    conditionHistory: null,
    demoDriveAvailable: true,
    distance: 12,
    drive: "All-Wheel Drive",
    id: "m3-lr-awd-grey",
    image:
      "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail1.jpeg",
    interior: "All Black Premium Interior",
    interiorImage:
      "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg",
    location: "Marina del Rey, CA",
    mileage: 15,
    model: "Model 3",
    orderLink: "/order_now_model3",
    paint: "Stealth Grey",
    price: 47490,
    range: 346,
    seatLayout: "5 Seats",
    selfDriving: "1-Month FSD Trial",
    steeringControl: "Steering Wheel",
    trim: "Long Range",
    wheels: '18" Photon Wheels',
    year: 2026,
  },
  {
    additionalOptions: ["Tow Hitch"],
    condition: "new",
    conditionHistory: null,
    demoDriveAvailable: false,
    distance: 18,
    drive: "All-Wheel Drive",
    id: "my-lr-awd-red",
    image:
      "/assets/tesla-official/model-y-configurator/model-y-ultra-red-crossflow-front.avif",
    interior: "All Black Premium Interior",
    interiorImage:
      "/assets/tesla-official/model-y-configurator/model-y-ultra-red-interior-black.avif",
    location: "Los Angeles, CA",
    mileage: 7,
    model: "Model Y",
    orderLink: "/order_now_modely",
    paint: "Ultra Red",
    price: 48990,
    range: 327,
    seatLayout: "7 Seats",
    selfDriving: "1-Month FSD Trial",
    steeringControl: "Steering Wheel",
    trim: "Long Range",
    wheels: '19" Gemini Wheels',
    year: 2026,
  },
  {
    additionalOptions: ["Luxe Package"],
    condition: "new",
    conditionHistory: null,
    demoDriveAvailable: true,
    distance: 31,
    drive: "Dual Motor All-Wheel Drive",
    id: "ms-awd-red",
    image:
      "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail1.jpeg",
    interior: "Cream Premium Interior",
    interiorImage:
      "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-cream.jpeg",
    location: "Buena Park, CA",
    mileage: 9,
    model: "Model S",
    orderLink: "/order_now_models",
    paint: "Ultra Red",
    price: 84990,
    range: 410,
    seatLayout: "5 Seats",
    selfDriving: "Full Self-Driving (Supervised)",
    steeringControl: "Steering Wheel",
    trim: "All-Wheel Drive",
    wheels: '19" Tempest Wheels',
    year: 2026,
  },
  {
    additionalOptions: ["Tow Package"],
    condition: "new",
    conditionHistory: null,
    demoDriveAvailable: false,
    distance: 42,
    drive: "Dual Motor All-Wheel Drive",
    id: "mx-awd-white",
    image:
      "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail1.jpeg",
    interior: "Black and White Premium Interior",
    interiorImage:
      "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-white.jpeg",
    location: "Irvine, CA",
    mileage: 5,
    model: "Model X",
    orderLink: "/order_now_modelx",
    paint: "Pearl White",
    price: 89990,
    range: 352,
    seatLayout: "6 Seats",
    selfDriving: "Full Self-Driving (Supervised)",
    steeringControl: "Yoke Steering",
    trim: "All-Wheel Drive",
    wheels: '20" Cyberstream Wheels',
    year: 2026,
  },
  {
    additionalOptions: ["Mobile Connector Included"],
    condition: "used",
    conditionHistory: "No Reported Accidents/Damage",
    demoDriveAvailable: true,
    distance: 14,
    drive: "All-Wheel Drive",
    id: "m3-used-blue",
    image:
      "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail1.jpeg",
    interior: "All Black Premium Interior",
    interiorImage:
      "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail5-black.jpeg",
    location: "Santa Monica, CA",
    mileage: 23401,
    model: "Model 3",
    orderLink: "/order_now_model3",
    paint: "Deep Blue Metallic",
    price: 31800,
    range: 333,
    seatLayout: "5 Seats",
    selfDriving: "Enhanced Autopilot",
    steeringControl: "Steering Wheel",
    trim: "Long Range",
    wheels: '19" Nova Wheels',
    year: 2023,
  },
  {
    additionalOptions: ["Tow Hitch"],
    condition: "used",
    conditionHistory: "No Reported Accidents/Damage",
    demoDriveAvailable: false,
    distance: 25,
    drive: "All-Wheel Drive",
    id: "my-used-white",
    image:
      "/assets/mainpage-images/modely-images/pear_white/induction_wheels/detail1.jpeg",
    interior: "Black and White Premium Interior",
    interiorImage:
      "/assets/mainpage-images/modely-images/pear_white/induction_wheels/detail5-white.jpeg",
    location: "Burbank, CA",
    mileage: 31218,
    model: "Model Y",
    orderLink: "/order_now_modely",
    paint: "Pearl White",
    price: 34500,
    range: 303,
    seatLayout: "5 Seats",
    selfDriving: "Full Self-Driving (Supervised)",
    steeringControl: "Steering Wheel",
    trim: "Performance",
    wheels: '20" Induction Wheels',
    year: 2022,
  },
  {
    additionalOptions: ["Premium Connectivity Trial"],
    condition: "used",
    conditionHistory: "Previously Repaired",
    demoDriveAvailable: true,
    distance: 37,
    drive: "Dual Motor All-Wheel Drive",
    id: "ms-used-grey",
    image:
      "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail1.jpeg",
    interior: "All Black Premium Interior",
    interiorImage:
      "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-black.jpeg",
    location: "Long Beach, CA",
    mileage: 41207,
    model: "Model S",
    orderLink: "/order_now_models",
    paint: "Stealth Grey",
    price: 45900,
    range: 387,
    seatLayout: "5 Seats",
    selfDriving: "Basic Autopilot",
    steeringControl: "Yoke Steering",
    trim: "Long Range",
    wheels: '21" Arachnid Wheels',
    year: 2021,
  },
  {
    additionalOptions: ["Tow Package"],
    condition: "used",
    conditionHistory: "No Reported Accidents/Damage",
    demoDriveAvailable: false,
    distance: 49,
    drive: "Tri Motor All-Wheel Drive",
    id: "mx-used-red",
    image:
      "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail1.jpeg",
    interior: "Cream Premium Interior",
    interiorImage:
      "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-cream.jpeg",
    location: "Costa Mesa, CA",
    mileage: 35816,
    model: "Model X",
    orderLink: "/order_now_modelx",
    paint: "Ultra Red",
    price: 59700,
    range: 326,
    seatLayout: "6 Seats",
    selfDriving: "Full Self-Driving (Supervised)",
    steeringControl: "Yoke Steering",
    trim: "Plaid",
    wheels: '22" Turbine Wheels',
    year: 2022,
  },
];
