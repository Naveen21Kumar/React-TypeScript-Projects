import SingleItem from "./SingleItem";

const Items = ({ items, deleteItem, editItem }) => {
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
