import { useState } from 'react';
import './App.css';
import people from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function checkNumber(number: number) {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  }

  // Prev Person
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  // Next Person
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  // Random Person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  // ********** MODULUS OPERATOR ********** //

  // Prev Person (Modulus Operator)
  // const prevPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = (currentIndex - 1 + people.length) % people.length;
  //     return newIndex;
  //   });
  // };

  // Next Person (Modulus Operator)
  // const nextPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = (currentIndex + 1) % people.length;
  //     return newIndex;
  //   });
  // };

  // Random Person (Modulus Operator)
  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * people.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   const newIndex = randomNumber % people.length;
  //   setIndex(newIndex);
  // };

  // ********** MODULUS OPERATOR ********** //

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
