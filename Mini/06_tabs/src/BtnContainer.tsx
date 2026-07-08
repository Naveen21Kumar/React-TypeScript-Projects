import { v4 as  uuid } from "uuid";
import type { Jobs } from "./types";
import type { Dispatch, SetStateAction } from "react";

interface BtnContainerProps {
  jobs:Jobs[];
  currentItem:number;
  setCurrentItem: Dispatch<SetStateAction<number>>;
}

function BtnContainer({jobs, setCurrentItem, currentItem}:BtnContainerProps) {  
  return (
    <div className="btn-container">{jobs.map((job, index)=>{
        return <button className={currentItem === index ? 'job-btn active-btn' :'job-btn'} key={uuid()} onClick={()=>{setCurrentItem(index)}}>{job.company}</button>
    })}</div>
  )
}

export default BtnContainer