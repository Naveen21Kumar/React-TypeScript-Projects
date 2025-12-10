import { useEffect, useState } from 'react';
import './App.css';
import JobInfo from './JobInfo';
import ButtonContainer from './ButtonContainer';

const url = 'https://www.course-api.com/react-tabs-project';

export type JobData = {
  id: string;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  if (isLoading)
    return (
      <section className='jobs-center'>
        <p>Loading....</p>
      </section>
    );

  return (
    <section className='jobs-center'>
      <ButtonContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
