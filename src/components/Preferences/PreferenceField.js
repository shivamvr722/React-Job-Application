import InputField from "../subcomponents/InputField";
import preferenceFieldFeeds from "./preferenceDetailsFieldFeed";
import "./preferences.css";

export default function PreferenceField(){
  const prefFieldFeeds = preferenceFieldFeeds();
  const mappedPrefFields = prefFieldFeeds.map((obj, i)=>{
    return <InputField basic={obj} key={obj.title + i}/>;
  })

  return(
    <div className="preferenceFields">
      {mappedPrefFields}
    </div>
   )
}