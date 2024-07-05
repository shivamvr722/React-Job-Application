import "./preferences.css";
import PreferenceField from "./PreferenceField";
import Heading from "../headings/Headings";
import { Field } from "formik";

function Department(){
  return(
    <div>
      <label htmlFor="department">Department: </label>
      <Field as="select" name="department" id="department">
        <option value="account">Account</option>
        <option value="development">Development</option>
        <option value="hr">Human Resource</option>
        <option value="marketing">marketing</option>
      </Field>
    </div>
  )
}


function PreferenceLocation(){
  return(
    <div>
      <label htmlFor="plocation">Prefered location: </label>
      <Field as="select" name="plocation" id="plocation">
        <option value="ahmedabad">Ahmedabad</option>
        <option value="baroda">Baroda</option>
        <option value="rajkot">Rajkot</option>
        <option value="surat">Surat</option>
      </Field>
    </div>
  )
}

export default function Preference(){
  return(
    <div className="preferenceDiv">
      <Heading heading={"Preference Details"} />
      <div className="deploc">
        <Department />
        <PreferenceLocation />
      </div>
      <PreferenceField />
    </div>
  )
}