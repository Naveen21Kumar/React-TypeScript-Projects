import { useState } from "react";
import "./App.css";
import Values from "values.js";
import Form from "./Form";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color: string) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      toast.error(message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" />
    </main>
  );
}

export default App;
