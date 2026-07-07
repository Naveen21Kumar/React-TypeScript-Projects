import { v4 as  uuid } from "uuid";

function BtnContainer({jobs, setCurrentItem, currentItem}) {  
  return (
    <div className="btn-container">{jobs.map((job, index)=>{
        return <button className={currentItem === index ? 'job-btn active-btn' :'job-btn'} key={uuid()} onClick={()=>{setCurrentItem(index)}}>{job.company}</button>
    })}</div>
  )
}

export default BtnContainer