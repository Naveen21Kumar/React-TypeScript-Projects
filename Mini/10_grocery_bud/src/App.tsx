import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import type { NewItem } from "./types";

function App() {
  const [items, setItems] = useState(getLocalStorage());

  function setLocalStorage(item: NewItem[]) {
    localStorage.setItem("items", JSON.stringify(item));
  }

  function getLocalStorage(): NewItem[] {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  }

  const addItem = (name: string) => {
    if (!name) {
      toast.error("Please provide a value", {
        theme: "colored",
      });
      return;
    }
    const newItem = {
      id: nanoid(),
      name,
      completed: false,
    };
    const nextItem = [...items, newItem];
    setItems(nextItem);
    setLocalStorage(nextItem);
    toast.success("Item added to the list", {
      theme: "colored",
    });
  };

  function deleteItem(itemId: string) {
    const deleteItem = items.filter((item: NewItem) => item.id !== itemId);
    setItems(deleteItem);
    setLocalStorage(deleteItem);
    toast.success("Item deleted", {
      theme: "colored",
    });
  }

  function editItem(itemId: string) {
    const toggleItem = items.map((item: NewItem) => {
      if (item.id === itemId) {
        const nextCompleted = !item.completed;
        toast.info(
          nextCompleted ? "Item Completed!" : "Item marked incomplete",
          {
            theme: "colored",
          },
        );
        return { ...item, completed: nextCompleted };
      }
      return item;
    });
    setItems(toggleItem);
    setLocalStorage(toggleItem);
  }

  return (
    <section className="section-center">
      <h4>grocery bud</h4>
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
      <ToastContainer />
    </section>
  );
}

export default App;
