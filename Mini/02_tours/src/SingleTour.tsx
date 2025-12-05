import { useState } from 'react';
import type { Tour } from './types';

type Props = {
  tour: Tour;
  removeTour: (id: string) => void;
};

const SingleTour = ({ tour, removeTour }: Props) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const { id, name, info, image, price } = tour;
  return (
    <article key={id} className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {isReadMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className='info-btn'>
            {isReadMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default SingleTour;
