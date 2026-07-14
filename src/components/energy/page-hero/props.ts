export interface EnergyHeroAction {
  external?: boolean;
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface EnergyPageHeroProps {
  actions: EnergyHeroAction[];
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  imageHeight: number;
  title: string;
}
