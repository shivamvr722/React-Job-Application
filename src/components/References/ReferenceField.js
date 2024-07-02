import InputField from "../subcomponents/InputField";
import referenceFieldFeeds from "./referenceDetailsFieldFeed";
import "./References.css";

export default function ReferenceField(){
  const refFieldFeeds = referenceFieldFeeds();
  const mappedRefFields = refFieldFeeds.map((obj, i)=>{
    return <InputField basic={obj} key={obj.title + i}/>
  })

  return(
    <div className="referenceDiv">
      {mappedRefFields}
    </div>
   )
}