const SingleItem = ({ item, deleteItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p>{item.name}</p>
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
