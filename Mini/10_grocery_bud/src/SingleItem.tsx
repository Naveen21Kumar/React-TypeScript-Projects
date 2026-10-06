import type { ItemProps } from "./types";

const SingleItem = ({ item, deleteItem, editItem }: ItemProps) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{ textDecoration: item.completed ? "line-through" : undefined }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => deleteItem(item.id)}
      >
        delete
      </button>
    </article>
  );
};

export default SingleItem;
