import React, { useState } from 'react';
import './App.css';
import data from './data';
import { nanoid } from 'nanoid';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main>
      <section className='section-center'>
        <h4>tired of boring lorem ipsum?</h4>

        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>Paragraphs:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={count}
            min='1'
            max='8'
            step='1'
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>

        <article className='lorem-text'>
          {text.map((item) => (
            <p key={nanoid()}>{item}</p>
          ))}
        </article>
      </section>
    </main>
  );
}

export default App;
