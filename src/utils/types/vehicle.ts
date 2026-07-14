export interface LinkButton {
  label: string;
  link: string;
}

export interface VehicleOption {
  optionName: string;
  optionPrice: string;
  optionMachine: [string, string, string];
  optionDescription: string;
}

export interface VehicleColor {
  colorName: string;
  colorPrice: string;
  colorIcon: string;
  primaryWheelImages: string[];
  secondaryWheelImages: string[];
}

export interface VehicleWheel {
  wheelName: string;
  wheelPrice: string;
  wheelDescription: string[];
  wheelIcon: string;
}

export interface VehicleInterior {
  interiorDescription: string;
  interiorPrice: string;
  interiorIcon: string;
  interiorImages: Record<string, string>;
}

export interface SteeringControl {
  steeringName: string;
  steeringIcon: string;
  steeringImage: string;
}

export interface VehicleAccessory {
  accessoryDescription: string;
  accessoryPrice: string;
}

export interface Vehicle {
  title: string;
  subtitle: string;
  description: string;
  hasDarkText: boolean;
  poster: string;
  buttons: LinkButton[];
  orderData: {
    name: string;
    machine?: {
      range: string;
      speed: string;
      mph: string;
    };
    options: VehicleOption[];
    colors: VehicleColor[];
    wheels: VehicleWheel[];
    interiors: VehicleInterior[];
    seatingLayouts: string[];
    steeringControls: SteeringControl[];
    accessories: VehicleAccessory[];
    lastOrders: [string, string, string];
  };
}

export interface AutopilotVideo {
  technology: string;
  video: string;
}

export interface SlideClickIndex {
  forward: number;
  back: number;
}
