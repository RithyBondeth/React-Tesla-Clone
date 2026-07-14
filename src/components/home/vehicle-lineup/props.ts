import type { CybertruckData } from "../../../utils/types/cybertruck";
import type { Vehicle } from "../../../utils/types/vehicle";

export interface VehicleLineupProps {
  cybertruck?: CybertruckData;
  vehicles: Vehicle[];
}
