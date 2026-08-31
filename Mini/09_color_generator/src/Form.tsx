import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          name="color"
          id="color"
          onChange={handleChange}
          value={color}
        />
        <input
          type="text"
          name="colortext"
          id="colortext"
          placeholder="#f15025"
          value={color}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn"
          style={{ background: `${color}` }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
