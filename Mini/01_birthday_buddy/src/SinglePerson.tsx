import type { Person } from './types';

const SinglePerson = ({ person }: { person: Person }) => {
  const { name, image, age } = person;
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default SinglePerson;
