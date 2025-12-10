import type { JobData } from './App';

type ButtonProps = {
  jobs: JobData[];
  currentItem: number;
  setCurrentItem: (index: number) => void;
};

function ButtonContainer({ jobs, currentItem, setCurrentItem }: ButtonProps) {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonContainer;
