import Duties from './Duties';
import type { JobData } from './App';

const JobInfo = ({
  jobs,
  currentItem,
}: {
  jobs: JobData[];
  currentItem: number;
}) => {
  const { dates, title, duties, company } = jobs[currentItem];
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
