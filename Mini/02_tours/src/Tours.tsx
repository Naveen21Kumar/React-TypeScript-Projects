import SingleTour from './SingleTour';
import type { Tour } from './types';

type TourProps = {
  tours: Tour[];
  removeTour: (id: string) => void
}

const Tours = ({ tours, removeTour }: TourProps) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <SingleTour {...tour} key={tour.id} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
