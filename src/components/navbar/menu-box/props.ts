import type { NavigationMenu } from "../../../utils/types/navigation";

export interface MenuBoxProps {
  hasAnnouncement?: boolean;
  menuList: NavigationMenu[];
  menuName: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
