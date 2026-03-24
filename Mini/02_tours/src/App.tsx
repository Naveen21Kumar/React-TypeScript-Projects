import './App.css';
import Loading from './Loading';
import { useState, useEffect } from 'react';
import Tours from './Tours';
import type { Tour } from './types';

const url = 'https://www.course-api.com/react-tours-project/';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState<Tour[]>([]);
  const [error, setError] = useState<string | null>(null)

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // for Refresh button
  const fetchTours = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch tours')
      }
      const tours = await response.json();
      setTours(tours)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    }
    setIsLoading(false);
  }

  useEffect(function () {
    const loadTours = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch tours')
        }
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
      setIsLoading(false);
    }
    loadTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className='title'>
          <h2>Error : {error}</h2>
          <button
            type='button'
            className='btn'
            onClick={() => fetchTours()}
            style={{ marginTop: '2rem' }}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left </h2>
          <button
            type='button'
            className='btn'
            onClick={() => fetchTours()}
            style={{ marginTop: '2rem' }}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
