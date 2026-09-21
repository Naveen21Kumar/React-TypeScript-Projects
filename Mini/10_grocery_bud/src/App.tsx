import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState(getLocalStorage());

  const [newItemName, setNewItemName] = useState("");

  function setLocalStorage(item) {
    localStorage.setItem("items", JSON.stringify(item));
  }

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("items")) || [];
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem();
  }

  const addItem = () => {
    const newItem = {
      id: nanoid(),
      newItemName,
    };
    const nextItem = [...items, newItem];
    setItems(nextItem);
    setLocalStorage(nextItem);
    setNewItemName("");
  };

  function deleteItem(id) {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
    setLocalStorage(deleteItem);
  }

  return (
    <section className="section-center">
      <h4>grocery bud</h4>
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
      <div className="items">
        {items.map((item) => {
          return (
            <div className="single-item" key={item.id}>
              <input type="checkbox" />
              <p>{item.newItemName}</p>
              <button
                type="button"
                className="btn remove-btn"
                onClick={() => deleteItem(item.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
