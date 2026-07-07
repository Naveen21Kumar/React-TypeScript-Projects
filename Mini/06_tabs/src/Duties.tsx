import { v4 as  uuid } from "uuid";
import { FaAnglesRight } from "react-icons/fa6";

const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty)=> {
          return <div className="job-desc">
            <FaAnglesRight className="job-icon"/>
            <p key={uuid()}>{duty}</p>
          </div>
        })}
      </div>
  )
}

export default Duties