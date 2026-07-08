import Duties from "./Duties";
import type { JobInfoProps } from "./types";


function JobInfo({title, company, dates, duties}:JobInfoProps){
  return <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties}/>
    </article>
}


export default JobInfo;