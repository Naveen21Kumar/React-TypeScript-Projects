import { useState } from 'react';
import './App.css';
import data, { type Person } from './data.ts';

function App() {
  const [people, setPeople] = useState<Person[]>(data);

  const removePerson = (id: number) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <section>
            {people.map((person) => {
              const { id, name, age, image } = person;
              return (
                <article key={id} className='person'>
                  <img src={image} alt={name} className='img' />
                  <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                  </div>
                  <button
                    className='btn btn-red'
                    onClick={() => removePerson(id)}>
                    Remove
                  </button>
                </article>
              );
            })}
          </section>
          <button
            type='button'
            className='btn btn-block'
            onClick={() => setPeople([])}>
            Clear all
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
