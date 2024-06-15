export interface MenuItem {
  url: string;
  title: string;
  icon: string;
  order?: number;
}

export interface MenuSection {
  title: string;
  order?: number;
  menuItems: MenuItem[];
}

export interface Menu {
  isMenuLoading: boolean;
  menuSections?: MenuSection[];
}
