import Duties from "./Duties";


function JobInfo({title, company, dates, duties}){
  return <article>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties}/>
    </article>
}


export default JobInfo;