import SingleItem from "./SingleItem";
import type { ItemsProps } from "./types";

const Items = ({ items, deleteItem, editItem }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            deleteItem={deleteItem}
            key={item.id}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
