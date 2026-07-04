import { v4 as  uuid } from "uuid";

const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty)=> {
          return <p key={uuid()}>{duty}</p>
        })}
      </div>
  )
}

export default Duties