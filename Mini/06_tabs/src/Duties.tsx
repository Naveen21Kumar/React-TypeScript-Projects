import { v4 as  uuid } from "uuid";
import { FaAnglesRight } from "react-icons/fa6";

const Duties = ({duties}:{duties:string[]}) => {
  return (
    <div>
        {duties.map((duty)=> {
          return <div className="job-desc" key={uuid()}>
            <FaAnglesRight className="job-icon"/>
            <p>{duty}</p>
          </div>
        })}
      </div>
  )
}

export default Duties