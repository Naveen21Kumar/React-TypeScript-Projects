import "./App.css";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [tabs, setTabs]  = useState([]);
  const [currentItem, setCurrentItem]  = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTabs(data);
    }

  useEffect(() => {
    fetchData();
  }, []);
  
  const currentTab = tabs[currentItem];

  if(!currentTab) {
    return <div>loading...</div>
  }

  return <section>
     <BtnContainer tabs={tabs} setCurrentItem={setCurrentItem}/>
      <JobInfo {...currentTab}/>
  </section>;
}

export default App;
