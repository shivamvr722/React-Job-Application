import InputField from "../subcomponents/InputField";
import educationFieldFeeds from "./educationDetailsFiledFeed";

export default function EducationField(){
  const edufieldFeeds = educationFieldFeeds();

  const mappedEduFields = edufieldFeeds.map((obj, i)=>{
    obj.name = obj.name + i;
    console.log(obj.name);
    // console.log(obj);
    return <InputField basic={obj} key={obj.title + i}/>
  })
  
  console.log(mappedEduFields)
  return(
    <div className="edufield">
      {mappedEduFields}
    </div>
   )
}