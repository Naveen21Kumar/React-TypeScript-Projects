import type { Person } from './types';
import SinglePerson from './SinglePerson';

const List = ({ people }: { people: Person[] }) => {
  return (
    <ul>
      {people.map((person) => {
        return <SinglePerson person={person} key={person.id} />;
      })}
    </ul>
  );
};

export default List;
