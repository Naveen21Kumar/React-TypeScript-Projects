export interface NewItem {
  id: string;
  name: string;
  completed: boolean;
}

export type ItemsProps = {
  items: NewItem[];
  deleteItem: (id: string) => void;
  editItem: (id: string) => void;
};

export type ItemProps = {
  item: NewItem;
  deleteItem: (id: string) => void;
  editItem: (id: string) => void;
};
