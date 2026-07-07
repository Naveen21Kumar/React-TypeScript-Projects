import "./App.css";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs]  = useState([]);
  const [currentItem, setCurrentItem]  = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
    }

  useEffect(() => {
    fetchData();
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
