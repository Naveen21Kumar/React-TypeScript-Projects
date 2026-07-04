import { v4 as  uuid } from "uuid";

function BtnContainer({tabs, setCurrentItem}) {  
  return (
    <div>{tabs.map((tab, index)=>{
        return <button key={uuid()} onClick={()=>{setCurrentItem(index)}}>{tab.company}</button>
    })}</div>
  )
}

export default BtnContainer