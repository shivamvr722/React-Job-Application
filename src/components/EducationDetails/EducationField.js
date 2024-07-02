import InputField from "../subcomponents/InputField";
import educationFieldFeeds from "./educationDetailsFiledFeed";

export default function EducationField(){
  const edufieldFeeds = educationFieldFeeds();
  const mappedEduFields = edufieldFeeds.map((obj, i)=>{
    return <InputField basic={obj} key={obj.title + i}/>
  })

  return(
    <div className="edufield">
      {mappedEduFields}
    </div>
   )
}