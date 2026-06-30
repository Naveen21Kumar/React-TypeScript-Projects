export interface MenuProps {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

export interface MenuComponentProps {
  menu: MenuProps[];
}

export interface MenuItemProps {
  title: string;
  img: string;
  price: number;
  desc: string;
}
