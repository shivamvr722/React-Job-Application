import InputField from "../subcomponents/InputField";
import experienceFieldFeeds from "./experienceDetailsFieldFeed";
import "./Experience.css";

export default function ExpericeField(){
  const expfieldFeeds = experienceFieldFeeds();
  const mappedExpFields = expfieldFeeds.map((obj, i)=>{
    return <InputField basic={obj} key={obj.title + i}/>
  })

  return(
    <div className="experienceField">
      {mappedExpFields}
    </div>
   )
}