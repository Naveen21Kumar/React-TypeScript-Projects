import { longList } from "./data";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = () => {
  const [people] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson - 1 + people.length) % people.length;
      return newPerson;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newPerson = (oldPerson + 1) % people.length;
      return newPerson;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="slider-container">
      {people.map((slide, index) => {
        const { image, id, name, title, quote } = slide;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${(index - currentPerson) * 100}%`,
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
