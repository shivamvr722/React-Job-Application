import InputField from "../subcomponents/InputField";
import referenceFieldFeeds from "./referenceDetailsFieldFeed";
import "./References.css";

export default function ReferenceField(){
  const refFieldFeeds = referenceFieldFeeds();

  const mappedRefFields = refFieldFeeds.map((obj, i)=>{
    return <InputField basic={obj} key={obj.title + i}/>
  })

  return(
    <div>
      <div className="referenceDiv">
        {mappedRefFields[0]}
        {mappedRefFields[1]}
        {mappedRefFields[2]}
      </div>
      <div className="referenceDiv">
        {mappedRefFields[3]}
        {mappedRefFields[4]}
        {mappedRefFields[5]}
      </div>
    </div>
   )
}