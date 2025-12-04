import type { Person } from './types';

const SinglePerson = ({ person }: { person: Person }) => {
  const { id, name, image, age } = person;
  return (
    <li key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
};

export default SinglePerson;
