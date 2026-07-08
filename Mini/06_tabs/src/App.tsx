import "./App.css";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
import type { Jobs } from "./types";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs]  = useState<Jobs[]>([]);
  const [currentItem, setCurrentItem]  = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json() as Jobs[];
    setJobs(data);
    setIsLoading(false);
    }

  useEffect(() => {
    fetchJobs();
  }, []);
  
  const currentJob = jobs[currentItem];

  if(isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">
     <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem}/>
      <JobInfo {...currentJob}/>
  </section>;
}

export default App;
