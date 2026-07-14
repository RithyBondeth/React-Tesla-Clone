export interface NavigationProduct {
  productName: string;
  productImage: string;
  productLink: string;
  productDescription: string[];
}

export interface NavigationLink {
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
