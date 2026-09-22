import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";

function App() {
  const [items, setItems] = useState(getLocalStorage());

  function setLocalStorage(item) {
    localStorage.setItem("items", JSON.stringify(item));
  }

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("items")) || [];
  }

  const addItem = (name) => {
    const newItem = {
      id: nanoid(),
      name,
      completed: false,
    };
    const nextItem = [...items, newItem];
    setItems(nextItem);
    setLocalStorage(nextItem);
  };

  function deleteItem(itemId) {
    const deleteItem = items.filter((item) => item.id !== itemId);
    setItems(deleteItem);
    setLocalStorage(deleteItem);
  }

  function editItem(itemId) {
    const toggleItem = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setItems(toggleItem);
    setLocalStorage(toggleItem);
  }

  return (
    <section className="section-center">
      <h4>grocery bud</h4>
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
    </section>
  );
}

export default App;
