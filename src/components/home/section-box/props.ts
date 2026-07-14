import type { Vehicle } from "../../../utils/types/vehicle";

export interface VehicleHighlight {
  label: string;
  value: string;
}

export interface SectionBoxProps {
  vehicle: Vehicle;
  promotion: string;
  supportingText: string;
  highlights: VehicleHighlight[];
  showScrollCue?: boolean;
}
