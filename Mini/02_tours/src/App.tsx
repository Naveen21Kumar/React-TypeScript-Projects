import { useEffect, useState } from 'react';
import './App.css';
import Tours from './Tours';
import type { Tour } from './types';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // for Refresh button
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const loadTours = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    loadTours();
  }, []);

  const removeTour = (id: string) => {
    const removeTour = tours.filter((tour) => tour.id !== id);
    setTours(removeTour);
  };

  if (isLoading)
    return (
      <main>
        <h2 className='loading'></h2>
      </main>
    );

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
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
