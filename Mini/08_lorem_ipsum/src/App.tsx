import { useState, type SyntheticEvent } from "react";
import "./App.css";
import data from "./data";
import { nanoid } from "nanoid";

function App() {
  const [amount, setAmount] = useState<number>(1);

  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(data.slice(0, amount));
  };

  return (
    <main>
      <section className="section-center">
        <h4>tired of boring lorem ipsum?</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            min="1"
            max="8"
            step="1"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button type="submit" className="btn">
            {" "}
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((sentence) => {
            return <p key={nanoid()}>{sentence}</p>;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
