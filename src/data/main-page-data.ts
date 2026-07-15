import type { CybertruckData } from "../utils/types/cybertruck";
import type { AutopilotVideo, Vehicle } from "../utils/types/vehicle";

type ModelYPaint =
  "deep-blue" | "pearl-white" | "solid-black" | "stealth-grey" | "ultra-red";
type ModelYWheel = "crossflow" | "helix";

const modelYConfiguratorPath = "/assets/tesla-official/model-y-configurator";

const getModelYExteriorImages = (paint: ModelYPaint, wheel: ModelYWheel) =>
  ["front", "side", "rear", "wheel"].map(
    (view) =>
      `${modelYConfiguratorPath}/model-y-${paint}-${wheel}-${view}.avif`,
  );

const getModelYInteriorImage = (
  paint: ModelYPaint,
  interior: "black" | "white",
) => `${modelYConfiguratorPath}/model-y-${paint}-interior-${interior}.avif`;

export const mainPageList: Vehicle[] = [
  //Model 3
  {
    title: "Model 3",
    subtitle: "Long Range AWD From $34,990",
    description: "After Est. Savings",
    hasDarkText: true,
    poster: "/assets/tesla-official/model-3-hero.avif",
    buttons: [
      {
        label: "Order Now",
        link: "/order_now_model3",
      },
      {
        label: "Demo Drive",
        link: "/demo_drive",
      },
    ],
    orderData: {
      name: "Model 3",
      options: [
        {
          optionName: "Rear Wheel Drive",
          optionPrice: "$33,990",
          optionMachine: ["272mi", "125mph", "5.8sec"],
          optionDescription: "Include est. 5-year gas savings of $5,000.",
        },
        {
          optionName: "Long Range All Wheel Drive",
          optionPrice: "$34,990",
          optionMachine: ["341mi", "125mph", "4.2sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $5,000.",
        },
        {
          optionName: "Performance All Wheel Drive",
          optionPrice: "$42,490",
          optionMachine: ["303mi", "163mph", "2.9sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $5,000.",
        },
      ],
      colors: [
        {
          colorName: "Stealth Grey",
          colorPrice: "Included",
          colorIcon: "/assets/mainpage-images/color-icons/stealth_grey.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg",
          ],
        },
        {
          colorName: "Pearl White",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/pear_white.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/model3-images/pear_white/nova_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/nova_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/nova_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/nova_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/nova_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg",
          ],
        },
        {
          colorName: "Deep Blue Metallic",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/deep_blue.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg",
          ],
        },
        {
          colorName: "Solid Black",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/solid_black.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/model3-images/solid_black/nova_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/nova_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/nova_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/nova_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/nova_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg",
          ],
        },
        {
          colorName: "Ultra Red",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/ultra_red.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail1.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail2.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail3.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail4.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg",
          ],
        },
      ],
      wheels: [
        {
          wheelName: '18" Photon Wheels',
          wheelPrice: "Included",
          wheelDescription: ["All-Season Tires", "Range (EPA est.) : 272mi"],
          wheelIcon:
            "/assets/mainpage-images/model3-images/photon_wheel_icon.avif",
        },
        {
          wheelName: '19" Nova Wheels',
          wheelPrice: "$1,000",
          wheelDescription: ["All Season Tires", "Range (est.) : 248mi"],
          wheelIcon:
            "/assets/mainpage-images/model3-images/nova_wheel_icon.avif",
        },
      ],
      interiors: [
        {
          interiorDescription: "Black",
          interiorPrice: "Included",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior-black.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg",
            "Pearl White":
              "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-black.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-black.jpeg",
            "Solid Black":
              "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-black.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-black.jpeg",
            "Lunar Silver": "",
          },
        },
        {
          interiorDescription: "Black and White",
          interiorPrice: "$1,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_white.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg",
            "Pearl White":
              "/assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg",
            "Solid Black":
              "/assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg",
            "Lunar Silver": "",
          },
        },
      ],
      seatingLayouts: [],
      steeringControls: [],
      accessories: [
        {
          accessoryDescription: "Model 3 Roof Rack",
          accessoryPrice: "$400",
        },
        {
          accessoryDescription: "Model 3 Center Console Trays",
          accessoryPrice: "$35",
        },
        {
          accessoryDescription: "Model 3 All-Weather Interior Liners",
          accessoryPrice: "$225",
        },
      ],
      lastOrders: [
        "Order Your Model 3",
        "Est. Delivery: Jun 2024",
        "Your design qualifies for a $7,500 federal tax credit for eligible buyers.",
      ],
    },
  },
  //Model Y
  {
    title: "Model Y",
    subtitle: "From $31,490",
    description: "After Est. Savings",
    hasDarkText: true,
    poster: "/assets/tesla-official/model-y-hero.avif",
    buttons: [
      {
        label: "Order Now",
        link: "/order_now_modely",
      },
      {
        label: "Demo Drive",
        link: "/demo_drive",
      },
    ],
    orderData: {
      name: "Model Y",
      options: [
        {
          optionName: "Long Range Rear Wheel Drive",
          optionPrice: "$31,490",
          optionMachine: ["320mi", "135mph", "6.5sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
        },
        {
          optionName: "Long Range All Wheel Drive",
          optionPrice: "$34,490",
          optionMachine: ["308mi", "135mph", "4.8sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
        },
        {
          optionName: "Performance All Wheel Drive",
          optionPrice: "$37,990",
          optionMachine: ["279mi", "155mph", "3.5sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
        },
      ],
      colors: [
        {
          colorName: "Stealth Grey",
          colorPrice: "Included",
          colorIcon: "/assets/mainpage-images/color-icons/stealth_grey.avif",
          primaryWheelImages: getModelYExteriorImages(
            "stealth-grey",
            "crossflow",
          ),
          secondaryWheelImages: getModelYExteriorImages(
            "stealth-grey",
            "helix",
          ),
        },
        {
          colorName: "Pearl White",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/pear_white.avif",
          primaryWheelImages: getModelYExteriorImages(
            "pearl-white",
            "crossflow",
          ),
          secondaryWheelImages: getModelYExteriorImages("pearl-white", "helix"),
        },
        {
          colorName: "Deep Blue Metallic",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/deep_blue.avif",
          primaryWheelImages: getModelYExteriorImages("deep-blue", "crossflow"),
          secondaryWheelImages: getModelYExteriorImages("deep-blue", "helix"),
        },
        {
          colorName: "Solid Black",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/solid_black.avif",
          primaryWheelImages: getModelYExteriorImages(
            "solid-black",
            "crossflow",
          ),
          secondaryWheelImages: getModelYExteriorImages("solid-black", "helix"),
        },
        {
          colorName: "Ultra Red",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/ultra_red.avif",
          primaryWheelImages: getModelYExteriorImages("ultra-red", "crossflow"),
          secondaryWheelImages: getModelYExteriorImages("ultra-red", "helix"),
        },
      ],
      wheels: [
        {
          wheelName: '19" Crossflow Wheels',
          wheelPrice: "Included",
          wheelDescription: ["All-Season Tires", "Range (EPA est.): 327 mi"],
          wheelIcon: `${modelYConfiguratorPath}/model-y-stealth-grey-crossflow-wheel.avif`,
        },
        {
          wheelName: '20" Helix 2.0 Wheels',
          wheelPrice: "$2,000",
          wheelDescription: ["All-Season Tires", "Range (EPA est.): 303 mi"],
          wheelIcon: `${modelYConfiguratorPath}/model-y-stealth-grey-helix-wheel.avif`,
        },
      ],
      interiors: [
        {
          interiorDescription: "Black",
          interiorPrice: "Included",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior-black.avif",
          interiorImages: {
            "Stealth Grey": getModelYInteriorImage("stealth-grey", "black"),
            "Pearl White": getModelYInteriorImage("pearl-white", "black"),
            "Deep Blue Metallic": getModelYInteriorImage("deep-blue", "black"),
            "Solid Black": getModelYInteriorImage("solid-black", "black"),
            "Ultra Red": getModelYInteriorImage("ultra-red", "black"),
            "Lunar Silver": "",
          },
        },
        {
          interiorDescription: "Black and White",
          interiorPrice: "$2,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_white.avif",
          interiorImages: {
            "Stealth Grey": getModelYInteriorImage("stealth-grey", "white"),
            "Pearl White": getModelYInteriorImage("pearl-white", "white"),
            "Deep Blue Metallic": getModelYInteriorImage("deep-blue", "white"),
            "Solid Black": getModelYInteriorImage("solid-black", "white"),
            "Ultra Red": getModelYInteriorImage("ultra-red", "white"),
            "Lunar Silver": "",
          },
        },
      ],
      seatingLayouts: ["5"],
      steeringControls: [],
      accessories: [
        {
          accessoryDescription: "Model Y All-Weather Interior Liners",
          accessoryPrice: "$225",
        },
        {
          accessoryDescription: "Model Y Sunshade",
          accessoryPrice: "$105",
        },
        {
          accessoryDescription: "Model Y Center Console Trays",
          accessoryPrice: "$35",
        },
      ],
      lastOrders: [
        "Order Your Model Y",
        "Est. Delivery: Jun 2024",
        "Your design qualifies for a $7,500 federal tax credit for eligible buyers.",
      ],
    },
  },
  //Model X
  {
    title: "Model X",
    subtitle: "From $63,990",
    description: "After Est. Savings",
    hasDarkText: true,
    poster: "/assets/mainpage-images/modelx-images/tesla-modelx.avif",
    buttons: [
      {
        label: "Order Now",
        link: "/order_now_modelx",
      },
      {
        label: "Demo Drive",
        link: "/demo_drive",
      },
    ],
    orderData: {
      name: "Model X",
      machine: {
        range: "335mi",
        speed: "149mph",
        mph: "3.8sec",
      },
      options: [
        {
          optionName: "All Wheel Drive",
          optionPrice: "$63,990",
          optionMachine: ["335mi", "149mph", "3.8sec"],
          optionDescription:
            "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,500.",
        },
        {
          optionName: "Plaid",
          optionPrice: "$86,490",
          optionMachine: ["326mi", "149mph", "2.5sec"],
          optionDescription: "Include est. 5-year gas savings of $6,500.",
        },
      ],
      colors: [
        {
          colorName: "Stealth Grey",
          colorPrice: "Included",
          colorIcon: "/assets/mainpage-images/color-icons/stealth_grey.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Pearl White",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/pear_white.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Deep Blue Metallic",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/deep_blue.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Solid Black",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/solid_black.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Ultra Red",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/ultra_red.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Lunar Silver",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/lunar_silver.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail1.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail2.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail3.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail4.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-cream.jpeg",
          ],
        },
      ],
      wheels: [
        {
          wheelName: '20" Cyberstream Wheels',
          wheelPrice: "Included",
          wheelDescription: ["All Season Tires", "Range (est.) : 335mi"],
          wheelIcon:
            "/assets/mainpage-images/modelx-images/cyberstream_wheel_icon.avif",
        },
        {
          wheelName: '22" Turbine Wheels',
          wheelPrice: "$5,500",
          wheelDescription: ["All Season Tires", "Range (est.) : 322mi"],
          wheelIcon:
            "/assets/mainpage-images/modelx-images/turbine_wheel_icon.avif",
        },
      ],
      interiors: [
        {
          interiorDescription: "Black",
          interiorPrice: "Included",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior-black.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-black.jpeg",
            "Pearl White":
              "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-black.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-black.jpeg",
            "Solid Black":
              "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-black.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-black.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-black.jpeg",
          },
        },
        {
          interiorDescription: "Black and White",
          interiorPrice: "$2,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_white.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-white.jpeg",
            "Pearl White":
              "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-white.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-white.jpeg",
            "Solid Black":
              "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-white.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-white.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-white.jpeg",
          },
        },
        {
          interiorDescription: "Cream",
          interiorPrice: "$2,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_cream.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-cream.jpeg",
            "Pearl White":
              "/assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-cream.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-cream.jpeg",
            "Solid Black":
              "/assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-cream.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-cream.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-cream.jpeg",
          },
        },
      ],
      seatingLayouts: ["5", "6", "7"],
      steeringControls: [
        {
          steeringName: "Steering Wheel",
          steeringIcon:
            "/assets/mainpage-images/steeringwheel_icons/steeringwheel_icon.png",
          steeringImage:
            "/assets/mainpage-images/modelx-images/steering_control/steering_wheel.jpeg",
        },
        {
          steeringName: "Yoke Steering",
          steeringIcon:
            "/assets/mainpage-images/steeringwheel_icons/yokesteering_icon.png",
          steeringImage:
            "/assets/mainpage-images/modelx-images/steering_control/yoke_steering.jpeg",
        },
      ],
      accessories: [
        {
          accessoryDescription: "Model X Car Cover",
          accessoryPrice: "$450",
        },
        {
          accessoryDescription: "Air Compressor + Tire Repair Kit 3.0",
          accessoryPrice: "$110",
        },
        {
          accessoryDescription: "Model X All-Weather Interior Liners",
          accessoryPrice: "$295",
        },
      ],
      lastOrders: ["Order Your Model X", "Est. Delivery: Jun 2024", ""],
    },
  },
  //Model S
  {
    title: "Model S",
    subtitle: "From $66,490",
    description: "After Est. Savings",
    hasDarkText: false,
    poster: "/assets/mainpage-images/models-images/tesla-models.avif",
    buttons: [
      {
        label: "Order Now",
        link: "/order_now_models",
      },
      {
        label: "Demo Drive",
        link: "/demo_drive",
      },
    ],
    orderData: {
      name: "Model S",
      machine: {
        range: "402mi",
        speed: "130mph",
        mph: "3.1sec",
      },
      options: [
        {
          optionName: "All Wheel Drive",
          optionPrice: "$66,490",
          optionMachine: ["402mi", "130mph", "3.1sec"],
          optionDescription: "Include est. 5-year gas savings of $6,500.",
        },
        {
          optionName: "Plaid",
          optionPrice: "$81,490",
          optionMachine: ["359mi", "200mph", "1.99sec"],
          optionDescription: "Include est. 5-year gas savings of $6,500.",
        },
      ],
      colors: [
        {
          colorName: "Stealth Grey",
          colorPrice: "Included",
          colorIcon: "/assets/mainpage-images/color-icons/stealth_grey.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Pearl White",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/pear_white.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Deep Blue Metallic",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/deep_blue.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Solid Black",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/solid_black.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Ultra Red",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/ultra_red.avif",
          primaryWheelImages: [
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
        {
          colorName: "Lunar Silver",
          colorPrice: "$1000",
          colorIcon: "/assets/mainpage-images/color-icons/lunar_silver.avif",

          primaryWheelImages: [
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-cream.jpeg",
          ],
          secondaryWheelImages: [
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail1.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail2.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail3.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail4.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-black.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-white.jpeg",
            "/assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-cream.jpeg",
          ],
        },
      ],
      wheels: [
        {
          wheelName: '19" Tempest Wheels',
          wheelPrice: "Included",
          wheelDescription: ["All Season Tires", "Range (est.) : 402mi"],
          wheelIcon:
            "/assets/mainpage-images/models-images/tempest_wheel_icon.avif",
        },
        {
          wheelName: '21" Arachnid Wheels',
          wheelPrice: "$4,500",
          wheelDescription: ["All Season Tires", "Range (est.) : 380mi"],
          wheelIcon:
            "/assets/mainpage-images/models-images/arachnid_wheel_icon.avif",
        },
      ],
      interiors: [
        {
          interiorDescription: "Black",
          interiorPrice: "Included",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior-black.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-black.jpeg",
            "Pearl White":
              "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-black.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-black.jpeg",
            "Solid Black":
              "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-black.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-black.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-black.jpeg",
          },
        },
        {
          interiorDescription: "Black and White",
          interiorPrice: "$2,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_white.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-white.jpeg",
            "Pearl White":
              "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-white.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-white.jpeg",
            "Solid Black":
              "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-white.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-white.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-white.jpeg",
          },
        },
        {
          interiorDescription: "Cream",
          interiorPrice: "$2,000",
          interiorIcon:
            "/assets/mainpage-images/interior-icons/interior_cream.avif",
          interiorImages: {
            "Stealth Grey":
              "/assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-cream.jpeg",
            "Pearl White":
              "/assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-cream.jpeg",
            "Deep Blue Metallic":
              "/assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-cream.jpeg",
            "Solid Black":
              "/assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-cream.jpeg",
            "Ultra Red":
              "/assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-cream.jpeg",
            "Lunar Silver":
              "/assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-cream.jpeg",
          },
        },
      ],
      seatingLayouts: [],
      steeringControls: [
        {
          steeringName: "Steering Wheel",
          steeringIcon:
            "/assets/mainpage-images/steeringwheel_icons/steeringwheel_icon.png",
          steeringImage:
            "/assets/mainpage-images/models-images/steering_control/steering_wheel.jpeg",
        },
        {
          steeringName: "Yoke Steering",
          steeringIcon:
            "/assets/mainpage-images/steeringwheel_icons/yokesteering_icon.png",
          steeringImage:
            "/assets/mainpage-images/models-images/steering_control/yoke_steering.jpeg",
        },
      ],
      accessories: [
        {
          accessoryDescription: "Model S Sunshade",
          accessoryPrice: "$105",
        },
        {
          accessoryDescription: "Model S All-Weather Interior Liners",
          accessoryPrice: "$250",
        },
        {
          accessoryDescription: "Model S Roof Rack",
          accessoryPrice: "$450",
        },
      ],
      lastOrders: ["Order Your Model S", "Est. Delivery: Jun 2024", ""],
    },
  },
];

export const autopilotVideos: AutopilotVideo[] = [
  {
    technology: "Navigate No Auto Pilot",
    video: "/assets/mainpage-images/autopilots/1.navigate_on_autopilot.webm",
  },
  {
    technology: "Auto Lane Change",
    video: "/assets/mainpage-images/autopilots/2.auto_lane_change.webm",
  },
  {
    technology: "Auto Park",
    video: "/assets/mainpage-images/autopilots/3.autopark.webm",
  },
  {
    technology: "Smart Summon",
    video: "/assets/mainpage-images/autopilots/4.smart_summon.webm",
  },
];

export const cybertruckData: CybertruckData = {
  title: {
    text: "Cybertruck",
    image: "/assets/mainpage-images/cybertruck/cybertruck-logo.svg",
  },
  poster: "/assets/mainpage-images/cybertruck/tesla-cybertruck.avif",
  buttons: [
    {
      label: "Order Now",
      link: "/order_now_cybertruck",
    },
    {
      label: "Learn More",
      link: "/learn_more_cybertruck",
    },
  ],
  orderData: {
    poster: "/assets/mainpage-images/cybertruck/ordernow-images/poster.avif",
    purchasePrices: [
      {
        price: "EST. $60,990",
        option: "REAR-WHEEL DRIVE",
        description: [
          "AVAILABLE IN 2025",
          "250 MI. RANGE (EST.)",
          "6.5 SEC. 0-60 MPH",
        ],
      },
      {
        price: "EST. $79,990",
        option: "ALL-WHEEL DRIVE",
        description: [
          "DELIVERY IN 2025",
          "340 MI. RANGE (EST.)",
          "4.1 SEC. 0-60 MPH",
          "112 MPH TOP SPEED",
          "600 HORSEPOWER",
          "7,435 LB-FT TORQUE",
          "11,000 LBS. TOWING CAPACITY",
        ],
      },
      {
        price: "EST. $99,990",
        option: "CYBERBEAST",
        description: [
          "DELIVERY IN 2025",
          "320 MI. RANGE (EST.)",
          "2.6 SEC. 0-60 MPH†",
          "130 MPH TOP SPEED",
          "8405HORSEPOWER",
          "10,296 LB-FT TORQUE",
          "11,000 LBS. TOWING CAPACITY",
        ],
      },
    ],
    purchasePriceDescription:
      "All prices are shown without incentives or est. 3-year gas savings.",
    savingPrices: [
      {
        price: "EST. $57,390*",
        option: "REAR-WHEEL DRIVE",
        description: [
          "AVAILABLE IN 2025",
          "250 MI. RANGE (EST.)",
          "6.5 SEC. 0-60 MPH",
        ],
      },
      {
        price: "EST. $76,390*",
        option: "ALL-WHEEL DRIVE",
        description: [
          "DELIVERY IN 2025",
          "340 MI. RANGE (EST.)",
          "4.1 SEC. 0-60 MPH",
          "112 MPH TOP SPEED",
          "600 HORSEPOWER",
          "7,435 LB-FT TORQUE",
          "11,000 LBS. TOWING CAPACITY",
        ],
      },
      {
        price: "EST. $96,390*",
        option: "CYBERBEAST",
        description: [
          "DELIVERY IN 2025",
          "320 MI. RANGE (EST.)",
          "2.6 SEC. 0-60 MPH†",
          "130 MPH TOP SPEED",
          "8405HORSEPOWER",
          "10,296 LB-FT TORQUE",
          "11,000 LBS. TOWING CAPACITY",
        ],
      },
    ],
    savingPriceDescription:
      "*Prices assume est. gas savings of $3,600 over 3 years. Cybertruck is likely to qualify for the federal tax credit later in 2024.",
  },
  learnMoreData: {
    poster: "/assets/mainpage-images/cybertruck/learnmore-images/poster.avif",
    specImage:
      "/assets/mainpage-images/cybertruck/learnmore-images/spec-image.avif",
    specDescription: {
      "TOWING CAPACITY": "11,000",
      "EST. RANGE": "340",
      "0-60 MPH": "2.6",
    },
    buildForAnyPlanet: {
      title: "Build for - any planet",
      video:
        "/assets/mainpage-images/cybertruck/learnmore-images/videos/1_build_for_anyplanet.webm",
      description:
        "DURABLE AND RUGGED ENOUGH TO GO ANYWHERE. TACKLE ANYTHING WITH ELECTRONICALLY ADAPTIVE AIR SUSPENSION THAT OFFERS 12” OF TRAVEL AND 16” OF CLEARANCE.",
      guideLink:
        "https://service.tesla.com/docs/Cybertruck/cybertruck_offroad_guide.pdf",
    },
    noPaintNoChips: {
      title: "No Paint, No Chips",
      video:
        "/assets/mainpage-images/cybertruck/learnmore-images/videos/2_nopaint_nochips.mp4",
      description:
        "AN ULTRA-HARD STAINLESS-STEEL EXOSKELETON HELPS TO REDUCE DENTS, DAMAGE AND LONG-TERM CORROSION. REPAIRS ARE SIMPLE AND QUICK.",
    },
    shatterResistant: {
      title: "Shatter-Resistant",
      video:
        "/assets/mainpage-images/cybertruck/learnmore-images/videos/3_shatter_resistant.mp4",
      description:
        "ARMOR GLASS CAN RESIST THE IMPACT OF A BASEBALL AT 70 MPH OR CLASS 4 HAIL. ACOUSTIC GLASS HELPS MAKE THE CABIN AS QUIET AS OUTER SPACE.",
    },
    beyondPrepared: {
      title: "Beyond - Prepared",
      video:
        "/assets/mainpage-images/cybertruck/learnmore-images/videos/4_beyond_prepared.mp4",
      description:
        "HAUL EVERYTHING YOU NEED WITH 2,500 POUNDS PAYLOAD AND 11,000 POUNDS TOWING CAPACITY—THE EQUIVALENT OF AN AVERAGE AFRICAN ELEPHANT. THE SUPER-TOUGH COMPOSITE BED DOESN’T NEED A LINER AND IS BIG ENOUGH FOR 4'X8’ CONSTRUCTION MATERIALS.",
    },
    advertisements: [
      {
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/advertise-images/pack_itup.avif",
        title: "Pack - It up",
        description:
          "ACCESS A 6’X4’ BED, PLUS EVEN MORE ROOM IN THE FRONT TRUNK, ON THE ROOF AND IN A HIDDEN GEAR LOCKER.",
      },
      {
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/advertise-images/load_itup.avif",
        title: "Load - It up",
        description:
          "WITH A MAXIMUM PAYLOAD OF 2,500 POUNDS AND 67 CUBIC FEET OF LOCKABLE STORAGE, CYBERTRUCK HAS ALL THE CAPACITY YOU NEED.",
      },
      {
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/advertise-images/lock_itup.avif",
        title: "Lock - It up",
        description:
          "AFTER YOU LOAD IT UP, LOCK IT UP FOR PEACE OF MIND—UNDER THE VAULT BED COVER. FOLD UP THE SEATS IN THE SECOND ROW FOR AN EXTRA 54 CUBIC FEET OF STORAGE.",
      },
    ],
    intoTheWild: {
      title: "Into the - Wild",
      image:
        "/assets/mainpage-images/cybertruck/learnmore-images/into_thewild.avif",
      description:
        "TRAVEL UP TO 340 MILES¹ ON A SINGLE CHARGE—ENOUGH TO GET YOU INTO THE BACKCOUNTRY AND BEYOND. RECOVER UP TO 136 MILES OF RANGE WITH JUST 15 MINUTES OF SUPERCHARGING.",
    },
    powerYourSide: {
      title: "Power - Your Side",
      image:
        "/assets/mainpage-images/cybertruck/learnmore-images/power_yourside.avif",
      description:
        "OPERATE YOUR TOOLS OR CHARGE ANY EV WITH INTEGRATED 120V AND 240V BED AND CABIN OUTLETS. DURING A GRID OUTAGE, PROVIDE UP TO 11.5 KW OF POWER DIRECTLY TO YOUR HOME TO HELP KEEP THE LIGHTS ON.",
    },
    dopamineOnTap: {
      title: "Dopamine - On Tap",
      video:
        "/assets/mainpage-images/cybertruck/learnmore-images/videos/5_dopamine_ontap.mp4",
      description:
        "GO 0-60 MPH IN JUST 2.6 SECONDS† IN BEAST MODE WHILE MAINTAINING HIGH-SPEED STABILITY. WITH STEER-BY-WIRE AND REAR STEERING, YOU GET THE HANDLING OF A SPORTS CAR AND A BETTER TURNING RADIUS THAN MOST SEDANS.",
    },
    insideOutside: {
      title: "Rugged Outside - Comfortable Inside",
      image:
        "/assets/mainpage-images/cybertruck/learnmore-images/inside_outside.avif",
      description:
        "IMMERSE YOURSELF IN A SPACIOUS, MODERN CABIN PACKED WITH ADVANCED TECHNOLOGY FEATURES AND ENTERTAINMENT.",
    },
    slideshows: [
      {
        title: "THEATER - ON WHEELS",
        description:
          "MASSIVE 18.5” INFINITY TOUCHSCREEN IN THE FRONT AND 9.4” TOUCHSCREEN IN THE BACK WITH AN ALL-NEW USER INTERFACE.",
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/theater_on_wheels.avif",
      },
      {
        title: "THEASUBLIME - AUDIOTER",
        description:
          "RECORDING STUDIO SOUND DYNAMICS WITH 15 SPEAKERS, INCLUDING 2 DEDICATED SUBWOOFERS AND DISTRIBUTED AMPLIFIERS.",
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/sublime_audio.avif",
      },
      {
        title: "CHARGE - EVERYTHING",
        description:
          "FAST-CHARGE YOUR PHONE, LAPTOP OR TOOLS FROM THE FRONT SEAT, BACK SEAT OR BED WITH WIRELESS CHARGING, 65W USB-C AND 120V/240V OUTLETS.",
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/charge_everything.avif",
      },
      {
        title: "BIOWEAPON - DEFENSE MODE",
        description:
          "BUILT-IN HOSPITAL GRADE HEPA FILTER HELPS PROVIDE PROTECTION FROM 99.97% OF AIRBORNE PARTICLES.",
        image:
          "/assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/bioweapon_defense_mode.avif",
      },
    ],
  },
};
