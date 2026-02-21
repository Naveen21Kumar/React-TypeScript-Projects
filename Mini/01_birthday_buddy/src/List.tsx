import type { Person } from './types';
import SinglePerson from './SinglePerson';

const List = ({ people }: { people: Person[] }) => {
  return (
    <section>
      {people.map((person) => {
        return <SinglePerson person={person} key={person.id} />;
      })}
    </section>
  );
};

export default List;
