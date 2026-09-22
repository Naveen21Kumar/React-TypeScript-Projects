import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItemName);
    setNewItemName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          name="item"
          onChange={(e) => setNewItemName(e.target.value)}
          value={newItemName}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
