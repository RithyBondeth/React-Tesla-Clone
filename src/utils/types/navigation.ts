export interface NavigationAction {
  external?: boolean;
  label: string;
  link: string;
}

export interface NavigationProduct {
  productActions: NavigationAction[];
  productName: string;
  productImage: string;
  productLink: string;
}

export interface NavigationLink {
  external?: boolean;
  listName: string;
  listLink: string;
}

export interface NavigationMenu {
  name: string;
  items: {
    products: NavigationProduct[];
    links: NavigationLink[];
  };
}
