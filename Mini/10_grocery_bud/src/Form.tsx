import { useState } from "react";

const Form = ({ addItem }: { addItem(name: string): void }) => {
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
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
