import "./BasicDetails.css"
import InputField from "../subcomponents/InputField";
import basicDetailsFieldFeed from "./basicDetailFieldFeed";
import RadioField from "../subcomponents/RadioField";
import Heading from "../headings/Headings";


function Relationship(){
  return(
    <div>
      <label htmlFor="relation">Relationship: </label>
      <select name="relation" id="relation">
        <option value="single">Single</option>
        <option value="married">Married</option>
      </select>
    </div>
  )
}

const radioData = [
  {
    "title": "Male",
    "value": "male",
    "name": "gender",
  },
  {
    "title": "Female",
    "value": "female",
    "name": "gender",
  },
  {
    "title": "Other",
    "value": "other",
    "name": "gender",
  },
]

export default function BasicDetails(){
  const basicInfoCollectionText = basicDetailsFieldFeed();

  const mappedCollection = basicInfoCollectionText.map((basic, i)=>{
    return <InputField basic={basic} key={basic.title  + 1}/>;
  })

  const mappedRadioCollection = radioData.map((obj, i)=>{
    return <RadioField data={obj} key={obj.title + i} />
  })
  


  return(
    <div className="fields">
      <Heading heading={"Basic Details"} />
      {mappedCollection}
      <Relationship />
      <div className="radios">
        {mappedRadioCollection}
      </div>
    </div>
  );
}