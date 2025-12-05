import type { Tour } from './types';
import SingleTour from './SingleTour';

type Props = {
  tours: Tour[];
  removeTour: (id: string) => void;
};

const Tours = ({ tours, removeTour }: Props) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return (
            <SingleTour tour={tour} removeTour={removeTour} key={tour.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
