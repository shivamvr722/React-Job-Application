import CheckboxField from "../subcomponents/CheckBoxField"
import languageFieldFeeds from "./languageFieldFeed"
import Heading from "../headings/Headings";
import { ErrorMessage } from "formik";
import "./language.css"

export default function Language(){
  const lanFieldFeeds = languageFieldFeeds()
  const mappedCheckCollection = lanFieldFeeds.map((obj, i)=>{
    return <CheckboxField data={obj} key={obj.title + Math.floor(Math.random() * 100)} />
  });

  return(
    <div>
      <div className="languages">
        <Heading heading={"Language Details"} />
        <div className="lang">
          {mappedCheckCollection[0]}
          {mappedCheckCollection[1]}
          {mappedCheckCollection[2]}
          {mappedCheckCollection[3]}
        </div>
        <div className="lang">
          {mappedCheckCollection[4]}
          {mappedCheckCollection[5]}
          {mappedCheckCollection[6]}
          {mappedCheckCollection[7]}
        </div>
        <div className="lang">
          {mappedCheckCollection[8]}
          {mappedCheckCollection[9]}
          {mappedCheckCollection[10]}
          {mappedCheckCollection[11]}
        </div>
      </div>
      <div className="errordiv">
        <center>
          <ErrorMessage name="language"/>
        </center>
      </div>
    </div>
  )
}