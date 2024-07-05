import CheckboxField from "../subcomponents/CheckBoxField"
import RadioField from "../subcomponents/RadioField";
import technologyFieldFeeds from "./TechnologiesFieldFeed";
import technologyFieldRadios from "./technologyStatusFields";
import Heading from "../headings/Headings";
import "./Technologies.css"
import { ErrorMessage } from "formik";


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
      <div >
        <div className="tech">
          {mappedTechCheckCollection[0]}
          {mappedRadioCheckCollection[0]}
          {mappedRadioCheckCollection[1]}
          {mappedRadioCheckCollection[2]}
        </div>
        <div className="error">
          <center>
            <ErrorMessage name="java" />
          </center>
        </div>
      </div>
      <div>
        <div className="tech">
        {mappedTechCheckCollection[1]}
        {mappedRadioCheckCollection[3]}
        {mappedRadioCheckCollection[4]}
        {mappedRadioCheckCollection[5]}
        </div>
        <div className="error">
          <center>
            <ErrorMessage name="python" />
          </center>
        </div>
      </div>
      <div>
        <div className="tech">
          {mappedTechCheckCollection[2]}
          {mappedRadioCheckCollection[6]}
          {mappedRadioCheckCollection[7]}
          {mappedRadioCheckCollection[8]}
        </div>
        <div className="error">
          <center>
            <ErrorMessage name="js" />
          </center>
        </div>
      </div>
      <div>
      </div>
      
    </div>
  )
}