import type { LinkButton } from "./vehicle";

interface CybertruckPrice {
  price: string;
  option: string;
  description: string[];
}

interface CybertruckMediaFeature {
  title: string;
  description: string;
  image?: string;
  video?: string;
}

interface CybertruckSlideshowItem {
  title: string;
  description: string;
  image: string;
}

export interface CybertruckData {
  title: {
    text: string;
    image: string;
  };
  poster: string;
  buttons: LinkButton[];
  orderData: {
    poster: string;
    purchasePrices: CybertruckPrice[];
    purchasePriceDescription: string;
    savingPrices: CybertruckPrice[];
    savingPriceDescription: string;
  };
  learnMoreData: {
    poster: string;
    specImage: string;
    specDescription: {
      "TOWING CAPACITY": string;
      "EST. RANGE": string;
      "0-60 MPH": string;
    };
    buildForAnyPlanet: CybertruckMediaFeature & {
      guideLink: string;
      video: string;
    };
    noPaintNoChips: CybertruckMediaFeature & { video: string };
    shatterResistant: CybertruckMediaFeature & { video: string };
    beyondPrepared: CybertruckMediaFeature & { video: string };
    advertisements: (CybertruckMediaFeature & { image: string })[];
    intoTheWild: CybertruckMediaFeature & { image: string };
    powerYourSide: CybertruckMediaFeature & { image: string };
    dopamineOnTap: CybertruckMediaFeature & { video: string };
    insideOutside: CybertruckMediaFeature & { image: string };
    slideshows: CybertruckSlideshowItem[];
  };
}
