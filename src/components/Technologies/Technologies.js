import CheckboxField from "../subcomponents/CheckBoxField"
import RadioField from "../subcomponents/RadioField";
import technologyFieldFeeds from "./TechnologiesFieldFeed";
import technologyFieldRadios from "./technologyStatusFields";
import Heading from "../headings/Headings";
import "./Technologies.css"

export default function Technology(){
  const techCheckFeeds = technologyFieldFeeds();
  const techRadioFeeds = technologyFieldRadios();
  const mappedTechCheckCollection = techCheckFeeds.map((obj, i)=>{
    return <CheckboxField data={obj} key={obj.title + Math.floor(Math.random() * 100)} />
  });
  const mappedRadioCheckCollection = techRadioFeeds.map((obj, i)=>{
    return <RadioField data={obj} key={obj.title + Math.floor(Math.random() * 100)} />
  });
  return(
    <div>
      <Heading heading={"Technology Known"} />
      <div className="lang">
        {mappedTechCheckCollection[0]}
        {mappedRadioCheckCollection[0]}
        {mappedRadioCheckCollection[1]}
        {mappedRadioCheckCollection[2]}
      </div>
      <div className="lang">
        {mappedTechCheckCollection[1]}
        {mappedRadioCheckCollection[3]}
        {mappedRadioCheckCollection[4]}
        {mappedRadioCheckCollection[5]}
      </div>
      <div className="lang">
        {mappedTechCheckCollection[2]}
        {mappedRadioCheckCollection[6]}
        {mappedRadioCheckCollection[7]}
        {mappedRadioCheckCollection[8]}
      </div>
    </div>
  )
}